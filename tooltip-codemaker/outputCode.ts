import { AbilityLocalization, Language, LocalizationData, ModifierLocalization, StandardLocalization } from "~generator/localizationInterfaces";

export function GenerateLocalizationData(): LocalizationData
{
    // This section can be safely ignored, as it is only logic.
    //#region Localization logic
    // Arrays
    const Abilities: Array<AbilityLocalization> = new Array<AbilityLocalization>();
    const Modifiers: Array<ModifierLocalization> = new Array<ModifierLocalization>();
    const StandardTooltips: Array<StandardLocalization> = new Array<StandardLocalization>();    

    // Create object of arrays
    const localization_info: LocalizationData =
    {
        AbilityArray: Abilities,
        ModifierArray: Modifiers,
        StandardArray: StandardTooltips,        
    };
    //#endregion

    // Enter localization data below! Currently this is empty and technically there's no point for this file, but it was where everything started and I can't bring myself to delete it
	StandardTooltips.push({
		classname: "addon_game_name",
		name: "Untitled Boss Fighting Game",
	});

	StandardTooltips.push({
		classname: "DOTA_Tooltip_boss_ogremagi_ignite_modifier",
		name: "Ignite",
	});

	StandardTooltips.push({
		classname: "DOTA_Tooltip_boss_ogremagi_ignite_slow_modifier",
		name: "Ignite",
	});

	StandardTooltips.push({
		classname: "DOTA_Tooltip_ff_frost_armor_modifier",
		name: "Frost Armor",
	});

	StandardTooltips.push({
		classname: "DOTA_Tooltip_ff_frost_armor_slow_modifier",
		name: "Chilled",
	});

	StandardTooltips.push({
		classname: "DOTA_Tooltip_ff_hero_damage_totem_aura_effect",
		name: "Warflame Aura",
	});

	StandardTooltips.push({
		classname: "DOTA_Tooltip_ff_hero_damage_totem_aura_effect_Description",
		name: "Granted bonus damage.",
	});

	StandardTooltips.push({
		classname: "DOTA_Tooltip_ff_hero_earth_totem_aura_effect",
		name: "Stone Serpent",
	});

	StandardTooltips.push({
		classname: "DOTA_Tooltip_ff_hero_earth_totem_aura_effect_Description",
		name: "Movement speed and armor reduce.",
	});

	StandardTooltips.push({
		classname: "DOTA_Tooltip_ff_hero_mana_totem_aura_effect",
		name: "Wellspring Totem",
	});

	StandardTooltips.push({
		classname: "DOTA_Tooltip_ff_hero_mana_totem_aura_effect_Description",
		name: "Regenerating mana.",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_axe",
		name: "Berserker",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_axe_Lore",
		name: "Most men hate the bloody tides of war and fight only when they must, or out of a lust for glory. But there are some for whom battle is its own reward, and they are known as berserkers; violent, unpredictable, yet unmatched on the battlefield.",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_axe_Strengths",
		name: "You have high health, strong self-healing abilities and decent mobility. However, your mana pool is limited and your defenses are inflexible, relying on surviving to heal away damage after the fact.",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_beastmaster",
		name: "Earthwarden",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_beastmaster_Lore",
		name: "LORE LORE LORE",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_beastmaster_Strengths",
		name: "You have a flexible skillset that allows you to assist with tanking and healing when your team needs it, but your raw damage output is weaker than other damage dealers and your mana reserves are limited.",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_crystal_maiden",
		name: "Frostcaller",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_crystal_maiden_Lore",
		name: "In the frozen wastes of the far west, nothing can survive except those who are able to channel the tremendous power of the Iceheart at the land's core - and who can resist succumbing even as it stills your blood and freezes your bones.",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_crystal_maiden_Strengths",
		name: "You possess above-average defenses for a damage dealer, being able to slow or stun enemies as well as shield yourself. However, your damage is fairly slow and dependent on keeping your chill effects high.",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_dragon_knight",
		name: "Flamekeeper",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_dragon_knight_Lore",
		name: "The Flamekeepers are an ancient order devoted to protecting the Sacred Flame, the funeral pyre of a slain god, until nothing but ash remains. Outside of their monastery, they have a reputation as standoffish but dependable warriors.",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_dragon_knight_Strengths",
		name: "You have high innate armor and a variety of strong defensive tools, as well as consistent albeit mediocre area-of-effect damage. You have only limited self-healing, however, and poor mobility.",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_furion",
		name: "Elder Druid",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_furion_Lore",
		name: "The druids of the Westwood have a long history of isolationism, but recent incursions into their forests have forced them to emerge once more and lend their skills to the defense of the world.",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_furion_Strengths",
		name: "You have access to both strong single- and multi-target healing spells as well as ways to restore your allies' mana. On the downside, your spells are expensive and slow, and require careful attention to not waste their effects.",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_omniknight",
		name: "War Priest",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_omniknight_Lore",
		name: "In all ages there are holy men, and in all ages there are warriors, but rare are those who wield the healing power of the holy light as well as the hammer, and do not hesitate to use either.",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_omniknight_Strengths",
		name: "You have access to strong single-target healing and damage prevention, and if all else fails, Resurrect can bring the dead back to life. Your area-of-effect healing is lacking, though, and your poor range means you have to mind your position well.",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_phantom_assassin",
		name: "Nightblade",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_phantom_assassin_Lore",
		name: "LORE LORE LORE",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_phantom_assassin_Strengths",
		name: "Your mobility and physical damage are both above par, but your short attack range means you have to stay close to danger to deal damage and your abilities are less efficient without enough targets to maximize their potential.",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_rubick",
		name: "Evoker",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_rubick_Lore",
		name: "The great wizard colleges of the world have sired some of the finest spellcasters in the world, but also some of the most unstable. Behind each nervous giggle lies a barely contained torrent of terrifying magical energy, waiting to be set loose upon the world.",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_rubick_Strengths",
		name: "You deal consistent, high magical damage and have access to both single- and multi-target offensive abilities - at the cost of high mana consumption and an almost complete lack of defensive tools.",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_warlock",
		name: "Blood Mage",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_warlock_Lore",
		name: "Rumors whisper that the blood mages of Gairn have sworn pacts with powerful demons that grants them their dire magic, but the truth is their power comes from within - from the power of blood, of sacrifice, of being willing to do what it takes to achieve great power.",
	});

	StandardTooltips.push({
		classname: "npc_dota_hero_warlock_Strengths",
		name: "You have nearly unlimited reserves of mana and strong magical area-of-effect damage, but your abilities are slow and unwieldy and you're constantly teetering on the brink of death. Ignoring the cost of Blood Channeling for too long could quickly prove your undoing.",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_animated_water",
		name: "Brackwater Elemental",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_deflamerizer",
		name: "Foreman Barlowe",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_deforester",
		name: "Foreman Harlowe",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_grizzly_basher",
		name: "Grizzly Basher",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_grizzly_shaman",
		name: "Grizzly Elder",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_grizzly_thrasher",
		name: "Grizzly Thrasher",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_hero_damage_totem",
		name: "Warflame Totem",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_hero_earth_totem",
		name: "Stone Serpent Totem",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_hero_mana_totem",
		name: "Carp Totem",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_hero_spitter_ward",
		name: "Spitter Weed",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_hero_tombstone",
		name: "Tombstone",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_naga_bruiser",
		name: "Naga Legionnaire",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_naga_sneak",
		name: "Reef Skulk",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_naga_sorceress",
		name: "Naga Sorceress",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_ogre_bruiser",
		name: "Ogre Bruiser",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_ogre_mage",
		name: "Ogre Frost Mage",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_spider_grabber",
		name: "Gloom Ripper",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_spider_medium",
		name: "Gloom Skitterer",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_spiderite",
		name: "Spiderite",
	});

	StandardTooltips.push({
		classname: "npc_dota_ff_spiderling",
		name: "Gloom Spiderling",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_deathknight_blue",
		name: "Dreadlord Iceheart",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_deathknight_green",
		name: "Dreadlord Gravemaw",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_ogre_magi",
		name: "Gorlog Flamefist",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_ogre_magi_challenge0",
		name: "Delta Split",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_ogre_magi_challenge0_description",
		name: "Finish the encounter without allowing Chain Ignite to bounce more than 5 times total.",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_ogre_magi_challenge1",
		name: "Bad Blood",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_ogre_magi_challenge1_description",
		name: "Kill all summoned ogres before Gorlog can cast Mass Bloodlust.",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_ogre_magi_Description",
		name: "It is uncertain how this two-headed lunk achieved such devastating mastery over the elements, but it spells bad news for you.",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_oversight",
		name: "Night Orchid",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_siren",
		name: "Storm Witch Hecate",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_siren_Description",
		name: "The sorceress-queen of a clan of river naga that have been making inroads into the Westwood lately. Regardless of whether the naga's presence is the source of the corruption, she is a threat that must be dealt with before the forest can be at rest.",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_spider",
		name: "Gloomwidow Sycorax",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_spider_Description",
		name: "This giant spider has been scurrying around the woods for longer than anyone can remember, abducting innocents to feed her foul brood. The time has come to put an end to the beast, once and for all.",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_timbersaw",
		name: "Chopmaster Sawcrank",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_timbersaw_Description",
		name: "Part psychotic madman, part hulking wood-shredding machine, all hellbent for cutting things up and not too concerned with details like whether it's wood or flesh. Needless to say, he must be stopped.",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_underlord",
		name: "Vulgoth the Despoiler",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_underlord_Description",
		name: "The source of the malice overtaking the woods finally makes itself clear. This fiend from the depths surely has only one thing in mind: total and utter corruption.",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_ursa",
		name: "Swiftpaw the Hunter",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_ursa_Description",
		name: "Some strange sorcery has gripped the minds of the beasts of the forest, and there are few more formidable than Swiftpaw, proud hunter of the bear tribes of the woods. He fights with a crazed ferocity now, using a combination of brute strength and druidic magic to great effect.",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_visage",
		name: "Amon the Gravekeeper",
	});

	StandardTooltips.push({
		classname: "npc_ff_boss_visage_Description",
		name: "In front of the Citadel of Shadows sprawls a vast graveyard, tended to by the unearthly gargoyle Amon. The recently dead are his domain, serving as both minions and fodder. Take care you do not join them.",
	});

	StandardTooltips.push({
		classname: "npc_ff_demon_captain",
		name: "Abyssal Tormentor",
	});

	StandardTooltips.push({
		classname: "npc_ff_demon_captain_2",
		name: "Abyssal Adjutant",
	});

	StandardTooltips.push({
		classname: "npc_ff_demon_captain_3",
		name: "Abyssal Commander",
	});

	StandardTooltips.push({
		classname: "npc_ff_demon_hulk",
		name: "Flamebearer",
	});

	StandardTooltips.push({
		classname: "npc_ff_demon_smasher",
		name: "Imp Crusher",
	});

	StandardTooltips.push({
		classname: "npc_ff_demon_supplicant",
		name: "Dark Supplicant",
	});

	StandardTooltips.push({
		classname: "npc_ff_demon_thrall",
		name: "Imp Thrall",
	});

	StandardTooltips.push({
		classname: "npc_ff_demon_witch",
		name: "Baleful Sorcerer",
	});

	StandardTooltips.push({
		classname: "npc_ff_flower_treant",
		name: "Floral Sapling",
	});

	StandardTooltips.push({
		classname: "npc_ff_hero_flame_elemental",
		name: "Flame Elemental",
	});

	StandardTooltips.push({
		classname: "npc_ff_hero_stone_elemental",
		name: "Stone Elemental",
	});

	StandardTooltips.push({
		classname: "npc_ff_hero_water_elemental",
		name: "Water Elemental",
	});

	StandardTooltips.push({
		classname: "npc_ff_hostile_target_dummy",
		name: "Target Dummy",
	});

	StandardTooltips.push({
		classname: "npc_ff_shadow_satyr",
		name: "Darkbramble Elemental",
	});

	StandardTooltips.push({
		classname: "npc_ff_target_dummy",
		name: "Friendly Target Dummy",
	});

	StandardTooltips.push({
		classname: "npc_ff_visage_archer",
		name: "Risen Bowman",
	});

	StandardTooltips.push({
		classname: "npc_ff_visage_tombstone",
		name: "Dread Monument",
	});

	StandardTooltips.push({
		classname: "npc_ff_visage_zombie",
		name: "Risen Dead",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_dance_antimagic",
		name: "Anti-Magic Cloak",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_dance_antimagic_Description",
		name: "%ability% also grants %bonus_resist%%% magic resistance.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_dance_damage",
		name: "Glint in the Dark",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_dance_damage_Description",
		name: "Increases the damage bonus granted by %ability% by %bonus_damage%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_dance_slayer",
		name: "Stalking Shadows",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_dance_slayer_Description",
		name: "Whenever you kill an enemy under the effect of %ability%, add %slayer_duration% seconds to its duration <i>(up to its normal max duration)</i>.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_knives_bleed",
		name: "Serrated Knives",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_knives_bleed_Description",
		name: "Victims struck by %ability% have a %bleed_chance%%% chance to bleed for an additional %bleed_damage%%% of the original damage over %bleed_duration% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_knives_fanofknives",
		name: "Fan of Knives",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_knives_fanofknives_Description",
		name: "%ability% now instead hits all enemies in a radius around you for full damage, but its damage is reduced by %base_damage%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_knives_impale",
		name: "Impaling Throw",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_knives_impale_Description",
		name: "%ability% also stuns the primary target for %stun_duration% seconds when targeting a non-boss enemy.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_malice_adrenaline",
		name: "Adrenaline Rush",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_malice_adrenaline_Description",
		name: "Consuming Malice also increases your attack speed by %adrenaline_bonus% for %adrenaline_duration% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_malice_deepmalice",
		name: "Murderous Impulse",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_malice_deepmalice_Description",
		name: "Increases your maximum Malice by %max_stacks% and your chance to generate Malice by %chance%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_mark_armorbreak",
		name: "Expose Weakness",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_mark_armorbreak_Description",
		name: "%ability% now also reduces the target's armor by %armor%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_mark_cripple",
		name: "Garrote",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_mark_cripple_Description",
		name: "%ability% now also silences non-boss targets and reduces their attack speed by %attack_slow%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_rush_basedamage",
		name: "Slice and Dice",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_rush_basedamage_Description",
		name: "Increases %ability%'s base damage by %damage_base%%% of your basic attack damage.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_rush_exploit",
		name: "Coup de Grace",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_rush_exploit_Description",
		name: "Increases the damage %ability% deals to enemies with 20%% or less health by %exploit_damage%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_rush_malice",
		name: "Serial Killer",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_rush_malice_Description",
		name: "%ability% now has a chance equal to your normal Killing Intent chance to generate additional Malice on each hit.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_sleepdart_leech",
		name: "Leeching Poison",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_sleepdart_leech_Description",
		name: "%ability% now also heals you for %leech%%% of your maximum health whenever it deals damage.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_sleepdart_slow",
		name: "Heavy Sleeper",
	});

	StandardTooltips.push({
		classname: "Rune_ff_assassin_sleepdart_slow_Description",
		name: "%ability% now also applies a 100%% tapering movement slow for %slow_duration% seconds after the sleep effect expires.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_bulkup_damage",
		name: "Battle Cry",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_bulkup_damage_Description",
		name: "%ability% now also increases the attack damage of you and your allies by %aura_damage%%% while active.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_bulkup_rage",
		name: "Unleashed Fury",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_bulkup_rage_Description",
		name: "%ability% now generates %rage_gain% Rage per second while active.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_frenzy_aggro",
		name: "Aggression",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_frenzy_aggro_Description",
		name: "Grants a %chance_on_attack%%% chance to generate %rage_on_attack% Rage when attacking an enemy.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_gusto_rage",
		name: "Bloodrush",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_gusto_rage_Description",
		name: "%ability% also instantly generates %rage_gain% Rage.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_gusto_speed",
		name: "Forward March",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_gusto_speed_Description",
		name: "%ability% also increases your movement speed by %move_speed%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_ignorepain_aura",
		name: "Shield Wall",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_ignorepain_aura_Description",
		name: "While %ability% is active, your allies also take %aura_reduction%%% less damage from all sources.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_ignorepain_doublecharge",
		name: "Nerves of Steel",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_ignorepain_doublecharge_Description",
		name: "Reduces %ability%'s cooldown by %cooldown% seconds and allows you to stack up to %max_charges% more charges.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_ignorepain_healing",
		name: "Second Wind",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_ignorepain_healing_Description",
		name: "Increases all healing received while %ability% is active by %heal_amp%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_savage_hew_bleed",
		name: "Rending Hew",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_savage_hew_bleed_Description",
		name: "%ability% also causes the victims to bleed for %bleed% damage over %bleed_duration% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_savage_hew_healing",
		name: "Bloodthirsty Chop",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_savage_hew_healing_Description",
		name: "Increases the amount %ability% can heal you for by %heal%%% of your maximum health.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_savage_hew_range",
		name: "Savage Throw",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_savage_hew_range_Description",
		name: "%ability% is now a ranged ability that hurls a massive axe at an enemy, hitting all enemies around it.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_stomp_armor",
		name: "Iron Skin",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_stomp_armor_Description",
		name: "%ability% also grants you %armor% armor for %armor_duration% seconds after you land.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_stomp_damage",
		name: "Meteor Stomp",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_stomp_damage_Description",
		name: "Increases the damage of %ability% by %damage%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_stomp_stun",
		name: "Wrenching Impact",
	});

	StandardTooltips.push({
		classname: "Rune_ff_berserker_stomp_stun_Description",
		name: "Increases %ability%'s slow effects by %move_slow%%% and grants it a %stun_chance%%% chance to stun non-boss enemies for %stun_duration% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_blink_immunity_emergency",
		name: "Emergency Recall",
	});

	StandardTooltips.push({
		classname: "Rune_ff_blink_immunity_emergency_Description",
		name: "When damage brings your health below %emergency_threshold%%%, the cooldown of %ability% is now instantly refreshed. Can occur at most once every %emergency_cooldown% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_blink_immunity_long",
		name: "Dimension Door",
	});

	StandardTooltips.push({
		classname: "Rune_ff_blink_immunity_long_Description",
		name: "Increases the teleport distance of %ability% by %distance%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_bloodlust_empowered",
		name: "Bloodthirst",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_bloodlust_empowered_Description",
		name: "Increases the lifesteal granted by %ability% by %lifesteal%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_bloodlust_linkback",
		name: "Sympathetic Link",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_bloodlust_linkback_Description",
		name: "When cast on an ally, %ability% also heals you for %linkback%%% of the heal amount whenever they lifesteal.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_cloudkill_cooldown",
		name: "Roiling Clouds",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_cloudkill_cooldown_Description",
		name: "Reduces %ability%'s cooldown by %cooldown% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_cloudkill_threshold",
		name: "Choking Fumes",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_cloudkill_threshold_Description",
		name: "%ability% now instantly kills non-boss enemies with less than %kill_threshold%%% remaining health.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_darkblast_instant",
		name: "Rupturing Blast",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_darkblast_instant_Description",
		name: "%ability% now deals another %instant_damage%%% damage at the beginning of its cast.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_darkblast_slow",
		name: "Dark Chill",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_darkblast_slow_Description",
		name: "%ability% now also applies a tapering %slow%%% slow for %slow_duration% seconds to non-boss enemies.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_darkblast_wideblast",
		name: "Blast Wave",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_darkblast_wideblast_Description",
		name: "Increases %ability%'s area of effect by %radius%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_drain_life_armor",
		name: "Blood Armor",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_drain_life_armor_Description",
		name: "While channelling %ability%, you take %damage_reduction%%% less damage from all sources.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_drain_life_free",
		name: "Siphon Life",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_drain_life_free_Description",
		name: "Removes %ability%'s cooldown and reduces its mana cost by %manacost%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_drain_life_overheal",
		name: "Overflowing Vitae",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_drain_life_overheal_Description",
		name: "Whenever %ability% heals you beyond your maximum health, %overheal_share%%% of the excess is split between nearby allies instead.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_dreadcurse_lifesteal",
		name: "Leeching Curse",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_dreadcurse_lifesteal_Description",
		name: "%ability%'s final explosion heals you for %lifesteal_finale%%% of the damage dealt.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_dreadcurse_long",
		name: "Grinding Agony",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_dreadcurse_long_Description",
		name: "Increases %ability%'s damage per second by %damage_tick%%% and duration by %duration%%%, but it no longer explodes when it expires.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_dreadcurse_miss",
		name: "Debilitating Hex",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_dreadcurse_miss_Description",
		name: "%ability% also causes the victim to miss %miss_chance%%% of its attacks.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_taintedblood_boiling",
		name: "Boiling Blood",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_taintedblood_boiling_Description",
		name: "%ability% now deals magical damage to enemies in a small radius around you equal to %aoe_damage%%% of the health lost.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_taintedblood_economy",
		name: "Cthonic Vitality",
	});

	StandardTooltips.push({
		classname: "Rune_ff_bloodmage_taintedblood_economy_Description",
		name: "Reduces %ability%'s health cost by %damage_per_stack%%% and makes it non-lethal.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_counterspell_cooldown",
		name: "Force Spike",
	});

	StandardTooltips.push({
		classname: "Rune_ff_counterspell_cooldown_Description",
		name: "Reduces the cooldown of %ability% by %cooldown% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_counterspell_mana",
		name: "Mana Drain",
	});

	StandardTooltips.push({
		classname: "Rune_ff_counterspell_mana_Description",
		name: "Successfully interrupting a spell with %ability% now restore %mana_gain%%% of your total mana.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_barkskin_armor",
		name: "Ironbark",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_barkskin_armor_Description",
		name: "Increases the armor bonus granted by %ability% by %armor%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_barkskin_damage",
		name: "Stone Briars",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_barkskin_damage_Description",
		name: "Increases the damage dealt by %ability% by %damage%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_barkskin_selfcast",
		name: "Nature's Blessing",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_barkskin_selfcast_Description",
		name: "Casting %ability% on yourself removes the ability's cooldown, doubles its duration, and it also increases all healing you do by %selfcast_healamp%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_chain_heal_bounces",
		name: "Dancing Spirit",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_chain_heal_bounces_Description",
		name: "Increases the number of times %ability% can bounce by %max_bounces% and reduces the healing penalty per bounce by %jump_reduction%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_chain_heal_mana",
		name: "Spirit Channeling",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_chain_heal_mana_Description",
		name: "Reduces %ability%'s mana cost by %manacost%%% and cooldown by %cooldown% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_chain_heal_synergy",
		name: "Spirit Surge",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_chain_heal_synergy_Description",
		name: "%ability% now heals targets affected by Rejuvenation for %synergy%%% more.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_dispel_count",
		name: "Purge Magic",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_dispel_count_Description",
		name: "%ability% now removes one more buff or debuff from the target.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_dispel_slow",
		name: "Disruption",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_dispel_slow_Description",
		name: "%ability% also applies a tapering %slow%%% movement slow for %slow_duration% seconds when cast on an enemy.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_healing_rain_damage",
		name: "Acid Rain",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_healing_rain_damage_Description",
		name: "%ability% now also deals %damage% magical damage per second split among enemies in its area of effect.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_healing_rain_wide",
		name: "Healing Deluge",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_healing_rain_wide_Description",
		name: "Increases %ability%'s area of effect by %radius%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_innervate_chance",
		name: "Inspiration",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_innervate_chance_Description",
		name: "Increases %ability%'s chance to trigger on ability cast by %chance_cast%%% and on attack by %chance_attack%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_innervate_heal",
		name: "Dual Harmony",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_innervate_heal_Description",
		name: "%ability% now also heals the recipient for %healing%%% of their total health.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_rejuvenate_critical",
		name: "Renewal",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_rejuvenate_critical_Description",
		name: "Increases the initial healing of %ability% when cast on allies with %critical_threshold%%% or less health by %critical_amount%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_rejuvenate_hot",
		name: "Regrowth",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_rejuvenate_hot_Description",
		name: "Increases %ability%'s healing over time by %healing_over_time%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_rejuvenate_swiftmend",
		name: "Flash of Life",
	});

	StandardTooltips.push({
		classname: "Rune_ff_druid_rejuvenate_swiftmend_Description",
		name: "When cast on a target that already has the healing over time effect on it, %ability% will now instantly apply %swiftmend%%% of the remaining healing.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_flame_dot",
		name: "Smoldering Flame",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_flame_dot_Description",
		name: "Increases %ability%'s damage over time and duration by %damage_dot%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_flame_recast",
		name: "Molten Fury",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_flame_recast_Description",
		name: "%ability% now has a %recast_chance%%% chance whenever it deals damage to remove the mana cost of your next Stonefury and immediately refresh its cooldown.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_flame_speed",
		name: "Feverish Strikes",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_flame_speed_Description",
		name: "Increases Flame Affinity's attack speed bonus by %essence_attackspeed%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_mastery_healing",
		name: "Ancient Blood",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_mastery_healing_Description",
		name: "Switching elemental affinities now also heals you for %healing%%% of your maximum health.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_mastery_linger",
		name: "Elemental Expertise",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_mastery_linger_Description",
		name: "Whenever you switch elemental affinities, the previous affinity now lingers for %linger% seconds rather than being immediately removed.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_smash_aoe",
		name: "Rock Shards",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_smash_aoe_Description",
		name: "%ability% now deals %aoe_damage%%% damage to other enemies in a radius around the target.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_smash_defense",
		name: "Stoneskin",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_smash_defense_Description",
		name: "Increases the damage reduction granted by Stone Affinity by %essence_reduction%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_smash_mana",
		name: "Earth Focus",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_smash_mana_Description",
		name: "Reduces the mana cost of %ability% by %manacost%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_spiritlink_healing",
		name: "Vital Link",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_spiritlink_healing_Description",
		name: "Increases %ability%'s shared healing by another %healing_factor%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_spiritlink_mana",
		name: "Innervating Link",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_spiritlink_mana_Description",
		name: "%ability% now also grants mana regeneration equal to %mana_factor%%% of the linked ally's maximum mana per second.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_summon_duration",
		name: "Master Summoner",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_summon_duration_Description",
		name: "Increases %ability%'s duration by %duration% seconds and reduces its manacost by %manacost%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_summon_synergy",
		name: "Elemental Synergy",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_summon_synergy_Description",
		name: "While your summoned elemental is alive, your corresponding elemental ability deals %synergy%%% more damage or heals for %synergy%%% more.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_water_cheap",
		name: "Healing Stream",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_water_cheap_Description",
		name: "Reduces %ability%'s mana cost by %manacost%%% and cooldown by %cooldown% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_water_regen",
		name: "Invigorating Water",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_water_regen_Description",
		name: "Water Affinity now also increases your mana regeneration by %mana_regen% per second.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_water_selfheal",
		name: "Deep Cleanse",
	});

	StandardTooltips.push({
		classname: "Rune_ff_earthwarden_water_selfheal_Description",
		name: "Increases %ability%'s primary healing by %self_healing%%% when cast on yourself.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_healer_immunity_dispel",
		name: "Cleansing Ward",
	});

	StandardTooltips.push({
		classname: "Rune_ff_healer_immunity_dispel_Description",
		name: "%ability% now also dispels one debuff from you and the target.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_healer_immunity_reduction",
		name: "Resilient Spirit",
	});

	StandardTooltips.push({
		classname: "Rune_ff_healer_immunity_reduction_Description",
		name: "%ability% now also grants you and the target %damage_reduction%%% incoming damage reduction for %damage_reduction_duration% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_frost_nova_damage",
		name: "Biting Ice",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_frost_nova_damage_Description",
		name: "Increases %ability%'s damage by %damage%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_frost_nova_knockback",
		name: "Arctic Winds",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_frost_nova_knockback_Description",
		name: "%ability% now also pushes non-boss enemies away from you.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_frost_nova_range",
		name: "Frost Nova",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_frost_nova_range_Description",
		name: "Increases the cast range and area of effect of %ability% by %range%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_frost_tomb_aoe",
		name: "Freezing Blast",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_frost_tomb_aoe_Description",
		name: "%ability% now deals an additional %aoe_damage%%% of its damage to other enemies in an area around the primary target and chills them.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_frost_tomb_brittle",
		name: "Brittle Ice",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_frost_tomb_brittle_Description",
		name: "%ability% now also reduces the target's armor by %armor% and magic resistance by %magic_resist%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_ice_serpent_chill",
		name: "Hunting Serpent",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_ice_serpent_chill_Description",
		name: "%ability% now has a %chill_crit%%% chance to deal double damage when hitting a chilled target.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_ice_serpent_manacost",
		name: "Gelid Scales",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_ice_serpent_manacost_Description",
		name: "Reduces the mana cost of %ability% by %manacost%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_ice_serpent_venom",
		name: "Icy Venom",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_ice_serpent_venom_Description",
		name: "%ability% now deals another %venom_damage%%% damage over %venom_duration% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_iceshield_chill",
		name: "Freezing Barrier",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_iceshield_chill_Description",
		name: "%ability% now chills enemies that attack the shielded hero.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_iceshield_cooldown",
		name: "Ice Ward",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_iceshield_cooldown_Description",
		name: "Reduces the cooldown of %ability% by %cooldown% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_icicles_damage",
		name: "Razor Ice",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_icicles_damage_Description",
		name: "Increases %ability%'s damage bonus to chilled targets by %chill_bonus%%% per stack.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_icicles_extend",
		name: "Endless Winter",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_icicles_extend_Description",
		name: "%ability% now refreshes the duration of Winter's Chill on the target. <i>(It does not add another stack.)</i>",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_icicles_shield",
		name: "Layers of Frost",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_icicles_shield_Description",
		name: "Each %ability% impact now increases the absorption and duration of your next Ice Barrier by %shield_boost%%%, stacking up to %shield_boost_max% times.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_wintergrasp_freeze",
		name: "Winter's Grasp",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_wintergrasp_freeze_Description",
		name: "%ability% now also has a %freeze_chance%%% chance to immobilize non-boss enemies for %freeze_duration% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_wintergrasp_magresist",
		name: "Biting Chill",
	});

	StandardTooltips.push({
		classname: "Rune_ff_icemage_wintergrasp_magresist_Description",
		name: "%ability% now reduces magic resistance by another %magic_resist%%% per stack.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_barrier_duration",
		name: "Stable Barrier",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_barrier_duration_Description",
		name: "Increases %ability%'s duration by %duration%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_barrier_heal",
		name: "Inner Fire",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_barrier_heal_Description",
		name: "%ability% now heals you for %leftover_heal%%% of any remaining shield capacity when it expires.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_barrier_mana",
		name: "Surging Flame",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_barrier_mana_Description",
		name: "%ability% now also restores mana equal to %mana_restore%%% of the damage absorbed.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_brand_lifesteal",
		name: "Leeching Brand",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_brand_lifesteal_Description",
		name: "%ability% now also heals you for %lifesteal%%% of the damage dealt.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_brand_reduction",
		name: "Condemnation",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_brand_reduction_Description",
		name: "Increases %ability%'s damage reduction by another %damage_reduction%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_lasso_bash",
		name: "Iron Reversal",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_lasso_damage",
		name: "Searing Grip",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_lasso_damage_Description",
		name: "Casting %ability% while inside your Mark of Flame deals %sigil_damage%%% of Mark of Flame's per-second damage to the target on landing.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_reactivearmor_damage",
		name: "Spiked Armor",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_reactivearmor_damage_Description",
		name: "Increases %ability%'s damage by another %damage_from_armor%%% of your total armor.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_reactivearmor_passive",
		name: "Roaring Pyre",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_reactivearmor_passive_Description",
		name: "%ability% now automatically lashes out at a random enemy in melee range once every %passive_interval% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_shieldbash_armor",
		name: "Ardent Defense",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_shieldbash_armor_Description",
		name: "Increases %ability%'s armor bonus by %armor%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_shieldbash_fire",
		name: "Fiery Slam",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_shieldbash_fire_Description",
		name: "Casting %ability% while inside your Mark of Flame now deals an additional %sigil_damage%%% of the damage as magical damage in a %sigil_aoe% radius around the target.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_shieldbash_stun",
		name: "Shield Bash",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_shieldbash_stun_Description",
		name: "%ability% now also stuns non-boss enemies for %stun_duration% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_sigil_block",
		name: "Warding Mark",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_sigil_block_Description",
		name: "%ability% now also grants you a %block_chance%%% chance to block %block% damage while you are inside it.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_sigil_damage",
		name: "Bonfire",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_sigil_damage_Description",
		name: "Increases %ability%'s damage by %damage%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_sigil_regen",
		name: "Invigorating Flame",
	});

	StandardTooltips.push({
		classname: "Rune_ff_knight_sigil_regen_Description",
		name: "Increases %ability%'s health regeneration bonus by %health_regen%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_absolution_healing",
		name: "Soothing Light",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_absolution_healing_Description",
		name: "Increases %ability%'s healing proximity bonus by %healing_proximity%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_absolution_preventdeath",
		name: "Salvation",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_absolution_preventdeath_Description",
		name: "Your allies now cannot die while under the effect of %ability%. <i>(You, however, still can.)</i>",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_aegis_cooldown",
		name: "Stalwart Faith",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_aegis_cooldown_Description",
		name: "Reduces the cooldown of %ability% by %cooldown% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_aegis_echo",
		name: "Holy Ramparts",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_aegis_echo_Description",
		name: "%ability% also grants a shield equal to %echo_shield%%% of the base amount to all other allies with your Benediction effect on them.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_aegis_reflect",
		name: "Rebuke the Wicked",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_aegis_reflect_Description",
		name: "%ability% now also reflects %damage_reflection%%% of the damage absorbed as magical damage.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_chastise_aoe",
		name: "Hammer of Justice",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_chastise_aoe_Description",
		name: "%ability% now also deals %aoe_damage%%% damage to other enemies in an area around the target.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_chastise_heal",
		name: "Balance the Scales",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_chastise_heal_Description",
		name: "%ability% now splits healing equal to %healing%%% of the damage dealt among wounded allies near the target.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_chastise_mana",
		name: "Inspiring Light",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_chastise_mana_Description",
		name: "%ability% now also restores %mana_restore%%% of your total mana.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_fervor_heal",
		name: "Devotion",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_fervor_heal_Description",
		name: "Increases the healing and duration of %ability% by %heal%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_fervor_retribution",
		name: "Surging Faith",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_fervor_retribution_Description",
		name: "%ability% now has a %fervor_chance%%% chance to generate another Fervor point whenever it activates.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_holylight_echo",
		name: "Echo of Light",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_holylight_echo_Description",
		name: "%ability% now also heals all other allies with Benediction on them for %echo_healing%%% of the heal amount.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_holylight_mana",
		name: "Invigorate Spirit",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_holylight_mana_Description",
		name: "Whenever %ability% overheals another hero, it now restores mana equal to %mana_conversion%%% of the excess healing.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_holylight_range",
		name: "Light's Reach",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_holylight_range_Description",
		name: "Increases the cast range of %ability% by %range%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_resurrect_cheap",
		name: "Miracle",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_resurrect_cheap_Description",
		name: "Reduces the mana cost of %ability% by %manacost%%%, but increases its cooldown by %cooldown%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_resurrect_full",
		name: "Holy Resurrection",
	});

	StandardTooltips.push({
		classname: "Rune_ff_paladin_resurrect_full_Description",
		name: "Increases the health and mana restored by %ability% to 100%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_disintegrate_fast",
		name: "Rapid Disintegration",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_disintegrate_fast_Description",
		name: "%ability% now deals its damage %duration%%% faster.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_disintegrate_line",
		name: "Wide Angle Beam",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_disintegrate_line_Description",
		name: "%ability% now also deals %line_damage%%% of the damage to enemies in a line between the caster and target.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_embers_burn",
		name: "Immolating Embers",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_embers_burn_Description",
		name: "Each wave of %ability% now has a %burn_chance%%% chance to inflict your Immolating Bolt effect.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_embers_more",
		name: "Firestorm",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_embers_more_Description",
		name: "Adds an additional wave to %ability%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_embers_slow",
		name: "Heavy Rain",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_embers_slow_Description",
		name: "%ability% now also applies a 100%% tapering slow for %slow_duration% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_flame_cheap",
		name: "Pyroclastic Flow",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_flame_cheap_Description",
		name: "Reduces %ability%'s mana cost by %manacost%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_flame_splash",
		name: "Explosive Bolt",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_flame_splash_Description",
		name: "%ability% now also instantly deals one tick of damage in a radius around the target.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_flame_weaken",
		name: "Melt Weapons",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_flame_weaken_Description",
		name: "%ability% now also reduces non-boss enemies' attack damage by %weaken%%%. <i>(This effect does not stack, but can be refreshed normally.)</i>",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_heatup_power",
		name: "Arcane Power",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_heatup_power_Description",
		name: "Increases your maximum spell damage gained from %ability% by %charge_spellamp%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_heatup_stability",
		name: "Arcane Stability",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_heatup_stability_Description",
		name: "It now takes %charge_duration% seconds longer before your %ability% begins to wane.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_lightningorb_mana",
		name: "Lightning Conduit",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_lightningorb_mana_Description",
		name: "Reduces the mana cost of %ability% by %manacost%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_lightningorb_ramp",
		name: "Gathering Storm",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_lightningorb_ramp_Description",
		name: "%ability%'s damage now ramps up over time, up to an additional %damage_ramp%%% damage.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_lightningorb_static",
		name: "Static Orb",
	});

	StandardTooltips.push({
		classname: "Rune_ff_pyromancer_lightningorb_static_Description",
		name: "%ability% now manifests immediately at the target position and doesn't move, but the time between zaps is increased by %zap_interval%%%.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_tank_immunity_emergency",
		name: "Desperate Guard",
	});

	StandardTooltips.push({
		classname: "Rune_ff_tank_immunity_emergency_Description",
		name: "When damage brings your health below %emergency_threshold%%%, %ability% will automatically activate. This does not start the ability's cooldown, but can occur at most once every %emergency_cooldown% seconds.",
	});

	StandardTooltips.push({
		classname: "Rune_ff_tank_immunity_heal",
		name: "Surge of Vitality",
	});

	StandardTooltips.push({
		classname: "Rune_ff_tank_immunity_heal_Description",
		name: "%ability% now also heals you for %heal%%% of your maximum health.",
	});

	StandardTooltips.push({
		classname: "AbilityTooltip_Rune",
		name: "Skill Tome: ",
	});

	StandardTooltips.push({
		classname: "addonname",
		name: "Untitled Boss Fighting Game",
	});

	StandardTooltips.push({
		classname: "announce_defeat",
		name: "DEFEATED",
	});

	StandardTooltips.push({
		classname: "announce_prepare_respawn",
		name: "Reviving - try again!",
	});

	StandardTooltips.push({
		classname: "announce_victory",
		name: "VICTORY",
	});

	StandardTooltips.push({
		classname: "boss_adds",
		name: "Additional Enemies",
	});

	StandardTooltips.push({
		classname: "boss_challenges",
		name: "Challenges",
	});

	StandardTooltips.push({
		classname: "close",
		name: "Close",
	});

	StandardTooltips.push({
		classname: "custom_game_setup_timer",
		name: "{s:countdown_timer}",
	});

	StandardTooltips.push({
		classname: "damagemeter_header",
		name: "DAMAGE DEALT",
	});

	StandardTooltips.push({
		classname: "dota_ability_variable_heal_amp",
		name: "Heal Amplification",
	});

	StandardTooltips.push({
		classname: "DOTA_BadGuys",
		name: "Fiends",
	});

	StandardTooltips.push({
		classname: "DOTA_GoodGuys",
		name: "Heroes",
	});

	StandardTooltips.push({
		classname: "dota_hud_error_cant_cast_on_living",
		name: "Can't Target Living Units",
	});

	StandardTooltips.push({
		classname: "dota_hud_error_must_target_totem",
		name: "Must Target Totem",
	});

	StandardTooltips.push({
		classname: "EndScreen_Close",
		name: "LEAVE GAME",
	});

	StandardTooltips.push({
		classname: "EndScreen_Defeat_Blurb",
		name: "Alas, your party has met its fate. But don't give up - use what you've learned to go further next time. Perhaps try a different party composition or buying different items?",
	});

	StandardTooltips.push({
		classname: "EndScreen_DefeatedBy",
		name: "Defeated By<br/><b>{s:boss_name}</b>",
	});

	StandardTooltips.push({
		classname: "EndScreen_FinalGrade",
		name: "Final Grade",
	});

	StandardTooltips.push({
		classname: "EndScreen_Victory_Blurb",
		name: "You've fought well, and the day is yours. But there is no time to rest - try a higher difficulty level for a greater challenge, or try to improve your final grade. The highest grade achievable is <b>S</b>!",
	});

	StandardTooltips.push({
		classname: "ff_hud_error_not_enough_souls",
		name: "Not Enough Soul Gems",
	});

	StandardTooltips.push({
		classname: "HeroSelect_Abilities",
		name: "Abilities",
	});

	StandardTooltips.push({
		classname: "HeroSelect_Category_DPS",
		name: "DAMAGE DEALERS",
	});

	StandardTooltips.push({
		classname: "HeroSelect_Category_Healer",
		name: "HEALERS",
	});

	StandardTooltips.push({
		classname: "HeroSelect_Category_Tank",
		name: "TANKS",
	});

	StandardTooltips.push({
		classname: "HeroSelect_DefensiveAbility",
		name: "Defensive",
	});

	StandardTooltips.push({
		classname: "HeroSelect_FinishButton",
		name: "Enter Game",
	});

	StandardTooltips.push({
		classname: "HeroSelect_Header",
		name: "Select Hero",
	});

	StandardTooltips.push({
		classname: "HeroSelect_Hero_RoleHeader",
		name: "Role: {s:role_name}",
	});

	StandardTooltips.push({
		classname: "HeroSelect_Hero_StatsArmor",
		name: "Armor: <font color='#ffffff'>{i:armor}</font>",
	});

	StandardTooltips.push({
		classname: "HeroSelect_Hero_StatsDamage",
		name: "Attack Damage: <font color='#ffffff'>{i:damage_min} - {i:damage_max}</font>",
	});

	StandardTooltips.push({
		classname: "HeroSelect_Hero_StatsHeader",
		name: "Attributes",
	});

	StandardTooltips.push({
		classname: "HeroSelect_Hero_StatsHealth",
		name: "Health: {i:max_hp}",
	});

	StandardTooltips.push({
		classname: "HeroSelect_Hero_StatsMana",
		name: "Mana: {i:max_mana}",
	});

	StandardTooltips.push({
		classname: "HeroSelect_Hero_StrengthsHeader",
		name: "Strengths & Weaknesses",
	});

	StandardTooltips.push({
		classname: "HeroSelect_Loading",
		name: "Loading...",
	});

	StandardTooltips.push({
		classname: "HeroSelect_MapHeader",
		name: "Map: {s:map_name_localized}",
	});

	StandardTooltips.push({
		classname: "HeroSelect_PickButton",
		name: "Pick {s:name}",
	});

	StandardTooltips.push({
		classname: "HeroSelect_PickPhase_Info",
		name: "There must be one <b>tank</b> and one <b>healer</b> on your team.",
	});

	StandardTooltips.push({
		classname: "HeroSelect_PrimaryAbilities",
		name: "Primary",
	});

	StandardTooltips.push({
		classname: "HeroSelect_Role_DPS",
		name: "Damage dealers have high damage output, but are very fragile. Your goal is to maximize damage output while avoiding danger.",
	});

	StandardTooltips.push({
		classname: "HeroSelect_Role_Healer",
		name: "Healers have a wide array of support and healing abilities. Your goal is to keep the other heroes - and yourself - alive.",
	});

	StandardTooltips.push({
		classname: "HeroSelect_Role_Tank",
		name: "Tanks are highly durable. Your goal is to keep the attention of enemies and soak attacks other heroes can't survive.",
	});

	StandardTooltips.push({
		classname: "HeroSelect_RoleHeader_DPS",
		name: "Damage Dealer",
	});

	StandardTooltips.push({
		classname: "HeroSelect_RoleHeader_Healer",
		name: "Healer",
	});

	StandardTooltips.push({
		classname: "HeroSelect_RoleHeader_Tank",
		name: "Tank",
	});

	StandardTooltips.push({
		classname: "HeroSelect_RoleLimits",
		name: "Role limits are enabled. Your team must contain <b>one Tank</b> and <b>one Healer</b>.",
	});

	StandardTooltips.push({
		classname: "HeroSelect_SignatureAbility",
		name: "Signature",
	});

	StandardTooltips.push({
		classname: "HeroSelect_UtilityAbility",
		name: "Utility",
	});

	StandardTooltips.push({
		classname: "Map_Westwood",
		name: "The Westwood",
	});

	StandardTooltips.push({
		classname: "Map_Westwood_Lore",
		name: "For centuries, the Westwood has been a haven for those who wished to seek a closeness with nature - free from conflict, watched over by an order of elder druids. Now, a corrupting influence stirs deep in the wood, and its once peaceful inhabitants are growing aggressive...",
	});

	StandardTooltips.push({
		classname: "Neutrals",
		name: "Neutral Team",
	});

	StandardTooltips.push({
		classname: "next_boss_is",
		name: "This Way To...",
	});

	StandardTooltips.push({
		classname: "NoTeam",
		name: "No Team",
	});

	StandardTooltips.push({
		classname: "quest_time_bossteleport",
		name: "Encounter begins",
	});

	StandardTooltips.push({
		classname: "quest_time_reviving",
		name: "Reviving",
	});

	StandardTooltips.push({
		classname: "readyup",
		name: "I'm Ready",
	});

	StandardTooltips.push({
		classname: "readyup_check",
		name: "{s:initiator} wants to start fighting <font color='#ffffff'>{s:boss}</font>. When you are ready, click the <b>I'm Ready</b> button.",
	});

	StandardTooltips.push({
		classname: "readyup_check_others",
		name: "Waiting for other players to ready up...",
	});

	StandardTooltips.push({
		classname: "readyup_description",
		name: "Once you are done preparing, click this button to initiate a ready check. When all players are ready, you will be taken to the boss and the fight will commence.",
	});

	StandardTooltips.push({
		classname: "ReviveButtonHintText",
		name: "You have died. You may spend a revive charge to return to the fight, or wait and see if your teammates might be able to win the fight without you.",
	});

	StandardTooltips.push({
		classname: "ReviveButtonText",
		name: "Revive Now",
	});

	StandardTooltips.push({
		classname: "ReviveTooltip_Header",
		name: "Revive Charges",
	});

	StandardTooltips.push({
		classname: "ReviveTooltip_Text",
		name: "Should you fall in battle, you can be revived with certain spells or items, or by spending a revive charge. If all heroes are dead at the same time, everyone will automatically use a charge to revive themselves (if possible).",
	});

	StandardTooltips.push({
		classname: "ReviveTooltip_Text_2",
		name: "Each time you defeat a boss, all heroes are revived for free and given another revive charge. Heroes with zero charges are given two.",
	});

	StandardTooltips.push({
		classname: "RUne_ff_knight_lasso_bash_Description",
		name: "Casting %ability% now also resets the cooldown of Shield Slam.",
	});

	StandardTooltips.push({
		classname: "RuneTooltip_AbilityHeader",
		name: "Tomes",
	});

	StandardTooltips.push({
		classname: "RuneTooltip_Equipped",
		name: "Equipped",
	});

	StandardTooltips.push({
		classname: "RuneTooltip_Unlocked",
		name: "Free",
	});

	StandardTooltips.push({
		classname: "RuneTooltip_Warning",
		name: "You already have a glyph equipped on this ability. Purchasing another will replace the existing glyph, although you can switch back at no cost later.",
	});

	StandardTooltips.push({
		classname: "shop",
		name: "Shop",
	});

	StandardTooltips.push({
		classname: "Shop_Relics_None",
		name: "(no relics unlocked yet)",
	});

	StandardTooltips.push({
		classname: "ShopHeader_Consumables",
		name: "Consumables",
	});

	StandardTooltips.push({
		classname: "ShopHeader_Relics",
		name: "Relics",
	});

	StandardTooltips.push({
		classname: "ShopHeader_Runes",
		name: "Skill Tomes",
	});

	StandardTooltips.push({
		classname: "ShopHeader_StatUpgrades",
		name: "Attributes",
	});

	StandardTooltips.push({
		classname: "ShopRelicsTooltip_Header",
		name: "Relics",
	});

	StandardTooltips.push({
		classname: "ShopRelicsTooltip_Text",
		name: "Relics are unique items bought with Soul Gems. Earn Soul Gems and expand the stock of available Relics by defeating bosses.",
	});

	StandardTooltips.push({
		classname: "ShopRunesTooltip_Header",
		name: "Skill Tomes",
	});

	StandardTooltips.push({
		classname: "ShopRunesTooltip_Text",
		name: "Tomes are permanent upgrades for your abilities. You can remove and re-equip tomes you've bought without any additional cost.",
	});

	StandardTooltips.push({
		classname: "ShopStatUpgradesTooltip_Header",
		name: "Attribute Enhancements",
	});

	StandardTooltips.push({
		classname: "ShopStatUpgradesTooltip_Text",
		name: "Attribute enhancements are permanent and don't take up inventory space. You can buy the same enhancement more than once, but the price increases each time.",
	});

	StandardTooltips.push({
		classname: "ShopTab_Items",
		name: "Items",
	});

	StandardTooltips.push({
		classname: "ShopTab_Upgrades",
		name: "Upgrades",
	});

	StandardTooltips.push({
		classname: "Spectator",
		name: "Spectator Team",
	});

	StandardTooltips.push({
		classname: "startboss",
		name: "Start This Boss",
	});

	StandardTooltips.push({
		classname: "StatsTooltip_Upgrades",
		name: "Enhancements",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_Armor",
		name: "Enhance Armor",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_Armor_Description",
		name: "Increases your armor by %bonus%.",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_Attack",
		name: "Enhance Attack",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_Attack_Description",
		name: "Increases your base attack damage by %bonus%.",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_AttackSpeed",
		name: "Enhance Dexterity",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_AttackSpeed_Description",
		name: "Increases your attack speed by %bonus%.",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_Health",
		name: "Enhance Health",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_Health_Description",
		name: "Increases your maximum health by %bonus% and health regeneration by %bonus2%/second.",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_MagResist",
		name: "Enhance Resistance",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_MagResist_Description",
		name: "Increases your magic resistance by %bonus%%.",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_Mana",
		name: "Enhance Mana",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_Mana_Description",
		name: "Increases your maximum mana by %bonus% and mana regeneration by %bonus2%/second.",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_MaxLevel",
		name: "Max Level",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_MoveSpeed",
		name: "Enhance Speed",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_MoveSpeed_Description",
		name: "Increases your movement speed by %bonus%.",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_SpellPower",
		name: "Enhance Magic",
	});

	StandardTooltips.push({
		classname: "StatUpgrade_SpellPower_Description",
		name: "Increases your spell damage and healing by %bonus%%.",
	});

	StandardTooltips.push({
		classname: "StatusBar_Fervor",
		name: "Fervor: ",
	});

	StandardTooltips.push({
		classname: "StatusBar_Malice",
		name: "Malice: ",
	});

	StandardTooltips.push({
		classname: "StatusBar_Momentum",
		name: "Arcane Momentum: ",
	});

	StandardTooltips.push({
		classname: "StatusBar_Rage",
		name: "Rage: ",
	});

	StandardTooltips.push({
		classname: "Unassigned",
		name: "Unassigned Team",
	});

	StandardTooltips.push({
		classname: "Victory_Deaths",
		name: "Deaths",
	});

	StandardTooltips.push({
		classname: "Victory_Grade",
		name: "Grade",
	});

	StandardTooltips.push({
		classname: "Victory_Relics",
		name: "Relics Unlocked",
	});

	StandardTooltips.push({
		classname: "Victory_Results_Header",
		name: "Results",
	});

	StandardTooltips.push({
		classname: "Victory_Time",
		name: "Time",
	});

	StandardTooltips.push({
		classname: "Victory_TotalReward",
		name: "Total Reward",
	});

	Abilities.push({
		ability_classname: "ff_boss_ogremagi_bloodlust",
		name: "Mass Bloodlust",
		description: "Enhances all ogre allies, causing them to move and attack faster and deal additional damage. The effect is stronger on Gorlog himself.",
		ability_specials:
		[
			{
				ability_special: "atk_damage",
				text: "BONUS DAMAGE (GORLOG)",
				percentage: true,
			},

			{
				ability_special: "atk_damage_allies",
				text: "BONUS DAMAGE",
				percentage: true,
			},

			{
				ability_special: "atk_speed",
				text: "ATTACK SPEED",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "move_speed",
				text: "MOVEMENT SPEED",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_ogremagi_entangle",
		name: "Choking Vines",
		description: "Conjures a patch of vegetation below a random hero. After a short delay, the patch bursts, immobilizing and disarming any heroes still within it and dealing magic damage over time.",
		ability_specials:
		[
			{
				ability_special: "damage_per_second",
				text: "DAMAGE/SECOND",
			},

			{
				ability_special: "delay",
				text: "DELAY",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_ogremagi_ignite",
		name: "Chain Ignite",
		description: "Throws a flask of volatile chemicals at a random hero, dealing damage and causing them to burst into flames, dealing additional damage over time.\\n\\nUpon impact, the flask bounces to another nearby hero. The flask bounces indefinitely and can hit the same hero more than once, but the range it can bounce gets lower each time it does until it can no longer reach anyone else.",
		ability_specials:
		[
			{
				ability_special: "bounce_range",
				text: "INITIAL BOUNCE RANGE",
			},

			{
				ability_special: "damage_duration",
				text: "DURATION",
			},

			{
				ability_special: "damage_impact",
				text: "IMPACT DAMAGE",
			},

			{
				ability_special: "damage_over_time",
				text: "DAMAGE OVER TIME",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_ogremagi_lightning_barrage",
		name: "Thunder Barrage",
		description: "Calls down a wide field of lightning bolts in an arc in front of the caster, each dealing damage and stunning enemies in an area.",
	});

	Abilities.push({
		ability_classname: "ff_boss_ogremagi_lightning_bolt",
		name: "Lightning Bolt",
		description: "After a short delay, calls down a lightning bolt to deal damage and stun enemies in an area.",
		ability_specials:
		[
			{
				ability_special: "delay",
				text: "DELAY",
			},

			{
				ability_special: "stun_duration",
				text: "STUN DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_ogremagi_magma_barrage",
		name: "Magma Spray",
		description: "Launches several balls of magma in a wide area, each dealing damage on impact.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_ogremagi_magma_slam",
		name: "Magmaball",
		description: "Cracks the earth in front of Gorlog, dealing damage and launching a bouncing ball of molten rock. As Gorlog's health drops, more balls of magma are launched, and they bounce further, splitting as they go.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_ogremagi_melt",
		name: "Lava Blast",
		description: "Ignites a hero's flesh, dealing magical damage over time.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_ogremagi_summon_allies",
		name: "Ogre Allies",
		description: "Gorlog summons packs of Ogre Bruisers to help him out as his health decreases. Below a third of his maximum health, there are some Ogre Frost Mages, too.",
	});

	Abilities.push({
		ability_classname: "ff_boss_ogremagi_volcano",
		name: "Volcanic Eruption",
		description: "Draws forth a deadly flow of molten earth that erupts underneath a hero, dealing massive damage split between all heroes in the area.",
	});

	Abilities.push({
		ability_classname: "ff_boss_oversight_animatebloom",
		name: "Flourishing",
		description: "Converts six random Vile Flora into Floral Saplings. The saplings don't attack, but will continuously heal Night Orchid until slain.",
	});

	Abilities.push({
		ability_classname: "ff_boss_oversight_bloomburst",
		name: "Flowerburst",
		description: "Causes some of the Vile Flora on the battlefield to burst after a brief delay, dealing damage and silencing heroes. The bursts will randomly either start at the center of the arena and grow outwards, or the reverse.",
		ability_specials:
		[
			{
				ability_special: "silence_duration",
				text: "SILENCE DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_oversight_spinningwisp",
		name: "Wisp Dance",
		description: "Summons a large dark wisp that flies in a circle around Night Orchid, dealing magical damage and causing Vile Flora to sprout in its wake.",
	});

	Abilities.push({
		ability_classname: "ff_boss_oversight_starfall",
		name: "Vile Seed",
		description: "Throws six corrupted seeds that deal magic damage and cause Vile Flora to sprout where they hit.",
	});

	Abilities.push({
		ability_classname: "ff_boss_oversight_stunblast",
		name: "Lotus Dust",
		description: "Deals damage in three large circular areas around Night Orchid and causes heroes struck to fall asleep. Taking damage will awaken a sleeping hero.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_oversight_summonsatyr",
		name: "Bramble Servitor",
		description: "Summons a Darkbramble Elemental to attack the heroes. The elemental slows the movement speed of nearby heroes, and when it is slain, it leaves behind a mass of brambles that deals damage and slows anyone standing in it. After a while, the brambles reform into a new elemental.",
	});

	Abilities.push({
		ability_classname: "ff_boss_oversight_wisps",
		name: "Dark Swarm",
		description: "Calls forth a wave of dark wisps that deal damage to heroes in a straight line and cause Vile Flora to sprout in their wake.",
	});

	Abilities.push({
		ability_classname: "ff_boss_siren_allies",
		name: "Royal Entourage",
		description: "Calls several naga allies from beneath the deeps.",
	});

	Abilities.push({
		ability_classname: "ff_boss_siren_animate_water",
		name: "Animate Water",
		description: "Summons several Brackwater Elementals, medium range minions that slow their victims with each attack.",
	});

	Abilities.push({
		ability_classname: "ff_boss_siren_blink",
		name: "Submerge",
		description: "Disappears beneath the murky waters, reappearing in a different spot after a short while.",
	});

	Abilities.push({
		ability_classname: "ff_boss_siren_chain_lightning",
		name: "Arc Lightning",
		description: "Hurls a bolt of lightning that leaps through enemy units. Cast whenever no heroes are in melee range.",
	});

	Abilities.push({
		ability_classname: "ff_boss_siren_forkedlightning",
		name: "Forked Bolt",
		description: "Strikes heroes in front of Hecate with a burst of lightning.",
	});

	Abilities.push({
		ability_classname: "ff_boss_siren_linearwave",
		name: "Crashing Wave",
		description: "Sends a powerful wave at a target, damaging and sweeping away anyone hit. When the wave hits the edge of the arena, it splits into two and bounces back.",
	});

	Abilities.push({
		ability_classname: "ff_boss_siren_staticfield",
		name: "Static Field",
		description: "Electrifies a part of the arena, causing heroes who linger in the area to take magic damage several times/second and suffer a stacking penalty to magic resistance.",
	});

	Abilities.push({
		ability_classname: "ff_boss_siren_thunder",
		name: "Lightning Rod",
		description: "Curses a random hero to attract lightning. For several seconds, bolts of lightning periodically strike the target and nearby allies, but the bolts can be avoided by moving away.",
	});

	Abilities.push({
		ability_classname: "ff_boss_siren_torrents",
		name: "Gush",
		description: "Summons five torrents of water around the caster that deal magic damage and launch victims into the air. More torrents are spawned if Hecate has low health.",
	});

	Abilities.push({
		ability_classname: "ff_boss_siren_ultimate",
		name: "Maelstrom",
		description: "When Hecate reaches full mana, she will start channeling, summoning three powerful spiraling waves that deal heavy damage. Then, Hecate draws the waves back to her before sending them out as a fatal tsunami that must be avoided or blocked at all costs.\\n\\nAfter using Maelstrom, Hecate gains a stacking 25% damage increase that lasts the rest of the battle.",
	});

	Abilities.push({
		ability_classname: "ff_boss_spider_cascade",
		name: "Cascading Venom",
		description: "Sycorax randomly targets either the center or the perimeter of her lair, then belches forth a ring of venom in the indicated area. Heroes struck take upfront damage and further damage over time.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "IMPACT DAMAGE",
			},

			{
				ability_special: "damage_over_time",
				text: "DAMAGE OVER TIME",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_spider_grievousbite",
		name: "Grievous Bite",
		description: "Sycorax's bites her primary target, dealing damage and causing them to bleed for additional damage over time until healed above ${heal_threshold}% of their maximum health.",
		notes:
		[
			"Grievous Bite can't be dispelled.",
		],
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE",
			},

			{
				ability_special: "damage_per_second",
				text: "BLEED DAMAGE/SECOND",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_spider_infest",
		name: "Infest",
		description: "Infests a hero with a clutch of parasitic eggs. After a short delay, the eggs hatch, dealing damage in an area around the hero and spawning several Spiderlings.",
		notes:
		[
			"The egg debuff can be dispelled, but doing so immediately hatches the eggs.",
		],
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE",
			},

			{
				ability_special: "duration",
				text: "DELAY",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_spider_stealth",
		name: "Hide",
		description: "Sycorax hides in her webs, becoming invisible and phased until her next attack.",
	});

	Abilities.push({
		ability_classname: "ff_boss_spider_summon_allies",
		name: "Call the Brood",
		description: "Sycorax calls upon members of her spider brood to protect her lair.",
	});

	Abilities.push({
		ability_classname: "ff_boss_spider_terrify",
		name: "Terrifying Shriek",
		description: "Sycorax lets out a bone-curdling shriek that deals a small amount of damage and causes all heroes to flee in terror away from her.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "FEAR DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_spider_venomspit",
		name: "Venom Glob",
		description: "Ejects a ball of venom that deals damage in an area on impact and leaves behind a long-lasting pool of venom that slows movement and deals damage over time.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE",
			},

			{
				ability_special: "damage_per_second",
				text: "POOL DAMAGE/SECOND",
			},

			{
				ability_special: "slow",
				text: "POOL MOVEMENT SLOW",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_timbersaw_bomb",
		name: "Earthcracker Bomb",
		description: "Sawcrank tosses a bomb at a random location on the battlefield. After a few seconds, the bomb explodes in a cross-shaped pattern. Anyone unfortunate enough to be standing on the bomb itself suffers double damage.",
		ability_specials:
		[
			{
				ability_special: "explode_delay",
				text: "DELAY",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_timbersaw_chain",
		name: "Timber Chain",
		description: "Fires a chain that embeds itself in the first tree it hits, pulling Sawcrank towards it. Any enemy in the path takes damage. The impact breaks the tree and knocks back and briefly stuns Sawcrank.<br/><br/>The cooldown on this ability is refreshed if no tank is engaged with Sawcrank for too long.",
	});

	Abilities.push({
		ability_classname: "ff_boss_timbersaw_chakram",
		name: "Buzzsaw",
		description: "Launches an autonomous whirling saw at a target. Enemies who stay near it take damage up to four times/second. After a short while, the saw returns to Sawcrank, continuing to deal damage along the way.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "tick_damage",
				text: "DAMAGE/TICK",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_timbersaw_fireballs",
		name: "Searing Embers",
		description: "Sawcrank grabs a handful of searing-hot embers from his engine and scatters them in an arc in front of him.",
		ability_specials:
		[
			{
				ability_special: "far",
				text: "Searing Embers",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_timbersaw_firechain",
		name: "Wildfire Chain",
		description: "When Sawcrank reaches full heat, he lights his chain on fire and rapidly smashes into trees several times, setting them on fire and launching them at the heroes.",
	});

	Abilities.push({
		ability_classname: "ff_boss_timbersaw_foremen",
		name: "You Guys Deal With This!",
		description: "At half health, Sawcrank hunkers down inside his heavy armor and summons his two foremen, Harlowe and Barlowe, to deal with the heroes. Sawcrank is almost immune to damage while the foremen are alive.",
	});

	Abilities.push({
		ability_classname: "ff_boss_timbersaw_meltstrike",
		name: "Flame Swipe",
		description: "Strikes Sawcrank's primary target and sets their armor on fire, reducing their armor and making them take magic damage over time.<br/><br/>The cooldown on this ability is refreshed if no tank is engaged with Sawcrank for too long.",
		ability_specials:
		[
			{
				ability_special: "damage_per_tick",
				text: "DAMAGE/SECOND",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_timbersaw_revup",
		name: "Heat Charge",
		description: "Sawcrank revs up his engine, then emits a burst of flame around him that increases his engine's heat level, bringing him closer to using Wildfire Chain.",
	});

	Abilities.push({
		ability_classname: "ff_boss_timbersaw_sawblade",
		name: "Whirling Death",
		description: "Sawcrank revs up his central saw and deals damage to all heroes standing near him.",
	});

	Abilities.push({
		ability_classname: "ff_boss_timbersaw_sawstorm",
		name: "SAWSTORM!",
		description: "Once Sawcrank's health drops low enough, he'll unleash several autonomous whirling saws that circle around the arena, dealing damage to anyone who strays near them.",
	});

	Abilities.push({
		ability_classname: "ff_boss_underlord_curse",
		name: "Curse of Agony",
		description: "Rots a hero's flesh, dealing damage over time and increasing the damage they take from all sources.",
		ability_specials:
		[
			{
				ability_special: "damage_penalty",
				text: "INCREASED DAMAGE TAKEN",
				percentage: true,
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_underlord_drain",
		name: "Siphon Life",
		description: "Drains the life essence from a hero, healing Vulgoth. Moving away from him will break the link.",
		ability_specials:
		[
			{
				ability_special: "damage_per_second",
				text: "DAMAGE/SECOND",
			},

			{
				ability_special: "heal_rate",
				text: "HEALING",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_underlord_felray",
		name: "Incineration Beam",
		description: "Vulgoth homes in on a hero, firing a searing ray of flame that chases the hero and deals heavy damage to whoever stands in its path.",
		ability_specials:
		[
			{
				ability_special: "damage_per_second",
				text: "DAMAGE/SECOND",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_underlord_gaze",
		name: "Despoiler's Gaze",
		description: "Vulgoth casts his vile gaze at a hero, causing them and all other nearby heroes to flee in terror towards one of the portals.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "FEAR DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_underlord_legions",
		name: "Innumerable Legions",
		description: "Vulgoth is joined by the endless legions of the Outer Realms, entering through the portals at the sides of the arena. Heroes that get too close to the portals take damage.",
		ability_specials:
		[
			{
				ability_special: "portal_damage_disp",
				text: "PORTAL DAMAGE/SECOND",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_underlord_rainoffire",
		name: "Apocalypse",
		description: "Calls down waves of demonic fire from the sky above each hero, striking the area around them for several seconds.",
		ability_specials:
		[
			{
				ability_special: "radius",
				text: "RADIUS",
			},

			{
				ability_special: "waves",
				text: "WAVES",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_underlord_summon",
		name: "Abyssal Command",
		description: "At certain health intervals, Vulgoth will teleport to his perch and summons two Dark Supplicants out of the gates at the edges of the battlefield, who will channel Empowerment until slain. Vulgoth will remain atop his perch until that time.<br/><br/>At lower health levels, the Dark Supplicants will be accompanied by an Abyssal Tormentor and several Baleful Sorcerers.",
	});

	Abilities.push({
		ability_classname: "ff_boss_underlord_tankbuster",
		name: "Annihilating Strike",
		description: "Deals heavy physical damage to Vulgoth's primary target and sets it on fire, dealing additional damage over time.",
		ability_specials:
		[
			{
				ability_special: "damage_per_tick",
				text: "DAMAGE/SECOND",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_underlord_teleport",
		name: "Dark Rift",
		description: "Teleports Vulgoth around the battlefield. Heroes caught where he emerges take severe damage.",
	});

	Abilities.push({
		ability_classname: "ff_boss_ursa_enrage",
		name: "Enrage",
		description: "When Swiftpaw reaches full mana, he will gain increased attack and movement speed and bonus damage for the rest of the encounter. This effect stacks indefinitely.",
		ability_specials:
		[
			{
				ability_special: "attack_speed",
				text: "ATTACK SPEED",
			},

			{
				ability_special: "damage",
				text: "ATTACK DAMAGE",
			},

			{
				ability_special: "move_speed",
				text: "MOVEMENT SPEED",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_ursa_entangle",
		name: "Choking Vines",
		description: "Conjures a patch of vegetation below a random hero. After a short delay, the patch bursts, immobilizing and disarming any heroes still within it and dealing magic damage over time.",
		ability_specials:
		[
			{
				ability_special: "damage_per_second",
				text: "DAMAGE/SECOND",
			},

			{
				ability_special: "delay",
				text: "DELAY",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_ursa_leap",
		name: "Rending Pounce",
		description: "Pounces at an enemy hero, striking all heroes near the landing site and causing them to bleed for additional damage over time.",
		ability_specials:
		[
			{
				ability_special: "bleed_dps",
				text: "DAMAGE/SECOND",
			},

			{
				ability_special: "bleed_duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_ursa_smash",
		name: "Furious Bash",
		description: "Swiftpaw slams the ground around him, dealing damage to all nearby heroes and reducing their attack speed for a few seconds.",
	});

	Abilities.push({
		ability_classname: "ff_boss_ursa_summon_bears",
		name: "Roar of the Pack",
		description: "Summons a pack of Grizzly Thrashers to help Swiftpaw fight off the heroes.",
	});

	Abilities.push({
		ability_classname: "ff_boss_visage_breath",
		name: "Spirit Breath",
		description: "Amon breathes a cone of necrotic vapor that deals magical damage and leaves behind a pool of grasping spirit essence that slows heroes and deals a small amount of damage over time.",
		ability_specials:
		[
			{
				ability_special: "rift_damage",
				text: "RIFT DAMAGE/SECOND",
			},

			{
				ability_special: "rift_duration",
				text: "RIFT DURATION",
			},

			{
				ability_special: "rift_slow",
				text: "RIFT SLOW",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_visage_claws",
		name: "Spectral Claws",
		description: "Amon rips at his primary target, dealing heavy damage twice in quick succession.",
	});

	Abilities.push({
		ability_classname: "ff_boss_visage_ghostraze",
		name: "Underworld Flame",
		description: "Calls forth several columns of ghostly flame that deal magical damage and inflict victims with a debuff that slows their movements and greatly increases the damage taken if they get hit by Underworld Flame again.",
		ability_specials:
		[
			{
				ability_special: "bonus_damage",
				text: "ADDITIONAL DAMAGE",
				percentage: true,
			},

			{
				ability_special: "duration",
				text: "DEBUFF DURATION",
			},

			{
				ability_special: "slow",
				text: "MOVEMENT SLOW",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_visage_plaguewind",
		name: "Plague Wind",
		description: "Upon reaching full mana, Amon becomes invulnerable and channels a necrotic wind that forces all heroes towards him. Anyone who makes contact with Amon at this time suffers massive damage. The wind's effects can be negated by standing in the pools of Grasping Spirit left by Amon's Spirit Breath.",
		ability_specials:
		[
			{
				ability_special: "damage_per_second",
				text: "DAMAGE/SECOND",
			},

			{
				ability_special: "waves",
				text: "WAVES",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_visage_shroud",
		name: "Spirit Veil",
		description: "Amon shifts into the spirit realm, becoming invulnerable and emitting a necrotic aura that damages nearby heroes.",
		ability_specials:
		[
			{
				ability_special: "damage_per_second",
				text: "DAMAGE/SECOND",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_boss_visage_tombstone",
		name: "Dread Monument",
		description: "Amon rips a cursed tombstone from the earth, around which spawn numerous undead until the tombstone is destroyed. More powerful undead are summoned when Amon's health is low.",
	});

	Abilities.push({
		ability_classname: "ff_creature_animated_water_explode",
		name: "Unstable Water",
		description: "Explodes on death, knocking back and damaging nearby enemies.",
	});

	Abilities.push({
		ability_classname: "ff_creature_bash",
		name: "Bash",
		description: "Chance to stun with basic attacks.",
		ability_specials:
		[
			{
				ability_special: "chance",
				text: "CHANCE",
				percentage: true,
			},

			{
				ability_special: "duration",
				text: "STUN DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_creature_battlecry",
		name: "Battle Cry",
		description: "Grants nearby allies bonus attack damage.",
	});

	Abilities.push({
		ability_classname: "ff_creature_crit",
		name: "Critical Strike",
		description: "This creature has a chance to deal increased damage with its attacks.",
		ability_specials:
		[
			{
				ability_special: "amount",
				text: "DAMAGE",
				percentage: true,
			},

			{
				ability_special: "chance",
				text: "CHANCE",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_creature_deathcurse",
		name: "Spiteful Curse",
		description: "Upon death, this unit inflicts its killer with an undispellable stacking curse that rots their flesh, dealing damage over time and increasing the damage they take from all sources.",
		notes:
		[
			"Spiteful Curse can't be dispelled.",
		],
		ability_specials:
		[
			{
				ability_special: "damage_penalty",
				text: "INCREASED DAMAGE TAKEN",
				percentage: true,
			},

			{
				ability_special: "damage_tick",
				text: "DAMAGE/SECOND",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_creature_deflamerizer_firebreath",
		name: "Flamethrower",
		description: "Sprays a mist of burning fuel in a forward line.",
	});

	Abilities.push({
		ability_classname: "ff_creature_demon_firebreath",
		name: "Breathe Fire",
		description: "Breathes a cloud of fire.",
	});

	Abilities.push({
		ability_classname: "ff_creature_dismember",
		name: "Rip Flesh",
		description: "Grabs an enemy, dragging it slowly backwards while dealing damage over time.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_creature_drench",
		name: "Drench",
		description: "Enemies hit by this creature's basic attacks have their movement speed reduced.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "slow",
				text: "MOVEMENT SPEED",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_creature_empower_underlord",
		name: "Empowerment",
		description: "Channels demonic energy into Vulgoth the Despoiler. Each second, Vulgoth is granted a 0.5% increase in all damage dealt. This effect persists for the rest of the fight.",
		notes:
		[
			"Empowerment can't be dispelled.",
		],
	});

	Abilities.push({
		ability_classname: "ff_creature_flower_treant_heal",
		name: "Flourish",
		description: "Heals the boss for a small percentage of their maximum health.",
		ability_specials:
		[
			{
				ability_special: "heal_percent",
				text: "HEALING",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_creature_frost_armor_aura",
		name: "Frost Armor Aura",
		description: "Grants nearby allies Frost Armor, which increases their armor and slows attackers.",
		ability_specials:
		[
			{
				ability_special: "armor",
				text: "ARMOR",
			},

			{
				ability_special: "atkslow",
				text: "ATTACK SPEED SLOW",
				percentage: true,
			},

			{
				ability_special: "moveslow",
				text: "MOVEMENT SPEED SLOW",
			},

			{
				ability_special: "slowduration",
				text: "SLOW DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_creature_grievousbite",
		name: "Grievous Wound",
		description: "Deals physical damage and causes the victim to bleed for additional damage over time until healed above 90% of their maximum health. The damage is proportional to the victim's maximum health.",
		ability_specials:
		[
			{
				ability_special: "initial_damage",
				text: "INITIAL DAMAGE",
				percentage: true,
			},

			{
				ability_special: "tick_damage",
				text: "BLEED DAMAGE/SECOND",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_creature_immolation",
		name: "Immolation Aura",
		description: "Deals magical damage to nearby enemies every second.",
		ability_specials:
		[
			{
				ability_special: "greater",
				text: "Greater Immolation Aura",
			},

			{
				ability_special: "greater_radius",
				text: "RADIUS",
			},

			{
				ability_special: "radius",
				text: "RADIUS",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_creature_magresist50",
		name: "Magic Resistance",
		description: "Halves magical damage taken and the duration of harmful effects.",
	});

	Abilities.push({
		ability_classname: "ff_creature_naga_sneak",
		name: "Undertow",
		description: "This unit is invisible until it attacks and has a 30%% chance to critical hit for 500%% damage. Attacking from stealth is a guaranteed critical hit.",
	});

	Abilities.push({
		ability_classname: "ff_creature_polymorph_fish",
		name: "Polymorph: Fish",
		description: "Transforms an enemy into a helpless, flopping fish.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_creature_polymorph_frog",
		name: "Polymorph: Frog",
		description: "Transforms an enemy into a helpless frog.",
	});

	Abilities.push({
		ability_classname: "ff_creature_shadow_satyr",
		name: "Undying Essence",
		description: "When this unit is killed, it will collapse into a patch of brambles that deal damage and slow movements. After some time, the brambles will reform and return this unit to life.",
	});

	Abilities.push({
		ability_classname: "ff_creature_shadowbomb",
		name: "Shadow Bomb",
		description: "Infects an enemy with a curse that slows their movement and will explode after a few seconds, dealing damage proportional to the victim's maximum health to all its nearby allies.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "explode_damage",
				text: "DAMAGE",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_creature_slow_aura",
		name: "Suppression Aura",
		description: "Slows the movement speed of nearby enemies.",
		ability_specials:
		[
			{
				ability_special: "slow",
				text: "MOVEMENT SLOW",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_creature_spidervenom",
		name: "Skitterer Venom",
		description: "Basic attacks inflict the target with a venom that deals low damage over time and increases the damage taken from Sycorax's Venom Glob pools.",
		ability_specials:
		[
			{
				ability_special: "bonus_damage",
				text: "INCREASED POOL DAMAGE",
				percentage: true,
			},

			{
				ability_special: "damage",
				text: "DAMAGE/SECOND",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_aimedshot",
		name: "Aimed Shot",
		description: "The Keen Ranger spends a moment to line up the shot, then fires a heavy bullet that deals a portion of his basic attack damage plus a bonus to the first target it hits. The shot applies on-hit effects and can benefit from Zero In's critical hit. If the shot is canceled prematurely, this ability goes on a short cooldown.",
		ability_specials:
		[
			{
				ability_special: "attack_percent",
				text: "ATTACK DAMAGE",
				percentage: true,
			},

			{
				ability_special: "bonus_damage",
				text: "BONUS DAMAGE",
			},

			{
				ability_special: "projectile_distance",
				text: "DISTANCE",
			},

			{
				ability_special: "refund_cooldown",
				text: "COOLDOWN ON CANCEL",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_anti_magic_zone",
		name: "Anti-Magic Zone",
		description: "Grants the caster and all allies an anti-magic shield that absorbs incoming magic damage. The amount absorbed is equal to a percentage of the affected hero's maximum health.",
		ability_specials:
		[
			{
				ability_special: "block_percent",
				text: "ABSORBED DAMAGE",
				percentage: true,
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_arcane_mark",
		name: "Arcane Mark",
		description: "Marks an enemy with a brand that increases all damage taken for a short duration.<br/><br/>This ability doesn't stack with other heroes' similar abilities.",
		ability_specials:
		[
			{
				ability_special: "damagetaken",
				text: "INCREASED DAMAGE TAKEN",
				percentage: true,
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_arcanepower",
		name: "Heat Riser",
		description: "Greatly raises an ally's spell damage for a few seconds.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "spellamp",
				text: "SPELL AMP",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_assassin_dance",
		name: "Cloak of Night",
		description: "Consumes your Malice to grant yourself increased attack damage a chance to evade incoming attacks. The more Malice consumed, the longer the effect lasts.",
		ability_specials:
		[
			{
				ability_special: "bonus_damage",
				text: "BONUS DAMAGE",
			},

			{
				ability_special: "bonus_evasion",
				text: "EVASION",
				percentage: true,
			},

			{
				ability_special: "duration_base",
				text: "BASE DURATION",
			},

			{
				ability_special: "duration_per_malice",
				text: "DURATION/MALICE",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_assassin_knives",
		name: "Deadly Throw",
		description: "Throws a dagger at an enemy and anyone unfortunate enough to be standing nearby, dealing full damage to the primary target and half damage to the rest. Consumes your Malice; the more Malice consumed, the greater the damage.",
		ability_specials:
		[
			{
				ability_special: "base_damage",
				text: "BASE DAMAGE",
			},

			{
				ability_special: "damage_per_malice",
				text: "DAMAGE/MALICE",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_assassin_malice",
		name: "Killing Intent",
		description: "Your basic attacks and Shadow Rush ability have a chance to generate a stack of Malice, which empowers the effects of your Cloak of Night and Deadly Throw abilities.",
		ability_specials:
		[
			{
				ability_special: "chance",
				text: "CHANCE",
				percentage: true,
			},

			{
				ability_special: "duration",
				text: "MALICE DURATION",
			},

			{
				ability_special: "max_stacks",
				text: "MAX MALICE",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_assassin_mark",
		name: "Lacerate",
		description: "You step through the shadows, reappearing behind an enemy and gouging it deeply with your blade, causing it to bleed for physical damage over time and instantly maximizing your stacks of Malice.",
		ability_specials:
		[
			{
				ability_special: "damage_per_second",
				text: "DAMAGE/SECOND",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_assassin_rush",
		name: "Shadow Rush",
		description: "Charges ahead in a straight line, dealing damage equal to a portion of your basic attack damage plus a bonus. Generates one stack of Malice.",
		notes:
		[
			"The damage does not count as attacking and doesn't trigger on-attack effects.",
		],
		ability_specials:
		[
			{
				ability_special: "damage_base",
				text: "BASE DAMAGE",
				percentage: true,
			},

			{
				ability_special: "damage_bonus",
				text: "BONUS DAMAGE",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_assassin_sleepdart",
		name: "Nightmare Dart",
		description: "Fires a poisoned dart that puts a non-boss enemy to sleep and deals damage over time proportional to its current health. Taking damage from any other source wakes the target up, but does not remove the damage over time effect.",
		notes:
		[
			"For the first second of the effect, the sleep won't be removed even if the target takes damage.",
		],
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE/SECOND",
				percentage: true,
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_battlecry",
		name: "War Cry",
		description: "A savage call to battle that rouses nearby allies, granting them bonus damage.",
		ability_specials:
		[
			{
				ability_special: "damage_bonus",
				text: "DAMAGE BONUS",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_berserker_bulkup",
		name: "Unbreakable Might",
		description: "Taps into primal forces to greatly boost your maximum health and health regeneration for a moment. Spends up to ${cooldown_ragemax} Rage to reduce the ability's cooldown.",
		ability_specials:
		[
			{
				ability_special: "bonus_health",
				text: "HEALTH BONUS",
			},

			{
				ability_special: "cooldown_from_rage",
				text: "MAX COOLDOWN REDUCTION",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "regen",
				text: "HEALTH REGENERATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_berserker_frenzy",
		name: "Battle Rage",
		description: "Whenever you suffer damage, you gain Rage equal to the percentage of your total health taken as damage. Other abilities can consume your Rage, gaining greater effect the more Rage is spent.",
		notes:
		[
			"Your Rage is displayed under your mana bar.",
		],
	});

	Abilities.push({
		ability_classname: "ff_hero_berserker_gusto",
		name: "Rally",
		description: "Dispels all stuns and makes you briefly immune to slowing, rooting and stunning effects. Can be used while stunned.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_berserker_ignorepain",
		name: "Ignore Pain",
		description: "Steels your nerves, granting damage reduction. Taking damage removes a charge, but no more than one charge can be removed every few seconds. Lasts until all charges have been removed or the duration expires.",
		ability_specials:
		[
			{
				ability_special: "charge_linger",
				text: "CHARGE LOSS INTERVAL",
			},

			{
				ability_special: "charges",
				text: "CHARGES",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "reduction",
				text: "DAMAGE REDUCTION",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_berserker_savage_hew",
		name: "Savage Hew",
		description: "A brutal swing that attacks all enemies around you, dealing additional damage to the primary target. Spends up to ${heal_ragemax} Rage to heal you for a portion of your total health.",
		ability_specials:
		[
			{
				ability_special: "bonus_damage",
				text: "BONUS DAMAGE",
			},

			{
				ability_special: "heal",
				text: "MAX HEALING",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_berserker_skullcrack",
		name: "Skullcrack",
		description: "Slams an enemy, dealing physical damage and mini-stunning it. If this successfully interrupts an enemy ability as it's being cast, it deals additional damage.",
		notes:
		[
			"The mini-stun can affect bosses. Only abilities with orange cast bars can be interrupted.",
		],
		ability_specials:
		[
			{
				ability_special: "bonus_damage",
				text: "BONUS DAMAGE",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_berserker_stomp",
		name: "Into the Fray",
		description: "You leap into the air, then strike the target point with massive force. Struck enemies are unbalanced, slowing their movements and attacks for a few seconds.",
		ability_specials:
		[
			{
				ability_special: "attack_slow",
				text: "ATTACK SLOW",
			},

			{
				ability_special: "damage",
				text: "DAMAGE",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "move_slow",
				text: "MOVEMENT SLOW",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_blink_immunity",
		name: "Evade Harm",
		description: "Teleports you a short distance and grants you a brief moment of damage immunity.",
		ability_specials:
		[
			{
				ability_special: "distance",
				text: "DISTANCE",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_bloodmage_bloodlust",
		name: "Vampiric Fury",
		description: "Instills an ally with a thirst for blood, increasing their attack speed and granting them lifesteal.",
		ability_specials:
		[
			{
				ability_special: "atk_speed",
				text: "ATTACK SPEED",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "lifesteal",
				text: "LIFESTEAL",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_bloodmage_cloudkill",
		name: "Death Cloud",
		description: "Conjures a vast, roiling cloud of noxious vapors that deals damage over time to enemies inside it. If an enemy dies while within the cloud, you are healed for a portion of that enemy's maximum health.",
		ability_specials:
		[
			{
				ability_special: "damage_per_second",
				text: "DAMAGE/SECOND",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "heal_on_kill",
				text: "HEAL ON KILL",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_bloodmage_darkblast",
		name: "Darkblast",
		description: "A delayed blast of dark magic that deals magical damage split among all enemies in a small area.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE",
			},

			{
				ability_special: "delay",
				text: "DELAY",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_bloodmage_drain_life",
		name: "Drain Life",
		description: "Drains the life force from an enemy, healing you for a portion of the damage dealt.",
		ability_specials:
		[
			{
				ability_special: "damage_per_second",
				text: "DAMAGE/SECOND",
			},

			{
				ability_special: "heal_rate",
				text: "DAMAGE CONVERTED TO HEALING",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_bloodmage_dreadcurse",
		name: "Dread Curse",
		description: "Inflicts an enemy with a curse that deals damage over time. When the curse expires, it explodes, dealing additional damage in an area around the victim.",
		ability_specials:
		[
			{
				ability_special: "damage_finale",
				text: "FINAL DAMAGE",
			},

			{
				ability_special: "damage_tick",
				text: "DAMAGE/SECOND",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_bloodmage_taintedblood",
		name: "Blood Channeling",
		description: "You passively regenerate mana very quickly, at the cost of health. The more mana you are missing, the faster health is converted into mana. Health loss caused this way is potentially lethal.",
		notes:
		[
			"The health cost counts as health removal and does not trigger on-damage events.",
		],
		ability_specials:
		[
			{
				ability_special: "damage_per_stack",
				text: "EALTH LOST/%MISSING MANA",
				percentage: true,
			},

			{
				ability_special: "mana_regen_per_stack",
				text: "ANA REGEN/%MISSING MANA",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_chain_lightning",
		name: "Chain Lightning",
		description: "Hurls a bolt of lightning that leaps through nearby enemy units. Each bounce deals less damage than the previous.",
		ability_specials:
		[
			{
				ability_special: "jump_range",
				text: "BOUNCE RANGE",
			},

			{
				ability_special: "jump_reduction",
				text: "DAMAGE REDUCTION/BOUNCE",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_charge",
		name: "Charge",
		description: "Charges at an enemy at high speed, passing through other enemies until he hits the target, stunning it and dealing damage.",
		ability_specials:
		[
			{
				ability_special: "stun_duration",
				text: "STUN DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_counterspell",
		name: "Counterspell",
		description: "Attempts to interrupt an enemy ability. Boss abilities with orange cast bars can be interrupted this way.",
		notes:
		[
			"Instant cast abilities and abilities with gray cast bars can't be interrupted.",
		],
	});

	Abilities.push({
		ability_classname: "ff_hero_damage_totem",
		name: "Warflame Totem",
		description: "Summons an immobile totem that grants nearby allies bonus attack damage. When empowered by your Totemic Mastery ability, also grants critical strike chance.",
		notes:
		[
			"You can only have one Warflame Totem at a time. Recasting the ability early will destroy your current totem.",
		],
		ability_specials:
		[
			{
				ability_special: "damage_bonus",
				text: "DAMAGE BONUS",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_druid_barkskin",
		name: "Word of Nature",
		description: "When cast on an ally, makes their skin as tough as bark, granting them bonus armor.\\n\\nWhen cast on an enemy, surrounds it with choking vines that deal damage over time.",
		ability_specials:
		[
			{
				ability_special: "armor",
				text: "ARMOR BONUS (ALLY)",
			},

			{
				ability_special: "damage",
				text: "DAMAGE (ENEMY)",
			},

			{
				ability_special: "damage_duration",
				text: "DURATION (ENEMY)",
			},

			{
				ability_special: "duration",
				text: "DURATION (ALLY)",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_druid_chain_heal",
		name: "Healing Spirit",
		description: "Summons a flitting forest spirit that heals an ally, then bounces to the next nearby ally with the lowest health, and so on. Each bounce heals for less, and each ally may only be healed once.",
		ability_specials:
		[
			{
				ability_special: "healing",
				text: "HEALING",
			},

			{
				ability_special: "jump_reduction",
				text: "REDUCTION/BOUNCE",
				percentage: true,
			},

			{
				ability_special: "max_bounces",
				text: "BOUNCES",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_druid_dispel",
		name: "Dispel Magic",
		description: "Removes one negative debuff from an ally or one positive buff from an enemy.",
		notes:
		[
			"Not all effects can be removed this way.",
		],
	});

	Abilities.push({
		ability_classname: "ff_hero_druid_healing_rain",
		name: "Healing Rain",
		description: "Calls forth a restorative rain that heals and restores mana to allies in a large area.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "healing",
				text: "HEALING/SECOND",
			},

			{
				ability_special: "mana",
				text: "MANA/SECOND",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_druid_innervate",
		name: "Harmony Aura",
		description: "You and your allies have a chance to restore a portion of their total mana whenever they cast a spell, as well as a smaller chance to do so when using a basic attack.",
		ability_specials:
		[
			{
				ability_special: "chance_attack",
				text: "CHANCE ON ATTACK",
				percentage: true,
			},

			{
				ability_special: "chance_cast",
				text: "CHANCE ON CAST",
				percentage: true,
			},

			{
				ability_special: "mana",
				text: "MANA RESTORED",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_druid_rejuvenate",
		name: "Rejuvenate",
		description: "Instantly heals an ally, then heals them for the same amount again over time.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "healing",
				text: "HEALING",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_earth_totem",
		name: "Stone Serpent Totem",
		description: "Summons an immobile totem that reduces the armor and movement speed of nearby enemies. When empowered by your Totemic Mastery ability, also deals damage to nearby enemies.",
		notes:
		[
			"You can only have one Stone Serpent Totem at a time. Recasting the ability early will destroy your current totem.",
		],
		ability_specials:
		[
			{
				ability_special: "armor",
				text: "ARMOR PENALTY",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "movement_slow",
				text: "SLOW",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_earthwarden_creature_cleanse",
		name: "Cleanse",
		description: "Heals an ally.",
		ability_specials:
		[
			{
				ability_special: "healing",
				text: "HEALING",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_earthwarden_creature_enrage",
		name: "Enrage",
		description: "Increases the attack speed of this unit and its owner.",
		ability_specials:
		[
			{
				ability_special: "attack_speed",
				text: "ATTACK SPEED BONUS",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_earthwarden_creature_flametouch",
		name: "Flame Touch",
		description: "Sets an enemy ablaze, dealing damage to it over a duration.\\n",
		ability_specials:
		[
			{
				ability_special: "damage_dot",
				text: "DAMAGE",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_earthwarden_creature_splash",
		name: "Pulverize",
		description: "This unit's attacks deal a portion of its attack damage in a radius around the target.",
		ability_specials:
		[
			{
				ability_special: "splash_damage",
				text: "SPLASH DAMAGE",
				percentage: true,
			},

			{
				ability_special: "splash_radius",
				text: "RADIUS",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_earthwarden_creature_stoneshield",
		name: "Stone Shield",
		description: "Grants this unit and its owner a shield that absorbs incoming damage.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "stone_shield",
				text: "DAMAGE ABSORBED",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_earthwarden_flame",
		name: "Flame Burst",
		description: "Hurls a mass of molten lava at an enemy, dealing damage on impact and additional damage over time. Grants you <font color='#e0a040'>Flame Affinity</font>, which increases your attack speed.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE",
			},

			{
				ability_special: "damage_dot",
				text: "DAMAGE OVER TIME",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "essence_attackspeed",
				text: "ATTACK SPEED",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_earthwarden_mastery",
		name: "Elemental Mastery",
		description: "Your abilities grant you an elemental affinity, which confers a passive bonus and alters the effect of your Primordial Summoning ability. You can only have one affinity at a time.",
	});

	Abilities.push({
		ability_classname: "ff_hero_earthwarden_smash",
		name: "Stonefury",
		description: "Slams an enemy with primal force, dealing magical damage equal to your attack damage plus a bonus. Grants you <font color='#b0d0a0'>Stone Affinity</font>, which reduces all damage you take.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE",
			},

			{
				ability_special: "essence_reduction",
				text: "DAMAGE REDUCTION",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_earthwarden_spiritlink",
		name: "Spirit Link",
		description: "Links your spirit with an ally, each granting the other a portion of their base attack damage as bonus damage and causing a portion of all healing received by one to also benefit the other.",
		notes:
		[
			"Death immediately breaks the link.",
		],
		ability_specials:
		[
			{
				ability_special: "damage_factor",
				text: "DAMAGE SHARED",
				percentage: true,
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "healing_factor",
				text: "HEALING SHARED",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_earthwarden_summon",
		name: "Primordial Summoning",
		description: "Summons an uncontrollable elemental ally matching your affinity to fight by your side for a limited duration. Its attack damage and health equal a percentage of your own.\\n\\nYour <font color='#b0d0a0'>Stone Elemental</font> has a melee splash damage attack and can cast Stone Shield to grant it and you damage shields.\\n\\nYour <font color='#e0a040'>Flame Elemental</font> has a ranged attack and can cast Flame Touch to deal damage over time and Enrage to grant it and you bonus attack speed.\\n\\nYour <font color='#4080e0'>Water Elemental</font> has a ranged attack and can cast Cleanse to heal wounded allies.",
		notes:
		[
			"If you don't have an affinity, a Stone Elemental will be summoned.",
		],
		ability_specials:
		[
			{
				ability_special: "attack_percent",
				text: "ATTACK DAMAGE",
				percentage: true,
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "flame_damage",
				text: "FLAME TOUCH DAMAGE",
			},

			{
				ability_special: "health_percent",
				text: "HEALTH",
				percentage: true,
			},

			{
				ability_special: "stone_shield",
				text: "STONE SHIELD ABSORB",
			},

			{
				ability_special: "water_healing",
				text: "CLEANSE HEALING",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_earthwarden_water",
		name: "Purifying Water",
		description: "Heals an ally and another random ally near the target for a lesser amount. Grants you <font color='#4080e0'>Water Affinity</font>, which gives your attacks a chance to trigger this ability's secondary heal on a random ally near the attacked enemy.",
		ability_specials:
		[
			{
				ability_special: "essence_chance",
				text: "CHANCE ON ATTACK",
				percentage: true,
			},

			{
				ability_special: "healing",
				text: "HEALING",
			},

			{
				ability_special: "healing_secondary",
				text: "SECONDARY TARGET HEALING",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_enchant_weapon",
		name: "Enchant Weapon",
		description: "Empowers the caster's basic attacks, making them deal additional magic damage in a small radius.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "BONUS DAMAGE",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "radius",
				text: "RADIUS",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_entangle",
		name: "Entangling Roots",
		description: "Wraps an enemy in strangling roots that immobilize the target and deal damage over time. If cast on a boss, it is slowed instead of immobilized.",
		ability_specials:
		[
			{
				ability_special: "damage_per_second",
				text: "DAMAGE/SECOND",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "move_slow",
				text: "MOVEMENT SLOW",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_epicenter",
		name: "Resounding Quake",
		description: "The earth trembles beneath your feet, sending forth three shockwaves per second that deal magical damage and reduce the magic resistance of enemies struck. If a totem is struck by the shockwave, it creates a smaller shockwave echo that deals additional damage around it. If a totem is closer than 150 units to another totem, only one of them will echo this way.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE/PULSE",
			},

			{
				ability_special: "duration",
				text: "MAX CHANNEL TIME",
			},

			{
				ability_special: "magicresist",
				text: "MAGIC RESIST DEBUFF",
				percentage: true,
			},

			{
				ability_special: "magicresist_duration",
				text: "MAGIC RESIST DURATION",
			},

			{
				ability_special: "rebound_damage",
				text: "ECHO DAMAGE",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_fireblast",
		name: "Fire Blast",
		description: "Blasts an enemy with a wave of fire.",
		ability_specials:
		[
			{
				ability_special: "empower_damage",
				text: "OVERHEAT DAMAGE/SECOND",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_flameorb",
		name: "Flame Orb",
		description: "Conjures an orb of flame that moves slowly in a straight line. The orb lashes out at a random nearby enemy several times per second, dealing magical damage.",
		ability_specials:
		[
			{
				ability_special: "zap_damage",
				text: "DAMAGE/LASH",
			},

			{
				ability_special: "zap_interval",
				text: "LASH INTERVAL",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_gaussround",
		name: "Gauss Round",
		description: "Fires off a quick shot with a special bullet that deals magical damage and mini-stuns the target, interrupting spells being cast. If the bullet successfully interrupts a spell, it deals additional bonus damage.",
		ability_specials:
		[
			{
				ability_special: "bonus_damage",
				text: "BONUS DAMAGE",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_healer_immunity",
		name: "Spirit Ward",
		description: "Grants you and another ally a moment of damage immunity.",
		notes:
		[
			"Can also be self-cast, in which case only you receive the effects.",
		],
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_holy_sigil",
		name: "Crusader's Sigil",
		description: "Places a holy sigil on the ground that heals allies and damages enemies standing inside it.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "healing",
				text: "HEALING",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_icemage_frost_nova",
		name: "Cold Snap",
		description: "Strikes an area with a blast of cold, dealing damage split between all targets in the area and chilling them.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_icemage_frost_tomb",
		name: "Deep Freeze",
		description: "Encases an enemy in ice, damaging, stunning and chilling it. The stun duration is reduced against bosses.",
		notes:
		[
			"Bosses cannot be stunned while casting abilities with gray cast bars.",
		],
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "duration_boss",
				text: "DURATION (BOSS)",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_icemage_ice_serpent",
		name: "Rime Serpent",
		description: "Summons an elemental snake that bounces between enemies, damaging and chilling them. Each bounce deals less damage.",
		notes:
		[
			"Each enemy can only be hit once.",
		],
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE",
			},

			{
				ability_special: "jump_reduction",
				text: "DAMAGE REDUCTION/BOUNCE",
				percentage: true,
			},

			{
				ability_special: "max_bounces",
				text: "MAX BOUNCES",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_icemage_iceshield",
		name: "Ice Barrier",
		description: "Conjures a protective barrier of ice around yourself or an ally. The barrier absorbs damage equal to a percentage of your maximum mana.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "shield",
				text: "ABSORB FROM MAX MANA",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_icemage_icicles",
		name: "Ice Shards",
		description: "Fires four slivers of ice in quick succession, each dealing magical damage to the first enemy it hits. The shards deal additional damage for each stack of Winter's Chill on the target.",
		notes:
		[
			"Your other offensive abilities apply Winter's Chill.",
		],
		ability_specials:
		[
			{
				ability_special: "chill_bonus",
				text: "BONUS DAMAGE/CHILL",
				percentage: true,
			},

			{
				ability_special: "damage",
				text: "DAMAGE/SHARD",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_icemage_wintergrasp",
		name: "Winter's Chill",
		description: "Most of your abilities chill your enemies, reducing their movement speed and magic resistance. The magic resistance reduction stacks.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "magic_resist",
				text: "MAGIC RESISTANCE/STACK",
				percentage: true,
			},

			{
				ability_special: "max_stacks",
				text: "MAX STACKS",
			},

			{
				ability_special: "slow",
				text: "MOVEMENT SLOW",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_knight_barrier",
		name: "Soul Barrier",
		description: "Surrounds you with a fiery shield that absorbs incoming magical damage.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "shield_amount",
				text: "SHIELD CAPACITY",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_knight_brand",
		name: "Heretic's Brand",
		description: "Condemns an enemy with a fiery brand, dealing instant magical damage and significantly reducing all damage that enemy deals to you for a duration.",
		notes:
		[
			"Your allies continue to take full damage from the target's attacks.",
		],
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE",
			},

			{
				ability_special: "damage_reduction",
				text: "DAMAGE REDUCTION",
				percentage: true,
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_knight_lasso",
		name: "Flame Grip",
		description: "Grabs an enemy with a fiery binding, pulling it to you. If the target is a boss or immobile unit, you are pulled to the target instead.",
	});

	Abilities.push({
		ability_classname: "ff_hero_knight_reactivearmor",
		name: "Pyreblessed Armor",
		description: "Your consecrated armor has a chance to lash out at anyone who attacks you in melee range with a gout of flame, dealing magical damage proportional to your current armor.",
		notes:
		[
			"This applies to both basic attacks and abilities, as long as you are close enough.",
		],
		ability_specials:
		[
			{
				ability_special: "chance",
				text: "RETALIATION CHANCE",
				percentage: true,
			},

			{
				ability_special: "damage_from_armor",
				text: "DAMAGE FROM ARMOR",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_knight_shieldbash",
		name: "Shield Slam",
		description: "Bashes an enemy with your shield, dealing physical damage and increasing your armor.",
		ability_specials:
		[
			{
				ability_special: "armor",
				text: "ARMOR BONUS",
			},

			{
				ability_special: "damage",
				text: "DAMAGE",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_knight_sigil",
		name: "Mark of Flame",
		description: "Places a holy circle of flame on the ground, which deals magical damage split between all enemies inside it and grants you increased health regeneration while you are inside it.",
		notes:
		[
			"You can have at most one active Mark at a time.",
		],
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE/SECOND",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "health_regen",
				text: "HEALTH REGENERATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_lesser_heal",
		name: "Lesser Heal",
		description: "Calls upon a soothing light to heal an ally. If this spell is cast on the same target again within a few seconds, its effectiveness is increased.",
		ability_specials:
		[
			{
				ability_special: "amplify_amount",
				text: "RECAST BONUS",
				percentage: true,
			},

			{
				ability_special: "amplify_duration",
				text: "RECAST DURATION",
			},

			{
				ability_special: "healing",
				text: "HEALING",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_lightning_bolt",
		name: "Lightning Bolt",
		description: "Calls down a bolt of lightning that deals magical damage and rattles the target, briefly reducing their base damage.",
		ability_specials:
		[
			{
				ability_special: "weaken_amount",
				text: "DAMAGE PENALTY",
				percentage: true,
			},

			{
				ability_special: "weaken_duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_lockandload",
		name: "Lock and Load",
		description: "Activates an ingenious piece of keen technology that reduces an ally's active cooldowns and grants them a burst of increased attack speed.",
		ability_specials:
		[
			{
				ability_special: "bonus_attack_speed",
				text: "ATTACK SPEED",
			},

			{
				ability_special: "cooldown_reduction",
				text: "COOLDOWN REDUCTION",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_mana_totem",
		name: "Wellspring Totem",
		description: "Summons an immobile totem that restores mana to allies around it. When empowered by your Totemic Mastery ability, also restores health.",
		notes:
		[
			"You can only have one Wellspring Totem at a time. Recasting the ability early will destroy your current totem.",
		],
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "mana_regen",
				text: "MANA REGENERATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_mass_polymorph",
		name: "Mass Polymorph",
		description: "Transforms a random number of enemies in an area into an assortment of harmless critters for a brief duration. Has no effect on bosses or enemies immune to disables.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "max_targets",
				text: "MAXIMUM TARGETS",
			},

			{
				ability_special: "min_targets",
				text: "MINIMUM TARGETS",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_meltarmor",
		name: "Melt Armor",
		description: "Strikes an enemy with boiling heat, increasing all damage that enemy takes for a short duration.<br/><br/>This ability doesn't stack with other similar abilities.",
		ability_specials:
		[
			{
				ability_special: "damagetaken",
				text: "INCREASED DAMAGE TAKEN",
				percentage: true,
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_moonfire",
		name: "Moonflare",
		description: "Blasts an enemy with a searing ray of moonlight. Mini-stuns and interrupts spellcasting.",
		notes:
		[
			"Only boss spells displayed on an orange casting bar can be interrupted.",
		],
	});

	Abilities.push({
		ability_classname: "ff_hero_nightslash",
		name: "Disrupt",
		description: "Shatters the target's defenses, lowering its armor and granting the caster increased attack speed for the next few attacks.",
		ability_specials:
		[
			{
				ability_special: "armor_debuff",
				text: "ARMOR",
			},

			{
				ability_special: "attack_speed",
				text: "ATTACK SPEED",
			},

			{
				ability_special: "buff_hits",
				text: "ATTACKS",
			},

			{
				ability_special: "debuff_duration",
				text: "DEBUFF DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_paladin_absolution",
		name: "Absolution",
		description: "Transforms you into a beacon of light, healing all allies within a large area around you over time. The effect is stronger the closer they are to you.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "healing",
				text: "TOTAL HEALING",
			},

			{
				ability_special: "healing_proximity",
				text: "MAX PROXIMITY BONUS",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_paladin_aegis",
		name: "Bulwark",
		description: "Grants an ally a damage shield that absorbs incoming damage.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "shield_amount",
				text: "SHIELD CAPACITY",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_paladin_chastise",
		name: "Chastise",
		description: "Smites a foe with the power of holy might, dealing magical damage and increasing the amount healed by your next Holy Light. Costs ${fervor_cost} Fervor to cast rather than mana.",
		notes:
		[
			"Fervor is generated by using your other abilities, via your Benediction passive ability.",
		],
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE",
			},

			{
				ability_special: "holylight_healing",
				text: "HOLY LIGHT HEALING",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_paladin_fervor",
		name: "Benediction",
		description: "Your single-target abilities also heal allies for a portion of their total health over time and generate a point of Fervor, which is spent instead of mana to cast your Chastise ability.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "HEAL DURATION",
			},

			{
				ability_special: "heal",
				text: "HEALING",
				percentage: true,
			},

			{
				ability_special: "max_fervor",
				text: "MAX FERVOR",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_paladin_holylight",
		name: "Holy Light",
		description: "Restores an ally's health.",
		ability_specials:
		[
			{
				ability_special: "healing",
				text: "HEALING",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_paladin_resurrect",
		name: "Resurrect",
		description: "Calls upon divine favor to return a fallen ally to life after a short delay.",
		notes:
		[
			"Does not consume a revive charge.",
		],
		ability_specials:
		[
			{
				ability_special: "resurrect_hp",
				text: "HEALTH ON REVIVE",
				percentage: true,
			},

			{
				ability_special: "resurrect_mana",
				text: "MANA ON REVIVE",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_pyromancer_disintegrate",
		name: "Disintegration",
		description: "Channels a beam of raw arcane energy, dealing significant damage to a single target. The damage ramps up as you channel, dealing minimal damage at first and high damage near the end of the channel time.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "CHANNEL TIME",
			},

			{
				ability_special: "total_damage",
				text: "TOTAL DAMAGE",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_pyromancer_embers",
		name: "Rain of Embers",
		description: "Pelts an area with waves of falling embers, dealing magical damage to all enemies struck.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE/WAVE",
			},

			{
				ability_special: "waves",
				text: "WAVES",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_pyromancer_flame_touch",
		name: "Immolating Bolt",
		description: "Empowers your basic attack, applying a short-lived damage over time effect on impact. Each burn effect stacks independently.",
		notes:
		[
			"The bonus damage triggers and benefits from Arcane Momentum.",
		],
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE/TICK",
			},

			{
				ability_special: "ticks",
				text: "TICKS",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_pyromancer_heatup",
		name: "Arcane Momentum",
		description: "Whenever you deal magical damage to a target, you gain Arcane Momentum, increasing your spell damage. The effect will start to wane if you stop dealing damage for too long.",
		notes:
		[
			"Your Arcane Momentum is displayed below your mana bar. Every instance of damage adds 1% to your bar, up to 100%.",
		],
		ability_specials:
		[
			{
				ability_special: "charge_duration",
				text: "WANE DELAY",
			},

			{
				ability_special: "charge_spellamp",
				text: "MAX SPELL DAMAGE",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_pyromancer_lightningorb",
		name: "Lightning Orb",
		description: "Conjures a sphere of electric energy that moves slowly in a straight line, periodically zapping a random nearby enemy for magical damage.\\n",
		ability_specials:
		[
			{
				ability_special: "zap_damage",
				text: "DAMAGE/ZAP",
			},

			{
				ability_special: "zap_interval",
				text: "ZAP INTERVAL",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_rockets",
		name: "Pocket Rockets",
		description: "Fires several heat-seeking rockets, each hitting an enemy within a large range. Closer enemies are prioritized. Each target can only be hit by a single rocket.",
		ability_specials:
		[
			{
				ability_special: "missiles_count",
				text: "MAX ROCKETS",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_savage_strike",
		name: "Savage Strike",
		description: "A brutal melee attack that deals bonus damage and grants increased lifesteal.",
		ability_specials:
		[
			{
				ability_special: "bonus_damage",
				text: "BONUS DAMAGE",
			},

			{
				ability_special: "lifesteal",
				text: "LIFESTEAL",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_smite",
		name: "Smite",
		description: "Punishes an enemy with a blast of holy energy, damaging and stunning it.",
		ability_specials:
		[
			{
				ability_special: "stun_duration",
				text: "STUN DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_spellshield",
		name: "Spell Shield",
		description: "Purges all negative effects on the caster, then envelops him or her in a barrier that absorbs incoming magic damage for a short duration.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "shield",
				text: "DAMAGE ABSORBED",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_spitters",
		name: "Summon Spitters",
		description: "Calls forth a trio of immobile Spitter Weeds that attack nearby enemies. Their attacks can trigger Harmony Aura, but will apply the effect on the caster instead.",
		ability_specials:
		[
			{
				ability_special: "bat",
				text: "BASE ATTACK TIME",
			},

			{
				ability_special: "damage",
				text: "DAMAGE",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_sprint",
		name: "Sprint",
		description: "Grants a burst of increased movement speed and lets you pass through units. While sprinting, you also have a chance to avoid incoming attacks.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "evasion",
				text: "EVASION",
				percentage: true,
			},

			{
				ability_special: "move_speed",
				text: "MOVEMENT SPEED",
				percentage: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_hero_tank_immunity",
		name: "Perfect Guard",
		description: "Grants you a brief moment of damage immunity.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
	});

	Abilities.push({
		ability_classname: "ff_totemist_mastery",
		name: "Totemic Mastery",
		description: "While off cooldown, the next totem you place will be empowered, increasing its duration and granting it an improved effect.\\n\\n<font color='#ffffff'>Warflame Totem</font>: Also grants a critical strike chance to nearby allies.\\n\\n<font color='#ffffff'>Stone Serpent Totem</font>: Deals magic damage every second to enemies around it.\\n\\n<font color='#ffffff'>Wellspring Totem</font>: Also grants allies health regeneration.",
		ability_specials:
		[
			{
				ability_special: "crit_amount",
				text: "WARFLAME CRIT DAMAGE",
				percentage: true,
			},

			{
				ability_special: "crit_chance",
				text: "WARFLAME CRIT CHANCE",
				percentage: true,
			},

			{
				ability_special: "duration",
				text: "DURATION INCREASE",
				percentage: true,
			},

			{
				ability_special: "earthdps",
				text: "SERPENT DAMAGE/SECOND",
			},

			{
				ability_special: "health_regen",
				text: "WELLSPRING REGEN",
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_amrita_drop",
		name: "Amrita Drop",
		description: "<h1>Use: Lesser Immortality</h1> Grants an extra revive charge.",
		notes:
		[
			"This item is not consumed if you use it while you already have the maximum number of charges.",
		],
	});

	Abilities.push({
		ability_classname: "item_ff_blink_token",
		name: "Scroll of Dimensions",
		description: "<h1>Use: Blink</h1> Instantly teleports you a short distance. Comes with 3 charges.",
		lore: "Side effects may include disorientation, sense of displacement, and persistent self-doubt about the underlying stability of the physical universe.",
	});

	Abilities.push({
		ability_classname: "item_ff_coinpurse",
		name: "Midas-Touched Apple",
		description: "<h1>Use: Golden Fruit</h1> Randomly gain ${min_gold} - ${max_gold} gold.",
		lore: "A bit hard on the teeth, but good for your wallet.",
	});

	Abilities.push({
		ability_classname: "item_ff_elixir",
		name: "Rejuvenation Potion",
		description: "<h1>Use: Quaff</h1> Restores ${health_total} health and ${mana_total} mana over ${duration} seconds.<br/><br/>Taking damage does not interrupt this effect.",
	});

	Abilities.push({
		ability_classname: "item_ff_flame_scroll",
		name: "Scroll of Flames",
		description: "<h1>Use: Flame Burst</h1> Deals ${damage} damage in a small radius around you and knocks back non-boss enemies. Comes with 3 charges.",
	});

	Abilities.push({
		ability_classname: "item_ff_gambling_token",
		name: "Challenger's Mark",
		description: "<h1>Passive: Double Down</h1>If you survive the next encounter without dying even once, this will be consumed and award you twice the amount of gold you paid for it.",
		lore: "Fortune favors the bold.",
	});

	Abilities.push({
		ability_classname: "item_ff_healing_potion",
		name: "Healing Potion",
		description: "<h1>Use: Quaff</h1> Restores ${total} health over ${duration} seconds.<br/><br/>Taking damage does not interrupt this effect.",
	});

	Abilities.push({
		ability_classname: "item_ff_mana_potion",
		name: "Mana Potion",
		description: "<h1>Use: Quaff</h1> Restores ${total} mana over ${duration} seconds.<br/><br/>Taking damage does not interrupt this effect.",
	});

	Abilities.push({
		ability_classname: "item_ff_mind_scroll",
		name: "Scroll of Stars",
		description: "<h1>Use: Cosmic Mind</h1> Grants +${max_mana} maximum mana and ${mana_regen} mana regeneration for ${duration} seconds. Comes with 3 charges.",
	});

	Abilities.push({
		ability_classname: "item_ff_power_potion",
		name: "Arcane Flask",
		description: "<h1>Use: Arcane Potency</h1> Grants +${spell_amp}% bonus spell damage for ${duration} seconds.",
		lore: "Power overwhelming, but only for the most fleeting of moments.",
	});

	Abilities.push({
		ability_classname: "item_ff_purge_potion",
		name: "Ghost Flask",
		description: "<h1>Use: Shroud</h1> Dispels all negative effects and grants physical damage immunity and +${movespeed}% movement speed for ${duration} seconds, at the cost of disarming and silencing you for the duration.",
	});

	Abilities.push({
		ability_classname: "item_ff_refresher_potion",
		name: "Refresher Shard",
		description: "<h1>Use: Refresh</h1> Resets the cooldown of all your abilities.",
	});

	Abilities.push({
		ability_classname: "item_ff_regen_scroll",
		name: "Scroll of Earth",
		description: "<h1>Use: Regeneration</h1> Grants ${health_regen} health regeneration for ${duration} seconds. Comes with 3 charges.",
	});

	Abilities.push({
		ability_classname: "item_ff_relic_armorboots",
		name: "Ward Greaves",
		notes:
		[
			"Movement speed bonus does not stack with other percentage-based movement speed bonuses.",
			"Movement speed bonus does not stack with other percentage-based movement speed bonuses.",
		],
		ability_specials:
		[
			{
				ability_special: "armor",
				text: "+$armor",
				item_stat: true,
			},

			{
				ability_special: "magicresist",
				text: "+$spell_resis",
				percentage: true,
				item_stat: true,
			},

			{
				ability_special: "movespeed",
				text: "+$move_spee",
				percentage: true,
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_bookofarcana",
		name: "Tome of Secrets",
		description: "<h1>Active: Presence of Mind</h1> Grants an additional +${spell_amp_active}% spell damage for ${duration} seconds.",
		lore: "Penned centuries ago by a mage whose name has been lost to time.",
		ability_specials:
		[
			{
				ability_special: "mana_regen",
				text: "+$mana_regen",
				item_stat: true,
			},

			{
				ability_special: "spell_amp",
				text: "+$spell_am",
				percentage: true,
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_censer",
		name: "Sanctified Censer",
		description: "<h1>Channel: Soothing Mist</h1>Heals an ally for up to ${total} health over ${duration} seconds.",
		ability_specials:
		[
			{
				ability_special: "mp_regen",
				text: "+$mana_regen",
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_commanderarmor",
		name: "Imperial Plate",
		description: "<h1>Passive: Command Aura</h1> Grants allies within ${radius} units ${armor_allies} armor and ${hp_regen_allies}/s health regeneration.",
		lore: "Armor befitting a true leader.",
		ability_specials:
		[
			{
				ability_special: "armor",
				text: "+$armor",
				item_stat: true,
			},

			{
				ability_special: "hp_bonus",
				text: "+$health",
				item_stat: true,
			},

			{
				ability_special: "hp_regen",
				text: "+$hp_regen",
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_druidtrinket",
		name: "Ironwood Brooch",
		description: "<h1>Passive: Ironwood Blessing</h1>Whenever you use a single-target ability on another ally, that ally is granted +${buff_damage} attack damage and +${buff_regen} mana regeneration for ${duration} seconds. This effect can occur at most once every ${cooldown} seconds.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "+$damage",
				item_stat: true,
			},

			{
				ability_special: "regen",
				text: "+$mana_regen",
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_grace",
		name: "Faerie Shoes",
		description: "<h1>Passive: Grace of the Willows</h1>Grants +${move_speed}% movement speed and +${mp_regen} mana regeneration as long as you haven't taken damage in the last ${cooldown} seconds.",
		notes:
		[
			"Only damage instances of 20 or more will reset the cooldown. The movement speed bonus does not stack with other percentage-based movement speed bonuses.",
		],
		ability_specials:
		[
			{
				ability_special: "evasion",
				text: "+$evasio",
				percentage: true,
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_hexstaff",
		name: "Rod of the Menagerie",
		description: "<h1>Active: Mass Polymorph</h1>Transforms all non-boss enemies in an area into random harmless critters for ${duration} seconds.",
		ability_specials:
		[
			{
				ability_special: "health",
				text: "+$health",
				item_stat: true,
			},

			{
				ability_special: "hp_regen",
				text: "+$hp_regen",
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_horn",
		name: "Earthwarder's Horn",
		description: "<h1>Active: Call to Arms</h1>Grants allies +${damage} attack damage for ${duration} seconds.",
		ability_specials:
		[
			{
				ability_special: "armor",
				text: "+$armor",
				item_stat: true,
			},

			{
				ability_special: "regen",
				text: "+$hp_regen",
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_icewand",
		name: "Wand of Winters",
		description: "<h1>Active: Freezing Field</h1>Conjures a field of ice that deals ${damage} magical damage to all enemies in a line and slows non-boss enemies' movement by ${slow}% for ${duration} seconds.",
		ability_specials:
		[
			{
				ability_special: "mana_regen",
				text: "+$mana_regen",
				item_stat: true,
			},

			{
				ability_special: "stat_damage",
				text: "+$damage",
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_midas",
		name: "Foot of Midas",
		description: "<h1>Passive: Loose Change</h1>Every ${distance} units you walk, a bag of gold is created out of thin air at a random nearby location. Any hero can pick it up to grant the team ${gold} gold each.",
		notes:
		[
			"Movement speed bonus does not stack with other percentage-based movement speed bonuses. Instant movement and movement outside of combat does not contribute to distance traveled. The gold is awarded to the whole team regardless of who picks it up.",
		],
		ability_specials:
		[
			{
				ability_special: "movespeed",
				text: "+$move_spee",
				percentage: true,
				item_stat: true,
			},

			{
				ability_special: "regen",
				text: "+$mana_regen",
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_ninja",
		name: "Shadowstalker's Outfit",
		description: "<h1>Active: Shadow Step</h1>Instantly teleports you a short distance.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "+$damage",
				item_stat: true,
			},

			{
				ability_special: "speed",
				text: "+$attack",
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_shield",
		name: "Stalwart Buckler",
		description: "<h1>Passive: Resilience</h1>Whenever you use your damage immunity ability, also gain ${resistance}% damage resistance for ${duration} seconds.",
		ability_specials:
		[
			{
				ability_special: "armor",
				text: "+$armor",
				item_stat: true,
			},

			{
				ability_special: "health",
				text: "+$health",
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_siren_amulet",
		name: "Naga Medallion",
		lore: "Traces of something strange and unnerving still lingers around this amulet.",
		ability_specials:
		[
			{
				ability_special: "health",
				text: "+$health",
				item_stat: true,
			},

			{
				ability_special: "magresist",
				text: "+$spell_resis",
				percentage: true,
				item_stat: true,
			},

			{
				ability_special: "mana",
				text: "+$mana",
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_siren_lightning",
		name: "Lightning Conduit",
		description: "<h1>Passive: Overload</h1> Grants each attack a ${chance}% chance to restore ${mana_restore} mana and unleash a bolt of lightning that deals ${damage} magic damage and bounces to other nearby enemies.",
		ability_specials:
		[
			{
				ability_special: "atk_speed",
				text: "+$attack",
				item_stat: true,
			},

			{
				ability_special: "spellamp",
				text: "+$spell_am",
				percentage: true,
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_skeletonsword",
		name: "Dreadblade",
		description: "<h1>Active: Soul Blast</h1>Deals ${damage} magical damage to all enemies in an area. Enemies killed are raised as skeletons that fight for you for ${duration} seconds.",
		ability_specials:
		[
			{
				ability_special: "damagebonus",
				text: "+$damage",
				item_stat: true,
			},

			{
				ability_special: "hp_regen",
				text: "+$hp_regen",
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_soulstealer",
		name: "Harvester's Ring",
		description: "<h1>Passive: Grim Harvest</h1>Whenever you use an ability that costs mana, you have a ${chance}% chance to steal a portion of a random nearby foe's life essence, dealing ${damage} pure damage to it and healing you for the same amount.",
		ability_specials:
		[
			{
				ability_special: "health",
				text: "+$health",
				item_stat: true,
			},

			{
				ability_special: "mana_regen",
				text: "+$mana_regen",
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_timbersaw_engine",
		name: "Overheated Engine Core",
		description: "<h1>Toggle: Flame Shroud</h1> Deals ${burn_damage} magical damage/second to enemies near you. Drains ${burn_mana_cost} mana/second while active.",
		lore: "Still hot to the touch and glowing with malevolence.",
		ability_specials:
		[
			{
				ability_special: "mana",
				text: "+$mana",
				item_stat: true,
			},

			{
				ability_special: "spell_resist",
				text: "+$spell_resis",
				percentage: true,
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_timbersaw_saw",
		name: "Shredder's Chainsaw",
		description: "<h1>Passive: Critical Strike</h1> Grants each attack a ${crit_chance}% chance to deal ${crit_amount}% damage.",
		lore: "Wrenched loose from its fuel supply, it can't be put to full use. Nevertheless, it's quite sharp and capable of delivering devastating strikes.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "+$damage",
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_relic_timecube",
		name: "Chronomancer's Orb",
		description: "<h1>Use: Greater Time Lapse</h1>Resets your health, mana, position and ability cooldowns to what they were ${reset_time} seconds ago, minus the cost of activating this item.",
		lore: "Contains within it the mysterious power of nature's harmonic simultaneous four-day time orb.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "+$damage",
				item_stat: true,
			},

			{
				ability_special: "mana",
				text: "+$mana",
				item_stat: true,
			},

		],
	});

	Abilities.push({
		ability_classname: "item_ff_strength_potion",
		name: "Mighty Flask",
		description: "<h1>Use: Muscle Burst</h1> Grants +${attack_bonus} attack damage for ${duration} seconds.",
		lore: "Herculean might in a bottle!",
	});

	Abilities.push({
		ability_classname: "item_ff_ursa_amulet",
		name: "Bear-Tribe Charm",
		description: "<h1>Active: Primal Surge</h1>Instantly restores ${healing} health.",
		ability_specials:
		[
			{
				ability_special: "health",
				text: "+$health",
				item_stat: true,
			},

		],
	});

	Abilities.push({
		name: "DURATION:",
	});

	Abilities.push({
		name: "Empty Ability Slot",
	});

	Abilities.push({
		name: "Empty Ability Slot",
	});

	Abilities.push({
		name: "Empty Ability Slot",
	});

	Abilities.push({
		name: "Empty Ability Slot",
	});

	Abilities.push({
		name: "Empty Ability Slot",
	});

	Abilities.push({
		name: "Empty Ability Slot",
	});

	Abilities.push({
		name: "DURATION:",
	});

	Abilities.push({
		name: "DURATION:",
	});

	Abilities.push({
		name: "Bag of Gold",
	});

	Modifiers.push({
		modifier_classname: "modifier",
		description: `Slowed.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_boss_ogremagi_bloodlust",
		name: "Bloodlust",
		description: `Attacking faster and hitting harder.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_boss_ogremagi_bloodlust_allies",
		name: "Bloodlust",
		description: `Attacking faster and hitting harder.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_expose_weakness",
		name: "Expose Weakness",
		description: `Damage taken increased.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_absolution",
		name: "Absolution",
		description: `Healing nearby allies and protecting them from death.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_absolution_aura",
		name: "Absolution",
		description: `Protected from death.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_aegis",
		name: "Bulwark",
		description: `Absorbing incoming damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_arcane_buster",
		name: "Ruinous Seal",
		description: `Silenced, moving slower and taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_arcane_buster_boss",
		name: "Ruinous Seal",
		description: `Taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_barkskin",
		name: "Barkskin",
		description: `Increased armor and regenerating health.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_barkskin_enemy",
		name: "Strangling Thorns",
		description: `Taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_berserker_frenzy_stack",
		name: "Rage",
		description: `Barely contained anger waiting to be ignited...`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_berserker_unleashed_frenzy",
		name: "Frenzy",
		description: `Bonus attack speed and lifesteal. Can't gain Rage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_boss_ogremagi_bloodlust",
		name: "Mass Bloodlust",
		description: `Faster and stronger.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_boss_ogremagi_entangle",
		name: "Choking Vines",
		description: `Immobilized, disarmed and taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_boss_ogremagi_ignite",
		name: "Chain Ignite",
		description: `Taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_boss_ogremagi_melt",
		name: "Melting Blast",
		description: `Taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_boss_siren_staticfield_debuff",
		name: "Lingering Static",
		description: `Reduced magic resistance.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_boss_spider_cascade",
		name: "Cascading Venom",
		description: `Taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_boss_spider_grievousbite",
		name: "Grievous Bite",
		description: `Taking damage over time until healed above 90%%.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_boss_spider_infest",
		name: "Infest",
		description: `On expiration, deals damage in a radius around you and spawns Spiderlings.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_boss_spider_stealth",
		name: "Hide",
		description: `Hiding among the spiderwebs.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_boss_timbersaw_melt",
		name: "Melting Strike",
		description: `Taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_boss_underlord_curse",
		name: "Curse of Agony",
		description: `Taking damage over time. All incoming damage is increased.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_bulkup",
		name: "Unbreakable Might",
		description: `Health and health regeneration boosted. Generating Rage. `,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_chilled",
		name: "Chilled",
		description: `Slowed and reduced magic resistance.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_creature_drench_debuff",
		name: "Drenched",
		description: `Movement speed reduced.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_creature_grievousbite",
		name: "Grievous Wound",
		description: `Taking damage over time until fully healed.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_creature_immolation_effect",
		name: "Immolation Aura",
		description: `Taking damage every second.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_creature_immolation_greater_effect",
		name: "Greater Immolation Aura",
		description: `Taking damage every second.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_creature_shadowbomb",
		name: "Shadow Bomb",
		description: `Slowed. Will explode, dealing damage proportional to maximum health.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_creature_spidervenom",
		name: "Skitterer Venom",
		description: `Taking damage over time. Damage taken by Sycorax's venom pools increased.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_druid_innervate",
		name: "Harmony Aura",
		description: `Chance to gain increased mana regeneration on spell casts and attacks.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_druid_innervate_regen",
		name: "Elder Harmony",
		description: `Regenerating mana.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_epicenter_debuff",
		name: "Resounding Quake",
		description: `Reduced magic resistance.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_aegis",
		name: "Bulwark",
		description: `Absorbing incoming damage. If broken by damage, you will be immune from damage for a brief moment.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_assassin_adrenaline",
		name: "Adrenaline Rush",
		description: `Increased attack speed.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_assassin_dance",
		name: "Cloak of Night",
		description: `Increased evasion and attack damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_assassin_knives_bleed",
		name: "Serrated Knives",
		description: `Bleeding.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_assassin_mark",
		name: "Lacerate",
		description: `Bleeding.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_assassin_mark_boss",
		name: "Lacerate",
		description: `Bleeding.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_assassin_sleepdart",
		name: "Nightmare Dart",
		description: `Asleep. Taking damage wakes you up.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_assassin_sleepdart_damage",
		name: "Nightmare Toxin",
		description: `Taking damage proportional to current health each second.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_assassin_sleepdart_slow",
		name: "Nightmare Dart",
		description: `Slowed.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_battlecry",
		name: "War Cry",
		description: `Increased attack damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_berserker_bulkup",
		name: "Unbreakable Might",
		description: `Maximum health and health regeneration increased.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_berserker_frenzy_stack",
		name: "Battle Rage",
		description: `Seething anger waiting to be converted into healing by Savage Hew.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_berserker_ignorepain",
		name: "Ignore Pain",
		description: `Taking less damage. Each attack removes a stack.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_berserker_stomp_armor",
		name: "Iron Skin",
		description: `Increased armor.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_berserker_stomped",
		name: "Unbalanced",
		description: `Moving and attacking slower.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_blink_immunity",
		name: "Damage Immunity",
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_bloodlust",
		name: "Vampiric Fury",
		description: `Increased attack speed and lifesteal.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_bloodmage_anemia",
		name: "Anemia",
		description: `Movement slowed.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_bloodmage_bloodlust",
		name: "Vampiric Fury",
		description: `Attacking faster and granted lifesteal.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_bloodmage_drainarmor",
		name: "Blood Armor",
		description: `Taking reduced damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_bloodmage_dread_curse",
		name: "Dread Curse",
		description: `Taking damage over time and will explode when the duration expires.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_bulkup",
		name: "Unbreakable Might",
		description: `Increased health and regeneration.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_charge_frenzy",
		name: "Frenzied Charge",
		description: `Increased attack speed.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_drain_life",
		name: "Drain Life",
		description: `Losing health over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_druid_barkskin_ally",
		name: "Word of Nature",
		description: `Armor increased.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_druid_barkskin_enemy",
		name: "Word of Nature",
		description: `Taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_druid_dispel_slow",
		name: "Dispel Magic",
		description: `Slowed.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_druid_innervate_aura",
		name: "Harmony Aura",
		description: `Chance on ability use and basic attacks to regenerate mana.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_druid_rejuvenate",
		name: "Rejuvenate",
		description: `Healing over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_earthwarden_creature_enrage",
		name: "Enrage",
		description: `Increased attack speed.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_earthwarden_creature_flametouch",
		name: "Flame Touch",
		description: `Taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_earthwarden_creature_stoneshield",
		name: "Stone Shield",
		description: `Absorbing incoming damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_earthwarden_flame_debuff",
		name: "Flame Burst",
		description: `Taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_earthwarden_flame_essence",
		name: "Flame Affinity",
		description: `Increased attack speed.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_earthwarden_spiritlink",
		name: "Spirit Link",
		description: `Sharing a portion of attack damage and healing with another ally.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_earthwarden_stone_essence",
		name: "Stone Affinity",
		description: `Taking reduced damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_earthwarden_water_essence",
		name: "Water Affinity",
		description: `Chance on attack to heal a random ally.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_entangle",
		name: "Entangling Roots",
		description: `Immobilized and taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_entangle_boss",
		name: "Entangling Roots",
		description: `Slowed and taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_flame_touch_debuff",
		name: "Searing Bolt",
		description: `Taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_healer_immunity",
		name: "Damage Immunity",
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_healer_immunity_lesser",
		name: "Spirit Ward",
		description: `Reduced incoming damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_icemage_chilled",
		name: "Winter's Chill",
		description: `Slowed and reduced magic resistance.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_icemage_frozen",
		name: "Frost Tomb",
		description: `Stunned.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_icemage_iceshield",
		name: "Ice Barrier",
		description: `Shielded.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_icemage_icicles_shieldboost",
		name: "Layers of Frost",
		description: `Your next Ice Barrier is empowered and will last longer.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_knight_brand",
		name: "Heretic's Brand",
		description: `Dealing less damage to the Flamekeeper.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_knight_magicbarrier",
		name: "Soul Barrier",
		description: `Absorbing incoming magical damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_knight_shieldbash",
		name: "Shield Slam",
		description: `Armor increased.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_lightninglasso_slow",
		name: "Volt Grip",
		description: `Slowed.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_lockandload",
		name: "Lock and Load",
		description: `Attack speed increased.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_paladin_absolution",
		name: "Absolution",
		description: `Healing allies based on their proximity to you.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_paladin_absolution_aura",
		name: "Absolution",
		description: `Being healed based on proximity to the Paladin.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_paladin_aegis",
		name: "Bulwark",
		description: `Absorbing incoming damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_paladin_chastise_self",
		name: "Empowered Light",
		description: `Your next Holy Light will heal for more.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_paladin_fervor_heal",
		name: "Benediction",
		description: `Healing over time.\\n`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_pyromancer_ember_slow",
		name: "Heavy Rain",
		description: `Slowed.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_pyromancer_flame_touch_debuff",
		name: "Immolating Bolt",
		description: `Taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_rejuvenate",
		name: "Rejuvenate",
		description: `Healing over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hero_tank_immunity",
		name: "Damage Immunity",
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hex_chicken",
		name: "Polymorph: Chicken",
		description: `Cluck!`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hex_fish",
		name: "Polymorph: Fish",
		description: `Blub!`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hex_frog",
		name: "Polymorph: Frog",
		description: `Ribbit!`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_hex_sheep",
		name: "Polymorph: Sheep",
		description: `Baa!`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_iceshield",
		name: "Ice Barrier",
		description: `Absorbing incoming damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_ignorepain",
		name: "Ignore Pain",
		description: `Taking less damage from all sources.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_immune",
		name: "Damage Immunity",
		description: `Immune to damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_item_druidtrinket_buff",
		name: "Ironwood Blessing",
		description: `Increas`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_lightning_sigil_block",
		name: "Mark of the Storm",
		description: `Chance to block incoming attacks while you stay near your Mark of the Storm.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_lightninglasso_charges",
		name: "Volt Grip Charges",
		description: `Each use of Volt Grip spends a charge. Charges refresh over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_magemark_shield",
		name: "Arcane Prowess",
		description: `Attack damage increased. Absorbing incoming damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_paladin_aura_effect",
		name: "Benediction Aura",
		description: `Increased health regeneration. Damage you take grants the Paladin stacks of Retribution.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_paladin_retribution",
		name: "Retribution",
		description: `Improves the effect of your next Chastise.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_pyromancer_heatup_charge",
		name: "Arcane Momentum",
		description: `Increased spell damage. Keep dealing magical damage to maintain.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_relic_bookofarcana_active",
		name: "Presence of Mind",
		description: `Granted spell damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_relic_commanderarmor_aura_effect",
		name: "Command Aura",
		description: `Increased armor and health regeneration.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_spellblade_magemark",
		name: "Arcane Sigil",
		description: `A loosened fragment of the mageblade's power, available to be channeled into Arcane Prowess or Arcane Explosion.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_spider_impale",
		name: "Cascading Venom",
		description: `Taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_timbersaw_armored",
		name: "Armored",
		description: `Taking almost no damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_victorycry",
		name: "Victory!",
		description: `You did it!`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_visage_ghostraze",
		name: "Underworld Essence",
		description: `Taking increased damage from Underworld Flame.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_visage_shroud",
		name: "Spirit Veil",
		description: `Invulnerable and dealing damage to nearby enemies.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_ff_visage_voidzone_aura_effect",
		name: "Grasping Spirits",
		description: `Slowed and taking damage over time.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_item_ff_elixir",
		name: "Rejuvenation Potion",
	});

	Modifiers.push({
		modifier_classname: "modifier_item_ff_healing_potion",
		name: "Healing Potion",
	});

	Modifiers.push({
		modifier_classname: "modifier_item_ff_mana_potion",
		name: "Mana Potion",
	});

	Modifiers.push({
		modifier_classname: "modifier_item_ff_mind_scroll",
		name: "Scroll of Stars",
		description: `Increased maximum mana and mana regeneration.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_item_ff_power_potion",
		name: "Arcane Flask",
		description: `Granted spell damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_item_ff_purge_potion",
		name: "Ghost Flask",
		description: `Disarmed, silenced and immune to physical damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_item_ff_regen_potion",
		name: "Scroll of Earth",
		description: `Increased health regeneration.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_item_ff_relic_shield_active",
		name: "Stalwart Buckler",
		description: `Taking less damage.`,
	});

	Modifiers.push({
		modifier_classname: "modifier_item_ff_strength_potion",
		name: "Mighty Flask",
		description: `Attack damage increased.`,
	});

    // Return data to compiler
    return localization_info;
}