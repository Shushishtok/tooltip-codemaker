"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var readline = require("readline");
var Language;
(function (Language) {
    Language["None"] = "none";
    Language["Brazilian"] = "brazilian";
    Language["Bulgarian"] = "bulgarian";
    Language["Czech"] = "czech";
    Language["Danish"] = "danish";
    Language["English"] = "english";
    Language["Finnish"] = "finnish";
    Language["French"] = "french";
    Language["German"] = "german";
    Language["Greek"] = "greek";
    Language["Hungarian"] = "hungarian";
    Language["Italian"] = "italian";
    Language["Japanese"] = "japanese";
    Language["Koreana"] = "koreana";
    Language["Latam"] = "latam";
    Language["Norwegian"] = "norwegian";
    Language["Polish"] = "polish";
    Language["Portuguese"] = "portuguese";
    Language["Russian"] = "russian";
    Language["Schinese"] = "schinese";
    Language["Spanish"] = "spanish";
    Language["Swedish"] = "swedish";
    Language["TChinese"] = "tchinese";
    Language["Thai"] = "thai";
    Language["Turkish"] = "turkish";
    Language["Ukrainian"] = "ukrainian";
    Language["Vietnamese"] = "vietnamese";
})(Language || (Language = {}));
var filename = "outputCode.ts";
var outputFilePath = "./" + filename;
var signaturePath = "./signature.txt";
var endingPath = "./ending.txt";
var AbilityMapper = new Map();
var Abilities = new Map();
var Modifiers = new Map();
var StandardTooltips = new Map();
var code = "";
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Please provide the main lanaguage, e.g. 'english'. Default to english. ", function (answer) {
    // Default to english
    if (answer == "") {
        answer = "english";
    }
    var addon_name = "addon_" + answer + ".txt";
    var directory = "./localization/";
    var filepath = directory + addon_name;
    if (!fs.existsSync(filepath)) {
        console.log("The addon file for language " + answer + " doesn't seem to exist. Verify the files are in the localization folder and make sure to only type their language.");
        rl.close();
        return;
    }
    // Main language, and preparation
    PrepareFile();
    ParseLocalizationFile(filepath, true);
    GroupAbilities();
    ReuniteRemainingAbilities();
    // Every non-main language
    ParseLocalizationDirectory(directory, filepath);
    // Actually writing to output    
    AddStandardTooltips();
    AddAbilities();
    AddModifiers();
    FinishFile();
    console.log("Operation completed successfully! Please check the result in the file " + filename + " located in the same folder as the codemaker.");
    rl.close();
});
function PrepareFile() {
    // Create or clean the output file
    var fd = fs.openSync(outputFilePath, 'w');
    fs.closeSync(fd);
    // Add the necessary signature    
    code += fs.readFileSync(signaturePath) + "\n";
}
function FinishFile() {
    code += fs.readFileSync(endingPath);
    fs.writeFile(outputFilePath, code, function () { });
}
function ParseLocalizationDirectory(directory, main_file_path) {
    // Discover all files in the directory, EXCEPT the main file that was already parsed
    var files = fs.readdirSync(path.join(__dirname, directory));
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        var filepath = directory + file;
        if (filepath != main_file_path) {
            ParseLocalizationFile(filepath, false);
        }
    }
}
function ParseLocalizationFile(filepath, main) {
    var language_regex = /addon_(\w+)/;
    var language = language_regex.exec(filepath)[1];
    var lines = fs.readFileSync(filepath).toString().replace(/\r\n/gm, '\n').split("\n");
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        ParseLine(line, main, language);
    }
}
function ParseLine(line, main, language) {
    // Ignore comments
    var regex = /^\s*\/\//;
    if (regex.test(line))
        return;
    // Ignore the Language token
    if (line.indexOf('"Language"') != -1)
        return;
    // Only apply on valid lines. If this isn't any "something" "something" line, just throw it away
    regex = /".*?\"\s*".*?"/;
    if (!regex.test(line)) {
        console.log("Discarding line: ", line);
        return;
    }
    // Ignore lines with `[english]` at the start of it
    regex = /^"(?:\[english\])/;
    if (regex.test(line))
        return;
    // Check if the line is an ability. If it is, stop checking    
    if (ParseAbility(line, main, language))
        return;
    // Check if the line is a modifier. If it is, stop checking
    if (ParseModifier(line, main, language))
        return;
    // Everything that isn't an ability or a modifier is considered a standard tooltip
    ParseStandardTooltip(line, main, language);
}
function ParseAbility(line, main, language) {
    // Check if it is an ability; return if not
    var regex = /"DOTA_Tooltip_ability_(.*)"\s*"(.*)"/i;
    if (!regex.test(line))
        return false;
    // It is an ability! Let's get its key and value
    var ability_key = line.match(regex)[1];
    var ability_value = line.match(regex)[2];
    if (main) {
        // Insert into the ability array
        AbilityMapper.set(ability_key, ability_value);
    }
    else {
        IterateAbilitiesMapForLanguage(ability_key, ability_value, language);
    }
    return true;
}
function ParseModifier(line, main, language) {
    var regex = /(modifier_.*)"\s*"(.*)"/i;
    if (!regex.test(line))
        return false;
    // It is a modifier! Let's get its key and value
    var modifier_key = line.match(regex)[1];
    var modifier_value = line.match(regex)[2];
    // Get the class of the modifier
    regex = /(\w+?)(?:_Description)?$/i;
    var modifier_class = modifier_key.match(regex)[1];
    // Value can be either name or description, so find that out!
    var name = false;
    regex = /\w+_Description/i;
    if (!regex.test(modifier_key))
        name = true;
    // Main language
    if (main) {
        // Check if it exists in the Modifier map
        var modifier_object = void 0;
        if (Modifiers.has(modifier_class)) {
            modifier_object = Modifiers.get(modifier_class);
        }
        if (!modifier_object) {
            // Create a new modifier object and assign the classname to it
            modifier_object =
                {
                    modifier_classname: modifier_class
                };
        }
        // Add the value to the object
        if (name) {
            modifier_object.name = modifier_value;
        }
        else {
            modifier_object.description = modifier_value;
        }
        // Register the modifier in the Modifiers map
        Modifiers.set(modifier_class, modifier_object);
    }
    else {
        // Check if the laguage has a proper enum
        if (GetLanguageFromString(language) === Language.None) {
            return true;
        }
        // Find the key - you should always be able to do so
        if (Modifiers.has(modifier_class)) {
            var modifier_object = Modifiers.get(modifier_class);
            var language_override = void 0;
            // If the language override array doesn't exist yet, create it and set it        
            if (!modifier_object.language_overrides) {
                modifier_object.language_overrides = [];
            }
            // Find existing language override object for the language we're in
            var existing_language = false;
            for (var _i = 0, _a = modifier_object.language_overrides; _i < _a.length; _i++) {
                var language_override_object = _a[_i];
                if (language_override_object.language === GetLanguageFromString(language)) {
                    // Found a match: attach                    
                    language_override = language_override_object;
                    existing_language = true;
                }
            }
            // No existing language - create it
            if (!language_override) {
                language_override = { language: GetLanguageFromString(language) };
            }
            // Assign the object based on name or description
            if (name) {
                language_override.name_override = modifier_value;
            }
            else {
                language_override.description_override = modifier_value;
            }
            // Add the object to the array if it doesn't exist yet
            if (!existing_language) {
                modifier_object.language_overrides.push(language_override);
            }
        }
        else {
            //console.log(`Could not find a key for ${modifier_class} for language ${language}. Make sure this key exists in the main language file.`);
        }
    }
    return true;
}
function ParseStandardTooltip(line, main, language) {
    var regex = /"(.*)"\s*"(.*)"/i;
    var tooltip_key = line.match(regex)[1];
    var tooltip_value = line.match(regex)[2];
    // Register into the map
    if (main) {
        if (!StandardTooltips.has(tooltip_key)) {
            StandardTooltips.set(tooltip_key, {
                classname: tooltip_key,
                name: tooltip_value
            });
        }
    }
    else {
        // Add the language to the object
        if (StandardTooltips.has(tooltip_key)) {
            // Check if the language appears in the enum
            var languageEnum = GetLanguageFromString(language);
            if (languageEnum != Language.None) {
                var tooltip_object = StandardTooltips.get(tooltip_key);
                if (!tooltip_object.language_overrides) {
                    tooltip_object.language_overrides = [];
                }
                tooltip_object.language_overrides.push({
                    language: languageEnum,
                    name_override: tooltip_value
                });
            }
        }
    }
}
function AddStandardTooltips() {
    // Write all standard tooltips as code        
    for (var _i = 0, _a = Array.from(StandardTooltips.entries()); _i < _a.length; _i++) {
        var entry = _a[_i];
        var value = entry[1];
        var standard_tooltip_object = value;
        code += "\tStandardTooltips.push({\n";
        if (standard_tooltip_object.classname) {
            code += "\t\tclassname: " + JSON.stringify(standard_tooltip_object.classname) + ",\n";
        }
        if (standard_tooltip_object.name) {
            code += "\t\tname: " + JSON.stringify(standard_tooltip_object.name) + ",\n";
        }
        if (standard_tooltip_object.language_overrides) {
            code += "\t\tlanguage_overrides:\n";
            code += "\t\t[\n";
            for (var _b = 0, _c = standard_tooltip_object.language_overrides; _b < _c.length; _b++) {
                var language_override = _c[_b];
                code += "\t\t\t{\n";
                code += "\t\t\t\tlanguage: Language." + GetLanguageEnumKeyFromString(language_override.language.toString()) + ",\n";
                code += "\t\t\t\tname_override: " + JSON.stringify(language_override.name_override) + "\n";
                code += "\t\t\t},\n\n";
            }
            code += "\t\t]\n";
        }
        code += '\t});\n\n';
    }
    ;
}
function AddAbilities() {
    for (var _i = 0, _a = Array.from(Abilities.entries()); _i < _a.length; _i++) {
        var entry = _a[_i];
        var value = entry[1];
        var ability_tooltip_object = value;
        code += "\tAbilities.push({\n";
        if (ability_tooltip_object.ability_classname) {
            code += "\t\tability_classname: " + JSON.stringify(ability_tooltip_object.ability_classname) + ",\n";
        }
        if (ability_tooltip_object.name) {
            code += "\t\tname: " + JSON.stringify(ability_tooltip_object.name) + ",\n";
        }
        if (ability_tooltip_object.description) {
            code += "\t\tdescription: " + JSON.stringify(ability_tooltip_object.description) + ",\n";
        }
        if (ability_tooltip_object.lore) {
            code += "\t\tlore: " + JSON.stringify(ability_tooltip_object.lore) + ",\n";
        }
        if (ability_tooltip_object.notes && ability_tooltip_object.notes.length > 0) {
            code += "\t\tnotes:\n";
            code += "\t\t[\n";
            for (var _b = 0, _c = ability_tooltip_object.notes; _b < _c.length; _b++) {
                var note = _c[_b];
                code += "\t\t\t" + JSON.stringify(note) + ",\n";
            }
            code += "\t\t],\n";
        }
        if (ability_tooltip_object.ability_specials && ability_tooltip_object.ability_specials.length > 0) {
            code += "\t\tability_specials:\n";
            code += "\t\t[\n";
            for (var _d = 0, _e = ability_tooltip_object.ability_specials; _d < _e.length; _d++) {
                var ability_special = _e[_d];
                code += "\t\t\t{\n";
                code += "\t\t\t\tability_special: " + JSON.stringify(ability_special.ability_special) + ",\n";
                code += "\t\t\t\ttext: " + JSON.stringify(ability_special.text) + ",\n";
                if (ability_special.percentage) {
                    code += "\t\t\t\tpercentage: true,\n";
                }
                if (ability_special.item_stat) {
                    code += "\t\t\t\titem_stat: true,\n";
                }
                code += "\t\t\t},\n\n";
            }
            code += "\t\t],\n";
        }
        if (ability_tooltip_object.language_overrides && ability_tooltip_object.language_overrides.length > 0) {
            code += "\t\tlanguage_overrides:\n";
            code += "\t\t[\n";
            for (var _f = 0, _g = ability_tooltip_object.language_overrides; _f < _g.length; _f++) {
                var language_override = _g[_f];
                code += "\t\t\t{\n";
                code += "\t\t\t\tlanguage: Language." + GetLanguageEnumKeyFromString(language_override.language.toString()) + ",\n";
                if (language_override.name_override) {
                    code += "\t\t\t\tname_override: " + JSON.stringify(language_override.name_override) + ",\n";
                }
                if (language_override.description_override) {
                    code += "\t\t\t\tdescription_override: " + JSON.stringify(language_override.description_override) + ",\n";
                }
                if (language_override.lore_override) {
                    code += "\t\t\t\tlore_override: " + JSON.stringify(language_override.lore_override) + ",\n";
                }
                if (language_override.notes_override && language_override.notes_override.length > 0) {
                    code += "\t\t\t\tnotes_override:\n";
                    code += "\t\t\t\t[\n";
                    for (var _h = 0, _j = language_override.notes_override; _h < _j.length; _h++) {
                        var note = _j[_h];
                        code += "\t\t\t\t\t" + JSON.stringify(note) + ",\n";
                    }
                    code += "\t\t\t\t],\n";
                }
                if (language_override.scepter_description_override) {
                    code += "\t\t\t\tscepter_description_override: " + JSON.stringify(language_override.scepter_description_override) + ",\n";
                }
                if (language_override.shard_description_override) {
                    code += "\t\t\t\tshard_description_override: " + JSON.stringify(language_override.shard_description_override) + ",\n";
                }
                if (language_override.ability_specials_override && language_override.ability_specials_override.length > 0) {
                    code += "\t\t\t\tability_specials_override:\n";
                    code += "\t\t\t\t[\n";
                    for (var _k = 0, _l = language_override.ability_specials_override; _k < _l.length; _k++) {
                        var ability_special = _l[_k];
                        code += "\t\t\t\t\t{\n";
                        code += "\t\t\t\t\t\tability_special: " + JSON.stringify(ability_special.ability_special) + ",\n";
                        code += "\t\t\t\t\t\ttext: " + JSON.stringify(ability_special.text) + ",\n";
                        if (ability_special.percentage) {
                            code += "\t\t\t\t\t\t\tpercentage: true,\n";
                        }
                        if (ability_special.item_stat) {
                            code += "\t\t\t\t\t\t\titem_stat: true,\n";
                        }
                        code += "\t\t\t\t\t},\n\n";
                    }
                    code += "\t\t\t\t]\n";
                }
                code += "\t\t\t},\n\n";
            }
            code += "\t\t]\n";
        }
        code += "\t});\n\n";
    }
}
function AddModifiers() {
    for (var _i = 0, _a = Array.from(Modifiers.entries()); _i < _a.length; _i++) {
        var entry = _a[_i];
        var value = entry[1];
        var modifier_tooltip_object = value;
        code += "\tModifiers.push({\n";
        if (modifier_tooltip_object.modifier_classname) {
            code += "\t\tmodifier_classname: " + JSON.stringify(modifier_tooltip_object.modifier_classname) + ",\n";
        }
        if (modifier_tooltip_object.name) {
            code += "\t\tname: " + JSON.stringify(modifier_tooltip_object.name) + ",\n";
        }
        if (modifier_tooltip_object.description) {
            code += "\t\tdescription: `" + TransoformModifierProperties(modifier_tooltip_object.description) + "`,\n";
        }
        if (modifier_tooltip_object.language_overrides && modifier_tooltip_object.language_overrides.length > 0) {
            code += "\t\tlanguage_overrides:\n";
            code += "\t\t[\n";
            for (var _b = 0, _c = modifier_tooltip_object.language_overrides; _b < _c.length; _b++) {
                var language_override = _c[_b];
                code += "\t\t\t{\n";
                code += "\t\t\t\tlanguage: Language." + GetLanguageEnumKeyFromString(language_override.language.toString()) + ",\n";
                if (language_override.name_override) {
                    code += "\t\t\t\tname_override: " + JSON.stringify(language_override.name_override) + ",\n";
                }
                if (language_override.description_override) {
                    code += "\t\t\t\tdescription_override: `" + TransoformModifierProperties(language_override.description_override) + "`,\n";
                }
                code += "\t\t\t},\n\n";
            }
            code += "\t\t],\n";
        }
        code += "\t});\n\n";
    }
}
function GroupAbilities() {
    for (var _i = 0, _a = Array.from(AbilityMapper.entries()); _i < _a.length; _i++) {
        var entry = _a[_i];
        var ability = entry[0];
        var value = entry[1];
        // Check map to see if the ability string exists in it        
        var found_map = IterateAbilitiesMap(ability, value);
        // If we found a map for this ability, remove it
        if (found_map) {
            AbilityMapper["delete"](ability);
        }
        // If we didn't find it yet, let's try to assign it based on known keywords
        else {
            // Description
            if (ability.match(/(.*)_description/i) != null) {
                var ability_name = ability.match(/(.*)_description/i)[1];
                Abilities.set(ability_name, { description: value, ability_classname: ability_name });
            }
            // Lore
            else if (ability.match(/(.*)_lore/i) != null) {
                var ability_name = ability.match(/(.*)_lore/i)[1];
                Abilities.set(ability_name, { lore: value, ability_classname: ability_name });
            }
            // Notes
            else if (ability.match(/(.*)_note\d/i) != null) {
                var ability_name = ability.match(/(.*)_note\d/i)[1];
                Abilities.set(ability_name, { notes: [value], ability_classname: ability_name });
            }
            // Scepter description
            else if (ability.match(/(.*)_scepter_description/i) != null) {
                var ability_name = ability.match(/(.*)_scepter_description/i)[1];
                Abilities.set(ability_name, { scepter_description: value, ability_classname: ability_name });
            }
            // Shard description
            else if (ability.match(/(.*)_shard_description/i) != null) {
                var ability_name = ability.match(/(.*)_shard_description/i)[1];
                Abilities.set(ability_name, { shard_description: value, ability_classname: ability_name });
            }
        }
    }
}
function ReuniteRemainingAbilities() {
    for (var _i = 0, _a = Array.from(AbilityMapper.entries()); _i < _a.length; _i++) {
        var entry = _a[_i];
        var ability = entry[0];
        var value = entry[1];
        var found_map = IterateAbilitiesMap(ability, value);
        if (!found_map) {
            Abilities.set(ability, { name: value });
        }
    }
}
function IterateAbilitiesMap(ability, value) {
    var found_map = false;
    // Check map to see if the ability string exists in it        
    Abilities.forEach(function (ability_object, ability_name) {
        if (ability.indexOf(ability_name) != -1) {
            found_map = true;
            // Means that we found the ability already registered! Could be from another field of the same ability
            // Ability name
            if (ability == ability_name) {
                ability_object.ability_classname = ability;
                ability_object.name = value;
            }
            // Description
            else if (ability.match(/.*_description/i) != null) {
                value = TransformAbilityPercentageValues(value);
                ability_object.description = value;
            }
            // Lore
            else if (ability.match(/.*_lore/i) != null) {
                ability_object.lore = value;
            }
            // Notes
            else if (ability.match(/.*_note\d/i) != null) {
                if (!ability_object.notes) {
                    ability_object.notes = [];
                }
                value = TransformAbilityPercentageValues(value);
                ability_object.notes.push(value);
            }
            // Scepter description
            else if (ability.match(/.*_scepter_description/i) != null) {
                value = TransformAbilityPercentageValues(value);
                ability_object.scepter_description = value;
            }
            // Shard description
            else if (ability.match(/.*_shard_description/i) != null) {
                value = TransformAbilityPercentageValues(value);
                ability_object.shard_description = value;
            }
            // Ability specials
            else {
                var regex = new RegExp(ability_name + "_(.+)");
                if (ability.match(regex) != null) {
                    // Check for percentage. Remove the "%" prefix is found
                    var percentage = false;
                    if (value.match(/%/) != null) {
                        percentage = true;
                        value = value.substring(1, value.length - 1);
                    }
                    var item_stat = false;
                    if (value.match(/\+\$/) != null) {
                        item_stat = true;
                    }
                    // Remove ending with ":", if any 
                    if (value.indexOf(":") === value.length - 1) {
                        value = value.substring(0, value.length - 1);
                    }
                    if (!ability_object.ability_specials) {
                        ability_object.ability_specials = [];
                    }
                    ability_object.ability_specials.push({
                        ability_special: ability.match(regex)[1],
                        text: value,
                        percentage: percentage,
                        item_stat: item_stat
                    });
                }
            }
        }
    });
    return found_map;
}
function IterateAbilitiesMapForLanguage(ability, value, language) {
    // Only apply on languages that have proper enums defined
    if (GetLanguageFromString(language) === Language.None) {
        return;
    }
    var found_map = false;
    // Check map to see if the ability string exists in it        
    Abilities.forEach(function (ability_object, ability_name) {
        if (ability.indexOf(ability_name) != -1) {
            // Means that we found the ability already registered! Could be from another field of the same ability
            found_map = true;
            var language_override = void 0;
            // If the language array doesn't even exists yet, initialize it
            if (!ability_object.language_overrides) {
                ability_object.language_overrides = [];
            }
            else {
                // Check if there's a language override object for the language we're adding
                for (var _i = 0, _a = ability_object.language_overrides; _i < _a.length; _i++) {
                    var language_override_object = _a[_i];
                    if (language_override_object.language === GetLanguageFromString(language)) {
                        // Found a match: attach
                        language_override = language_override_object;
                    }
                }
            }
            // If we couldn't find it, create a new language override object
            if (!language_override) {
                language_override =
                    {
                        language: GetLanguageFromString(language)
                    };
                ability_object.language_overrides.push(language_override);
            }
            // Ability name
            if (ability == ability_name) {
                language_override.name_override = value;
            }
            // Description
            else if (ability.match(/.*_description/i) != null) {
                value = TransformAbilityPercentageValues(value);
                language_override.description_override = value;
            }
            // Lore
            else if (ability.match(/.*_lore/i) != null) {
                language_override.lore_override = value;
            }
            // Notes
            else if (ability.match(/.*_note\d/i) != null) {
                if (!language_override.notes_override) {
                    language_override.notes_override = [];
                }
                value = TransformAbilityPercentageValues(value);
                language_override.notes_override.push(value);
            }
            // Scepter description
            else if (ability.match(/.*_scepter_description/i) != null) {
                value = TransformAbilityPercentageValues(value);
                language_override.scepter_description_override = value;
            }
            // Shard description
            else if (ability.match(/.*_shard_description/i) != null) {
                value = TransformAbilityPercentageValues(value);
                language_override.shard_description_override = value;
            }
            // Ability specials
            else {
                var regex = new RegExp(ability_name + "_(.+)");
                if (ability.match(regex) != null) {
                    // Check for percentage. Remove the "%" prefix is found
                    var percentage = false;
                    if (value.match(/%/) != null) {
                        percentage = true;
                        value = value.substring(1, value.length - 1);
                    }
                    var item_stat = false;
                    if (value.match(/\+\$/) != null) {
                        item_stat = true;
                    }
                    // Remove ending with ":", if any 
                    if (value.indexOf(":") === value.length - 1) {
                        value = value.substring(0, value.length - 1);
                    }
                    if (!language_override.ability_specials_override) {
                        language_override.ability_specials_override = [];
                    }
                    language_override.ability_specials_override.push({
                        ability_special: ability.match(regex)[1],
                        text: value,
                        percentage: percentage,
                        item_stat: item_stat
                    });
                }
            }
        }
    });
    return found_map;
}
function TransformAbilityPercentageValues(text) {
    text = text.replace(/%(\w+)%%%/g, "${$1}%");
    text = text.replace(/%(\w+)%/g, "${$1}");
    return text;
}
function TransoformModifierProperties(text) {
    text = text.replace(/%dMODIFIER_PROPERTY_(\w+)%%%/, "{${LocalizationModifierProperty.$1}}%");
    text = text.replace(/%dMODIFIER_PROPERTY_(\w+)%/, "{${LocalizationModifierProperty.$1}}");
    text = text.replace(/%fMODIFIER_PROPERTY_(\w+)%%%/, "{f${LocalizationModifierProperty.$1}}%");
    text = text.replace(/%fMODIFIER_PROPERTY_(\w+)%/, "{f${LocalizationModifierProperty.$1}}");
    text = JSON.stringify(text);
    text = text.substr(1, text.length - 2);
    return text;
}
function GetLanguageFromString(name) {
    for (var key in Language) {
        if (Language[key] == name) {
            return name;
        }
    }
    return Language.None;
}
function GetLanguageEnumKeyFromString(name) {
    for (var key in Language) {
        if (Language[key] == name) {
            return key;
        }
    }
    return undefined;
}
