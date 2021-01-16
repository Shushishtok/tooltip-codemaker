import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

enum Language
{
    None = 'none',
    Brazilian = 'brazilian',    
    Bulgarian = 'bulgarian',
    Czech = 'czech',
    Danish = 'danish',    
    English = 'english',
    Finnish = 'finnish',    
    French = `french`,
    German = `german`,
    Greek = 'greek',
    Hungarian = 'hungarian',
    Italian = 'italian',
    Japanese = 'japanese',
    Koreana = 'koreana',
    Latam = 'latam',
    Norwegian = `norwegian`,
    Polish = 'polish',    
    Portuguese = `portuguese`,
    Russian = `russian`,    
    Schinese = `schinese`,
    Spanish = `spanish`,
    Swedish = `swedish`,
    TChinese = `tchinese`,
    Thai = 'thai',
    Turkish = 'turkish',
    Ukrainian = 'ukrainian',
    Vietnamese = `vietnamese`
}

interface AbilityLocalization
{
    ability_classname?: string;
    name?: string;
    description?: string;
    scepter_description?: string;
    shard_description?: string;
    lore?: string;
    notes?: Array<string>;    
    ability_specials?: Array<AbilitySpecialLocalization>;
    language_overrides?: Array<AbilityLocalizationContent>;
}

interface AbilityLocalizationContent
{
    language: Language;
    name_override?: string;
    description_override?: string;
    scepter_description_override?: string;
    shard_description_override?: string;
    lore_override?: string;
    notes_override?: Array<string>;    
    ability_specials_override?: Array<AbilitySpecialLocalization>;
}

interface ModifierLocalization
{
    modifier_classname?: string;
    name?: string;
    description?: string;
    language_overrides?: Array<ModifierLocalizationContent>;
}

interface ModifierLocalizationContent
{
    language: Language;
    name_override?: string
    description_override?: string;
}

interface StandardLocalization
{
    classname?: string;
    name?: string;
    language_overrides?: StandardLocalizationNameOverride[]
}

interface StandardLocalizationNameOverride
{
    language: Language;
    name_override: string
}

interface AbilitySpecialLocalization
{
    ability_special: string;
    text: string;
    percentage?: boolean; // false by default if omitted
    item_stat?: boolean // false by default if omitted
}

const filename: string = "outputCode.ts";
const outputFilePath: string = "./" + filename;
const signaturePath: string = "./signature.txt";
const endingPath: string = "./ending.txt";
const AbilityMapper: Map<string, string> = new Map();
const Abilities: Map<string, AbilityLocalization> = new Map();
const Modifiers: Map<string, ModifierLocalization> = new Map();
const StandardTooltips: Map<string, StandardLocalization> = new Map();
let indent = 0;
let code: string = "";

let rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

rl.question("Please provide the main lanaguage, e.g. 'english'. Default to english. ", answer => ProcessLocalization(answer))

function ProcessLocalization(answer: string)
{
    // Default to english
    if (answer == "")
    {        
        answer = "english"
    }

    const addon_name: string = `addon_${answer}.txt`;
    const directory = "./localization/";
    const filepath: string = directory + addon_name;

    if (!fs.existsSync(filepath))
    {        
        console.log(`The addon file for language ${answer} doesn't seem to exist. Verify the files are in the localization folder and make sure to only type their language.`);
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

    // Finalize the file
    FinishFile();
    console.log(`The process signed ${Abilities.size} abilities, ${Modifiers.size} modifiers and ${StandardTooltips.size} standard tooltips in total.`);
    console.log(`Operation completed successfully! Please check the result in the file ${filename} located in the same folder as the codemaker.`);

    rl.close();
}

function PrepareFile()
{
    // Create or clean the output file
    const fd = fs.openSync(outputFilePath, 'w');
    fs.closeSync(fd);

    // Add the necessary signature    
    AddOutputLine(indent++, fs.readFileSync(signaturePath).toString());
}

function FinishFile()
{    
    AddOutputLine(--indent, fs.readFileSync(endingPath).toString(), 0);
    fs.writeFile(outputFilePath, code, ()=>{});    
}

function ParseLocalizationDirectory(directory: string, main_file_path: string)
{
    // Discover all files in the directory, EXCEPT the main file that was already parsed
    const files = fs.readdirSync(path.join(__dirname, directory))
    
    for (const file of files)
    {
        const filepath: string = directory + file;
        if (filepath != main_file_path)
        {
            ParseLocalizationFile(filepath, false);
        }            
    }
}

function ParseLocalizationFile(filepath: string, main: boolean)
{   
    const language_regex = /addon_(\w+)/;             
    if (!language_regex.test(filepath))
    {
        console.log("The file does not match the `addon_<language>` format!");
        return
    }

    const language = language_regex.exec(filepath)[1];    

    const lines = fs.readFileSync(filepath).toString().replace("\r\n", "\n").split("\n");
    const regex = /".*?\"\s*".*?"/g;    

    for (const line of lines)
    {
        ParseLine(line, main, language);                    
    }
}

function ParseLine(line: string, main: boolean, language: string)
{                
    // Ignore comments
    let regex = /^\s*\/\//;
    if (regex.test(line)) return;    

    // Ignore the Language token
    if (line.indexOf('"Language"') != -1) return;

    // Only apply on valid lines. If this isn't any "something" "something" line, just throw it away
    regex = /".*?\"\s*".*?"/;
    if (!regex.test(line))
    {        
        console.log("Discarding line: ", line);
        return;    
    }

    // Ignore lines with `[english]` at the start of it
    regex = /^"(?:\[english\])/;
    if (regex.test(line)) return;    
    
    // Check if the line is an ability. If it is, stop checking    
    if (ParseAbility(line, main, language)) return;   
    
    // Check if the line is a modifier. If it is, stop checking
    if (ParseModifier(line, main, language)) return;
    
    // Everything that isn't an ability or a modifier is considered a standard tooltip
    ParseStandardTooltip(line, main, language);    
}

function ParseAbility(line: string, main: boolean, language: string): boolean
{
    // Check if it is an ability; return if not
    const regex = /"DOTA_Tooltip_ability_(.*)"\s*"(.*)"/i;
    if (!regex.test(line)) return false;

    // It is an ability! Let's get its key and value
    const ability_key = line.match(regex)[1];    
    const ability_value = line.match(regex)[2];

    if (main)
    {    
        // Insert into the ability array
        AbilityMapper.set(ability_key, ability_value);
    }
    else
    {
        IterateAbilitiesMapForLanguage(ability_key, ability_value, language);
    }

    return true;
}

function ParseModifier(line: string, main: boolean, language: string): boolean
{
    let regex = /(modifier_.*)"\s*"(.*)"/i;
    if (!regex.test(line)) return false;
    
    // It is a modifier! Let's get its key and value
    const modifier_key = line.match(regex)[1];
    const modifier_value = line.match(regex)[2];    

    // Get the class of the modifier
    regex = /(\w+?)(?:_Description)?$/i;
    const modifier_class = modifier_key.match(regex)[1];                
    
    // Value can be either name or description, so find that out!
    let name: boolean = false;
    regex = /\w+_Description/i;
    if (!regex.test(modifier_key)) name = true;

    // Main language
    if (main)
    {
        // Check if it exists in the Modifier map
        let modifier_object: ModifierLocalization;
        if (Modifiers.has(modifier_class))
        {
            modifier_object = Modifiers.get(modifier_class);
        }    
        
        if (!modifier_object)
        {            
            // Create a new modifier object and assign the classname to it
            modifier_object =
            {
                modifier_classname: modifier_class         
            }
        }
    

        // Add the value to the object
        if (name)
        {
            modifier_object.name = modifier_value;
        }
        else
        {
            modifier_object.description = modifier_value;
        }
        
        // Register the modifier in the Modifiers map
        Modifiers.set(modifier_class, modifier_object);
    }
    else
    {
        // Check if the laguage has a proper enum
        if (GetLanguageFromString(language) === Language.None)
        {
            return true;
        }

        // Find the key - you should always be able to do so
        if (Modifiers.has(modifier_class))
        {
            const modifier_object = Modifiers.get(modifier_class);
            let language_override: ModifierLocalizationContent;

            // If the language override array doesn't exist yet, create it and set it        
            if (!modifier_object.language_overrides)
            {
                modifier_object.language_overrides = [];                                
            }            
            
            // Find existing language override object for the language we're in
            let existing_language = false;
            for (const language_override_object of modifier_object.language_overrides) 
            {
                if (language_override_object.language === GetLanguageFromString(language))
                {                        
                    // Found a match: attach                    
                    language_override = language_override_object;                        
                    existing_language = true;
                }
            }

            // No existing language - create it
            if (!language_override)
            {
                language_override = {language: GetLanguageFromString(language)};
            }

            // Assign the object based on name or description
            if (name)
            {
                language_override.name_override = modifier_value;
            }
            else
            {
                language_override.description_override = modifier_value;
            }

            // Add the object to the array if it doesn't exist yet
            if (!existing_language)
            {
                modifier_object.language_overrides.push(language_override);
            }
        }
        else
        {
            //console.log(`Could not find a key for ${modifier_class} for language ${language}. Make sure this key exists in the main language file.`);
        }
    }

    return true;
}

function ParseStandardTooltip(line: string, main: boolean, language: string)
{           
    const regex = /"(.*)"\s*"(.*)"/i;    
    
    const tooltip_key = line.match(regex)[1];
    const tooltip_value = line.match(regex)[2];    

    // Register into the map
    if (main)
    {
        if (!StandardTooltips.has(tooltip_key))
        {
            StandardTooltips.set(tooltip_key, 
            {
               classname: tooltip_key,
               name: tooltip_value
            });
        }
    }
    else
    {
        // Add the language to the object
        if (StandardTooltips.has(tooltip_key)) 
        {
            // Check if the language appears in the enum
            const languageEnum = GetLanguageFromString(language);
            if (languageEnum != Language.None)
            {
                const tooltip_object = StandardTooltips.get(tooltip_key);
                if (!tooltip_object.language_overrides)
                {
                    tooltip_object.language_overrides = []
                }
    
                tooltip_object.language_overrides.push({
                    language: languageEnum,
                    name_override: tooltip_value
                });
            }
        }
    }
}

function AddStandardTooltips()
{
    // Write all standard tooltips as code        
    for (let entry of Array.from(StandardTooltips.entries())) 
    {                    
        let value = entry[1];        

        const standard_tooltip_object = value;
        AddOutputLine(indent++, `StandardTooltips.push({`);
        if (standard_tooltip_object.classname)
        {
            AddOutputLine(indent, `classname: ${JSON.stringify(standard_tooltip_object.classname)},`);            
        }

        if (standard_tooltip_object.name)
        {
            AddOutputLine(indent, `name: ${JSON.stringify(standard_tooltip_object.name)},`);            
        }

        if (standard_tooltip_object.language_overrides)
        {
            AddOutputLine(indent, `language_overrides:`);            
            AddOutputLine(indent++, `[`);            

            for (const language_override of standard_tooltip_object.language_overrides) 
            {
                AddOutputLine(indent++, `{`);                                
                AddOutputLine(indent, `language: Language.${GetLanguageEnumKeyFromString(language_override.language.toString())},`);
                AddOutputLine(indent, `name_override: ${JSON.stringify(language_override.name_override)}`);                                
                AddOutputLine(--indent, `},`, 2);                
            }
            
            AddOutputLine(--indent, `]`);            
        }

        AddOutputLine(--indent, `});`, 2);        
    };
}

function AddAbilities()
{
    for (let entry of Array.from(Abilities.entries())) 
    {                    
        let value = entry[1];

        const ability_tooltip_object = value;
        AddOutputLine(indent++, `Abilities.push({`);        

        if (ability_tooltip_object.ability_classname)
        {
            AddOutputLine(indent, `ability_classname: ${JSON.stringify(ability_tooltip_object.ability_classname)},`);            
        }

        if (ability_tooltip_object.name)
        {
            AddOutputLine(indent, `name: ${JSON.stringify(ability_tooltip_object.name)},`);            
        }

        if (ability_tooltip_object.description)
        {
            AddOutputLine(indent, `description: ${JSON.stringify(ability_tooltip_object.description)},`);            
        }

        if (ability_tooltip_object.lore)
        {
            AddOutputLine(indent, `lore: ${JSON.stringify(ability_tooltip_object.lore)},`);            
        }

        if (ability_tooltip_object.notes && ability_tooltip_object.notes.length > 0)
        {
            AddOutputLine(indent, `notes:`);
            AddOutputLine(indent++, `[`);                        
            
            for (const note of ability_tooltip_object.notes) 
            {
                AddOutputLine(indent, `${JSON.stringify(note)},`);                
            }

            AddOutputLine(--indent, `],`);            
        }

        if (ability_tooltip_object.ability_specials && ability_tooltip_object.ability_specials.length > 0)
        {
            AddOutputLine(indent, `ability_specials:`);            
            AddOutputLine(indent++, `[`);            

            for (const ability_special of ability_tooltip_object.ability_specials) 
            {
                AddOutputLine(indent++, `{`);
                AddOutputLine(indent, `ability_special: ${JSON.stringify(ability_special.ability_special)},`);
                AddOutputLine(indent, `text: ${JSON.stringify(ability_special.text)},`);                                

                if (ability_special.percentage)
                {
                    AddOutputLine(indent, `percentage: true,`);                    
                }

                if (ability_special.item_stat)
                {
                    AddOutputLine(indent, `item_stat: true,`);                    
                }

                AddOutputLine(--indent, `},`, 2);                
            }

            AddOutputLine(--indent, `],`);            
        }
        
        if (ability_tooltip_object.language_overrides && ability_tooltip_object.language_overrides.length > 0)
        {
            AddOutputLine(indent, `language_overrides:`);
            AddOutputLine(indent++, `[`);            

            for (const language_override of ability_tooltip_object.language_overrides) 
            {
                AddOutputLine(indent++, `{`);

                // We'll always have a language field
                AddOutputLine(indent, `language: Language.${GetLanguageEnumKeyFromString(language_override.language.toString())},`);                

                if (language_override.name_override)
                {
                    AddOutputLine(indent, `name_override: ${JSON.stringify(language_override.name_override)},`);                    
                }

                if (language_override.description_override)
                {
                    AddOutputLine(indent, `description_override: ${JSON.stringify(language_override.description_override)},`);                    
                }

                if (language_override.lore_override)
                {
                    AddOutputLine(indent, `lore_override: ${JSON.stringify(language_override.lore_override)},`);                    
                }

                if (language_override.notes_override && language_override.notes_override.length > 0)
                {
                    AddOutputLine(indent, `notes_override:`);                    
                    AddOutputLine(indent++, `[`);                    
                    
                    for (const note of language_override.notes_override) 
                    {
                        AddOutputLine(indent, `${JSON.stringify(note)},`);                        
                    }

                    AddOutputLine(--indent, `],`);                    
                }

                if (language_override.scepter_description_override)
                {
                    AddOutputLine(indent, `scepter_description_override: ${JSON.stringify(language_override.scepter_description_override)},`);                    
                }

                if (language_override.shard_description_override)
                {
                    AddOutputLine(indent, `shard_description_override: ${JSON.stringify(language_override.shard_description_override)},`);                    
                }

                if (language_override.ability_specials_override && language_override.ability_specials_override.length > 0)
                {
                    AddOutputLine(indent, `ability_specials_override:`);
                    AddOutputLine(indent++, `[`);                    

                    for (const ability_special of language_override.ability_specials_override) 
                    {
                        AddOutputLine(indent++, `{`);
                        AddOutputLine(indent, `ability_special: ${JSON.stringify(ability_special.ability_special)},`);
                        AddOutputLine(indent, `text: ${JSON.stringify(ability_special.text)},`);                        

                        if (ability_special.percentage)
                        {
                            AddOutputLine(indent, `percentage: true,`);                            
                        }

                        if (ability_special.item_stat)
                        {
                            AddOutputLine(indent, `item_stat: true,`);                            
                        }

                        AddOutputLine(--indent, `},`, 2);                            
                    }

                    AddOutputLine(--indent, `]`);                    
                }

                AddOutputLine(--indent, `},`, 2);                
            }
            
            AddOutputLine(--indent, `]`);            
        }

        AddOutputLine(--indent, `});`);        
    }
}

function AddModifiers()
{
    for (let entry of Array.from(Modifiers.entries())) 
    {                    
        let value = entry[1];
        const modifier_tooltip_object = value;

        AddOutputLine(indent++, `Modifiers.push({`);        
        if (modifier_tooltip_object.modifier_classname)
        {
            AddOutputLine(indent, `modifier_classname: ${JSON.stringify(modifier_tooltip_object.modifier_classname)},`);            
        }

        if (modifier_tooltip_object.name)
        {
            AddOutputLine(indent, `name: ${JSON.stringify(modifier_tooltip_object.name)},`);            
        }

        if (modifier_tooltip_object.description)
        {
            AddOutputLine(indent, `description: \`${TransoformModifierProperties(modifier_tooltip_object.description)}\`,`);            
        }
        
        if (modifier_tooltip_object.language_overrides && modifier_tooltip_object.language_overrides.length > 0)
        {
            AddOutputLine(indent, `language_overrides:`);            
            AddOutputLine(indent++, `[`);            

            for (const language_override of modifier_tooltip_object.language_overrides) 
            {
                AddOutputLine(indent++, `{`);                
                AddOutputLine(indent, `language: Language.${GetLanguageEnumKeyFromString(language_override.language.toString())},`);                

                if (language_override.name_override)
                {
                    AddOutputLine(indent, `name_override: ${JSON.stringify(language_override.name_override)},`);                    
                }

                if (language_override.description_override)
                {
                    AddOutputLine(indent, `description_override: \`${TransoformModifierProperties(language_override.description_override)}\`,`);                    
                }

                AddOutputLine(--indent, `},`, 2);                
            }

            AddOutputLine(--indent, `],`);            
        }

        AddOutputLine(--indent, `});`, 2);        
    }       
}

function GroupAbilities()
{
    for (let entry of Array.from(AbilityMapper.entries())) 
    {                        
        let ability = entry[0];
        let value = entry[1];        

        // Check map to see if the ability string exists in it        
        let found_map = IterateAbilitiesMap(ability, value);        

        // If we found a map for this ability, remove it
        if (found_map)
        {
            AbilityMapper.delete(ability);
        }
        // If we didn't find it yet, let's try to assign it based on known keywords
        else
        {
            // Description
            if (ability.match(/(.*)_description/i) != null)
            {
                const ability_name = ability.match(/(.*)_description/i)[1];
                Abilities.set(ability_name, {description: value, ability_classname: ability_name});
            }
    
            // Lore
            else if (ability.match(/(.*)_lore/i) != null)
            {
                const ability_name = ability.match(/(.*)_lore/i)[1];
                Abilities.set(ability_name, {lore: value, ability_classname: ability_name});
            }
    
            // Notes
            else if (ability.match(/(.*)_note\d/i) != null)
            {
                const ability_name = ability.match(/(.*)_note\d/i)[1];
                Abilities.set(ability_name, {notes: [value], ability_classname: ability_name});
            }
    
            // Scepter description
            else if (ability.match(/(.*)_scepter_description/i) != null)
            {
                const ability_name = ability.match(/(.*)_scepter_description/i)[1];                
                Abilities.set(ability_name, {scepter_description: value, ability_classname: ability_name});
            }
    
            // Shard description
            else if (ability.match(/(.*)_shard_description/i) != null)
            {
                const ability_name = ability.match(/(.*)_shard_description/i)[1];
                Abilities.set(ability_name, {shard_description: value, ability_classname: ability_name});
            }            
        }
    }
}

function ReuniteRemainingAbilities()
{
    for (let entry of Array.from(AbilityMapper.entries())) 
    {                        
        let ability = entry[0];
        let value = entry[1];      

        let found_map = IterateAbilitiesMap(ability, value);

        if (!found_map)
        {
            Abilities.set(ability, {name: value});
        }
    }
}

function IterateAbilitiesMap(ability: string, value: string): boolean
{
    let found_map = false;

    // Check map to see if the ability string exists in it        
    Abilities.forEach((ability_object, ability_name) =>
    {                    
        if (ability.indexOf(ability_name) != -1)
        {
            found_map = true;                

            // Means that we found the ability already registered! Could be from another field of the same ability
            // Ability name
            if (ability == ability_name)
            {             
                ability_object.ability_classname = ability;       
                ability_object.name = value;
            }
            // Description
            else if (ability.match(/.*_description/i) != null)
            {
                value = TransformAbilityPercentageValues(value);
                ability_object.description = value;
            }

            // Lore
            else if (ability.match(/.*_lore/i) != null)
            {                
                ability_object.lore = value;
            }

            // Notes
            else if (ability.match(/.*_note\d/i) != null)
            {                
                if (!ability_object.notes)
                {
                    ability_object.notes = [];
                }

                value = TransformAbilityPercentageValues(value);
                ability_object.notes.push(value)                    
            }

            // Scepter description
            else if (ability.match(/.*_scepter_description/i) != null)
            {
                value = TransformAbilityPercentageValues(value);
                ability_object.scepter_description = value;
            }

            // Shard description
            else if (ability.match(/.*_shard_description/i) != null)
            {
                value = TransformAbilityPercentageValues(value);
                ability_object.shard_description = value;                    
            }

            // Ability specials
            else
            {                    
                const regex = new RegExp(`${ability_name}_(.+)`);
                if (ability.match(regex) != null)
                {
                    // Check for percentage. Remove the "%" prefix is found
                    let percentage = false;
                    if (value.match(/%/) != null)
                    {
                        percentage = true;
                        value = value.substring(1, value.length -1);
                    }

                    let item_stat = false;
                    if (value.match(/\+\$/) != null)
                    {
                        item_stat = true;
                    }
                    
                    // Remove ending with ":", if any 
                    if (value.indexOf(":") === value.length-1)
                    {
                        value = value.substring(0, value.length - 1);
                    }         

                    if (!ability_object.ability_specials)
                    {                            
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

function IterateAbilitiesMapForLanguage(ability: string, value: string, language: string)
{
    // Only apply on languages that have proper enums defined
    if (GetLanguageFromString(language) === Language.None)
    {
        return;
    }

    let found_map = false;

    // Check map to see if the ability string exists in it        
    Abilities.forEach((ability_object, ability_name) =>
    {                    
        if (ability.indexOf(ability_name) != -1)
        {
            // Means that we found the ability already registered! Could be from another field of the same ability
            found_map = true;
            let language_override: AbilityLocalizationContent;

            // If the language array doesn't even exists yet, initialize it
            if (!ability_object.language_overrides)
            {
                ability_object.language_overrides = [];
            }
            else
            {
                // Check if there's a language override object for the language we're adding
                for (const language_override_object of ability_object.language_overrides) 
                {
                    if (language_override_object.language === GetLanguageFromString(language))
                    {
                        // Found a match: attach
                        language_override = language_override_object;
                    }
                }
            }            

            // If we couldn't find it, create a new language override object
            if (!language_override)
            {
                language_override = 
                {
                    language: GetLanguageFromString(language)
                };

                ability_object.language_overrides.push(language_override);
            }

            // Ability name
            if (ability == ability_name)
            {             
                language_override.name_override = value;
            }
            // Description
            else if (ability.match(/.*_description/i) != null)
            {
                value = TransformAbilityPercentageValues(value);
                language_override.description_override = value;
            }

            // Lore
            else if (ability.match(/.*_lore/i) != null)
            {                
                language_override.lore_override = value;
            }

            // Notes
            else if (ability.match(/.*_note\d/i) != null)
            {                
                if (!language_override.notes_override)
                {
                    language_override.notes_override = [];
                }

                value = TransformAbilityPercentageValues(value);
                language_override.notes_override.push(value);
            }

            // Scepter description
            else if (ability.match(/.*_scepter_description/i) != null)
            {
                value = TransformAbilityPercentageValues(value);
                language_override.scepter_description_override = value;
            }

            // Shard description
            else if (ability.match(/.*_shard_description/i) != null)
            {
                value = TransformAbilityPercentageValues(value);
                language_override.shard_description_override = value;                    
            }

            // Ability specials
            else
            {                    
                const regex = new RegExp(`${ability_name}_(.+)`);
                if (ability.match(regex) != null)
                {
                    // Check for percentage. Remove the "%" prefix is found
                    let percentage = false;
                    if (value.match(/%/) != null)
                    {
                        percentage = true;
                        value = value.substring(1, value.length -1);
                    }

                    let item_stat = false;
                    if (value.match(/\+\$/) != null)
                    {
                        item_stat = true;
                    }
                    
                    // Remove ending with ":", if any 
                    if (value.indexOf(":") === value.length-1)
                    {
                        value = value.substring(0, value.length - 1);
                    }

                    if (!language_override.ability_specials_override)
                    {                            
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

function AddOutputLine(indent: number, text: string, newlines?: number)
{
    for (let index = 0; index < indent; index++) 
    {        
        code += `\t`;
    }

    code += text;

    // Default to one new line, if not otherwise stated
    if (!newlines) newlines = 1;

    for (let index = 0; index < newlines; index++) 
    {        
        code += `\n`;   
    }
}

function TransformAbilityPercentageValues(text: string): string
{    
    text = text.replace(/%(\w+)%%%/g, "${$1}%");
    text = text.replace(/%(\w+)%/g, "${$1}");

    return text;
}

function TransoformModifierProperties(text: string): string
{    
    text = text.replace(/%dMODIFIER_PROPERTY_(\w+)%%%/, "{${LocalizationModifierProperty.$1}}%");
    text = text.replace(/%dMODIFIER_PROPERTY_(\w+)%/, "{${LocalizationModifierProperty.$1}}");
    text = text.replace(/%fMODIFIER_PROPERTY_(\w+)%%%/, "{f${LocalizationModifierProperty.$1}}%");
    text = text.replace(/%fMODIFIER_PROPERTY_(\w+)%/, "{f${LocalizationModifierProperty.$1}}");      
    text = JSON.stringify(text);
    text = text.substr(1, text.length -2);    

    return text;
}

function GetLanguageFromString(name: string): Language
{
    for (const key in Language)
    {
        if (Language[key] == name) 
        {
            return name as any as Language;            
        }
    }
    return Language.None;
}

function GetLanguageEnumKeyFromString(name: string): keyof Language | undefined
{
    for (const key in Language)
    {
        if (Language[key] == name) 
        {
            return key as keyof Language;
        }
    }

    return undefined;
}