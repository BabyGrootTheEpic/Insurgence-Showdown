// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	{
		section: "Random Singles",
	},
	{
		name: "[Gen 8] Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and useful item (excluding CAP). This format allows Dynamaxing.`,

		mod: 'gen8',
		team: 'randomHC',
		ruleset: ['Rndm Hackmons'],
	},
	{
		name: "[Gen 8] Hackmons Cup Linked",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and useful item (excluding CAP). The first two moves in a Pok&eacute;mon's moveset are used simultaneously. This format allows Dynamaxing.`,

		mod: 'linked',
		team: 'randomHC',
		ruleset: ['Rndm Hackmons'],
	},
	{
		name: "[Gen 8] Hackmons Cup 24",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and useful item (excluding CAP). Each player will have 24 Pokémon that will each have 24 moves. This format allows Dynamaxing.`,

		mod: 'gen8',
		team: 'randomHC',
		ruleset: ['Rndm Hackmons', 'Max Team Size = 24', 'Max Move Count = 24'],
	},
	
	
	
	{
		section: "Single Battles",
	},
	{
		name: "[Gen 8] Anything Goes",
		desc: `Singles NatDex AG with Dynamax Clause.`,
		
		mod: 'gen8',
		battle: {trunc: Math.trunc}, //Disables the overflow 'glitch' without capping the stats like Overflow Stat Mod does.
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] Anything Goes Dmax",
		desc: `Singles NatDex AG with Dynamaxing.`,
		
		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG'],
	},
	{
		name: "[Gen 8] Ubers",
		desc: `Singles NatDex Ubers with Dynamax Clause.`,

		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Singles Bans'],
	},
	{
		name: "[Gen 8] Monotype Ubers",
		desc: `All the Pok&eacute;mon on a team must share a type.`,

		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Singles Bans', 'Same Type Clause', 'Type Change Ability Clause'],
	},
	{
		name: "[Gen 8] Flat Rules",
		desc: `NatDex Singles with the in-game Flat Rules.`,

		mod: 'gen8',
		rated: false,
		ruleset: ['NatDex Flat Rules'],
	},
	{
		name: "[Gen 8] Flat Rules 2R",
		desc: `NatDex Singles with the in-game Flat Rules. Up to two Restricted Legendaries are allowed per team.`,

		mod: 'gen8',
		rated: false,
		ruleset: ['NatDex Flat Rules', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 8] Little Cup",
		desc: `Singles NatDex LC with Dynamax Clause. Little Cup means that only level 1-5 Pok&eacute;mon that are able to evolve and have no previous evolution are allowed.`,

		mod: 'gen8',
		rated: false,
		ruleset: ['NatDex LC', 'Singles Bans'],
	},
	
	
	
	{
		section: "Modded Singles",
	},
	{
		name: "[Gen 8] Inverse AG",
		desc: `The type matchup chart is inverted: weaknesses become resistances, while resistances and immunities become weaknesses.`,
		
		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', 'Inverse Mod'],
	},
	{
		name: "[Gen 8] Inverse AG Dmax",
		desc: `The type matchup chart is inverted: weaknesses become resistances, while resistances and immunities become weaknesses. This format allows Dynamaxing.`,
		
		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Inverse Mod'],
	},
	{
		name: "[Gen 8] Multi Mega",
		desc: `Removes Mega Evolution limit and Ultra Burst limit.`,
		
		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Singles Bans', 'Multi Mega Mod'],
	},
	{
		name: "[Gen 8] Stoneless Multi Mega",
		desc: `A variant of the [Gen 8] Multi Mega format that allows Mega Evolution-capable Pok&eacute;mon to Mega evolve without their Mega Stone.`,
		
		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['[Gen 8] Multi Mega', 'Stoneless Mega Mod'],
	},
	{
		name: "[Gen 8] 12-mon Multi Mega",
		desc: `A variant of the [Gen 8] Multi Mega format that allows up to 12 Pok&eacute;mon on a team. To make a team that large in the teambuilder, either add the Pok&eacute;mon via the 'Import/Export' button, or make the team in a box.`,
		
		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['[Gen 8] Multi Mega', 'Max Team Size = 12'],
	},
	{
		name: "[Gen 8] 12 'mons",
		desc: `Each player may have up to 12 Pok&eacute;mon on their team. To make a team that large in the teambuilder, either add the Pok&eacute;mon via the 'Import/Export' button, or make the team in a box.`,
		
		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Singles Bans', 'Max Team Size = 12'],
	},
	{
		name: "[Gen 8] 24 moves",
		desc: `Each Pok&eacute;mon may have up to 24 moves, but effort values are banned. Use the 'Import/Export' feature of the teambuilder to give a Pok&eacute;mon more than 4 moves.`,
		
		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Singles Bans', 'Max Move Count = 24', '!! EV Limit = 3'],
	},
	{
		name: "[Gen 8] Pokebilities",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously.`,
		
		mod: 'pokebilities',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Pokebilities', 'Singles Bans'],
		banlist: ['Diglett-Base', 'Dugtrio-Base', 'Trapinch', 'Gothita', 'Gothitelle', 'Gothorita', 'Wobbuffet', 'Wynaut'], //Arena Trap & Shadow Tag
	},
	{
		name: "[Gen 8] Pokebilities AG",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously. This format has no attempt at balance.`,
		
		mod: 'pokebilities',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Pokebilities Mod', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] Linked",
		desc: `The first two moves in a Pok&eacute;mon's moveset are used simultaneously.`,

		mod: 'linked',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Linked', 'Singles Bans'],
	},
	{
		name: "[Gen 8] Revelationmons",
		desc: `The moves in the first slot(s) of a Pok&eacute;mon's set have their types changed to match the Pok&eacute;mon's type(s).`,

		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Revelationmons', 'Singles Bans', '!Sleep Clause Mod', 'Sleep Moves Clause'],
		banlist: ['Magnet Pull'],
	},
	{
		name: "[Gen 8] Bonus Type Ubers",
		desc: `Pok&eacute;mon can be nicknamed the name of a type to have that type added onto their current ones.`,
		
		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Singles Bans', 'Bonus Type Rule', '!Nickname Clause'],
	},
	{
		name: "[Gen 8] Alphabet Cup",
		desc: `Pok&eacute;mon may learn almost any move that shares the same first letter as their name or a previous evolution's name.`,
		
		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Alphabet', 'Singles Bans'],
	},
	{
		name: "[Gen 8] Alphabet Cup AG",
		desc: `Pok&eacute;mon may learn any move, except Sketch, that shares the same first letter as their name or a previous evolution's name. This format has no attempt at balance.`,
		
		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', 'Alphabet Cup Move Legality'],
		restricted: ['Sketch'],
	},
	{
		name: "[Gen 8] STABmons",
		desc: `Pok&eacute;mon can use almost any move of their typing, in addition to the moves they can normally learn.`,

		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex STABmons', 'Singles Bans', '!Sleep Clause Mod', 'Sleep Moves Clause'],
		banlist: ['Magnet Pull'],
	},
	{
		name: "[Gen 8] STABmons AG",
		desc: `Pok&eacute;mon can use any move of their typing, except Sketch, in addition to the moves they can normally learn. This format has no attempt at balance.`,

		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', 'STABmons Move Legality'],
		restricted: ['Sketch'],
	},
	{
		name: "[Gen 8] Almost Any Ability",
		desc: `Pok&eacute;mon can use any ability, barring the few that are restricted.`,
		
		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex AAA', 'Singles Bans'],
		unbanlist: ['Missingno.'],
	},
	{
		name: "[Gen 8] Any Ability Goes",
		desc: `Pok&eacute;mon can use any ability, with no attempt at balance.`,
		
		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', '!Obtainable Abilities'],
	},
	{
		name: "[Gen 8] Multibility",
		desc: `Run a second ability at the cost of giving up a Pok&eacute;mon's item slot.`,

		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Multibility', 'Singles Bans', '!Sleep Clause Mod', 'Sleep Moves Clause'],
		banlist: ['Magnet Pull'],
	},
	{
		name: "[Gen 8] Pure Hackmons",
		desc: `A National Dex variant of Pure Hackmons. Pok&eacute;mon may have any item, ability, and moves (excluding CAP). No 510 EV limit. This format allows Dynamaxing.`,

		mod: 'gen8',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Hackmons'],
	},
	{
		name: "[Gen 8] Custom Game",

		mod: 'gen8',
		battle: {trunc: Math.trunc},
		debug: true,
		rated: false,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Custom Game Megas'],
	},
	{
		name: "[Gen 8] Stoneless Custom",
		mod: 'gen8',
		battle: {trunc: Math.trunc},
		debug: true,
		rated: false,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Custom Game Megas', 'Stoneless Mega Mod'],
	},





	{
		section: "Random Doubles",
		column: 2,
	},
	{
		name: "[Gen 8] (D)Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and useful item (excluding CAP). This format allows Dynamaxing.`,

		mod: 'gen8',
		gameType: 'doubles',
		team: 'randomHC',
		ruleset: ['Rndm Hackmons'],
	},
	{
		name: "[Gen 8] (D)Hackmons Cup Linked",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and useful item (excluding CAP). The first two moves in a Pok&eacute;mon's moveset are used simultaneously. This format allows Dynamaxing.`,

		mod: 'linked',
		gameType: 'doubles',
		team: 'randomHC',
		ruleset: ['Rndm Hackmons'],
	},
	{
		name: "[Gen 8] (D)Hackmons Cup 24",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and useful item (excluding CAP). Each player will have 24 Pokémon that will each have 24 moves. This format allows Dynamaxing.`,

		mod: 'gen8',
		gameType: 'doubles',
		team: 'randomHC',
		ruleset: ['Rndm Hackmons', 'Max Team Size = 24', 'Max Move Count = 24'],
	},
	
	
	
	{
		section: "Double Battles",
		column: 2,
	},
	{
		name: "[Gen 8] (D)Anything Goes",
		desc: `Doubles NatDex AG with Dynamax Clause.`,
		
		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] (D)Anything Goes Dmax",
		desc: `Doubles NatDex AG with Dynamaxing.`,
		
		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG'],
	},
	{
		name: "[Gen 8] (D)Ubers",
		desc: `Doubles NatDex Ubers with Dynamaxing.`,

		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', '!Dynamax Clause'],
	},
	{
		name: "[Gen 8] (D)Monotype Ubers",
		desc: `All the Pok&eacute;mon on a team must share a type. This format allows Dynamaxing.`,

		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Same Type Clause', 'Type Change Ability Clause', '!Dynamax Clause'],
	},
	{
		name: "[Gen 8] (D)Flat Rules",
		desc: `NatDex Doubles with the in-game Flat Rules.`,

		mod: 'gen8',
		gameType: 'doubles',
		rated: false,
		ruleset: ['NatDex Flat Rules'],
	},
	{
		name: "[Gen 8] (D)Flat Rules 2R",
		desc: `NatDex Doubles with the in-game Flat Rules. Up to two Restricted Legendaries are allowed per team.`,

		mod: 'gen8',
		gameType: 'doubles',
		rated: false,
		ruleset: ['NatDex Flat Rules', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 8] (D)Little Cup",
		desc: `Doubles NatDex LC with Dynamaxing. Little Cup means that only level 1-5 Pok&eacute;mon that are able to evolve and have no previous evolution are allowed.`,

		mod: 'gen8',
		gameType: 'doubles',
		rated: false,
		ruleset: ['NatDex LC', '!Dynamax Clause'],
	},
	
	
	
	{
		section: "Modded Doubles",
		column: 2,
	},
	{
		name: "[Gen 8] (D)Inverse AG",
		desc: `The type matchup chart is inverted: weaknesses become resistances, while resistances and immunities become weaknesses.`,
		
		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', 'Inverse Mod'],
	},
	{
		name: "[Gen 8] (D)Inverse AG Dmax",
		desc: `The type matchup chart is inverted: weaknesses become resistances, while resistances and immunities become weaknesses. This format allows Dynamaxing.`,
		
		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Inverse Mod'],
	},
	{
		name: "[Gen 8] (D)Multi Mega",
		desc: `Removes Mega Evolution limit and Ultra Burst limit.`,
		
		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Multi Mega Mod'],
	},
	{
		name: "[Gen 8] (D)Stoneless Multi Mega",
		desc: `A variant of the [Gen 8] (D)Multi Mega format that allows Mega Evolution-capable Pok&eacute;mon to Mega evolve without their Mega Stone.`,
		
		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['[Gen 8] (D)Multi Mega', 'Stoneless Mega Mod'],
	},
	{
		name: "[Gen 8] (D)12-mon Multi Mega",
		desc: `A variant of the [Gen 8] (D)Multi Mega format that allows up to 12 Pok&eacute;mon on a team. To make a team that large in the teambuilder, either add the Pok&eacute;mon via the 'Import/Export' button, or make the team in a box.`,
		
		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['[Gen 8] (D)Multi Mega', 'Max Team Size = 12'],
	},
	{
		name: "[Gen 8] (D)12 'mons",
		desc: `Each player may have up to 12 Pok&eacute;mon on their team. To make a team that large in the teambuilder, either add the Pok&eacute;mon via the 'Import/Export' button, or make the team in a box.`,
		
		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Max Team Size = 12'],
	},
	{
		name: "[Gen 8] (D)24 moves",
		desc: `Each Pok&eacute;mon may have up to 24 moves, but effort values are banned. Use the 'Import/Export' feature of the teambuilder to give a Pok&eacute;mon more than 4 moves. This format allows Dynamaxing.`,
		
		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', '!Dynamax Clause', 'Max Move Count = 24', '!! EV Limit = 3'],
	},
	{
		name: "[Gen 8] (D)Pokebilities",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously. This format allows Dynamaxing.`,
		
		mod: 'pokebilities',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Pokebilities', '!Dynamax Clause'],
	},
	{
		name: "[Gen 8] (D)Pokebilities AG",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously. This format has neither Dynamax Clause nor any attempt at balance.`,
		
		mod: 'pokebilities',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Pokebilities Mod'],
	},
	{
		name: "[Gen 8] (D)Linked",
		desc: `The first two moves in a Pok&eacute;mon's moveset are used simultaneously. This format allows Dynamaxing.`,

		mod: 'linked',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Linked', '!Dynamax Clause'],
	},
	{
		name: "[Gen 8] (D)Revelationmons",
		desc: `The moves in the first slot(s) of a Pok&eacute;mon's set have their types changed to match the Pok&eacute;mon's type(s). This format allows Dynamaxing.`,

		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Revelationmons', '!Dynamax Clause'],
	},
	{
		name: "[Gen 8] (D)Bonus Type Ubers",
		desc: `Pok&eacute;mon can be nicknamed the name of a type to have that type added onto their current ones. This format allows Dynamaxing.`,
		
		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', '!Dynamax Clause', 'Bonus Type Rule', '!Nickname Clause'],
	},
	{
		name: "[Gen 8] (D)Alphabet Cup",
		desc: `Pok&eacute;mon may learn almost any move that shares the same first letter as their name or a previous evolution's name. This format allows Dynamaxing.`,
		
		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Alphabet', '!Dynamax Clause'],
	},
	{
		name: "[Gen 8] (D)Alphabet Cup AG",
		desc: `Pok&eacute;mon may learn any move, except Sketch, that shares the same first letter as their name or a previous evolution's name. This format has neither Dynamax Clause nor any balance.`,
		
		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Alphabet Cup Move Legality'],
		restricted: ['Sketch'],
	},
	{
		name: "[Gen 8] (D)STABmons",
		desc: `Pok&eacute;mon can use almost any move of their typing, in addition to the moves they can normally learn. This format allows Dynamaxing.`,

		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex STABmons', '!Dynamax Clause'],
		restricted: ['Diamond Storm'],
	},
	{
		name: "[Gen 8] (D)STABmons AG",
		desc: `Pok&eacute;mon can use any move of their typing, except Sketch, in addition to the moves they can normally learn. This format has neither Dynamax Clause nor any balance.`,

		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'STABmons Move Legality'],
		restricted: ['Sketch'],
	},
	{
		name: "[Gen 8] (D)Almost Any Ability",
		desc: `Pok&eacute;mon can use any ability, barring the few that are restricted. This format allows Dynamaxing.`,
		
		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex AAA', '!Dynamax Clause'],
		restricted: ['Anger Point', 'Justified'],
	},
	{
		name: "[Gen 8] (D)Any Ability Goes",
		desc: `Pok&eacute;mon can use any ability, with no attempt at balance. This format allows Dynamaxing.`,
		
		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', '!Obtainable Abilities'],
	},
	{
		name: "[Gen 8] (D)Multibility",
		desc: `Run a second ability at the cost of giving up a Pok&eacute;mon's item slot. This format allows Dynamaxing.`,

		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Multibility', '!Dynamax Clause'],
		restricted: ['Anger Point', 'Justified'],
	},
	{
		name: "[Gen 8] (D)Pure Hackmons",
		desc: `A National Dex variant of Pure Hackmons. Allows any Pok&eacute;mon may have any item, ability, and moves (excluding CAP). No 510 EV limit. This format allows Dynamaxing.`,

		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Hackmons'],
	},
	{
		name: "[Gen 8] (D)Custom Game",

		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		debug: true,
		rated: false,
		ruleset: ['Custom Game Megas'],
	},
	{
		name: "[Gen 8] (D)Stoneless Custom",

		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		debug: true,
		rated: false,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Custom Game Megas', 'Stoneless Mega Mod'],
	},





	{
		section: "Random Triples",
		column: 3,
	},
	{
		name: "[Gen 8] (T)Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and useful item (excluding CAP). This format allows Dynamaxing.`,

		mod: 'gen8',
		gameType: 'triples',
		team: 'randomHC',
		ruleset: ['Rndm Hackmons'],
	},
	{
		name: "[Gen 8] (T)Hackmons Cup Linked",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and useful item (excluding CAP). The first two moves in a Pok&eacute;mon's moveset are used simultaneously. This format allows Dynamaxing.`,

		mod: 'linked',
		gameType: 'triples',
		team: 'randomHC',
		ruleset: ['Rndm Hackmons'],
	},
	{
		name: "[Gen 8] (T)Hackmons Cup 24",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and useful item (excluding CAP). Each player will have 24 Pokémon that will each have 24 moves. This format allows Dynamaxing.`,

		mod: 'gen8',
		gameType: 'triples',
		team: 'randomHC',
		ruleset: ['Rndm Hackmons', 'Max Team Size = 24', 'Max Move Count = 24'],
	},



	{
		section: "Triple Battles",
		column: 3,
	},
	{
		name: "[Gen 8] (T)Anything Goes",
		desc: `Triples NatDex AG with Dynamax Clause.`,
		
		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] (T)Anything Goes Dmax",
		desc: `Triples NatDex AG with Dynamaxing.`,
		
		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG'],
	},
	{
		name: "[Gen 8] (T)Ubers",
		desc: `Triples NatDex Ubers with Dynamax Clause.`,

		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard'],
	},
	{
		name: "[Gen 8] (T)Monotype Ubers",
		desc: `All the Pok&eacute;mon on a team must share a type.`,

		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Same Type Clause', 'Type Change Ability Clause'],
	},
	{
		name: "[Gen 8] (T)Flat Rules",
		desc: `NatDex Triples with the in-game Flat Rules.`,

		mod: 'gen8',
		gameType: 'triples',
		rated: false,
		ruleset: ['NatDex Flat Rules'],
	},
	{
		name: "[Gen 8] (T)Flat Rules 2R",
		desc: `NatDex Triples with the in-game Flat Rules. Up to two Restricted Legendaries are allowed per team.`,

		mod: 'gen8',
		gameType: 'triples',
		rated: false,
		ruleset: ['NatDex Flat Rules', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 8] (T)Little Cup",
		desc: `Triples NatDex LC with Dynamax Clause. Little Cup means that only level 1-5 Pok&eacute;mon that are able to evolve and have no previous evolution are allowed.`,

		mod: 'gen8',
		gameType: 'triples',
		rated: false,
		ruleset: ['NatDex LC'],
	},
	
	
	
	{
		section: "Modded Triples",
		column: 3,
	},
	{
		name: "[Gen 8] (T)Inverse AG",
		desc: `The type matchup chart is inverted: weaknesses become resistances, while resistances and immunities become weaknesses.`,
		
		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', 'Inverse Mod'],
	},
	{
		name: "[Gen 8] (T)Inverse AG Dmax",
		desc: `The type matchup chart is inverted: weaknesses become resistances, while resistances and immunities become weaknesses. This format allows Dynamaxing.`,
		
		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Inverse Mod'],
	},
	{
		name: "[Gen 8] (T)Multi Mega",
		desc: `Removes Mega Evolution limit and Ultra Burst limit.`,
		
		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Multi Mega Mod'],
	},
	{
		name: "[Gen 8] (T)Stoneless Multi Mega",
		desc: `A variant of the [Gen 8] (T)Multi Mega format that allows Mega Evolution-capable Pok&eacute;mon to Mega evolve without their Mega Stone.`,
		
		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['[Gen 8] (T)Multi Mega', 'Stoneless Mega Mod'],
	},
	{
		name: "[Gen 8] (T)12-mon Multi Mega",
		desc: `A variant of the [Gen 8] (T)Multi Mega format that allows up to 12 Pok&eacute;mon on a team. To make a team that large in the teambuilder, either add the Pok&eacute;mon via the 'Import/Export' button, or make the team in a box.`,
		
		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['[Gen 8] (T)Multi Mega', 'Max Team Size = 12'],
	},
	{
		name: "[Gen 8] (T)12 'mons",
		desc: `Each player may have up to 12 Pok&eacute;mon on their team. To make a team that large in the teambuilder, either add the Pok&eacute;mon via the 'Import/Export' button, or make the team in a box.`,
		
		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Max Team Size = 12'],
	},
	{
		name: "[Gen 8] (T)24 moves",
		desc: `Each Pok&eacute;mon may have up to 24 moves, but effort values are banned. Use the 'Import/Export' feature of the teambuilder to give a Pok&eacute;mon more than 4 moves.`,
		
		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Max Move Count = 24', '!! EV Limit = 3'],
	},
	{
		name: "[Gen 8] (T)Pokebilities",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously.`,
		
		mod: 'pokebilities',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Pokebilities'],
	},
	{
		name: "[Gen 8] (T)Pokebilities AG",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously. This format has no attempt at balance.`,
		
		mod: 'pokebilities',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Pokebilities Mod', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] (T)Linked",
		desc: `The first two moves in a Pok&eacute;mon's moveset are used simultaneously.`,

		mod: 'linked',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Linked'],
	},
	{
		name: "[Gen 8] (T)Revelationmons",
		desc: `The moves in the first slot(s) of a Pok&eacute;mon's set have their types changed to match the Pok&eacute;mon's type(s).`,

		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Revelationmons'],
	},
	{
		name: "[Gen 8] (T)Bonus Type Ubers",
		desc: `Pok&eacute;mon can be nicknamed the name of a type to have that type added onto their current ones.`,
		
		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Bonus Type Rule', '!Nickname Clause'],
	},
	{
		name: "[Gen 8] (T)Alphabet Cup",
		desc: `Pok&eacute;mon may learn almost any move that shares the same first letter as their name or a previous evolution's name.`,
		
		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Alphabet'],
	},
	{
		name: "[Gen 8] (T)Alphabet Cup AG",
		desc: `Pok&eacute;mon may learn any move, except Sketch, that shares the same first letter as their name or a previous evolution's name. This format has no attempt at balance.`,
		
		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', 'Alphabet Cup Move Legality'],
		restricted: ['Sketch'],
	},
	{
		name: "[Gen 8] (T)STABmons",
		desc: `Pok&eacute;mon can use almost any move of their typing, in addition to the moves they can normally learn.`,

		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex STABmons'],
		restricted: ['Diamond Storm'],
	},
	{
		name: "[Gen 8] (T)STABmons AG",
		desc: `Pok&eacute;mon can use any move of their typing, except Sketch, in addition to the moves they can normally learn. This format has no attempt at balance.`,

		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', 'STABmons Move Legality'],
		restricted: ['Sketch'],
	},
	{
		name: "[Gen 8] (T)Almost Any Ability",
		desc: `Pok&eacute;mon can use any ability, barring the few that are restricted.`,
		
		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex AAA'],
		restricted: ['Anger Point', 'Justified'],
	},
	{
		name: "[Gen 8] (T)Any Ability Goes",
		desc: `Pok&eacute;mon can use any ability, with no attempt at balance.`,
		
		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', '!Obtainable Abilities'],
	},
	{
		name: "[Gen 8] (T)Multibility",
		desc: `Run a second ability at the cost of giving up a Pok&eacute;mon's item slot.`,

		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Multibility'],
		restricted: ['Anger Point', 'Justified'],
	},
	{
		name: "[Gen 8] (T)Pure Hackmons",
		desc: `A National Dex variant of Pure Hackmons. Allows any Pok&eacute;mon may have any item, ability, and moves (excluding CAP). No 510 EV limit. This format allows Dynamaxing.`,

		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Hackmons'],
	},
	{
		name: "[Gen 8] (T)Custom Game",

		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		debug: true,
		rated: false,
		ruleset: ['Custom Game Megas'],
	},
	{
		name: "[Gen 8] (T)Stoneless Custom",

		mod: 'gen8',
		gameType: 'triples',
		battle: {trunc: Math.trunc},
		debug: true,
		rated: false,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Custom Game Megas', 'Stoneless Mega Mod'],
	},





	{
		section: "Random Multis",
		column: 4,
	},
	{
		name: "[Gen 8] (M)Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and useful item (excluding CAP). This format allows Dynamaxing.`,

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		team: 'randomHC',
		ruleset: ['Rndm Hackmons'],
	},
	{
		name: "[Gen 8] (M)Hackmons Cup Linked",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and useful item (excluding CAP). The first two moves in a Pok&eacute;mon's moveset are used simultaneously. This format allows Dynamaxing.`,

		mod: 'linked',
		gameType: 'multi',
		tournamentShow: false,
		team: 'randomHC',
		ruleset: ['Rndm Hackmons'],
	},
	{
		name: "[Gen 8] (M)Hackmons Cup 24",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and useful item (excluding CAP). Each player will have 24 Pokémon that will each have 24 moves. This format allows Dynamaxing.`,

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		team: 'randomHC',
		ruleset: ['Rndm Hackmons', 'Max Team Size = 24', 'Max Move Count = 24'],
	},



	{
		section: "Multi Battles",
		column: 4,
	},
	{
		name: "[Gen 8] (M)Anything Goes",
		desc: `Multi Battle NatDex AG with Dynamax Clause.`,
		
		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] (M)Anything Goes Dmax",
		desc: `Multi Battle NatDex AG with Dynamaxing.`,
		
		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG'],
	},
	{
		name: "[Gen 8] (M)Ubers",
		desc: `Multi Battle NatDex Ubers with Dynamax Clause.`,

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard'],
	},
	{
		name: "[Gen 8] (M)Monotype Ubers",
		desc: `All the Pok&eacute;mon on a team must share a type.`,

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Same Type Clause', 'Type Change Ability Clause'],
	},
	{
		name: "[Gen 8] (M)Flat Rules",
		desc: `NatDex Multi Battle with the in-game Flat Rules.`,

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		rated: false,
		ruleset: ['NatDex Flat Rules'],
	},
	{
		name: "[Gen 8] (M)Flat Rules 2R",
		desc: `NatDex Multi Battle with the in-game Flat Rules. Up to two Restricted Legendaries are allowed per team.`,

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		rated: false,
		ruleset: ['NatDex Flat Rules', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 8] (M)Little Cup",
		desc: `Multi Battle NatDex LC with Dynamax Clause. Little Cup means that only level 1-5 Pok&eacute;mon that are able to evolve and have no previous evolution are allowed.`,

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		rated: false,
		ruleset: ['NatDex LC'],
	},
	
	
	
	{
		section: "Modded Multis",
		column: 4,
	},
	{
		name: "[Gen 8] (M)Inverse AG",
		desc: `The type matchup chart is inverted: weaknesses become resistances, while resistances and immunities become weaknesses.`,
		
		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', 'Inverse Mod'],
	},
	{
		name: "[Gen 8] (M)Inverse AG Dmax",
		desc: `The type matchup chart is inverted: weaknesses become resistances, while resistances and immunities become weaknesses. This format allows Dynamaxing.`,
		
		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Inverse Mod'],
	},
	{
		name: "[Gen 8] (M)Multi Mega",
		desc: `Removes Mega Evolution limit and Ultra Burst limit.`,
		
		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Multi Mega Mod'],
	},
	{
		name: "[Gen 8] (M)Stoneless Multi Mega",
		desc: `A variant of the [Gen 8] (M)Multi Mega format that allows Mega Evolution-capable Pok&eacute;mon to Mega evolve without their Mega Stone.`,
		
		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['[Gen 8] (M)Multi Mega', 'Stoneless Mega Mod'],
	},
	{
		name: "[Gen 8] (M)12-mon Multi Mega",
		desc: `A variant of the [Gen 8] (M)Multi Mega format that allows up to 12 Pok&eacute;mon on a team. To make a team that large in the teambuilder, either add the Pok&eacute;mon via the 'Import/Export' button, or make the team in a box.`,
		
		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['[Gen 8] (M)Multi Mega', 'Max Team Size = 12'],
	},
	{
		name: "[Gen 8] (M)12 'mons",
		desc: `Each player may have up to 12 Pok&eacute;mon on their team. To make a team that large in the teambuilder, either add the Pok&eacute;mon via the 'Import/Export' button, or make the team in a box.`,
		
		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Max Team Size = 12'],
	},
	{
		name: "[Gen 8] (M)24 moves",
		desc: `Each Pok&eacute;mon may have up to 24 moves, but effort values are banned. Use the 'Import/Export' feature of the teambuilder to give a Pok&eacute;mon more than 4 moves.`,
		
		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Max Move Count = 24', '!! EV Limit = 3'],
	},
	{
		name: "[Gen 8] (M)Pokebilities",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously.`,
		
		mod: 'pokebilities',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Pokebilities'],
	},
	{
		name: "[Gen 8] (M)Pokebilities AG",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously. This format has no attempt at balance.`,
		
		mod: 'pokebilities',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Pokebilities Mod', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] (M)Linked",
		desc: `The first two moves in a Pok&eacute;mon's moveset are used simultaneously.`,

		mod: 'linked',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Linked'],
	},
	{
		name: "[Gen 8] (M)Revelationmons",
		desc: `The moves in the first slot(s) of a Pok&eacute;mon's set have their types changed to match the Pok&eacute;mon's type(s).`,

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Revelationmons'],
	},
	{
		name: "[Gen 8] (M)Bonus Type Ubers",
		desc: `Pok&eacute;mon can be nicknamed the name of a type to have that type added onto their current ones.`,
		
		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'Bonus Type Rule', '!Nickname Clause'],
	},
	{
		name: "[Gen 8] (M)Alphabet Cup",
		desc: `Pok&eacute;mon may learn almost any move that shares the same first letter as their name or a previous evolution's name.`,
		
		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Alphabet'],
	},
	{
		name: "[Gen 8] (M)Alphabet Cup AG",
		desc: `Pok&eacute;mon may learn any move, except Sketch, that shares the same first letter as their name or a previous evolution's name. This format has no attempt at balance.`,
		
		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', 'Alphabet Cup Move Legality'],
		restricted: ['Sketch'],
	},
	{
		name: "[Gen 8] (M)STABmons",
		desc: `Pok&eacute;mon can use almost any move of their typing, in addition to the moves they can normally learn.`,

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex STABmons'],
		restricted: ['Diamond Storm'],
	},
	{
		name: "[Gen 8] (M)STABmons AG",
		desc: `Pok&eacute;mon can use any move of their typing, except Sketch, in addition to the moves they can normally learn. This format has no attempt at balance.`,

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', 'STABmons Move Legality'],
		restricted: ['Sketch'],
	},
	{
		name: "[Gen 8] (M)Almost Any Ability",
		desc: `Pok&eacute;mon can use any ability, barring the few that are restricted.`,
		
		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex AAA'],
		restricted: ['Anger Point', 'Justified'],
	},
	{
		name: "[Gen 8] (M)Any Ability Goes",
		desc: `Pok&eacute;mon can use any ability, with no attempt at balance.`,
		
		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', '!Obtainable Abilities'],
	},
	{
		name: "[Gen 8] (M)Multibility",
		desc: `Run a second ability at the cost of giving up a Pok&eacute;mon's item slot.`,

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Multibility'],
		restricted: ['Anger Point', 'Justified'],
	},
	{
		name: "[Gen 8] (M)Pure Hackmons",
		desc: `A National Dex variant of Pure Hackmons. Allows any Pok&eacute;mon may have any item, ability, and moves (excluding CAP). No 510 EV limit. This format allows Dynamaxing.`,

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Hackmons'],
	},
	{
		name: "[Gen 8] (M)Custom Game",

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		rated: false,
		ruleset: ['Custom Game Megas'],
	},
	{
		name: "[Gen 8] (M)Stoneless Custom",

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		rated: false,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Custom Game Megas', 'Stoneless Mega Mod'],
	},





	{
		section: "Random FFAs",
		column: 5,
	},
	{
		name: "[Gen 8] FFA Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and useful item (excluding CAP). This format allows Dynamaxing.`,

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		team: 'randomHC',
		ruleset: ['Rndm Hackmons'],
	},
	{
		name: "[Gen 8] FFA Hackmons Cup Linked",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and useful item (excluding CAP). The first two moves in a Pok&eacute;mon's moveset are used simultaneously. This format allows Dynamaxing.`,

		mod: 'linked',
		gameType: 'freeforall',
		tournamentShow: false,
		team: 'randomHC',
		ruleset: ['Rndm Hackmons'],
	},
	{
		name: "[Gen 8] FFA Hackmons Cup 24",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and useful item (excluding CAP). Each player will have 24 Pokémon that will each have 24 moves. This format allows Dynamaxing.`,

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		team: 'randomHC',
		ruleset: ['Rndm Hackmons', 'Max Team Size = 24', 'Max Move Count = 24'],
	},



	{
		section: "Free-For-Alls",
		column: 5,
	},
	{
		name: "[Gen 8] FFA Anything Goes",
		desc: `FFA NatDex AG with Dynamax Clause.`,
		
		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] FFA Anything Goes Dmax",
		desc: `FFA NatDex AG with Dynamaxing.`,
		
		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG'],
	},
	{
		name: "[Gen 8] FFA Ubers",
		desc: `FFA NatDex Ubers with Dynamax Clause.`,

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'FFA Bans'],
	},
	{
		name: "[Gen 8] FFA Monotype Ubers",
		desc: `All the Pok&eacute;mon on a team must share a type.`,

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'FFA Bans', 'Same Type Clause', 'Type Change Ability Clause'],
	},
	{
		name: "[Gen 8] FFA Flat Rules",
		desc: `NatDex FFA with the in-game Flat Rules.`,

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['NatDex Flat Rules'],
	},
	{
		name: "[Gen 8] FFA Flat Rules 2R",
		desc: `NatDex FFA with the in-game Flat Rules. Up to two Restricted Legendaries are allowed per team.`,

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['NatDex Flat Rules', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 8] FFA Little Cup",
		desc: `FFA NatDex LC with Dynamax Clause. Little Cup means that only level 1-5 Pok&eacute;mon that are able to evolve and have no previous evolution are allowed.`,

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['NatDex LC', 'FFA Bans'],
	},
	
	
	
	{
		section: "Modded FFAs",
		column: 5,
	},
	{
		name: "[Gen 8] FFA Inverse AG",
		desc: `The type matchup chart is inverted: weaknesses become resistances, while resistances and immunities become weaknesses.`,
		
		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', 'Inverse Mod'],
	},
	{
		name: "[Gen 8] FFA Inverse AG Dmax",
		desc: `The type matchup chart is inverted: weaknesses become resistances, while resistances and immunities become weaknesses. This format allows Dynamaxing.`,
		
		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Inverse Mod'],
	},
	{
		name: "[Gen 8] FFA Multi Mega",
		desc: `Removes Mega Evolution limit and Ultra Burst limit.`,
		
		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'FFA Bans', 'Multi Mega Mod'],
	},
	{
		name: "[Gen 8] FFA Stoneless Multi Mega",
		desc: `A variant of the [Gen 8] FFA Multi Mega format that allows Mega Evolution-capable Pok&eacute;mon to Mega evolve without their Mega Stone.`,
		
		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['[Gen 8] FFA Multi Mega', 'Stoneless Mega Mod'],
	},
	{
		name: "[Gen 8] FFA 12-mon Multi Mega",
		desc: `A variant of the [Gen 8] FFA Multi Mega format that allows up to 12 Pok&eacute;mon on a team. To make a team that large in the teambuilder, either add the Pok&eacute;mon via the 'Import/Export' button, or make the team in a box.`,
		
		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['[Gen 8] FFA Multi Mega', 'Max Team Size = 12'],
	},
	{
		name: "[Gen 8] FFA 12 'mons",
		desc: `Each player may have up to 12 Pok&eacute;mon on their team. To make a team that large in the teambuilder, either add the Pok&eacute;mon via the 'Import/Export' button, or make the team in a box.`,
		
		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'FFA Bans', 'Max Team Size = 12'],
	},
	{
		name: "[Gen 8] FFA 24 moves",
		desc: `Each Pok&eacute;mon may have up to 24 moves, but effort values are banned. Use the 'Import/Export' feature of the teambuilder to give a Pok&eacute;mon more than 4 moves.`,
		
		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'FFA Bans', 'Max Move Count = 24', '!! EV Limit = 3'],
	},
	{
		name: "[Gen 8] FFA Pokebilities",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously.`,
		
		mod: 'pokebilities',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Pokebilities', 'FFA Bans'],
	},
	{
		name: "[Gen 8] FFA Pokebilities AG",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously. This format has no attempt at balance.`,
		
		mod: 'pokebilities',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Pokebilities Mod', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] FFA Linked",
		desc: `The first two moves in a Pok&eacute;mon's moveset are used simultaneously.`,

		mod: 'linked',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Linked', 'FFA Bans'],
	},
	{
		name: "[Gen 8] FFA Revelationmons",
		desc: `The moves in the first slot(s) of a Pok&eacute;mon's set have their types changed to match the Pok&eacute;mon's type(s).`,

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Revelationmons', 'FFA Bans', '!Sleep Clause Mod', 'Sleep Moves Clause'],
	},
	{
		name: "[Gen 8] FFA Bonus Type Ubers",
		desc: `Pok&eacute;mon can be nicknamed the name of a type to have that type added onto their current ones.`,
		
		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE Standard', 'FFA Bans', 'Bonus Type Rule', '!Nickname Clause'],
	},
	{
		name: "[Gen 8] FFA Alphabet Cup",
		desc: `Pok&eacute;mon may learn almost any move that shares the same first letter as their name or a previous evolution's name.`,
		
		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Alphabet', 'FFA Bans'],
	},
	{
		name: "[Gen 8] FFA Alphabet Cup AG",
		desc: `Pok&eacute;mon may learn any move, except Sketch, that shares the same first letter as their name or a previous evolution's name. This format has no attempt at balance.`,
		
		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', 'Alphabet Cup Move Legality'],
		restricted: ['Sketch'],
	},
	{
		name: "[Gen 8] FFA STABmons",
		desc: `Pok&eacute;mon can use almost any move of their typing, in addition to the moves they can normally learn.`,

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex STABmons', 'FFA Bans', '!Sleep Clause Mod', 'Sleep Moves Clause'],
		restricted: ['Diamond Storm'],
	},
	{
		name: "[Gen 8] FFA STABmons AG",
		desc: `Pok&eacute;mon can use any move of their typing, except Sketch, in addition to the moves they can normally learn. This format has no attempt at balance.`,

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', 'STABmons Move Legality'],
		restricted: ['Sketch'],
	},
	{
		name: "[Gen 8] FFA Almost Any Ability",
		desc: `Pok&eacute;mon can use any ability, barring the few that are restricted.`,
		
		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex AAA', 'FFA Bans'],
	},
	{
		name: "[Gen 8] FFA Any Ability Goes",
		desc: `Pok&eacute;mon can use any ability, with no attempt at balance.`,
		
		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['BGTE NatDex AG', 'Dynamax Clause', '!Obtainable Abilities'],
	},
	{
		name: "[Gen 8] FFA Multibility",
		desc: `Run a second ability at the cost of giving up a Pok&eacute;mon's item slot.`,

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Multibility', 'FFA Bans', '!Sleep Clause Mod', 'Sleep Moves Clause'],
	},
	{
		name: "[Gen 8] FFA Pure Hackmons",
		desc: `A National Dex variant of Pure Hackmons. Allows any Pok&eacute;mon may have any item, ability, and moves (excluding CAP). No 510 EV limit. This format allows Dynamaxing.`,

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		rated: false,
		ruleset: ['NatDex Hackmons'],
	},
	{
		name: "[Gen 8] FFA Custom Game",

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		rated: false,
		ruleset: ['Custom Game Megas'],
	},
	{
		name: "[Gen 8] FFA Stoneless Custom",

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		rated: false,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Custom Game Megas', 'Stoneless Mega Mod'],
	},





	/*
	// Custom Formats
	///////////////////////////////////////////////////////////////////

	{
		section: "Draft",
	},
	{
		name: "[Gen 8] National Dex Draft",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex Legacy",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex Leaks Draft",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex Leaks Legacy",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] NatDex LC National Dex Draft",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Double Item Clause', 'Little Cup Rule', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] NatDex LC National Dex Legacy",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Double Item Clause', 'Little Cup Rule', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] NatDex LC National Dex Leaks Draft",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Double Item Clause', 'Little Cup Rule', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] NatDex LC National Dex Leaks Legacy",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Double Item Clause', 'Little Cup Rule', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
    name: "[Gen 8] Draft Multi Battle",
    mod: 'gen8',
    gameType: 'multi',
    searchShow: false,
    tournamentShow: false,
    rated: false,
    ruleset: [
        'Max Team Size = 4', 'Picked Team Size = 3',
				'Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause',
    ],
	},
	{
    name: "[Gen 8] Legacy Draft Multi Battle",
    mod: 'gen8',
    gameType: 'multi',
    searchShow: false,
    tournamentShow: false,
    rated: false,
    ruleset: [
        'Max Team Size = 4', 'Picked Team Size = 3',
				'Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Dynamax Clause',
    ],
	},
	{
		name: "[Gen 8] BBL Draft",

		mod: 'gen8legends',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause'],
	},

	// Sw/Sh Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Singles",
	},
	{
		name: "[Gen 8] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>`,
		],

		mod: 'gen8',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Unrated Random Battle",

		mod: 'gen8',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Free-For-All Random Battle",

		mod: 'gen8',
		team: 'random',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Random Battle (Blitz)",

		mod: 'gen8',
		team: 'random',
		ruleset: ['[Gen 8] Random Battle', 'Blitz'],
	},
	{
		name: "[Gen 8] NatDex OU",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Ban Unbalanced Moves', 'Dynamax Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Z-Move Clause'],
		banlist: [
			'Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Sand Veil', 'Shadow Tag', 'Snow Cloak',
			'Bright Powder', 'King\'s Rock', 'Lax Incense', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] NatDex OU Blitz",

		mod: 'gen8',
		ruleset: ['[Gen 8] NatDex OU', 'Blitz'],
	},
	{
		name: "[Gen 8] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676539/">Ubers Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3675564/">Ubers Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3675194/">Ubers Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Ban Unbalanced Moves', 'Dynamax Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Z-Move Clause'],
		banlist: ['AG', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 8] NatDex UU",
		mod: 'gen8',
		ruleset: ['[Gen 8] NatDex OU'],
		banlist: ['OU', 'UUBL', 'Light Clay'],
	},
	{
		name: "[Gen 8] NatDex RU",
		mod: 'gen8',
		ruleset: ['[Gen 8] NatDex UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 8] NatDex NU",
		mod: 'gen8',
		ruleset: ['[Gen 8] NatDex RU'],
		banlist: ['RU', 'NUBL', 'Drizzle', 'Drought', 'Slush Rush'],
	},
	{
		name: "[Gen 8] NatDex PU",
		mod: 'gen8',
		ruleset: ['[Gen 8] NatDex NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 8] NatDex LC",
		mod: 'gen8',
		ruleset: ['Little Cup Rule', 'Standard NatDex', 'Ban Unbalanced Moves', 'Dynamax Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Z-Move Clause'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Vullaby', 'Vulpix-Alola', 'Woobat', 'Zigzagoon-Base',
			'Chlorophyll', 'Moody', 'Baton Pass', 'Sticky Web',
		],
	},
	{
		name: "[Gen 8] NatDex Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		mod: 'gen8',
		ruleset: ['Same Type Clause', 'Standard NatDex', 'Ban Unbalanced Moves', 'Dynamax Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Z-Move Clause'],
		banlist: [
			'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dracovish', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kartana', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo', 'Naganadel',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Urshifu-Base', 'Xerneas', 'Yveltal',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Moody', 'Power Construct', 'Shadow Tag', 'Bright Powder',
			'Damp Rock', 'Focus Band', 'King\'s Rock', 'Lax Incense', 'Quick Claw', 'Smooth Rock', 'Terrain Extender', 'Acupressure', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] NatDex 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		mod: 'gen8',
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Endless Battle Clause',
		],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Dialga', 'Dragonite', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Jirachi',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mew', 'Mewtwo', 'Mimikyu', 'Necrozma', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Sableye', 'Snorlax', 'Solgaleo', 'Victini', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Power Construct', 'Bright Powder', 'Focus Band', 'Focus Sash', 'Lax Incense', 'Quick Claw',
			'Acupressure', 'Hypnosis', 'Perish Song', 'Sing',
		],
	},
	{
		name: "[Gen 8] NatDex Anything Goes",
		mod: 'gen8',
		ruleset: ['Standard NatDex'],
	},
	{
		name: "[Gen 8] NatDex ZU",
		desc: `The unofficial usage-based tier below PU.`,
		mod: 'gen8',
		ruleset: ['[Gen 8] NatDex PU'],
		banlist: [
			'PU', 'Arctovish', 'Aurorus', 'Basculin', 'Centiskorch', 'Drampa', 'Exeggutor-Alola', 'Gallade', 'Haunter', 'Magmortar', 'Magneton', 'Malamar',
			'Omastar', 'Rotom-Frost', 'Turtonator', 'Vanilluxe', 'Vikavolt', 'Silvally-Dragon', 'Silvally-Ground', 'Sneasel', 'Damp Rock', 'Grassy Seed',
		],
	},
	{
		name: "[Gen 8] NatDex LC UU",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] NatDex LC'],
		banlist: [
			// LC OU
			'Abra', 'Carvanha', 'Diglett-Base', 'Dwebble', 'Ferroseed', 'Foongus', 'Frillish', 'Grookey', 'Koffing',
			'Larvesta', 'Magby', 'Magnemite', 'Mareanie', 'Mienfoo', 'Mudbray', 'Natu', 'Onix', 'Pawniard',
			'Ponyta-Base', 'Porygon', 'Slowpoke-Base', 'Staryu', 'Timburr', 'Trapinch', 'Tyrunt',
			// LC UUBL
			'Archen', 'Farfetch\u2019d-Galar', 'Scorbunny', 'Shellder', 'Wingull',
		],
	},
	{
		name: "[Gen 8] NatDex CAP",
		mod: 'gen8',
		ruleset: ['[Gen 8] NatDex OU', '+CAP'],
		banlist: ['Crucibellite'],
	},
	{
		name: "[Gen 8] NatDex CAP LC",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] NatDex LC', '+CAP'],
		banlist: ['Cawdet'],
	},
	{
		name: "[Gen 8] Custom Game",

		mod: 'gen8',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// Sw/Sh Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Doubles",
	},
	{
		name: "[Gen 8] Random Doubles Battle",

		mod: 'gen8',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] NatDex Doubles OU",
		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Dynamax Clause', 'Swagger Clause'],
		banlist: ['DUber', 'Power Construct', 'Shadow Tag'],
	},
	{
		name: "[Gen 8] NatDex Doubles Ubers",
		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
		banlist: [],
	},
	{
		name: "[Gen 8] NatDex Doubles UU",
		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['[Gen 8] NatDex Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 8] NatDex Doubles LC",
		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Little Cup Rule', 'Dynamax Clause', 'Swagger Clause', 'Sleep Clause Mod'],
		banlist: ['Corsola-Galar', 'Cutiefly', 'Ponyta-Base', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Vulpix-Base', 'Ally Switch'],
	},
	{
		name: "[Gen 8] VGC 2022",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3677186/">VGC 2022 Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3695848/">VGC 2022 Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3696395/">VGC 2022 Viability Rankings</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 8] VGC 2021 Series 11",
		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer', 'Limit One Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 8] VGC 2021 Series 9",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer'],
	},
	{
		name: "[Gen 8] VGC 2020",

		mod: 'gen8dlc1',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer'],
	},
	{
		name: "[Gen 8] NatDex 2v2 Doubles",
		desc: `Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.`,
		mod: 'gen8',
		gameType: 'doubles',
		ruleset: [
			'Picked Team Size = 2', 'Max Team Size = 4',
			'Standard Doubles', 'Accuracy Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod',
		],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Cottonee', 'Dialga', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Jirachi', 'Kyogre',
			'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza',
			'Reshiram', 'Solgaleo', 'Tornadus-Base', 'Urshifu-Base', 'Urshifu-Rapid-Strike', 'Whimsicott', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Power Construct', 'Focus Sash', 'Ally Switch', 'Final Gambit', 'Perish Song', 'Swagger',
		],
	},
	{
		name: '[Gen 8] Metronome Battle',
		mod: 'gen8',
		gameType: 'doubles',
		ruleset: [
			'Max Team Size = 2',
			'HP Percentage Mod', 'Cancel Mod',
		],
		banlist: [
			'Pokestar Spirit', 'Shedinja + Sturdy', 'Battle Bond', 'Cheek Pouch', 'Cursed Body', 'Dry Skin', 'Fur Coat', 'Gorilla Tactics',
			'Grassy Surge', 'Huge Power', 'Ice Body', 'Iron Barbs', 'Libero', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Perish Body', 'Poison Heal',
			'Power Construct', 'Pressure', 'Protean', 'Pure Power', 'Rain Dish', 'Rough Skin', 'Sand Spit', 'Sand Stream', 'Snow Warning', 'Stamina',
			'Volt Absorb', 'Water Absorb', 'Wonder Guard', 'Abomasite', 'Aguav Berry', 'Assault Vest', 'Berry', 'Berry Juice', 'Berserk Gene',
			'Black Sludge', 'Enigma Berry', 'Figy Berry', 'Gold Berry', 'Iapapa Berry', 'Kangaskhanite', 'Leftovers', 'Mago Berry', 'Medichamite',
			'Steel Memory', 'Oran Berry', 'Rocky Helmet', 'Shell Bell', 'Sitrus Berry', 'Wiki Berry', 'Harvest + Jaboca Berry', 'Harvest + Rowap Berry',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (species.types.includes('Steel')) {
				return [`${species.name} is a Steel-type, which is banned from Metronome Battle.`];
			}
			if (species.bst > 625) {
				return [`${species.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
			}
			const item = this.dex.items.get(set.item);
			if (set.item && item.megaStone) {
				const megaSpecies = this.dex.species.get(item.megaStone);
				if (species.baseSpecies === item.megaEvolves && megaSpecies.bst > 625) {
					return [
						`${set.name || set.species}'s item ${item.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`,
					];
				}
			}
			if (set.moves.length !== 1 || this.dex.moves.get(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
	},
	{
		name: "[Gen 8] Multi Random Battle",

		mod: 'gen8',
		team: 'random',
		gameType: 'multi',
		searchShow: false,
		tournamentShow: false,
		rated: false,
		ruleset: [
			'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod',
		],
	},
	{
    name: "[Gen 8] Multi Battle",
    mod: 'gen8',
    gameType: 'multi',
    searchShow: false,
    tournamentShow: false,
    rated: false,
    ruleset: [
        'Max Team Size = 4', 'Picked Team Size = 3',
        'Standard NatDex', 'Species Clause', 'Sleep Clause Mod', 'Dynamax Clause',
    ],
	},
	{
		name: "[Gen 8] Doubles Custom Game",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// National Dex
	///////////////////////////////////////////////////////////////////

	{
		section: "Level 120",
	},
	{
		name: "[Gen 8] Level 120 NatDex OU",
		mod: 'gen8',
		ruleset: ['[Gen 8] NatDex OU', 'Level 120'],
	},
	{
		name: "[Gen 8] Level 120 NatDex UU",
		mod: 'gen8',
		ruleset: ['[Gen 8] NatDex UU', 'Level 120'],
	},
	{
		name: "[Gen 8] Level 120 NatDex AG",
		mod: 'gen8',
		ruleset: ['[Gen 8] NatDex Anything Goes', 'Level 120'],
	},

	// Pet Mods
	///////////////////////////////////////////////////////////////////

	{
		section: "Pet Mods",
	},
	{
		name: "[Gen 8] Restrictions",
		desc: `A metagame made up of brand new Pok&eacute;mon that are made according to various random and non-random restrictions.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673824/">Restrictions</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1XsplBqN8njHZJT9cTP_3i3YSFITB9WaVfNOYAbNY75M/edit?usp=sharing">Spreadsheet</a>`,
		],
		mod: 'restrictions',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['All Pokemon', 'Past'],
		unbanlist: [
			'Vulcaraptor', 'Parakinesis', 'Serpaint', 'Torgeist', 'Regolite', 'Polbearab', 'Centhorn', 'Donzyxote', 'Scimicobra', 'Folliclawe', 'Afloof', 'Nimbusteed',
			'Aerock', 'Borassa', 'Sharm', 'Nunopod', 'Crypterid', 'Abysseil', 'Faerenheit', 'Spiriteal', 'Zoltanka', 'Flydra', 'Coracrab', 'Quadringo', 'Teslaple',
			'Kapagon', 'Cyknight', 'Dirtoad', 'Crystelf', 'Rancourgar', 'Scalaron', 'Dragraceful', 'Tantrary', 'Modolith', 'Snailord', 'Arbrella', 'Draugelid',
			'Cinnastar', 'Refluse', 'Kelven', 'Kodokai', 'Cindarner', 'Thucotuco', 'Sorree', 'Gembezzle', 'Winterloper', 'Agapest', 'Volvolpa', 'Punduluum', 'Wraithful',
			'Panzarma', 'Krachiten', 'Cellsius', 'Borelem', 'Electangle', 'Orchile', 'Shinodori', 'Fluidrake', 'Potossum', 'Twygdrasill',
		],
	},
	{
		name: "[Gen 8] Roulettemons Random Battle",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3649106/">Roulettemons</a>`,
			`&bullet; <a href="https://docs.google.com/spreadsheets/d/1EOA1m7JXTq7Zz0ViVI4n6lBppFjVBa4S1GqhAwkPTZQ/edit?usp=sharing">Spreadsheet</a>`,
		],
		team: 'random',
		mod: 'roulettemons',
		ruleset: ['Standard NatDex'],
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
		},
		onChangeSet(set) {
			if (set.species === 'Chillyte-Mega') {
				set.species = 'Chillyte';
				set.ability = 'Grassy Surge';
			}
		},
	},
	{
		name: "[Gen 6] NEXT OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3476151/">Gen-NEXT Development Thread</a>`,
		],

		mod: 'gennext',
		searchShow: false,
		challengeShow: false,
		ruleset: ['Obtainable', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber'],
	},

	// OM of the Month
	///////////////////////////////////////////////////////////////////

	{
		section: "OM of the Month",
		column: 2,
	},
	{
		name: "[Gen 8] Broken Record",
		desc: `Pok&eacute;mon can hold a TR to use that move in battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3701270/">Broken Record</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', '!Sleep Clause Mod', 'Sleep Moves Clause', 'Dynamax Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala',
			'Magearna', 'Marshadow', 'Melmetal', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza',
			'Regieleki', 'Reshiram', 'Rillaboom', 'Solgaleo', 'Spectrier', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Base',
			'Zekrom', 'Zygarde-Base', 'Arena Trap', 'Magnet Pull', 'Moody', 'Power Construct', 'Shadow Tag', 'TR29 (Baton Pass)', 'TR82 (Stored Power)', 'Baton Pass',
		],
		onValidateSet(set) {
			if (!set.item) return;
			const item = this.dex.items.get(set.item);
			if (!/^tr\d\d/i.test(item.name)) return;
			const moveName = item.desc.split('move ')[1].split('.')[0];
			if (set.moves.map(this.toID).includes(this.toID(moveName))) {
				return [
					`${set.species} can't run ${item.name} (${moveName}) as its item because it already has that move in its moveset.`,
				];
			}
		},
		onValidateTeam(team) {
			const trs = new Set<string>();
			for (const set of team) {
				if (!set.item) continue;
				const item = this.dex.items.get(set.item).name;
				if (!/^tr\d\d/i.test(item)) continue;
				if (trs.has(item)) {
					return [`Your team already has a Pok\u00e9mon with ${item}.`];
				}
				trs.add(item);
			}
		},
		onTakeItem(item) {
			return !/^tr\d\d/i.test(item.name);
		},
		onModifyMove(move) {
			if (move.id === 'knockoff') {
				move.onBasePower = function (basePower, source, target, m) {
					const item = target.getItem();
					if (!this.singleEvent('TakeItem', item, target.itemState, target, target, m, item)) return;
					// Very hardcode but I'd prefer to not make a mod for one damage calculation change
					if (item.id && !/^tr\d\d/i.test(item.id)) {
						return this.chainModify(1.5);
					}
				};
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				const item = pokemon.getItem();
				if (/^tr\d\d/i.test(item.name)) {
					const move = this.dex.moves.get(item.desc.split('move ')[1].split('.')[0]);
					pokemon.moveSlots = (pokemon as any).baseMoveSlots = [
						...pokemon.baseMoveSlots, {
							id: move.id,
							move: move.name,
							pp: move.pp * 8 / 5,
							maxpp: move.pp * 8 / 5,
							target: move.target,
							disabled: false,
							disabledSource: '',
							used: false,
						},
					];
				}
			}
		},
	},
	{
		name: "[Gen 8] Inheritance",
		desc: `Pok&eacute;mon may use the ability and moves of another, as long as they forfeit their own learnset.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656811/">Inheritance</a>`,
		],

		mod: 'gen8',
		// searchShow: false,
		ruleset: ['Standard', '!Sleep Clause Mod', 'Sleep Moves Clause', '2 Ability Clause', 'Dynamax Clause'],
		banlist: [
			'Blacephalon', 'Blaziken', 'Butterfree', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chansey', 'Combusken', 'Cresselia', 'Darmanitan-Galar', 'Dialga', 'Dracovish',
			'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala',
			'Magearna', 'Marshadow', 'Melmetal', 'Mewtwo', 'Natu', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Regieleki',
			'Regigigas', 'Reshiram', 'Sableye', 'Shedinja', 'Solgaleo', 'Spectrier', 'Tapu Koko', 'Toxtricity', 'Torkoal', 'Urshifu-Base', 'Xatu', 'Xerneas', 'Yveltal',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zeraora', 'Zekrom', 'Arena Trap', 'Contrary', 'Drizzle', 'Huge Power', 'Imposter', 'Innards Out',
			'Libero', 'Moody', 'Power Construct', 'Pure Power', 'Quick Draw', 'Shadow Tag', 'Sheer Force', 'Simple', 'Unaware', 'Unburden', 'Water Bubble', 'King\'s Rock',
			'Quick Claw', 'Baton Pass', 'Bolt Beak', 'Fishious Rend', 'Shell Smash', 'Thousand Arrows',
		],
		getEvoFamily(speciesid) {
			let species = Dex.species.get(speciesid);
			while (species.prevo) {
				species = Dex.species.get(species.prevo);
			}
			return species.id;
		},
		validateSet(set, teamHas) {
			const unreleased = (pokemon: Species) => pokemon.tier === "Unreleased" && pokemon.isNonstandard === "Unobtainable";
			if (!teamHas.abilityMap) {
				teamHas.abilityMap = Object.create(null);
				for (const pokemon of Dex.species.all()) {
					if (pokemon.isNonstandard || unreleased(pokemon)) continue;
					if (pokemon.requiredAbility || pokemon.requiredItem || pokemon.requiredMove) continue;
					if (this.ruleTable.isBannedSpecies(pokemon)) continue;

					for (const key of Object.values(pokemon.abilities)) {
						const abilityId = this.dex.toID(key);
						if (abilityId in teamHas.abilityMap) {
							teamHas.abilityMap[abilityId][pokemon.evos ? 'push' : 'unshift'](pokemon.id);
						} else {
							teamHas.abilityMap[abilityId] = [pokemon.id];
						}
					}
				}
			}

			const problem = this.validateForme(set);
			if (problem.length) return problem;

			const species = this.dex.species.get(set.species);
			if (!species.exists || species.num < 1) return [`The Pok\u00e9mon "${set.species}" does not exist.`];
			if (species.isNonstandard || unreleased(species)) {
				return [`${species.name} is not obtainable in Generation ${this.dex.gen}.`];
			}

			const name = set.name;
			if (this.ruleTable.isBannedSpecies(species)) {
				return this.validateSet(set, teamHas);
			}

			const ability = this.dex.abilities.get(set.ability);
			if (!ability.exists || ability.isNonstandard) return [`${name} needs to have a valid ability.`];
			const pokemonWithAbility = teamHas.abilityMap[ability.id];
			if (!pokemonWithAbility) return [`${ability.name} is not available on a legal Pok\u00e9mon.`];

			(this.format as any).debug = true;

			if (!teamHas.abilitySources) teamHas.abilitySources = Object.create(null);
			const validSources: string[] = teamHas.abilitySources[this.dex.toID(set.species)] = []; // Evolution families

			let canonicalSource = ''; // Specific for the basic implementation of Donor Clause (see onValidateTeam).

			for (const donor of pokemonWithAbility) {
				const donorSpecies = this.dex.species.get(donor);
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.formats.get('gen8inheritance');
				const evoFamily = format.getEvoFamily!(donorSpecies.id);
				if (validSources.includes(evoFamily)) continue;

				set.species = donorSpecies.name;
				set.name = donorSpecies.baseSpecies;
				const problems = this.validateSet(set, teamHas) || [];
				if (!problems.length) {
					validSources.push(evoFamily);
					canonicalSource = donorSpecies.name;
				}
				// Specific for the basic implementation of Donor Clause (see onValidateTeam).
				if (validSources.length > 1) break;
			}
			(this.format as any).debug = false;

			set.name = name;
			set.species = species.name;
			if (!validSources.length) {
				if (pokemonWithAbility.length > 1) return [`${name}'s set is illegal.`];
				return [`${name} has an illegal set with an ability from ${this.dex.species.get(pokemonWithAbility[0]).name}.`];
			}

			// Protocol: Include the data of the donor species in the `ability` data slot.
			// Afterwards, we are going to reset the name to what the user intended.
			set.ability = `${set.ability}0${canonicalSource}`;
			return null;
		},
		onValidateTeam(team, f, teamHas) {
			if (this.ruleTable.has('2abilityclause')) {
				const abilityTable = new Map<string, number>();
				const base: {[k: string]: string} = {
					airlock: 'cloudnine',
					battlearmor: 'shellarmor',
					clearbody: 'whitesmoke',
					dazzling: 'queenlymajesty',
					emergencyexit: 'wimpout',
					filter: 'solidrock',
					gooey: 'tanglinghair',
					insomnia: 'vitalspirit',
					ironbarbs: 'roughskin',
					libero: 'protean',
					minus: 'plus',
					moxie: 'chillingneigh',
					powerofalchemy: 'receiver',
					propellertail: 'stalwart',
					teravolt: 'moldbreaker',
					turboblaze: 'moldbreaker',
				};
				for (const set of team) {
					let ability = this.toID(set.ability.split('0')[0]);
					if (!ability) continue;
					if (ability in base) ability = base[ability] as ID;
					if ((abilityTable.get(ability) || 0) >= 2) {
						return [
							`You are limited to two of each ability by 2 Ability Clause.`,
							`(You have more than two ${this.dex.abilities.get(ability).name} variants)`,
						];
					}
					abilityTable.set(ability, (abilityTable.get(ability) || 0) + 1);
				}
			}

			// Donor Clause
			const evoFamilyLists = [];
			for (const set of team) {
				const abilitySources = teamHas.abilitySources?.[this.dex.toID(set.species)];
				if (!abilitySources) continue;
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.formats.get('gen8inheritance');
				evoFamilyLists.push(abilitySources.map(format.getEvoFamily!));
			}

			// Checking actual full incompatibility would require expensive algebra.
			// Instead, we only check the trivial case of multiple Pokémon only legal for exactly one family. FIXME?
			const requiredFamilies = Object.create(null);
			for (const evoFamilies of evoFamilyLists) {
				if (evoFamilies.length !== 1) continue;
				const [familyId] = evoFamilies;
				if (!(familyId in requiredFamilies)) requiredFamilies[familyId] = 1;
				requiredFamilies[familyId]++;
				if (requiredFamilies[familyId] > 2) {
					return [
						`You are limited to up to two inheritances from each evolution family by the Donor Clause.`,
						`(You inherit more than twice from ${this.dex.species.get(familyId).name}).`,
					];
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.baseAbility.includes('0')) {
					const donor = pokemon.baseAbility.split('0')[1];
					pokemon.m.donor = this.toID(donor);
					pokemon.baseAbility = this.toID(pokemon.baseAbility.split('0')[0]);
					pokemon.ability = pokemon.baseAbility;
				}
			}
		},
		onSwitchIn(pokemon) {
			if (!pokemon.m.donor) return;
			const donorTemplate = this.dex.species.get(pokemon.m.donor);
			if (!donorTemplate.exists) return;
			// Place volatiles on the Pokémon to show the donor details.
			this.add('-start', pokemon, donorTemplate.name, '[silent]');
		},
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 8] Balanced Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656408/">Balanced Hackmons</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659817/">BH Resources</a>`,
		],

		mod: 'gen8',
		ruleset: ['-Nonexistent', 'OHKO Clause', 'Evasion Moves Clause', 'Forme Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Moves Clause', 'Endless Battle Clause'],
		banlist: [
			'Calyrex-Shadow', 'Cramorant-Gorging', 'Darmanitan-Galar-Zen', 'Eternatus-Eternamax', 'Shedinja', 'Zacian-Crowned',
			'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Intrepid Sword', 'Libero',
			'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout',
			'Water Bubble', 'Wonder Guard', 'Comatose + Sleep Talk', 'Rusted Sword', 'Belly Drum', 'Bolt Beak', 'Court Change',
			'Double Iron Bash', 'Octolock', 'Shell Smash',
		],
	},
	{
		name: "[Gen 8] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656414/">Almost Any Ability</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3682690/">AAA Resources</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', '!Obtainable Abilities', '2 Ability Clause', 'Dynamax Clause', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: [
			'Archeops', 'Blacephalon', 'Buzzwole', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dracovish', 'Dragapult', 'Dragonite', 'Eternatus', 'Gengar',
			'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kartana', 'Keldeo', 'Kommo-o', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White',
			'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Noivern',
			'Palkia', 'Pheromosa', 'Rayquaza', 'Regigigas', 'Reshiram', 'Shedinja', 'Solgaleo', 'Spectrier', 'Urshifu', 'Urshifu-Rapid-Strike',
			'Victini', 'Weavile', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Base', 'Zekrom', 'Zeraora', 'Zygarde-Base',
			'Arena Trap', 'Comatose', 'Contrary', 'Fluffy', 'Fur Coat', 'Gorilla Tactics', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter',
			'Innards Out', 'Intrepid Sword', 'Libero', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Poison Heal', 'Protean',
			'Pure Power', 'Shadow Tag', 'Simple', 'Stakeout', 'Speed Boost', 'Water Bubble', 'Wonder Guard', 'King\'s Rock', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Mix and Mega",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone and no limit. Boosts based on mega evolution from gen 7.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656469/">Mix and Mega</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659028/">M&amp;M Resources</a>`,
		],

		mod: 'mixandmega',
		ruleset: ['Standard', 'Overflow Stat Mod', 'Dynamax Clause'],
		banlist: [
			'Calyrex-Shadow', 'Eternatus', 'Kyogre', 'Zacian',
			'Beedrillite', 'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Mawilite', 'Medichamite', 'Pidgeotite',
			'Moody', 'Shadow Tag', 'Baton Pass', 'Electrify',
		],
		restricted: [
			'Calyrex-Ice', 'Dialga', 'Gengar', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyurem-Black', 'Kyurem-White', 'Lugia',
			'Lunala', 'Marshadow', 'Melmetal', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Pheromosa', 'Rayquaza', 'Regigigas', 'Reshiram', 'Urshifu', 'Urshifu-Rapid-Strike', 'Xerneas',
			'Yveltal', 'Zekrom', 'Zygarde-Complete',
		],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (!item.megaStone) continue;
				const natdex = this.ruleTable.has('standardnatdex');
				if (natdex && item.id !== 'ultranecroziumz') continue;
				const species = this.dex.species.get(set.species);
				if (species.isNonstandard && !this.ruleTable.has(`+${this.toID(species.isNonstandard)}`)) {
					return [`${species.baseSpecies} does not exist in gen 8.`];
				}
				if (natdex && species.name.startsWith('Necrozma-') && item.id === 'ultranecroziumz') {
					continue;
				}
				if (this.ruleTable.isRestrictedSpecies(species) || this.toID(set.ability) === 'powerconstruct') {
					return [`${species.name} is not allowed to hold ${item.name}.`];
				}
				if (itemTable.has(item.id)) {
					return [`You are limited to one of each mega stone.`, `(You have more than one ${item.name})`];
				}
				itemTable.add(item.id);
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-end', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 8] STABmons",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656429/">STABmons</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3695169/">STABmons Resources</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'STABmons Move Legality', 'Dynamax Clause', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: [
			'Aegislash', 'Blacephalon', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Dragapult', 'Dragonite', 'Eternatus',
			'Genesect', 'Garchomp', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus',
			'Landorus-Therian', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Pheromosa', 'Porygon-Z', 'Rayquaza', 'Reshiram', 'Silvally', 'Solgaleo', 'Spectrier', 'Tapu Bulu', 'Tapu Koko', 'Tapu Lele', 'Thundurus-Base',
			'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zapdos-Galar', 'Zekrom', 'Zygarde-Base',
			'Arena Trap', 'Magnet Pull', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Baton Pass',
		],
		restricted: [
			'Acupressure', 'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Clangorous Soul', 'Double Iron Bash', 'Electrify', 'Extreme Speed', 'Final Gambit',
			'Fishious Rend', 'Geomancy', 'Glacial Lance', 'Oblivion Wing', 'Precipice Blades', 'Shell Smash', 'Shift Gear', 'Thousand Arrows', 'Thunderous Kick',
			'V-create', 'Wicked Blow',
		],
	},
	{
		name: "[Gen 8] NFE",
		desc: `Only Pok&eacute;mon that can evolve are allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656332/">NFE Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672463/">NFE Resources</a>`,
		],

		mod: 'gen8',
		ruleset: ['Not Fully Evolved', 'Standard NatDex', 'Ban Unbalanced Moves', 'Dynamax Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Z-Move Clause'],
		banlist: [
			'Chansey', 'Doublade', 'Golbat', 'Haunter', 'Kadabra', 'Magmar', 'Magneton', 'Mr. Mime-Galar', 'Pawniard', 'Pikachu',
			'Porygon2', 'Rhydon', 'Scyther', 'Sneasel', 'Type: Null', 'Vulpix-Base', 'Arena Trap', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Godly Gift",
		desc: `Each Pok&eacute;mon receives one base stat from a God (AG/Uber Pok&eacute;mon) depending on its position in the team. If there is no Uber Pok&eacute;mon, it uses the Pok&eacute;mon in the first slot.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660461/">Godly Gift</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause', 'Sleep Moves Clause'],
		banlist: [
			'Blissey', 'Calyrex-Shadow', 'Chansey', 'Crawdaunt', 'Dragapult', 'Eternatus', 'Hawlucha', 'Marowak-Alola', 'Melmetal',
			'Pikachu', 'Toxapex', 'Xerneas', 'Zacian', 'Zacian-Crowned', 'Uber > 1', 'AG ++ Uber > 1', 'Arena Trap', 'Huge Power',
			'Moody', 'Pure Power', 'Shadow Tag', 'Swift Swim', 'Bright Powder', 'Focus Band', 'King\'s Rock', 'Lax Incense', 'Quick Claw',
			'Baton Pass',
		],
		onValidateTeam(team) {
			const gods = new Set<string>();
			for (const set of team) {
				let species = this.dex.species.get(set.species);
				if (typeof species.battleOnly === 'string') species = this.dex.species.get(species.battleOnly);
				if (set.item && this.dex.items.get(set.item).megaStone) {
					const item = this.dex.items.get(set.item);
					if (item.megaEvolves === species.baseSpecies) {
						species = this.dex.species.get(item.megaStone);
					}
				}
				if (this.ruleTable.has('standardnatdex')) {
					const format = this.dex.formats.getRuleTable(this.dex.formats.get('gen8nationaldex'));
					if (format.isBannedSpecies(species)) gods.add(species.name);
				} else {
					if (['ag', 'uber'].includes(this.toID(species.tier)) || this.toID(set.ability) === 'powerconstruct') {
						gods.add(species.name);
					}
				}
			}
			if (gods.size > 1) {
				return [`You have too many Gods.`, `(${Array.from(gods).join(', ')} are Gods.)`];
			}
		},
		onModifySpeciesPriority: 3,
		onModifySpecies(species, target, source) {
			if (source || !target?.side) return;
			const god = target.side.team.find(set => {
				let godSpecies = this.dex.species.get(set.species);
				const isNatDex = this.format.ruleTable?.has('standardnatdex');
				const validator = this.dex.formats.getRuleTable(
					this.dex.formats.get(`gen${isNatDex && this.gen < 8 ? 8 : this.gen}${isNatDex ? 'nationaldex' : 'ou'}`)
				);
				if (this.toID(set.ability) === 'powerconstruct') {
					return true;
				}
				if (set.item) {
					const item = this.dex.items.get(set.item);
					if (item.megaEvolves === set.species) godSpecies = this.dex.species.get(item.megaStone);
				}
				const isBanned = validator.isBannedSpecies(godSpecies);
				return isBanned;
			}) || target.side.team[0];
			const stat = Dex.stats.ids()[target.side.team.indexOf(target.set)];
			const newSpecies = this.dex.deepClone(species);
			let godSpecies = this.dex.species.get(god.species);
			if (typeof godSpecies.battleOnly === 'string') {
				godSpecies = this.dex.species.get(godSpecies.battleOnly);
			}
			newSpecies.bst -= newSpecies.baseStats[stat];
			newSpecies.baseStats[stat] = godSpecies.baseStats[stat];
			newSpecies.bst += newSpecies.baseStats[stat];
			return newSpecies;
		},
	},
	{
		name: "[Gen 8] Free-For-All",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3681641/">Free-For-All</a>`,
		],

		mod: 'gen8',
		gameType: 'freeforall',
		rated: false,
		tournamentShow: false,
		ruleset: ['Standard Doubles', 'Sleep Clause Mod', 'Dynamax Clause', '!Gravity Sleep Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dracovish', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre',
			'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza',
			'Reshiram', 'Solgaleo', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom',
			'Zygarde-Complete', 'Moody', 'Power Construct', 'Shadow Tag', 'Acupressure', 'Aromatic Mist', 'Baton Pass', 'Coaching', 'Court Change',
			'Decorate', 'Final Gambit', 'Flatter', 'Floral Healing', 'Flower Shield', 'Follow Me', 'Heal Pulse', 'Rage Powder', 'Swagger',
		],
	},
	{
		section: "BD/SP",
		column: 2,
	},
	{
		name: "[Gen 8 BDSP] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3693955/">BDSP Random Battle Set Discussion</a>`,
		],

		mod: 'gen8bdsp',
		team: 'random',
		ruleset: ['[Gen 8] Random Battle', '!PotD'],
	},
	{
		name: "[Gen 8 BDSP] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3693629/">BDSP OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3693721/">BDSP OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3696088/">BDSP OU Viability Rankings</a>`,
		],

		mod: 'gen8bdsp',
		ruleset: ['Standard'],
		banlist: [
			'Uber', 'Arena Trap', 'Drizzle', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak',
			'Bright Powder', 'King\'s Rock', 'Lax Incense', 'Razor Fang', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8 BDSP] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3694036/">BDSP Ubers Discussion &amp; Resources</a>`,
		],

		mod: 'gen8bdsp',
		ruleset: ['Standard'],
		banlist: ['AG', 'Baton Pass'],
	},
	{
		name: "[Gen 8 BDSP] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3694307/">BDSP UU</a>`,
		],

		mod: 'gen8bdsp',
		ruleset: ['[Gen 8 BDSP] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 8 BDSP] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3695563/">BDSP RU</a>`,
		],

		mod: 'gen8bdsp',
		ruleset: ['[Gen 8 BDSP] UU'],
		banlist: ['UU', 'RUBL', 'Drought'],
	},
	{
		name: "[Gen 8 BDSP] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3697080/">BDSP NU</a>`,
		],

		mod: 'gen8bdsp',
		ruleset: ['[Gen 8 BDSP] RU'],
		banlist: ['RU', 'NUBL', 'Damp Rock', 'Heat Rock'],
	},
	{
		name: "[Gen 8 BDSP] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3700009/">BDSP PU</a>`,
		],

		mod: 'gen8bdsp',
		ruleset: ['[Gen 8 BDSP] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 8 BDSP] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3696004/">BDSP LC</a>`,
		],

		mod: 'gen8bdsp',
		ruleset: ['Little Cup Rule', 'Standard'],
		banlist: ['Gligar', 'Meditite', 'Misdreavus', 'Munchlax', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma', 'Moody', 'Baton Pass', 'Sticky Web'],
	},
	{
		name: "[Gen 8 BDSP] Monotype",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3694267/">BDSP Monotype</a>`,
		],

		mod: 'gen8bdsp',
		ruleset: ['[Gen 8 BDSP] OU', 'Same Type Clause'],
	},
	{
		name: "[Gen 8 BDSP] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3694238/">BDSP CAP</a>`,
		],

		mod: 'gen8bdsp',
		searchShow: false,
		ruleset: ['[Gen 8 BDSP] OU', '+CAP'],
	},
	{
		name: "[Gen 8 BDSP] 3v3 Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3695092/">BDSP 3v3 Singles</a>`,
		],

		mod: 'gen8bdsp',
		searchShow: false,
		ruleset: ['Flat Rules', 'Min Source Gen = 8'],
	},
	{
		name: "[Gen 8 BDSP] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3693891/">BDSP Doubles OU</a>`,
		],

		mod: 'gen8bdsp',
		gameType: 'doubles',
		ruleset: ['Standard Doubles'],
		banlist: ['DUber', 'Dark Void'],
	},
	{
		name: "[Gen 8 BDSP] Battle Festival Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3694269/">Battle Festival Doubles</a>`,
		],

		mod: 'gen8bdsp',
		gameType: 'doubles',
		ruleset: ['Flat Rules', 'Min Source Gen = 8'],
	},
	{
		section: "Challengeable OMs",
		column: 2,
	},
	{
		name: "[Gen 8] Camomons",
		desc: `Pok&eacute;mon change type to match their first two moves.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656413/">Camomons</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard', 'Dynamax Clause', 'Camomons Mod'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Dragonite', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Hydreigon', 'Kartana', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Marshadow',
			'Mew', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Shedinja', 'Solgaleo',
			'Spectrier', 'Tornadus-Therian', 'Volcarona', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zeraora',
			'Zygarde-Base', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass', 'Calm Mind',
		],
	},
	{
		name: "[Gen 8] Cross Evolution",
		desc: `Give a Pok&eacute;mon a Pok&eacute;mon name of the next evolution stage as a nickname to inherit stat changes, typing, abilities, and up to 2 moves from the next stage Pok&eacute;mon.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657562/">Cross Evolution</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard', 'Overflow Stat Mod', 'Dynamax Clause', '2 Ability Clause'],
		banlist: ['Corsola-Galar', 'Sneasel', 'Type: Null', 'Arena Trap', 'Ice Scales', 'Moody', 'King\'s Rock', 'Baton Pass'],
		restricted: ['Chansey', 'Lunala', 'Shedinja', 'Solgaleo', 'Gorilla Tactics', 'Huge Power', 'Pure Power', 'Shadow Tag'],
		onValidateTeam(team) {
			const names = new Set<ID>();
			for (const set of team) {
				const name = set.name;
				if (names.has(this.dex.toID(name))) {
					return [
						`Your Pok\u00e9mon must have different nicknames.`,
						`(You have more than one Pok\u00e9mon named '${name}')`,
					];
				}
				names.add(this.dex.toID(name));
			}
			if (!names.size) {
				return [
					`${this.format.name} works using nicknames; your team has 0 nicknamed Pok\u00e9mon.`,
					`(If this was intentional, add a nickname to one Pok\u00e9mon that isn't the name of a Pok\u00e9mon species.)`,
				];
			}
		},
		checkCanLearn(move, species, lsetData, set) {
			// @ts-ignore
			if (!set.sp?.exists || !set.crossSpecies?.exists) {
				return this.checkCanLearn(move, species, lsetData, set);
			}
			// @ts-ignore
			const problem = this.checkCanLearn(move, set.sp);
			if (!problem) return null;
			// @ts-ignore
			if (!set.crossMovesLeft) return problem;
			// @ts-ignore
			if (this.checkCanLearn(move, set.crossSpecies)) return problem;
			// @ts-ignore
			set.crossMovesLeft--;
			return null;
		},
		validateSet(set, teamHas) {
			const crossSpecies = this.dex.species.get(set.name);
			let problems = this.dex.formats.get('Pokemon').onChangeSet?.call(this, set, this.format) || null;
			if (Array.isArray(problems) && problems.length) return problems;
			const crossNonstandard = (!this.ruleTable.has('standardnatdex') && crossSpecies.isNonstandard === 'Past') ||
				crossSpecies.isNonstandard === 'Future';
			const crossIsCap = !this.ruleTable.has('+pokemontag:cap') && crossSpecies.isNonstandard === 'CAP';
			if (!crossSpecies.exists || crossNonstandard || crossIsCap) return this.validateSet(set, teamHas);
			const species = this.dex.species.get(set.species);
			const check = this.checkSpecies(set, species, species, {});
			if (check) return [check];
			const nonstandard = !this.ruleTable.has('standardnatdex') && species.isNonstandard === 'Past';
			const isCap = !this.ruleTable.has('+pokemontag:cap') && species.isNonstandard === 'CAP';
			if (!species.exists || nonstandard || isCap || species === crossSpecies) return this.validateSet(set, teamHas);
			if (!species.nfe) return [`${species.name} cannot cross evolve because it doesn't evolve.`];
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable");
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it isn't an evolution.`];
			}
			if (this.ruleTable.isRestrictedSpecies(crossSpecies)) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it is banned.`];
			}
			const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) {
				return [
					`${species.name} cannot cross evolve into ${crossSpecies.name} because they are not consecutive evolution stages.`,
				];
			}
			const item = this.dex.items.get(set.item);
			if (item.itemUser?.length) {
				if (!item.itemUser.includes(crossSpecies.name) || crossSpecies.name !== species.name) {
					return [`${species.name} cannot use ${item.name} because it is cross evolved into ${crossSpecies.name}.`];
				}
			}
			const ability = this.dex.abilities.get(set.ability);
			if (!this.ruleTable.isRestricted(`ability:${ability.id}`) || Object.values(species.abilities).includes(ability.name)) {
				set.species = crossSpecies.name;
			}

			// @ts-ignore
			set.sp = species;
			// @ts-ignore
			set.crossSpecies = crossSpecies;
			// @ts-ignore
			set.crossMovesLeft = 2;
			problems = this.validateSet(set, teamHas);
			set.name = crossSpecies.name;
			set.species = species.name;
			return problems;
		},
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // chat
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			if (target.set.name === target.set.species) return;
			const crossSpecies = this.dex.species.get(target.set.name);
			if (!crossSpecies.exists) return;
			if (species.battleOnly || !species.nfe) return;
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable");
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) return;
			const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) return;

			const mixedSpecies = this.dex.deepClone(species);
			mixedSpecies.weightkg =
				Math.max(0.1, +(species.weightkg + crossSpecies.weightkg - crossPrevoSpecies.weightkg)).toFixed(1);
			mixedSpecies.nfe = false;
			mixedSpecies.evos = [];
			mixedSpecies.eggGroups = crossSpecies.eggGroups;
			mixedSpecies.abilities = crossSpecies.abilities;
			mixedSpecies.bst = 0;
			let i: StatID;
			for (i in species.baseStats) {
				const statChange = crossSpecies.baseStats[i] - crossPrevoSpecies.baseStats[i];
				mixedSpecies.baseStats[i] = this.clampIntRange(species.baseStats[i] + statChange, 1, 255);
				mixedSpecies.bst += mixedSpecies.baseStats[i];
			}
			if (crossSpecies.types[0] !== crossPrevoSpecies.types[0]) mixedSpecies.types[0] = crossSpecies.types[0];
			if (crossSpecies.types[1] !== crossPrevoSpecies.types[1]) {
				mixedSpecies.types[1] = crossSpecies.types[1] || crossSpecies.types[0];
			}
			if (mixedSpecies.types[0] === mixedSpecies.types[1]) mixedSpecies.types = [mixedSpecies.types[0]];

			return mixedSpecies;
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.baseSpecies = pokemon.species;
			}
		},
	},
	{
		name: "[Gen 8] Linked",
		desc: `The first two moves in a Pok&eacute;mon's moveset are used simultaneously.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660421/">Linked</a>`,
		],

		mod: 'linked',
		searchShow: false,
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Cloyster', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Eternatus', 'Genesect', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala',
			'Magearna', 'Marshadow', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram',
			'Solgaleo', 'Spectrier', 'Urshifu-Base', 'Volcarona', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned',
			'Zekrom', 'Zygarde-Base', 'Zygarde-Complete', 'Arena Trap', 'Chlorophyll', 'Moody', 'Power Construct', 'Sand Rush', 'Sand Veil', 'Shadow Tag',
			'Slush Rush', 'Snow Cloak', 'Speed Boost', 'Surge Surfer', 'Swift Swim', 'Unburden', 'Bright Powder', 'King\'s Rock', 'Lax Incense', 'Baton Pass',
		],
		restricted: [
			'Baneful Bunker', 'Bounce', 'Protect', 'Detect', 'Dig', 'Dive', 'Fly', 'King\'s Shield', 'Nature\'s Madness', 'Night Shade',
			'Obstruct', 'Phantom Force', 'Seismic Toss', 'Shadow Force', 'Sky Drop', 'Spiky Shield', 'Super Fang', 'Trick Room',
		],
		onValidateSet(set) {
			const problems = [];
			for (const [i, moveid] of set.moves.entries()) {
				const move = this.dex.moves.get(moveid);
				if ([0, 1].includes(i) && this.ruleTable.isRestricted(`move:${move.id}`)) {
					problems.push(`${set.name || set.species}'s move ${move.name} cannot be linked.`);
				}
			}
			return problems;
		},
	},
	{
		name: "[Gen 8] Multibility",
		desc: `Run a second ability at the cost of giving up a Pok&eacute;mon's item slot.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3688892/">Multibility</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard', 'Dynamax Clause', '2 Ability Clause', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Dragonite', 'Eternatus',
			'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre', 'Kyurem-Black', 'Kyurem-White',
			'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Shedinja', 'Solgaleo', 'Spectrier', 'Urshifu-Base', 'Xerneas',
			'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Arena Trap',
			'Chlorophyll', 'Magnet Pull', 'Moody', 'Power Construct', 'Sand Rush', 'Shadow Tag', 'Slush Rush', 'Swift Swim',
			'Stench', 'Trace', 'King\'s Rock', 'Baton Pass',
		],
		restricted: [
			'Comatose', 'Contrary', 'Fluffy', 'Fur Coat', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out',
			'Intrepid Sword', 'Libero', 'Neutralizing Gas', 'Parental Bond', 'Protean', 'Pure Power', 'Simple', 'Speed Boost',
			'Stakeout', 'Tinted Lens', 'Unaware', 'Water Bubble', 'Wonder Guard',
			'Emergency Exit + Regenerator', 'Wimp Out + Regenerator',
		],
		validateSet(set, teamHas) {
			const ability = this.dex.abilities.get(set.ability);
			const item = this.dex.abilities.get(set.item);
			if (!item.exists) return this.validateSet(set, teamHas);
			const problems = [];
			if (item.isNonstandard && !this.ruleTable.has(`+ability:${item.id}`)) {
				problems.push(`${item.name} is banned.`);
			}
			if (ability.id === item.id) {
				problems.push(`${set.species} has ${ability.name} as an ability and as an item.`);
			}
			if (this.ruleTable.isRestricted(`ability:${item.id}`) || this.ruleTable.isBanned(`ability:${item.id}`)) {
				problems.push(`${set.species}'s second ability (${item.name}) can only be used as an ability.`);
			}
			if ((ability.id === 'regenerator' && ['emergencyexit', 'wimpout'].includes(item.id)) ||
				(item.id === 'regenerator' && ['emergencyexit', 'wimpout'].includes(ability.id))) {
				problems.push(`${ability.name} and ${item.name} are banned together.`);
			}
			const itemStr = set.item;
			set.item = '';
			const problem = this.validateSet(set, teamHas);
			if (problem?.length) problems.push(...problem);
			set.item = itemStr;
			return problems;
		},
		onValidateTeam(team) {
			if (!this.ruleTable.has('2abilityclause')) return;
			const abilityTable = new Map<string, number>();
			const base: {[k: string]: string} = {
				airlock: 'cloudnine',
				battlearmor: 'shellarmor',
				clearbody: 'whitesmoke',
				dazzling: 'queenlymajesty',
				emergencyexit: 'wimpout',
				filter: 'solidrock',
				gooey: 'tanglinghair',
				insomnia: 'vitalspirit',
				ironbarbs: 'roughskin',
				libero: 'protean',
				minus: 'plus',
				moxie: 'chillingneigh',
				powerofalchemy: 'receiver',
				propellertail: 'stalwart',
				teravolt: 'moldbreaker',
				turboblaze: 'moldbreaker',
			};
			const abilities: [string, string][] = [];
			for (const set of team) {
				abilities.push([set.ability, set.item].map((abil) => {
					const id = this.toID(abil);
					return base[id] || id;
				}) as [string, string]);
			}
			for (const [abilityid, itemid] of abilities) {
				const ability = this.dex.abilities.get(abilityid);
				const item = this.dex.abilities.get(itemid);
				if (ability.exists) abilityTable.set(ability.id, (abilityTable.get(ability.id) || 0) + 1);
				if (item.exists) abilityTable.set(item.id, (abilityTable.get(item.id) || 0) + 1);
			}
			for (const [abilityid, size] of abilityTable) {
				if (size > 2) {
					return [
						`You are limited to two of each ability by 2 Ability Clause.`,
						`(You have more than two ${this.dex.abilities.get(abilityid).name} variants)`,
					];
				}
			}
		},
		onSwitchOut(pokemon) {
			const item = this.dex.abilities.get(pokemon.item);
			if (item.exists) {
				this.singleEvent('End', item, pokemon.itemState, pokemon);
			}
		},
		onFaint(pokemon) {
			const item = this.dex.abilities.get(pokemon.item);
			if (item.exists) {
				this.singleEvent('End', item, pokemon.itemState, pokemon);
			}
		},
		field: {
			suppressingWeather() {
				for (const pokemon of this.battle.getAllActive()) {
					const item = this.battle.dex.abilities.get(pokemon.item);
					if (pokemon && !pokemon.ignoringAbility() &&
						(pokemon.getAbility().suppressWeather || (item.exists && item.suppressWeather))) {
						return true;
					}
				}
				return false;
			},
		},
		pokemon: {
			getItem() {
				const ability = this.battle.dex.abilities.get(this.item);
				if (!ability.exists) return Object.getPrototypeOf(this).getItem.call(this);
				return {...ability, ignoreKlutz: true, onTakeItem: false};
			},
			hasItem(item) {
				const ownItem = this.item;
				if (this.battle.dex.abilities.get(ownItem).exists) return false;
				if (this.ignoringItem()) return false;
				if (!Array.isArray(item)) return ownItem === this.battle.toID(item);
				return item.map(this.battle.toID).includes(ownItem);
			},
			hasAbility(ability) {
				if (this.ignoringAbility()) return false;
				if (Array.isArray(ability)) return ability.some(abil => this.hasAbility(abil));
				const abilityid = this.battle.toID(ability);
				const item = this.battle.dex.abilities.get(this.item);
				return this.ability === abilityid || (item.exists && item.id === abilityid);
			},
			ignoringAbility() {
				// Check if any active pokemon have the ability Neutralizing Gas
				let neutralizinggas = false;
				for (const pokemon of this.battle.getAllActive()) {
					// can't use hasAbility because it would lead to infinite recursion
					if ((pokemon.ability === ('neutralizinggas' as ID) || pokemon.item === ('neutralizinggas' as ID)) &&
						!pokemon.volatiles['gastroacid'] && !pokemon.abilityState.ending) {
						neutralizinggas = true;
						break;
					}
				}
				return !!(
					(this.battle.gen >= 5 && !this.isActive) ||
					((this.volatiles['gastroacid'] || (neutralizinggas && this.ability !== ('neutralizinggas' as ID) &&
						this.item !== ('neutralizinggas' as ID))) && !this.getAbility().isPermanent));
			},
			ignoringItem() {
				let nGas = false;
				for (const pokemon of this.battle.getAllActive()) {
					// can't use hasAbility because it would lead to infinite recursion
					if (((pokemon.ability === ('neutralizinggas' as ID) && !pokemon.abilityState.ending) ||
						(pokemon.item === ('neutralizinggas' as ID) && !pokemon.itemState.ending)) &&
						!pokemon.volatiles['gastroacid'] && !pokemon.abilityState.ending) {
						nGas = true;
						break;
					}
				}
				const item = this.battle.dex.abilities.get(this.item);
				return !!((this.battle.gen >= 5 && !this.isActive) ||
					(this.hasAbility('klutz') && !this.getItem().ignoreKlutz) ||
					this.volatiles['embargo'] || this.battle.field.pseudoWeather['magicroom'] ||
					(item.exists && item.id !== 'neutralizinggas' && (nGas || this.volatiles['gastroacid'])));
			},
			takeItem(source) {
				if (!this.isActive) return false;
				if (!this.item) return false;
				if (this.battle.dex.abilities.get(this.item).exists) return false;
				if (!source) source = this;
				if (this.battle.gen === 4) {
					if (this.battle.toID(this.ability) === 'multitype') return false;
					if (source && this.battle.toID(source.ability) === 'multitype') return false;
				}
				const item = this.getItem();
				if (this.battle.runEvent('TakeItem', this, source, null, item)) {
					this.item = '';
					this.itemState = {id: '', target: this};
					this.pendingStaleness = undefined;
					return item;
				}
				return false;
			},
		},
	},
	{
		name: "[Gen 8] Nature Swap",
		desc: `Pok&eacute;mon have their base stats swapped depending on their nature.`,
		threads: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3673622/">Nature Swap</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard NatDex', 'Ban Unbalanced Moves', 'Dynamax Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod', 'Z-Move Clause'],
		banlist: [
			'Blissey', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chansey', 'Cloyster', 'Dialga', 'Eternatus', 'Genesect', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala',
			'Marshadow', 'Melmetal', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram',
			'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
		battle: {
			spreadModify(baseStats, set) {
				const modStats: SparseStatsTable = {atk: 10, def: 10, spa: 10, spd: 10, spe: 10};
				const tr = this.trunc;
				const nature = this.dex.natures.get(set.nature);
				let statName: keyof StatsTable;
				for (statName in modStats) {
					const stat = baseStats[statName];
					let usedStat = statName;
					if (nature.plus) {
						if (statName === nature.minus) {
							usedStat = nature.plus;
						} else if (statName === nature.plus) {
							usedStat = nature.minus!;
						}
					}
					modStats[statName] = tr(tr(2 * stat + set.ivs[usedStat] + tr(set.evs[usedStat] / 4)) * set.level / 100 + 5);
				}
				if ('hp' in baseStats) {
					const stat = baseStats['hp'];
					modStats['hp'] = tr(tr(2 * stat + set.ivs['hp'] + tr(set.evs['hp'] / 4) + 100) * set.level / 100 + 10);
				}
				return this.natureModify(modStats as StatsTable, set);
			},
			natureModify(stats, set) {
				const tr = this.trunc;
				const nature = this.dex.natures.get(set.nature);
				let s: StatIDExceptHP;
				if (nature.plus) {
					s = nature.minus!;
					const stat = this.ruleTable.has('overflowstatmod') ? Math.min(stats[s], 595) : stats[s];
					stats[s] = this.ruleTable.has('overflowstatmod') ? Math.min(stats[nature.plus], 728) : stats[nature.plus];
					stats[nature.plus] = tr(tr(stat * 110, 16) / 100);
				}
				return stats;
			},
		},
	},
	{
		name: "[Gen 8] Pokebilities",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3679692/">Pok&eacute;bilities</a>`,
		],
		mod: 'pokebilities',
		searchShow: false,
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Conkeldurr', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Dracozolt',
			'Eternatus', 'Excadrill', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black',
			'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Porygon-Z', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Spectrier', 'Urshifu-Base',
			'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Base', 'Zekrom', 'Zygarde-Base', 'Power Construct',
			'Baton Pass', 'King\'s Rock',
			// Moody users
			'Glalie', 'Octillery', 'Remoraid', 'Snorunt',
			// Shadow Tag/Arena Trap
			'Diglett-Base', 'Dugtrio-Base', 'Gothita', 'Gothitelle', 'Gothorita', 'Trapinch', 'Wobbuffet', 'Wynaut',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const unSeenAbilities = Object.keys(species.abilities)
				.filter(key => key !== 'S' && (key !== 'H' || !species.unreleasedHidden))
				.map(key => species.abilities[key as "0" | "1" | "H" | "S"])
				.filter(ability => ability !== set.ability);
			if (unSeenAbilities.length && this.toID(set.ability) !== this.toID(species.abilities['S'])) {
				for (const abilityName of unSeenAbilities) {
					const banReason = this.ruleTable.check('ability:' + this.toID(abilityName));
					if (banReason) {
						return [`${set.name}'s ability ${abilityName} is ${banReason}.`];
					}
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.ability === this.toID(pokemon.species.abilities['S'])) {
					continue;
				}
				pokemon.m.innates = Object.keys(pokemon.species.abilities)
					.filter(key => key !== 'S' && (key !== 'H' || !pokemon.species.unreleasedHidden))
					.map(key => this.toID(pokemon.species.abilities[key as "0" | "1" | "H" | "S"]))
					.filter(ability => ability !== pokemon.ability);
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					pokemon.addVolatile("ability:" + innate, pokemon);
				}
			}
		},
		onSwitchOut(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
		},
		onFaint(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				const innateEffect = this.dex.conditions.get(innate) as Effect;
				this.singleEvent('End', innateEffect, null, pokemon);
			}
		},
		onAfterMega(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
			pokemon.m.innates = undefined;
		},
	},
	{
		name: "[Gen 8] Pure Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656851/">Pure Hackmons</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 8] Shared Power",
		desc: `Once a Pok&eacute;mon switches in, its ability is shared with the rest of the team.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660877/">Shared Power</a>`,
		],

		mod: 'sharedpower',
		searchShow: false,
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Eternatus', 'Genesect', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna',
			'Marshadow', 'Melmetal', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Shedinja', 'Solgaleo', 'Urshifu-Base', 'Urshifu-Rapid-Strike',
			'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom',
			'Arena Trap', 'Contrary', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Electric Surge ++ Surge Surfer',
			'Fur Coat', 'Guts', 'Harvest', 'Huge Power', 'Imposter', 'Innards Out', 'Libero', 'Magic Bounce', 'Magic Guard',
			'Magnet Pull', 'Mold Breaker', 'Moody', 'Neutralizing Gas', 'Power Construct', 'Queenly Majesty', 'Quick Draw',
			'Regenerator', 'Sand Rush', 'Sand Veil', 'Shadow Tag', 'Simple', 'Snow Cloak', 'Snow Warning ++ Slush Rush',
			'Speed Boost', 'Stakeout', 'Steelworker ++ Steely Spirit', 'Stench', 'Tinted Lens', 'Triage', 'Unaware',
			'Unburden', 'Water Bubble', 'King\'s Rock', 'Baton Pass',
		],
		getSharedPower(pokemon) {
			const sharedPower = new Set<string>();
			for (const ally of pokemon.side.pokemon) {
				if (ally.previouslySwitchedIn > 0) {
					if (pokemon.battle.dex.currentMod !== 'sharedpower' && ['trace', 'mirrorarmor'].includes(ally.baseAbility)) {
						sharedPower.add('noability');
						continue;
					}
					sharedPower.add(ally.baseAbility);
				}
			}
			sharedPower.delete(pokemon.baseAbility);
			return sharedPower;
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen8sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
				if (!pokemon.m.abils) pokemon.m.abils = [];
				if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen8sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				if (ability === 'noability') {
					this.hint(`Mirror Armor and Trace break in Shared Power formats that don't use Shared Power as a base, so they get removed from non-base users.`);
				}
				const effect = 'ability:' + ability;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
	},
	{
		name: "[Gen 8] Trademarked",
		desc: `Sacrifice your Pok&eacute;mon's ability for a status move that activates on switch-in.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656980/">Trademarked</a>`,
		],

		mod: 'gen8',
		// While bugs are being fixed
		searchShow: false,
		challengeShow: false,
		tournamentShow: false,
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Kyurem-Black', 'Kyurem-White', 'Giratina',
			'Giratina-Origin', 'Genesect', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre', 'Lugia', 'Lunala', 'Magearna', 'Marowak-Alola', 'Marshadow', 'Melmetal',
			'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Spectrier',
			'Urshifu-Base', 'Victini', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Arena Trap', 'Moody', 'Neutralizing Gas', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
		restricted: [
			'Baneful Bunker', 'Block', 'Copycat', 'Corrosive Gas', 'Detect', 'Destiny Bond', 'Disable', 'Encore', 'Fairy Lock', 'Hypnosis', 'Ingrain',
			'Instruct', 'Lovely Kiss', 'King\'s Shield', 'Mat Block', 'Mean Look', 'Memento', 'move:Metronome', 'Obstruct', 'Octolock', 'Nature Power',
			'Parting Shot', 'Psycho Shift', 'Protect', 'Roar', 'Sing', 'Skill Swap', 'Sleep Powder', 'Sleep Talk', 'Spiky Shield', 'Spore', 'Substitute',
			'Switcheroo', 'Teleport', 'Trick', 'Whirlwind', 'Wish', 'Yawn',
		],
		onValidateTeam(team, format, teamHas) {
			const problems = [];
			for (const trademark in teamHas.trademarks) {
				if (teamHas.trademarks[trademark] > 1) {
					problems.push(`You are limited to 1 of each Trademark.`, `(You have ${teamHas.trademarks[trademark]} Pok\u00e9mon with ${trademark} as a Trademark.)`);
				}
			}
			return problems;
		},
		validateSet(set, teamHas) {
			const dex = this.dex;
			const ability = dex.moves.get(set.ability);
			if (!ability.exists) { // Not even a real move
				return this.validateSet(set, teamHas);
			}
			// Absolute trademark bans
			if (ability.category !== 'Status') {
				return [`${ability.name} is not a status move, and cannot be used as a trademark.`];
			}
			if (ability.forceSwitch || ability.selfSwitch) {
				return [
					`Force-switching and self-switching moves are banned from being used as trademarks.`,
					`(${ability.name} is a ${ability.forceSwitch ? 'force' : 'self'}-switching move.)`,
				];
			}
			const irrevokablyRestricted = [
				'Assist', 'Copycat', 'Metronome', 'Mirror Move', 'Sleep Talk', // Could call another unsafe trademark
				'Recycle', 'Trace', // Causes endless turns
				'Skill Swap', // Self-propagates indefinitely
			];
			for (const m of set.moves) {
				const move = dex.moves.get(m);
				if (irrevokablyRestricted.includes(move.name)) {
					return [`${move.name} is banned from Trademark, irrespective of custom rules, because it can cause endless turns.`];
				}
			}
			if (irrevokablyRestricted.includes(ability.name)) {
				return [`${ability.name} cannot safely function as a trademark.`];
			}
			// Contingent trademark bans
			if (this.ruleTable.isRestricted(`move:${ability.id}`)) {
				return [`${ability.name} is restricted from being used as a trademark.`];
			}
			if (set.moves.map(this.toID).includes(ability.id)) {
				return [`${set.name} may not use ${ability.name} as both a trademark and one of its moves simultaneously.`];
			}
			const customRules = this.format.customRules || [];
			if (!customRules.includes('!obtainableabilities')) customRules.push('!obtainableabilities');

			const TeamValidator: typeof import('../sim/team-validator').TeamValidator =
				require('../sim/team-validator').TeamValidator;

			const validator = new TeamValidator(dex.formats.get(`${this.format.id}@@@${customRules.join(',')}`));
			const moves = set.moves;
			set.moves = [ability.id];
			set.ability = dex.species.get(set.species).abilities['0'];
			let problems = validator.validateSet(set, {}) || [];
			if (problems.length) return problems;
			set.moves = moves;
			set.ability = dex.species.get(set.species).abilities['0'];
			problems = problems.concat(validator.validateSet(set, teamHas) || []);
			set.ability = ability.id;
			if (!teamHas.trademarks) teamHas.trademarks = {};
			teamHas.trademarks[ability.name] = (teamHas.trademarks[ability.name] || 0) + 1;
			return problems.length ? problems : null;
		},
		pokemon: {
			getAbility() {
				const move = this.battle.dex.moves.get(this.battle.toID(this.ability));
				if (!move.exists) return Object.getPrototypeOf(this).getAbility.call(this);
				return {
					id: move.id,
					name: move.name,
					onStart(this: Battle, pokemon: Pokemon) {
						this.add('-activate', pokemon, 'ability: ' + move.name);
						this.actions.useMove(move, pokemon);
					},
					toString() {
						return "";
					},
				};
			},
		},
	},
	{
		name: "[Gen 8] The Loser's Game",
		desc: `The first player to lose all of their Pok&eacute;mon wins.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657270/">The Loser's Game</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard', '!OHKO Clause', 'Picked Team Size = 6', 'Adjust Level = 100'],
		banlist: [
			'Sandshrew-Alola', 'Shedinja', 'Infiltrator', 'Magic Guard', 'Choice Scarf',
			'Explosion', 'Final Gambit', 'Healing Wish', 'Lunar Dance', 'Magic Room', 'Memento', 'Misty Explosion', 'Self-Destruct',
		],
		onValidateTeam(team) {
			const familyTable = new Set<ID>();
			for (const set of team) {
				let species = this.dex.species.get(set.species);
				while (species.prevo) {
					species = this.dex.species.get(species.prevo);
				}
				if (familyTable.has(species.id)) {
					return [
						`You are limited to one Pok&eacute;mon from each family by the Family Clause.`,
						`(You have more than one evolution of ${species.name}.)`,
					];
				}
				familyTable.add(species.id);
			}
		},
		battle: {
			tiebreak() {
				if (this.ended) return false;

				this.inputLog.push(`>tiebreak`);
				this.add('message', "Time's up! Going to tiebreaker...");
				const notFainted = this.sides.map(side => (
					side.pokemon.filter(pokemon => !pokemon.fainted).length
				));
				this.add('-message', this.sides.map((side, i) => (
					`${side.name}: ${notFainted[i]} Pokemon left`
				)).join('; '));
				const maxNotFainted = Math.max(...notFainted);
				let tiedSides = this.sides.filter((side, i) => notFainted[i] === maxNotFainted);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}

				const hpPercentage = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp / pokemon.maxhp).reduce((a, b) => a + b) * 100 / 6
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpPercentage[i])}% total HP left`
				)).join('; '));
				const maxPercentage = Math.max(...hpPercentage);
				tiedSides = tiedSides.filter((side, i) => hpPercentage[i] === maxPercentage);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}

				const hpTotal = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp).reduce((a, b) => a + b)
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpTotal[i])} total HP left`
				)).join('; '));
				const maxTotal = Math.max(...hpTotal);
				tiedSides = tiedSides.filter((side, i) => hpTotal[i] === maxTotal);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}
				return this.tie();
			},
			faintMessages(lastFirst) {
				if (this.ended) return;
				const length = this.faintQueue.length;
				if (!length) return false;
				if (lastFirst) {
					this.faintQueue.unshift(this.faintQueue[this.faintQueue.length - 1]);
					this.faintQueue.pop();
				}
				let faintData;
				while (this.faintQueue.length) {
					faintData = this.faintQueue.shift()!;
					const pokemon: Pokemon = faintData.target;
					if (!pokemon.fainted &&
						this.runEvent('BeforeFaint', pokemon, faintData.source, faintData.effect)) {
						this.add('faint', pokemon);
						pokemon.side.pokemonLeft--;
						this.runEvent('Faint', pokemon, faintData.source, faintData.effect);
						this.singleEvent('End', pokemon.getAbility(), pokemon.abilityState, pokemon);
						pokemon.clearVolatile(false);
						pokemon.fainted = true;
						pokemon.isActive = false;
						pokemon.isStarted = false;
						pokemon.side.faintedThisTurn = pokemon;
					}
				}

				if (this.gen <= 1) {
					// in gen 1, fainting skips the rest of the turn
					// residuals don't exist in gen 1
					this.queue.clear();
				} else if (this.gen <= 3 && this.gameType === 'singles') {
					// in gen 3 or earlier, fainting in singles skips to residuals
					for (const pokemon of this.getAllActive()) {
						if (this.gen <= 2) {
							// in gen 2, fainting skips moves only
							this.queue.cancelMove(pokemon);
						} else {
							// in gen 3, fainting skips all moves and switches
							this.queue.cancelAction(pokemon);
						}
					}
				}

				if (!this.p1.pokemonLeft && !this.p2.pokemonLeft) {
					this.win(faintData ? faintData.target.side.foe : null);
					return true;
				}
				if (!this.p1.pokemonLeft) {
					this.win(this.p1);
					return true;
				}
				if (!this.p2.pokemonLeft) {
					this.win(this.p2);
					return true;
				}
				if (faintData) {
					this.runEvent('AfterFaint', faintData.target, faintData.source, faintData.effect, length);
				}
				return false;
			},
		},
	},

	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Metas",
		column: 2,
	},
	{
		name: "[Gen 8] Monotype Random Battle",

		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Random Battle (No Dmax)",

		mod: 'gen8',
		team: 'random',
		searchShow: false,
		ruleset: ['[Gen 8] Random Battle', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] Random Battle Mayhem",
		desc: `[Gen 8] Random Battle (No Dmax) with Team Preview and elements of Camomons, Inverse, Scalemons, and Shared Power.`,

		mod: 'sharedpower',
		team: 'random',
		ruleset: ['[Gen 8] Random Battle', 'Team Preview', 'Dynamax Clause', 'Camomons Mod', 'Inverse Mod', 'Scalemons Mod'],
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen8sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
				if (!pokemon.m.abils) pokemon.m.abils = [];
				if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen8sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				if (ability === 'noability') {
					this.hint(`Mirror Armor and Trace break in Shared Power formats that don't use Shared Power as a base, so they get removed from non-base users.`);
				}
				const effect = 'ability:' + ability;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
	},
	{
		name: "[Gen 8] BSS Factory",
		desc: `Randomized 3v3 Singles featuring Pok&eacute;mon and movesets popular in Battle Stadium Singles.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3675374/">Information and Suggestions Thread</a>`,
		],

		team: 'randomBSSFactory',
		ruleset: ['Flat Rules'],
	},
	{
		name: "[Gen 8] Super Staff Bros 4",
		desc: "The fourth iteration of Super Staff Bros is here! Battle with a random team of pokemon created by the sim staff.",
		threads: [
			`&bullet; <a href="https://www.smogon.com/articles/super-staff-bros-4">Introduction &amp; Roster</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/super-staff-bros-4-discussion-thread.3675237/">Discussion Thread</a>`,
		],

		mod: 'ssb',
		team: 'randomStaffBros',
		ruleset: ['Dynamax Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		onBegin() {
			if (!this.ruleTable.has('dynamaxclause')) {
				// Old joke format we're bringing back
				for (const side of this.sides) {
					side.dynamaxUsed = true;
				}
				this.add('message', 'Delphox only');
				this.add('message', 'No items');
				this.add('message', 'Final Destination');
				return;
			}
			// TODO look into making an event to put this right after turn|1
			// https://discordapp.com/channels/630837856075513856/630845310033330206/716126469528485909
			// Requires client change
			this.add(`raw|<div class='broadcast-green'><b>Wondering what all these custom moves, abilities, and items do?<br />Check out the <a href="https://www.smogon.com/articles/super-staff-bros-4" target="_blank">Super Staff Bros 4 Guide</a> or use /ssb to find out!</b></div>`);

			this.add('message', [
				'THE BATTLE FOR SURVIVAL BEGINS!', 'WHO WILL SURVIVE?', 'GET READY TO KEEP UP!', 'GET READY!', 'DARE TO BELIEVE YOU CAN SURVIVE!', 'THERE CAN BE ONLY ONE WINNER!', 'GET READY FOR THE FIGHT OF YOUR LIFE!', 'WHO WILL PREVAIL?', 'ONLY ONE TEAM WILL BE LEFT STANDING!', 'BATTLE WITHOUT LIMITS!',
			][this.random(10)]);
			this.add('message', 'FIGHT!');
		},
		onSwitchInPriority: 100,
		onSwitchIn(pokemon) {
			let name: string = this.toID(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
			if (this.dex.species.get(name).exists || this.dex.moves.get(name).exists || this.dex.abilities.get(name).exists) {
				// Certain pokemon have volatiles named after their id
				// To prevent overwriting those, and to prevent accidentaly leaking
				// that a pokemon is on a team through the onStart even triggering
				// at the start of a match, users with pokemon names will need their
				// statuses to end in "user".
				name = name + 'user';
			}
			// Add the mon's status effect to it as a volatile.
			const status = this.dex.conditions.get(name);
			if (status?.exists) {
				pokemon.addVolatile(name, pokemon);
			}
			if (pokemon.m.hasBounty) this.add('-start', pokemon, 'bounty', '[silent]');
			const details = pokemon.species.name + (pokemon.level === 100 ? '' : ', L' + pokemon.level) +
				(pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
			if (pokemon.m.nowShiny) this.add('replace', pokemon, details);
		},
		onFaint(target, source, effect) {
			if (effect?.effectType !== 'Move') return;
			if (!target.m.hasBounty) return;
			if (source) {
				this.add('-message', `${source.name} received the bounty!`);
				this.boost({atk: 1, def: 1, spa: 1, spd: 1, spe: 1}, source, target, effect);
			}
		},
	},
	{
		name: "[Gen 8] Challenge Cup",

		mod: 'gen8',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] Challenge Cup 1v1",

		mod: 'gen8',
		team: 'randomCC',
		ruleset: ['[Gen 8] Challenge Cup', 'Team Preview', 'Dynamax Clause', 'Picked Team Size = 1'],
	},
	{
		name: "[Gen 8] Challenge Cup 2v2",

		mod: 'gen8',
		team: 'randomCC',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 8] Challenge Cup 1v1', '!! Picked Team Size = 2'],
	},
	{
		name: "[Gen 8] Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`,

		mod: 'gen8',
		team: 'randomHC',
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Nonexistent'],
	},
	{
		name: "[Gen 8] Doubles Hackmons Cup",

		mod: 'gen8',
		gameType: 'doubles',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Nonexistent'],
	},
	{
		name: "[Gen 8] CAP 1v1",
		desc: `Randomly generated 1v1-style teams only including Pok&eacute;mon made by the Create-A-Pok&eacute;mon Project.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3663533/">CAP 1v1</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		team: 'randomCAP1v1',
		ruleset: [
			'Picked Team Size = 1',
			'Max Team Size = 3',
			'Species Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause',
		],
	},
	{
		name: "[Gen 7] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591157/">Sets and Suggestions</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3616946/">Role Compendium</a>`,
		],

		mod: 'gen7',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 7] Random Doubles Battle",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3601525/">Sets and Suggestions</a>`],

		mod: 'gen7',
		gameType: 'doubles',
		team: 'random',
		searchShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Battle Factory",
		desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,

		mod: 'gen7',
		team: 'randomFactory',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 7] Monotype Battle Factory",
		desc: `Randomized teams of Pok&eacute;mon with competitively-viable sets that all share a type.`,

		mod: 'gen7',
		team: 'randomFactory',
		ruleset: ['[Gen 7] Battle Factory', 'Same Type Clause'],
	},
	{
		name: "[Gen 7] BSS Factory",
		desc: `Randomized 3v3 Singles featuring Pok&eacute;mon and movesets popular in Battle Spot Singles.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3604845/">Information and Suggestions Thread</a>`,
		],

		mod: 'gen7',
		team: 'randomBSSFactory',
		searchShow: false,
		ruleset: ['Flat Rules'],
	},
	{
		name: "[Gen 7] Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`,

		mod: 'gen7',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Nonexistent'],
	},
	{
		name: "[Gen 7 Let's Go] Random Battle",

		mod: 'gen7letsgo',
		team: 'random',
		searchShow: false,
		ruleset: ['Obtainable', 'Allow AVs', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 6] Random Battle",

		mod: 'gen6',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 6] Battle Factory",
		desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,

		mod: 'gen6',
		team: 'randomFactory',
		searchShow: false,
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},

	// Past Gens OU
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Gens OU",
		column: 3,
	},
	{
		name: "[Gen 7] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/sm/tags/ou/">USM OU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8162240/">USM OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667522/">USM OU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 6] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/ou/">ORAS OU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8133793/">ORAS OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3623399/">ORAS OU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['Standard', 'Swagger Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'Soul Dew', 'Baton Pass'],
	},

	// Retro Other Metagames
	///////////////////////////////////////////////////////////////////
	{
		section: "Retro Other Metagames",
		column: 3,
	},
	{
		name: "[Gen 7] Balanced Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8407209/">USM Balanced Hackmons</a>`,
		],

		mod: 'gen7',
		ruleset: ['-Nonexistent', '2 Ability Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Forme Clause', 'CFZ Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Groudon-Primal', 'Rayquaza-Mega', 'Gengarite', 'Comatose + Sleep Talk', 'Chatter',
			'Arena Trap', 'Contrary', 'Huge Power', 'Illusion', 'Innards Out', 'Magnet Pull', 'Moody', 'Parental Bond', 'Protean', 'Psychic Surge', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard',
		],
	},
	{
		name: "[Gen 7] Mix and Mega",
		desc: `Mega Stones and Primal Orbs can be used on almost any Pok&eacute;mon with no Mega Evolution limit.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8778656/">USM Mix and Mega</a>`,
		],

		mod: 'gen7mixandmega',
		ruleset: ['Standard', 'Mega Rayquaza Clause', 'Overflow Stat Mod'],
		banlist: ['Shadow Tag', 'Gengarite', 'Baton Pass', 'Electrify'],
		restricted: [
			'Arceus', 'Deoxys', 'Dialga', 'Dragonite', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem', 'Landorus-Therian', 'Lugia',
			'Lunala', 'Marshadow', 'Mewtwo', 'Naganadel', 'Necrozma', 'Palkia', 'Pheromosa', 'Rayquaza', 'Regigigas', 'Reshiram', 'Shuckle',
			'Slaking', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zekrom',
			'Beedrillite', 'Blazikenite', 'Kangaskhanite', 'Mawilite', 'Medichamite', 'Pidgeotite', 'Ultranecrozium Z',
		],
		unbanlist: ['Deoxys-Defense', 'Kyurem-Base', 'Necrozma-Base'],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (!item.exists) continue;
				if (itemTable.has(item.id) && (item.megaStone || item.onPrimal)) {
					return [
						`You are limited to one of each Mega Stone and Primal Orb.`,
						`(You have more than one ${item.name}.)`,
					];
				}
				itemTable.add(item.id);
			}
		},
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const item = this.dex.items.get(set.item);
			if (!item.megaEvolves && !item.onPrimal && item.id !== 'ultranecroziumz') return;
			if (species.baseSpecies === item.megaEvolves || (item.onPrimal && item.itemUser?.includes(species.baseSpecies)) ||
				(species.name.startsWith('Necrozma-') && item.id === 'ultranecroziumz')) {
				return;
			}
			if (this.ruleTable.isRestricted(`item:${item.id}`) || this.ruleTable.isRestrictedSpecies(species) ||
				set.ability === 'Power Construct') {
				return [`${set.species} is not allowed to hold ${item.name}.`];
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-start', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-start', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 7] STABmons",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8697545/">USM STABmons</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] OU', 'STABmons Move Legality'],
		banlist: ['Aerodactyl', 'Aerodactyl-Mega', 'Araquanid', 'Blacephalon', 'Kartana', 'Komala', 'Kyurem-Black', 'Porygon-Z', 'Silvally', 'Tapu Koko', 'Tapu Lele', 'Thundurus', 'Thundurus-Therian', 'King\'s Rock', 'Razor Fang'],
		restricted: ['Acupressure', 'Belly Drum', 'Chatter', 'Extreme Speed', 'Geomancy', 'Lovely Kiss', 'Shell Smash', 'Shift Gear', 'Spore', 'Thousand Arrows'],
	},
	{
		name: "[Gen 6] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8772336/">ORAS Almost Any Ability</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] OU', '2 Ability Clause', 'AAA Restricted Abilities', '!Obtainable Abilities'],
		banlist: ['Archeops', 'Bisharp', 'Chatot', 'Dragonite', 'Keldeo', 'Kyurem-Black', 'Mamoswine', 'Regigigas', 'Shedinja', 'Slaking', 'Smeargle', 'Snorlax', 'Suicune', 'Terrakion', 'Weavile', 'Dynamic Punch', 'Zap Cannon'],
		unbanlist: ['Aegislash', 'Blaziken', 'Deoxys-Defense', 'Deoxys-Speed', 'Genesect', 'Greninja', 'Landorus'],
		restricted: ['Arena Trap', 'Contrary', 'Fur Coat', 'Huge Power', 'Illusion', 'Imposter', 'Parental Bond', 'Protean', 'Pure Power', 'Simple', 'Speed Boost', 'Wonder Guard'],
	},
	{
		name: "[Gen 6] Pure Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9029427/">ORAS Pure Hackmons</a>`,
		],

		mod: 'gen6',
		ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'EV limit = 510'],
	},

	// US/UM Singles
	///////////////////////////////////////////////////////////////////
	{
		section: "US/UM Singles",
		column: 3,
	},
	{
		name: "[Gen 7] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286276/">USM Ubers</a>`,
		],

		mod: 'gen7',
		// searchShow: false,
		ruleset: ['Standard', 'Mega Rayquaza Clause'],
		banlist: ['Baton Pass'],
	},
	// {
	// 	name: "[Gen 7] RU",
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3645338/">USM RU Sample Teams</a>`,
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3645873/">USM RU Viability Rankings</a>`,
	// 	],
	//
	// 	mod: 'gen7',
	// 	searchShow: false,
	// 	ruleset: ['[Gen 7] UU'],
	// 	banlist: ['UU', 'RUBL', 'Mimikyu', 'Aurora Veil'],
	// 	unbanlist: ['Drought'],
	// },
	// {
	// 	name: "[Gen 7] NU",
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3632667/">USM NU Sample Teams</a>`,
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3645166/">USM NU Viability Rankings</a>`,
	// 	],
	//
	// 	mod: 'gen7',
	// 	searchShow: false,
	// 	ruleset: ['[Gen 7] RU'],
	// 	banlist: ['RU', 'NUBL', 'Drought'],
	// },
	// {
	// 	name: "[Gen 7] PU",
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3611496/">USM PU Sample Teams</a>`,
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3614892/">USM PU Viability Rankings</a>`,
	// 	],
	//
	// 	mod: 'gen7',
	// 	searchShow: false,
	// 	ruleset: ['[Gen 7] NU'],
	// 	banlist: ['NU', 'PUBL'],
	// },
	{
		name: "[Gen 7] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/sm/formats/lc/">USM LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3639319/">USM LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621440/">USM LC Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Little Cup', 'Standard', 'Swagger Clause'],
		banlist: [
			'Aipom', 'Cutiefly', 'Drifloon', 'Gligar', 'Gothita', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon',
			'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Trapinch', 'Vulpix-Base', 'Wingull', 'Yanma',
			'Eevium Z', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Sticky Web',
		],
	},
	{
		name: "[Gen 7] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8411581/">USM Monotype</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Same Type Clause', 'Standard', 'Swagger Clause'],
		banlist: [
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana', 'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna',
			'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tapu Lele', 'Xerneas', 'Yveltal', 'Zekrom', 'Zygarde',
			'Battle Bond', 'Shadow Tag', 'Bright Powder', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Lax Incense', 'Quick Claw', 'Razor Fang',
			'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "[Gen 7] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031460/">USUM 1v1</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Swagger Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause',
		],
		banlist: [
			'Arceus', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Mimikyu', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Snorlax', 'Solgaleo', 'Tapu Koko', 'Xerneas', 'Yveltal', 'Zekrom',
			'Moody', 'Focus Sash', 'Grass Whistle', 'Hypnosis', 'Perish Song', 'Sing', 'Detect + Fightinium Z',
		],
	},
	{
		name: "[Gen 7] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3587441/">Anything Goes Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591711/">Anything Goes Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646736/">Anything Goes Sample Teams</a>`,
		],

		mod: 'gen7',
		// searchShow: false,
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	// {
	// 	name: "[Gen 7] ZU",
	// 	desc: `The unofficial usage-based tier below PU.`,
	// 	threads: [
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3646743/">ZU Metagame Discussion</a>`,
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3643412/">ZU Viability Rankings</a>`,
	// 		`&bullet; <a href="https://www.smogon.com/forums/threads/3646739/">ZU Sample Teams</a>`,
	// 	],
	//
	// 	mod: 'gen7',
	// 	searchShow: false,
	// 	ruleset: ['[Gen 7] PU'],
	// 	banlist: [
	// 		'PU', 'Carracosta', 'Crabominable', 'Exeggutor-Base', 'Gorebyss', 'Jynx', 'Raticate-Alola',
	// 		'Shiftry', 'Throh', 'Turtonator', 'Type: Null', 'Ursaring', 'Victreebel',
	// 	],
	// },
	{
		name: "[Gen 7] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621207/">USUM CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8691482/">USUM CAP Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8691484/">USUM CAP Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] OU', '+CAP'],
	},
	{
		name: "[Gen 7] Battle Spot Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3601012/">Introduction to Battle Spot Singles</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3605970/">Battle Spot Singles Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3601658/">Battle Spot Singles Role Compendium</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3619162/">Battle Spot Singles Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
		banlist: ['Battle Bond'],
	},
	{
		name: "[Gen 7 Let's Go] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667865/">LGPE OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656868/">LGPE OU Viability Rankings</a>`,
		],

		mod: 'gen7letsgo',
		searchShow: false,
		ruleset: ['Adjust Level = 50', 'Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 7] Custom Game",

		mod: 'gen7',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// US/UM Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "US/UM Doubles",
		column: 3,
	},
	{
		name: "[Gen 7] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661293/">USUM Doubles OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8394179/">USUM Doubles OU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8394190/">USUM Doubles OU Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		// searchShow: false,
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['DUber', 'Power Construct', 'Eevium Z', 'Dark Void'],
	},
	{
		name: "[Gen 7] Doubles UU",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3598014/">Doubles UU Metagame Discussion</a>`],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 7] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 7] VGC 2019",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641100/">VGC 2019 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641123/">VGC 2019 Viability Rankings</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 7', 'VGC Timer', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
		banlist: ['Unown', 'Battle Bond'],
	},
	{
		name: "[Gen 7] VGC 2018",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3631800/">VGC 2018 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3622041/">VGC 2018 Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3628885/">VGC 2018 Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		timer: {
			starting: 5 * 60,
			addPerTurn: 0,
			maxPerTurn: 55,
			maxFirstTurn: 90,
			grace: 90,
			timeoutAutoChoose: true,
			dcTimerBank: false,
		},
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 7'],
		banlist: ['Oranguru + Symbiosis', 'Passimian + Defiant', 'Unown', 'Custap Berry', 'Enigma Berry', 'Jaboca Berry', 'Micle Berry', 'Rowap Berry', 'Battle Bond'],
	},
	{
		name: "[Gen 7] VGC 2017",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3583926/">VGC 2017 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591794/">VGC 2017 Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3590391/">VGC 2017 Sample Teams</a>`,
		],

		mod: 'gen7sm',
		gameType: 'doubles',
		searchShow: false,
		timer: {
			starting: 15 * 60,
			addPerTurn: 0,
			maxPerTurn: 55,
			maxFirstTurn: 90,
			grace: 90,
			timeoutAutoChoose: true,
			dcTimerBank: false,
		},
		ruleset: ['Flat Rules', 'Old Alola Pokedex', '!! Adjust Level = 50', 'Min Source Gen = 7'],
		banlist: ['Mega', 'Custap Berry', 'Enigma Berry', 'Jaboca Berry', 'Micle Berry', 'Rowap Berry'],
	},
	{
		name: "[Gen 7] Battle Spot Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3595001/">Battle Spot Doubles Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3593890/">Battle Spot Doubles Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3595859/">Battle Spot Doubles Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
		banlist: ['Battle Bond'],
	},
	{
		name: "[Gen 7] Doubles Custom Game",

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// OR/AS Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "OR/AS Singles",
		column: 4,
	},
	{
		name: "[Gen 6] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286277/">ORAS Ubers</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard', 'Swagger Clause', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 6] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/formats/uu/">ORAS UU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3598164/">ORAS UU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] OU'],
		banlist: ['OU', 'UUBL', 'Drizzle', 'Drought'],
	},
	{
		name: "[Gen 6] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/ru/">ORAS RU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3574583/">ORAS RU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 6] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/nu/">ORAS NU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3555650/">ORAS NU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] RU'],
		banlist: ['RU', 'NUBL'],
	},
	{
		name: "[Gen 6] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/pu/">ORAS PU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3528743/">ORAS PU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] NU'],
		banlist: ['NU', 'PUBL', 'Chatter'],
	},
	{
		name: "[Gen 6] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/formats/lc/">ORAS LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3547566/">ORAS LC Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard', 'Little Cup Rule'],
		banlist: [
			'Drifloon', 'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Yanma',
			'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger',
		],
	},
	{
		name: "[Gen 6] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8411583/">ORAS Monotype</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard', 'Swagger Clause', 'Same Type Clause'],
		banlist: [
			'Aegislash', 'Altaria-Mega', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Genesect',
			'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Greninja', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White',
			'Lucario-Mega', 'Lugia', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Sableye-Mega',
			'Salamence-Mega', 'Shaymin-Sky', 'Slowbro-Mega', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom',
			'Shadow Tag', 'Bright Powder', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Lax Incense', 'Quick Claw', 'Razor Fang', 'Smooth Rock',
			'Soul Dew', 'Baton Pass',
		],
	},
	{
		name: "[Gen 6] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031459/">ORAS 1v1</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: [
			'Max Team Size = 3', 'Picked Team Size = 1', 'Obtainable', 'Nickname Clause', 'Moody Clause', 'OHKO Clause',
			'Evasion Moves Clause', 'Accuracy Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod',
			'Cancel Mod', 'Team Preview',
		],
		banlist: [
			'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Snorlax', 'Xerneas', 'Yveltal',
			'Zekrom', 'Focus Sash', 'Soul Dew', 'Grass Whistle', 'Hypnosis', 'Perish Song', 'Sing', 'Yawn',
		],
	},
	{
		name: "[Gen 6] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3523229/">ORAS Anything Goes</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3548945/">ORAS AG Resources</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Obtainable', 'Team Preview', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 6] ZU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/formats/zu/">ORAS ZU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8034679/">ORAS ZU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] PU'],
		banlist: ['PU', 'Fraxure', 'Regigigas', 'Simisear'],
	},
	{
		name: "[Gen 6] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3537407/">ORAS CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8752281/">ORAS CAP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8752280/">ORAS CAP Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] OU', '+CAP'],
		banlist: ['Aurumoth', 'Cawmodore'],
	},
	{
		name: "[Gen 6] Battle Spot Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3527960/">ORAS Battle Spot Singles</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3554616/">ORAS BSS Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
		banlist: ['Soul Dew'],
	},
	{
		name: "[Gen 6] Custom Game",

		mod: 'gen6',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// OR/AS Doubles/Triples
	///////////////////////////////////////////////////////////////////

	{
		section: "OR/AS Doubles/Triples",
		column: 4,
	},
	{
		name: "[Gen 6] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3606255/">ORAS Doubles OU Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7387213/">ORAS Doubles OU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7387215/">ORAS Doubles OU Sample Teams</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['DUber', 'Soul Dew', 'Dark Void'],
	},
	{
		name: "[Gen 6] VGC 2016",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3558332/">VGC 2016 Rules</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3580592/">VGC 2016 Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules', 'Min Source Gen = 6', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
		banlist: ['Soul Dew'],
	},
	{
		name: "[Gen 6] VGC 2015",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3524352/">VGC 2015 Rules</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3560820/">ORAS Battle Spot Doubles Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3530547/">VGC 2015 Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
		banlist: ['Soul Dew', 'Articuno + Snow Cloak', 'Zapdos + Static', 'Moltres + Flame Body', 'Dragonite + Barrier'],
	},
	{
		name: "[Gen 6] VGC 2014",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3493272/">VGC 2014 Rules</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3507789/">VGC 2014 Viability Rankings</a>`,
		],

		mod: 'gen6xy',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules', 'Kalos Pokedex', 'Min Source Gen = 6'],
	},
	{
		name: "[Gen 6] Battle Spot Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3560820/">ORAS Battle Spot Doubles Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3560824/">ORAS BSD Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
		banlist: ['Soul Dew'],
	},
	{
		name: "[Gen 6] Doubles Custom Game",

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 6] Battle Spot Triples",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3533914/">ORAS Battle Spot Triples Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3549201/">ORAS BST Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		ruleset: ['Flat Rules', 'Min Source Gen = 6'],
	},
	{
		name: "[Gen 6] Triples Custom Game",

		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	*/
];
