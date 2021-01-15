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
		name: "Aghanim's Labyrinth",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Labirinto de Aghanim"
			},

			{
				language: Language.German,
				name_override: "Aghanims Labyrinth"
			},

			{
				language: Language.Russian,
				name_override: "Лабиринт Аганима"
			},

			{
				language: Language.SChinese,
				name_override: "阿哈利姆的天地迷宫"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_GameMode_15",
		name: "Aghanim's Labyrinth",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Labirinto de Aghanim"
			},

			{
				language: Language.German,
				name_override: "Aghanims Labyrinth"
			},

			{
				language: Language.Russian,
				name_override: "Лабиринт Аганима"
			},

			{
				language: Language.SChinese,
				name_override: "阿哈利姆的天地迷宫"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_GameMode_19",
		name: "Aghanim's Labyrinth",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Labirinto de Aghanim"
			},

			{
				language: Language.German,
				name_override: "Aghanims Labyrinth"
			},

			{
				language: Language.Russian,
				name_override: "Лабиринт Аганима"
			},

			{
				language: Language.SChinese,
				name_override: "阿哈利姆的天地迷宫"
			},

		]
	});

	StandardTooltips.push({
		classname: "aghanim_bonus_round_time_left",
		name: "TIME LEFT",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "TEMPO RESTANTE"
			},

			{
				language: Language.German,
				name_override: "VERBLEIBENDE ZEIT"
			},

			{
				language: Language.Russian,
				name_override: "ОСТАЛОСЬ"
			},

			{
				language: Language.SChinese,
				name_override: "剩余时间"
			},

		]
	});

	StandardTooltips.push({
		classname: "aghanim_bonus_round_total_gold",
		name: "Total Gold",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Total de ouro"
			},

			{
				language: Language.German,
				name_override: "Gesamtes Gold"
			},

			{
				language: Language.Russian,
				name_override: "Всего золота"
			},

			{
				language: Language.SChinese,
				name_override: "总金钱"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Defeated",
		name: "Your team has perished!",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "A sua equipe foi derrotada!"
			},

			{
				language: Language.German,
				name_override: "Ihr Team ist verendet!"
			},

			{
				language: Language.Russian,
				name_override: "Ваша команда погибла!"
			},

			{
				language: Language.SChinese,
				name_override: "你的队伍已经消亡！"
			},

		]
	});

	StandardTooltips.push({
		classname: "dota_game_end_victory_title_radiant",
		name: "You have bested Aghanim's Labyrinth",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Vocês encontraram a saída do Labirinto de Aghanim!"
			},

			{
				language: Language.German,
				name_override: "Sie haben Aghanims Labyrinth gemeistert"
			},

			{
				language: Language.Russian,
				name_override: "Вы одолели лабиринт Аганима"
			},

			{
				language: Language.SChinese,
				name_override: "已通过阿哈利姆的天地迷宫"
			},

		]
	});

	StandardTooltips.push({
		classname: "dota_game_end_victory_title_dire",
		name: "Aghanim's Labyrinth claims your party",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "O seu grupo se perdeu no Labirinto de Aghanim"
			},

			{
				language: Language.German,
				name_override: "Ihr Team fiel Aghanims Labyrinth zum Opfer"
			},

			{
				language: Language.Russian,
				name_override: "Лабиринт Аганима оказался вам не по силам"
			},

			{
				language: Language.SChinese,
				name_override: "阿哈利姆的天地迷宫让你们全军覆没"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_EnemiesRemaining",
		name: "ENEMIES REMAINING:",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "INIMIGOS RESTANTES:"
			},

			{
				language: Language.German,
				name_override: "VERBLEIBENDE GEGNER:"
			},

			{
				language: Language.Russian,
				name_override: "ВРАГОВ ОСТАЛОСЬ:"
			},

			{
				language: Language.SChinese,
				name_override: "剩余敌人："
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_TimeRemaining",
		name: "TIME REMAINING:",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "TEMPO RESTANTE:"
			},

			{
				language: Language.German,
				name_override: "VERBLEIBENDE ZEIT:"
			},

			{
				language: Language.Russian,
				name_override: "ВРЕМЕНИ ОСТАЛОСЬ:"
			},

			{
				language: Language.SChinese,
				name_override: "剩余时间："
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Victory",
		name: "VICTORY!",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "VITÓRIA!"
			},

			{
				language: Language.German,
				name_override: "SIEG!"
			},

			{
				language: Language.Russian,
				name_override: "ПОБЕДА!"
			},

			{
				language: Language.SChinese,
				name_override: "胜利！"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Defeat",
		name: "DEFEAT!",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "DERROTA!"
			},

			{
				language: Language.German,
				name_override: "NIEDERLAGE!"
			},

			{
				language: Language.Russian,
				name_override: "ПОРАЖЕНИЕ!"
			},

			{
				language: Language.SChinese,
				name_override: "失败！"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Kills",
		name: "KILLS",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "VÍTIMAS"
			},

			{
				language: Language.German,
				name_override: "KILLS"
			},

			{
				language: Language.Russian,
				name_override: "УБИЙСТВА"
			},

			{
				language: Language.SChinese,
				name_override: "击杀"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Deaths",
		name: "DEATHS",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "MORTES"
			},

			{
				language: Language.German,
				name_override: "TODE"
			},

			{
				language: Language.Russian,
				name_override: "СМЕРТИ"
			},

			{
				language: Language.SChinese,
				name_override: "死亡"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Saves",
		name: "REVIVES",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "AJUDOU"
			},

			{
				language: Language.German,
				name_override: "RETTUNGEN"
			},

			{
				language: Language.Russian,
				name_override: "ПОМОЩЬ"
			},

			{
				language: Language.SChinese,
				name_override: "复活"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Bags",
		name: "BAGS",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "BOLSAS"
			},

			{
				language: Language.German,
				name_override: "SÄCKE"
			},

			{
				language: Language.Russian,
				name_override: "ЗОЛОТО"
			},

			{
				language: Language.SChinese,
				name_override: "金袋"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Mute",
		name: "MUTE",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "SILEN."
			},

			{
				language: Language.German,
				name_override: "STUMM"
			},

			{
				language: Language.Russian,
				name_override: "СВЯЗЬ"
			},

			{
				language: Language.SChinese,
				name_override: "屏蔽"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_PlayAgain",
		name: "Play Again?",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Jogar novamente?"
			},

			{
				language: Language.German,
				name_override: "Nochmal spielen?"
			},

			{
				language: Language.Russian,
				name_override: "Играть снова?"
			},

			{
				language: Language.SChinese,
				name_override: "再玩一次？"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Yes",
		name: "YES",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "SIM"
			},

			{
				language: Language.German,
				name_override: "JA"
			},

			{
				language: Language.Russian,
				name_override: "ДА"
			},

			{
				language: Language.SChinese,
				name_override: "好的"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_No",
		name: "NO",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "NÃO"
			},

			{
				language: Language.German,
				name_override: "NEIN"
			},

			{
				language: Language.Russian,
				name_override: "НЕТ"
			},

			{
				language: Language.SChinese,
				name_override: "不用"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Score",
		name: "SCORE",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "PONTUAÇÃO"
			},

			{
				language: Language.German,
				name_override: "PUNKTE"
			},

			{
				language: Language.Russian,
				name_override: "СЧЁТ"
			},

			{
				language: Language.SChinese,
				name_override: "得分"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_GoldBags",
		name: "GOLD BAGS COLLECTED",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "BOLSAS DE OURO COLETADAS"
			},

			{
				language: Language.German,
				name_override: "GESAMMELTE GOLDSÄCKE"
			},

			{
				language: Language.Russian,
				name_override: "СОБРАНО МЕШОЧКОВ"
			},

			{
				language: Language.SChinese,
				name_override: "收集的金袋"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_GoldBagsMissed",
		name: "GOLD BAGS MISSED",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "BOLSAS PERDIDAS"
			},

			{
				language: Language.German,
				name_override: "ENTGANGENE GOLDSÄCKE"
			},

			{
				language: Language.Russian,
				name_override: "ПРОПУЩЕНО"
			},

			{
				language: Language.SChinese,
				name_override: "错过的金袋"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_TeamDeaths",
		name: "TEAM DEATHS",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "MORTES DA EQUIPE"
			},

			{
				language: Language.German,
				name_override: "TEAMTODE"
			},

			{
				language: Language.Russian,
				name_override: "СМЕРТИ В КОМАНДЕ"
			},

			{
				language: Language.SChinese,
				name_override: "全队死亡"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Rewards",
		name: "SCEPTER SHARDS",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "FRAGMENTOS DE CETRO"
			},

			{
				language: Language.German,
				name_override: "ZEPTERSPLITTER"
			},

			{
				language: Language.Russian,
				name_override: "ОСКОЛКИ СКИПЕТРА"
			},

			{
				language: Language.SChinese,
				name_override: "神杖碎片"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Blessings",
		name: "BLESSINGS",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "BÊNÇÃOS"
			},

			{
				language: Language.German,
				name_override: "SEGEN"
			},

			{
				language: Language.Russian,
				name_override: "ДАРЫ"
			},

			{
				language: Language.SChinese,
				name_override: "福佑"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_RoomRewards",
		name: "Room Rewards",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Recomp. da sala"
			},

			{
				language: Language.German,
				name_override: "Raumbelohnungen"
			},

			{
				language: Language.Russian,
				name_override: "Награды за комнату"
			},

			{
				language: Language.SChinese,
				name_override: "房间奖励"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_ShowBlessings",
		name: "Show Blessings",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Exibir bênçãos"
			},

			{
				language: Language.German,
				name_override: "Segen anzeigen"
			},

			{
				language: Language.Russian,
				name_override: "Показать дары"
			},

			{
				language: Language.SChinese,
				name_override: "显示福佑"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_HideBlessings",
		name: "Hide Blessings",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Ocultar bênçãos"
			},

			{
				language: Language.German,
				name_override: "Segen ausblenden"
			},

			{
				language: Language.Russian,
				name_override: "Скрыть дары"
			},

			{
				language: Language.SChinese,
				name_override: "隐藏福佑"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Depth",
		name: "Depth {d:depth}",
		language_overrides:
		[
			{
				language: Language.Russian,
				name_override: "Глубина: {d:depth}"
			},

			{
				language: Language.SChinese,
				name_override: "第{d:depth}层"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Reward_Header",
		name: "Choose your reward",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Escolha a sua recompensa"
			},

			{
				language: Language.German,
				name_override: "Belohnung auswählen"
			},

			{
				language: Language.Russian,
				name_override: "Выберите награду"
			},

			{
				language: Language.SChinese,
				name_override: "选择你的奖励"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Reward_Gold",
		name: "Bonus Gold",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Ouro adicional"
			},

			{
				language: Language.German,
				name_override: "Bonusgold"
			},

			{
				language: Language.Russian,
				name_override: "Бонусное золото"
			},

			{
				language: Language.SChinese,
				name_override: "额外金钱"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Reward_Gold_desc",
		name: "{d:quantity} Gold",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "{d:quantity} de ouro"
			},

			{
				language: Language.German,
				name_override: "{d:quantity} Gold"
			},

			{
				language: Language.Russian,
				name_override: "{d:quantity} золота"
			},

			{
				language: Language.SChinese,
				name_override: "{d:quantity}金钱"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Reward_ExtraLives",
		name: "Extra Live(s)",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Vida(s) extra"
			},

			{
				language: Language.German,
				name_override: "Extraleben"
			},

			{
				language: Language.Russian,
				name_override: "Бонусные жизни"
			},

			{
				language: Language.SChinese,
				name_override: "额外生命"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Reward_ExtraLives_desc",
		name: "{d:quantity} Extra Life",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "{d:quantity} vida(s) extra"
			},

			{
				language: Language.German,
				name_override: "{d:quantity} Extraleben"
			},

			{
				language: Language.Russian,
				name_override: "Доп. жизни: {d:quantity} шт."
			},

			{
				language: Language.SChinese,
				name_override: "{d:quantity}次额外生命"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Reward_Item",
		name: "Neutral Item",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Item neutro"
			},

			{
				language: Language.German,
				name_override: "Neutraler Gegenstand"
			},

			{
				language: Language.Russian,
				name_override: "Нейтральный предмет"
			},

			{
				language: Language.SChinese,
				name_override: "中立物品"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Reward_TempBuff",
		name: "Temp Buff",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Bônus temp."
			},

			{
				language: Language.German,
				name_override: "Temp. Bonus"
			},

			{
				language: Language.Russian,
				name_override: "Временное усиление"
			},

			{
				language: Language.SChinese,
				name_override: "临时状态"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Reward_Aura",
		name: "Aura",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Aura"
			},

			{
				language: Language.German,
				name_override: "Aura"
			},

			{
				language: Language.Russian,
				name_override: "Аура"
			},

			{
				language: Language.SChinese,
				name_override: "光环"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Reward_AbilityUpgrade",
		name: "Aghanim's Blessing",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Bênção de Aghanim"
			},

			{
				language: Language.German,
				name_override: "Aghanims Segen"
			},

			{
				language: Language.Russian,
				name_override: "Дар Аганима"
			},

			{
				language: Language.SChinese,
				name_override: "阿哈利姆福佑"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Reward_MinotrAbilityUpgrade",
		name: "Ability Upgrade",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Aprimoramento de habilidade"
			},

			{
				language: Language.German,
				name_override: "Fähigkeit aufwerten"
			},

			{
				language: Language.Russian,
				name_override: "Улучшение способности"
			},

			{
				language: Language.SChinese,
				name_override: "技能升级"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Reward_AdditionalRewards",
		name: "Additional Rewards Granted",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Recompensas adicionais"
			},

			{
				language: Language.German,
				name_override: "Zusätzliche Belohnungen erhalten"
			},

			{
				language: Language.Russian,
				name_override: "Выданы дополнительные награды"
			},

			{
				language: Language.SChinese,
				name_override: "已获得额外奖励"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Game_Mode_Header",
		name: "Welcome To Aghanim's Labyrinth!",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Bem-vindo(a) ao Labirinto de Aghanim!"
			},

			{
				language: Language.German,
				name_override: "Willkommen in Aghanims Labyrinth!"
			},

			{
				language: Language.Russian,
				name_override: "Добро пожаловать в лабиринт!"
			},

			{
				language: Language.SChinese,
				name_override: "欢迎来到阿哈利姆的天地迷宫！"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Rewards_AscensionLevel",
		name: "Ascension Level: {d:ascension_level}",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Dificuldade: {d:ascension_level}"
			},

			{
				language: Language.German,
				name_override: "Stufe: {d:ascension_level}"
			},

			{
				language: Language.Russian,
				name_override: "Уровень вознесения: {d:ascension_level}"
			},

			{
				language: Language.SChinese,
				name_override: "难度等级：{d:ascension_level}"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_TopBar_Difficulty",
		name: "{s:difficulty_name}",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "{s:difficulty_name}"
			},

			{
				language: Language.German,
				name_override: "{s:difficulty_name}"
			},

			{
				language: Language.Russian,
				name_override: "{s:difficulty_name}"
			},

			{
				language: Language.SChinese,
				name_override: "{s:difficulty_name}"
			},

		]
	});

	StandardTooltips.push({
		classname: "boss_shop",
		name: "Bristle's Baubles",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Bugigangas do Bristle"
			},

			{
				language: Language.German,
				name_override: "Borstis Spielereien"
			},

			{
				language: Language.Russian,
				name_override: "Игрушки Иглогрива"
			},

			{
				language: Language.SChinese,
				name_override: "钢背饰品店"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_1",
		name: "Basics",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Itens básicos"
			},

			{
				language: Language.German,
				name_override: "Grundlagen"
			},

			{
				language: Language.Russian,
				name_override: "Основное"
			},

			{
				language: Language.SChinese,
				name_override: "基础"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_2",
		name: "Trinkets",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Quinquilharias"
			},

			{
				language: Language.German,
				name_override: "Schmuckstücke"
			},

			{
				language: Language.Russian,
				name_override: "Безделушки"
			},

			{
				language: Language.SChinese,
				name_override: "饰物"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_3",
		name: "Shards",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Splitter"
			},

			{
				language: Language.Russian,
				name_override: "Осколки"
			},

			{
				language: Language.SChinese,
				name_override: "碎片"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_npc_dota_hero_disruptor",
		name: "Disruptor",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Disruptor"
			},

			{
				language: Language.Russian,
				name_override: "Disruptor"
			},

			{
				language: Language.SChinese,
				name_override: "干扰者"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_npc_dota_hero_magnataur",
		name: "Magnus",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Magnus"
			},

			{
				language: Language.Russian,
				name_override: "Magnus"
			},

			{
				language: Language.SChinese,
				name_override: "马格纳斯"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_npc_dota_hero_mars",
		name: "Mars",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Mars"
			},

			{
				language: Language.Russian,
				name_override: "Mars"
			},

			{
				language: Language.SChinese,
				name_override: "玛尔斯"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_npc_dota_hero_omniknight",
		name: "Omniknight",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Omniknight"
			},

			{
				language: Language.Russian,
				name_override: "Omniknight"
			},

			{
				language: Language.SChinese,
				name_override: "全能骑士"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_npc_dota_hero_queenofpain",
		name: "Queen of Pain",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Queen of Pain"
			},

			{
				language: Language.Russian,
				name_override: "Queen of Pain"
			},

			{
				language: Language.SChinese,
				name_override: "痛苦女王"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_npc_dota_hero_slark",
		name: "Slark",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Slark"
			},

			{
				language: Language.Russian,
				name_override: "Slark"
			},

			{
				language: Language.SChinese,
				name_override: "斯拉克"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_npc_dota_hero_snapfire",
		name: "Snapfire",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Snapfire"
			},

			{
				language: Language.Russian,
				name_override: "Snapfire"
			},

			{
				language: Language.SChinese,
				name_override: "电炎绝手"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_npc_dota_hero_sniper",
		name: "Sniper",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Sniper"
			},

			{
				language: Language.Russian,
				name_override: "Sniper"
			},

			{
				language: Language.SChinese,
				name_override: "狙击手"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_npc_dota_hero_templar_assassin",
		name: "Templar Assassin",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Templar Assassin"
			},

			{
				language: Language.Russian,
				name_override: "Templar Assassin"
			},

			{
				language: Language.SChinese,
				name_override: "圣堂刺客"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_npc_dota_hero_tusk",
		name: "Tusk",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Tusk"
			},

			{
				language: Language.Russian,
				name_override: "Tusk"
			},

			{
				language: Language.SChinese,
				name_override: "巨牙海民"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_npc_dota_hero_ursa",
		name: "Ursa",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Ursa"
			},

			{
				language: Language.Russian,
				name_override: "Ursa"
			},

			{
				language: Language.SChinese,
				name_override: "熊战士"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_npc_dota_hero_viper",
		name: "Viper",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Viper"
			},

			{
				language: Language.Russian,
				name_override: "Viper"
			},

			{
				language: Language.SChinese,
				name_override: "冥界亚龙"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_npc_dota_hero_weaver",
		name: "Weaver",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Weaver"
			},

			{
				language: Language.Russian,
				name_override: "Weaver"
			},

			{
				language: Language.SChinese,
				name_override: "编织者"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_npc_dota_hero_winter_wyvern",
		name: "Winter Wyvern",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Winter Wyvern"
			},

			{
				language: Language.Russian,
				name_override: "Winter Wyvern"
			},

			{
				language: Language.SChinese,
				name_override: "寒冬飞龙"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Subshop_npc_dota_hero_witch_doctor",
		name: "Witch Doctor",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Witch Doctor"
			},

			{
				language: Language.Russian,
				name_override: "Witch Doctor"
			},

			{
				language: Language.SChinese,
				name_override: "巫医"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_BattleRoyaleDamageStarting",
		name: "Join the battle, coward!",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Não fuja da batalha, covarde!"
			},

			{
				language: Language.German,
				name_override: "Zurück in den Kampf, Feigling!"
			},

			{
				language: Language.Russian,
				name_override: "Вступай в битву, трус!"
			},

			{
				language: Language.SChinese,
				name_override: "快加入战斗，懦夫！"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_RewardTooltip_Gold",
		name: "Gold",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Ouro"
			},

			{
				language: Language.German,
				name_override: "Gold"
			},

			{
				language: Language.Russian,
				name_override: "Золото"
			},

			{
				language: Language.SChinese,
				name_override: "金钱"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_RewardTooltip_XP",
		name: "XP",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "XP"
			},

			{
				language: Language.German,
				name_override: "EP"
			},

			{
				language: Language.Russian,
				name_override: "Опыт"
			},

			{
				language: Language.SChinese,
				name_override: "经验"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Rewards_ShowRewards",
		name: "SCEPTER SHARD AVAILABLE",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "FRAGMENTO DO CETRO DISPONÍVEL"
			},

			{
				language: Language.German,
				name_override: "ZEPTERSPLITTER VERFÜGBAR"
			},

			{
				language: Language.Russian,
				name_override: "ДОСТУПЕН ОСКОЛОК СКИПЕТРА"
			},

			{
				language: Language.SChinese,
				name_override: "神杖碎片可用"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Rewards_Info",
		name: "View selected upgrades in the scoreboard",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Os aprimoramentos selecionados podem ser vistos no placar"
			},

			{
				language: Language.German,
				name_override: "Zeige gewählte Aufwertungen in der Punktetabelle"
			},

			{
				language: Language.Russian,
				name_override: "Выбранные улучшения можно увидеть в таблице счёта"
			},

			{
				language: Language.SChinese,
				name_override: "查看计分板中已选择升级效果"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_REWARD_TIER1_Desc",
		name: "Tier 1",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Stufe 1"
			},

			{
				language: Language.Russian,
				name_override: "1-й разряд"
			},

			{
				language: Language.SChinese,
				name_override: "第1级"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_REWARD_TIER2_Desc",
		name: "Tier 2",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Stufe 2"
			},

			{
				language: Language.Russian,
				name_override: "2-й разряд"
			},

			{
				language: Language.SChinese,
				name_override: "第2级"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_REWARD_TIER3_Desc",
		name: "Tier 3",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Stufe 3"
			},

			{
				language: Language.Russian,
				name_override: "3-й разряд"
			},

			{
				language: Language.SChinese,
				name_override: "第3级"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_REWARD_TIER4_Desc",
		name: "Tier 4",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Stufe 4"
			},

			{
				language: Language.Russian,
				name_override: "4-й разряд"
			},

			{
				language: Language.SChinese,
				name_override: "第4阶"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_REWARD_TIER5_Desc",
		name: "Tier 5",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Stufe 5"
			},

			{
				language: Language.Russian,
				name_override: "5-й разряд"
			},

			{
				language: Language.SChinese,
				name_override: "第5阶"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Hud_EncounterDepth",
		name: "Depth {s:encounter_depth}",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Profundidade: {s:encounter_depth}"
			},

			{
				language: Language.German,
				name_override: "Raum {s:encounter_depth}"
			},

			{
				language: Language.Russian,
				name_override: "Глубина: {s:encounter_depth}"
			},

			{
				language: Language.SChinese,
				name_override: "第{s:encounter_depth}层"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Hud_AscenionAbilitiesTitle",
		name: "Additional Modifiers",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Modificadores adicionais"
			},

			{
				language: Language.German,
				name_override: "Zusätzliche Modifikatoren"
			},

			{
				language: Language.Russian,
				name_override: "Дополнительные модификаторы"
			},

			{
				language: Language.SChinese,
				name_override: "额外效果"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Hud_Elite_Encounter_Discover",
		name: "Elite Encounter - 2x Rewards",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Confronto de elite — recompensas em dobro"
			},

			{
				language: Language.German,
				name_override: "Elitebegegnung – Doppelte Belohnung"
			},

			{
				language: Language.Russian,
				name_override: "Элитная стычка — двойные награды"
			},

			{
				language: Language.SChinese,
				name_override: "菁英遭遇战 - 2倍奖励"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Hud_Elite_Encounter",
		name: "Elite Encounter",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Confronto de elite"
			},

			{
				language: Language.German,
				name_override: "Elitebegegnung"
			},

			{
				language: Language.Russian,
				name_override: "Элитная стычка"
			},

			{
				language: Language.SChinese,
				name_override: "菁英遭遇战"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Reward_Rarity_Common",
		name: "Choose a <font color='#88A6D9'>COMMON</font> Scepter Shard",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Escolha um fragmento <font color='#88A6D9'>COMUM</font>"
			},

			{
				language: Language.German,
				name_override: "Einen <font color='#88A6D9'>GEWÖHNLCHEN</font> Zeptersplitter wählen"
			},

			{
				language: Language.Russian,
				name_override: "Выберите <font color='#88A6D9'>ОБЫЧНЫЙ</font> осколок скипетра"
			},

			{
				language: Language.SChinese,
				name_override: "选择<font color='#88A6D9'>普通</font>神杖碎片"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Reward_Rarity_Elite",
		name: "Choose an <font color='#D02B29'>ELITE</font> Scepter Shard",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Escolha um fragmento de <font color='#D02B29'>ELITE</font>"
			},

			{
				language: Language.German,
				name_override: "Einen <font color='#D02B29'>ELITE</font>-Zeptersplitter wählen"
			},

			{
				language: Language.Russian,
				name_override: "Выберите <font color='#D02B29'>ЭЛИТНЫЙ</font> осколок скипетра"
			},

			{
				language: Language.SChinese,
				name_override: "选择<font color='#D02B29'>精英</font>神杖碎片"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Reward_Rarity_Epic",
		name: "Choose a <font color='#7266FF'>LEGENDARY</font> Scepter Shard",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Escolha um fragmento <font color='#7266FF'>LENDÁRIO</font>"
			},

			{
				language: Language.German,
				name_override: "Einen <font color='#7266FF'>LEGENDÄREN</font> Zeptersplitter wählen"
			},

			{
				language: Language.Russian,
				name_override: "Выберите <font color='#7266FF'>ЛЕГЕНДАРНЫЙ</font> осколок скипетра"
			},

			{
				language: Language.SChinese,
				name_override: "选择<font color='#7266FF'>传奇</font>神杖碎片"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_REWARD_TYPE_GOLD_Toast",
		name: "{s:player_name} chose {d:int_value} <panel class='CombatEventGoldIcon'/>",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "{s:player_name} escolheu {d:int_value} <panel class='CombatEventGoldIcon'/>"
			},

			{
				language: Language.German,
				name_override: "{s:player_name} hat {d:int_value} <panel class='CombatEventGoldIcon'/> gewählt"
			},

			{
				language: Language.Russian,
				name_override: "{s:player_name} выбирает {d:int_value} <panel class='CombatEventGoldIcon'/>"
			},

			{
				language: Language.SChinese,
				name_override: "{s:player_name}选择了{d:int_value} <panel class='CombatEventGoldIcon'/>"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_REWARD_TYPE_ITEM_Toast",
		name: "{s:player_name} chose {s:locstring_value}",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "{s:player_name} escolheu {s:locstring_value}"
			},

			{
				language: Language.German,
				name_override: "{s:player_name} hat „{s:locstring_value}“ gewählt"
			},

			{
				language: Language.Russian,
				name_override: "{s:player_name} выбирает {s:locstring_value}"
			},

			{
				language: Language.SChinese,
				name_override: "{s:player_name}选择了{s:locstring_value}"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_REWARD_TYPE_ABILITY_UPGRADE_Toast",
		name: "{s:player_name} chose {s:locstring_value}",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "{s:player_name} escolheu {s:locstring_value}"
			},

			{
				language: Language.German,
				name_override: "{s:player_name} hat „{s:locstring_value}“ gewählt"
			},

			{
				language: Language.Russian,
				name_override: "{s:player_name} выбирает {s:locstring_value}"
			},

			{
				language: Language.SChinese,
				name_override: "{s:player_name}选择了{s:locstring_value}"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_REWARD_TYPE_EXTRA_LIVES_Toast",
		name: "{s:player_name} chose {d:int_value}",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "{s:player_name} escolheu {d:int_value}"
			},

			{
				language: Language.German,
				name_override: "{s:player_name} hat {d:int_value} gewählt"
			},

			{
				language: Language.Russian,
				name_override: "{s:player_name} выбирает {d:int_value}"
			},

			{
				language: Language.SChinese,
				name_override: "{s:player_name}选择了{d:int_value}"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_REWARD_TYPE_MINOR_ABILITY_UPGRADE_Toast",
		name: "{s:player_name} chose %s1",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "{s:player_name} escolheu %s1"
			},

			{
				language: Language.German,
				name_override: "{s:player_name} hat „%s1“ gewählt"
			},

			{
				language: Language.Russian,
				name_override: "{s:player_name} выбирает %s1"
			},

			{
				language: Language.SChinese,
				name_override: "{s:player_name}选择了%s1"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_REWARD_TYPE_MINOR_STATS_UPGRADE_Toast",
		name: "{s:player_name} chose %s1",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "{s:player_name} escolheu %s1"
			},

			{
				language: Language.German,
				name_override: "{s:player_name} hat „%s1“ gewählt"
			},

			{
				language: Language.Russian,
				name_override: "{s:player_name} выбирает %s1"
			},

			{
				language: Language.SChinese,
				name_override: "{s:player_name}选择了%s1"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_REWARD_TYPE_GOLD_Desc",
		name: "Gold",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Ouro"
			},

			{
				language: Language.German,
				name_override: "Gold"
			},

			{
				language: Language.Russian,
				name_override: "Золото"
			},

			{
				language: Language.SChinese,
				name_override: "黄金"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_REWARD_TYPE_TREASURE_Desc",
		name: "Treasure Chest",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Baú de Tesouro"
			},

			{
				language: Language.German,
				name_override: "Schatzkiste"
			},

			{
				language: Language.Russian,
				name_override: "Сундук с сокровищами"
			},

			{
				language: Language.SChinese,
				name_override: "宝箱"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_REWARD_TYPE_EXTRA_LIVES_Desc",
		name: "Extra Lives",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Vidas adicionais"
			},

			{
				language: Language.German,
				name_override: "Extraleben"
			},

			{
				language: Language.Russian,
				name_override: "Бонусные жизни"
			},

			{
				language: Language.SChinese,
				name_override: "额外生命"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_HUD_Claimed_Rewards_Header",
		name: "Claimed Rewards",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Recompensas resgatadas"
			},

			{
				language: Language.German,
				name_override: "Eingelöste Belohnungen"
			},

			{
				language: Language.Russian,
				name_override: "Полученные награды"
			},

			{
				language: Language.SChinese,
				name_override: "领取奖励"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Hud_Tooltip_Outpost_Title",
		name: "Combat",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Combate"
			},

			{
				language: Language.German,
				name_override: "Kampf"
			},

			{
				language: Language.Russian,
				name_override: "Бой"
			},

			{
				language: Language.SChinese,
				name_override: "战斗"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Hud_Tooltip_Outpost_EliteTitle",
		name: "Elite Combat",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Combate de elite"
			},

			{
				language: Language.German,
				name_override: "Elitekampf"
			},

			{
				language: Language.Russian,
				name_override: "Элитный бой"
			},

			{
				language: Language.SChinese,
				name_override: "菁英战斗"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Hud_Tooltip_Outpost_TrapTitle",
		name: "Trap",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Armadilha"
			},

			{
				language: Language.German,
				name_override: "Falle"
			},

			{
				language: Language.Russian,
				name_override: "Ловушка"
			},

			{
				language: Language.SChinese,
				name_override: "陷阱"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Hud_Tooltip_Outpost_BossTitle",
		name: "Boss",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Chefão"
			},

			{
				language: Language.German,
				name_override: "Boss"
			},

			{
				language: Language.Russian,
				name_override: "Босс"
			},

			{
				language: Language.SChinese,
				name_override: "首领"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Hud_Tooltip_Outpost_BonusTitle",
		name: "Bonus",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Bônus"
			},

			{
				language: Language.German,
				name_override: "Bonus"
			},

			{
				language: Language.Russian,
				name_override: "Бонус"
			},

			{
				language: Language.SChinese,
				name_override: "奖励"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Hud_Tooltip_Outpost_TransitionTitle",
		name: "Rest",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Descanso"
			},

			{
				language: Language.German,
				name_override: "Rast"
			},

			{
				language: Language.Russian,
				name_override: "Отдых"
			},

			{
				language: Language.SChinese,
				name_override: "休息"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Hud_Outpost_ChannelBar_Title",
		name: "Selecting COMBAT",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Selecionando COMBATE"
			},

			{
				language: Language.German,
				name_override: "KAMPF wählen"
			},

			{
				language: Language.Russian,
				name_override: "Вы выбираете БОЙ"
			},

			{
				language: Language.SChinese,
				name_override: "正在选择战斗"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Hud_Outpost_ChannelBar_EliteTitle",
		name: "Selecting <font color='#D02B29'>ELITE</font> COMBAT",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Selecionando COMBATE DE <font color='#D02B29'>ELITE</font>"
			},

			{
				language: Language.German,
				name_override: "<font color='#D02B29'>ELITE</font>KAMPF auswählen"
			},

			{
				language: Language.Russian,
				name_override: "Вы выбираете <font color='#D02B29'>ЭЛИТНЫЙ</font> БОЙ"
			},

			{
				language: Language.SChinese,
				name_override: "正在选择<font color='#D02B29'>菁英</font>战斗"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Hud_Outpost_ChannelBar_TrapTitle",
		name: "Selecting <font color='#FF7F37'>TRAPS</font>",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Selecionando <font color='#FF7F37'>ARMADILHAS</font>"
			},

			{
				language: Language.German,
				name_override: "<font color='#FF7F37'>FALLEN</font> auswählen"
			},

			{
				language: Language.Russian,
				name_override: "Вы выбираете <font color='#FF7F37'>ЛОВУШКИ</font>"
			},

			{
				language: Language.SChinese,
				name_override: "正在选择<font color='#FF7F37'>陷阱</font>"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Hud_Outpost_ChannelBar_BossTitle",
		name: "Selecting <font color='#7266FF'>BOSS</font>",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Selecionando <font color='#7266FF'>CHEFÃO</font>"
			},

			{
				language: Language.German,
				name_override: "<font color='#7266FF'>BOSS</font> auswählen"
			},

			{
				language: Language.Russian,
				name_override: "Вы выбираете <font color='#7266FF'>БОССА</font>"
			},

			{
				language: Language.SChinese,
				name_override: "正在选择<font color='#7266FF'>首领</font>"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Hud_Outpost_ChannelBar_BonusTitle",
		name: "Selecting <font color='#f9cb4f'>BONUS</font>",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Selecionando <font color='#f9cb4f'>BÔNUS</font>"
			},

			{
				language: Language.German,
				name_override: "<font color='#f9cb4f'>BONUS</font> auswählen"
			},

			{
				language: Language.Russian,
				name_override: "Вы выбираете <font color='#f9cb4f'>БОНУС</font>"
			},

			{
				language: Language.SChinese,
				name_override: "正在选择<font color='#f9cb4f'>奖励</font>"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Hud_Outpost_ChannelBar_RestTitle",
		name: "Selecting <font color='#f9cb4f'>REST</font>",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Selecionando <font color='#f9cb4f'>DESCANSO</font>"
			},

			{
				language: Language.German,
				name_override: "<font color='#f9cb4f'>RAST</font> auswählen"
			},

			{
				language: Language.Russian,
				name_override: "Вы выбираете <font color='#f9cb4f'>ОТДЫХ</font>"
			},

			{
				language: Language.SChinese,
				name_override: "正在选择<font color='#f9cb4f'>休整</font>"
			},

		]
	});

	StandardTooltips.push({
		classname: "defeat_all_enemies",
		name: "Defeat all enemies",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Derrote todos os inimigos"
			},

			{
				language: Language.German,
				name_override: "Besiegen Sie alle Gegner"
			},

			{
				language: Language.Russian,
				name_override: "Победите всех врагов"
			},

			{
				language: Language.SChinese,
				name_override: "击败所有敌人"
			},

		]
	});

	StandardTooltips.push({
		classname: "survive_waves",
		name: "Survive enemy waves",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Resista às ondas inimigas"
			},

			{
				language: Language.German,
				name_override: "Überleben Sie Gegnerwellen"
			},

			{
				language: Language.Russian,
				name_override: "Переживите волны врагов"
			},

			{
				language: Language.SChinese,
				name_override: "在大波敌人中存活"
			},

		]
	});

	StandardTooltips.push({
		classname: "destroy_spawning_portals",
		name: "Destroy the Dark Portals",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Destrua os portais sombrios"
			},

			{
				language: Language.German,
				name_override: "Zerstören Sie die dunklen Portale"
			},

			{
				language: Language.Russian,
				name_override: "Уничтожьте тёмные порталы"
			},

			{
				language: Language.SChinese,
				name_override: "摧毁黑暗传送门"
			},

		]
	});

	StandardTooltips.push({
		classname: "navigate_the_traps",
		name: "Navigate the Traps and Reach the Goal",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Evite as armadilhas e chegue no objetivo"
			},

			{
				language: Language.German,
				name_override: "Weichen Sie den Fallen aus und erreichen Sie das Ziel"
			},

			{
				language: Language.Russian,
				name_override: "Обойдите ловушки и дойдите до цели"
			},

			{
				language: Language.SChinese,
				name_override: "通过陷阱并到达目的地"
			},

		]
	});

	StandardTooltips.push({
		classname: "kill_scarab_priests",
		name: "Defeat the Scarab Priests",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Derrote os escaravelhos fanáticos"
			},

			{
				language: Language.German,
				name_override: "Besiegen Sie die Skarabäus-Priester"
			},

			{
				language: Language.Russian,
				name_override: "Одолейте скарабеев-священников"
			},

			{
				language: Language.SChinese,
				name_override: "击败圣甲虫牧师"
			},

		]
	});

	StandardTooltips.push({
		classname: "defeat_the_alchemists",
		name: "Defeat the Alchemists",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Derrote os alquimistas"
			},

			{
				language: Language.German,
				name_override: "Besiegen Sie die Alchemisten"
			},

			{
				language: Language.Russian,
				name_override: "Одолейте алхимиков"
			},

			{
				language: Language.SChinese,
				name_override: "击败炼金术士"
			},

		]
	});

	StandardTooltips.push({
		classname: "defeat_boss_npc_dota_boss_void_spirit",
		name: "Defeat the Shadow of Inai",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Derrote a sombra de Inai"
			},

			{
				language: Language.German,
				name_override: "Besiegen Sie den Schatten von Inai"
			},

			{
				language: Language.Russian,
				name_override: "Одолейте тень Иная"
			},

			{
				language: Language.SChinese,
				name_override: "击败无玄的阴影"
			},

		]
	});

	StandardTooltips.push({
		classname: "defeat_boss_npc_dota_creature_temple_guardian",
		name: "Defeat the Temple Guardians",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Derrote os guardiões do templo"
			},

			{
				language: Language.German,
				name_override: "Besiegen Sie die Tempelwächter"
			},

			{
				language: Language.Russian,
				name_override: "Одолейте защитников храма"
			},

			{
				language: Language.SChinese,
				name_override: "击败神庙守卫"
			},

		]
	});

	StandardTooltips.push({
		classname: "defeat_boss_npc_dota_creature_storegga",
		name: "Defeat Storegga",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Derrote Storegga"
			},

			{
				language: Language.German,
				name_override: "Besiegen Sie Storegga"
			},

			{
				language: Language.Russian,
				name_override: "Одолейте Стуреггу"
			},

			{
				language: Language.SChinese,
				name_override: "击败石托瑞嘉"
			},

		]
	});

	StandardTooltips.push({
		classname: "defeat_boss_npc_dota_boss_aghanim",
		name: "Defeat Aghanim",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Derrote Aghanim"
			},

			{
				language: Language.German,
				name_override: "Besiegen Sie Aghanim"
			},

			{
				language: Language.Russian,
				name_override: "Одолейте Аганима"
			},

			{
				language: Language.SChinese,
				name_override: "击败阿哈利姆"
			},

		]
	});

	StandardTooltips.push({
		classname: "defeat_boss_npc_dota_boss_visage",
		name: "Defeat the Warden of the Narrow Maze",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Derrote o guardião do Labirinto Estreito"
			},

			{
				language: Language.German,
				name_override: "Besiegen Sie den Wächter des Verschlungenen Labyrinths"
			},

			{
				language: Language.Russian,
				name_override: "Defeat the Warden of the Narrow Maze"
			},

			{
				language: Language.Russian,
				name_override: "Одолейте стража Узкого лабиринта"
			},

			{
				language: Language.SChinese,
				name_override: "Defeat the Warden of the Narrow Maze"
			},

			{
				language: Language.SChinese,
				name_override: "击败狭窄迷宫的守望者"
			},

		]
	});

	StandardTooltips.push({
		classname: "defeat_boss_npc_dota_boss_timbersaw",
		name: "Defeat Rizzrick the Razorsaw",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Derrote Rizzrick Serranavalha"
			},

			{
				language: Language.German,
				name_override: "Besiegen Sie Rizzrick, die Rasiersäge"
			},

			{
				language: Language.Russian,
				name_override: "Одолейте древореза Риззрика"
			},

			{
				language: Language.SChinese,
				name_override: "击败剃锯机瑞兹瑞克"
			},

		]
	});

	StandardTooltips.push({
		classname: "kill_waveblasters",
		name: "Defeat the Blaster Bats",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Derrote os morcegos explosivos"
			},

			{
				language: Language.German,
				name_override: "Besiegen Sie die Windvampire"
			},

			{
				language: Language.Russian,
				name_override: "Одолейте взрывных летунов"
			},

			{
				language: Language.SChinese,
				name_override: "击败爆破蝙蝠"
			},

		]
	});

	StandardTooltips.push({
		classname: "kill_wildwings",
		name: "Defeat the Angry Birds",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Derrote os pássaros raivosos"
			},

			{
				language: Language.German,
				name_override: "Besiegen Sie die wütenden Vögel"
			},

			{
				language: Language.Russian,
				name_override: "Одолейте злобных пташек"
			},

			{
				language: Language.SChinese,
				name_override: "击败愤怒的小鸟"
			},

		]
	});

	StandardTooltips.push({
		classname: "kill_tinies",
		name: "Destroy Friendships",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Destrua amizades"
			},

			{
				language: Language.German,
				name_override: "Zerstören Sie Freundschaften"
			},

			{
				language: Language.Russian,
				name_override: "Разрушьте дружбу"
			},

			{
				language: Language.SChinese,
				name_override: "击败友谊"
			},

		]
	});

	StandardTooltips.push({
		classname: "defeat_shadow_demons",
		name: "Defeat the Shadow Demons",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Derrote os demônios das sombras"
			},

			{
				language: Language.German,
				name_override: "Besiegen Sie die Schattendämonen"
			},

			{
				language: Language.Russian,
				name_override: "Одолейте демонов мрака"
			},

			{
				language: Language.SChinese,
				name_override: "击败暗影恶魔"
			},

		]
	});

	StandardTooltips.push({
		classname: "rescue_sheep",
		name: "Rescue the Sheep",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Resgate as ovelhas"
			},

			{
				language: Language.German,
				name_override: "Retten Sie die Schafe"
			},

			{
				language: Language.Russian,
				name_override: "Спасите овцу"
			},

			{
				language: Language.SChinese,
				name_override: "拯救绵羊"
			},

		]
	});

	StandardTooltips.push({
		classname: "save_gary",
		name: "Protect Gary",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Proteja Gary"
			},

			{
				language: Language.German,
				name_override: "Beschützen Sie Gary"
			},

			{
				language: Language.Russian,
				name_override: "Защитите Гэри"
			},

			{
				language: Language.SChinese,
				name_override: "拯救盖瑞"
			},

		]
	});

	StandardTooltips.push({
		classname: "destroy_all_mines",
		name: "Destroy the Underwater Mines",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Destrua as minas submarinas"
			},

			{
				language: Language.German,
				name_override: "Zerstören Sie die Unterwasserminen"
			},

			{
				language: Language.Russian,
				name_override: "Уничтожьте подводные мины"
			},

			{
				language: Language.SChinese,
				name_override: "击败水底炸弹"
			},

		]
	});

	StandardTooltips.push({
		classname: "defeat_shadow_shamans",
		name: "Defeat the Bog Shacklers",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Derrote os xamãs do pântano"
			},

			{
				language: Language.German,
				name_override: "Besiegen Sie die Sumpfschamanen"
			},

			{
				language: Language.Russian,
				name_override: "Одолейте болотных путальщиков"
			},

			{
				language: Language.SChinese,
				name_override: "击败沼泽枷锁恶徒"
			},

		]
	});

	StandardTooltips.push({
		classname: "kill_shroom_giants",
		name: "Defeat the Shroom Giants",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Derrote os cogumelos gigantes"
			},

			{
				language: Language.German,
				name_override: "Besiegen Sie die Pilzriesen"
			},

			{
				language: Language.Russian,
				name_override: "Одолейте грибных гигантов"
			},

			{
				language: Language.SChinese,
				name_override: "击败蘑菇巨人"
			},

		]
	});

	StandardTooltips.push({
		classname: "objective_select_ascension_level",
		name: "Select Ascension Level",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Selecione a dificuldade"
			},

			{
				language: Language.German,
				name_override: "Schwierigkeitsstufe auswählen"
			},

			{
				language: Language.Russian,
				name_override: "Выберите уровень вознесения"
			},

			{
				language: Language.SChinese,
				name_override: "选择难度级别"
			},

		]
	});

	StandardTooltips.push({
		classname: "objective_stand_on_buttons",
		name: "Stand On Starting Buttons",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Fique em cima de um dos botões"
			},

			{
				language: Language.German,
				name_override: "Zu den Startflächen bewegen"
			},

			{
				language: Language.Russian,
				name_override: "Встаньте на кнопки старта"
			},

			{
				language: Language.SChinese,
				name_override: "站在初始按钮上"
			},

		]
	});

	StandardTooltips.push({
		classname: "objective_select_aghanims_fragmants",
		name: "Select Aghanim Scepter Shards",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Selecione os fragmentos do Cetro de Aghanim"
			},

			{
				language: Language.German,
				name_override: "Zeptersplitter auswählen"
			},

			{
				language: Language.Russian,
				name_override: "Выберите осколки скипетра Аганима"
			},

			{
				language: Language.SChinese,
				name_override: "选择阿哈利姆神杖碎片"
			},

		]
	});

	StandardTooltips.push({
		classname: "objective_saddle_up_on_morty",
		name: "Saddle Up On Mortimus",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Monte em um dos Mortimus"
			},

			{
				language: Language.German,
				name_override: "Steigen Sie auf Mortimus"
			},

			{
				language: Language.Russian,
				name_override: "Оседлайте Мортимуса"
			},

			{
				language: Language.SChinese,
				name_override: "骑上小莫迪"
			},

		]
	});

	StandardTooltips.push({
		classname: "objective_jump_to_collect_gold",
		name: "Jump To Collect Gold!",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Pule para coletar ouro!"
			},

			{
				language: Language.German,
				name_override: "Springen, um Gold zu sammeln!"
			},

			{
				language: Language.Russian,
				name_override: "Прыгайте и собирайте золото!"
			},

			{
				language: Language.SChinese,
				name_override: "跳跃收集黄金！"
			},

		]
	});

	StandardTooltips.push({
		classname: "objective_saddle_up_on_penguin",
		name: "Saddle Up On a Peng-Wing",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Monte em um Peng-wing"
			},

			{
				language: Language.German,
				name_override: "Steigen Sie auf einen Pinguin"
			},

			{
				language: Language.Russian,
				name_override: "Оседлайте пингвикрыла"
			},

			{
				language: Language.SChinese,
				name_override: "骑上一头鹅儿"
			},

		]
	});

	StandardTooltips.push({
		classname: "objective_sled_to_collect_gold",
		name: "Sled To Collect Gold!",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Deslize para coletar ouro!"
			},

			{
				language: Language.German,
				name_override: "Schlittern, um Gold zu sammeln!"
			},

			{
				language: Language.Russian,
				name_override: "Катайтесь и собирайте золото!"
			},

			{
				language: Language.SChinese,
				name_override: "乘雪橇收集黄金！"
			},

		]
	});

	StandardTooltips.push({
		classname: "defeat_blazhan",
		name: "Defeat Blazhan",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Derrote Rochama"
			},

			{
				language: Language.German,
				name_override: "Besiegen Sie Blazhan"
			},

			{
				language: Language.Russian,
				name_override: "Одолейте Жарошана"
			},

			{
				language: Language.SChinese,
				name_override: "击败熔山山"
			},

		]
	});

	StandardTooltips.push({
		classname: "defeat_frozhan",
		name: "Defeat Frozhan",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Derrote Rogelo"
			},

			{
				language: Language.German,
				name_override: "Besiegen Sie Frozhan"
			},

			{
				language: Language.Russian,
				name_override: "Одолейте Ледошана"
			},

			{
				language: Language.SChinese,
				name_override: "击败寒山山"
			},

		]
	});

	StandardTooltips.push({
		classname: "defeat_portly",
		name: "Defeat Portly",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Besiegen Sie Portly"
			},

			{
				language: Language.Russian,
				name_override: "Одолейте Обжорку"
			},

			{
				language: Language.SChinese,
				name_override: "击败珀特里！"
			},

		]
	});

	StandardTooltips.push({
		classname: "hint_ride_morty",
		name: "{s:keybind} or {s:alternate_keybind} to Saddle Up!",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "{s:keybind} ou {s:alternate_keybind} para montar!"
			},

			{
				language: Language.German,
				name_override: "{s:keybind} oder {s:alternate_keybind}, um aufzusteigen!"
			},

			{
				language: Language.Russian,
				name_override: "Нажмите {s:keybind} или {s:alternate_keybind}, чтобы оседлать!"
			},

			{
				language: Language.SChinese,
				name_override: "按{s:keybind}键或{s:alternate_keybind}键骑乘！"
			},

		]
	});

	StandardTooltips.push({
		classname: "hint_hop_with_morty",
		name: "Aim your lizard, then press {s:keybind} to gain power, and again to jump!",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Aponte o lagarto, aperte {s:keybind} uma vez para acumular energia e outra vez para pular!"
			},

			{
				language: Language.German,
				name_override: "Zielen Sie mit Ihrer Echse, drücken Sie {s:keybind} zum Kraft sammeln und dann erneut zum Springen!"
			},

			{
				language: Language.Russian,
				name_override: "Прицельтесь ящером, нажмите {s:keybind}, чтобы набрать силу, и нажмите ещё раз, чтобы прыгнуть!"
			},

			{
				language: Language.SChinese,
				name_override: "瞄准你的蜥蜴，再按下{s:keybind}键获得力量，然后跳跃！"
			},

		]
	});

	StandardTooltips.push({
		classname: "hint_ride_penguin",
		name: "{s:keybind} or {s:alternate_keybind} to Saddle Up!",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "{s:keybind} ou {s:alternate_keybind} para montar!"
			},

			{
				language: Language.German,
				name_override: "{s:keybind} oder {s:alternate_keybind}, um aufzusteigen!"
			},

			{
				language: Language.Russian,
				name_override: "Нажмите {s:keybind} или {s:alternate_keybind}, чтобы оседлать!"
			},

			{
				language: Language.SChinese,
				name_override: "按{s:keybind}键或{s:alternate_keybind}键骑乘！"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_brewmaster_boss",
		name: "Panda Bear Guy",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Mestre Panda"
			},

			{
				language: Language.German,
				name_override: "Pandabär"
			},

			{
				language: Language.Russian,
				name_override: "Медвежья панда"
			},

			{
				language: Language.SChinese,
				name_override: "熊猫大兄弟"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_brewmaster_earth_unit",
		name: "Earth Third",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Terço de Terra"
			},

			{
				language: Language.German,
				name_override: "Erddrittel"
			},

			{
				language: Language.Russian,
				name_override: "Земляная треть"
			},

			{
				language: Language.SChinese,
				name_override: "大地老三"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_brewmaster_storm_unit",
		name: "Storm Third",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Terço de Tempestade"
			},

			{
				language: Language.German,
				name_override: "Sturmdrittel"
			},

			{
				language: Language.Russian,
				name_override: "Штормовая треть"
			},

			{
				language: Language.SChinese,
				name_override: "风暴老三"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_brewmaster_fire_unit",
		name: "Ember Third",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Terço de Chamas"
			},

			{
				language: Language.German,
				name_override: "Glutdrittel"
			},

			{
				language: Language.Russian,
				name_override: "Огненная треть"
			},

			{
				language: Language.SChinese,
				name_override: "灰烬老三"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_dire_hound",
		name: "Dire Hound Cub",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Lobinho Infernal"
			},

			{
				language: Language.German,
				name_override: "Schreckenshund-Welpe"
			},

			{
				language: Language.Russian,
				name_override: "Щенок тёмной гончей"
			},

			{
				language: Language.SChinese,
				name_override: "夜魇幼犬"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_dire_hound_boss",
		name: "Dire Hound",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Lobo Infernal"
			},

			{
				language: Language.German,
				name_override: "Schreckenshund"
			},

			{
				language: Language.Russian,
				name_override: "Тёмная гончая"
			},

			{
				language: Language.SChinese,
				name_override: "夜魇猎犬"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_huskar",
		name: "Nothl Warrior",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Guerreiro de Nothl"
			},

			{
				language: Language.German,
				name_override: "Nothlkrieger"
			},

			{
				language: Language.Russian,
				name_override: "Воин Нотла"
			},

			{
				language: Language.SChinese,
				name_override: "虚无战士"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_ogre_tank",
		name: "Bonemeal Tank",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Tanque dos Ossos"
			},

			{
				language: Language.German,
				name_override: "Knochenmehlpanzer"
			},

			{
				language: Language.Russian,
				name_override: "Гигант-костогрыз"
			},

			{
				language: Language.SChinese,
				name_override: "骨末肉盾"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_ogre_magi",
		name: "Bonemeal Mage",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Ogro dos Ossos"
			},

			{
				language: Language.German,
				name_override: "Knochenmehlmagier"
			},

			{
				language: Language.Russian,
				name_override: "Маг-костогрыз"
			},

			{
				language: Language.SChinese,
				name_override: "骨末法师"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_baby_ogre_tank",
		name: "Baby Bonemeal Tank",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Tanquinho dos Ossos"
			},

			{
				language: Language.German,
				name_override: "Baby-Knochenmehlpanzer"
			},

			{
				language: Language.Russian,
				name_override: "Малый гигант-костогрыз"
			},

			{
				language: Language.SChinese,
				name_override: "骨末肉盾宝宝"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_baby_ogre_magi",
		name: "Baby Bonemeal Mage",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Maguinho dos Ossos"
			},

			{
				language: Language.German,
				name_override: "Baby-Knochenmehlmagier"
			},

			{
				language: Language.Russian,
				name_override: "Малый маг-костогрыз"
			},

			{
				language: Language.SChinese,
				name_override: "骨末法师宝宝"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_small_hellbear",
		name: "Woodland Hellbear",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Urso Infernal Florestal"
			},

			{
				language: Language.German,
				name_override: "Waldhöllenbär"
			},

			{
				language: Language.Russian,
				name_override: "Лесной медведемон"
			},

			{
				language: Language.SChinese,
				name_override: "林地地狱熊怪"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_hellbear",
		name: "Hellbear Warrior",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Urso Infernal Guerreiro"
			},

			{
				language: Language.German,
				name_override: "Höllenbär-Krieger"
			},

			{
				language: Language.Russian,
				name_override: "Медведемон-воин"
			},

			{
				language: Language.SChinese,
				name_override: "地狱熊怪战士"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_pinecone_champion",
		name: "Pinecone Champ",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kiefernchampion"
			},

			{
				language: Language.Russian,
				name_override: "Шишечный предводитель"
			},

			{
				language: Language.SChinese,
				name_override: "松果卫士"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_pinecone_warrior",
		name: "Pinecone Warrior",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kiefernkrieger"
			},

			{
				language: Language.Russian,
				name_override: "Шишечный воин"
			},

			{
				language: Language.SChinese,
				name_override: "松果战士"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_small_ogre_seal",
		name: "Baby Ogre Seal",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Ogerrobbenjunges"
			},

			{
				language: Language.Russian,
				name_override: "Моржогр-малыш"
			},

			{
				language: Language.SChinese,
				name_override: "食人魔海豹宝宝"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_large_ogre_seal",
		name: "Grumpy Ogre Seal",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Grummlige Ogerrobbe"
			},

			{
				language: Language.Russian,
				name_override: "Угрюмый моржогр"
			},

			{
				language: Language.SChinese,
				name_override: "暴躁食人魔海豹"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_wandering_ogre_seal",
		name: "Wandering Ogre Seal",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Wandernde Ogerrobbe"
			},

			{
				language: Language.Russian,
				name_override: "Моржогр-шатун"
			},

			{
				language: Language.SChinese,
				name_override: "徜徉食人魔海豹"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_dazzle",
		name: "Acolyte of Dezun",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Gehilfe von Dezun"
			},

			{
				language: Language.Russian,
				name_override: "Пастырь Дезуна"
			},

			{
				language: Language.SChinese,
				name_override: "德尊侍僧"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_wildwing_laborer",
		name: "Tamed Wildwing",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Gebändigte Wildschwinge"
			},

			{
				language: Language.Russian,
				name_override: "Домашний дикокрыл"
			},

			{
				language: Language.SChinese,
				name_override: "温顺枭兽"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_tusk_skeleton",
		name: "Odobenus Footman",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Walrosslakai"
			},

			{
				language: Language.Russian,
				name_override: "Морж-пехотинец"
			},

			{
				language: Language.SChinese,
				name_override: "海象步兵"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_spectral_tusk_mage",
		name: "Odobenus Frost Mage",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Walross-Frostmagier"
			},

			{
				language: Language.Russian,
				name_override: "Морж-колдун"
			},

			{
				language: Language.SChinese,
				name_override: "海象冰霜法师"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_holdout_tower",
		name: "Watchtower",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Wachturm"
			},

			{
				language: Language.Russian,
				name_override: "Сторожевая башня"
			},

			{
				language: Language.SChinese,
				name_override: "瞭望塔"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_undead_tusk_tombstone",
		name: "Odobenus Tombstone",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Walrossgrabstein"
			},

			{
				language: Language.Russian,
				name_override: "Моржовое надгробие"
			},

			{
				language: Language.SChinese,
				name_override: "海象墓碑"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_friendly_baby_ogre_tank",
		name: "Blug",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Blug"
			},

			{
				language: Language.Russian,
				name_override: "Благ"
			},

			{
				language: Language.SChinese,
				name_override: "布拉格"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_friendly_ogre_seal",
		name: "Gary",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Gary"
			},

			{
				language: Language.Russian,
				name_override: "Гэри"
			},

			{
				language: Language.SChinese,
				name_override: "盖瑞"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_sand_king",
		name: "Rhyzik",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Rhyzik"
			},

			{
				language: Language.Russian,
				name_override: "Ражиг"
			},

			{
				language: Language.SChinese,
				name_override: "莱兹克"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_sand_king_sandstorm",
		name: "Rhyzik's Sandstorm",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Rhyziks Sandsturm"
			},

			{
				language: Language.Russian,
				name_override: "Песчаная буря Ражига"
			},

			{
				language: Language.SChinese,
				name_override: "莱兹克的沙尘暴"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_big_exploding_burrower",
		name: "King Sandswarm Burster",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Königlicher Sandschwarmberster"
			},

			{
				language: Language.Russian,
				name_override: "Королевский громожук"
			},

			{
				language: Language.SChinese,
				name_override: "砂虫爆破王"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_healing_burrower",
		name: "Sandswarm Sacrifice",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Sandschwarmpriester"
			},

			{
				language: Language.Russian,
				name_override: "Песчаный прислужник"
			},

			{
				language: Language.SChinese,
				name_override: "砂虫祭品"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_storegga",
		name: "Storegga",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Storegga"
			},

			{
				language: Language.Russian,
				name_override: "Стурегга"
			},

			{
				language: Language.SChinese,
				name_override: "石托瑞嘉"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_small_storegga",
		name: "Pebble",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kiesel"
			},

			{
				language: Language.Russian,
				name_override: "Булыжник"
			},

			{
				language: Language.SChinese,
				name_override: "小石头"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_temple_guardian",
		name: "Temple Guardian",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Tempelwächter"
			},

			{
				language: Language.Russian,
				name_override: "Защитник храма"
			},

			{
				language: Language.SChinese,
				name_override: "神庙守卫"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_morphling_big",
		name: "Riptide Elemental",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Sturmflutelementar"
			},

			{
				language: Language.Russian,
				name_override: "Элементаль течения"
			},

			{
				language: Language.SChinese,
				name_override: "激流元素人"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_tiny_crab",
		name: "Little Pincher",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kleiner Kneifer"
			},

			{
				language: Language.Russian,
				name_override: "Крошка-щипач"
			},

			{
				language: Language.SChinese,
				name_override: "小钳蟹"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_warlock",
		name: "Demon Charmer",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Dämonenbezwinger"
			},

			{
				language: Language.Russian,
				name_override: "Заклинатель демонов"
			},

			{
				language: Language.SChinese,
				name_override: "恶魔术师"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_grimstroke",
		name: "Misunderstood Artist",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Verkannter Künstler"
			},

			{
				language: Language.Russian,
				name_override: "Непризнанный художник"
			},

			{
				language: Language.SChinese,
				name_override: "不被理解的画家"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_life_stealer",
		name: "Toothy Toothums",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Zahnfletscher"
			},

			{
				language: Language.Russian,
				name_override: "Зубастый зубач"
			},

			{
				language: Language.SChinese,
				name_override: "尖牙怪"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_gauntlet_skeleton",
		name: "Icebone Skeleton",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Eisbeinskelett"
			},

			{
				language: Language.Russian,
				name_override: "Ледяной скелет"
			},

			{
				language: Language.SChinese,
				name_override: "冰骨骷髅"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_demon_golem",
		name: "Enthralled Golem",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Verhexter Golem"
			},

			{
				language: Language.Russian,
				name_override: "Голем-невольник"
			},

			{
				language: Language.SChinese,
				name_override: "迷醉傀儡"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_bomber",
		name: "Bomber",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Bomber"
			},

			{
				language: Language.Russian,
				name_override: "Подрывник"
			},

			{
				language: Language.SChinese,
				name_override: "投弹手"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_gyrocopter",
		name: "Audacious Aeronaut",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Tollkühner Flieger"
			},

			{
				language: Language.Russian,
				name_override: "Дерзкий аэронавт"
			},

			{
				language: Language.SChinese,
				name_override: "无畏飞行员"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_gyrocopter_homing_missile",
		name: "Homing Missile",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Zielsuchende Rakete"
			},

			{
				language: Language.Russian,
				name_override: "Самонаводящаяся ракета"
			},

			{
				language: Language.SChinese,
				name_override: "追踪导弹"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_zealot_scarab",
		name: "Scarab Zealot",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Skarabäus-Fanatiker"
			},

			{
				language: Language.Russian,
				name_override: "Скарабей-фанатик"
			},

			{
				language: Language.SChinese,
				name_override: "圣甲虫狂热者"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_zealot_mound",
		name: "Burrowed Unit",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Eingegrabene Einheit"
			},

			{
				language: Language.Russian,
				name_override: "Закопавшееся существо"
			},

			{
				language: Language.SChinese,
				name_override: "钻地单位"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_scarab_priest",
		name: "Scarab Priest",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Skarabäus-Priester"
			},

			{
				language: Language.Russian,
				name_override: "Скарабей-священник"
			},

			{
				language: Language.SChinese,
				name_override: "圣甲虫牧师"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_rock_golem_a",
		name: "Giant Rock Golem",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Golem de Pedra Gigante"
			},

			{
				language: Language.German,
				name_override: "Riesiger Steingolem"
			},

			{
				language: Language.Russian,
				name_override: "Гигантский каменный голем"
			},

			{
				language: Language.SChinese,
				name_override: "巨大岩石傀儡"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_rock_golem_b",
		name: "Rock Golem",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Steingolem"
			},

			{
				language: Language.Russian,
				name_override: "Каменный голем"
			},

			{
				language: Language.SChinese,
				name_override: "岩石傀儡"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_rock_golem_c",
		name: "Rock Golem Fragment",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Steingolem-Fragment"
			},

			{
				language: Language.Russian,
				name_override: "Осколок каменного голема"
			},

			{
				language: Language.SChinese,
				name_override: "岩石傀儡碎片"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_luna_mini",
		name: "Tiny Moon Rider",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kleine Mondreiterin"
			},

			{
				language: Language.Russian,
				name_override: "Маленькая наездница"
			},

			{
				language: Language.SChinese,
				name_override: "小暗月骑士"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_mirana",
		name: "Nightsilver Prowler",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Herumtreiber des Nachtsilbers"
			},

			{
				language: Language.Russian,
				name_override: "Лесная хищница"
			},

			{
				language: Language.SChinese,
				name_override: "银夜潜行者"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_alchemist",
		name: "Al, the chemist",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Al der Chemiker"
			},

			{
				language: Language.Russian,
				name_override: "Химик Ал"
			},

			{
				language: Language.SChinese,
				name_override: "术士，炼金"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_broodmother",
		name: "Silkmire Spitter",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Seidenmorast-Spucker"
			},

			{
				language: Language.Russian,
				name_override: "Паутинный плевун"
			},

			{
				language: Language.SChinese,
				name_override: "沼泞毒蛛"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_huge_broodmother",
		name: "Monstrous Glutton",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Monströser Vielfraß"
			},

			{
				language: Language.Russian,
				name_override: "Исполинская обжора"
			},

			{
				language: Language.SChinese,
				name_override: "庞然饕餮"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_newborn_spider",
		name: "Silkmire Swarmer",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Seidenmorast-Schwärmer"
			},

			{
				language: Language.Russian,
				name_override: "Паутинный малыш"
			},

			{
				language: Language.SChinese,
				name_override: "沼泞群蛛"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_broodmother_baby",
		name: "Tiny Spiderling",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Miniaranhinha"
			},

			{
				language: Language.German,
				name_override: "Winziger Spinnling"
			},

			{
				language: Language.Russian,
				name_override: "Крошка-паучок"
			},

			{
				language: Language.SChinese,
				name_override: "微型蜘蛛"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_broodmother_baby_b",
		name: "Small Spiderling",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kleiner Spinnling"
			},

			{
				language: Language.Russian,
				name_override: "Малыш-паучок"
			},

			{
				language: Language.SChinese,
				name_override: "小小蜘蛛"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_broodmother_baby_c",
		name: "Spiderling",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Spinnling"
			},

			{
				language: Language.Russian,
				name_override: "Паучок"
			},

			{
				language: Language.SChinese,
				name_override: "小蜘蛛"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_broodmother_baby_d",
		name: "Furry Spiderling",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Aranhinha Peluda"
			},

			{
				language: Language.German,
				name_override: "Pelziger Spinnling"
			},

			{
				language: Language.Russian,
				name_override: "Мохнатый паучок"
			},

			{
				language: Language.SChinese,
				name_override: "毛毛小蜘蛛"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_kidnap_spider",
		name: "Silkmire Marauder",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Seidenmorast-Plünderer"
			},

			{
				language: Language.Russian,
				name_override: "Паутинный мародёр"
			},

			{
				language: Language.SChinese,
				name_override: "沼泞猛蛛"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_lina",
		name: "Inflamed Sorceress",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Brennende Zauberin"
			},

			{
				language: Language.Russian,
				name_override: "Распалённая чародейка"
			},

			{
				language: Language.SChinese,
				name_override: "燃烧女巫师"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_puck",
		name: "Reverie",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Reverie"
			},

			{
				language: Language.Russian,
				name_override: "Грёза"
			},

			{
				language: Language.SChinese,
				name_override: "幻梦"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_wolf",
		name: "Red Wolf",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Roter Wolf"
			},

			{
				language: Language.Russian,
				name_override: "Рыжий волк"
			},

			{
				language: Language.SChinese,
				name_override: "红狼"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_large_elder_titan",
		name: "World Ender",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Weltenvernichter"
			},

			{
				language: Language.Russian,
				name_override: "Разрушитель миров"
			},

			{
				language: Language.SChinese,
				name_override: "世界终结者"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_spectre",
		name: "Soul Ascendant",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Ahnenseele"
			},

			{
				language: Language.Russian,
				name_override: "Верховная душа"
			},

			{
				language: Language.SChinese,
				name_override: "超然之魂"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_dragon_knight",
		name: "Frostbitten Lord",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Erfrorener Ritter"
			},

			{
				language: Language.Russian,
				name_override: "Промёрзлый владыка"
			},

			{
				language: Language.SChinese,
				name_override: "霜害领主"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_underlord",
		name: "Obsidian Devil",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Obsidianteufel"
			},

			{
				language: Language.Russian,
				name_override: "Обсидиановый бес"
			},

			{
				language: Language.SChinese,
				name_override: "黑曜恶魔"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_pudge_miniboss",
		name: "Portly",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Pudim"
			},

			{
				language: Language.German,
				name_override: "Portly"
			},

			{
				language: Language.Russian,
				name_override: "Обжорка"
			},

			{
				language: Language.SChinese,
				name_override: "珀特里"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_pudge_miniboss_minion",
		name: "Cadaver",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kadaver"
			},

			{
				language: Language.Russian,
				name_override: "Кадавр"
			},

			{
				language: Language.SChinese,
				name_override: "行尸"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_friendly_ogre_tank",
		name: "Grunch",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Grunch"
			},

			{
				language: Language.Russian,
				name_override: "Гранч"
			},

			{
				language: Language.SChinese,
				name_override: "格兰奇"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_aghsfort_morty",
		name: "Marty",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Marty"
			},

			{
				language: Language.Russian,
				name_override: "Марти"
			},

			{
				language: Language.SChinese,
				name_override: "马迪"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_sled_penguin",
		name: "Peng-wing",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Pinguin"
			},

			{
				language: Language.Russian,
				name_override: "Пингвикрыл"
			},

			{
				language: Language.SChinese,
				name_override: "鹅儿"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_bonus_chicken",
		name: "Golden Goose",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Goldene Gans"
			},

			{
				language: Language.Russian,
				name_override: "Золотой гусь"
			},

			{
				language: Language.SChinese,
				name_override: "金鹅"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_bonus_greevil",
		name: "Greedy Greevil",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Gieriger Gierling"
			},

			{
				language: Language.Russian,
				name_override: "Жадный грявол"
			},

			{
				language: Language.SChinese,
				name_override: "贪婪贪魔"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_breathe_fire_trap",
		name: "Breath of Rho",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Odem des Rho"
			},

			{
				language: Language.Russian,
				name_override: "Дыхание Ро"
			},

			{
				language: Language.SChinese,
				name_override: "炽烈吐息"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_arrow_trap",
		name: "Heartseeker",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Herzsucher"
			},

			{
				language: Language.Russian,
				name_override: "Сердцеискатель"
			},

			{
				language: Language.SChinese,
				name_override: "猎心装置"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_vase",
		name: "Antique Vase",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Antike Vase"
			},

			{
				language: Language.Russian,
				name_override: "Древний сосуд"
			},

			{
				language: Language.SChinese,
				name_override: "古董花瓶"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_crate",
		name: "Wooden Crate",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Holzkiste"
			},

			{
				language: Language.Russian,
				name_override: "Деревянный ящик"
			},

			{
				language: Language.SChinese,
				name_override: "木箱子"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_treasure_chest",
		name: "Treasure Chest",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schatzkiste"
			},

			{
				language: Language.Russian,
				name_override: "Сундук с сокровищами"
			},

			{
				language: Language.SChinese,
				name_override: "宝箱"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_explosive_barrel",
		name: "Explosive Barrel",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Barril Explosivo"
			},

			{
				language: Language.German,
				name_override: "Explosives Fass"
			},

			{
				language: Language.Russian,
				name_override: "Взрывная бочка"
			},

			{
				language: Language.SChinese,
				name_override: "易爆木桶"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_aghsfort_dark_portal",
		name: "Aghanim's Portal",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Aghanims Portal"
			},

			{
				language: Language.Russian,
				name_override: "Портал Аганима"
			},

			{
				language: Language.SChinese,
				name_override: "阿哈利姆的传送门"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_ice_roshan",
		name: "Frozhan",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Rogelo"
			},

			{
				language: Language.German,
				name_override: "Frozhan"
			},

			{
				language: Language.Russian,
				name_override: "Ледошан"
			},

			{
				language: Language.SChinese,
				name_override: "寒山山"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_fire_roshan",
		name: "Blazhan",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Rochama"
			},

			{
				language: Language.German,
				name_override: "Blazhan"
			},

			{
				language: Language.Russian,
				name_override: "Жарошан"
			},

			{
				language: Language.SChinese,
				name_override: "熔山山"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_baby_roshan",
		name: "Roshling",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Roshling"
			},

			{
				language: Language.Russian,
				name_override: "Рошанёнок"
			},

			{
				language: Language.SChinese,
				name_override: "小肉山"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_ogre_tank_boss",
		name: "Bogdugg",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Bogdugg"
			},

			{
				language: Language.Russian,
				name_override: "Богдагг"
			},

			{
				language: Language.SChinese,
				name_override: "波格达格"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_ogre_seer",
		name: "Bonemeal Seer",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Knochenmehlschamane"
			},

			{
				language: Language.Russian,
				name_override: "Пророк-костогрыз"
			},

			{
				language: Language.SChinese,
				name_override: "骨末先知"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_phoenix",
		name: "Fortunate Sun",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Glückliche Sonne"
			},

			{
				language: Language.Russian,
				name_override: "Светило удачливое"
			},

			{
				language: Language.SChinese,
				name_override: "幸运之阳"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_ember_spirit",
		name: "Flamebearer",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Flammenträger"
			},

			{
				language: Language.Russian,
				name_override: "Пламеносец"
			},

			{
				language: Language.SChinese,
				name_override: "焰手"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_bandit",
		name: "Sabaku Thief",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Sabaku-Dieb"
			},

			{
				language: Language.Russian,
				name_override: "Вор Сабаку"
			},

			{
				language: Language.SChinese,
				name_override: "荒漠盗贼"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_bandit_archer",
		name: "Sabaku Archer",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Sabaku-Bogenschütze"
			},

			{
				language: Language.Russian,
				name_override: "Лучник Сабаку"
			},

			{
				language: Language.SChinese,
				name_override: "荒漠射手"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_bandit_captain",
		name: "Sabaku Captain",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Sabaku-Anführer"
			},

			{
				language: Language.Russian,
				name_override: "Капитан Сабаку"
			},

			{
				language: Language.SChinese,
				name_override: "荒漠队长"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_pendulum_trap",
		name: "A Head Remover",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kopfentferner"
			},

			{
				language: Language.Russian,
				name_override: "Головорез"
			},

			{
				language: Language.SChinese,
				name_override: "斩首装置"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_wave_blaster",
		name: "Blaster Bat",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Windvampir"
			},

			{
				language: Language.Russian,
				name_override: "Взрывной летун"
			},

			{
				language: Language.SChinese,
				name_override: "爆破蝙蝠"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_aghsfort_creature_wave_blaster_ghost",
		name: "Ice Spirit",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Eisgeist"
			},

			{
				language: Language.Russian,
				name_override: "Ледяной дух"
			},

			{
				language: Language.SChinese,
				name_override: "寒冰幽灵"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_frost_kobold",
		name: "Frost Kobold",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Frostkobold"
			},

			{
				language: Language.Russian,
				name_override: "Морозный кобольд"
			},

			{
				language: Language.SChinese,
				name_override: "冰霜狗头人"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_lich",
		name: "Old Ice Lord",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Väterchen Frost"
			},

			{
				language: Language.Russian,
				name_override: "Старый ледяной владыка"
			},

			{
				language: Language.SChinese,
				name_override: "古老寒冰领主"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_dark_seer",
		name: "Corrupted Seer",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Verdorbener Seher"
			},

			{
				language: Language.Russian,
				name_override: "Искажённый провидец"
			},

			{
				language: Language.SChinese,
				name_override: "堕落贤者"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_undead_woods_skeleton_king",
		name: "King of the Bones",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "König der Knochen"
			},

			{
				language: Language.Russian,
				name_override: "Король костей"
			},

			{
				language: Language.SChinese,
				name_override: "白骨之王"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_upheaval_urn",
		name: "Urn of the Damned",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Urne der Verdammten"
			},

			{
				language: Language.Russian,
				name_override: "Урна проклятых"
			},

			{
				language: Language.SChinese,
				name_override: "邪恶之瓮"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_shadow_demon",
		name: "Demonic Banisher",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Dämonischer Verbanner"
			},

			{
				language: Language.Russian,
				name_override: "Изгоняющий демон"
			},

			{
				language: Language.SChinese,
				name_override: "恶魔驱逐者"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_doom",
		name: "Demon Brute",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Dämonenbiest"
			},

			{
				language: Language.Russian,
				name_override: "Демон-громила"
			},

			{
				language: Language.SChinese,
				name_override: "恶魔暴徒"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_necro_warrior",
		name: "Infernal Lickspittle",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Teuflischer Speichellecker"
			},

			{
				language: Language.Russian,
				name_override: "Инфернальный подхалим"
			},

			{
				language: Language.SChinese,
				name_override: "地狱奉承者"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_drow_ranger_miniboss",
		name: "Deadeye",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Meisterschützin"
			},

			{
				language: Language.Russian,
				name_override: "Меткий глаз"
			},

			{
				language: Language.SChinese,
				name_override: "神射手"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_drow_ranger_skeleton_archer",
		name: "Skeleton Archer",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Skelettbogenschütze"
			},

			{
				language: Language.Russian,
				name_override: "Скелет-лучник"
			},

			{
				language: Language.SChinese,
				name_override: "骷髅弓兵"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_drow_ranger_skeleton_warrior",
		name: "Skeleton Warrior",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Skelettkrieger"
			},

			{
				language: Language.Russian,
				name_override: "Скелет-воин"
			},

			{
				language: Language.SChinese,
				name_override: "骷髅战士"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_beastmaster_boss",
		name: "Fur Trader",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Pelzhändler"
			},

			{
				language: Language.Russian,
				name_override: "Торговец мехом"
			},

			{
				language: Language.SChinese,
				name_override: "毛皮商人"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_beastmaster_boar",
		name: "Fur Contributor",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Pelzspender"
			},

			{
				language: Language.Russian,
				name_override: "Ценный мех"
			},

			{
				language: Language.SChinese,
				name_override: "毛皮贡献者"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_troll_warlord_melee",
		name: "Trading Post Brute",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Handelspostenschläger"
			},

			{
				language: Language.Russian,
				name_override: "Торговец-громила"
			},

			{
				language: Language.SChinese,
				name_override: "交易站暴徒"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_troll_warlord_ranged",
		name: "Trading Post Brute",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Handelspostenschläger"
			},

			{
				language: Language.Russian,
				name_override: "Торговец-громила"
			},

			{
				language: Language.SChinese,
				name_override: "交易站暴徒"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_cage",
		name: "Animal Cage",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Tierkäfig"
			},

			{
				language: Language.Russian,
				name_override: "Звериная клетка"
			},

			{
				language: Language.SChinese,
				name_override: "动物牢笼"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_sheep_hostage",
		name: "Sheep",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schaf"
			},

			{
				language: Language.Russian,
				name_override: "Овца"
			},

			{
				language: Language.SChinese,
				name_override: "绵羊"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_gladiator_creep",
		name: "Amateur",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Amateur"
			},

			{
				language: Language.Russian,
				name_override: "Любитель"
			},

			{
				language: Language.SChinese,
				name_override: "业余"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_skywrath_mage",
		name: "Rookie",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Neuling"
			},

			{
				language: Language.Russian,
				name_override: "Желторотик"
			},

			{
				language: Language.SChinese,
				name_override: "菜鸟"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_legion_commander",
		name: "All Star",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Champion"
			},

			{
				language: Language.Russian,
				name_override: "Звезда дуэлей"
			},

			{
				language: Language.SChinese,
				name_override: "全明星"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_shadow_shaman",
		name: "Bog Shackler",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Sumpfschamane"
			},

			{
				language: Language.Russian,
				name_override: "Болотный путальщик"
			},

			{
				language: Language.SChinese,
				name_override: "沼泽枷锁恶徒"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_shroomling",
		name: "Sleepy Shroom",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schläfriger Pilz"
			},

			{
				language: Language.Russian,
				name_override: "Грибной соня"
			},

			{
				language: Language.SChinese,
				name_override: "昏睡蘑菇"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_shroom_giant",
		name: "Shroom Giant",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Pilzriese"
			},

			{
				language: Language.Russian,
				name_override: "Грибной гигант"
			},

			{
				language: Language.SChinese,
				name_override: "蘑菇巨人"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_slark_peon",
		name: "Slippery Slark",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schlüpfriger Slark"
			},

			{
				language: Language.Russian,
				name_override: "Скользкий Сларк"
			},

			{
				language: Language.SChinese,
				name_override: "滑腻斯拉克"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_naga_siren_boss",
		name: "Headliner",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Hauptgruppe"
			},

			{
				language: Language.Russian,
				name_override: "Главная певица"
			},

			{
				language: Language.SChinese,
				name_override: "头号人物"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_naga_siren_illusion",
		name: "Opening Act",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Erster Akt"
			},

			{
				language: Language.Russian,
				name_override: "Певица на разогреве"
			},

			{
				language: Language.SChinese,
				name_override: "序幕"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_underwater_mine",
		name: "Bobbin' for Apples",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Malorkianische Minen"
			},

			{
				language: Language.Russian,
				name_override: "Морское яблочко"
			},

			{
				language: Language.SChinese,
				name_override: "咬苹果"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_elemental_tiny",
		name: "Elemental Tiny",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Elementarkleiner"
			},

			{
				language: Language.Russian,
				name_override: "Элементаль-кроха"
			},

			{
				language: Language.SChinese,
				name_override: "元素小小"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_elemental_io",
		name: "Elemental Wisp",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Elementarirrwisch"
			},

			{
				language: Language.Russian,
				name_override: "Элементьаль-искра"
			},

			{
				language: Language.SChinese,
				name_override: "元素精灵"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_assault_bad_melee_creep",
		name: "Assault Melee Creep",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Sturmnahkämpfer"
			},

			{
				language: Language.Russian,
				name_override: "Штурмовой крип-мечник"
			},

			{
				language: Language.SChinese,
				name_override: "攻城近战兵"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_assault_bad_ranged_creep",
		name: "Assault Ranged Creep",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Sturmfernkämpfer"
			},

			{
				language: Language.Russian,
				name_override: "Штурмовой крип-маг"
			},

			{
				language: Language.SChinese,
				name_override: "攻城远程兵"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_catapult",
		name: "Assault Catapult",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Sturmschleuder"
			},

			{
				language: Language.Russian,
				name_override: "Штурмовая катапульта"
			},

			{
				language: Language.SChinese,
				name_override: "攻城投石车"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_aghsfort_creature_dire_assault_captain",
		name: "Assault Captain",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Sturmkapitän"
			},

			{
				language: Language.Russian,
				name_override: "Штурмовой капитан"
			},

			{
				language: Language.SChinese,
				name_override: "攻城队长"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_tidehunter_mini",
		name: "Beach Comber",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Strandbarsch"
			},

			{
				language: Language.Russian,
				name_override: "Пляжный волнолов"
			},

			{
				language: Language.SChinese,
				name_override: "海滩碎浪"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_tidehunter_medium",
		name: "Turtle Patrol",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schildkrötentrupp"
			},

			{
				language: Language.Russian,
				name_override: "Черепаший патруль"
			},

			{
				language: Language.SChinese,
				name_override: "海龟巡逻"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_tidehunter_large",
		name: "Ocean Guide",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Meeresbiologe"
			},

			{
				language: Language.Russian,
				name_override: "Морской гид"
			},

			{
				language: Language.SChinese,
				name_override: "海洋向导"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_kunkka_medium",
		name: "Conservationist",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Naturschützer"
			},

			{
				language: Language.Russian,
				name_override: "Консерватор"
			},

			{
				language: Language.SChinese,
				name_override: "能量掌握者"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_shop_keeper",
		name: "Traveling Merchant",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Reisender Händler"
			},

			{
				language: Language.Russian,
				name_override: "Бродячий торговец"
			},

			{
				language: Language.SChinese,
				name_override: "旅行商人"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_boss_aghanim",
		name: "Aghanim, the Apex Mage",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Aghanim, o Mago Apogético"
			},

			{
				language: Language.German,
				name_override: "Aghanim, der oberste Magier"
			},

			{
				language: Language.Russian,
				name_override: "Аганим, Высший маг"
			},

			{
				language: Language.SChinese,
				name_override: "巅峰法师阿哈利姆"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_aghanim_minion",
		name: "Shard Golem",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Splittergolem"
			},

			{
				language: Language.Russian,
				name_override: "Осколок-голем"
			},

			{
				language: Language.SChinese,
				name_override: "碎土傀儡"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_boss_aghanim_crystal",
		name: "Spell Shard",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Zaubersplitter"
			},

			{
				language: Language.Russian,
				name_override: "Осколок заклинания"
			},

			{
				language: Language.SChinese,
				name_override: "法术碎晶"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_story_crystal",
		name: "Aghanim's Mind Siphon",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Aghanims Gedankenfänger"
			},

			{
				language: Language.Russian,
				name_override: "Сжигатель разума Аганима"
			},

			{
				language: Language.SChinese,
				name_override: "阿哈利姆的心智虹吸"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_dummy_caster",
		name: "Aghanim's Assistant, Henry",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Henry, Aghanims Assistent"
			},

			{
				language: Language.Russian,
				name_override: "Ассистент Аганима, Генри"
			},

			{
				language: Language.SChinese,
				name_override: "阿哈利姆的助手亨利"
			},

		]
	});

	StandardTooltips.push({
		classname: "aghsfort_ursa_minor",
		name: "Ursa Minor",
		language_overrides:
		[
			{
				language: Language.Russian,
				name_override: "Малый медведь"
			},

			{
				language: Language.SChinese,
				name_override: "小熊战士"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_aghsfort_creature_bomb_squad",
		name: "Bomb Squad",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Bombentruppe"
			},

			{
				language: Language.Russian,
				name_override: "Взрывной отряд"
			},

			{
				language: Language.SChinese,
				name_override: "炸弹小队"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_aghsfort_creature_bomb_squad_landmine",
		name: "Bomb Squad Bomb",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Bombentruppenbombe"
			},

			{
				language: Language.Russian,
				name_override: "Бомба взрывного отряда"
			},

			{
				language: Language.SChinese,
				name_override: "炸弹小队炸弹"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_aghsfort_creature_bomb_squad_stasis_trap",
		name: "Bomb Squad Stasis Bomb",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Bombentruppenstasisbombe"
			},

			{
				language: Language.Russian,
				name_override: "Стазис-бомба взрывного отряда"
			},

			{
				language: Language.SChinese,
				name_override: "炸弹小队静滞炸弹"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_aghsfort_creature_enraged_wildwing",
		name: "Angry Bird",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Wütender Vogel"
			},

			{
				language: Language.Russian,
				name_override: "Злобная пташка"
			},

			{
				language: Language.SChinese,
				name_override: "愤怒的小鸟"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_aghsfort_creature_tornado_harpy",
		name: "Tornado Harpy",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Tornadoharpyie"
			},

			{
				language: Language.Russian,
				name_override: "Торнадо-гарпия"
			},

			{
				language: Language.SChinese,
				name_override: "飓风鹰身女妖"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_aghsfort_creature_walrus_pudge",
		name: "Walrus Pudge",
		language_overrides:
		[
			{
				language: Language.Russian,
				name_override: "Морж-мясник"
			},

			{
				language: Language.SChinese,
				name_override: "海象帕吉"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_boss_timbersaw",
		name: "Rizzrick",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Rizzrick"
			},

			{
				language: Language.German,
				name_override: "Rizzrick"
			},

			{
				language: Language.Russian,
				name_override: "Риззрик"
			},

			{
				language: Language.SChinese,
				name_override: "瑞兹瑞克"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_creature_timbersaw_treant",
		name: "Little Ent",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kleiner Ent"
			},

			{
				language: Language.Russian,
				name_override: "Маленький энт"
			},

			{
				language: Language.SChinese,
				name_override: "小恩特"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_boss_void_spirit",
		name: "Shadow of Inai",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schatten von Inai"
			},

			{
				language: Language.Russian,
				name_override: "Тень Иная"
			},

			{
				language: Language.SChinese,
				name_override: "无玄的影子"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_earth_spirit_statue",
		name: "Kaolin Soccer Statue",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kaolin-Fußballstatue"
			},

			{
				language: Language.Russian,
				name_override: "Статуя каолиньского футбола"
			},

			{
				language: Language.SChinese,
				name_override: "考林的足球雕塑"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_earth_spirit_boss",
		name: "Kaolin Guardian",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kaolin-Wächter"
			},

			{
				language: Language.Russian,
				name_override: "Каолиньский защитник"
			},

			{
				language: Language.SChinese,
				name_override: "考林卫士"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_boss_visage",
		name: "Warden of the Narrow Maze",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Wächter des Verschlungenen Labyrinths"
			},

			{
				language: Language.Russian,
				name_override: "Страж Узкого лабиринта"
			},

			{
				language: Language.SChinese,
				name_override: "狭窄迷宫的守望者"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_boss_visage_familiar",
		name: "Lost Revenant",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Verlorenes Gespenst"
			},

			{
				language: Language.Russian,
				name_override: "Потерянный призрак"
			},

			{
				language: Language.SChinese,
				name_override: "迷失幽魂"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_boss_visage_familiar_state",
		name: "Maze Watcher",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Aufseher des Labyrinths"
			},

			{
				language: Language.Russian,
				name_override: "Дозорный лабиринта"
			},

			{
				language: Language.SChinese,
				name_override: "迷宫观察者"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_aghsfort_watch_tower_option_1",
		name: "Exit Selector",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Pfadauswahl"
			},

			{
				language: Language.Russian,
				name_override: "Выбор выхода"
			},

			{
				language: Language.SChinese,
				name_override: "出口选择"
			},

		]
	});

	StandardTooltips.push({
		classname: "npc_dota_aghsfort_watch_tower_option_2",
		name: "Exit Selector",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Pfadauswahl"
			},

			{
				language: Language.Russian,
				name_override: "Выбор выхода"
			},

			{
				language: Language.SChinese,
				name_override: "出口选择"
			},

		]
	});

	StandardTooltips.push({
		classname: "DOTA_Chat_Tombstone_Pinged",
		name: "Fallen teammate here.",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Aliado falecido aqui!"
			},

			{
				language: Language.German,
				name_override: "Gefallenes Teammitglied hier."
			},

			{
				language: Language.Russian,
				name_override: "Здесь павший союзник."
			},

			{
				language: Language.SChinese,
				name_override: "有队友在这里阵亡了。"
			},

		]
	});

	StandardTooltips.push({
		classname: "Aghanim_FoundChestItem",
		name: "{s:player_name} found a treasure containing: {s:locstring_value}",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "{s:player_name} hat einen Schatz gefunden: {s:locstring_value}"
			},

			{
				language: Language.Russian,
				name_override: "{s:player_name} находит в сундуке: {s:locstring_value}"
			},

			{
				language: Language.SChinese,
				name_override: "{s:player_name}找到了一个宝藏，内有：{s:locstring_value}"
			},

		]
	});

	StandardTooltips.push({
		classname: "Aghanim_FoundChestGold",
		name: "{s:player_name} found a treasure containing: <font color='#ffd825'>{s:value}</font><panel class='CombatEventGoldIcon'/>",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "{s:player_name} hat einen Schatz gefunden: <font color='#ffd825'>{s:value}</font><panel class='CombatEventGoldIcon'/>"
			},

			{
				language: Language.Russian,
				name_override: "{s:player_name} находит в сундуке: <font color='#ffd825'>{s:value}</font><panel class='CombatEventGoldIcon'/>"
			},

			{
				language: Language.SChinese,
				name_override: "{s:player_name}找到了一个宝藏，内有：<font color='#ffd825'>{s:value}</font><panel class='CombatEventGoldIcon'/>"
			},

		]
	});

	StandardTooltips.push({
		classname: "Aghanim_FoundChestTrap",
		name: "{s:player_name} found a treasure containing: <font color='#ffd825'>{s:locstring_value}</font>!",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "{s:player_name} hat einen Schatz gefunden: <font color='#ffd825'>{s:locstring_value}</font>!"
			},

			{
				language: Language.Russian,
				name_override: "{s:player_name} находит в сундуке: <font color='#ffd825'>{s:locstring_value}</font>!"
			},

			{
				language: Language.SChinese,
				name_override: "{s:player_name}找到了一个宝藏，内有：<font color='#ffd825'>{s:locstring_value}</font>!"
			},

		]
	});

	StandardTooltips.push({
		classname: "Aghanim_FoundLifeRune",
		name: "{s:player_name} found a {s:locstring_value}!",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "{s:player_name} hat eine {s:locstring_value} gefunden!"
			},

			{
				language: Language.Russian,
				name_override: "{s:player_name} находит {s:locstring_value}!"
			},

			{
				language: Language.SChinese,
				name_override: "{s:player_name}找到了{s:locstring_value}!"
			},

		]
	});

	StandardTooltips.push({
		classname: "Aghanim_FoundItem",
		name: "{s:player_name} found a new item: <font color='#4ae0bf'>{s:locstring_value}</font>!",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "{s:player_name} hat einen neuen Gegenstand gefunden: <font color='#4ae0bf'>{s:locstring_value}</font>!"
			},

			{
				language: Language.Russian,
				name_override: "{s:player_name} находит новый предмет: <font color='#4ae0bf'>{s:locstring_value}</font>!"
			},

			{
				language: Language.SChinese,
				name_override: "{s:player_name}找到了新物品：<font color='#4ae0bf'>{s:locstring_value}</font>!"
			},

		]
	});

	StandardTooltips.push({
		classname: "Aghanim_FoundConsumableItem",
		name: "{s:player_name} found a consumable item: <font color='#0CF1F1'>{s:locstring_value}</font>!",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "{s:player_name} hat einen Konsumgegenstand gefunden: <font color='#0CF1F1'>{s:locstring_value}</font>!"
			},

			{
				language: Language.Russian,
				name_override: "{s:player_name} находит расходник: <font color='#0CF1F1'>{s:locstring_value}</font>!"
			},

			{
				language: Language.SChinese,
				name_override: "{s:player_name}找到了新的消耗品：<font color='#0CF1F1'>{s:locstring_value}</font>!"
			},

		]
	});

	StandardTooltips.push({
		classname: "Aghanim_KilledByCreature",
		name: "{s:player_name} was killed by {s:locstring_value}",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "{s:player_name} wurde von {s:locstring_value} getötet"
			},

			{
				language: Language.Russian,
				name_override: "{s:locstring_value} убивает {s:player_name}"
			},

			{
				language: Language.SChinese,
				name_override: "{s:player_name}被{s:locstring_value}杀死！"
			},

		]
	});

	StandardTooltips.push({
		classname: "Aghanim_BattlePointsFound",
		name: "{s:player_name} found {d:int_value} Battle Points for the team!",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "{s:player_name} hat {d:int_value} Schlachtenpunkte für das Team gefunden!"
			},

			{
				language: Language.Russian,
				name_override: "{s:player_name} находит {d:int_value} боевых очков для всей команды!"
			},

			{
				language: Language.SChinese,
				name_override: "{s:player_name}为全队找到了{d:int_value}点勇士积分！"
			},

		]
	});

	StandardTooltips.push({
		classname: "Aghanim_ArcaneFragmentsFound",
		name: "{s:player_name} found {d:int_value} Arcane Fragments for the team!",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "{s:player_name} hat {d:int_value} Arkanfragmente für das Team gefunden!"
			},

			{
				language: Language.Russian,
				name_override: "{s:player_name} находит волшебные фрагменты для всей команды: {d:int_value}!"
			},

			{
				language: Language.SChinese,
				name_override: "{s:player_name}为全队找到了{d:int_value}块奥术碎片！"
			},

		]
	});

	Abilities.push({
		ability_classname: "item_life_rune",
		name: "Life Rune",
		description: "Grants +1 life, allowing you to respawn 10 seconds after dying.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Lebensrune",
				description_override: "Gibt +1 Leben, wodurch Sie 10 Sekunden nach Ihrem Tod wiederbelebt werden.",
			},

			{
				language: Language.Russian,
				name_override: "Life Rune",
				description_override: "Даёт +1 жизнь, позволяет возродиться через 10 секунд после смерти.",
			},

			{
				language: Language.SChinese,
				name_override: "Life Rune",
				description_override: "+1次生命，阵亡10秒后可以复活。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_small_scepter_fragment",
		name: "Small Scepter Shard",
		description: "Grants a choice of 3 minor ability upgrades when consumed.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kleiner Zeptersplitter",
				description_override: "Sie können zwischen 3 kleinen Fähigkeitsverbesserungen wählen.",
			},

			{
				language: Language.Russian,
				name_override: "Малый осколок спипетра",
				description_override: "При поглощении позволяет выбрать одно из 3 незначительных улучшений способности.",
			},

			{
				language: Language.SChinese,
				name_override: "小神杖碎片",
				description_override: "消耗后可以选择3项小幅技能升级。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_bottle",
		description: "<h1>Active: Regenerate</h1>Consumes a charge to restore ${health_restore_pct}% max health and ${mana_restore_pct}% max mana over ${restore_time} seconds.  At the end of each encounter, a charge is restored.",
		ability_specials:
		[
			{
				ability_special: "max_charges",
				text: "MAX CHARGES",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				description_override: "<h1>Aktiv: Regeneration</h1>Ihr Held nimmt einen Schluck und regeneriert über ${restore_time} Sekunden ${health_restore_pct} %% der maximalen Lebenspunkte und ${mana_restore_pct} %% des maximalen Manavorrats.",
				ability_specials_override:
				[
					{
						ability_special: "max_charges",
						text: "MAX. AUFLADUNGEN",
					},

				]
			},

			{
				language: Language.Russian,
				description_override: "<h1>Активная: Regenerate</h1>Тратит один заряд, чтобы восстановить ${health_restore_pct}% от макс. здоровья и ${mana_restore_pct}% от макс. маны за ${restore_time} сек. Получает один заряд в конце каждой стычки.",
				ability_specials_override:
				[
					{
						ability_special: "max_charges",
						text: "МАКС. ЗАРЯДОВ",
					},

				]
			},

			{
				language: Language.SChinese,
				description_override: "<h1>主动：回复</h1>消耗一点能量，在${restore_time}秒哪回复${health_restore_pct}%最大生命和${mana_restore_pct}%最大魔法。每场遭遇战结束时将恢复一点能量。",
				ability_specials_override:
				[
					{
						ability_special: "max_charges",
						text: "最大能量：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_shadow_amulet",
		description: "<h1>Active: Fade</h1>Grants invisibility to you or a target allied hero as long as the target unit remains still.  <br><br>Has a ${fade_time} second fade time, and breaks instantly upon moving. Range: ${abilitycastrange}",
		ability_specials:
		[
			{
				ability_special: "fade_duration",
				text: "MAX FADE TIME",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				description_override: "<h1>Aktiv: Verblassen</h1>Sie oder der ausgewählte verbündete Held werden nach ${fade_time} Sekunden unsichtbar. <br><br>Bewegung hebt die Unsichtbarkeit wieder auf. Reichweite: ${abilitycastrange}",
				ability_specials_override:
				[
					{
						ability_special: "fade_duration",
						text: "MAX. ÜBERGANGSZEIT",
					},

				]
			},

			{
				language: Language.Russian,
				description_override: "<h1>Активная: Fade</h1> Накладывает на героя или выбранного союзника невидимость, которая действует, пока цель стоит на месте. <br><br>Цель входит в невидимость за ${fade_time} сек. и мгновенно выходит из неё при передвижении. Дальность применения: ${abilitycastrange}",
				ability_specials_override:
				[
					{
						ability_special: "fade_duration",
						text: "МАКС. ВРЕМЯ ДО НЕВИДИМОСТИ",
					},

				]
			},

			{
				language: Language.SChinese,
				description_override: "<h1>主动：渐隐</h1>让自己或友方单位静止不动的情况下获得隐身效果。<br><br>拥有${fade_time}秒渐隐时间，如果移动将立刻打破隐身。对友军施法距离：${abilitycastrange}",
				ability_specials_override:
				[
					{
						ability_special: "fade_duration",
						text: "最大渐隐时间：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_vladmir",
		description: "<h1>Passive: Vladmir's Aura</h1>Grants <font color='#F40000'>${lifesteal_aura}%</font> lifesteal, ${damage_aura}% bonus damage, and ${mana_regen_aura} mana regeneration to nearby allies. <br><br>Radius: ${aura_radius}",
		lore: "An eerie mask that is haunted with the malice of a fallen vampire.",
		language_overrides:
		[
			{
				language: Language.German,
				description_override: "<h1>Passiv: Vladmirs Aura</h1>Gewährt in der Nähe befindlichen Verbündeten <font color='#F40000'>${lifesteal_aura} %%</font> Lebensraub, ${damage_aura} %% Bonusschaden und ${mana_regen_aura} Manaregeneration.<br><br>Radius: ${aura_radius}",
				lore_override: "Eine unheimliche Maske, die mit der Böswilligkeit eines gefallenen Vampirs verflucht ist.",
			},

			{
				language: Language.Russian,
				description_override: "<h1>Пассивная: Vladmir's Aura</h1>Увеличивает вампиризм союзников на <font color='#F40000'>${lifesteal_aura}%</font>, их урон на ${damage_aura}% и восстановление маны на ${mana_regen_aura}. <br><br>Радиус: ${aura_radius}",
				lore_override: "Жуткая маска, проклятая злобой павшего вампира.",
			},

			{
				language: Language.SChinese,
				description_override: "<h1>被动：弗拉迪米尔光环</h1>向周围队友提供<font color='#F40000'>${lifesteal_aura}%</font>吸血，${damage_aura}%攻击力加成和${mana_regen_aura}点/秒魔法恢复。<br><br>作用范围：${aura_radius}",
				lore_override: "一副怪异的面具，纠缠着死去吸血鬼的怨念。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_satanic",
		description: "<h1>Active: Unholy Rage</h1>Increases Lifesteal percentage to <font color='#F40000'>${unholy_lifesteal_total_tooltip}%</font> for ${unholy_duration} seconds. \\n<h1>Passive: Lifesteal</h1>Heals the attacker for <font color='#F40000'>${lifesteal_percent}%</font> of attack damage dealt.",
		lore: "Immense power at the cost of your soul.",
		ability_specials:
		[
			{
				ability_special: "bonus_strength",
				text: "+$str",
				item_stat: true,
			},

			{
				ability_special: "bonus_damage",
				text: "+$damage",
				item_stat: true,
			},

			{
				ability_special: "status_resistance",
				text: "+Status Resistanc",
				percentage: true,
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				description_override: "<h1>Aktiv: Gottlose Wut</h1>Erhöht für ${unholy_duration} Sekunden den Lebensraub um <font color='#F40000'>${unholy_lifesteal_total_tooltip} %%</font>.\\n<h1>Passiv: Lebensraub</h1>Heilt den Angreifer um <font color='#F40000'>${lifesteal_percent} %%</font> des ausgeteilten Angriffsschadens.",
				lore_override: "Ungeheure Macht auf Kosten Ihrer Seele.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "+$str",
							item_stat: true,
					},

					{
						ability_special: "bonus_damage",
						text: "+$damage",
							item_stat: true,
					},

					{
						ability_special: "status_resistance",
						text: "+Statusresisten",
							percentage: true,
					},

				]
			},

			{
				language: Language.Russian,
				description_override: "<h1>Активируемая: Unholy Rage</h1> Увеличивает эффект вампиризма до <font color='#F40000'>${unholy_lifesteal_total_tooltip}%</font> на ${unholy_duration} сек.\\n<h1>Пассивная: Lifesteal</h1>Каждая атака восстанавливает владельцу здоровье в размере <font color='#F40000'>${lifesteal_percent}%</font> от нанесённого урона.",
				lore_override: "Колоссальная сила в обмен на вашу душу.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "+$str",
							item_stat: true,
					},

					{
						ability_special: "bonus_damage",
						text: "+$damage",
							item_stat: true,
					},

					{
						ability_special: "status_resistance",
						text: "+к сопротивлению эффекта",
							percentage: true,
					},

				]
			},

			{
				language: Language.SChinese,
				description_override: "<h1>主动：不洁狂热</h1>吸血效果提升至<font color='#F40000'>${unholy_lifesteal_total_tooltip}%</font>，持续${unholy_duration}秒。\\n<h1>被动：吸血</h1>攻击者每次攻击都将根据造成的伤害回复<font color='#F40000'>${lifesteal_percent}%</font>的生命值。",
				lore_override: "无穷的力量，需要你付出灵魂作为代价。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "+$str",
							item_stat: true,
					},

					{
						ability_special: "bonus_damage",
						text: "+$damage",
							item_stat: true,
					},

					{
						ability_special: "status_resistance",
						text: "+状态抗",
							percentage: true,
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "aghanim_empty_spell1",
		name: "Ability Locked",
		description: "Aghanim has locked your ability - destroy the shard to get it back!",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Fähigkeit gesperrt",
				description_override: "Aghanim hat Ihre Fähigkeit gesperrt – zerstören Sie den Splitter, um sie zurückzuerhalten!",
			},

			{
				language: Language.Russian,
				name_override: "Способность заблокирована",
				description_override: "Аганим заблокировал эту способность. Уничтожьте осколок, чтобы вернуть её!",
			},

			{
				language: Language.SChinese,
				name_override: "技能被锁定",
				description_override: "阿哈利姆锁定了你的技能 - 快摧毁碎片夺回来！",
			},

		]
	});

	Abilities.push({
		ability_classname: "aghanim_empty_spell2",
		name: "Ability Locked",
		description: "Aghanim has locked your ability - destroy the shard to get it back!",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Fähigkeit gesperrt",
				description_override: "Aghanim hat Ihre Fähigkeit gesperrt – zerstören Sie den Splitter, um sie zurückzuerhalten!",
			},

			{
				language: Language.Russian,
				name_override: "Способность заблокирована",
				description_override: "Аганим заблокировал эту способность. Уничтожьте осколок, чтобы вернуть её!",
			},

			{
				language: Language.SChinese,
				name_override: "技能被锁定",
				description_override: "阿哈利姆锁定了你的技能 - 快摧毁碎片夺回来！",
			},

		]
	});

	Abilities.push({
		ability_classname: "aghanim_empty_spell3",
		name: "Ability Locked",
		description: "Aghanim has locked your ability - destroy the shard to get it back!",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Fähigkeit gesperrt",
				description_override: "Aghanim hat Ihre Fähigkeit gesperrt – zerstören Sie den Splitter, um sie zurückzuerhalten!",
			},

			{
				language: Language.Russian,
				name_override: "Способность заблокирована",
				description_override: "Аганим заблокировал эту способность. Уничтожьте осколок, чтобы вернуть её!",
			},

			{
				language: Language.SChinese,
				name_override: "技能被锁定",
				description_override: "阿哈利姆锁定了你的技能 - 快摧毁碎片夺回来！",
			},

		]
	});

	Abilities.push({
		ability_classname: "aghanim_empty_spell4",
		name: "Ability Locked",
		description: "Aghanim has locked your ability - destroy the shard to get it back!",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Fähigkeit gesperrt",
				description_override: "Aghanim hat Ihre Fähigkeit gesperrt – zerstören Sie den Splitter, um sie zurückzuerhalten!",
			},

			{
				language: Language.Russian,
				name_override: "Способность заблокирована",
				description_override: "Аганим заблокировал эту способность. Уничтожьте осколок, чтобы вернуть её!",
			},

			{
				language: Language.SChinese,
				name_override: "技能被锁定",
				description_override: "阿哈利姆锁定了你的技能 - 快摧毁碎片夺回来！",
			},

		]
	});

	Abilities.push({
		ability_classname: "creature_brewmaster_fire_permanent_immolation",
		name: "Permanent Immolation",
		description: "Burns nearby enemy units.",
		ability_specials:
		[
			{
				ability_special: "damage",
				text: "DAMAGE PER SECOND",
			},

			{
				ability_special: "radius",
				text: "RADIUS",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Feueraura",
				description_override: "Verbrennt in der Nähe befindliche gegnerische Einheiten.",
				ability_specials_override:
				[
					{
						ability_special: "damage",
						text: "SCHADEN PRO SEKUNDE",
					},

					{
						ability_special: "radius",
						text: "RADIUS",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Permanent Immolation",
				description_override: "Обжигает врагов неподалёку.",
				ability_specials_override:
				[
					{
						ability_special: "damage",
						text: "УРОН В СЕКУНДУ",
					},

					{
						ability_special: "radius",
						text: "РАДИУС",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "永久献祭",
				description_override: "烧灼附近的敌方单位。",
				ability_specials_override:
				[
					{
						ability_special: "damage",
						text: "每秒伤害：",
					},

					{
						ability_special: "radius",
						text: "作用范围：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_greater_salve",
		name: "Greater Salve",
		description: "<h1>Use: Salve</h1> Grants ${hp_per_tick} health regeneration to the target for ${buff_duration} seconds.<br><br>If the unit is attacked by an enemy hero or Roshan, the effect is lost.<br><br>Range: ${abilitycastrange}",
		lore: "A magical salve that can quickly mend even the deepest of wounds.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Große Salbe",
				description_override: "<h1>Benutzen: Salbe</h1> Das Ziel regeneriert für ${buff_duration} Sekunden ${hp_per_tick} Lebenspunkte pro Sekunde.<br><br>Wenn das Ziel von einem gegnerischen Helden oder Roshan Schaden zugefügt bekommt, geht der Effekt verloren.<br><br>Reichweite: ${abilitycastrange}",
				lore_override: "Eine magische Salbe, die sogar die tiefsten Wunden schnell heilen kann.",
			},

			{
				language: Language.Russian,
				name_override: "Великий целебный бальзам",
				description_override: "<h1>Использование: Salve</h1> Увеличивает восстановление здоровья выбранного существа на ${hp_per_tick}. Действует ${buff_duration} сек. <br><br>Дальность применения: ${abilitycastrange}",
				lore_override: "Магическая мазь, которая может быстро исцелить даже самые глубокие раны.",
			},

			{
				language: Language.SChinese,
				name_override: "高级治疗药膏",
				description_override: "<h1>使用：药膏</h1>向目标提供${hp_per_tick}点/秒生命恢复，持续${buff_duration}秒。<br><br>受到敌方英雄或肉山攻击时效果会被驱散。<br><br>对友军施放距离：${abilitycastrange}",
				lore_override: "即使最严重的伤口也能快速治愈的魔法药膏。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_greater_clarity",
		name: "Greater Clarity",
		description: "<h1>Use: Replenish</h1> Grants ${mana_per_tick} mana regeneration to the target for ${buff_duration} seconds.<br><br>Range: ${abilitycastrange}",
		lore: "Clear water that enhances the ability to meditate.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Große Klarheit",
				description_override: "<h1>Benutzen: Auffüllen</h1> Das Ziel regeneriert für ${buff_duration} Sekunden ${mana_per_tick} Mana pro Sekunde.<br><br>Reichweite: ${abilitycastrange}",
				lore_override: "Klares Wasser, das die Meditationsfähigkeit verstärkt.",
			},

			{
				language: Language.Russian,
				name_override: "Великое зелье ясности",
				description_override: "<h1>Использование: Replenish</h1> Увеличивает восстановление маны выбранного существа на ${mana_per_tick}. Действует ${buff_duration} сек.<br><br>Дальность применения: ${abilitycastrange}",
				lore_override: "Чистая вода, повышающая способность к медитации.",
			},

			{
				language: Language.SChinese,
				name_override: "高级净化药水",
				description_override: "<h1>使用：回魔</h1>向目标提供${mana_per_tick}点魔法恢复，持续${buff_duration}秒。<br><br>施法距离：${abilitycastrange}",
				lore_override: "能增强冥想能力的清水。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_double_damage_potion",
		name: "Double Damage Potion",
		description: "Grants double damage for ${buff_duration} seconds.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Trank des doppelten Schadens",
				description_override: "Verdoppelt für ${buff_duration} Sekunden den Angriffsschaden.",
			},

			{
				language: Language.Russian,
				name_override: "Зелье двойного урона",
				description_override: "Увеличивает урон в 2 раза на ${buff_duration} сек.",
			},

			{
				language: Language.SChinese,
				name_override: "双倍伤害药水",
				description_override: "获得双倍伤害效果，持续${buff_duration}秒。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_spell_amp_potion",
		name: "Spell Amp Potion",
		description: "Grants ${spell_amp_bonus_pct}% bonus spell damage for ${buff_duration} seconds.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Trank der Zauberverstärkung",
				description_override: "Erhöht für ${buff_duration} Sekunden allen Zauberschaden um ${spell_amp_bonus_pct}&nbsp;%%.",
			},

			{
				language: Language.Russian,
				name_override: "Зелье магического урона",
				description_override: "Увеличивает урон от заклинаний на ${spell_amp_bonus_pct}% на ${buff_duration} сек.",
			},

			{
				language: Language.SChinese,
				name_override: "技能增强药水",
				description_override: "获得${spell_amp_bonus_pct}%技能伤害加成，持续${buff_duration}秒。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_evasion_potion",
		name: "Evasion Potion",
		description: "Grants ${evasion_bonus_pct}% bonus evasion for ${buff_duration} seconds.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Trank des Ausweichens",
				description_override: "Gewährt für ${buff_duration} Sekunden eine ${evasion_bonus_pct}%ige Chance, Angriffen auszuweichen.",
			},

			{
				language: Language.Russian,
				name_override: "Зелье уклонения",
				description_override: "Увеличивает уклонение на ${evasion_bonus_pct}% на ${buff_duration} сек.",
			},

			{
				language: Language.SChinese,
				name_override: "闪避药水",
				description_override: "获得${evasion_bonus_pct}%闪避加成，持续${buff_duration}秒。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_tome_of_greater_knowledge",
		name: "Tome of Greater Knowledge",
		description: "Grants half of the total experience required to reach the next level to all friendly Heroes.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Foliant des großen Wissens",
				description_override: "Gewährt allen verbündeten Helden die Hälfte der für das nächste Level erforderlichen Erfahrungspunkte.",
			},

			{
				language: Language.Russian,
				name_override: "Книга великих знаний",
				description_override: "Даёт всем союзным героям половину опыта, необходимого для получения следующего уровня.",
			},

			{
				language: Language.SChinese,
				name_override: "高级学识之书",
				description_override: "所有友方英雄获得升至下一级所需的半数经验。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_purification_potion",
		name: "Purification Potion",
		description: "<h1>Use: Greater Purification</h1>Instantly heals you for ${heal} health and damages enemies around you for ${heal}.",
		ability_specials:
		[
			{
				ability_special: "heal",
				text: "HEAL/DAMAGE",
			},

			{
				ability_special: "radius",
				text: "DAMAGE RADIUS",
			},

		],
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Poção Purificante",
			},

			{
				language: Language.German,
				name_override: "Trank der Reinigung",
				description_override: "<h1>Benutzen: Große Reinigung</h1>Heilt Sie sofort um ${heal} und fügt in der Nähe befindlichen Gegnern ${heal} Schaden zu.",
				ability_specials_override:
				[
					{
						ability_special: "heal",
						text: "HEILUNG/SCHADEN",
					},

					{
						ability_special: "radius",
						text: "SCHADENSRADIUS",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Зелье покаяния",
				description_override: "<h1>Использование: Великое покаяние</h1>Мгновенно исцеляет ${heal} здоровья и наносит ${heal} урона врагам вокруг.",
				ability_specials_override:
				[
					{
						ability_special: "heal",
						text: "ЛЕЧЕНИЕ/УРОН",
					},

					{
						ability_special: "radius",
						text: "РАДИУС УРОНА",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "洗礼药水",
				description_override: "<h1>使用：高级洗礼</h1>立刻回复自身${heal}点生命，对附近敌人造成${heal}点伤害。",
				ability_specials_override:
				[
					{
						ability_special: "heal",
						text: "治疗/伤害：",
					},

					{
						ability_special: "radius",
						text: "伤害作用范围：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_ravage_potion",
		name: "Ravage Potion",
		description: "<h1>Use: Greater Ravage</h1>Slams the ground, causing tentacles to erupt in all directions, damaging and stunning all nearby enemy units.",
		notes:
		[
			"Ravage will hit invisible units.",
			"Ravage waves move outwards at a speed of ${speed}.",
		],
		ability_specials:
		[
			{
				ability_special: "radius",
				text: "RADIUS",
			},

			{
				ability_special: "duration",
				text: "DURATION",
			},

		],
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Poção Devastadora",
				ability_specials_override:
				[
					{
						ability_special: "radius",
						text: "RAIO",
					},

					{
						ability_special: "duration",
						text: "DURAÇÃO",
					},

				]
			},

			{
				language: Language.German,
				name_override: "Trank der Verwüstung",
				description_override: "<h1>Benutzen: Große Verwüstung</h1>Schlägt auf den Boden, wodurch Tentakel daraus hervortreten, gegnerische Einheiten in der Nähe betäuben und ihnen Schaden zufügen.",
				notes_override:
				[
					"Verwüstung trifft auch unsichtbare Einheiten.",
					"Verwüstung breitet sich wellenförmig mit einer Geschwindigkeit von ${speed} aus.",
				],
				ability_specials_override:
				[
					{
						ability_special: "radius",
						text: "RADIUS",
					},

					{
						ability_special: "duration",
						text: "DAUER",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Зелье сокрушения",
				description_override: "<h1>Применение: Великое сокрушение</h1>Сотрясает землю и выпускает во все стороны щупальца, нанося всем врагам вокруг урон и оглушая их.",
				notes_override:
				[
					"Действует на невидимых врагов.",
					"Щупальца от способности расходятся в стороны со скоростью в ${speed}.",
				],
				ability_specials_override:
				[
					{
						ability_special: "radius",
						text: "РАДИУС",
					},

					{
						ability_special: "duration",
						text: "ДЛИТЕЛЬНОСТЬ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "毁灭药水",
				description_override: "<h1>使用：高级毁灭</h1>猛击地面，触手向各个方向穿出，伤害并眩晕附近所有敌方单位。",
				notes_override:
				[
					"毁灭能伤害隐身单位。",
					"毁灭以${speed}的速度向外扩散。",
				],
				ability_specials_override:
				[
					{
						ability_special: "radius",
						text: "作用范围：",
					},

					{
						ability_special: "duration",
						text: "持续时间：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_dragon_potion",
		name: "Dragon Potion",
		description: "<h1>Use: Elder Dragon Form</h1>Transform into a Dragon, gaining Corrosive Breath, Splash Damage/Slow, and increased Magic Resistance.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "bonus_movement_speed",
				text: "BONUS MOVE SPEED",
			},

			{
				ability_special: "bonus_attack_range",
				text: "BONUS ATTACK RANGE",
			},

			{
				ability_special: "bonus_attack_damage",
				text: "BONUS DAMAGE",
			},

			{
				ability_special: "magic_resistance",
				text: "MAGIC RESISTANCE",
			},

			{
				ability_special: "splash_radius",
				text: "SPLASH RADIUS",
			},

			{
				ability_special: "splash_damage_percent",
				text: "SPLASH DAMAGE PERCENT",
			},

		],
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Poção Draconiana",
				ability_specials_override:
				[
					{
						ability_special: "duration",
						text: "DURAÇÃO",
					},

					{
						ability_special: "bonus_movement_speed",
						text: "VEL. DE MOV. ADICIONAL",
					},

					{
						ability_special: "bonus_attack_range",
						text: "ALCANCE DE ATAQUE ADICIONAL",
					},

					{
						ability_special: "bonus_attack_damage",
						text: "DANO ADICIONAL",
					},

					{
						ability_special: "magic_resistance",
						text: "RESISTÊNCIA MÁGICA",
					},

					{
						ability_special: "splash_radius",
						text: "RAIO DE DANO",
					},

					{
						ability_special: "splash_damage_percent",
						text: "PORCENTAGEM DE DANO EM ÁREA",
					},

				]
			},

			{
				language: Language.German,
				name_override: "Trank des Drachen",
				description_override: "<h1>Benutzen: Urdrachenform</h1>Verwandelt Sie in einen Drachen. Gewährt Fernkampfangriff, Schaden über die Zeit, Flächenschaden, Verlangsamung sowie Bonusmagieresistenz.",
				ability_specials_override:
				[
					{
						ability_special: "duration",
						text: "DAUER",
					},

					{
						ability_special: "bonus_movement_speed",
						text: "BONUSBEWEGUNGSTEMPO",
					},

					{
						ability_special: "bonus_attack_range",
						text: "BONUSANGRIFFSREICHWEITE",
					},

					{
						ability_special: "bonus_attack_damage",
						text: "BONUSSCHADEN",
					},

					{
						ability_special: "magic_resistance",
						text: "MAGIERESISTENZ",
					},

					{
						ability_special: "splash_radius",
						text: "RADIUS (FLÄCHENSCHADEN)",
					},

					{
						ability_special: "splash_damage_percent",
						text: "FLÄCHENSCHADEN",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Зелье дракона",
				description_override: "<h1>Использование: Форма дракона</h1>Превращает героя в дракона, который имеет ядовитую атаку, наносящую урон и замедляющую врагов в области, и увеличенное сопротивление магии.",
				ability_specials_override:
				[
					{
						ability_special: "duration",
						text: "ДЛИТЕЛЬНОСТЬ",
					},

					{
						ability_special: "bonus_movement_speed",
						text: "ДОП. СКОРОСТЬ ПЕРЕДВИЖЕНИЯ",
					},

					{
						ability_special: "bonus_attack_range",
						text: "ДОП. ДАЛЬНОСТЬ АТАКИ",
					},

					{
						ability_special: "bonus_attack_damage",
						text: "ДОПОЛНИТЕЛЬНЫЙ УРОН",
					},

					{
						ability_special: "magic_resistance",
						text: "СОПРОТИВЛЕНИЕ МАГИИ",
					},

					{
						ability_special: "splash_radius",
						text: "РАДИУС УРОНА ПО ОБЛАСТИ",
					},

					{
						ability_special: "splash_damage_percent",
						text: "ДОЛЯ УРОНА ПО ОБЛАСТИ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "古龙药水",
				description_override: "<h1>使用：古龙形态</h1>变成一头古龙，拥有腐蚀吐息，溅射伤害/减速和魔法抗性提升。",
				ability_specials_override:
				[
					{
						ability_special: "duration",
						text: "持续时间：",
					},

					{
						ability_special: "bonus_movement_speed",
						text: "移动速度加成：",
					},

					{
						ability_special: "bonus_attack_range",
						text: "攻击距离加成：",
					},

					{
						ability_special: "bonus_attack_damage",
						text: "攻击力加成：",
					},

					{
						ability_special: "magic_resistance",
						text: "魔法抗性：",
					},

					{
						ability_special: "splash_radius",
						text: "溅射范围：",
					},

					{
						ability_special: "splash_damage_percent",
						text: "溅射伤害百分比：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_arcanist_potion",
		name: "Arcanist Potion",
		description: "<h1>Use: Enhanced Arcanery</h1>Reduces ability cooldowns and mana costs.",
		ability_specials:
		[
			{
				ability_special: "duration",
				text: "DURATION",
			},

			{
				ability_special: "cooldown_reduction_pct",
				text: "COOLDOWN REDUCTION",
				percentage: true,
			},

			{
				ability_special: "manacost_reduction_pct",
				text: "MANA COST REDUCTION",
				percentage: true,
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Trank des Arkanisten",
				description_override: "<h1>Benutzen: Arkanverstärkung</h1>Reduziert Abklingzeiten und Manakosten von Fähigkeiten.",
				ability_specials_override:
				[
					{
						ability_special: "duration",
						text: "DAUER",
					},

					{
						ability_special: "cooldown_reduction_pct",
						text: "ABKLINGZEITREDUZIERUNG",
							percentage: true,
					},

					{
						ability_special: "manacost_reduction_pct",
						text: "MANAKOSTENREDUZIERUNG",
							percentage: true,
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Зелье чародея",
				description_override: "<h1>Использование: Чародейство</h1>Уменьшает перезарядку и расход маны у способностей.",
				ability_specials_override:
				[
					{
						ability_special: "duration",
						text: "ДЛИТЕЛЬНОСТЬ",
					},

					{
						ability_special: "cooldown_reduction_pct",
						text: "УМЕНЬШЕНИЕ ПЕРЕЗАРЯДКИ",
							percentage: true,
					},

					{
						ability_special: "manacost_reduction_pct",
						text: "УМЕНЬШЕНИЕ РАСХОДА МАНЫ",
							percentage: true,
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "秘士药水",
				description_override: "<h1>使用：强化秘法</h1>降低技能冷却时间和魔法消耗。",
				ability_specials_override:
				[
					{
						ability_special: "duration",
						text: "持续时间：",
					},

					{
						ability_special: "cooldown_reduction_pct",
						text: "冷却时间减少",
							percentage: true,
					},

					{
						ability_special: "manacost_reduction_pct",
						text: "魔法消耗降低",
							percentage: true,
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_echo_slam_potion",
		name: "Echo Slam Potion",
		description: "<h1>Use: Greater Echo Slam</h1>Shockwaves travel through the ground, damaging enemy units.  Each enemy hit causes an echo to damage nearby units. Real heroes cause two echoes.",
		ability_specials:
		[
			{
				ability_special: "echo_slam_echo_damage",
				text: "ECHO DAMAGE",
			},

			{
				ability_special: "echo_slam_damage_range",
				text: "RADIUS",
			},

			{
				ability_special: "echo_slam_initial_damage",
				text: "INITIAL DAMAGE",
			},

		],
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Poção Ecoante",
				ability_specials_override:
				[
					{
						ability_special: "echo_slam_echo_damage",
						text: "DANO DO ECO",
					},

					{
						ability_special: "echo_slam_damage_range",
						text: "RAIO",
					},

					{
						ability_special: "echo_slam_initial_damage",
						text: "DANO INICIAL",
					},

				]
			},

			{
				language: Language.German,
				name_override: "Trank des Donnernden Echos",
				description_override: "<h1>Benutzen: Großes donnerndes Echo</h1>Schockwellen wandern durch den Boden und verursachen Schaden an gegnerischen Einheiten. Jeder getroffene Gegner erzeugt ein Echo, das in der Nähe befindlichen Einheiten Schaden zufügt. Echte Helden erzeugen zwei Echos.",
				ability_specials_override:
				[
					{
						ability_special: "echo_slam_echo_damage",
						text: "ECHOSCHADEN",
					},

					{
						ability_special: "echo_slam_damage_range",
						text: "RADIUS",
					},

					{
						ability_special: "echo_slam_initial_damage",
						text: "GRUNDSCHADEN",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Зелье дрожи земли",
				description_override: "<h1>Использование: Великая дрожь</h1>По земле распространяются ударные волны, наносящие урон врагам. Каждое попадание по врагу создаёт волновое эхо, которое наносит урон ближайшим врагам. Попадание по герою создаёт двойное эхо.",
				ability_specials_override:
				[
					{
						ability_special: "echo_slam_echo_damage",
						text: "УРОН ОТ ЭХА",
					},

					{
						ability_special: "echo_slam_damage_range",
						text: "РАДИУС",
					},

					{
						ability_special: "echo_slam_initial_damage",
						text: "БАЗОВЫЙ УРОН",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "回音击药水",
				description_override: "<h1>使用：高级回音击</h1>穿过地面的冲击波，伤害敌方单位。每个受到攻击的敌人都会引起伤害附近单位的反射波。英雄本体将引起两次反射。",
				ability_specials_override:
				[
					{
						ability_special: "echo_slam_echo_damage",
						text: "回音伤害：",
					},

					{
						ability_special: "echo_slam_damage_range",
						text: "作用范围：",
					},

					{
						ability_special: "echo_slam_initial_damage",
						text: "初始伤害：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_torrent_effect_potion",
		name: "Torrent Reflex",
		description: "<h1>Use: <font color='#FBD600'>Grants permanent effect.</font></h1> When attacked, you have a ${proc_chance}% chance to summon a rising torrent that hurls enemy units into the sky after a short delay. Units caught in the torrent are stunned, damaged, and slowed.",
		ability_specials:
		[
			{
				ability_special: "proc_chance",
				text: "PROC CHANCE",
				percentage: true,
			},

			{
				ability_special: "torrent_damage",
				text: "TORRENT DAMAGE",
			},

			{
				ability_special: "stun_duration",
				text: "STUN DURATION",
			},

		],
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Poção da Torrente",
				ability_specials_override:
				[
					{
						ability_special: "proc_chance",
						text: "CHANCE DE ATIVAÇÃO",
							percentage: true,
					},

					{
						ability_special: "torrent_damage",
						text: "DANO DA TORRENTE",
					},

					{
						ability_special: "stun_duration",
						text: "DURAÇÃO DO ATORDOAMENTO",
					},

				]
			},

			{
				language: Language.German,
				name_override: "Sturzflutreflex",
				description_override: "<h1>Benutzen: <font color='#FBD600'>Fügt permanenten Effekt hinzu.</font></h1> Bei erlittenen Angriffen besteht eine ${proc_chance}%ige Chance, eine Sturzflut zu beschwören, die gegnerische Einheiten nach kurzer Verzögerung in die Luft wirft. In der Sturzflut gefangene Einheiten werden betäubt, verlangsamt und erleiden Schaden.",
				ability_specials_override:
				[
					{
						ability_special: "proc_chance",
						text: "AUSLÖSECHANCE",
							percentage: true,
					},

					{
						ability_special: "torrent_damage",
						text: "STURZFLUTSCHADEN",
					},

					{
						ability_special: "stun_duration",
						text: "BETÄUBUNGSDAUER",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Ответный гейзер",
				description_override: "<h1>Использование <font color='#FBD600'>даёт постоянный эффект</font></h1> Когда героя атакуют, он с шансом в ${proc_chance}% создаст мощный поток воды после небольшой задержки. Поток подбросит врагов в воздух, оглушит их, нанесёт им урон и замедлит их передвижение.",
				ability_specials_override:
				[
					{
						ability_special: "proc_chance",
						text: "ШАНС СРАБАТЫВАНИЯ",
							percentage: true,
					},

					{
						ability_special: "torrent_damage",
						text: "УРОН",
					},

					{
						ability_special: "stun_duration",
						text: "ДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "洪流反射",
				description_override: "<h1>使用：<font color='#FBD600'>获得永久效果。</font></h1>每次受到攻击时有${proc_chance}%几率召唤涨起的洪流，在短时间延迟后将敌方单位抛向空中。受到洪流作用的单位将被眩晕和减速，并受到伤害。",
				ability_specials_override:
				[
					{
						ability_special: "proc_chance",
						text: "触发几率",
							percentage: true,
					},

					{
						ability_special: "torrent_damage",
						text: "洪流伤害：",
					},

					{
						ability_special: "stun_duration",
						text: "眩晕时间：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_shadow_wave_effect_potion",
		name: "Shadow Wave Reflex",
		description: "<h1>Use: <font color='#FBD600'>Grants permanent effect.</font></h1> When attacked, you have a ${proc_chance}% chance to send out a bolt of power that arcs between allies, healing them while damaging any units standing nearby. You are always healed by Shadow Wave.",
		notes:
		[
			"Prioritizes allied heroes over creeps.",
			"If enemies are near multiple allied units affected by Shadow Wave, they will take multiple instances of damage.",
		],
		ability_specials:
		[
			{
				ability_special: "proc_chance",
				text: "PROC CHANCE",
				percentage: true,
			},

			{
				ability_special: "cast_range",
				text: "RANGE",
			},

			{
				ability_special: "tooltip_max_targets_inc_dazzle",
				text: "MAX HEAL TARGETS",
			},

			{
				ability_special: "damage_radius",
				text: "DAMAGE RADIUS",
			},

			{
				ability_special: "damage",
				text: "HEAL/DAMAGE",
			},

		],
		language_overrides:
		[
			{
				language: Language.Brazilian,
				ability_specials_override:
				[
					{
						ability_special: "cast_range",
						text: "ALCANCE",
					},

				]
			},

			{
				language: Language.German,
				name_override: "Schattenwellenreflex",
				description_override: "<h1>Benutzen: <font color='#FBD600'>Fügt permanenten Effekt hinzu.</font></h1> Bei erlittenen Angriffen besteht eine ${proc_chance}%ige Chance, einen Energieblitz zu erzeugen, der zwischen Verbündeten umherspringt, diese heilt und nahe gegnerische Einheiten verletzt. Sie selbst werden immer von Schattenwelle geheilt.",
				notes_override:
				[
					"Zieht verbündete Helden gegenüber Dienern vor.",
					"Wenn sich ein Gegner in der Nähe mehrerer Einheiten befindet, während diese durch die Schattenwelle geheilt werden, erleidet er mehrfachen Schaden.",
				],
				ability_specials_override:
				[
					{
						ability_special: "proc_chance",
						text: "AUSLÖSECHANCE",
							percentage: true,
					},

					{
						ability_special: "cast_range",
						text: "REICHWEITE",
					},

					{
						ability_special: "tooltip_max_targets_inc_dazzle",
						text: "MAX. ZIELE",
					},

					{
						ability_special: "damage_radius",
						text: "SCHADENSRADIUS",
					},

					{
						ability_special: "damage",
						text: "HEILUNG/SCHADEN",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Ответная волна теней",
				description_override: "<h1>Использование <font color='#FBD600'>даёт постоянный эффект</font></h1> Когда героя атакуют, он с шансом в ${proc_chance}% выпустит мощный заряд, который передаётся от союзника к союзнику, излечивая их и нанося урон противникам неподалёку. Способность всегда лечит своего владельца.",
				notes_override:
				[
					"Лечит сначала героев, и уже потом крипов.",
					"Противник получит урон несколько раз, если излечить несколько существ вокруг него.",
				],
				ability_specials_override:
				[
					{
						ability_special: "proc_chance",
						text: "ШАНС СРАБАТЫВАНИЯ",
							percentage: true,
					},

					{
						ability_special: "cast_range",
						text: "ДАЛЬНОСТЬ",
					},

					{
						ability_special: "tooltip_max_targets_inc_dazzle",
						text: "МАКС. ЦЕЛЕЙ ЛЕЧЕНИЯ",
					},

					{
						ability_special: "damage_radius",
						text: "РАДИУС УРОНА",
					},

					{
						ability_special: "damage",
						text: "ЛЕЧЕНИЕ/УРОН",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "暗影波反射",
				description_override: "<h1>使用：<font color='#FBD600'>获得永久效果。</font></h1>每次受到攻击时有${proc_chance}%几率放出在友军身上跳跃的能量弧，对其治疗的同时对附近的所有单位造成伤害。自身总会受到暗影波的治疗效果。",
				notes_override:
				[
					"优先治疗友方英雄",
					"如果敌军附近有多个我方单位，那么他将受到多重暗影波的伤害。",
				],
				ability_specials_override:
				[
					{
						ability_special: "proc_chance",
						text: "触发几率：",
					},

					{
						ability_special: "cast_range",
						text: "距离：",
					},

					{
						ability_special: "tooltip_max_targets_inc_dazzle",
						text: "最大治疗目标数：",
					},

					{
						ability_special: "damage_radius",
						text: "伤害作用范围：",
					},

					{
						ability_special: "damage",
						text: "治疗/伤害：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_refresher_shard",
		name: "Refresher Shard",
		description: "<h1>Use: Reset Cooldowns</h1>Resets the cooldowns of all your items and abilities.",
		lore: "Across an epoch of endless battle, the Immortal's will to triumph never faltered.",
		notes:
		[
			"Refresher Shard is shareable.",
		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Scherbe der Erneuerung",
				description_override: "<h1>Benutzen: Abklingzeiten zurücksetzen</h1>Setzt alle Abklingzeiten Ihrer Gegenstände und Fähigkeiten zurück.",
				lore_override: "Auch nach einer Ära der unentwegten Kämpfe ist der Siegeswille der Unsterblichen ungebrochen.",
				notes_override:
				[
					"Scherben der Erneuerung können weitergegeben werden.",
				],
			},

			{
				language: Language.Russian,
				name_override: "Обновляющий осколок",
				description_override: "<h1>Использование: Reset Cooldowns</h1>Сбрасывает время перезарядки всех ваших предметов и способностей.",
				lore_override: "В эпоху нескончаемой битвы воля Бессмертного к победе не угасала ни на миг.",
				notes_override:
				[
					"Можно передавать союзникам.",
				],
			},

			{
				language: Language.SChinese,
				name_override: "刷新球碎片",
				description_override: "<h1>主动：完全重置</h1>重置所有物品和技能的冷却时间。",
				lore_override: "无尽之战时代的前前后后，不朽者的求胜之志始终从未动摇。",
				notes_override:
				[
					"刷新球碎片可以共享。",
				],
			},

		]
	});

	Abilities.push({
		ability_classname: "morty_hop",
		name: "Feed Cookie",
		description: "Feed Marty a cookie!  The longer you channel, the farther your jump goes!",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Keks verfüttern",
				description_override: "Füttern Sie Marty mit einem Keks! Je länger Sie kanalisieren, desto weiter geht Ihr Sprung!",
			},

			{
				language: Language.Russian,
				name_override: "Скормить печеньку",
				description_override: "Дайте Марти печеньку! Чем дольше подготовка, тем дальше вы прыгнете!",
			},

			{
				language: Language.SChinese,
				name_override: "喂食饼干",
				description_override: "给马迪喂一块饼干。持续施法的时间越长，能跳得也越快。",
			},

		]
	});

	Abilities.push({
		ability_classname: "aghsfort_luna_lucent_beam",
		name: "Lucent Beam",
		description: "Calls a beam of lunar energy down upon <font color='#70EA72'>enemies within ${radius} units of the target</font>, damaging and briefly stunning them.",
		lore: "Selemene smites those who encroach upon the Nightsilver Woods.",
		ability_specials:
		[
			{
				ability_special: "stun_duration",
				text: "STUN DURATION",
			},

			{
				ability_special: "beam_damage",
				text: "BEAM DAMAGE",
			},

			{
				ability_special: "radius",
				text: "<font color='#70EA72'>RADIUS:</font>",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Gleißender Strahl",
				description_override: "Luna lässt einen gebündelten Strahl aus Mondenergie auf <font color='#70EA72'>Gegner im Umkreis von ${radius} Einheiten um das Ziel</font> niederfahren, der den Zielen Schaden zufügt und sie kurz betäubt.",
				lore_override: "Selemene zerschmettert all jene, welche den Boden der Nachtsilberwälder beschmutzen.",
				ability_specials_override:
				[
					{
						ability_special: "stun_duration",
						text: "BETÄUBUNGSDAUER",
					},

					{
						ability_special: "beam_damage",
						text: "SCHADEN",
					},

					{
						ability_special: "radius",
						text: "<font color='#70EA72'>RADIUS:</font>",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Lucent Beam",
				description_override: "Направляет лучи лунной энергии на цель <font color='#70EA72'>и врагов в радиусе ${radius} от неё</font>, нанося урон и ненадолго оглушая их.",
				lore_override: "Селемине сражает тех, кто вторгается в Серебристый лес.",
				ability_specials_override:
				[
					{
						ability_special: "stun_duration",
						text: "ДЛИТЕЛЬНОСТЬ ОГЛУШЕНИЯ",
					},

					{
						ability_special: "beam_damage",
						text: "УРОН",
					},

					{
						ability_special: "radius",
						text: "<font color='#70EA72'>РАДИУС:</font>",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "月光",
				description_override: "召唤一道月能的光束打击<font color='#70EA72'>目标附近${radius}范围的敌人</font>，造成伤害并短暂眩晕目标。",
				lore_override: "那些侵犯银夜森林的家伙会受到赛莉蒙妮的毁灭打击。",
				ability_specials_override:
				[
					{
						ability_special: "stun_duration",
						text: "眩晕时间：",
					},

					{
						ability_special: "beam_damage",
						text: "月光伤害：",
					},

					{
						ability_special: "radius",
						text: "<font color='#70EA72'>作用范围：</font>",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "aghsfort_luna_eclipse",
		name: "Eclipse",
		description: "Allows Luna to cast Eclipse on an allied unit or herself and have its effects follow them, or cast it on an area. Also increases total beams and duration, removes the limit on beams per unit, and makes the beams appear twice as fast.",
		lore: "In times of great need, Selemene herself descends into the world, blocking out the light and hope of the opposed.",
		notes:
		[
			"Eclipse doesn't work if Luna doesn't have any points in Lucent Beam.",
			"Beams will stop if Luna is killed.",
			"Eclipse Lucent Beams do not stun.",
			"Will not hit invisible units.",
			"There is a .6 seconds gap between beams, .3 seconds with scepter.",
		],
		ability_specials:
		[
			{
				ability_special: "beams",
				text: "TOTAL BEAMS",
			},

			{
				ability_special: "hit_count",
				text: "MAX BEAMS PER UNIT",
			},

			{
				ability_special: "radius",
				text: "RADIUS",
			},

			{
				ability_special: "duration_tooltip",
				text: "ECLIPSE DURATION",
			},

			{
				ability_special: "beams_scepter",
				text: "SCEPTER TOTAL BEAMS",
			},

			{
				ability_special: "duration_tooltip_scepter",
				text: "SCEPTER DURATION",
			},

			{
				ability_special: "cast_range_tooltip_scepter",
				text: "SCEPTER CAST RANGE",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Eklipse",
				description_override: "Erlaubt es Luna, Eklipse auf eine verbündete Einheit, sich selbst oder ein Gebiet zu wirken. Erhöht außerdem die Dauer, die Anzahl der Strahlen, halbiert das Trefferintervall und entfernt das Trefferlimit pro Einheit.",
				lore_override: "In Zeiten großer Not steigt Selemene selbst in diese Welt hinab und und nimmt ihren Feinden alles Licht und Hoffnung.",
				notes_override:
				[
					"Eklipse verursacht keinen Schaden, wenn Luna keinen Punkt in Gleißender Strahl hat.",
					"Strahlen stoppen, wenn Luna stirbt.",
					"Gleißende Strahlen von Eklipse betäuben nicht.",
					"Unsichtbare Einheiten werden nicht getroffen.",
					"Das Intervall zwischen zwei Strahlen beträgt 0,6 Sekunden. Mit Aghanim's Scepter nur 0,3 Sekunden.",
				],
				ability_specials_override:
				[
					{
						ability_special: "beams",
						text: "STRAHLEN",
					},

					{
						ability_special: "hit_count",
						text: "MAX. TREFFER PRO EINHEIT",
					},

					{
						ability_special: "radius",
						text: "RADIUS",
					},

					{
						ability_special: "duration_tooltip",
						text: "DAUER",
					},

					{
						ability_special: "beams_scepter",
						text: "STRAHLEN (SCEPTER)",
					},

					{
						ability_special: "duration_tooltip_scepter",
						text: "DAUER (SCEPTER)",
					},

					{
						ability_special: "cast_range_tooltip_scepter",
						text: "ZAUBERREICHWEITE (SCEPTER)",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Eclipse",
				description_override: "Позволяет применять способность на область или любое союзное существо, чтобы она действовала вокруг него. Увеличивает число лучей и длительность способности, снимает ограничение на число срабатываний по одному существу и уменьшает интервал между ударами в два раза.",
				lore_override: "При особой необходимости Селемине сама нисходит в мир, затмевая свет и надежды противников.",
				notes_override:
				[
					"Не будет работать, если способность Lucent Beam не изучена.",
					"Действие способности прекратится при смерти её владельца.",
					"Лучи от этой способности не оглушают.",
					"Не бьёт по невидимым существам.",
					"Удары происходят с интервалом в 0,6 секунды (0,3 с Aghanim's Scepter).",
				],
				ability_specials_override:
				[
					{
						ability_special: "beams",
						text: "ВСЕГО ЛУЧЕЙ",
					},

					{
						ability_special: "hit_count",
						text: "МАКС. УДАРОВ ПО СУЩЕСТВУ",
					},

					{
						ability_special: "radius",
						text: "РАДИУС",
					},

					{
						ability_special: "duration_tooltip",
						text: "ДЛИТЕЛЬНОСТЬ",
					},

					{
						ability_special: "beams_scepter",
						text: "ВСЕГО ЛУЧЕЙ СО СКИПЕТРОМ",
					},

					{
						ability_special: "duration_tooltip_scepter",
						text: "ДЛИТЕЛЬНОСТЬ СО СКИПЕТРОМ",
					},

					{
						ability_special: "cast_range_tooltip_scepter",
						text: "ДАЛЬНОСТЬ ПРИМЕНЕНИЯ СО СКИПЕТРОМ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "月蚀",
				description_override: "露娜可以对友方单位或自身施放月蚀，使月蚀的效果跟随他，或者在一片区域上施放。同时增加月光数量，延长月蚀持续时间，并且移除单体打击次数上限，月光的产生间隔缩短一半。",
				lore_override: "在急需其帮助的时候，赛莉蒙妮亲自降临世间，遮蔽照向敌人的光芒，以及他们的希望。",
				notes_override:
				[
					"如果露娜没有升级月光，月蚀将无法造成伤害，但是变为黑夜效果有效。",
					"露娜阵亡后月光马上中止。",
					"月蚀不会造成眩晕。",
					"不能伤害隐身单位。",
					"每道月光之间都有0.6秒的间隔。神杖升级后间隔为0.3秒。",
				],
				ability_specials_override:
				[
					{
						ability_special: "beams",
						text: "月光数量：",
					},

					{
						ability_special: "hit_count",
						text: "最大单体打击次数：",
					},

					{
						ability_special: "radius",
						text: "作用范围：",
					},

					{
						ability_special: "duration_tooltip",
						text: "月蚀持续时间：",
					},

					{
						ability_special: "beams_scepter",
						text: "神杖升级月光数量：",
					},

					{
						ability_special: "duration_tooltip_scepter",
						text: "神杖升级持续时间：",
					},

					{
						ability_special: "cast_range_tooltip_scepter",
						text: "神杖升级施法距离：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "monkey_king_jingu_mastery_aghsfort",
		name: "Jingu Mastery",
		description: "<font color='#70EA72'>Active ability.</font> Monkey King gains four charged attacks that have bonus damage and lifesteal.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Jingumeister",
				description_override: "<font color='#70EA72'>Aktive Fähigkeit.</font> Die nächsten vier Angriffe verursachen Bonusschaden und rauben Leben.",
			},

			{
				language: Language.Russian,
				name_override: "Jingu Mastery",
				description_override: "<font color='#70EA72'>Активируемая способность.</font> Герой получает четыре заряженных атаки с вампиризмом и увеличенным уроном.",
			},

			{
				language: Language.SChinese,
				name_override: "如意棒法",
				description_override: "<font color='#70EA72'>主动技能。</font> 齐天大圣获得4次增强后的攻击，拥有额外攻击力和吸血效果。",
			},

		]
	});

	Abilities.push({
		ability_classname: "rock_golem_split_a",
		name: "Crumble",
		description: "The spirit from the golem is transferred into the pieces of his shattered body.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Bröckeln",
				description_override: "Der Geist des Golems geht in die Fragmente seines zertrümmerten Körpers über.",
			},

			{
				language: Language.Russian,
				name_override: "Crumble",
				description_override: "Дух голема переносится в куски его разрушенного тела.",
			},

			{
				language: Language.SChinese,
				name_override: "碎裂",
				description_override: "傀儡的灵魂转移至破裂身躯的碎片中。",
			},

		]
	});

	Abilities.push({
		ability_classname: "rock_golem_split_b",
		name: "Crumble",
		description: "The spirit from the golem is transferred into the pieces of his shattered body.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Bröckeln",
				description_override: "Der Geist des Golems geht in die Fragmente seines zertrümmerten Körpers über.",
			},

			{
				language: Language.Russian,
				name_override: "Crumble",
				description_override: "Дух голема переносится в куски его разрушенного тела.",
			},

			{
				language: Language.SChinese,
				name_override: "碎裂",
				description_override: "傀儡的灵魂转移至破裂身躯的碎片中。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_book_of_strength",
		name: "Book of Strength",
		description: "Consume to gain 3 Strength permanently.",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Livro de Força",
			},

			{
				language: Language.German,
				name_override: "Buch der Stärke",
				description_override: "Gewährt permanent 3 Bonusstärke.",
			},

			{
				language: Language.Russian,
				name_override: "Книга силы",
				description_override: "Использование прибавляет 3 единицы силы.",
			},

			{
				language: Language.SChinese,
				name_override: "力量之书",
				description_override: "消耗后永久获得3点力量。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_book_of_agility",
		name: "Book of Agility",
		description: "Consume to gain 3 Agility permanently.",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Livro de Agilidade",
			},

			{
				language: Language.German,
				name_override: "Buch der Agilität",
				description_override: "Gewährt permanent 3 Bonusagilität.",
			},

			{
				language: Language.Russian,
				name_override: "Книга ловкости",
				description_override: "Использование прибавляет 3 единицы ловкости.",
			},

			{
				language: Language.SChinese,
				name_override: "敏捷之书",
				description_override: "消耗后永久获得3点敏捷。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_book_of_intelligence",
		name: "Book of Intelligence",
		description: "Consume to gain 3 Intelligence permanently.",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Livro de Inteligência",
			},

			{
				language: Language.German,
				name_override: "Buch der Intelligenz",
				description_override: "Gewährt permanent 3 Bonusintelligenz.",
			},

			{
				language: Language.Russian,
				name_override: "Книга интеллекта",
				description_override: "Использование прибавляет 3 единицы интеллекта.",
			},

			{
				language: Language.SChinese,
				name_override: "智力之书",
				description_override: "消耗后永久获得3点智力。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_book_of_greater_strength",
		name: "Book of Fortitude",
		description: "Consume to gain 5 Strength permanently.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Buch der Tapferkeit",
				description_override: "Gewährt permanent 5 Bonusstärke.",
			},

			{
				language: Language.Russian,
				name_override: "Книга стойкости",
				description_override: "Использование прибавляет 5 единиц силы.",
			},

			{
				language: Language.SChinese,
				name_override: "刚毅之书",
				description_override: "消耗后永久获得5点力量。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_book_of_greater_agility",
		name: "Book of Celerity",
		description: "Consume to gain 5 Agility permanently.",
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Livro de Celeridade",
			},

			{
				language: Language.German,
				name_override: "Buch der Rasanz",
				description_override: "Gewährt permanent 5 Bonusagilität.",
			},

			{
				language: Language.Russian,
				name_override: "Книга проворства",
				description_override: "Использование прибавляет 5 единиц ловкости.",
			},

			{
				language: Language.SChinese,
				name_override: "迅捷之书",
				description_override: "消耗后永久获得5点敏捷。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_book_of_greater_intelligence",
		name: "Book of Insight",
		description: "Consume to gain 5 Intelligence permanently.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Buch der Einsicht",
				description_override: "Gewährt permanent 5 Bonusintelligenz.",
			},

			{
				language: Language.Russian,
				name_override: "Книга озарения",
				description_override: "Использование прибавляет 5 единиц интеллекта.",
			},

			{
				language: Language.SChinese,
				name_override: "洞察之书",
				description_override: "消耗后永久获得5点智力。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_creed_of_omniscience",
		name: "Creed of Omniscience",
		description: "<h1>Passive: Study</h1>Grants bonus experience.\\n",
		lore: "The Omniscience honors me!",
		ability_specials:
		[
			{
				ability_special: "bonus_xp",
				text: "BONUS XP",
				percentage: true,
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Wappen des Allwissenden",
				description_override: "<h1>Passiv: Studieren</h1>Gewährt Bonuserfahrung.\\n",
				lore_override: "Der Allwissende ehrt mich!",
				ability_specials_override:
				[
					{
						ability_special: "bonus_xp",
						text: "BONUS-EP",
							percentage: true,
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Creed of Omniscience",
				description_override: "<h1>Пассивная: Study</h1>Даёт бонусный опыт.\\n",
				lore_override: "Всезнание удостоило меня своим присутствием!",
				ability_specials_override:
				[
					{
						ability_special: "bonus_xp",
						text: "ДОП. ОПЫТ",
							percentage: true,
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "全能信条",
				description_override: "<h1>被动：研习</h1>获得额外经验。\\n",
				lore_override: "全能之神赐我荣耀！",
				ability_specials_override:
				[
					{
						ability_special: "bonus_xp",
						text: "额外经验",
							percentage: true,
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_oblivions_locket",
		name: "Oblivion's Locket",
		description: "<h1>Active: Spook</h1>CHANNELLED - Become ethereal, immune to physical but taking ${extra_spell_damage_percent}% extra magic damage for up to 1 second.\\n",
		lore: "A skeleton's charm. Used to prevent having a bad time.",
		ability_specials:
		[
			{
				ability_special: "bonus_all_stats",
				text: "BONUS ALL STATS",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Oblivions Medaillon",
				description_override: "<h1>Aktiv: Geist</h1>KANALISIEREND – Ätherische Form. Sie werden immun gegenüber physischen Angriffen, erleiden jedoch ${extra_spell_damage_percent} %% zusätzlichen Magieschaden für bis zu 1 Sekunde.\\n",
				lore_override: "Amulett eines Skeletts. Hat Schlechtes vom Träger abgewendet.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_all_stats",
						text: "BONUS AUF ALLE ATTRIBUTE",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Oblivion's Locket",
				description_override: "<h1>Активная: Spook</h1>ПРЕРЫВАЕМАЯ — на 1 секунду придаёт герою призрачную форму, в которой он защищён от физического урона, но получает на ${extra_spell_damage_percent}% больше магического урона.\\n",
				lore_override: "Амулет скелета. Для тех, кто не хочет неприятностей.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_all_stats",
						text: "УВЕЛИЧЕНИЕ ВСЕХ АТРИБУТОВ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "湮灭挂件",
				description_override: "<h1>主动：闹鬼</h1>持续施法 - 变成虚无状态，对物理伤害免疫，但承受${extra_spell_damage_percent}%额外魔法伤害，最多持续1秒。\\n",
				lore_override: "一具骷髅的护符。用来防止日子难过。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_all_stats",
						text: "全属性加成：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_pelt_of_the_old_wolf",
		name: "Pelt of the Old Wolf",
		lore: "The wild can be a treachorous place; don't let your guard down.",
		ability_specials:
		[
			{
				ability_special: "bonus_armor",
				text: "BONUS ARMOR",
			},

			{
				ability_special: "bonus_move_speed",
				text: "BONUS MOVE SPEED",
			},

			{
				ability_special: "bonus_evasion",
				text: "BONUS EVASION",
				percentage: true,
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Fell des alten Wolfs",
				lore_override: "Die Wildnis kann ein trügerischer Ort sein, bleibt wachsam.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_armor",
						text: "BONUSRÜSTUNG",
					},

					{
						ability_special: "bonus_move_speed",
						text: "BONUSBEWEGUNGSTEMPO",
					},

					{
						ability_special: "bonus_evasion",
						text: "BONUSAUSWEICHCHANCE",
							percentage: true,
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Pelt of the Old Wolf",
				lore_override: "Пустошь может быть крайне коварна; будьте настороже.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_armor",
						text: "ДОП. БРОНЯ",
					},

					{
						ability_special: "bonus_move_speed",
						text: "ДОП. СКОРОСТЬ ПЕРЕДВИЖЕНИЯ",
					},

					{
						ability_special: "bonus_evasion",
						text: "ДОП. УКЛОНЕНИЕ",
							percentage: true,
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "暮狼毛皮",
				lore_override: "野外充满着勾心斗角；别放松警惕。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_armor",
						text: "护甲加成：",
					},

					{
						ability_special: "bonus_move_speed",
						text: "移动速度加成：",
					},

					{
						ability_special: "bonus_evasion",
						text: "额外闪避",
							percentage: true,
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_paw_of_lucius",
		name: "Paw of Lucius",
		description: "<h1>Passive: Sharp Claws</h1>Attacks have a ${rupture_chance}% chance to inflict Rupture.\\n",
		lore: "This claw cuts deep.",
		ability_specials:
		[
			{
				ability_special: "bonus_strength",
				text: "BONUS STRENGTH",
			},

			{
				ability_special: "bonus_attack_speed",
				text: "BONUS ATTACK SPEED",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Lucius' Pfote",
				description_override: "<h1>Passiv: Scharfe Klauen</h1>Angriffe haben eine ${rupture_chance}%ige Chance, Gegner mit Rupture zu belegen.\\n\\n",
				lore_override: "Die Klaue schneidet tief.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "BONUSSTÄRKE",
					},

					{
						ability_special: "bonus_attack_speed",
						text: "BONUSANGRIFFSTEMPO",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Paw of Lucius",
				description_override: "<h1>Пассивная: Sharp Claws</h1>Атаки с вероятностью в ${rupture_chance}% накладывают эффект способности Rupture.\\n",
				lore_override: "Эти когти оставляют глубокие раны.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "ДОП. СИЛА",
					},

					{
						ability_special: "bonus_attack_speed",
						text: "ДОП. СКОРОСТЬ АТАКИ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "卢修兕之爪",
				description_override: "<h1>被动：利爪</h1>普通攻击有${rupture_chance}%几率触发割裂。\\n",
				lore_override: "这一爪会深深插入。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "力量加成：",
					},

					{
						ability_special: "bonus_attack_speed",
						text: "攻击速度加成：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_longclaws_amulet",
		name: "Longclaw's Amulet",
		lore: "Magic is somewhat uncommon in the Weald, its secrets closely guarded.",
		ability_specials:
		[
			{
				ability_special: "spell_lifesteal_pct",
				text: "SPELL LIFESTEAL",
				percentage: true,
			},

			{
				ability_special: "cooldown_reduction_pct",
				text: "COOLDOWN REDUCTION",
				percentage: true,
			},

			{
				ability_special: "mana_cost_reduction_pct",
				text: "MANA COST REDUCTION",
				percentage: true,
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Amulett der Langklaue",
				lore_override: "Magie ist etwas Ungewöhnliches im Wald und ihre Geheimnisse werden streng bewacht.",
				ability_specials_override:
				[
					{
						ability_special: "spell_lifesteal_pct",
						text: "ZAUBERLEBENSRAUB",
							percentage: true,
					},

					{
						ability_special: "cooldown_reduction_pct",
						text: "ABKLINGZEITREDUZIERUNG",
							percentage: true,
					},

					{
						ability_special: "mana_cost_reduction_pct",
						text: "MANAKOSTENREDUZIERUNG",
							percentage: true,
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Longclaw's Amulet",
				lore_override: "В пустоши магия не распространена, и тайны её надёжно оберегаются.",
				ability_specials_override:
				[
					{
						ability_special: "spell_lifesteal_pct",
						text: "ВАМПИРИЗМ ЗАКЛИНАНИЯМИ",
							percentage: true,
					},

					{
						ability_special: "cooldown_reduction_pct",
						text: "УМЕНЬШЕНИЕ ПЕРЕЗАРЯДКИ",
							percentage: true,
					},

					{
						ability_special: "mana_cost_reduction_pct",
						text: "УМЕНЬШЕНИЕ РАСХОДА МАНЫ",
							percentage: true,
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "长爪护符",
				lore_override: "在维尔德，魔法有点不寻常，它的秘密正被严密守护。",
				ability_specials_override:
				[
					{
						ability_special: "spell_lifesteal_pct",
						text: "技能吸血",
							percentage: true,
					},

					{
						ability_special: "cooldown_reduction_pct",
						text: "冷却时间减少",
							percentage: true,
					},

					{
						ability_special: "mana_cost_reduction_pct",
						text: "魔法消耗降低",
							percentage: true,
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_bogduggs_cudgel",
		name: "Bogdugg's Cudgel",
		description: "<h1>Passive: Smash</h1>MELEE ONLY - All attack speed is halved, but attacks deal splash damage in a ${damage_radius} area around the target and stun for ${stun_duration} second.\\n",
		lore: "Bogdugg came to lord over Bonemeal Ridge by carrying the biggest stick.",
		ability_specials:
		[
			{
				ability_special: "bonus_strength",
				text: "BONUS STRENGTH",
			},

			{
				ability_special: "bonus_damage",
				text: "BONUS DAMAGE",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Bogduggs Knüppel",
				description_override: "<h1>Passiv: Smash</h1>NUR NAHKAMPF – Angriffstempo wird halbiert, aber Angriffe verursachen Flächenschaden in einem Radius von ${damage_radius} Einheiten um das Ziel herum und betäuben für ${stun_duration} Sekunde.\\n",
				lore_override: "Bogdugg wurde zum Chef des Knochenmehlkamms, weil er den längsten Knüppel hatte.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "BONUSSTÄRKE",
					},

					{
						ability_special: "bonus_damage",
						text: "BONUSSCHADEN",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Bogdugg's Cudgel",
				description_override: "<h1>Пассивная: Smash</h1>ТОЛЬКО БЛИЖНИЙ БОЙ — скорость атаки уменьшена вдвое, но каждый удар наносит урон по площади радиусом ${damage_radius} вокруг цели и оглушает на ${stun_duration} сек.\\n",
				lore_override: "Богдагг подчинил Костяной хребет лишь потому, что его дубина была больше.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "ДОП. СИЛА",
					},

					{
						ability_special: "bonus_damage",
						text: "ДОП. УРОН",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "波格达格的巨棍",
				description_override: "<h1>被动：粉碎</h1>仅近战 - 所有攻击速度减半，但是攻击在目标${damage_radius}范围内造成溅射伤害，并且眩晕${stun_duration}秒。\\n",
				lore_override: "波格达格提着最大的棍子来骨末山脊称王。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "力量加成：",
					},

					{
						ability_special: "bonus_damage",
						text: "攻击力加成：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_bogduggs_baldric",
		name: "Bogdugg's Baldric",
		lore: "Running's not as fun as hitting.  Not one bit.",
		ability_specials:
		[
			{
				ability_special: "bonus_armor",
				text: "BONUS ARMOR",
			},

			{
				ability_special: "disable_resist_pct",
				text: "STUN DURATION REDUCTION",
				percentage: true,
			},

			{
				ability_special: "move_speed_penalty",
				text: "MOVE SPEED REDUCTION",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Bogduggs Bandelier",
				lore_override: "Laufen macht nicht so viel Spaß wie Schlagen. Lange nicht so viel.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_armor",
						text: "BONUSRÜSTUNG",
					},

					{
						ability_special: "disable_resist_pct",
						text: "BETÄUBUNGSDAUERREDUZIERUNG",
							percentage: true,
					},

					{
						ability_special: "move_speed_penalty",
						text: "BEWEGUNGSTEMPOREDUZIERUNG",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Bogdugg's Baldric",
				lore_override: "Бегать очень скучно... Ага, подраться бы!",
				ability_specials_override:
				[
					{
						ability_special: "bonus_armor",
						text: "ДОП. БРОНЯ",
					},

					{
						ability_special: "disable_resist_pct",
						text: "УМЕНЬШЕНИЕ ДЛИТЕЛЬНОСТИ ОГЛУШЕНИЙ",
							percentage: true,
					},

					{
						ability_special: "move_speed_penalty",
						text: "УМЕНЬШЕНИЕ СКОРОСТИ ПЕРЕДВИЖЕНИЯ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "波格达格的肩带",
				lore_override: "跑来跑去可没有打人爽。太无聊了。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_armor",
						text: "护甲加成：",
					},

					{
						ability_special: "disable_resist_pct",
						text: "眩晕时间减少",
							percentage: true,
					},

					{
						ability_special: "move_speed_penalty",
						text: "移动速度减少：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_bogduggs_lucky_femur",
		name: "Bogdugg's Lucky Femur",
		description: "<h1>Passive: Skillshot</h1>After an ability is cast, it has a ${refresh_pct}% chance to be immediately refreshed, and Lucky Femur is placed on cooldown for the duration of cooldown of the refreshed ability.\\n",
		lore: "And another!",
		ability_specials:
		[
			{
				ability_special: "max_mana_penalty",
				text: "MAX MANA REDUCTION",
			},

			{
				ability_special: "intelligence_penalty",
				text: "INTELLIGENCE REDUCTION",
			},

			{
				ability_special: "mana_regen_sec",
				text: "BONUS MANA REGEN",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Bogduggs Glücksknochen",
				description_override: "<h1>Passiv: Gekonnt</h1>Nachdem eine Fähigkeit eingesetzt wurde, hat diese eine ${refresh_pct}%ige Chance sofort wieder zur Verfügung zu stehen. Der Glücksknochen kann für die Dauer der Abklingzeit der zurückgesetzten Fähigkeit nicht erneut ausgelöst werden.\\n",
				lore_override: "Und noch einer!",
				ability_specials_override:
				[
					{
						ability_special: "max_mana_penalty",
						text: "MAX. MANAREDUZIERUNG",
					},

					{
						ability_special: "intelligence_penalty",
						text: "INTELLIGENZREDUZIERUNG",
					},

					{
						ability_special: "mana_regen_sec",
						text: "BONUSMANAREGENERATION",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Bogdugg's Lucky Femur",
				description_override: "<h1>Пассивная: Skillshot</h1>Когда герой применяет способность, она может мгновенно перезарядиться с шансом в ${refresh_pct}%, но этот предмет уйдёт на перезарядку, равную перезарядке применённой способности.\\n",
				lore_override: "Эх, раз, да ещё раз!",
				ability_specials_override:
				[
					{
						ability_special: "max_mana_penalty",
						text: "УМЕНЬШЕНИЕ ЗАПАСА МАНЫ",
					},

					{
						ability_special: "intelligence_penalty",
						text: "УМЕНЬШЕНИЕ ИНТЕЛЛЕКТА",
					},

					{
						ability_special: "mana_regen_sec",
						text: "ДОП. ВОССТАНОВЛЕНИЕ МАНЫ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "波格达格的幸运股骨",
				description_override: "<h1>被动：好运连连</h1>在施放一个技能后，有${refresh_pct}%的几率马上刷新该技能，被刷新的技能进入冷却后，幸运股骨也将进入冷却时间。\\n",
				lore_override: "再来一次！",
				ability_specials_override:
				[
					{
						ability_special: "max_mana_penalty",
						text: "最大魔法值降低：",
					},

					{
						ability_special: "intelligence_penalty",
						text: "智力减少：",
					},

					{
						ability_special: "mana_regen_sec",
						text: "额外魔法恢复：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_sign_of_the_arachnid",
		name: "Sign of the Arachnid",
		description: "<h1>Passive: Arachnid Aura</h1>Allies gain bonus movement and attack speed.",
		lore: "An ominous mark bestowed upon followers of the Silken Path.",
		ability_specials:
		[
			{
				ability_special: "bonus_agility",
				text: "BONUS AGILITY",
			},

			{
				ability_special: "bonus_move_speed_pct",
				text: "AURA BONUS MOVE SPEED",
				percentage: true,
			},

			{
				ability_special: "attack_speed",
				text: "AURA BONUS ATTACK SPEED",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Zeichen der Arachnida",
				description_override: "<h1>Passiv: Spinnenaura</h1>Verbündete erhalten Bewegungs- und Angriffstempo.",
				lore_override: "Ein unheimliches Zeichen, welches den Anhängern des Seidenen Wegs verliehen wird.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_agility",
						text: "BONUSAGILITÄT",
					},

					{
						ability_special: "bonus_move_speed_pct",
						text: "BONUSBEWEGUNGSTEMPO (AURA)",
							percentage: true,
					},

					{
						ability_special: "attack_speed",
						text: "BONUSANGRIFFSTEMPO (AURA)",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Sign of the Arachnid",
				description_override: "<h1>Пассивная: Arachnid Aura</h1>Повышает скорость передвижения и атаки союзников.",
				lore_override: "Зловещее клеймо последователей Шёлкового пути.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_agility",
						text: "ДОП. ЛОВКОСТЬ",
					},

					{
						ability_special: "bonus_move_speed_pct",
						text: "ДОП. СКОРОСТЬ ПЕРЕДВИЖЕНИЯ ОТ АУРЫ",
							percentage: true,
					},

					{
						ability_special: "attack_speed",
						text: "ДОП. СКОРОСТЬ АТАКИ ОТ АУРЫ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "蛛形印记",
				description_override: "<h1>被动：蛛形光环</h1>友军获得额外移动速度和攻击速度。",
				lore_override: "一个授予蛛丝之路追随者的不祥标志。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_agility",
						text: "敏捷加成：",
					},

					{
						ability_special: "bonus_move_speed_pct",
						text: "光环移动速度加成",
							percentage: true,
					},

					{
						ability_special: "attack_speed",
						text: "光环攻击速度加成：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_unhallowed_icon",
		name: "Unhallowed Icon",
		description: "<h1>Passive: Bloodbond Aura</h1>Allies gain bonus health regeneration. When any unit affected by Unhallowed Icon attacks, ${lifesteal_pct}% of the damage dealt is stolen as life and distributed among all affected by the aura.",
		lore: "An Icon borne by the protected of the underworld.",
		ability_specials:
		[
			{
				ability_special: "bonus_strength",
				text: "BONUS STRENGTH",
			},

			{
				ability_special: "lifesteal_pct",
				text: "AURA LINKED LIFESTEAL",
				percentage: true,
			},

			{
				ability_special: "hp_regen",
				text: "AURA HP REGEN",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Unheiliges Zeichen",
				description_override: "<h1>Passiv: Blutpaktaura</h1>Verbündete erhalten einen Lebensregenerationsbonus. Wenn eine Einheit unter dem Einfluss des Unheiligen Zeichens angreift, werden ${lifesteal_pct} %% des Schadens als Lebenspunkte geraubt und auf alle, die unter dem Einfluss der Aura stehen, verteilt.",
				lore_override: "Getragen von den Beschützten der Unterwelt.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "BONUSSTÄRKE",
					},

					{
						ability_special: "lifesteal_pct",
						text: "LEBENSRAUB (AURA)",
							percentage: true,
					},

					{
						ability_special: "hp_regen",
						text: "LP-REGENERATION (AURA)",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Unhallowed Icon",
				description_override: "<h1>Пассивная: Bloodbond Aura</h1>Увеличивает восстановление здоровья союзников. Когда любое существо под эффектом этого предмета атакует, ${lifesteal_pct}% от нанесённого урона переходит в здоровье и распределяется между всеми существами в ауре.",
				lore_override: "Метка тех, на чьей защите стоит загробный мир.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "ДОП. СИЛА",
					},

					{
						ability_special: "lifesteal_pct",
						text: "ОБЩИЙ ВАМПИРИЗМ ОТ АУРЫ",
							percentage: true,
					},

					{
						ability_special: "hp_regen",
						text: "ВОССТАНОВЛЕНИЕ ЗДОРОВЬЯ ОТ АУРЫ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "不洁之像",
				description_override: "<h1>被动：血缘光环</h1>友军获得额外的生命恢复速率。攻击任何单位后，造成伤害的${lifesteal_pct}%将会变成吸取的生命值均摊给光环作用下的所有单位。",
				lore_override: "由地下世界的守护者佩戴的画像。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "力量加成：",
					},

					{
						ability_special: "lifesteal_pct",
						text: "光环均摊吸血",
							percentage: true,
					},

					{
						ability_special: "hp_regen",
						text: "光环生命恢复：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_preserved_skull",
		name: "Preserved Skull",
		description: "<h1>Passive: Conjuration Aura</h1>Allies gain bonus mana regen and cooldown reduction.",
		lore: "Where be your gibes now?",
		ability_specials:
		[
			{
				ability_special: "bonus_intelligence",
				text: "BONUS INTELLIGENCE",
			},

			{
				ability_special: "cooldown_reduction_pct",
				text: "AURA COOLDOWN REDUCTION",
				percentage: true,
			},

			{
				ability_special: "aura_mana_regen",
				text: "AURA MANA REGEN",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Konservierter Schädel",
				description_override: "<h1>Passiv: Beschwöreraura</h1>Verbündete erhalten Manaregeneration und Abklingzeitreduzierung.",
				lore_override: "Wo sind nun deine Schwänke?",
				ability_specials_override:
				[
					{
						ability_special: "bonus_intelligence",
						text: "BONUSINTELLIGENZ",
					},

					{
						ability_special: "cooldown_reduction_pct",
						text: "ABKLINGZEITREDUZIERUNG (AURA)",
							percentage: true,
					},

					{
						ability_special: "aura_mana_regen",
						text: "MANAREGENERATION (AURA)",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Preserved Skull",
				description_override: "<h1>Пассивная: Conjuration Aura</h1>Увеличивает восстановление маны союзников и уменьшает перезарядку их заклинаний.",
				lore_override: "Где теперь твои шутки, твои ужимки?",
				ability_specials_override:
				[
					{
						ability_special: "bonus_intelligence",
						text: "ДОП. ИНТЕЛЛЕКТ",
					},

					{
						ability_special: "cooldown_reduction_pct",
						text: "УМЕНЬШЕНИЕ ПЕРЕЗАРЯДКИ В АУРЕ",
							percentage: true,
					},

					{
						ability_special: "aura_mana_regen",
						text: "ВОССТАНОВЛЕНИЕ МАНЫ ОТ АУРЫ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "坚韧之颅",
				description_override: "<h1>被动：祈灵光环</h1>友军获得额外的魔法恢复速率和冷却时间减少。",
				lore_override: "你再嘲笑啊？",
				ability_specials_override:
				[
					{
						ability_special: "bonus_intelligence",
						text: "智力加成：",
					},

					{
						ability_special: "cooldown_reduction_pct",
						text: "光环冷却时间减少",
							percentage: true,
					},

					{
						ability_special: "aura_mana_regen",
						text: "光环魔法恢复：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_treads_of_ermacor",
		name: "Treads of Ermacor",
		description: "Flat movement speed bonuses from multiple pairs of boots do not stack.",
		lore: "With the Pathfinder's blessing, we shall find a way.",
		ability_specials:
		[
			{
				ability_special: "bonus_movement_speed",
				text: "BONUS MOVEMENT SPEED",
			},

			{
				ability_special: "bonus_attack_speed",
				text: "BONUS ATTACK SPEED",
			},

			{
				ability_special: "bonus_all_stats",
				text: "BONUS ALL STATS",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Ermacors Treter",
				description_override: "Absolute Bewegungstempoboni mehrerer Schuhpaare werden nicht aufsummiert.",
				lore_override: "Mit dem Segen des Pfadfinders können wir einen Weg finden.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_movement_speed",
						text: "BONUSBEWEGUNGSTEMPO",
					},

					{
						ability_special: "bonus_attack_speed",
						text: "BONUSANGRIFFSTEMPO",
					},

					{
						ability_special: "bonus_all_stats",
						text: "BONUS AUF ALLE ATTRIBUTE",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Treads of Ermacor",
				description_override: "Основные бонусы к скорости передвижения от нескольких пар ботинок не складываются.",
				lore_override: "Благословение первопроходца укажет нам путь.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_movement_speed",
						text: "ДОП. СКОРОСТЬ ПЕРЕДВИЖЕНИЯ",
					},

					{
						ability_special: "bonus_attack_speed",
						text: "ДОП. СКОРОСТЬ АТАКИ",
					},

					{
						ability_special: "bonus_all_stats",
						text: "УВЕЛИЧЕНИЕ ВСЕХ АТРИБУТОВ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "艾莫克之鞋",
				description_override: "多个鞋类物品提供的移动速度加成不叠加。",
				lore_override: "获得额外魔法恢复速率和冷却时间减少。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_movement_speed",
						text: "移动速度加成：",
					},

					{
						ability_special: "bonus_attack_speed",
						text: "攻击速度加成：",
					},

					{
						ability_special: "bonus_all_stats",
						text: "全属性加成：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_rhyziks_eye",
		name: "Rhyzik's Eye",
		lore: "There is power in the eye of the Corruptor.",
		ability_specials:
		[
			{
				ability_special: "bonus_all_stats",
				text: "BONUS ALL STATS",
			},

			{
				ability_special: "bonus_damage_pct",
				text: "BONUS DAMAGE",
				percentage: true,
			},

			{
				ability_special: "damage_reduction",
				text: "INCOMING DAMAGE REDUCTION",
				percentage: true,
			},

			{
				ability_special: "mana_regen_sec",
				text: "BONUS MANA REGEN",
			},

			{
				ability_special: "hp_regen_sec",
				text: "BONUS HP REGEN",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Rhyziks Auge",
				lore_override: "Im Auge des Schänders steckt große Macht.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_all_stats",
						text: "BONUS AUF ALLE ATTRIBUTE",
					},

					{
						ability_special: "bonus_damage_pct",
						text: "BONUSSCHADEN",
							percentage: true,
					},

					{
						ability_special: "damage_reduction",
						text: "SCHADENRESISTENZ",
							percentage: true,
					},

					{
						ability_special: "mana_regen_sec",
						text: "BONUSMANAREGENERATION",
					},

					{
						ability_special: "hp_regen_sec",
						text: "BONUSLEBENSREGENERATION",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Rhyzik's Eye",
				lore_override: "В глазу Осквернителя видится мощь.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_all_stats",
						text: "УВЕЛИЧЕНИЕ ВСЕХ АТРИБУТОВ",
					},

					{
						ability_special: "bonus_damage_pct",
						text: "ДОПОЛНИТЕЛЬНЫЙ УРОН",
							percentage: true,
					},

					{
						ability_special: "damage_reduction",
						text: "СНИЖЕНИЕ ПОЛУЧАЕМОГО УРОНА",
							percentage: true,
					},

					{
						ability_special: "mana_regen_sec",
						text: "ДОП. ВОССТАНОВЛЕНИЕ МАНЫ",
					},

					{
						ability_special: "hp_regen_sec",
						text: "ДОП. ВОССТАНОВЛЕНИЕ ЗДОРОВЬЯ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "莱兹克之眼",
				lore_override: "腐化者的眼中存在着力量。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_all_stats",
						text: "全属性加成：",
					},

					{
						ability_special: "bonus_damage_pct",
						text: "攻击力加成",
							percentage: true,
					},

					{
						ability_special: "damage_reduction",
						text: "受到伤害降低",
							percentage: true,
					},

					{
						ability_special: "mana_regen_sec",
						text: "额外魔法恢复：",
					},

					{
						ability_special: "hp_regen_sec",
						text: "额外生命恢复：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_guardian_shell",
		name: "Guardian Shell",
		description: "<h1>Passive: Unwavering</h1>Movement Speed cannot be slowed and wearer cannot be rooted.",
		lore: "Push ever onward, unburdened by mortal cares.",
		ability_specials:
		[
			{
				ability_special: "bonus_armor",
				text: "BONUS ARMOR",
			},

			{
				ability_special: "magic_resistance",
				text: "BONUS MAGIC RESISTANCE",
				percentage: true,
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schützende Hülle",
				description_override: "<h1>Passiv: Unbeirrt</h1>Bewegungstempo des Trägers kann nicht verlangsamt und er kann nicht festgesetzt werden.",
				lore_override: "Schreite stets voran, ohne die sterblichen Ängste.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_armor",
						text: "BONUSRÜSTUNG",
					},

					{
						ability_special: "magic_resistance",
						text: "BONUSMAGIERESISTENZ",
							percentage: true,
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Guardian Shell",
				description_override: "<h1>Пассивная: Unwavering</h1>Владельца нельзя замедлить, и на него не действует оцепенение.",
				lore_override: "Да не остановят вас заботы смертных.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_armor",
						text: "ДОП. БРОНЯ",
					},

					{
						ability_special: "magic_resistance",
						text: "ДОП. СОПРОТИВЛЕНИЕ МАГИИ",
							percentage: true,
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "卫士之壳",
				description_override: "<h1>被动：坚定不移</h1>不受减速和缠绕效果影响。",
				lore_override: "一往无前，没有尘世的牵挂。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_armor",
						text: "护甲加成：",
					},

					{
						ability_special: "magic_resistance",
						text: "魔法抗性加成",
							percentage: true,
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_watchers_gaze",
		name: "Watcher's Gaze",
		description: "<h1>Active: Stone Gaze</h1>Enemies within your frontal cone are turned to stone and take additional physical damage.\\n",
		lore: "Look upon thine enemies and see them petrify before you.",
		ability_specials:
		[
			{
				ability_special: "bonus_stats",
				text: "BONUS ALL STATS",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Blick des Wächters",
				description_override: "<h1>Aktiv: Versteinernder Blick</h1>Gegner in Ihrem Sichtfeld werden zu Stein und erleiden so zusätzlichen physischen Schaden.\\n",
				lore_override: "Schaut in eure Gegner und seht, wie sie vor euch zu Stein werden.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_stats",
						text: "BONUS AUF ALLE ATTRIBUTE",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Watcher's Gaze",
				description_override: "<h1>Активная: Stone Gaze</h1>Враги перед героем обращаются в камень и получают дополнительный физический урон.\\n",
				lore_override: "Взгляни же на врагов своих; вот они обращаются в камень.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_stats",
						text: "УВЕЛИЧЕНИЕ ВСЕХ АТРИБУТОВ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "守卫之眼",
				description_override: "<h1>主动：石化凝视</h1>前方锥形区域内的敌人将变成石头，并承受额外的物理伤害。\\n",
				lore_override: "看着你的敌人，亲见他们在你面前石化。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_stats",
						text: "全属性加成：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_carapace_of_qaldin",
		name: "Carapace of Qaldin",
		description: "<h1>Passive: Acidic Regeneration</h1>All mana and health gained are doubled, and a percentage of all damage taken is reflected back upon the attacker.\\n",
		lore: "Let them attack you, for each blow comes at a blood price.",
		ability_specials:
		[
			{
				ability_special: "bonus_hp",
				text: "BONUS HP",
			},

			{
				ability_special: "bonus_mana",
				text: "BONUS MANA",
			},

			{
				ability_special: "bonus_restore_pct",
				text: "BONUS RESTORE",
				percentage: true,
			},

			{
				ability_special: "damage_return_pct",
				text: "DAMAGE RETURNED",
				percentage: true,
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Qaldins Panzer",
				description_override: "<h1>Passiv: Saure Regeneration</h1> Jegliche Mana- und Lebensregeneration wird verdoppelt und ein Prozentsatz des erlittenen Schadens wird auf den Angreifer reflektiert.\\n",
				lore_override: "Lasst sie euch angreifen, da jeder Treffer mit einem Blutzoll bezahlt wird.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_hp",
						text: "BONUS-LP",
					},

					{
						ability_special: "bonus_mana",
						text: "BONUSMANA",
					},

					{
						ability_special: "bonus_restore_pct",
						text: "BONUSWIEDERHERSTELLUNG",
							percentage: true,
					},

					{
						ability_special: "damage_return_pct",
						text: "ZURÜCKGEWORFENER SCHADEN",
							percentage: true,
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Carapace of Qaldin",
				description_override: "<h1>Пассивная: Acidic Regeneration</h1>Восстановление здоровья и маны увеличено вдвое, а часть получаемого урона отражается в нападающего.\\n",
				lore_override: "Откройся их ударам, ибо за каждый из них они заплатят своей кровью.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_hp",
						text: "ДОП. ЗДОРОВЬЕ",
					},

					{
						ability_special: "bonus_mana",
						text: "ДОП. МАНА",
					},

					{
						ability_special: "bonus_restore_pct",
						text: "ДОП. ВОССТАНОВЛЕНИЕ",
							percentage: true,
					},

					{
						ability_special: "damage_return_pct",
						text: "ОТРАЖЕНИЕ УРОНА",
							percentage: true,
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "卡尔丁甲壳",
				description_override: "<h1>被动：酸性恢复</h1>所有获得的魔法和生命恢复效果加倍，而且所有受到的伤害会有一部分反弹给攻击者。\\n",
				lore_override: "让他们攻击，每次都会有鲜血的代价。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_hp",
						text: "生命加成：",
					},

					{
						ability_special: "bonus_mana",
						text: "额外魔法：",
					},

					{
						ability_special: "bonus_restore_pct",
						text: "额外回复",
							percentage: true,
					},

					{
						ability_special: "damage_return_pct",
						text: "反弹伤害",
							percentage: true,
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_the_caustic_finale",
		name: "The Caustic Finale",
		description: "<h1>Passive: Caustic Finale</h1>Attacks reduce a percentage of the target's armor.  This effect stacks up to ${max_stack_count} times.  If the target dies under this effect, it explodes, dealing damage in an area of effect.\\n",
		lore: "The caustic gift is always paid forward.",
		ability_specials:
		[
			{
				ability_special: "bonus_damage",
				text: "BONUS DAMAGE",
			},

			{
				ability_special: "bonus_attack_speed",
				text: "BONUS ATTACK SPEED",
			},

			{
				ability_special: "caustic_armor_reduction_pct",
				text: "ARMOR REDUCTION PER STACK",
				percentage: true,
			},

			{
				ability_special: "caustic_radius",
				text: "CAUSTIC RADIUS",
			},

			{
				ability_special: "caustic_damage",
				text: "CAUSTIC DAMAGE",
			},

			{
				ability_special: "max_stack_count",
				text: "MAX STACK COUNT",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Ätzendes Finale",
				description_override: "<h1>Passiv: Ätzendes Finale</h1>Angriffe reduzieren die Rüstung des Ziels prozentual. Dieser Effekt summiert sich bis zu ${max_stack_count}-mal auf. Wenn eine betroffene Einheit stirbt, explodiert sie und verursacht Flächenschaden.\\n",
				lore_override: "Das Geschenk der Kali wird immer im Voraus bezahlt.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_damage",
						text: "BONUSSCHADEN",
					},

					{
						ability_special: "bonus_attack_speed",
						text: "BONUSANGRIFFSTEMPO",
					},

					{
						ability_special: "caustic_armor_reduction_pct",
						text: "RÜSTUNGSREDUZIERUNG PRO INSTANZ",
							percentage: true,
					},

					{
						ability_special: "caustic_radius",
						text: "CAUSTIC-RADIUS",
					},

					{
						ability_special: "caustic_damage",
						text: "CAUSTIC-SCHADEN",
					},

					{
						ability_special: "max_stack_count",
						text: "MAX. ANZAHL",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "The Caustic Finale",
				description_override: "<h1>Пассивная: Caustic Finale</h1>Атаки уменьшают броню цели; эффект от атак суммируется до ${max_stack_count} раз. Если цель умрёт под действием этой способности, в области вокруг неё нанесётся урон.\\n",
				lore_override: "Предсмертный дар отклонять не стоит.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_damage",
						text: "ДОПОЛНИТЕЛЬНЫЙ УРОН",
					},

					{
						ability_special: "bonus_attack_speed",
						text: "ДОП. СКОРОСТЬ АТАКИ",
					},

					{
						ability_special: "caustic_armor_reduction_pct",
						text: "УМЕНЬШЕНИЕ БРОНИ ЗА ЭФФЕКТ",
							percentage: true,
					},

					{
						ability_special: "caustic_radius",
						text: "РАДИУС УРОНА ПРИ СМЕРТИ ЦЕЛИ",
					},

					{
						ability_special: "caustic_damage",
						text: "УРОН ПРИ СМЕРТИ ЦЕЛИ",
					},

					{
						ability_special: "max_stack_count",
						text: "МАКС. ЧИСЛО ЭФФЕКТОВ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "腐蚀剧毒",
				description_override: "<h1>被动：腐蚀毒素</h1>普通攻击会降低目标一定百分比的护甲。效果可以叠加至${max_stack_count}次。如果目标在这个效果下死亡将会爆炸，对范围内敌人造成伤害。\\n",
				lore_override: "腐蚀的天赋总是能被重用。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_damage",
						text: "攻击力加成：",
					},

					{
						ability_special: "bonus_attack_speed",
						text: "攻击速度提升：",
					},

					{
						ability_special: "caustic_armor_reduction_pct",
						text: "每次叠加削弱护甲",
							percentage: true,
					},

					{
						ability_special: "caustic_radius",
						text: "剧毒作用范围：",
					},

					{
						ability_special: "caustic_damage",
						text: "剧毒伤害：",
					},

					{
						ability_special: "max_stack_count",
						text: "最大叠加次数：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_winter_embrace",
		name: "Winter's Embrace",
		description: "<h1>Passive: Icy Shell</h1>Physical attackers have their attack speed and movement speed slowed for ${slow_duration} seconds.\\n",
		lore: "Who's the number one now?",
		ability_specials:
		[
			{
				ability_special: "bonus_intelligence",
				text: "BONUS INTELLIGENCE",
			},

			{
				ability_special: "bonus_armor",
				text: "BONUS ARMOR",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Umarmung des Winters",
				description_override: "<h1>Passiv: Eisige Schale</h1>Physischer Schaden bewirkt beim Angreifer eine Verringerung des Angriffs- und Bewegungstempos für ${slow_duration} Sekunden.\\n",
				lore_override: "Wer ist jetzt die Nummer 1?",
				ability_specials_override:
				[
					{
						ability_special: "bonus_intelligence",
						text: "BONUSINTELLIGENZ",
					},

					{
						ability_special: "bonus_armor",
						text: "BONUSRÜSTUNG",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Winter's Embrace",
				description_override: "<h1>Пассивная: Icy Shell</h1>Скорость атаки и передвижения атаковавших вас врагов уменьшается на ${slow_duration} сек.\\n",
				lore_override: "Ну и кто вышел победителем?",
				ability_specials_override:
				[
					{
						ability_special: "bonus_intelligence",
						text: "ДОП. ИНТЕЛЛЕКТ",
					},

					{
						ability_special: "bonus_armor",
						text: "ДОП. БРОНЯ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "寒冬之拥",
				description_override: "<h1>被动：寒冰外壳</h1>受到物理攻击时，攻击者的攻击和移动速度被降低，持续${slow_duration}秒。\\n",
				lore_override: "现在是谁麻了？",
				ability_specials_override:
				[
					{
						ability_special: "bonus_intelligence",
						text: "智力加成：",
					},

					{
						ability_special: "bonus_armor",
						text: "护甲加成：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_ice_dragon_maw",
		name: "Ice Dragon Maw",
		description: "<h1>Passive: Chilling Bite</h1>Your attacks have a ${chance_to_freeze}% chance to freeze the target for ${freeze_duration} seconds.\\n",
		lore: "Here's frost in your eye!",
		ability_specials:
		[
			{
				ability_special: "bonus_attack_range",
				text: "BONUS ATTACK RANGE(RANGED ONLY)",
			},

			{
				ability_special: "bonus_damage",
				text: "BONUS DAMAGE",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Eisdrachenkiefer",
				description_override: "<h1>Passiv: Eisiger Biss</h1>Angriffe haben eine ${chance_to_freeze}%ige Chance, das Ziel für ${freeze_duration} Sekunden einzufrieren.\\n",
				lore_override: "Da ist Frost in deinen Augen!",
				ability_specials_override:
				[
					{
						ability_special: "bonus_attack_range",
						text: "BONUSANGRIFFSREICHWEITE (NUR FERNKAMPF)",
					},

					{
						ability_special: "bonus_damage",
						text: "BONUSSCHADEN",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Ice Dragon Maw",
				description_override: "<h1>Пассивная: Chilling Bite</h1>Ваши атаки с вероятностью в ${chance_to_freeze}% могут заморозить цель на ${freeze_duration} сек.\\n",
				lore_override: "Ледяным ветром тебе по морде!",
				ability_specials_override:
				[
					{
						ability_special: "bonus_attack_range",
						text: "ДОП. ДАЛЬНОСТЬ АТАКИ (В ДАЛЬНЕМ БОЮ)",
					},

					{
						ability_special: "bonus_damage",
						text: "ДОПОЛНИТЕЛЬНЫЙ УРОН",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "冰龙之喉",
				description_override: "<h1>被动：极寒撕咬</h1>每次攻击有${chance_to_freeze}%几率冻结目标，持续${freeze_duration}秒。\\n",
				lore_override: "你的眼里满是冰霜！",
				ability_specials_override:
				[
					{
						ability_special: "bonus_attack_range",
						text: "攻击距离加成（仅远程）：",
					},

					{
						ability_special: "bonus_damage",
						text: "攻击力加成：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_precious_egg",
		name: "Precious Egg",
		description: "<h1>Passive: Last Chance</h1>If an attack would deal lethal damage, it has a ${chance_to_resist_death}% chance to leave the wearer at 1 health.\\n",
		lore: "Ancient eldwurms, in their search to acquire knowledge, have learned techniques for staving off the loss of life's breath.",
		ability_specials:
		[
			{
				ability_special: "bonus_all_stats",
				text: "BONUS ALL STATS",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kostbares Ei",
				description_override: "<h1>Passiv: Letzte Chance</h1>Falls ein Angriff tödlichen Schaden verursachen würde, gibt es eine ${chance_to_resist_death}%ige Chance, dass der Träger mit 1 LP überlebt.\\n",
				lore_override: "Auf ihrer Suche nach neuem Wissen lernten die uralten Eldwürmer Techniken, die das eigene Ableben aufzuschieben vermochten.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_all_stats",
						text: "BONUS AUF ALLE ATTRIBUTE",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Precious Egg",
				description_override: "<h1>Пассивная: Last Chance</h1>Если владельцу нанесут смертельную атаку, он с вероятностью в ${chance_to_resist_death}% выживет с 1 здоровья.\\n",
				lore_override: "В поисках знаний древние драконы научились оттягивать последний вздох.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_all_stats",
						text: "УВЕЛИЧЕНИЕ ВСЕХ АТРИБУТОВ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "珍稀龙蛋",
				description_override: "<h1>被动：最后机会</h1>受到致死伤害时有${chance_to_resist_death}%几率使佩戴者以1点生命生还。\\n",
				lore_override: "在探索学识的研习之际，古龙掌握了延缓生命之息流失的诀窍。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_all_stats",
						text: "全属性加成：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_stony_coat",
		name: "Stony Coat",
		description: "<h1>Passive: Barrage</h1>When the wearer takes damage, there is a ${boulder_chance}% to retaliate with a thrown boulder, which deals ${boulder_damage} and stuns for ${boulder_stun_duration} seconds.\\n",
		lore: "Just a stone's throw away.",
		ability_specials:
		[
			{
				ability_special: "bonus_strength",
				text: "BONUS STRENGTH",
			},

			{
				ability_special: "bonus_armor",
				text: "BONUS ARMOR",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Steinerner Mantel",
				description_override: "<h1>Passiv: Sperrfeuer</h1>Wenn der Träger Schaden erleidet, hat dieser eine ${boulder_chance}%ige Chance, einen Felsbrocken zurückzuschleudern, welcher ${boulder_damage} Schaden verursacht und für ${boulder_stun_duration} Sekunden betäubt.\\n",
				lore_override: "Nur einen Steinwurf entfernt.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "BONUSSTÄRKE",
					},

					{
						ability_special: "bonus_armor",
						text: "BONUSRÜSTUNG",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Stony Coat",
				description_override: "<h1>Пассивная: Barrage</h1>Получив урон, владелец может с вероятностью в ${boulder_chance}% запустить в ответ камень, наносящий ${boulder_damage} урона и оглушающий на ${boulder_stun_duration} сек.\\n",
				lore_override: "Камня на камне не оставит.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "ДОП. СИЛА",
					},

					{
						ability_special: "bonus_armor",
						text: "ДОП. БРОНЯ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "岩石外衣",
				description_override: "<h1>被动：阻塞</h1>佩戴者受到伤害时有${boulder_chance}%几率反击，扔出一块巨石，造成${boulder_damage}点伤害，并眩晕${boulder_stun_duration}秒。\\n",
				lore_override: "只是一石之遥。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "力量加成：",
					},

					{
						ability_special: "bonus_armor",
						text: "护甲加成：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_stonework_pendant",
		name: "Stonework Pendant",
		description: "<h1>Passive: Blood From a Stone</h1>Spells now cost hit points equal to ${hp_cost_multiplier} times their mana cost, and the wearer gains bonus hit points and health regen equal to the size of their mana pool and mana regen.\\n",
		lore: "You CAN get blood from a stone.",
		ability_specials:
		[
			{
				ability_special: "spell_lifesteal",
				text: "SPELL LIFESTEAL",
				percentage: true,
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Steinzeugamulett",
				description_override: "<h1>Passiv: Blutende Steine</h1>Zauber kosten jetzt Lebenspunkte in ${hp_cost_multiplier}-facher Höhe ihrer Manakosten. Der Träger erhält Bonuslebenspunkte und Lebensregeneration in Höhe seines Manavorrats und seiner Manaregeneration.\\n",
				lore_override: "Auch Steine können bluten.",
				ability_specials_override:
				[
					{
						ability_special: "spell_lifesteal",
						text: "ZAUBERLEBENSRAUB",
							percentage: true,
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Stonework Pendant",
				description_override: "<h1>Пассивная: Blood From a Stone</h1>Вместо маны заклинания расходуют здоровье — в ${hp_cost_multiplier} раза больше, чем ману. Также увеличивает запас и восстановление здоровья в соответствии с запасом и восстановлением маны.\\n",
				lore_override: "Камни тоже кровоточат.",
				ability_specials_override:
				[
					{
						ability_special: "spell_lifesteal",
						text: "ВАМПИРИЗМ ЗАКЛИНАНИЯМИ",
							percentage: true,
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "石制坠饰",
				description_override: "<h1>被动：石头里还是能榨出血的。</h1>现在施放技能时消耗生命，数值为所需魔法的${hp_cost_multiplier}倍，并且佩戴者获得额外的生命值和生命恢复，数值分别等于魔法值和魔法恢复。\\n",
				lore_override: "石头里还是能榨出血的。",
				ability_specials_override:
				[
					{
						ability_special: "spell_lifesteal",
						text: "技能吸血",
							percentage: true,
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_gravel_foot",
		name: "Gravel Foot",
		lore: "Find sure footing on any terrain.",
		ability_specials:
		[
			{
				ability_special: "bonus_movement_speed",
				text: "BONUS MOVEMENT SPEED",
			},

			{
				ability_special: "bonus_all_stats",
				text: "BONUS ALL STATS",
			},

			{
				ability_special: "bonus_hp_regen",
				text: "BONUS HP REGEN",
			},

			{
				ability_special: "damage_block",
				text: "DAMAGE BLOCK",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kiesfuß",
				lore_override: "Sicheren Fußes über jedes Gelände.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_movement_speed",
						text: "BONUSBEWEGUNGSTEMPO",
					},

					{
						ability_special: "bonus_all_stats",
						text: "BONUS AUF ALLE ATTRIBUTE",
					},

					{
						ability_special: "bonus_hp_regen",
						text: "BONUSLEBENSREGENERATION",
					},

					{
						ability_special: "damage_block",
						text: "SCHADENBLOCK",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Gravel Foot",
				lore_override: "Да устоите вы крепко на любой почве.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_movement_speed",
						text: "ДОП. СКОРОСТЬ ПЕРЕДВИЖЕНИЯ",
					},

					{
						ability_special: "bonus_all_stats",
						text: "УВЕЛИЧЕНИЕ ВСЕХ АТРИБУТОВ",
					},

					{
						ability_special: "bonus_hp_regen",
						text: "ДОП. ВОССТАНОВЛЕНИЕ ЗДОРОВЬЯ",
					},

					{
						ability_special: "damage_block",
						text: "БЛОК УРОНА",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "砂砾之足",
				lore_override: "在任何地方都能站稳脚跟。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_movement_speed",
						text: "移动速度加成：",
					},

					{
						ability_special: "bonus_all_stats",
						text: "全属性加成：",
					},

					{
						ability_special: "bonus_hp_regen",
						text: "额外生命恢复：",
					},

					{
						ability_special: "damage_block",
						text: "伤害格挡：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_wand_of_the_brine",
		name: "Wand of the Brine",
		description: "<h1>Active: Brinefoam</h1> Puts a friendly unit in a protective healing bubble for ${bubble_duration} seconds, healing it for ${bubble_heal_per_tick} every ${heal_tick_interval} second.",
		lore: "Were it not for this revered wand, there would have been no Conclave survivors at the Battle of Stonefish Gate.",
		ability_specials:
		[
			{
				ability_special: "bonus_intelligence",
				text: "+$int",
				item_stat: true,
			},

			{
				ability_special: "bonus_mana_regen_pct",
				text: "+$mana_rege",
				percentage: true,
				item_stat: true,
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Salziger Zauberstab",
				description_override: "<h1>Aktiv: Salzschaum</h1> Umgibt eine verbündete Einheit für ${bubble_duration} Sekunden mit einer schützenden Blase, die das Ziel außerdem alle ${heal_tick_interval} Sekunden um ${bubble_heal_per_tick} Lebenspunkte heilt.",
				lore_override: "Wäre dieser sagenumwobene Zauberstab nicht gewesen, hätte wohl niemand vom Konklave die Schlacht am Steinfischtor überlebt.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_intelligence",
						text: "+$int",
							item_stat: true,
					},

					{
						ability_special: "bonus_mana_regen_pct",
						text: "+$mana_rege",
							percentage: true,
							item_stat: true,
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Wand of the Brine",
				description_override: "<h1>Активная: Brinefoam</h1>Помещает союзника в защитный целительный пузырь на ${bubble_duration} сек., излечивая ${bubble_heal_per_tick} здоровья каждые ${heal_tick_interval} сек.",
				lore_override: "Если бы не эта легендарная палочка, Совет сгинул бы в битве у ворот Каменной рыбы.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_intelligence",
						text: "+$int",
							item_stat: true,
					},

					{
						ability_special: "bonus_mana_regen_pct",
						text: "+$mana_rege",
							percentage: true,
							item_stat: true,
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "苍洋魔杖",
				description_override: "<h1>主动：苍洋泡沫</h1> 使一个友方单位进入具有防护效果的疗伤泡泡，持续${bubble_duration}秒，每${heal_tick_interval}秒治疗${bubble_heal_per_tick}点生命。",
				lore_override: "要不是这把尊崇的魔杖，教团在石鱼门一役就全军覆没。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_intelligence",
						text: "+$int",
							item_stat: true,
					},

					{
						ability_special: "bonus_mana_regen_pct",
						text: "+$mana_rege",
							percentage: true,
							item_stat: true,
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_slippers_of_the_abyss",
		name: "Slippers of the Abyss",
		description: "<h1>Active: Aqueous Rush</h1> Increase movement speed by ${sprint_bonus_ms} for ${sprint_duration} seconds.",
		lore: "In the voluminous depths, those who cannot move swiftly will be the first to die.",
		ability_specials:
		[
			{
				ability_special: "bonus_movement_speed",
				text: "BONUS MOVEMENT SPEED",
			},

			{
				ability_special: "bonus_atk_speed",
				text: "BONUS ATTACK SPEED",
			},

			{
				ability_special: "bonus_strength",
				text: "+$str",
				item_stat: true,
			},

			{
				ability_special: "bonus_agility",
				text: "+$agi",
				item_stat: true,
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Latschen des Abgrunds",
				description_override: "<h1>Aktiv: Wasserschritt</h1> Erhöht das Bewegungstempo ${sprint_duration} Sekunden lang um ${sprint_bonus_ms}.",
				lore_override: "Wer in den dunklen Tiefen nicht flink unterwegs ist, wird als erstes das Zeitliche segnen.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_movement_speed",
						text: "BONUSBEWEGUNGSTEMPO",
					},

					{
						ability_special: "bonus_atk_speed",
						text: "BONUSANGRIFFSTEMPO",
					},

					{
						ability_special: "bonus_strength",
						text: "+$str",
							item_stat: true,
					},

					{
						ability_special: "bonus_agility",
						text: "+$agi",
							item_stat: true,
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Slippers of the Abyss",
				description_override: "<h1>Активная: Aqueous Rush</h1> Увеличивает скорость передвижения на ${sprint_bonus_ms}. Действует ${sprint_duration} сек.",
				lore_override: "В пространных глубинах самые неповоротливые погибают первыми.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_movement_speed",
						text: "ДОП. СКОРОСТЬ ПЕРЕДВИЖЕНИЯ",
					},

					{
						ability_special: "bonus_atk_speed",
						text: "ДОП. СКОРОСТЬ АТАКИ",
					},

					{
						ability_special: "bonus_strength",
						text: "+$str",
							item_stat: true,
					},

					{
						ability_special: "bonus_agility",
						text: "+$agi",
							item_stat: true,
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "深渊便鞋",
				description_override: "<h1>主动：水性冲刺</h1> 移动速度提升${sprint_bonus_ms}，持续${sprint_duration}秒。",
				lore_override: "在浩瀚的深海，动得不够快就会死得非常快。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_movement_speed",
						text: "移动速度加成：",
					},

					{
						ability_special: "bonus_atk_speed",
						text: "攻击速度加成：",
					},

					{
						ability_special: "bonus_strength",
						text: "+$str",
							item_stat: true,
					},

					{
						ability_special: "bonus_agility",
						text: "+$agi",
							item_stat: true,
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_glimmerdark_shield",
		name: "Glimmerdark Shield",
		description: "<h1>Active: Gleam</h1> Gain immunity to physical damage, but receive +${tooltip_prism_bonus_magic_dmg}%  magic damage. Lasts ${prism_duration} seconds.",
		lore: "This shield's first bearer thought he had gained immortality in battle. Until the second bearer's magic began to flow.",
		ability_specials:
		[
			{
				ability_special: "bonus_strength",
				text: "+$str",
				item_stat: true,
			},

			{
				ability_special: "bonus_agility",
				text: "+$agi",
				item_stat: true,
			},

			{
				ability_special: "bonus_intellect",
				text: "+$int",
				item_stat: true,
			},

			{
				ability_special: "bonus_armor",
				text: "BONUS ARMOR",
			},

			{
				ability_special: "bonus_health_regen",
				text: "BONUS HEALTH REGEN",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Dunkelflimmerschild",
				description_override: "<h1>Aktiv: Schimmern</h1> Sie werden immun gegen physischen Schaden, aber erleiden ${tooltip_prism_bonus_magic_dmg} % mehr Magieschaden. Hält ${prism_duration} Sekunden an.",
				lore_override: "Der erste Träger dieses Schilds dachte, er wäre unsterblich. Bis der nachfolgende Besitzer begann, seine Magie zu wirken.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "+$str",
							item_stat: true,
					},

					{
						ability_special: "bonus_agility",
						text: "+$agi",
							item_stat: true,
					},

					{
						ability_special: "bonus_intellect",
						text: "+$int",
							item_stat: true,
					},

					{
						ability_special: "bonus_armor",
						text: "BONUSRÜSTUNG",
					},

					{
						ability_special: "bonus_health_regen",
						text: "BONUSLEBENSREGENERATION",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Glimmerdark Shield",
				description_override: "<h1>Активная: Gleam</h1> Владелец на ${prism_duration} сек. получает невосприимчивость к физическому урону, но магия наносит ему на +${tooltip_prism_bonus_magic_dmg}% больше урона.",
				lore_override: "Первый владелец этого щита считал, что обрёл неуязвимость в бою. Второй как раз готовил заклинание.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "+$str",
							item_stat: true,
					},

					{
						ability_special: "bonus_agility",
						text: "+$agi",
							item_stat: true,
					},

					{
						ability_special: "bonus_intellect",
						text: "+$int",
							item_stat: true,
					},

					{
						ability_special: "bonus_armor",
						text: "ДОП. БРОНЯ",
					},

					{
						ability_special: "bonus_health_regen",
						text: "ДОП. ВОССТАНОВЛЕНИЕ ЗДОРОВЬЯ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "荧光护盾",
				description_override: "<h1>主动：闪光</h1>对物理伤害免疫，但是受到的魔法伤害增加${tooltip_prism_bonus_magic_dmg}%。持续${prism_duration}秒。",
				lore_override: "这面盾牌的首位拥有者觉得自己在战场上已经所向无敌。直到第二位拥有者的魔法出现。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "+$str",
							item_stat: true,
					},

					{
						ability_special: "bonus_agility",
						text: "+$agi",
							item_stat: true,
					},

					{
						ability_special: "bonus_intellect",
						text: "+$int",
							item_stat: true,
					},

					{
						ability_special: "bonus_armor",
						text: "护甲加成：",
					},

					{
						ability_special: "bonus_health_regen",
						text: "生命恢复加成：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_dredged_trident",
		name: "Siltbreaker's Dredged Trident",
		description: "<h1>Passive: Critical Strike</h1>Grants each attack a ${crit_chance}%  chance to deal ${crit_multiplier}% additional damage.",
		lore: "Hauled from the deep long ago, Siltbreaker made this destructive weapon his own.",
		ability_specials:
		[
			{
				ability_special: "bonus_damage",
				text: "+$damage",
				item_stat: true,
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schlickschreckens triefender Dreizack",
				description_override: "<h1>Passiv: Kritischer Treffer</h1>Gewährt eine ${crit_chance}%ige Chance, bei einem Angriff ${crit_multiplier} %% Schaden zu verursachen.",
				lore_override: "Schlickschrecken hat sich diese vor langer Zeit aus den Tiefen geborgene, zerstörerische Waffe zu Eigen gemacht.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_damage",
						text: "+$damage",
							item_stat: true,
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Siltbreaker's Dredged Trident",
				description_override: "<h1>Пассивная: Critical Strike</h1> Каждая атака может с вероятностью в ${crit_chance}% нанести ${crit_multiplier}% урона.",
				lore_override: "Давным-давно Лихо пучин нашло это смертоносное оружие в глубинах и присвоило его себе.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_damage",
						text: "+$damage",
							item_stat: true,
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "破泞之主的疏浚三叉戟",
				description_override: "<h1>被动：致命一击</h1>每次攻击有${crit_chance}%几率造成${crit_multiplier}%额外伤害。",
				lore_override: "很久以前从深海中拔出后，破泞之主就将这把毁灭性的武器据为己有。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_damage",
						text: "+$damage",
							item_stat: true,
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_ambient_sorcery",
		name: "Ambient Sorcery",
		description: "<h1>Passive: Ambient Sorcery</h1>Reduces nearby units' magic resistance by ${aura_magic_reduction}%.",
		lore: "A glowing orb stolen from an arcanist's tower.",
		ability_specials:
		[
			{
				ability_special: "bonus_intelligence",
				text: "+$int",
				item_stat: true,
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Arkane Umgebung",
				description_override: "<h1>Passiv: Arkane Umgebung</h1>Reduziert die Magieresistenz in der Nähe befindlicher Einheiten um ${aura_magic_reduction} %.",
				lore_override: "Aus dem Turm eines Arkanisten gestohlene leuchtende Kugel.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_intelligence",
						text: "+$int",
							item_stat: true,
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Ambient Sorcery",
				description_override: "<h1>Пассивная: Ambient Sorcery</h1>Уменьшает врагам вокруг сопротивление магии на ${aura_magic_reduction}%.",
				lore_override: "Светящийся шар, украденный из башни знатока магии.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_intelligence",
						text: "+$int",
							item_stat: true,
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "环域巫术",
				description_override: "<h1>被动：环域巫术</h1>使周围单位的魔法抗性降低${aura_magic_reduction}%。",
				lore_override: "一个闪光的宝珠，盗自一座奥术师高塔。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_intelligence",
						text: "+$int",
							item_stat: true,
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_ogre_seal_totem",
		name: "Ogre Seal Totem",
		description: "<h1>Active: Ogre Seal Flop</h1>Flop like an ogre seal, doing ${damage} damage and stunning for ${stun_duration} second on each bounce.",
		lore: "A totem carved from an ogre seal's tooth.",
		ability_specials:
		[
			{
				ability_special: "bonus_strength",
				text: "BONUS STRENGTH",
			},

			{
				ability_special: "bonus_hp",
				text: "BONUS HP",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Ogerrobbentotem",
				description_override: "<h1>Aktiv: Ogerrobbenplatscher</h1>Sie hüpfen wie eine Ogerrobbe, verursachen pro Sprung ${damage} Schaden und betäuben getroffene Gegner für ${stun_duration} Sekunde.",
				lore_override: "Ein aus dem Zahn einer Ogerrobbe geschnitztes Totem.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "BONUSSTÄRKE",
					},

					{
						ability_special: "bonus_hp",
						text: "BONUS-LP",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Тотем моржогра",
				description_override: "<h1>Активируемая: Пляска моржогра</h1>Скачет как моржогр, нанося ${damage} урона и оглушая на ${stun_duration} сек. каждым скачком.",
				lore_override: "Тотем, выточенный из зуба моржогра.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "ДОП. СИЛА",
					},

					{
						ability_special: "bonus_hp",
						text: "ДОП. ЗДОРОВЬЕ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "食人魔海豹图腾",
				description_override: "<h1>主动：食人魔海豹扑打</h1>像食人魔海豹一样扑打，每次造成${damage}点伤害并眩晕${stun_duration}秒。",
				lore_override: "从食人魔海豹的牙齿雕刻而来的图腾。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "力量加成：",
					},

					{
						ability_special: "bonus_hp",
						text: "生命加成：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_bear_cloak",
		name: "Cloak of the Bear",
		description: "<h1>Aura: Rough Bearskin</h1>Provides ${aura_bonus_magic_resist}%  bonus magic resistance to nearby allies.",
		lore: "There's no shortage of natural armor in the wild.",
		ability_specials:
		[
			{
				ability_special: "bonus_magic_resist",
				text: "SELF BONUS MAGIC RESIST",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Umhang des Bären",
				description_override: "<h1>Aura: Dickes Bärenfell</h1>Gewährt in der Nähe befindlichen Verbündeten ${aura_bonus_magic_resist} %% Bonusmagieresistenz.",
				lore_override: "In der Wildnis gibt es natürliches Rüstzeug im Überfluss.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_magic_resist",
						text: "BONUSMAGIERESISTENZ (SELBST)",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Cloak of the Bear",
				description_override: "<h1>Аура: Rough Bearskin</h1>На ${aura_bonus_magic_resist}% увеличивает сопротивление магии у союзников вокруг.",
				lore_override: "В дикой природе всегда есть чем защититься.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_magic_resist",
						text: "СОПРОТИВЛЕНИЕ МАГИИ У ВЛАДЕЛЬЦА",
							percentage: true,
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "熊皮斗篷",
				description_override: "<h1>光环：毛糙熊皮</h1>向周围友方单位提供${aura_bonus_magic_resist}%魔法抗性加成。",
				lore_override: "野兽的天然护甲并没有缺点。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_magic_resist",
						text: "自身魔法抗性加成：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_lifestone",
		name: "Lifestone",
		description: "<h1>Active: Health Pact</h1>Converts ${pact_hp_cost} health into ${pact_mana_gained} mana every 0.5 seconds.",
		lore: "The stone thirsts for blood.",
		ability_specials:
		[
			{
				ability_special: "hp_regen",
				text: "HP REGEN",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Lebensstein",
				description_override: "<h1>Aktiv: Lebenspakt</h1>Wandelt alle 0,5 Sekunden ${pact_hp_cost} Leben in ${pact_mana_gained} Mana um.",
				lore_override: "Dieser Stein dürstet nach Blut.",
				ability_specials_override:
				[
					{
						ability_special: "hp_regen",
						text: "LP-REGENERATION",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Lifestone",
				description_override: "<h1>Активная: Health Pact</h1>Превращает ${pact_hp_cost} здоровья в ${pact_mana_gained} маны каждые 0,5 секунды.",
				lore_override: "Камень, что жаждет крови.",
				ability_specials_override:
				[
					{
						ability_special: "hp_regen",
						text: "ВОССТАНОВЛЕНИЕ ЗДОРОВЬЯ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "生命之石",
				description_override: "<h1>主动：生命之契</h1>每0.5秒将${pact_hp_cost}点生命值转化为${pact_mana_gained}点魔法。",
				lore_override: "灵石渴求鲜血。",
				ability_specials_override:
				[
					{
						ability_special: "hp_regen",
						text: "生命恢复：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_corrupting_blade",
		name: "Violet Blade",
		description: "<h1>Passive: Devastation</h1>Your attacks reduce the target's armor by ${corruption_armor} for ${corruption_duration} seconds.",
		lore: "A terrifying weapon whose recipe was lost in the Violet Archives.",
		ability_specials:
		[
			{
				ability_special: "bonus_damage",
				text: "+$damage",
				item_stat: true,
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Violette Klinge",
				description_override: "<h1>Passiv: Verwüstung</h1>Angriffe reduzieren die Rüstung des Ziels für ${corruption_duration} Sekunden um ${corruption_armor}.",
				lore_override: "Eine furchterregende Waffe, deren Rezept in den violetten Archiven verloren ging.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_damage",
						text: "+$damage",
							item_stat: true,
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Violet Blade",
				description_override: "<h1>Пассивная: Devastation</h1> Атаки снижают броню цели на ${corruption_armor}. Эффект длится ${corruption_duration} сек.",
				lore_override: "Ужасающее оружие, секрет создания которого утерян в Фиолетовых архивах.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_damage",
						text: "+$damage",
							item_stat: true,
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "紫罗兰战刃",
				description_override: "<h1>被动：黯寂</h1>每次攻击将降低目标${corruption_armor}点护甲，持续${corruption_duration}秒。",
				lore_override: "一件可怕的武器，其铸造图纸早已遗失在紫罗兰档案馆。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_damage",
						text: "+$damage",
							item_stat: true,
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "item_amorphotic_shell",
		name: "Amorphotic Shell",
		description: "<h1>Passive: Division</h1>When you take an attack greater than 25 damage, you have a ${amoeba_chance}% to spawn a friendly amoebite for ${amoeba_duration} seconds.",
		lore: "The shape of it can't quite be grasped.",
		ability_specials:
		[
			{
				ability_special: "bonus_strength",
				text: "BONUS STRENGTH",
			},

			{
				ability_special: "bonus_intelligence",
				text: "BONUS INTELLIGENCE",
			},

			{
				ability_special: "bonus_agility",
				text: "BONUS AGILITY",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Amorphe Schale",
				description_override: "<h1>Passiv: Mitose</h1>Wenn ein Angriff Ihnen mehr als 25 Schaden zufügt, haben Sie eine ${amoeba_chance}%ige Chance, ${amoeba_duration} Sekunden lang eine verbündete Amöbenbrut zu beschwören.",
				lore_override: "Ihre Form ist nicht ganz klar.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "BONUSSTÄRKE",
					},

					{
						ability_special: "bonus_intelligence",
						text: "BONUSINTELLIGENZ",
					},

					{
						ability_special: "bonus_agility",
						text: "BONUSAGILITÄT",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Amorphotic Shell",
				description_override: "<h1>Пассивная: Division</h1>Если герою нанесут атакой больше 25 урона, с вероятностью в ${amoeba_chance}% рядом с ним появится дружественная амёбка, живущая ${amoeba_duration} сек.",
				lore_override: "Артефакт неописуемой формы.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "ДОП. СИЛА",
					},

					{
						ability_special: "bonus_intelligence",
						text: "ДОП. ИНТЕЛЛЕКТ",
					},

					{
						ability_special: "bonus_agility",
						text: "ДОП. ЛОВКОСТЬ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "变形之壳",
				description_override: "<h1>被动：分裂</h1>受到的攻击超过25点时有${amoeba_chance}%几率产生一只变形虫为自己作战，持续${amoeba_duration}秒。",
				lore_override: "它的形状无法准确把握。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_strength",
						text: "力量加成：",
					},

					{
						ability_special: "bonus_intelligence",
						text: "智力加成：",
					},

					{
						ability_special: "bonus_agility",
						text: "敏捷加成：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "aghsfort_aura_reward_hp",
		name: "Granite Aura",
		description: "Increases the health capacity of nearby units.",
		ability_specials:
		[
			{
				ability_special: "bonus_hp",
				text: "BONUS HP",
				percentage: true,
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Granitaura",
				description_override: "Erhöht die maximalen Lebenspunkte verbündeter Einheiten in der Nähe.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_hp",
						text: "BONUS-LP",
							percentage: true,
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Granite Aura",
				description_override: "Увеличивает запас здоровья существ поблизости.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_hp",
						text: "ДОП. ЗДОРОВЬЕ",
							percentage: true,
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "磐石光环",
				description_override: "提高周围单位的生命值上限。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_hp",
						text: "生命加成",
							percentage: true,
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "aghsfort_aura_reward_armor",
		name: "Armadillo Aura",
		description: "Your allies hides have become hardened with increased resistance to physical damage.",
		ability_specials:
		[
			{
				ability_special: "bonus_armor",
				text: "BONUS ARMOR",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Armadilloaura",
				description_override: "Die Haut Ihrer Verbündeten wird dicker, wodurch sich deren Resistenz gegen physischen Schaden erhöht.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_armor",
						text: "BONUSRÜSTUNG",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Armadillo Aura",
				description_override: "Укрепляет кожу ваших союзников, даруя им сопротивление физическому урону.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_armor",
						text: "ДОП. БРОНЯ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "穿山甲光环",
				description_override: "友军的外皮更为坚韧，对物理伤害的抗性提升。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_armor",
						text: "护甲加成：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "aghsfort_aura_reward_magic_resist",
		name: "Magical Cloak",
		description: "A magic cloak that increases magic resistance.",
		ability_specials:
		[
			{
				ability_special: "bonus_magical_armor",
				text: "MAGIC RESISTANCE",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Magischer Umhang",
				description_override: "Ein magischer Umhang, der die Magieresistenz erhöht.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_magical_armor",
						text: "MAGIERESISTENZ",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Magical Cloak",
				description_override: "Магический плащ, увеличивающий сопротивление магии.",
				ability_specials_override:
				[
					{
						ability_special: "bonus_magical_armor",
						text: "СОПРОТИВЛЕНИЕ МАГИИ",
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "魔法斗篷",
				description_override: "一件具有魔力的斗篷，提升了魔法抗性。",
				ability_specials_override:
				[
					{
						ability_special: "bonus_magical_armor",
						text: "魔法抗性：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "aghsfort_aura_reward_crit_chance",
		name: "Blademaster's Presence",
		description: "Allies granted a ${crit_chance}% chance to deal a critical strike doing ${crit_multiplier}% damage.",
		ability_specials:
		[
			{
				ability_special: "crit_chance",
				text: "CRITICAL CHANCE",
				percentage: true,
			},

			{
				ability_special: "crit_multiplier",
				text: "CRITICAL DAMAGE",
			},

		],
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Präsenz des Klingenmeisters",
				description_override: "Verleiht Verbündeten eine ${crit_chance}%ige Chance, mit einem Angriff ${crit_multiplier} %% kritischen Schaden zu verursachen.",
				ability_specials_override:
				[
					{
						ability_special: "crit_chance",
						text: "KRITISCHE TREFFERCHANCE",
							percentage: true,
					},

					{
						ability_special: "crit_multiplier",
						text: "KRITISCHER SCHADEN",
					},

				]
			},

			{
				language: Language.Russian,
				name_override: "Blademaster's Presence",
				description_override: "Союзники получают ${crit_chance}% шанс нанести атакой ${crit_multiplier}% критического урона.",
				ability_specials_override:
				[
					{
						ability_special: "crit_chance",
						text: "ШАНС КРИТИЧЕСКОЙ АТАКИ",
							percentage: true,
					},

					{
						ability_special: "crit_multiplier",
						text: "КРИТИЧЕСКИЙ УРОН",
							percentage: true,
					},

				]
			},

			{
				language: Language.SChinese,
				name_override: "剑圣现世",
				description_override: "友军获得${crit_chance}%几率造成${crit_multiplier}%致命一击伤害。",
				ability_specials_override:
				[
					{
						ability_special: "crit_chance",
						text: "致命一击概率",
							percentage: true,
					},

					{
						ability_special: "crit_multiplier",
						text: "致命一击伤害：",
					},

				]
			},

		]
	});

	Abilities.push({
		ability_classname: "aghsfort_tempbuff_corpse_explosion_aura",
		description: "Enemy units have a chance to explode in a gory heap, dealing Magic Damage equal to 25%% of their max HP to nearby units.",
		language_overrides:
		[
			{
				language: Language.German,
				description_override: "Gegnerische Einheiten haben eine Chance, blutig zu explodieren und in ihrem Umkreis 25 %% ihrer max. LP als magischen Schaden zu verursachen.",
			},

			{
				language: Language.Russian,
				description_override: "Враги могут взорваться после смерти, нанося магический урон, равный 25%% от их максимального здоровья.",
			},

			{
				language: Language.SChinese,
				description_override: "敌方单位有几率爆裂成一团血肉，对周围单位造成其25%%最大生命值的魔法伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_disruptor_thunder_strike_flat_strikes",
		name: "Thunder Strike: Strikes",
		description: "<h1>Common Scepter Fragment</h1>Increases Thunder Strike Strike Count by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Donnerschlag: Einschläge",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Anzahl der Einschläge von Donnerschlag um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Thunder Strike: удары",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к числу ударов Thunder Strike.",
			},

			{
				language: Language.SChinese,
				name_override: "风雷之击：打击次数",
				description_override: "<h1>普通神杖碎片</h1>风雷之击提升${value}次打击次数。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_disruptor_thunder_strike_flat_strike_damage",
		name: "Thunder Strike: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Thunder Strike Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Donnerschlag: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Donnerschlag um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Thunder Strike: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону за удар от Thunder Strike.",
			},

			{
				language: Language.SChinese,
				name_override: "风雷之击：伤害",
				description_override: "<h1>普通神杖碎片</h1>风雷之击提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_disruptor_glimpse_flat_bonus_damage",
		name: "Glimpse: Bonus Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Glimpse Bonus Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Glimpse: Bonusschaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Bonusschaden von Flüchtiger Blick um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Glimpse: дополнительный урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к дополнительному урону от Glimpse.",
			},

			{
				language: Language.SChinese,
				name_override: "恶念瞥视：额外伤害",
				description_override: "<h1>普通神杖碎片</h1>恶念瞥视提升${value}点额外伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_disruptor_glimpse_flat_cast_radius",
		name: "Glimpse: Radius",
		description: "<h1>Common Scepter Fragment</h1>Increases Glimpse Radius by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Flüchtiger Blick: Radius",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Radius von Flüchtiger Blick um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Glimpse: радиус",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к радиусу Glimpse.",
			},

			{
				language: Language.SChinese,
				name_override: "恶念瞥视：作用范围",
				description_override: "<h1>普通神杖碎片</h1>恶念瞥视提升${value}作用范围。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_disruptor_kinetic_field_flat_duration",
		name: "Kinetic Field: Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Kinetic Field Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kinetikfeld: Dauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Dauer von Kinetikfeld um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Kinetic Field: длительность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. длительности Kinetic Field.",
			},

			{
				language: Language.SChinese,
				name_override: "动能力场：持续时间",
				description_override: "<h1>普通神杖碎片</h1>动能力场提升${value}持续时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_disruptor_kinetic_field_formation_time",
		name: "Kinetic Field: Formation Time",
		description: "<h1>Common Scepter Fragment</h1>Decreases Kinetic Field Formation Time by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kinetikfeld: Entstehungsverzögerung",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Entstehungsverzögerung von Kinetikfeld um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Kinetic Field: задержка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% задержки до создания Kinetic Field.",
			},

			{
				language: Language.SChinese,
				name_override: "动能力场：成形时间",
				description_override: "<h1>普通神杖碎片</h1>动能力场降低${value}%成形时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_disruptor_static_storm_flat_duration",
		name: "Static Storm: Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Static Storm Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Statiksturm: Dauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Dauer von Statiksturm um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Static Storm: длительность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. длительности Static Storm.",
			},

			{
				language: Language.SChinese,
				name_override: "静态风暴：持续时间",
				description_override: "<h1>普通神杖碎片</h1>静态风暴提升${value}持续时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_disruptor_static_storm_flat_damage_max",
		name: "Static Storm: Max Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Static Storm Max Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Statiksturm: Max. Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den max. Schaden von Statiksturm um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Static Storm: максимальный урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к максимальному урону от Static Storm.",
			},

			{
				language: Language.SChinese,
				name_override: "静态风暴：最大伤害",
				description_override: "<h1>普通神杖碎片</h1>静态风暴提升${value}点最大伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_magnataur_shockwave_flat_damage",
		name: "Shockwave: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Shockwave Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schockwelle: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht Schaden von Schockwelle um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Shockwave: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Shockwave.",
			},

			{
				language: Language.SChinese,
				name_override: "震荡波：伤害",
				description_override: "<h1>普通神杖碎片</h1>震荡波提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_magnataur_shockwave_pct_mana_cost",
		name: "Shockwave: Mana Cost",
		description: "<h1>Common Scepter Fragment</h1>Decreases Shockwave Mana Cost by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schockwelle: Manakosten",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert Manakosten von Schockwelle um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Shockwave: расход маны",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% от расхода маны на Shockwave.",
			},

			{
				language: Language.SChinese,
				name_override: "震荡波：魔法消耗",
				description_override: "<h1>普通神杖碎片</h1>震荡波降低${value}%魔法消耗。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_magnataur_empower_flat_damage",
		name: "Empower: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Empower Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Stärkung: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Stärkung um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Empower: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Empower.",
			},

			{
				language: Language.SChinese,
				name_override: "授予力量：攻击力",
				description_override: "<h1>普通神杖碎片</h1>授予力量提升${value}攻击力。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_magnataur_empower_flat_cleave",
		name: "Empower: Cleave",
		description: "<h1>Common Scepter Fragment</h1>Increases Empower Cleave by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Stärkung: Flächenschaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Flächenschaden von Stärkung um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Empower: прорубание",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к прорубанию от Empower.",
			},

			{
				language: Language.SChinese,
				name_override: "授予力量：分裂",
				description_override: "<h1>普通神杖碎片</h1>授予力量提升${value}分裂。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_magnataur_skewer_flat_damage",
		name: "Skewer: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Skewer Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Aufspießen: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Aufspießen um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Skewer: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Skewer.",
			},

			{
				language: Language.SChinese,
				name_override: "巨角冲撞：伤害",
				description_override: "<h1>普通神杖碎片</h1>巨角冲撞提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_magnataur_skewer_pct_cooldown",
		name: "Skewer: Cooldown",
		description: "<h1>Common Scepter Fragment</h1>Decreases Skewer Cooldown by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Aufspießen: Abklingzeit",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Abklingzeit von Stärkung um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Skewer: перезарядка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% перезарядки Skewer.",
			},

			{
				language: Language.SChinese,
				name_override: "巨角冲撞：冷却时间",
				description_override: "<h1>普通神杖碎片</h1>巨角冲撞降低${value}%冷却时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_magnataur_reverse_polarity_flat_damage",
		name: "Reverse Polarity: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Reverse Polarity Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Antipol: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Antipol um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Reverse Polarity: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Reverse Polarity.",
			},

			{
				language: Language.SChinese,
				name_override: "两极反转：伤害",
				description_override: "<h1>普通神杖碎片</h1>两极反转提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_magnataur_reverse_polarity_flat_radius",
		name: "Reverse Polarity: Radius",
		description: "<h1>Common Scepter Fragment</h1>Increases Reverse Polarity Radius by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Antipol: Radius",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Radius von Antipol um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Reverse Polarity: радиус",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к радиусу Reverse Polarity.",
			},

			{
				language: Language.SChinese,
				name_override: "两极反转：作用范围",
				description_override: "<h1>普通神杖碎片</h1>两极反转提升${value}作用范围。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_mars_spear_flat_damage",
		name: "Spear of Mars: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Spear of Mar Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Speer des Mars: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht Schaden von Speer des Mars um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Spear of Mars: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Spear of Mars.",
			},

			{
				language: Language.SChinese,
				name_override: "战神迅矛：伤害",
				description_override: "<h1>普通神杖碎片</h1>战神迅矛提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_mars_spear_flat_stun_duration",
		name: "Spear of Mars: Stun Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Spear of Mar Stun Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Speer des Mars: Betäubungsdauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht Betäubungsdauer von Speer des Mars um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Spear of Mars: оглушение",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. оглушения от Spear of Mars.",
			},

			{
				language: Language.SChinese,
				name_override: "战神迅矛：眩晕时间",
				description_override: "<h1>普通神杖碎片</h1>战神迅矛提升${value}眩晕时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_mars_gods_rebuke_percent_cooldown",
		name: "God's Rebuke: Cooldown",
		description: "<h1>Common Scepter Fragment</h1>Decreases God's Rebuke Cooldown by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Göttlicher Tadel: Abklingzeit",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Abklingzeit von Göttlicher Tadel um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "God's Rebuke: перезарядка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% перезарядки God's Rebuke.",
			},

			{
				language: Language.SChinese,
				name_override: "神之谴戒：冷却时间",
				description_override: "<h1>普通神杖碎片</h1>神之谴戒降低${value}%冷却时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_mars_gods_rebuke_flat_crit_mult",
		name: "God's Rebuke: Crit Multiplier",
		description: "<h1>Common Scepter Fragment</h1>Increases God's Rebuke Crit Multiplier by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Göttlicher Tadel: Kritischer Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den kritischen Schaden von Göttlicher Tadel um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "God's Rebuke: критический урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к множителю крита у God's Rebuke.",
			},

			{
				language: Language.SChinese,
				name_override: "神之谴戒：暴击系数",
				description_override: "<h1>普通神杖碎片</h1>神之谴戒提升${value}暴击系数。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_mars_bulwark_damage_reduction_front",
		name: "Bulwark: Front Damage Reduction",
		description: "<h1>Common Scepter Fragment</h1>Increases Bulwark Front Damage Reduction by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Bollwerk: Schadensreduzierung (Front)",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die frontale Schadensreduzierung von Bollwerk um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Bulwark: уменьшение урона спереди",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value}% к уменьшению урона спереди у Bulwark.",
			},

			{
				language: Language.SChinese,
				name_override: "护身甲盾：正面伤害降低",
				description_override: "<h1>普通神杖碎片</h1>护身甲盾提升${value}正面伤害降低。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_mars_bulwark_active_duration",
		name: "Bulwark: Active Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Bulwark Active Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Bollwerk: Dauer der aktiven Komponente",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht Dauer der aktiven Komponente um ${value} Sekunden.",
			},

			{
				language: Language.Russian,
				name_override: "Bulwark: активная длительность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. длительности активной Bulwark.",
			},

			{
				language: Language.SChinese,
				name_override: "护身甲盾：主动效果持续时间",
				description_override: "<h1>普通神杖碎片</h1>护身甲盾提升${value}主动效果持续时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_mars_arena_of_blood_duration",
		name: "Arena of Blood: Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Arena of Blood Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Arena des Blutes: Dauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Dauer von Arena des Blutes um ${value} Sekunden.",
			},

			{
				language: Language.Russian,
				name_override: "Arena of Blood: длительность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. длительности Arena of Blood.",
			},

			{
				language: Language.SChinese,
				name_override: "热血竞技场：持续时间",
				description_override: "<h1>普通神杖碎片</h1>热血竞技场提升${value}持续时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_mars_arena_of_blood_spear_damage",
		name: "Arena of Blood: Spear Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Arena of Blood Spear Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Arena des Blutes: Speerschaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Speerschaden von Arena des Blutes um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Arena of Blood: урон от копий",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от копий у Arena of Blood.",
			},

			{
				language: Language.SChinese,
				name_override: "热血竞技场：战矛伤害",
				description_override: "<h1>普通神杖碎片</h1>热血竞技场提升${value}点战矛伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_omniknight_purification_manacost",
		name: "Purification: Mana Cost",
		description: "<h1>Common Scepter Fragment</h1>Decreases Purification Mana Cost by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Reinigung: Manakosten",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert Manakosten für Reinigung um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Purification: расход маны",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% от расхода маны на Purification.",
			},

			{
				language: Language.SChinese,
				name_override: "洗礼：魔法消耗",
				description_override: "<h1>普通神杖碎片</h1>洗礼降低${value}%魔法消耗。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_omniknight_purification_flat_heal",
		name: "Purification: Heal / Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Purification Heal / Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Reinigung: Heilung/Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht Heilung/Schaden von Reinigung um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Purification: лечение и урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к лечению и урону от Purification.",
			},

			{
				language: Language.SChinese,
				name_override: "洗礼：治疗/伤害",
				description_override: "<h1>普通神杖碎片</h1>洗礼提升${value}点治疗/伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_omniknight_repel_flat_duration",
		name: "Heavenly Grace: Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Heavenly Grace Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Himmlische Gnade: Dauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht Dauer von Himmlische Gnade um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Heavenly Grace: длительность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. длительности Heavenly Grace.",
			},

			{
				language: Language.SChinese,
				name_override: "天国恩赐：持续时间",
				description_override: "<h1>普通神杖碎片</h1>天国恩赐提升${value}持续时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_omniknight_repel_flat_damage_reduction",
		name: "Heavenly Grace: Damage Reduction",
		description: "<h1>Common Scepter Fragment</h1>Increases Heavenly Grace Damage Reduction by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Himmlische Gnade: Schadensreduzierung",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Schadensreduzierung von Himmlische Gnade um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Heavenly Grace: сопротивление урону",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} с сопротивлению урону от Heavenly Grace.",
			},

			{
				language: Language.SChinese,
				name_override: "天国恩赐：伤害降低",
				description_override: "<h1>普通神杖碎片</h1>天国恩赐提升${value}伤害降低。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_omniknight_degen_aura_flat_radius",
		name: "Degen Aura: Radius",
		description: "<h1>Common Scepter Fragment</h1>Increases Degen Aura Radius by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Aura der Lähmung: Radius",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Radius von Aura der Lähmung um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Degen Aura: радиус",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к радиусу Degen Aura.",
			},

			{
				language: Language.SChinese,
				name_override: "退化光环：作用范围",
				description_override: "<h1>普通神杖碎片</h1>退化光环提升${value}作用范围。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_omniknight_degen_aura_flat_move_speed_bonus",
		name: "Degen Aura: Move Speed Reduction",
		description: "<h1>Common Scepter Fragment</h1>Increases Degen Aura Move Speed Reduction by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Aura der Lähmung: Bewegungstemporeduzierung",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Bewegungstemporeduzierung von Aura der Lähmung um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Degen Aura: замедление",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value}% к замедлению передвижения от Degen Aura.",
			},

			{
				language: Language.SChinese,
				name_override: "退化光环：移动速度减缓",
				description_override: "<h1>普通神杖碎片</h1>退化光环提升${value}移动速度减缓。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_omniknight_guardian_angel_flat_duration",
		name: "Guardian Angel: Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Guardian Angel Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schutzengel: Dauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Dauer von Schutzengel um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Guardian Angel: длительность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. длительности Guardian Angel.",
			},

			{
				language: Language.SChinese,
				name_override: "守护天使：持续时间",
				description_override: "<h1>普通神杖碎片</h1>守护天使提升${value}持续时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_omniknight_guardian_angel_cooldown",
		name: "Guardian Angel: Cooldown",
		description: "<h1>Common Scepter Fragment</h1>Decreases Guardian Angel Cooldown by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schutzengel: Abklingzeit",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Abklingzeit von Schutzengel um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Guardian Angel: перезарядка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% перезарядки Guardian Angel.",
			},

			{
				language: Language.SChinese,
				name_override: "守护天使：冷却时间",
				description_override: "<h1>普通神杖碎片</h1>守护天使降低${value}%冷却时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_queenofpain_shadow_strike_strike_damage",
		name: "Shadow Strike: Strike Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Shadow Strike Strike Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schattendolch: Trefferschaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Trefferschaden für Schattendolch um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Shadow Strike: урон от попадания",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от попадания у Shadow Strike.",
			},

			{
				language: Language.SChinese,
				name_override: "暗影突袭：突袭伤害",
				description_override: "<h1>普通神杖碎片</h1>暗影突袭提升${value}点突袭伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_queenofpain_shadow_strike_dot_damage",
		name: "Shadow Strike: Tick Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Shadow Strike Tick Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schattendolch: Schaden pro Instanz",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden pro Instanz von Schattendolch um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Shadow Strike: периодический урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к периодическому урону от Shadow Strike.",
			},

			{
				language: Language.SChinese,
				name_override: "暗影突袭：毒发伤害",
				description_override: "<h1>普通神杖碎片</h1>暗影突袭提升${value}点毒发伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_queenofpain_blink_percent_cooldown",
		name: "Blink: Cooldown",
		description: "<h1>Common Scepter Fragment</h1>Decreases Blink Cooldown by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Blinzeln: Abklingzeit",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Abklingzeit von Blinzeln um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Blink: перезарядка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% перезарядки Blink.",
			},

			{
				language: Language.SChinese,
				name_override: "闪烁：冷却时间",
				description_override: "<h1>普通神杖碎片</h1>闪烁降低${value}%冷却时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_queenofpain_blink_range",
		name: "Blink: Range",
		description: "<h1>Common Scepter Fragment</h1>Increases Blink Range by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Blinzeln: Reichweite",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Reichweite von Blinzeln um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Blink: дальность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к дальности Blink.",
			},

			{
				language: Language.SChinese,
				name_override: "闪烁：距离",
				description_override: "<h1>普通神杖碎片</h1>闪烁提升${value}距离。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_queenofpain_scream_of_pain_damage",
		name: "Scream of Pain: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Scream of Pain Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schrei der Pein: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Schrei der Pein um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Scream of Pain: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Scream of Pain.",
			},

			{
				language: Language.SChinese,
				name_override: "痛苦尖叫：伤害",
				description_override: "<h1>普通神杖碎片</h1>痛苦尖叫提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_queenofpain_scream_of_pain_radius",
		name: "Scream of Pain: Radius",
		description: "<h1>Common Scepter Fragment</h1>Increases Scream of Pain Radius by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schrei der Pein: Radius",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Radius von Schrei der Pein um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Scream of Pain: радиус",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к радиусу Scream of Pain.",
			},

			{
				language: Language.SChinese,
				name_override: "痛苦尖叫：作用范围",
				description_override: "<h1>普通神杖碎片</h1>痛苦尖叫提升${value}作用范围。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_queenofpain_sonic_wave_percent_cooldown",
		name: "Sonic Wave: Cooldown",
		description: "<h1>Common Scepter Fragment</h1>Decreases Sonic Wave Cooldown by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schallwelle: Abklingzeit",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Abklingzeit von Schallwelle um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Sonic Wave: перезарядка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% перезарядки Sonic Wave.",
			},

			{
				language: Language.SChinese,
				name_override: "超声冲击波：冷却时间",
				description_override: "<h1>普通神杖碎片</h1>超声冲击波降低${value}%冷却时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_queenofpain_sonic_wave_damage",
		name: "Sonic Wave: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Sonic Wave Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schallwelle: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Schallwelle um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Sonic Wave: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Sonic Wave.",
			},

			{
				language: Language.SChinese,
				name_override: "超声冲击波：伤害",
				description_override: "<h1>普通神杖碎片</h1>超声冲击波提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_slark_dark_pact_cooldown",
		name: "Dark Pact: Cooldown",
		description: "<h1>Common Scepter Fragment</h1>Decreases Dark Pact Cooldown by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Dunkler Pakt: Abklingzeit",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Abklingzeit von Dunkler Pakt um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Dark Pact: перезарядка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% перезарядки Dark Pact.",
			},

			{
				language: Language.SChinese,
				name_override: "黑暗契约：冷却时间",
				description_override: "<h1>普通神杖碎片</h1>黑暗契约降低${value}%冷却时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_slark_dark_pact_total_damage",
		name: "Dark Pact: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Dark Pact Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Dunkler Pakt: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Dunkler Pakt um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Dark Pact: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Dark Pact.",
			},

			{
				language: Language.SChinese,
				name_override: "黑暗契约：伤害",
				description_override: "<h1>普通神杖碎片</h1>黑暗契约提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_slark_pounce_distance",
		name: "Pounce: Distance",
		description: "<h1>Common Scepter Fragment</h1>Increases Pounce Distance by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Sprung: Distanz",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Distanz von Sprung um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Pounce: дальность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к дальности Pounce.",
			},

			{
				language: Language.SChinese,
				name_override: "突袭：距离",
				description_override: "<h1>普通神杖碎片</h1>突袭提升${value}距离。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_slark_pounce_damage",
		name: "Pounce: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Pounce Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Sprung: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Sprung um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Pounce: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Pounce.",
			},

			{
				language: Language.SChinese,
				name_override: "突袭：伤害",
				description_override: "<h1>普通神杖碎片</h1>突袭提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_slark_essence_shift_agi_gain",
		name: "Essence Shift: Active Agility Gain",
		description: "<h1>Common Scepter Fragment</h1>Increases Essence Shift Active Agility Gain by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Essenzraub: Aktiver Agilitätszuwachs",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Agilitätszuwachs durch Essenzraub um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Essence Shift: ловкость при активации",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к ловкости за заряд у активной Essence Shift.",
			},

			{
				language: Language.SChinese,
				name_override: "能量转移：主动敏捷获取",
				description_override: "<h1>普通神杖碎片</h1>能量转移提升${value}主动效果敏捷获取。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_slark_essence_shift_max_stacks",
		name: "Essence Shift: Max Stacks",
		description: "<h1>Common Scepter Fragment</h1>Increases Essence Shift Max Stacks by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Essenzraub: Max. Anzahl",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die max. Anzahl von Essenzraub-Ladungen um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Essence Shift: максимум зарядов",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к максимуму зарядов Essence Shift.",
			},

			{
				language: Language.SChinese,
				name_override: "能量转移：最大叠加次数",
				description_override: "<h1>普通神杖碎片</h1>能量转移提升${value}次叠加上限。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_slark_shadow_dance_duration",
		name: "Shadow Dance: Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Shadow Dance Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schattentanz: Dauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Dauer von Schattentanz um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Shadow Dance: длительность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. длительности Shadow Dance.",
			},

			{
				language: Language.SChinese,
				name_override: "暗影之舞：持续时间",
				description_override: "<h1>普通神杖碎片</h1>暗影之舞提升${value}持续时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_slark_shadow_dance_bonus_bonus_regen_pct",
		name: "Shadow Dance: Regen Percent",
		description: "<h1>Common Scepter Fragment</h1>Increases Shadow Dance Regen Percent by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schattentanz: Lebensregeneration",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Lebensregeneration von Schattentanz um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Shadow Dance: здоровье в секунду",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value}% здоровья в секунду от Shadow Dance.",
			},

			{
				language: Language.SChinese,
				name_override: "暗影之舞：回复百分比",
				description_override: "<h1>普通神杖碎片</h1>暗影之舞提升${value}回复百分比。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_snapfire_scatterblast_flat_damage",
		name: "Scatterblast: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Scatterblast Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Streuwumme: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Streuwumme um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Scatterblast: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Scatterblast.",
			},

			{
				language: Language.SChinese,
				name_override: "电光石火：伤害",
				description_override: "<h1>普通神杖碎片</h1>电光石火提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_snapfire_scatterblast_pct_cooldown",
		name: "Scatterblast: Cooldown",
		description: "<h1>Common Scepter Fragment</h1>Decreases Scatterblast Cooldown by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Streuwumme: Abklingzeit",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Abklingzeit von Streuwumme um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Scatterblast: перезарядка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% перезарядки Scatterblast.",
			},

			{
				language: Language.SChinese,
				name_override: "电光石火：冷却时间",
				description_override: "<h1>普通神杖碎片</h1>电光石火降低${value}%冷却时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_snapfire_firesnap_cookie_flat_impact_damage",
		name: "Firesnap Cookie: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Firesnap Cookie Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Knisterkeks: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Knisterkeks um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Firesnap Cookie: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Firesnap Cookie.",
			},

			{
				language: Language.SChinese,
				name_override: "龙炎饼干：伤害",
				description_override: "<h1>普通神杖碎片</h1>龙炎饼干提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_snapfire_firesnap_cookie_flat_stun_duration",
		name: "Firesnap Cookie: Stun Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Firesnap Cookie Stun Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Knisterkeks: Betäubungsdauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Betäubungsdauer von Knisterkeks um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Firesnap Cookie: оглушение",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. оглушения от Firesnap Cookie.",
			},

			{
				language: Language.SChinese,
				name_override: "龙炎饼干：眩晕时间",
				description_override: "<h1>普通神杖碎片</h1>龙炎饼干提升${value}眩晕时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_snapfire_lil_shredder_flat_damage",
		name: "Lil' Shredder: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Lil' Shredder Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Durchlöcherer: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Durchlöcherer um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Lil' Shredder: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Lil' Shredder.",
			},

			{
				language: Language.SChinese,
				name_override: "霹雳铁手：伤害",
				description_override: "<h1>普通神杖碎片</h1>霹雳铁手提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_snapfire_lil_shredder_flat_attacks",
		name: "Lil' Shredder: Attacks",
		description: "<h1>Common Scepter Fragment</h1>Increases Lil' Shredder Attacks by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Durchlöcherer: Angriffe",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Angriffe von Durchlöcherer um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Lil' Shredder: число атак",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к числу атак у Lil' Shredder.",
			},

			{
				language: Language.SChinese,
				name_override: "霹雳铁手：攻击次数",
				description_override: "<h1>普通神杖碎片</h1>霹雳铁手提升${value}次攻击次数。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_snapfire_mortimer_kisses_flat_projectile_count",
		name: "Mortimer Kisses: Projectile Count",
		description: "<h1>Common Scepter Fragment</h1>Increases Mortimer Kisses Projectile Count by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Mortimers Küsse: Klumpenanzahl",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Klumpenanzahl von Mortimers Küsse um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Mortimer Kisses: число шаров",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к числу шаров Mortimer Kisses.",
			},

			{
				language: Language.SChinese,
				name_override: "蜥蜴绝吻：火痰数量",
				description_override: "<h1>普通神杖碎片</h1>蜥蜴绝吻提升${value}个火痰数量。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_snapfire_mortimer_kisses_flat_burn_damage",
		name: "Mortimer Kisses: Burn Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Mortimer Kisses Burn Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Mortimers Küsse: Brandschaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Brandschaden von Mortimers Küsse um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Mortimer Kisses: урон от лужи",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону в секунду от лужи Mortimer Kisses.",
			},

			{
				language: Language.SChinese,
				name_override: "蜥蜴绝吻：烧灼伤害",
				description_override: "<h1>普通神杖碎片</h1>蜥蜴绝吻提升${value}点烧灼伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_sniper_shrapnel_flat_damage",
		name: "Shrapnel: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Shrapnel Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schrapnell: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Schrapnell um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Shrapnel: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Shrapnel.",
			},

			{
				language: Language.SChinese,
				name_override: "榴霰弹：伤害",
				description_override: "<h1>普通神杖碎片</h1>榴霰弹提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_sniper_shrapnel_flat_radius",
		name: "Shrapnel: Radius",
		description: "<h1>Common Scepter Fragment</h1>Increases Shrapnel Radius by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schrapnell: Radius",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Radius von Schrapnell um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Shrapnel: радиус",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к радиусу Shrapnel.",
			},

			{
				language: Language.SChinese,
				name_override: "榴霰弹：作用范围",
				description_override: "<h1>普通神杖碎片</h1>榴霰弹提升${value}作用范围。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_sniper_shrapnel_duration",
		name: "Shrapnel: Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Shrapnel Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schrapnell: Dauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Dauer von Schrapnell um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Shrapnel: длительность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. длительности Shrapnel.",
			},

			{
				language: Language.SChinese,
				name_override: "榴霰弹：持续时间",
				description_override: "<h1>普通神杖碎片</h1>榴霰弹提升${value}持续时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_sniper_headshot_flat_damage",
		name: "Headshot: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Headshot Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kopfschuss: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Kopfschuss um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Headshot: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Headshot.",
			},

			{
				language: Language.SChinese,
				name_override: "爆头：伤害",
				description_override: "<h1>普通神杖碎片</h1>爆头提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_sniper_headshot_proc_chance",
		name: "Headshot: Proc Chance",
		description: "<h1>Common Scepter Fragment</h1>Increases Headshot Proc Chance by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kopfschuss: Auslösechance",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Auslösechance von Kopfschuss um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Headshot: шанс срабатывания",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value}% к шансу срабатывания Headshot.",
			},

			{
				language: Language.SChinese,
				name_override: "爆头：触发几率",
				description_override: "<h1>普通神杖碎片</h1>爆头提升${value}触发几率。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_sniper_take_aim_flat_bonus_attack_range",
		name: "Take Aim: Bonus Attack Range",
		description: "<h1>Common Scepter Fragment</h1>Increases Take Aim Bonus Range by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Zielwasser: Bonusangriffsreichweite",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Bonusreichweite mit Zielwasser um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Take Aim: дальность атаки",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к дальности атаки от Take Aim.",
			},

			{
				language: Language.SChinese,
				name_override: "瞄准：攻击距离加成",
				description_override: "<h1>普通神杖碎片</h1>瞄准提升${value}攻击距离加成。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_sniper_assassinate_flat_damage",
		name: "Assassinate: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Assassinate Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Gnadenschuss: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Gnadenschuss um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Assassinate: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Assassinate.",
			},

			{
				language: Language.SChinese,
				name_override: "暗杀：伤害",
				description_override: "<h1>普通神杖碎片</h1>暗杀提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_sniper_assassinate_percent_cast_point",
		name: "Assassinate: Aim Duration",
		description: "<h1>Common Scepter Fragment</h1>Decreases Assassinate Aim Duration by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Gnadenschuss: Zieldauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Zieldauer von Gnadenschuss um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Assassinate: время подготовки",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% от времени подготовки Assassinate.",
			},

			{
				language: Language.SChinese,
				name_override: "暗杀：瞄准时间",
				description_override: "<h1>普通神杖碎片</h1>暗杀降低${value}瞄准时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_templar_assassin_refraction_instances",
		name: "Refraction: Instances",
		description: "<h1>Common Scepter Fragment</h1>Increases Refraction Instances by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Refraktion: Instanzen",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Instanzen von Refraktion um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Refraction: число эффектов",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к числу эффектов Refraction.",
			},

			{
				language: Language.SChinese,
				name_override: "折光：次数",
				description_override: "<h1>普通神杖碎片</h1>折光提升${value}次生效次数。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_templar_assassin_refraction_bonus_damage",
		name: "Refraction: Bonus Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Refraction Bonus Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Refraktion: Bonusschaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Bonusschaden von Refraktion um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Refraction: дополнительный урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к доп. урону от Refraction.",
			},

			{
				language: Language.SChinese,
				name_override: "折光：攻击力加成",
				description_override: "<h1>普通神杖碎片</h1>折光提升${value}点攻击力加成。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_templar_assassin_meld_bonus_damage",
		name: "Meld: Bonus Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Meld Bonus Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Verschmelzen: Bonusschaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Bonusschaden von Verschmelzen um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Meld: дополнительный урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к дополнительному урону от Meld.",
			},

			{
				language: Language.SChinese,
				name_override: "隐匿：额外伤害",
				description_override: "<h1>普通神杖碎片</h1>隐匿提升${value}点额外伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_templar_assassin_meld_bonus_armor",
		name: "Meld: Armor Reduction",
		description: "<h1>Common Scepter Fragment</h1>Increases Meld Armor Reduction by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Verschmelzen: Rüstungsreduzierung",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Rüstungsreduzierung von Verschmelzen um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Meld: снижение брони",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к снижению брони от Meld.",
			},

			{
				language: Language.SChinese,
				name_override: "隐匿：护甲降低",
				description_override: "<h1>普通神杖碎片</h1>隐匿提升${value}点护甲降低。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_templar_assassin_psi_blades_bonus_attack_range",
		name: "Psi Blades: Bonus Attack Range",
		description: "<h1>Common Scepter Fragment</h1>Increases Psi Blades Bonus Attack Range by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Psiklingen: Bonusangriffsreichweite",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Bonusangriffsreichweite von Psiklingen um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Psi Blades: дальность атаки",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к дальности атаки от Psi Blades.",
			},

			{
				language: Language.SChinese,
				name_override: "灵能之刃：攻击距离加成",
				description_override: "<h1>普通神杖碎片</h1>灵能之刃提升${value}攻击距离加成。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_templar_assassin_psi_blades_attack_spill_width",
		name: "Psi Blades: Spill Width",
		description: "<h1>Common Scepter Fragment</h1>Increases Psi Blades Spill Width by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Psiklingen: Streuradius",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Streuradius von Psiklingen um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Psi Blades: ширина пробития",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к ширине пробития от Psi Blades.",
			},

			{
				language: Language.SChinese,
				name_override: "灵能之刃：飞溅宽度",
				description_override: "<h1>普通神杖碎片</h1>灵能之刃提升${value}飞溅宽度。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_templar_assassin_psionic_trap_max_traps",
		name: "Psionic Trap: Max Traps",
		description: "<h1>Common Scepter Fragment</h1>Increases Psionic Trap Max Traps by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Psionische Falle: Max. Fallen",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die max. Anzahl von Psionische Falle um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Psionic Trap: число ловушек",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к максимуму ловушек Psionic Trap.",
			},

			{
				language: Language.SChinese,
				name_override: "灵能陷阱：最大陷阱数",
				description_override: "<h1>普通神杖碎片</h1>灵能陷阱提升${value}个陷阱数上限。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_templar_assassin_psionic_trap_trap_damage",
		name: "Psionic Trap: Trap Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Psionic Trap Trap Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Psionische Falle: Fallenschaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Psionische Falle um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Psionic Trap: урон ловушек",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону ловушек Psionic Trap.",
			},

			{
				language: Language.SChinese,
				name_override: "灵能陷阱：陷阱伤害",
				description_override: "<h1>普通神杖碎片</h1>灵能陷阱提升${value}点陷阱伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_tusk_ice_shards_flat_damage",
		name: "Ice Shards: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Ice Shards Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Eissplitter: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Eissplitter um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Ice Shards: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Ice Shards.",
			},

			{
				language: Language.SChinese,
				name_override: "寒冰碎片：伤害",
				description_override: "<h1>普通神杖碎片</h1>寒冰碎片提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_tusk_ice_shards_flat_shard_duration",
		name: "Ice Shards: Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Ice Shards Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Eissplitter: Dauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Dauer von Eissplitter um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Ice Shards: длительность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. длительности Ice Shards.",
			},

			{
				language: Language.SChinese,
				name_override: "寒冰碎片：持续时间",
				description_override: "<h1>普通神杖碎片</h1>寒冰碎片提升${value}持续时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_tusk_snowball_flat_snowball_damage",
		name: "Snowball: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Snowball Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schneeball: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Schneeball um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Snowball: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Snowball.",
			},

			{
				language: Language.SChinese,
				name_override: "雪球：伤害",
				description_override: "<h1>普通神杖碎片</h1>雪球提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_tusk_snowball_flat_stun_duration",
		name: "Snowball: Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Snowball Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schneeball: Dauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Dauer von Schneeball um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Snowball: длительность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. длительности Snowball.",
			},

			{
				language: Language.SChinese,
				name_override: "雪球：持续时间",
				description_override: "<h1>普通神杖碎片</h1>雪球提升${value}持续时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_tusk_tag_team_flat_damage",
		name: "Tag Team: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Tag Team Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Tag Team: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Tag Team um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Tag Team: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Tag Team.",
			},

			{
				language: Language.SChinese,
				name_override: "摔角行家：伤害",
				description_override: "<h1>普通神杖碎片</h1>摔角行家提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_tusk_tag_team_pct_cooldown",
		name: "Tag Team: Cooldown",
		description: "<h1>Common Scepter Fragment</h1>Decreases Tag Team Cooldown by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Tag Team: Abklingzeit",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Abklingzeit von Tag Team um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Tag Team: перезарядка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% перезарядки Tag Team.",
			},

			{
				language: Language.SChinese,
				name_override: "摔角行家：冷却时间",
				description_override: "<h1>普通神杖碎片</h1>摔角行家降低${value}%冷却时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_tusk_walrus_punch_pct_cooldown",
		name: "Walrus Punch: Cooldown",
		description: "<h1>Common Scepter Fragment</h1>Decreases Walrus Punch Cooldown by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Walross-Schlag: Abklingzeit",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Abklingzeit von Walross-Schlag um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Walrus Punch: перезарядка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% перезарядки Walrus Punch.",
			},

			{
				language: Language.SChinese,
				name_override: "海象神拳：冷却时间",
				description_override: "<h1>普通神杖碎片</h1>海象神拳降低${value}%冷却时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_tusk_walrus_punch_flat_crit_multiplier",
		name: "Walrus Punch: Crit Multiplier",
		description: "<h1>Common Scepter Fragment</h1>Increases Walrus Punch Crit Multiplier by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Walross-Schalg: Kritischer Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den kritischen Schaden von Walross-Schlag um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Walrus Punch: критический урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к критическому урону от Walrus Punch.",
			},

			{
				language: Language.SChinese,
				name_override: "海象神拳：暴击系数",
				description_override: "<h1>普通神杖碎片</h1>海象神拳提升${value}暴击系数。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_ursa_earthshock_flat_damage",
		name: "Earthshock: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Earthshock Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Erdschock: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Erdschock um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Earthshock: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Earthshock.",
			},

			{
				language: Language.SChinese,
				name_override: "震撼大地：伤害",
				description_override: "<h1>普通神杖碎片</h1>震撼大地提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_ursa_earthshock_flat_radius",
		name: "Earthshock: Radius",
		description: "<h1>Common Scepter Fragment</h1>Increases Earthshock Radius by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Erdschock: Radius",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Radius von Erdschock um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Earthshock: радиус",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к радиусу Earthshock.",
			},

			{
				language: Language.SChinese,
				name_override: "震撼大地：作用范围",
				description_override: "<h1>普通神杖碎片</h1>震撼大地提升${value}作用范围。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_ursa_overpower_flat_max_attacks",
		name: "Overpower: Max Attacks",
		description: "<h1>Common Scepter Fragment</h1>Increases Overpower Max Attacks by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Überwältigen: Max. Angriffe",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die max. Angriffe von Überwältigen um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Overpower: число атак",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к числу атак у Overpower.",
			},

			{
				language: Language.SChinese,
				name_override: "超强力量：最大攻击次数",
				description_override: "<h1>普通神杖碎片</h1>超强力量提升${value}次攻击次数上限。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_ursa_overpower_percent_cooldown",
		name: "Overpower: Cooldown",
		description: "<h1>Common Scepter Fragment</h1>Decreases Overpower Cooldown by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Überwältigen: Abklingzeit",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Abklingzeit von Überwältigen um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Overpower: перезарядка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% перезарядки Overpower.",
			},

			{
				language: Language.SChinese,
				name_override: "超强力量：冷却时间",
				description_override: "<h1>普通神杖碎片</h1>超强力量降低${value}%冷却时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_ursa_fury_swipes_flat_damage_per_stack",
		name: "Fury Swipes: Damage Per Stack",
		description: "<h1>Common Scepter Fragment</h1>Increases Fury Swipe Damage Per Stack by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Zornhiebe: Schaden pro Instanz",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden pro Instanz von Zornhiebe um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Fury Swipes: урон за эффект",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону за атаку Fury Swipes.",
			},

			{
				language: Language.SChinese,
				name_override: "怒意狂击：每次叠加伤害",
				description_override: "<h1>普通神杖碎片</h1>怒意狂击提升${value}点每次叠加伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_ursa_fury_swipes_flat_max_swipe_stack",
		name: "Fury Swipes: Max Stacks",
		description: "<h1>Common Scepter Fragment</h1>Increases Fury Swipe Max Stacks by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Zornhiebe: Max. Instanzen",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die max. Instanzen von Zornhiebe um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Fury Swipes: максимум эффектов",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к максимуму эффектов Fury Swipes.",
			},

			{
				language: Language.SChinese,
				name_override: "怒意狂击：最大叠加次数",
				description_override: "<h1>普通神杖碎片</h1>怒意狂击提升${value}次叠加次数上限。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_ursa_enrage_flat_duration",
		name: "Enrage: Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Enrage Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Erzürnen: Dauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Dauer von Erzürnen um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Enrage: длительность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. длительности Enrage.",
			},

			{
				language: Language.SChinese,
				name_override: "激怒：持续时间",
				description_override: "<h1>普通神杖碎片</h1>激怒提升${value}持续时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_ursa_enrage_percent_cooldown",
		name: "Enrage: Cooldown",
		description: "<h1>Common Scepter Fragment</h1>Decreases Enrage Cooldown by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Erzürnen: Abklingzeit",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Abklingzeit von Erzürnen um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Enrage: перезарядка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% перезарядки Enrage.",
			},

			{
				language: Language.SChinese,
				name_override: "激怒：冷却时间",
				description_override: "<h1>普通神杖碎片</h1>激怒降低${value}%冷却时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_viper_poison_attack_damage",
		name: "Poison Attack: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Poison Attack Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Giftangriff: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Giftangriff um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Poison Attack: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Poison Attack.",
			},

			{
				language: Language.SChinese,
				name_override: "毒性攻击：伤害",
				description_override: "<h1>普通神杖碎片</h1>毒性攻击提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_viper_poison_attack_magic_resistance",
		name: "Poison Attack: Magic Resistance Reduction",
		description: "<h1>Common Scepter Fragment</h1>Increases Poison Attack Magic Resistance Reduction by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Giftangriff: Magieresistenzreduzierung",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Magieresistenzreduzierung von Giftangriff um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Poison Attack: снижение сопротивления магии",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к снижению сопротивления магии от Poison Attack.",
			},

			{
				language: Language.SChinese,
				name_override: "毒性攻击：魔法抗性降低",
				description_override: "<h1>普通神杖碎片</h1>毒性攻击提升${value}魔法抗性降低。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_viper_nethertoxin_max_damage",
		name: "Nethertoxin: Max Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Nethertoxin Max Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Niflgift: Max. Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den max. Schaden von Niflgift um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Nethertoxin: максимальный урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к максимальному урону от Nethertoxin.",
			},

			{
				language: Language.SChinese,
				name_override: "幽冥剧毒：最大伤害",
				description_override: "<h1>普通神杖碎片</h1>幽冥剧毒提升${value}点最大伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_viper_nethertoxin_radius",
		name: "Nethertoxin: Radius",
		description: "<h1>Common Scepter Fragment</h1>Increases Nethertoxin Radius by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Niflgift: Radius",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Radius von Niflgift um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Nethertoxin: радиус",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к радиусу Nethertoxin.",
			},

			{
				language: Language.SChinese,
				name_override: "幽冥剧毒：作用范围",
				description_override: "<h1>普通神杖碎片</h1>幽冥剧毒提升${value}作用范围。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_viper_corrosive_skin_bonus_magic_resistance",
		name: "Corrosive Skin: Magic Resistance",
		description: "<h1>Common Scepter Fragment</h1>Increases Corrosive Skin Magic Resistance by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Ätzende Haut: Magieresistenz",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Magieresistenz von Ätzende Haut um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Corrosive Skin: сопротивление магии",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к сопротивлению магии от Corrosive Skin.",
			},

			{
				language: Language.SChinese,
				name_override: "腐蚀皮肤：魔法抗性",
				description_override: "<h1>普通神杖碎片</h1>腐蚀皮肤提升${value}魔法抗性。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_viper_corrosive_skin_damage",
		name: "Corrosive Skin: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Corrosive Skin Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Ätzende Haut: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Ätzende Haut um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Corrosive Skin: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Corrosive Skin.",
			},

			{
				language: Language.SChinese,
				name_override: "腐蚀皮肤：伤害",
				description_override: "<h1>普通神杖碎片</h1>腐蚀皮肤提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_viper_viper_strike_duration",
		name: "Viper Strike: Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Viper Strike Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Vipernschlag: Dauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Dauer von Vipernschlag um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Viper Strike: длительность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. длительности Viper Strike.",
			},

			{
				language: Language.SChinese,
				name_override: "蝮蛇突袭：持续时间",
				description_override: "<h1>普通神杖碎片</h1>蝮蛇突袭提升${value}持续时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_viper_viper_strike_damage",
		name: "Viper Strike: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Viper Strike Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Vipernschlag: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Vipernschlag um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Viper Strike: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Viper Strike.",
			},

			{
				language: Language.SChinese,
				name_override: "蝮蛇突袭：伤害",
				description_override: "<h1>普通神杖碎片</h1>蝮蛇突袭提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_weaver_the_swarm_flat_armor_reduction",
		name: "The Swarm: Armor Reduction",
		description: "<h1>Common Scepter Fragment</h1>Increases The Swarm Armor Reduction by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Der Schwarm: Rüstungsreduzierung",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Rüstungsreduzierung von Der Schwarm um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "The Swarm: снижение брони",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к снижению брони от The Swarm.",
			},

			{
				language: Language.SChinese,
				name_override: "虫群：护甲降低",
				description_override: "<h1>普通神杖碎片</h1>虫群提升${value}点护甲降低。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_weaver_the_swarm_flat_damage",
		name: "The Swarm: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases The Swarm Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Der Schwarm: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Der Schwarm um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "The Swarm: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от The Swarm.",
			},

			{
				language: Language.SChinese,
				name_override: "虫群：伤害",
				description_override: "<h1>普通神杖碎片</h1>虫群提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_weaver_the_swarm_percent_cooldown",
		name: "The Swarm: Cooldown",
		description: "<h1>Common Scepter Fragment</h1>Decreases The Swarm Cooldown by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Der Schwarm: Abklingzeit",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Abklingzeit von Der Schwarm um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "The Swarm: перезарядка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% перезарядки The Swarm.",
			},

			{
				language: Language.SChinese,
				name_override: "虫群：冷却时间",
				description_override: "<h1>普通神杖碎片</h1>虫群降低${value}%冷却时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_weaver_shukuchi_flat_damage",
		name: "Shukuchi: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Shukuchi Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Shukuchi: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Shukuchi um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Shukuchi: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Shukuchi.",
			},

			{
				language: Language.SChinese,
				name_override: "缩地：伤害",
				description_override: "<h1>普通神杖碎片</h1>缩地提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_weaver_shukuchi_duration",
		name: "Shukuchi: Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Shukuchi Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Shukuchi: Dauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Dauer von Shukuchi um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Shukuchi: длительность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. длительности Shukuchi.",
			},

			{
				language: Language.SChinese,
				name_override: "缩地：持续时间",
				description_override: "<h1>普通神杖碎片</h1>缩地提升${value}持续时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_weaver_geminate_attack_cooldown",
		name: "Geminate Attack: Cooldown",
		description: "<h1>Common Scepter Fragment</h1>Decreases Geminate Attack Cooldown by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Zwillingsangriff: Abklingzeit",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Abklingzeit von Zwillingsangriff um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Geminate Attack: перезарядка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% перезарядки Geminate Attack.",
			},

			{
				language: Language.SChinese,
				name_override: "连击：冷却时间",
				description_override: "<h1>普通神杖碎片</h1>连击降低${value}%冷却时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_weaver_geminate_attack_flat_bonus_damage",
		name: "Geminate Attack: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Geminate Attack Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Zwillingsangriff: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Zwillingsangriff um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Geminate Attack: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Geminate Attack.",
			},

			{
				language: Language.SChinese,
				name_override: "连击：伤害",
				description_override: "<h1>普通神杖碎片</h1>连击提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_weaver_time_lapse_cooldown",
		name: "Time Lapse: Cooldown",
		description: "<h1>Common Scepter Fragment</h1>Decreases Time Lapse Cooldown by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Zeitlücke: Abklingzeit",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Abklingzeit von Zeitlücke um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Time Lapse: перезарядка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% перезарядки Time Lapse.",
			},

			{
				language: Language.SChinese,
				name_override: "时光倒流：冷却时间",
				description_override: "<h1>普通神杖碎片</h1>时光倒流降低${value}%冷却时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_winter_wyvern_arctic_burn_flat_damage",
		name: "Arctic Burn: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Arctic Burn Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Arktisches Feuer: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Arktisches Feuer um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Arctic Burn: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Arctic Burn.",
			},

			{
				language: Language.SChinese,
				name_override: "严寒烧灼：伤害",
				description_override: "<h1>普通神杖碎片</h1>严寒烧灼提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_winter_wyvern_arctic_burn_flat_duration",
		name: "Arctic Burn: Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Arctic Burn Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Arktisches Feuer: Dauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Dauer von Arktisches Feuer um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Arctic Burn: длительность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. длительности Arctic Burn.",
			},

			{
				language: Language.SChinese,
				name_override: "严寒烧灼：持续时间",
				description_override: "<h1>普通神杖碎片</h1>严寒烧灼提升${value}持续时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_winter_wyvern_splinter_blast_flat_radius",
		name: "Splinter Blast: Radius",
		description: "<h1>Common Scepter Fragment</h1>Increases Splinter Blast Radius by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Splitterwurf: Radius",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Radius von Splitterwurf um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Splinter Blast: радиус",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к радиусу Splinter Blast.",
			},

			{
				language: Language.SChinese,
				name_override: "碎裂冲击：作用范围",
				description_override: "<h1>普通神杖碎片</h1>碎裂冲击提升${value}作用范围。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_winter_wyvern_splinter_blast_flat_damage",
		name: "Splinter Blast: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Splinter Blast Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Splitterwurf: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Splitterwurf um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Splinter Blast: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Splinter Blast.",
			},

			{
				language: Language.SChinese,
				name_override: "碎裂冲击：伤害",
				description_override: "<h1>普通神杖碎片</h1>碎裂冲击提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_winter_wyvern_cold_embrace_flat_heal_percentage",
		name: "Cold Embrace: Heal Percent",
		description: "<h1>Common Scepter Fragment</h1>Increases Cold Embrace Heal Percent by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kalte Umarmung: Heilung pro Sekunde",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Heilung pro Sekunde von Kalte Umarmung um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Cold Embrace: лечение",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value}% от макс. здоровья в секунду от Cold Embrace.",
			},

			{
				language: Language.SChinese,
				name_override: "极寒之拥：治疗百分比",
				description_override: "<h1>普通神杖碎片</h1>极寒之拥提升${value}回复百分比。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_winter_wyvern_cold_embrace_pct_cooldown",
		name: "Cold Embrace: Cooldown",
		description: "<h1>Common Scepter Fragment</h1>Decreases Cold Embrace Cooldown by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kalte Umarmung: Abklingzeit",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Abklingzeit von Kalte Umarmung um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Cold Embrace: перезарядка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% перезарядки Cold Embrace.",
			},

			{
				language: Language.SChinese,
				name_override: "极寒之拥：冷却时间",
				description_override: "<h1>普通神杖碎片</h1>极寒之拥降低${value}%冷却时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_winter_wyvern_winters_curse_flat_duration",
		name: "Winter's Curse: Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Winter's Curse Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Fluch des Winters: Dauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Dauer von Fluch des Winters um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Winter's Curse: длительность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. длительности Winter's Curse.",
			},

			{
				language: Language.SChinese,
				name_override: "寒冬诅咒：持续时间",
				description_override: "<h1>普通神杖碎片</h1>寒冬诅咒提升${value}持续时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_winter_wyvern_winters_curse_pct_cooldown",
		name: "Winter's Curse: Cooldown",
		description: "<h1>Common Scepter Fragment</h1>Decreases Winter's Curse Cooldown by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Fluch des Winters: Abklingzeit",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Abklingzeit von Fluch des Winters um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Winter's Curse: перезарядка",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% перезарядки Winter's Curse.",
			},

			{
				language: Language.SChinese,
				name_override: "寒冬诅咒：冷却时间",
				description_override: "<h1>普通神杖碎片</h1>寒冬诅咒降低${value}%冷却时间。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_witch_doctor_voodoo_restoration_manacost",
		name: "Voodoo Restoration: Mana Cost",
		description: "<h1>Common Scepter Fragment</h1>Decreases Voodoo Restoration Mana Cost by ${value}%.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Voodooheilung: Manakosten",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Reduziert die Manakosten von Voodooheilung um ${value} %.",
			},

			{
				language: Language.Russian,
				name_override: "Voodoo Restoration: расход маны",
				description_override: "<h1>Обычный фрагмент скипетра</h1>–${value}% от расхода маны на Voodoo Restoration.",
			},

			{
				language: Language.SChinese,
				name_override: "巫毒疗法：魔法消耗",
				description_override: "<h1>普通神杖碎片</h1>巫毒疗法降低${value}%魔法消耗。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_witch_doctor_voodoo_restoration_flat_heal",
		name: "Voodoo Restoration: Heal",
		description: "<h1>Common Scepter Fragment</h1>Increases Voodoo Restoration Heal by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Voodooheilung: Heilung",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Heilung von Voodooheilung um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Voodoo Restoration: лечение",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к лечению от Voodoo Restoration.",
			},

			{
				language: Language.SChinese,
				name_override: "巫毒疗法：治疗",
				description_override: "<h1>普通神杖碎片</h1>巫毒疗法提升${value}点治疗。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_witch_doctor_paralyzing_cask_flat_damage",
		name: "Paralyzing Cask: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Paralyzing Cask Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Lähmende Dosis: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Lähmende Dosis um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Paralyzing Cask: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Paralyzing Cask.",
			},

			{
				language: Language.SChinese,
				name_override: "麻痹药剂：伤害",
				description_override: "<h1>普通神杖碎片</h1>麻痹药剂提升${value}点伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_witch_doctor_paralyzing_cask_flat_bounces",
		name: "Paralyzing Cask: Bounces",
		description: "<h1>Common Scepter Fragment</h1>Increases Paralyzing Cask Bounces by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Lähmende Dosis: Sprünge",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Sprünge von Lähmende Dosis um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Paralyzing Cask: отскоки",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к числу отскоков от Paralyzing Cask.",
			},

			{
				language: Language.SChinese,
				name_override: "麻痹药剂：弹跳次数",
				description_override: "<h1>普通神杖碎片</h1>麻痹药剂提升${value}次弹跳次数。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_witch_doctor_maledict_flat_ticks",
		name: "Maledict: Ticks",
		description: "<h1>Common Scepter Fragment</h1>Increases Maledict Ticks by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Malediktum: Instanzen",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Malediktum-Instanzen um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Maledict: число срабатываний",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к числу срабатываний Maledict.",
			},

			{
				language: Language.SChinese,
				name_override: "巫蛊咒术：爆发次数",
				description_override: "<h1>普通神杖碎片</h1>巫蛊咒术提升${value}次爆发次数。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_witch_doctor_maledict_flat_max_bonus_damage",
		name: "Maledict: Max Bonus Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Maledict Max Bonus Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Malediktum: Max. Bonusschaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den max. Bonusschaden von Malediktum um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Maledict: максимальный урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к макс. урону за срабатывание Maledict.",
			},

			{
				language: Language.SChinese,
				name_override: "巫蛊咒术：最大额外伤害",
				description_override: "<h1>普通神杖碎片</h1>巫蛊咒术提升${value}最大额外伤害。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_witch_doctor_death_ward_flat_damage",
		name: "Death Ward: Damage",
		description: "<h1>Common Scepter Fragment</h1>Increases Death Ward Damage by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Totem des Todes: Schaden",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht den Schaden von Totem des Todes um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Death Ward: урон",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} к урону от Death Ward.",
			},

			{
				language: Language.SChinese,
				name_override: "死亡守卫：攻击力",
				description_override: "<h1>普通神杖碎片</h1>死亡守卫提升${value}点攻击力。",
			},

		]
	});

	Abilities.push({
		ability_classname: "item_aghsfort_witch_doctor_death_ward_flat_channel_duration",
		name: "Death Ward: Channel Duration",
		description: "<h1>Common Scepter Fragment</h1>Increases Death Ward Channel Duration by ${value}.",
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Totem des Todes: Kanalisierungsdauer",
				description_override: "<h1>Gewöhnliche Zepterscherbe</h1>Erhöht die Kanalisierungsdauer von Totem des Todes um ${value}.",
			},

			{
				language: Language.Russian,
				name_override: "Death Ward: длительность",
				description_override: "<h1>Обычный фрагмент скипетра</h1>+${value} сек. длительности Death Ward.",
			},

			{
				language: Language.SChinese,
				name_override: "死亡守卫：持续施法时间",
				description_override: "<h1>普通神杖碎片</h1>死亡守卫提升${value}持续施法时间。",
			},

		]
	});

	Modifiers.push({
		modifier_classname: "modifier_aghsfort_firefly_burn",
		name: "Pyromaniac",
		description: `You are on fire."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Piromaníaco",
				description_override: `Você está em chamas."`,
			},

			{
				language: Language.German,
				name_override: "Feuerteufel",
				description_override: `Sie brennen."`,
			},

			{
				language: Language.Russian,
				name_override: "Пироман",
				description_override: `Вы горите."`,
			},

			{
				language: Language.SChinese,
				name_override: "纵火狂人",
				description_override: `你着火了。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_vladmir_aura",
		name: "Vladmir's Aura",
		description: `Gaining <font color='#F40000'>{${LocalizationModifierProperty.TOOLTIP}}%</font> lifesteal, as well as {f${LocalizationModifierProperty.MANA_REGEN_CONSTANT}} mana regen, and {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}} armor."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Vladmirs Aura",
				description_override: `Erhält <font color='#F40000'>{${LocalizationModifierProperty.TOOLTIP}} %%</font> Lebensraub, %dMODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE% %% Schaden und {f${LocalizationModifierProperty.MANA_REGEN_CONSTANT}} Manaregeneration."`,
			},

			{
				language: Language.Russian,
				name_override: "Vladmir's Aura",
				description_override: `Вампиризм увеличен на <font color='#F40000'>{${LocalizationModifierProperty.TOOLTIP}}%</font>. Восстановление маны увеличено на {f${LocalizationModifierProperty.MANA_REGEN_CONSTANT}}. Броня увеличена на {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}}."`,
			},

			{
				language: Language.SChinese,
				name_override: "弗拉迪米尔光环",
				description_override: `获得<font color='#F40000'>{${LocalizationModifierProperty.TOOLTIP}}%</font>吸血效果，还有{f${LocalizationModifierProperty.MANA_REGEN_CONSTANT}}点/秒魔法恢复和{${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}}点护甲。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_satanic_unholy",
		name: "Unholy Rage",
		description: `Lifesteal increased by <font color='#F40000'>{${LocalizationModifierProperty.TOOLTIP}}%</font>."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Gottlose Wut",
				description_override: `Lebensraub um <font color='#F40000'>{${LocalizationModifierProperty.TOOLTIP}} %%</font> erhöht."`,
			},

			{
				language: Language.Russian,
				name_override: "Unholy Rage",
				description_override: `Вампиризм увеличен на <font color='#F40000'>{${LocalizationModifierProperty.TOOLTIP}}%</font>."`,
			},

			{
				language: Language.SChinese,
				name_override: "不洁狂热",
				description_override: `吸血效果提升<font color='#F40000'>{${LocalizationModifierProperty.TOOLTIP}}%</font>。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_creature_pudge_miniboss_armor_corruption_debuff",
		name: "Corruption",
		description: `Losing {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}} armor."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Verderben",
				description_override: `Verliert {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}} Rüstung."`,
			},

			{
				language: Language.Russian,
				name_override: "Corruption",
				description_override: `Броня уменьшена на {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}}."`,
			},

			{
				language: Language.SChinese,
				name_override: "腐蚀",
				description_override: `失去{${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}}点护甲。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_aghanim_spell_swap",
		name: "Ability Locked",
		description: `Aghanim has locked your ability - destroy the shard to get it back!"`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Fähigkeit gesperrt",
				description_override: `Aghanim hat Ihre Fähigkeit gesperrt – zerstören Sie den Splitter, um sie zurückzuerhalten!"`,
			},

			{
				language: Language.Russian,
				name_override: "Способность заблокирована",
				description_override: `Аганим заблокировал эту способность. Уничтожьте осколок, чтобы вернуть её!"`,
			},

			{
				language: Language.SChinese,
				name_override: "技能被锁定",
				description_override: `阿哈利姆锁定了你的技能 - 快摧毁碎片夺回来！"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_aghanim_crystal_attack_debuff",
		name: "Crystal Chill",
		description: `All healing, regeneration, and lifesteal reduced by {${LocalizationModifierProperty.HEAL_AMPLIFY_PERCENTAGE_TARGET}}%"`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Kristallkühlung",
				description_override: `Heilung, Regeneration und Lebensraub jeglicher Art sind um {${LocalizationModifierProperty.HEAL_AMPLIFY_PERCENTAGE_TARGET}} %% reduziert."`,
			},

			{
				language: Language.Russian,
				name_override: "Кристальный холод",
				description_override: `Всё лечение, регенерация и вампиризм уменьшены на {${LocalizationModifierProperty.HEAL_AMPLIFY_PERCENTAGE_TARGET}}%"`,
			},

			{
				language: Language.SChinese,
				name_override: "晶莹寒气",
				description_override: `所有治疗、恢复和吸血效果降低{${LocalizationModifierProperty.HEAL_AMPLIFY_PERCENTAGE_TARGET}}%"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_greater_salve",
		name: "Greater Salve",
		description: `This unit is regenerating health."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Große Salve",
				description_override: `Diese Einheit regeneriert Lebenspunkte."`,
			},

			{
				language: Language.Russian,
				name_override: "Великий целебный бальзам",
				description_override: `Восстанавливается здоровье."`,
			},

			{
				language: Language.SChinese,
				name_override: "高级治疗药膏",
				description_override: `这个单位正在回复生命。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_greater_clarity",
		name: "Greater Clarity",
		description: `This unit is regenerating mana."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Große Klarheit",
				description_override: `Diese Einheit regeneriert Mana."`,
			},

			{
				language: Language.Russian,
				name_override: "Великое зелье ясности",
				description_override: `Восстанавливается мана."`,
			},

			{
				language: Language.SChinese,
				name_override: "高级净化药水",
				description_override: `这个单位正在回复魔法。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_double_damage_potion",
		name: "Double Damage Potion",
		description: `This unit has double damage."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Trank des doppelten Schadens",
				description_override: `Diese Einheit verursacht doppelten Schaden."`,
			},

			{
				language: Language.Russian,
				name_override: "Зелье двойного урона",
				description_override: `Урон этого существа увеличен вдвое."`,
			},

			{
				language: Language.SChinese,
				name_override: "双倍伤害药水",
				description_override: `这个单位拥有双倍伤害。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_spell_amp_potion",
		name: "Spell Amp Potion",
		description: `This unit has 100 bonus spell amp."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Trank der Zauberverstärkung",
				description_override: `Diese Einheit hat 100 % Bonuszauberverstärkung."`,
			},

			{
				language: Language.Russian,
				name_override: "Зелье магического урона",
				description_override: `Урон от заклинаний этого существа увеличен вдвое."`,
			},

			{
				language: Language.SChinese,
				name_override: "技能增强药水",
				description_override: `这个单位拥有100%技能增强。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_evasion_potion",
		name: "Evasion Potion",
		description: `This unit has 100 bonus evasion."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Trank des Ausweichens",
				description_override: `Diese Einheit weicht allen Angriffen aus."`,
			},

			{
				language: Language.Russian,
				name_override: "Зелье уклонения",
				description_override: `Уклонение этого существа увеличено на 100%%."`,
			},

			{
				language: Language.SChinese,
				name_override: "闪避药水",
				description_override: `这个单位拥有100%闪避加成。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_aghsfort_arcanist_potion",
		name: "Arcanist Potion",
		description: `Reduces ability cooldowns and mana costs."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Trank des Arkanisten",
				description_override: `Abklingzeiten und Manakosten von Fähigkeiten reduziert."`,
			},

			{
				language: Language.Russian,
				name_override: "Зелье чародея",
				description_override: `Уменьшает перезарядку и расход маны у способностей."`,
			},

			{
				language: Language.SChinese,
				name_override: "秘士药水",
				description_override: `降低技能冷却时间和魔法消耗。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_torrent_effect_potion",
		name: "Torrent Reflex",
		description: `This unit has a chance to proc Torrent when attacked."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Poção da Torrente",
			},

			{
				language: Language.German,
				name_override: "Sturzflutreflex",
				description_override: `Diese Einheit hat eine Chance, bei erlittenen Angriffen eine Sturzflut auszulösen."`,
			},

			{
				language: Language.Russian,
				name_override: "Ответный гейзер",
				description_override: `Когда это существо атакуют, может сработать гейзер."`,
			},

			{
				language: Language.SChinese,
				name_override: "洪流反射",
				description_override: `该单位被攻击时有几率触发洪流。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_aghsfort_shadow_wave_effect_potion",
		name: "Shadow Wave Reflex",
		description: `This unit has a chance to proc Shadow Wave when attacked."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schattenwellenreflex",
				description_override: `Diese Einheit hat eine Chance, bei erlittenen Angriffen eine Schattenwelle auszulösen."`,
			},

			{
				language: Language.Russian,
				name_override: "Ответная волна теней",
				description_override: `Когда это существо атакуют, может сработать волна теней."`,
			},

			{
				language: Language.SChinese,
				name_override: "暗影波反射",
				description_override: `该单位被攻击时有几率触发暗影波。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_bonus_room_start",
		name: "Bonus Room",
		description: `Silenced and Muted.  Proceed to the bonus!"`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Bonusraum",
				description_override: `Verstummt und geknebelt. Weiter zum Bonus!"`,
			},

			{
				language: Language.Russian,
				name_override: "Бонусная комната",
				description_override: `Предметы или способности использовать нельзя — просто собирайте бонусы!"`,
			},

			{
				language: Language.SChinese,
				name_override: "额外房间",
				description_override: `被沉默和锁闭。前往奖励！"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_aghsfort_firefly",
		name: "Pyromaniac",
		description: `This unit's footsteps leave a fire trail."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Feuerteufel",
				description_override: `Diese Einheit hinterlässt eine Feuerspur, wo immer sie wandelt."`,
			},

			{
				language: Language.Russian,
				name_override: "Пироман",
				description_override: `За этим существом остаётся пламенный след."`,
			},

			{
				language: Language.SChinese,
				name_override: "纵火狂人",
				description_override: `这个单位的足迹是火焰路径。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_crit",
		name: "Lucky Strike",
		description: `{${LocalizationModifierProperty.TOOLTIP}}% chance to deal {${LocalizationModifierProperty.TOOLTIP2}}%% damage."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Glückstreffer",
				description_override: `{${LocalizationModifierProperty.TOOLTIP}}%ige Chance, {${LocalizationModifierProperty.TOOLTIP2}} %% Schaden zu verursachen."`,
			},

			{
				language: Language.Russian,
				name_override: "Удачный удар",
				description_override: `Шанс в {${LocalizationModifierProperty.TOOLTIP}}% нанести {${LocalizationModifierProperty.TOOLTIP2}}%% урона."`,
			},

			{
				language: Language.SChinese,
				name_override: "幸运一击",
				description_override: `有{${LocalizationModifierProperty.TOOLTIP}}%几率造成{${LocalizationModifierProperty.TOOLTIP2}}%%伤害。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_magic_resist",
		name: "Magical Fortitude",
		description: `This unit has {${LocalizationModifierProperty.MAGICAL_RESISTANCE_BONUS}}% additional magic resist."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Magiepanzer",
				description_override: `Diese Einheit hat {${LocalizationModifierProperty.MAGICAL_RESISTANCE_BONUS}}&nbsp;%% zusätzliche Magieresistenz."`,
			},

			{
				language: Language.Russian,
				name_override: "Магическая стойкость",
				description_override: `Это существо имеет {${LocalizationModifierProperty.MAGICAL_RESISTANCE_BONUS}}% дополнительного сопротивления магии."`,
			},

			{
				language: Language.SChinese,
				name_override: "魔法刚毅",
				description_override: `这个单位拥有{${LocalizationModifierProperty.MAGICAL_RESISTANCE_BONUS}}%额外魔法抗性。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_plasma_field_display",
		name: "Galvanic Farewell",
		description: `Unit casts plasma field on death."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Galvanischer Abschied",
				description_override: `Einheit erzeugt ein Plasmafeld beim Tod."`,
			},

			{
				language: Language.Russian,
				name_override: "Плазменное прощание",
				description_override: `При смерти это существо выпускает из себя плазаменное поле."`,
			},

			{
				language: Language.SChinese,
				name_override: "触电式告别",
				description_override: `单位在死亡时会施放等离子场。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_flicker_display",
		name: "Flicker",
		description: `Unit teleports randomly and purge debuffs from themselves."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Blitzen",
				description_override: `Einheit teleportiert sich zufällig und entfernt dabei ihre Schwächungseffekte."`,
			},

			{
				language: Language.Russian,
				name_override: "Трепет",
				description_override: `Существо случайно телепортируется и развеивает с себя отрицательные эффекты."`,
			},

			{
				language: Language.SChinese,
				name_override: "闪灵",
				description_override: `单位随机传送，净化自身的负面状态。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_armor_sapping_display",
		name: "Death Curse",
		description: `This unit debuffs the armor of its killer."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Todesfluch",
				description_override: `Diese Einheit reduziert beim Tod die Rüstung ihres Mörders."`,
			},

			{
				language: Language.Russian,
				name_override: "Проклятье смерти",
				description_override: `Снижает броню того, кто убьёт это существо."`,
			},

			{
				language: Language.SChinese,
				name_override: "死亡诅咒",
				description_override: `该单位削弱其击杀者的护甲"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_aghsfort_ascension_silence",
		name: "Quiet, please!",
		description: `Cannot cast spells."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Ruhe bitte!",
				description_override: `Kann keine Zauber einsetzen."`,
			},

			{
				language: Language.Russian,
				name_override: "Прошу тишины!",
				description_override: `Не может применять способности."`,
			},

			{
				language: Language.SChinese,
				name_override: "请安静！",
				description_override: `无法施放技能"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_aghsfort_ascension_silence_display",
		name: "Quiet, please!",
		description: `Unit occasionally silences nearby players."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Ruhe bitte!",
				description_override: `Einheit lässt hin und wieder nahe Spieler verstummen."`,
			},

			{
				language: Language.Russian,
				name_override: "Прошу тишины!",
				description_override: `Иногда накладывает безмолвие на игроков рядом."`,
			},

			{
				language: Language.SChinese,
				name_override: "请安静！",
				description_override: `单位偶尔会沉默附近玩家。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_aghsfort_ascension_magnetic_field_evasion",
		name: "Living In A Bubble",
		description: `Evading physical attacks coming from outside the bubble."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Leben in einer Blase",
				description_override: `Weicht allen physischen Angriffen von außerhalb der Blase aus."`,
			},

			{
				language: Language.Russian,
				name_override: "Жизнь в пузыре",
				description_override: `Уклоняется от физических атак извне пузыря."`,
			},

			{
				language: Language.SChinese,
				name_override: "泡泡中的生活",
				description_override: `躲避来自泡泡之外的物理攻击。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_drunken_display",
		name: "Drunken",
		description: `Unit occasionally becomes drunk, gaining movement speed, evasion, and critical strike."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Betrunken",
				description_override: `Einheit wird gelegentlich berauscht, was ihr Bonusbewegungstempo, eine Ausweichchance und eine Chance auf kritische Treffer verleiht."`,
			},

			{
				language: Language.Russian,
				name_override: "Опьянение",
				description_override: `Иногда становится пьяным, получая скорость передвижения, а также шанс увернуться и совершить критическую атаку."`,
			},

			{
				language: Language.SChinese,
				name_override: "醉酒",
				description_override: `单位偶尔会进入醉酒状态，获得移动速度、闪避加成和致命一击。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_damage",
		name: "Deadly",
		description: `Unit deals {${LocalizationModifierProperty.TOTALDAMAGEOUTGOING_PERCENTAGE}}% more damage."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Tödlich",
				description_override: `Einheit verursacht {${LocalizationModifierProperty.TOTALDAMAGEOUTGOING_PERCENTAGE}} %% mehr Schaden."`,
			},

			{
				language: Language.Russian,
				name_override: "Смертоносность",
				description_override: `Наносит на {${LocalizationModifierProperty.TOTALDAMAGEOUTGOING_PERCENTAGE}}% больше урона."`,
			},

			{
				language: Language.SChinese,
				name_override: "极其致命",
				description_override: `单位造成的伤害增加{${LocalizationModifierProperty.TOTALDAMAGEOUTGOING_PERCENTAGE}}%。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_attack_speed",
		name: "Last Stand",
		description: `Attack speed increased by {${LocalizationModifierProperty.ATTACKSPEED_BONUS_CONSTANT}} while health is low."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Letztes Gefecht",
				description_override: `Angriffstempo um {${LocalizationModifierProperty.ATTACKSPEED_BONUS_CONSTANT}} erhöht und Lebenspunkte reduziert."`,
			},

			{
				language: Language.Russian,
				name_override: "До последнего",
				description_override: `При низком здоровье скорость атаки увеличивается на {${LocalizationModifierProperty.ATTACKSPEED_BONUS_CONSTANT}}."`,
			},

			{
				language: Language.SChinese,
				name_override: "屹立不倒",
				description_override: `低血量时攻击速度提升{${LocalizationModifierProperty.ATTACKSPEED_BONUS_CONSTANT}}。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_magic_immunity",
		name: "Avatar",
		description: `Briefly magic immune when taking magic damage."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Avatar",
				description_override: `Kurzzeitig zauberimmun, nachdem magischer Schaden erlitten wurde."`,
			},

			{
				language: Language.Russian,
				name_override: "Аватар",
				description_override: `При получении магического урона это существо ненадолго становится невосприимчивым к магии."`,
			},

			{
				language: Language.SChinese,
				name_override: "天神下凡",
				description_override: `受到魔法伤害时短暂获得技能免疫状态。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_armor",
		name: "Thick Skinned",
		description: `Armor increased by {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}}"`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Dickhäutig",
				description_override: `Rüstung um {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}} erhöht."`,
			},

			{
				language: Language.Russian,
				name_override: "Толстокожесть",
				description_override: `Броня увеличена на {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}}"`,
			},

			{
				language: Language.SChinese,
				name_override: "皮糙肉厚",
				description_override: `护甲提升{${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}}点。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_armor_sapping",
		name: "Death Curse",
		description: `Armor reduced by {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}} from killing enemy units."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Todesfluch",
				description_override: `Durch das Töten gegnerischer Einheiten wurde die Rüstung um {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}} reduziert."`,
			},

			{
				language: Language.Russian,
				name_override: "Проклятье смерти",
				description_override: `Из-за убийства врагов броня снижена на {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}}."`,
			},

			{
				language: Language.SChinese,
				name_override: "死亡诅咒",
				description_override: `由于击杀敌方单位，护甲降低{${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}}点。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_embiggen",
		name: "Glutton",
		description: `Size increased, turn rate reduced, and attack speed slowed by {${LocalizationModifierProperty.ATTACKSPEED_BONUS_CONSTANT}} from killing enemy units."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Vielfraß",
				description_override: `Größer, Drehtempo reduziert und Angriffstempo um {${LocalizationModifierProperty.ATTACKSPEED_BONUS_CONSTANT}} reduziert."`,
			},

			{
				language: Language.Russian,
				name_override: "Обжорство",
				description_override: `Из-за убийств это существо выросло в размере, оно медленнее поворачивается, а его скорость атаки уменьшена на {${LocalizationModifierProperty.ATTACKSPEED_BONUS_CONSTANT}}."`,
			},

			{
				language: Language.SChinese,
				name_override: "身材肿胀",
				description_override: `由于击杀敌方单位导致身材变大，转身速率降低，攻击速度降低{${LocalizationModifierProperty.ATTACKSPEED_BONUS_CONSTANT}}。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_heal_suppression_aura",
		name: "Degen Field",
		description: `Reducing healing of nearby units by {${LocalizationModifierProperty.TOOLTIP}}%."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Degenerationsfeld",
				description_override: `Reduziert die Heilung naher Einheiten um {${LocalizationModifierProperty.TOOLTIP}} %%."`,
			},

			{
				language: Language.Russian,
				name_override: "Поле слабости",
				description_override: `Снижает лечение существ неподалёку на {${LocalizationModifierProperty.TOOLTIP}}%."`,
			},

			{
				language: Language.SChinese,
				name_override: "恶化力场",
				description_override: `减少附近单位{${LocalizationModifierProperty.TOOLTIP}}%治疗效果。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_heal_suppression",
		name: "Degen Field",
		description: `Healing reduced by {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}}."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Degenerationsfeld",
				description_override: `Heilung um {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}} reduziert."`,
			},

			{
				language: Language.Russian,
				name_override: "Поле слабости",
				description_override: `Лечение уменьшено на {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}}."`,
			},

			{
				language: Language.SChinese,
				name_override: "恶化力场",
				description_override: `治疗效果降低{${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}}。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_extra_fast",
		name: "Surge",
		description: `{${LocalizationModifierProperty.MOVESPEED_BONUS_PERCENTAGE}}% increased movement speed and cannot be slowed."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schub",
				description_override: `{${LocalizationModifierProperty.MOVESPEED_BONUS_PERCENTAGE}} %% erhöhtes Bewegungstempo, das nicht verlangsamt werden kann."`,
			},

			{
				language: Language.Russian,
				name_override: "Прилив энергии",
				description_override: `Скорость передвижения увеличена на {${LocalizationModifierProperty.MOVESPEED_BONUS_PERCENTAGE}}%. Это существо нельзя замедлить."`,
			},

			{
				language: Language.SChinese,
				name_override: "奔腾不息",
				description_override: `移动速度提升{${LocalizationModifierProperty.MOVESPEED_BONUS_PERCENTAGE}}%，并且无法被减速。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_vampiric",
		name: "Vampiric",
		description: `{${LocalizationModifierProperty.TOOLTIP}}% lifesteal."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Vampirisch",
				description_override: `{${LocalizationModifierProperty.TOOLTIP}} %% Lebensraub."`,
			},

			{
				language: Language.Russian,
				name_override: "Вампиризм",
				description_override: `{${LocalizationModifierProperty.TOOLTIP}}% вампиризма."`,
			},

			{
				language: Language.SChinese,
				name_override: "吸血鬼化",
				description_override: `{${LocalizationModifierProperty.TOOLTIP}}%吸血。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ascension_chilling_touch",
		name: "Chilling Touch",
		description: `Damage from this creature slows the target's move speed by {${LocalizationModifierProperty.TOOLTIP}}% for {f${LocalizationModifierProperty.TOOLTIP}} seconds.  Multiple debuffs stack."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Toque Arrepiante",
			},

			{
				language: Language.German,
				name_override: "Frostige Berührung",
				description_override: `Von dieser Kreatur zugefügter Schaden verlangsamt das Bewegungstempo des Ziels für {f${LocalizationModifierProperty.TOOLTIP}} Sekunden um {${LocalizationModifierProperty.TOOLTIP}} %%. Effekt summiert sich auf."`,
			},

			{
				language: Language.Russian,
				name_override: "Касание мороза",
				description_override: `Урон этого существа на {${LocalizationModifierProperty.TOOLTIP}}% замедляет передвижение цели на {f${LocalizationModifierProperty.TOOLTIP}} сек. Эффекты складываются."`,
			},

			{
				language: Language.SChinese,
				name_override: "极寒之触",
				description_override: `这个生物造成伤害时将减缓目标{${LocalizationModifierProperty.TOOLTIP}}%移动速度，持续{f${LocalizationModifierProperty.TOOLTIP}}秒。多个负面效果将会叠加。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_ogre_magi_channelled_bloodlust",
		name: "Magi's Bloodlust",
		description: `Moves and attacks faster."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Magis Blutrausch",
				description_override: `Bewegt sich schneller und greift schneller an."`,
			},

			{
				language: Language.Russian,
				name_override: "Магическая жажда крови",
				description_override: `Передвигается и атакует быстрее."`,
			},

			{
				language: Language.SChinese,
				name_override: "魔法师的嗜血术",
				description_override: `移动和攻击速度更快。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_battle_royale_damage",
		name: "Aghanim's Disappointment",
		description: `Engage with the current room or suffer his displeasure!"`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Aghanims Enttäuschung",
				description_override: `Stellen Sie sich dem aktuellen Raum oder leiden Sie unter seinem Unmut!"`,
			},

			{
				language: Language.Russian,
				name_override: "Разочарование Аганима",
				description_override: `Приступайте к текущей комнате, иначе потерпите его немилость!"`,
			},

			{
				language: Language.SChinese,
				name_override: "阿哈利姆的失望",
				description_override: `进入当前房间的战斗，不然他不高兴了你就难受了！"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_sand_king_boss_caustic_finale",
		name: "Caustic Finale",
		description: `Each stack reduces armor by 10%%."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Ätzendes Finale",
				description_override: `Pro Instanz wird die Rüstung um 10 %% reduziert."`,
			},

			{
				language: Language.Russian,
				name_override: "Горькая погибель",
				description_override: `Каждый эффект уменьшает броню на 10%%."`,
			},

			{
				language: Language.SChinese,
				name_override: "腐尸毒",
				description_override: `每次叠加减少10%%护甲。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_lifestealer_damage_counter",
		name: "Brewing Rage",
		description: `Enrages when receiving heavy damage in a short period."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Aufkochender Zorn",
				description_override: `Verfällt in Raserei, wenn in kurzer Zeit viel Schaden erlitten wird."`,
			},

			{
				language: Language.Russian,
				name_override: "Закипающее бешенство",
				description_override: `Впадает в бешенство, если получит много урона за небольшое время."`,
			},

			{
				language: Language.SChinese,
				name_override: "酝酿狂暴",
				description_override: `短时间内受到大量伤害时将会进入狂暴状态。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_lifestealer_enraged",
		name: "Enraged",
		description: `Has greatly increased movement speed and attack speed."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Erzürnt",
				description_override: `Hat stark erhöhtes Bewegungs- und Angriffstempo."`,
			},

			{
				language: Language.Russian,
				name_override: "Бешенство",
				description_override: `Скорость передвижения и атаки значительно увеличена."`,
			},

			{
				language: Language.SChinese,
				name_override: "狂暴",
				description_override: `移动速度和攻击速度得到极大提升。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_urn_upheaval",
		name: "Urn's Grip",
		description: `Movement speed is greatly reduced."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Griff der Urne",
				description_override: `Bewegungstempo stark reduziert."`,
			},

			{
				language: Language.Russian,
				name_override: "Urn's Grip",
				description_override: `Скорость передвижения существенно снижена."`,
			},

			{
				language: Language.SChinese,
				name_override: "灵龛的掌控",
				description_override: `移动速度大幅下降。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_aghsfort_player_transform",
		name: "Transformed",
		description: `Your inner self is revealed for all to see. Cannot heal, cast spells, or use items."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Transformiert",
				description_override: `Ihr inneres Ich ist allen offenbart. Heilung, das Wirken von Zaubern und Gegenstandsnutzung nicht möglich."`,
			},

			{
				language: Language.Russian,
				name_override: "Трансформация",
				description_override: `Все видят вашу внутреннюю сущность. Нельзя лечиться, применять способности и использовать предметы."`,
			},

			{
				language: Language.SChinese,
				name_override: "已变身",
				description_override: `你的内在自我已向所有人暴露。无法治疗、施法或使用物品。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_bandit_archer_arrow_debuff",
		name: "Sabaku Archer Arrow",
		description: `This unit is affected by Break."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Pfeil des Sabaku-Bogenschützen",
				description_override: `Diese Einheit ist unterbrochen."`,
			},

			{
				language: Language.Russian,
				name_override: "Стрела лучника Сабаку",
				description_override: `На это существо наложено истощение."`,
			},

			{
				language: Language.SChinese,
				name_override: "荒漠射手神箭",
				description_override: `这个单位正处于破坏作用下。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_sign_of_the_arachnid_effect",
		name: "Arachnid Aura",
		description: `Gaining bonus movement and attack speed."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Spinnenaura",
				description_override: `Erhält Bewegungs- und Angriffstempo."`,
			},

			{
				language: Language.Russian,
				name_override: "Arachnid Aura",
				description_override: `Скорость передвижения и атаки увеличена."`,
			},

			{
				language: Language.SChinese,
				name_override: "蛛形光环",
				description_override: `获得移动速度和攻击速度加成。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_unhallowed_icon_effect",
		name: "Bloodbond Aura",
		description: `Gaining bonus HP regen. Physical attacks steal life and distribute it among others affected by Bloodbond Aura."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Blutpaktaura",
				description_override: `Gewährt Bonuslebensregeneration. Physische Angriffe rauben Lebenspunkte und verteilen diese auf alle Einheiten, die unter dem Einfluss der Blutpaktaura stehen."`,
			},

			{
				language: Language.Russian,
				name_override: "Bloodbond Aura",
				description_override: `Увеличенное восстановление здоровья. Физические атаки крадут у жертв здоровье и распределяют его между всеми существами под эффектом этой ауры."`,
			},

			{
				language: Language.SChinese,
				name_override: "血缘光环",
				description_override: `获得额外的生命恢复速率。物理攻击可以吸血，并均摊给血缘光环作用下的所有单位。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_preserved_skull_effect",
		name: "Conjuration Aura",
		description: `Gaining bonus mana regen and cooldown reduction."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Beschwöreraura",
				description_override: `Erhält Bonusmanaregeneration und Abklingzeitreduzierung."`,
			},

			{
				language: Language.Russian,
				name_override: "Conjuration Aura",
				description_override: `Увеличенное восстановление маны и уменьшенная перезарядка способностей."`,
			},

			{
				language: Language.SChinese,
				name_override: "祈灵光环",
				description_override: `获得魔法恢复和冷却时间减少加成。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_book_of_strength",
		name: "Book of Strength",
		description: `Strength gained from consumed Books."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Buch der Stärke",
				description_override: `Durch gelesene Bücher erhaltene Stärke."`,
			},

			{
				language: Language.Russian,
				name_override: "Книга силы",
				description_override: `Сила, полученная от книг."`,
			},

			{
				language: Language.SChinese,
				name_override: "力量之书",
				description_override: `消耗后获得了力量。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_book_of_agility",
		name: "Book of Agility",
		description: `Agility gained from consumed Books."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Buch der Agilität",
				description_override: `Durch gelesene Bücher erhaltene Agilität."`,
			},

			{
				language: Language.Russian,
				name_override: "Книга ловкости",
				description_override: `Ловкость, полученная от книг."`,
			},

			{
				language: Language.SChinese,
				name_override: "敏捷之书",
				description_override: `消耗后获得了敏捷。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_book_of_intelligence",
		name: "Book of Intelligence",
		description: `Intelligence gained from consumed Books."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Buch der Intelligenz",
				description_override: `Durch gelesene Bücher erhaltene Intelligenz."`,
			},

			{
				language: Language.Russian,
				name_override: "Книга интеллекта",
				description_override: `Интеллект, полученный от книг."`,
			},

			{
				language: Language.SChinese,
				name_override: "智力之书",
				description_override: `消耗后获得了智力。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_wand_of_the_brine_bubble",
		name: "Brinefoam",
		description: `This unit is protected by Brinefoam.  Healing 300 hp/sec."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Salzschaum",
				description_override: `Diese Einheit wird von Salzschaum beschützt. Heilt 300 LP/s."`,
			},

			{
				language: Language.Russian,
				name_override: "Brinefoam",
				description_override: `Под защитой Brinefoam существо восстанавливает 300 здоровья в секунду."`,
			},

			{
				language: Language.SChinese,
				name_override: "苍洋泡沫",
				description_override: `这个单位正受到苍洋泡沫的保护。每秒恢复300点生命。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_slippers_of_the_abyss_sprint",
		name: "Aqueous Rush",
		description: `This unit has greatly increased movement speed."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Wasserschritt",
				description_override: `Diese Einheit hat stark erhöhtes Bewegungstempo."`,
			},

			{
				language: Language.Russian,
				name_override: "Aqueous Rush",
				description_override: `Скорость передвижения значительно увеличена."`,
			},

			{
				language: Language.SChinese,
				name_override: "水性冲刺",
				description_override: `这个单位的移动速度得到极大提升。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_glimmerdark_shield_prism",
		name: "Gleam",
		description: `This unit is immune to physical damage but receives greatly increased magic damage."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Schimmern",
				description_override: `Diese Einheit ist immun gegen physischen Schaden, aber erleidet erheblich mehr Magieschaden."`,
			},

			{
				language: Language.Russian,
				name_override: "Gleam",
				description_override: `Это существо невосприимчиво к физическому урону, но магия наносит ему намного больше урона."`,
			},

			{
				language: Language.SChinese,
				name_override: "闪光",
				description_override: `这个单位对物理伤害免疫，但是受到的魔法伤害大幅增加。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_ambient_sorcery_effect",
		name: "Ambient Sorcery",
		description: `This unit is more vulnerable to magic damage."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Arkane Umgebung",
				description_override: `Diese Einheit erleidet mehr Magieschaden."`,
			},

			{
				language: Language.Russian,
				name_override: "Ambient Sorcery",
				description_override: `Это существо получает больше магического урона."`,
			},

			{
				language: Language.SChinese,
				name_override: "环域巫术",
				description_override: `这个单位受到的魔法伤害增加。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_bear_cloak_effect",
		name: "Rough Bearskin",
		description: `This unit has bonus magic resistance."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Dickes Bärenfell",
				description_override: `Diese Einheit erhält Bonusmagieresistenz."`,
			},

			{
				language: Language.Russian,
				name_override: "Rough Bearskin",
				description_override: `Сопротивление магии увеличено."`,
			},

			{
				language: Language.SChinese,
				name_override: "毛糙熊皮",
				description_override: `这个单位拥有额外魔法抗性。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_lifestone_pact",
		name: "Health Pact",
		description: `This unit is converting health into mana."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Lebenspakt",
				description_override: `Diese Einheit wandelt Leben in Mana um."`,
			},

			{
				language: Language.Russian,
				name_override: "Health Pact",
				description_override: `Здоровье превращается в ману."`,
			},

			{
				language: Language.SChinese,
				name_override: "生命之契",
				description_override: `这个单位正将生命转化为魔法。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_item_corrupting_blade_buff",
		name: "Devastation",
		description: `Violet Blade attacks reduced this unit's armor by 14."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Verwüstung",
				description_override: `Angriffe mit Violet Blade haben die Rüstung dieser Einheit um 14 reduziert."`,
			},

			{
				language: Language.Russian,
				name_override: "Devastation",
				description_override: `Атака с Violet Blade уменьшила броню этого существа на 14."`,
			},

			{
				language: Language.SChinese,
				name_override: "黯寂",
				description_override: `紫罗兰战刃的攻击降低该单位14点护甲。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_aghsfort_aura_reward_armor_bonus",
		name: "Armadillo Aura",
		description: `Providing additional {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}} armor."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Armadilloaura",
				description_override: `Rüstung um {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}} erhöht."`,
			},

			{
				language: Language.Russian,
				name_override: "Armadillo Aura",
				description_override: `Броня увеличена на {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}}."`,
			},

			{
				language: Language.SChinese,
				name_override: "穿山甲光环",
				description_override: `提供{${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}}点额外护甲。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_aghsfort_aura_reward_magic_resist_bonus",
		name: "Magical Cloak",
		description: `Providing additional {${LocalizationModifierProperty.MAGICAL_RESISTANCE_BONUS}} Magic Resistance."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Magischer Umhang",
				description_override: `Magieresistenz um {${LocalizationModifierProperty.MAGICAL_RESISTANCE_BONUS}} %% erhöht."`,
			},

			{
				language: Language.Russian,
				name_override: "Magical Cloak",
				description_override: `Сопротивление магии увеличено на {${LocalizationModifierProperty.MAGICAL_RESISTANCE_BONUS}}."`,
			},

			{
				language: Language.SChinese,
				name_override: "魔法斗篷",
				description_override: `额外提供{${LocalizationModifierProperty.MAGICAL_RESISTANCE_BONUS}}魔法抗性。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_aghsfort_reward_crit_aura_bonus",
		name: "Blademaster's Presence",
		description: `Adds a chance that every attack deals a critical strike."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Präsenz des Klingenmeisters",
				description_override: `Mit jedem Angriff gibt es die Chance, einen kritischen Treffer zu landen."`,
			},

			{
				language: Language.Russian,
				name_override: "Blademaster's Presence",
				description_override: `Даёт шанс нанести критическую атаку."`,
			},

			{
				language: Language.SChinese,
				name_override: "剑圣现世",
				description_override: `拥有几率使每次攻击造成致命一击。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_aghsfort_tempbuff_corpse_explosion_aura",
		name: "Corpse Explosion",
		description: `Enemy units have a chance to explode in a gory heap, dealing Magic Damage equal to 25%% of their max HP to nearby units."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Leichenexplosion",
				description_override: `Gegnerische Einheiten haben eine Chance, blutig zu explodieren und in ihrem Umkreis 25&nbsp;%% ihrer max. LP als magischen Schaden zu verursachen."`,
			},

			{
				language: Language.Russian,
				name_override: "Corpse Explosion",
				description_override: `Враги могут взорваться после смерти, нанося магический урон, равный 25%% от их максимального здоровья."`,
			},

			{
				language: Language.SChinese,
				name_override: "尸爆",
				description_override: `敌方单位有几率爆裂成一团血肉，对周围单位造成其25%%最大生命值的魔法伤害。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_aghsfort_tempbuff_corpse_explosion_debuff",
		name: "Bloated Sensation",
		description: `When this unit dies, there is a chance it will explode dealing Magic Damage equal to 25%% of their max HP to nearby units."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Völlegefühl",
				description_override: `Gegnerische Einheiten haben eine Chance, blutig zu explodieren und in ihrem Umkreis 25&nbsp;%% ihrer max. LP als magischen Schaden zu verursachen."`,
			},

			{
				language: Language.Russian,
				name_override: "Bloated Sensation",
				description_override: `Когда это существо умрёт, оно может взорваться, нанеся магический урон, равный 25%% от его максимального здоровья."`,
			},

			{
				language: Language.SChinese,
				name_override: "膨胀轰动",
				description_override: `这个单位死亡时有几率爆炸，对周围单位造成其25%%最大生命值的魔法伤害。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_armor",
		name: "Armor Blessing",
		description: `Providing additional {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}} armor."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Segen der Rüstung",
				description_override: `Rüstung um {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}} erhöht."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар брони",
				description_override: `Броня увеличена на {${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}}."`,
			},

			{
				language: Language.SChinese,
				name_override: "护甲祝福",
				description_override: `提供{${LocalizationModifierProperty.PHYSICAL_ARMOR_BONUS}}点额外护甲。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_attack_speed",
		name: "Attack Speed Blessing",
		description: `Providing {${LocalizationModifierProperty.ATTACKSPEED_BONUS_CONSTANT}} attack speed."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Segen des Angriffstempos",
				description_override: `Angriffstempo um {${LocalizationModifierProperty.ATTACKSPEED_BONUS_CONSTANT}} erhöht."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар скорости атаки",
				description_override: `Скорость атаки увеличена на {${LocalizationModifierProperty.ATTACKSPEED_BONUS_CONSTANT}}."`,
			},

			{
				language: Language.SChinese,
				name_override: "攻击速度祝福",
				description_override: `获得{${LocalizationModifierProperty.ATTACKSPEED_BONUS_CONSTANT}}攻击速度。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_evasion",
		name: "Evasion Blessing",
		description: `Providing {${LocalizationModifierProperty.EVASION_CONSTANT}}% evasion."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Segen des Ausweichens",
				description_override: `{${LocalizationModifierProperty.EVASION_CONSTANT}}%ige Chance, Angriffen auszuweichen."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар уклонения",
				description_override: `Уклонение увеличено на {${LocalizationModifierProperty.EVASION_CONSTANT}}%."`,
			},

			{
				language: Language.SChinese,
				name_override: "闪避祝福",
				description_override: `获得{${LocalizationModifierProperty.EVASION_CONSTANT}}%闪避。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_mana_boost",
		name: "Max Mana Blessing",
		description: `Providing {${LocalizationModifierProperty.EXTRA_MANA_PERCENTAGE}}% max mana."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Segen des max. Manas",
				description_override: `Maximaler Manavorrat um {${LocalizationModifierProperty.EXTRA_MANA_PERCENTAGE}} %% erhöht."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар максимальной маны",
				description_override: `Максимальный запас маны увеличен на {${LocalizationModifierProperty.EXTRA_MANA_PERCENTAGE}}%."`,
			},

			{
				language: Language.SChinese,
				name_override: "最大魔法祝福",
				description_override: `获得{${LocalizationModifierProperty.EXTRA_MANA_PERCENTAGE}}%最大魔法。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_health_boost",
		name: "Max Health Blessing",
		description: `Providing {${LocalizationModifierProperty.EXTRA_HEALTH_PERCENTAGE}}% max health."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Segen der max. LP",
				description_override: `Maximale Lebenspunkte um {${LocalizationModifierProperty.EXTRA_HEALTH_PERCENTAGE}} %% erhöht."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар максимального здоровья",
				description_override: `Максимальное здоровье увеличено на {${LocalizationModifierProperty.EXTRA_HEALTH_PERCENTAGE}}%."`,
			},

			{
				language: Language.SChinese,
				name_override: "最大生命祝福",
				description_override: `获得{${LocalizationModifierProperty.EXTRA_HEALTH_PERCENTAGE}}%点最大生命。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_magic_resist",
		name: "Magic Resist Blessing",
		description: `Providing {${LocalizationModifierProperty.MAGICAL_RESISTANCE_BONUS}}% magic resistance."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Segen der Magieresistenz",
				description_override: `Magieresistenz um {${LocalizationModifierProperty.MAGICAL_RESISTANCE_BONUS}} %% erhöht."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар сопротивления магии",
				description_override: `Сопротивление магии увеличено на {${LocalizationModifierProperty.MAGICAL_RESISTANCE_BONUS}}%."`,
			},

			{
				language: Language.SChinese,
				name_override: "魔法抗性祝福",
				description_override: `额外提供{${LocalizationModifierProperty.MAGICAL_RESISTANCE_BONUS}}%魔法抗性。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_magic_damage_bonus",
		name: "Spell Amplification Blessing",
		description: `Providing {${LocalizationModifierProperty.SPELL_AMPLIFY_PERCENTAGE}}% spell amplification."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				description_override: `Mais {${LocalizationModifierProperty.SPELL_AMPLIFY_PERCENTAGE}}% de amplificação mágica."`,
			},

			{
				language: Language.German,
				name_override: "Segen der Zauberverstärkung",
				description_override: `Zauberverstärkung um {${LocalizationModifierProperty.SPELL_AMPLIFY_PERCENTAGE}} %% erhöht."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар урона от заклинаний",
				description_override: `Урон от заклинаний увеличен на {${LocalizationModifierProperty.SPELL_AMPLIFY_PERCENTAGE}}%."`,
			},

			{
				language: Language.SChinese,
				name_override: "技能增强福佑",
				description_override: `获得{${LocalizationModifierProperty.SPELL_AMPLIFY_PERCENTAGE}}%技能增强。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_damage_bonus",
		name: "Damage Bonus Blessing",
		description: `Providing {${LocalizationModifierProperty.PREATTACK_BONUS_DAMAGE}} attack damage (+%dMODIFIER_PROPERTY_TOOLTIP% per level)."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Bênção do Dano Adicional",
				description_override: `Mais {${LocalizationModifierProperty.PREATTACK_BONUS_DAMAGE}} de dano de ataque (+%dMODIFIER_PROPERTY_TOOLTIP% por nível)."`,
			},

			{
				language: Language.German,
				name_override: "Segen des Bonusschadens",
				description_override: `Angriffsschaden um {${LocalizationModifierProperty.PREATTACK_BONUS_DAMAGE}} erhöht (+%dMODIFIER_PROPERTY_TOOLTIP% pro Level)."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар урона",
				description_override: `Урон увеличен на {${LocalizationModifierProperty.PREATTACK_BONUS_DAMAGE}} (+%dMODIFIER_PROPERTY_TOOLTIP% за уровень)."`,
			},

			{
				language: Language.SChinese,
				name_override: "攻击力加成福佑",
				description_override: `获得{${LocalizationModifierProperty.PREATTACK_BONUS_DAMAGE}}点攻击力（每级+%dMODIFIER_PROPERTY_TOOLTIP%点）"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_movement_speed",
		name: "Movement Speed Blessing",
		description: `Providing {${LocalizationModifierProperty.MOVESPEED_BONUS_PERCENTAGE}}% movement speed."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Bênção da Velocidade de Movimento",
				description_override: `Mais {${LocalizationModifierProperty.MOVESPEED_BONUS_PERCENTAGE}}% de velocidade de movimento."`,
			},

			{
				language: Language.German,
				name_override: "Segen des Bewegungstempos",
				description_override: `Bewegungstempo um {${LocalizationModifierProperty.MOVESPEED_BONUS_PERCENTAGE}} %% erhöht."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар скорости передвижения",
				description_override: `Скорость передвижения увеличена на {${LocalizationModifierProperty.MOVESPEED_BONUS_PERCENTAGE}}%."`,
			},

			{
				language: Language.SChinese,
				name_override: "移动速度福佑",
				description_override: `获得{${LocalizationModifierProperty.MOVESPEED_BONUS_PERCENTAGE}}%移动速度加成。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_damage_reflect",
		name: "Damage Reflection",
		description: `Reflecting {${LocalizationModifierProperty.TOOLTIP}}% of damage back on the attacker."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Reflexão de Dano",
				description_override: `Refletindo {${LocalizationModifierProperty.TOOLTIP}}% do dano de volta ao atacante."`,
			},

			{
				language: Language.German,
				name_override: "Schadenreflexion",
				description_override: `Reflektiert {${LocalizationModifierProperty.TOOLTIP}} %% des erlittenen Schadens zurück auf den Angreifer."`,
			},

			{
				language: Language.Russian,
				name_override: "Отражение урона",
				description_override: `Отражает {${LocalizationModifierProperty.TOOLTIP}}% урона в того, кто его нанёс."`,
			},

			{
				language: Language.SChinese,
				name_override: "伤害反弹",
				description_override: `{${LocalizationModifierProperty.TOOLTIP}}%伤害反弹给攻击者。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_spell_life_steal",
		name: "Spell Life Steal Blessing",
		description: `{${LocalizationModifierProperty.TOOLTIP}}% of spell damage dealt is returned as health."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Bênção do Roubo de Vida Mágico",
				description_override: `{${LocalizationModifierProperty.TOOLTIP}}% do dano mágico causado é retornado como vida."`,
			},

			{
				language: Language.German,
				name_override: "Segen des Zauberlebensraubs",
				description_override: `{${LocalizationModifierProperty.TOOLTIP}} %% des Zauberschadens wird in Heilung umgewandelt."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар вампиризма заклинаниями",
				description_override: `Вампиризм заклинаниями увеличен на {${LocalizationModifierProperty.TOOLTIP}}%."`,
			},

			{
				language: Language.SChinese,
				name_override: "法术吸血福佑",
				description_override: `{${LocalizationModifierProperty.TOOLTIP}}%法术伤害将以生命形式返还。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_life_steal",
		name: "Life Steal Blessing",
		description: `{${LocalizationModifierProperty.TOOLTIP}}% of attack damage dealt is returned as health."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Bênção do Roubo de Vida",
				description_override: `{${LocalizationModifierProperty.TOOLTIP}}% do dano de ataque causado é retornado como vida."`,
			},

			{
				language: Language.German,
				name_override: "Segen des Lebensraubs",
				description_override: `{${LocalizationModifierProperty.TOOLTIP}} %% des Angriffsschadens wird in Heilung umgewandelt."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар вампиризма",
				description_override: `Вампиризм увеличен на {${LocalizationModifierProperty.TOOLTIP}}%."`,
			},

			{
				language: Language.SChinese,
				name_override: "吸血福佑",
				description_override: `{${LocalizationModifierProperty.TOOLTIP}}%攻击伤害将以生命形式返还。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_potion_dragon",
		name: "Dragon Potion Blessing",
		description: `Dragon Potions now transform you into a Black Dragon, increasing attack damage by an additional {${LocalizationModifierProperty.TOOLTIP2}} and splash damage by an additional {${LocalizationModifierProperty.TOOLTIP}}%."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Bênção da Poção Draconiana",
				description_override: `Agora, a Poção Draconiana transforma você em um Dragão Negro, aumentando o dano de ataque em {${LocalizationModifierProperty.TOOLTIP2}} e o dano em área em {${LocalizationModifierProperty.TOOLTIP}}%."`,
			},

			{
				language: Language.German,
				name_override: "Segen des Drachentranks",
				description_override: `Trank des Drachen verwandelt Sie nun in einen Schwarzdrachen, was den Angriffsschaden um weitere {${LocalizationModifierProperty.TOOLTIP2}} und den Flächenschaden um weitere %dMODIFIER_PROPERTY_TOOLTIP% %% erhöht."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар усиленных зелий дракона",
				description_override: `Зелья дракона превращают это существо в чёрного дракона, отчего урон от его атак увеличивается на {${LocalizationModifierProperty.TOOLTIP2}}, а урон по области — на {${LocalizationModifierProperty.TOOLTIP}}%."`,
			},

			{
				language: Language.SChinese,
				name_override: "古龙药水福佑",
				description_override: `古龙药水现在把你变成一头黑龙，攻击力额外提升{${LocalizationModifierProperty.TOOLTIP2}}点，溅射伤害额外提升{${LocalizationModifierProperty.TOOLTIP}}%。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_potion_echo_slam",
		name: "Echo Slam Potion Blessing",
		description: `Echo Slam Potions deal an additional {${LocalizationModifierProperty.TOOLTIP}} echo damage."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Bênção da Poção Ecoante",
				description_override: `Poções Ecoantes causam mais {${LocalizationModifierProperty.TOOLTIP}} de dano ecoante."`,
			},

			{
				language: Language.German,
				name_override: "Segen des Donnerechotranks",
				description_override: `Donnerechotränke verursachen {${LocalizationModifierProperty.TOOLTIP}} mehr Echoschaden."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар усиленных зелий дрожи земли",
				description_override: `Зелья дрожи земли наносят на {${LocalizationModifierProperty.TOOLTIP}} больше урона от эха."`,
			},

			{
				language: Language.SChinese,
				name_override: "回音击药水福佑",
				description_override: `回音击药水额外造成{${LocalizationModifierProperty.TOOLTIP}}点回音伤害。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_potion_torrent",
		name: "Torrent Potion Blessing",
		description: `Torrent Potions have an additional {${LocalizationModifierProperty.TOOLTIP}}% chance to produce a torrent when damaged."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Bênção da Poção da Torrente",
				description_override: `Poções da Torrente concedem uma chance adicional de {${LocalizationModifierProperty.TOOLTIP}}% de produzir uma torrente ao sofrer dano."`,
			},

			{
				language: Language.German,
				name_override: "Segen des Sturzfluttranks",
				description_override: `Sturzfluttränke haben eine {${LocalizationModifierProperty.TOOLTIP}} %% höhere Chance, bei erlittenen Angriffen eine Sturzflut zu erzeugen."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар усиленных зелий гейзера",
				description_override: `Шанс создать ответный гейзер увеличен на {${LocalizationModifierProperty.TOOLTIP}}%."`,
			},

			{
				language: Language.SChinese,
				name_override: "洪流药水福佑",
				description_override: `洪流药水额外拥有{${LocalizationModifierProperty.TOOLTIP}}%几率在受到攻击时产生洪流。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_potion_ravage",
		name: "Ravage Potion Blessing",
		description: `Ravage Potions hit enemies in an additional {${LocalizationModifierProperty.TOOLTIP}} radius."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Bênção da Poção Devastadora",
				description_override: `Poções Devastadoras atingem inimigos em um raio adicional de {${LocalizationModifierProperty.TOOLTIP}} unidades."`,
			},

			{
				language: Language.German,
				name_override: "Segen des Verwüstungstranks",
				description_override: `Radius von Verwüstungstränken ist {${LocalizationModifierProperty.TOOLTIP}} größer."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар усиленных зелий сокрушения",
				description_override: `Радиус эффекта от зелий сокрушения увеличен на {${LocalizationModifierProperty.TOOLTIP}}."`,
			},

			{
				language: Language.SChinese,
				name_override: "毁灭药水福佑",
				description_override: `毁灭药水击中敌人的范围额外增加{${LocalizationModifierProperty.TOOLTIP}}。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_potion_shadow_wave",
		name: "Shadow Wave Potion Blessing",
		description: `Shadow Wave Potions heal allies and damage enemies for an additional {${LocalizationModifierProperty.TOOLTIP}}."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Bênção da Poção da Onda Sombria",
				description_override: `Poções da Onda Sombria curam aliados e causam dano a inimigos em um adicional de {${LocalizationModifierProperty.TOOLTIP}}."`,
			},

			{
				language: Language.German,
				name_override: "Segen des Schattenwellentranks",
				description_override: `Schattenwellentränke sorgen für {${LocalizationModifierProperty.TOOLTIP}} zusätzliche Heilung bei Verbündeten und zusätzlichen Schaden bei Gegnern."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар усиленных зелий теней",
				description_override: `Лечение и урон ответной волны теней увеличены на {${LocalizationModifierProperty.TOOLTIP}}."`,
			},

			{
				language: Language.SChinese,
				name_override: "暗影波药水福佑",
				description_override: `暗影波药水额外治疗友军和伤害敌人{${LocalizationModifierProperty.TOOLTIP}}点。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_potion_purification",
		name: "Purification Potion Blessing",
		description: `Purification Potions damage enemies in an additional {${LocalizationModifierProperty.TOOLTIP}} radius."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Bênção da Poção Purificante",
				description_override: `Poções Purificantes causam dano a inimigos em um raio adicional de {${LocalizationModifierProperty.TOOLTIP}} unidades."`,
			},

			{
				language: Language.German,
				name_override: "Segen des Reinigungstranks",
				description_override: `Schadensradius von Tränken der Reinigung um {${LocalizationModifierProperty.TOOLTIP}} erhöht."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар усиленных зелий покаяния",
				description_override: `Радиус эффекта от зелий покаяния увеличен на {${LocalizationModifierProperty.TOOLTIP}}."`,
			},

			{
				language: Language.SChinese,
				name_override: "洗礼药水福佑",
				description_override: `洗礼药水额外伤害{${LocalizationModifierProperty.TOOLTIP}}范围内敌人。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_respawn_time_reduction",
		name: "Respawn Time Reduction Blessing",
		description: `Reducing respawn time by {${LocalizationModifierProperty.TOOLTIP}}%."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Bênção do Renascimento Rápido",
				description_override: `Tempo para renascer {${LocalizationModifierProperty.TOOLTIP}}% menor."`,
			},

			{
				language: Language.German,
				name_override: "Segen des schnellen Wiedereinstiegs",
				description_override: `Wiedereinstiegszeit um {${LocalizationModifierProperty.TOOLTIP}} %% reduziert."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар времени возрождения",
				description_override: `Возрождается на {${LocalizationModifierProperty.TOOLTIP}}% быстрее."`,
			},

			{
				language: Language.SChinese,
				name_override: "复活时间减少福佑",
				description_override: `复活时间减少{${LocalizationModifierProperty.TOOLTIP}}%。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_death_detonation",
		name: "Death Detonation",
		description: `Create an explosion on death, dealing {${LocalizationModifierProperty.TOOLTIP}} damage per level in %dMODIFIER_PROPERTY_TOOLTIP2% radius."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Todesexplosion",
				description_override: `Explodiert beim Tod, was im Umkreis von {${LocalizationModifierProperty.TOOLTIP2}} Einheiten %dMODIFIER_PROPERTY_TOOLTIP% Schaden pro Level verursacht."`,
			},

			{
				language: Language.Russian,
				name_override: "Взрывная смерть",
				description_override: `Взрывается при смерти, нанося {${LocalizationModifierProperty.TOOLTIP}} урона за каждый свой уровень всем врагам в радиусе %dMODIFIER_PROPERTY_TOOLTIP2%."`,
			},

			{
				language: Language.SChinese,
				name_override: "死亡引爆",
				description_override: `死亡时产生爆炸，对{${LocalizationModifierProperty.TOOLTIP2}}范围内造成每级%dMODIFIER_PROPERTY_TOOLTIP%点伤害。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_strength",
		name: "Strength Bonus",
		description: `Providing additional {${LocalizationModifierProperty.STATS_STRENGTH_BONUS}} strength."`,
		language_overrides:
		[
			{
				language: Language.Brazilian,
				name_override: "Força adicional",
			},

			{
				language: Language.German,
				name_override: "Stärkebonus",
				description_override: `Erhöht die Stärke um {${LocalizationModifierProperty.STATS_STRENGTH_BONUS}}."`,
			},

			{
				language: Language.Russian,
				name_override: "Бонус к силе",
				description_override: `Сила увеличена на {${LocalizationModifierProperty.STATS_STRENGTH_BONUS}}."`,
			},

			{
				language: Language.SChinese,
				name_override: "力量加成",
				description_override: `提供{${LocalizationModifierProperty.STATS_STRENGTH_BONUS}}点额外力量。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_agility",
		name: "Agility Bonus",
		description: `Providing additional {${LocalizationModifierProperty.STATS_AGILITY_BONUS}} agility."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Agilitätsbonus",
				description_override: `Erhöht die Agilität um {${LocalizationModifierProperty.STATS_AGILITY_BONUS}}."`,
			},

			{
				language: Language.Russian,
				name_override: "Бонус к ловкости",
				description_override: `Ловкость увеличена на {${LocalizationModifierProperty.STATS_AGILITY_BONUS}}."`,
			},

			{
				language: Language.SChinese,
				name_override: "敏捷加成",
				description_override: `提供{${LocalizationModifierProperty.STATS_AGILITY_BONUS}}点额外敏捷。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_intelligence",
		name: "Intellect Bonus",
		description: `Providing additional {${LocalizationModifierProperty.STATS_INTELLECT_BONUS}} intellect."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Intellektbonus",
				description_override: `Erhöht den Intellekt um {${LocalizationModifierProperty.STATS_INTELLECT_BONUS}}."`,
			},

			{
				language: Language.Russian,
				name_override: "Бонус к интеллекту",
				description_override: `Интеллект увеличен на {${LocalizationModifierProperty.STATS_INTELLECT_BONUS}}."`,
			},

			{
				language: Language.SChinese,
				name_override: "智力奖赏",
				description_override: `获得{${LocalizationModifierProperty.STATS_INTELLECT_BONUS}}点额外敏捷"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_potion_health",
		name: "Health Potion Pickup Blessing",
		description: `Health potions heal you for an additional {${LocalizationModifierProperty.TOOLTIP}}% of your max health."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Segen des Heiltranks",
				description_override: `Heiltränke stellen zusätzlich {${LocalizationModifierProperty.TOOLTIP}}&nbsp;%% der max. Lebenspunkte wieder her."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар усиленных зелий лечения",
				description_override: `Зелья лечения дополнительно восстанавливают {${LocalizationModifierProperty.TOOLTIP}}% от максимального запаса здоровья."`,
			},

			{
				language: Language.SChinese,
				name_override: "生命药水拾取福佑",
				description_override: `生命药水治疗你时额外回复{${LocalizationModifierProperty.TOOLTIP}}%最大生命值。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_potion_mana",
		name: "Mana Potion Pickup Blessing",
		description: `Mana potions restore an additional {${LocalizationModifierProperty.TOOLTIP}}% of your max mana."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Segen des Manatranks",
				description_override: `Manatränke stellen zusätzlich {${LocalizationModifierProperty.TOOLTIP}}&nbsp;%% des maximalen Manas wieder her."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар усиленных зелий маны",
				description_override: `Зелья маны дополнительно восстанавливают {${LocalizationModifierProperty.TOOLTIP}}% от максимального запаса маны."`,
			},

			{
				language: Language.SChinese,
				name_override: "魔法药水拾取福佑",
				description_override: `生命药水治疗你时额外回复{${LocalizationModifierProperty.TOOLTIP}}%最大魔法值。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_restore_mana",
		name: "Mana on Kill Blessing",
		description: `Restore {${LocalizationModifierProperty.TOOLTIP}} mana each time you kill an enemy."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Segen der Manabeute",
				description_override: `Das Töten eines Gegners stellt {${LocalizationModifierProperty.TOOLTIP}} Mana wieder her."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар маны при убийствах",
				description_override: `Восстанавливает {${LocalizationModifierProperty.TOOLTIP}} маны при каждом убийстве врага."`,
			},

			{
				language: Language.SChinese,
				name_override: "击杀魔法福佑",
				description_override: `每次击杀一名敌人都将回复{${LocalizationModifierProperty.TOOLTIP}}点魔法。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_respawn_invulnerability",
		name: "Respawn Invulnerability Time Bonus",
		description: `Invulnerability time after respawning is increased by {${LocalizationModifierProperty.TOOLTIP}} seconds."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Bonus auf Unverwundbarkeit nach Wiedereinstieg",
				description_override: `Unverwundbarkeitsphase nach dem Wiedereinstieg um {${LocalizationModifierProperty.TOOLTIP}} Sekunden verlängert."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар бессмертия после воскрешения",
				description_override: `Время бессмертия после воскрешения увеличено на {${LocalizationModifierProperty.TOOLTIP}} сек."`,
			},

			{
				language: Language.SChinese,
				name_override: "复活后一段时间内暂时无敌。",
				description_override: `复活后的武器时间延长{${LocalizationModifierProperty.TOOLTIP}}秒。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_book_strength",
		name: "Strength Book Blessing",
		description: `Books of Strength provide {${LocalizationModifierProperty.TOOLTIP}} additional strength when used."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Segen des Stärkebuchs",
				description_override: `Buch der Stärke erhöht beim Benutzen den Stärkewert um {${LocalizationModifierProperty.TOOLTIP}}."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар усиленных книг силы",
				description_override: `Книги силы дают на {${LocalizationModifierProperty.TOOLTIP}} больше силы."`,
			},

			{
				language: Language.SChinese,
				name_override: "力量之书福佑",
				description_override: `使用力量之书时额外获得{${LocalizationModifierProperty.TOOLTIP}}点力量。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_book_agility",
		name: "Agility Book Blessing",
		description: `Books of Agility provide {${LocalizationModifierProperty.TOOLTIP}} additional agility when used."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Segen des Agilitätsbuchs",
				description_override: `Buch der Agilität erhöht beim Benutzen den Agilitätswert um {${LocalizationModifierProperty.TOOLTIP}}."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар усиленных книг ловкости",
				description_override: `Книги ловкости дают на {${LocalizationModifierProperty.TOOLTIP}} больше ловкости."`,
			},

			{
				language: Language.SChinese,
				name_override: "敏捷之书福佑",
				description_override: `使用敏捷之书时额外获得{${LocalizationModifierProperty.TOOLTIP}}点敏捷。"`,
			},

		],
	});

	Modifiers.push({
		modifier_classname: "modifier_blessing_book_intelligence",
		name: "Intelligence Book Blessing",
		description: `Books of Intelligence provide {${LocalizationModifierProperty.TOOLTIP}} additional intelligence when used."`,
		language_overrides:
		[
			{
				language: Language.German,
				name_override: "Segen des Intelligenzbuchs",
				description_override: `Buch der Intelligenz erhöht beim Benutzen den Intelligenzwert um {${LocalizationModifierProperty.TOOLTIP}}."`,
			},

			{
				language: Language.Russian,
				name_override: "Дар усиленных книг интеллекта",
				description_override: `Книги интеллекта дают на {${LocalizationModifierProperty.TOOLTIP}} больше интеллекта."`,
			},

			{
				language: Language.SChinese,
				name_override: "智力之书福佑",
				description_override: `使用智力之书时额外获得{${LocalizationModifierProperty.TOOLTIP}}点智力。"`,
			},

		],
	});

    // Return data to compiler
    return localization_info;
}