// Note: These are the rules that formats use

import {Utils} from "../lib";

// The list of formats is stored in config/formats.js
export const Rulesets: {[k: string]: FormatData} = {

	// Custom Rulesets
	///////////////////////////////////////////////////////////////////

	//Standards
	bgtenatdexag: {
		effectType: 'ValidatorRule',
		name: 'BGTE NatDex AG',
		desc: "In addition to Smogon's [Gen 8] National Dex AG, allows level 120 Pokémon, Cosplay Pikachu, Let's GO Starters, Spiky-eared Pichu, Eternal Flower Floette, Totems, duplicate fusions, duplicate LGPE starters, Gems, everything added by the Insurgence fork, and everything added by this fork. (BGTE stands for BabyGrootTheEpic, the creator of this fork.)",
		ruleset: [
			'Obtainable', '!NoFusionDupes', '!Limit One LGPE Starter', 'Max Level = 120', 'Default Level = 100', 'NatDex Megas', 'Sketch Gen 8 Moves',
			'DynaMega Mod', 'DynaZ Mod', 'Endless Battle Clause', 'Nickname Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Zoroark-Mega Illusion Thing',
		],
		//This fork's formats are all NatDex, so most instances of isNonstandard in data/formats-data.ts, data/item.ts, and data/moves.ts have been commented out.
	},
	bgtestandard: {
		effectType: 'ValidatorRule',
		name: 'BGTE Standard',
		desc: "BGTE NatDex AG with a few extra clauses and bans.",
		//Singles formats should also be given 'Singles Bans'. Free-For-All formats should also be given 'FFA Bans'.
		ruleset: ['BGTE NatDex AG', 'Species Clause', 'Dynamax Clause', 'Evasion Moves Clause', 'OHKO Clause', 'Moody Clause', 'Planet Series Clause', 'Shadow Clause'],
		banlist: [
			'Glitch', //Abilities
			'Permafrost', //'Dark Sonata', //Moves
			'Bright Powder', 'King\'s Rock', 'Razor Fang', 'Lax Incense', //Items
		],
	},
	natdexflatrules: {
		effectType: 'ValidatorRule',
		name: 'NatDex Flat Rules',
		desc: "A National Dex variant of the in-game Flat Rules.",
		ruleset: ['BGTE NatDex AG', '!Endless Battle Clause', 'Species Clause', 'Item Clause', 'Adjust Level Down = 50', 'Picked Team Size = Auto'],
		banlist: ['Mythical', 'Restricted Legendary'],
	},
	natdexlc: {
		effectType: 'ValidatorRule',
		name: 'NatDex LC',
		desc: "Only level 1-5 Pok&eacute;mon that are able to evolve and have no previous evolution are allowed",
		ruleset: ['BGTE Standard', '!Max Level', '!Default Level', 'Little Cup Rule'],
		banlist: ['Dragon Rage', 'Sonic Boom', 'Eevium Z', 'Eevee-Tutored'],
	},
	natdexmaxberries: {
		effectType: 'ValidatorRule',
		name: 'NatDex Max Berries',
		desc: "The first two moves in a Pok&eacute;mon's moveset are used simultaneously.", //Requires mod: 'maxberries',
		ruleset: ['BGTE Standard'],
		banlist: ['Jaboca Berry', 'Rowap Berry', 'Starf Berry', 'Baton Pass', 'Block', 'Bug Bite', 'Knock Off', 'Mean Look', 'Pluck', 'Substitute'],
	},
	natdexpokebilities: {
		effectType: 'ValidatorRule',
		name: 'NatDex Pokebilities',
		desc: "Pok&eacute;mon have all of their released abilities simultaneously.", //Requires mod: 'pokebilities',
		ruleset: ['BGTE Standard', 'Pokebilities Mod'],
		banlist: [
			'AG', 'Uber', 'Power Construct',
			'Glalie', 'Octillery', 'Remoraid', 'Snorunt', 'Bidoof', 'Bibarel', 'Smeargle', //Moody
		],
		//Singles:	banlist: ['Diglett-Base', 'Dugtrio-Base', 'Trapinch', 'Gothita', 'Gothitelle', 'Gothorita', 'Wobbuffet', 'Wynaut'], //Arena Trap & Shadow Tag
	},
	natdexlinked: {
		effectType: 'ValidatorRule',
		name: 'NatDex Linked',
		desc: "The first two moves in a Pok&eacute;mon's moveset are used simultaneously.", //Requires mod: 'linked',
		ruleset: ['BGTE Standard', 'Weather Speed Clause', 'Evasion Abilities Clause'],
		banlist: ['Speed Boost', 'Surge Surfer', 'Unburden'],
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
	natdex350cup: {
		effectType: 'ValidatorRule',
		name: 'NatDex 350 Cup',
		desc: "Pok&eacute;mon with a BST of 350 or lower get their base stats doubled.",
		ruleset: ['BGTE Standard', '350 Cup Mod'],
		banlist: ['Deep Sea Tooth', 'Eevium Z', 'Eviolite', 'Light Ball'],
	},
	natdexrevelationmons: {
		effectType: 'ValidatorRule',
		name: 'NatDex Revelationmons',
		desc: "The moves in the first slot(s) of a Pok&eacute;mon's set have their types changed to match the Pok&eacute;mon's type(s).",
		ruleset: ['BGTE Standard', 'Revelationmons Mod'],
		restricted: ['Bolt Beak', 'Fishious Rend', 'U-turn', 'Volt Switch'],
		//Singles:	ruleset: ['NatDex Revelationmons', 'Singles Bans', '!Sleep Clause Mod', 'Sleep Moves Clause'],
		//Singles:	banlist: ['Magnet Pull'],
		//FFA:		ruleset: ['NatDex Revelationmons', 'FFA Bans', '!Sleep Clause Mod', 'Sleep Moves Clause'],
	},
	natdexalphabet: {
		effectType: 'ValidatorRule',
		name: 'NatDex Alphabet',
		desc: "Pok&eacute;mon may learn almost any move that shares the same first letter as their name or a previous evolution's name.",
		ruleset: ['BGTE Standard', 'Alphabet Cup Move Legality'],
		banlist: ['Acupressure'],
		restricted: [
			'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Double Iron Bash', 'Electrify', 'Fishious Rend', 'Geomancy', 'Glacial Lance',
			'Lovely Kiss', 'Shell Smash', 'Shift Gear', 'Sleep Powder', 'Sketch', 'Spore', 'Surging Strikes', 'Thousand Arrows', //Base Game Moves
			'Shadow Blast', //Shadow Moves
		],
	},
	natdexstabmons: {
		effectType: 'ValidatorRule',
		name: 'NatDex STABmons',
		desc: "Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.",
		ruleset: ['BGTE Standard', 'STABmons Move Legality'],
		banlist: ['Komala', 'Arceus', 'Kangaskhan-Mega'],
		restricted: [
			'Acupressure', 'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Chatter', 'Clangorous Soul', 'Double Iron Bash', 'Electrify', 'Extreme Speed', 'Fishious Rend',
			'Geomancy', 'Glacial Lance', 'Lovely Kiss', 'Oblivion Wing', 'Precipice Blades', 'Shell Smash', 'Shift Gear', 'Sketch', 'Spore', 'Thousand Arrows', 'V-create', 'Wicked Blow',
		],
		//Singles:		ruleset: ['NatDex STABmons', 'Singles Bans', '!Sleep Clause Mod', 'Sleep Moves Clause'],
		//Singles:		banlist: ['Magnet Pull'],
		//Not singles:	restricted: ['Diamond Storm'],
		//FFA:			ruleset: ['NatDex STABmons', 'FFA Bans', '!Sleep Clause Mod', 'Sleep Moves Clause'],
	},
	natdexaaa: {
		effectType: 'ValidatorRule',
		name: 'NatDex AAA',
		desc: "Pok&eacute;mon can use any ability, barring the few that are restricted.",
		ruleset: ['BGTE Standard', '!Obtainable Abilities', '2 Ability Clause', 'AAA Restricted Abilities', 'Battle Forme Ability Check', 'Choice Pendulum Clause'],
		banlist: ['Shedinja', 'Ancient Presence', 'Omnitype'], //Glitch is banned by BGTE Standard.
		restricted: [
			'Arena Trap', 'Comatose', 'Contrary', 'Fluffy', 'Fur Coat', 'Gorilla Tactics', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out',
			'Intrepid Sword', 'Libero', 'Magnet Pull', 'Neutralizing Gas', 'Parental Bond', 'Poison Heal', 'Protean', 'Pure Power', 'Simple', 'Shadow Tag',
			'Speed Boost', 'Stakeout', 'Water Bubble', 'Wonder Guard', //Base Game Abilities
			'Athenian', 'Fired Up', 'Chlorofury', 'Phototroph', 'Unleafed', 'Winter Joy', //Insurgence Abilities
		],
		//Singles:					unbanlist: ['Missingno.'],
		//Doubles, Triples, Multi:	restricted: ['Anger Point', 'Justified'],
	},
	natdexmultibility: {
		effectType: 'ValidatorRule',
		name: 'NatDex Multibility',
		desc: "Run a second ability at the cost of giving up a Pok&eacute;mon's item slot.",
		ruleset: ['BGTE Standard', 'Multibility Mod', '2 Ability Clause', 'Weather Speed Clause'],
		banlist: ['Stench', 'Ancient Presence', 'Omnitype'], //Glitch is banned by BGTE Standard.
		restricted: [
			'Arena Trap', 'Comatose', 'Contrary', 'Fluffy', 'Fur Coat', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Intrepid Sword',
			'Libero', 'Magnet Pull', 'Neutralizing Gas', 'Parental Bond', 'Protean', 'Pure Power', 'Simple', 'Shadow Tag', 'Speed Boost', 'Stakeout', 'Tinted Lens',
			'Unaware', 'Water Bubble', 'Wonder Guard', //Base Game Abilities
			'Athenian', 'Fired Up', 'Chlorofury', 'Unleafed', 'Winter Joy', //Insurgence Abilities
		],
		//Singles:	ruleset: ['NatDex Multibility', 'Singles Bans', '!Sleep Clause Mod', 'Sleep Moves Clause'],
		//Singles:	banlist: ['Magnet Pull'],
		//Doubles, Triples, Multi:	restricted: ['Anger Point', 'Justified'],
		//FFA:		ruleset: ['NatDex Multibility', 'FFA Bans', '!Sleep Clause Mod', 'Sleep Moves Clause'],
	},
	natdexhackmons: {
		effectType: 'ValidatorRule',
		name: 'NatDex Hackmons',
		desc: "Pok&eacute;mon may have any item, ability, and moves (excluding CAP). No 510 EV limit. Allows Dynamaxing.",
		ruleset: [
			'-CAP', 'Max Level = 120', 'Default Level = 120', 'NatDex Megas', 'Sketch Gen 8 Moves',
			'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Zoroark-Mega Illusion Thing'
		],
	},
	rndmhackmons: {
		effectType: 'ValidatorRule',
		name: 'Rndm Hackmons',
		desc: "Ruleset for Hackmons Cup formats.", //Requires team: 'randomHC',
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Useless Items Clause', 'Signature Items Clause', '!Mega Rayquaza Clause', 'DynaMega Mod', 'DynaZ Mod'],
		banlist: ['Nonexistent'],
	},
	customgamemegas: {
		effectType: 'ValidatorRule',
		name: 'Custom Game Megas',
		desc: "Custom Game with no Mega Evolution limit.",
		// no restrictions, for serious (other than team preview)
		ruleset: [
			'HP Percentage Mod', 'Team Preview', 'Cancel Mod', 'NatDex Megas', 'Multi Mega Mod', 'DynaMega Mod', 'DynaZ Mod',
			'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100', 'Zoroark-Mega Illusion Thing',
		],
	},

	//Validator Rules
	nofusiondupes: {
		effectType: 'ValidatorRule',
		name: 'No Fusion Dupes',
		desc: "Restrict illegal fusion quantities (only one of Kyurem-Black/Kyurem-White, only one Necrozma-Dusk-Mane, etc.)",
		onValidateTeam(team, format) {
			let kyuremCount = 0;
			let necrozmaDMCount = 0;
			let necrozmaDWCount = 0;
			let calyrexCount = 0;
			for (const set of team) {
				if (set.species === 'Kyurem-White' || set.species === 'Kyurem-Black') {
					if (kyuremCount > 0) {
						return [
							`You cannot have more than one Kyurem-Black/Kyurem-White.`,
							`(It's untradeable and you can only make one with the DNA Splicers.)`,
						];
					}
					kyuremCount++;
				}
				if (set.species === 'Necrozma-Dusk-Mane') {
					if (necrozmaDMCount > 0) {
						return [
							`You cannot have more than one Necrozma-Dusk-Mane`,
							`(It's untradeable and you can only make one with the N-Solarizer.)`,
						];
					}
					necrozmaDMCount++;
				}
				if (set.species === 'Necrozma-Dawn-Wings') {
					if (necrozmaDWCount > 0) {
						return [
							`You cannot have more than one Necrozma-Dawn-Wings`,
							`(It's untradeable and you can only make one with the N-Lunarizer.)`,
						];
					}
					necrozmaDWCount++;
				}
				if (set.species === 'Calyrex-Ice' || set.species === 'Calyrex-Shadow') {
					if (calyrexCount > 0) {
						return [
							`You cannot have more than one Calyrex-Ice/Calyrex-Shadow.`,
							`(It's untradeable and you can only make one with the Reins of Unity.)`,
						];
					}
					calyrexCount++;
				}
			}
			return [];
		},
	},
	limitonelgpestarter: {
		effectType: 'ValidatorRule',
		name: 'Limit One LGPE Starter',
		desc: "Formats with this rule can only have one of Pikachu-Starter or Eevee-Starter on a team.",
		onValidateTeam(team, format) {
			let lgpeStarterCount = 0;
			for (const set of team) {
				if (set.species === 'Pikachu-Starter' || set.species === 'Eevee-Starter') {
					if (lgpeStarterCount > 0) {
						return [`You can only have one of Pikachu-Starter or Eevee-Starter on a team.`,];
					}
					lgpeStarterCount++;
				}
			}
			return [];
		},
	},
	singlesbans: {
		effectType: 'ValidatorRule',
		name: 'Singles Bans',
		desc: "Bans for singles formats with BGTE Standard.",
		ruleset: ['Sleep Clause Mod', 'Mega Rayquaza Clause'],
		banlist: [
			'AG', //Pokémon
			'Arena Trap', 'Shadow Tag', //Abilities
			'Baton Pass', //Moves
			'Delta Mawilite', 'Gengarite', 'Legend Plate', 'Crystal Piece Arceus', 'Crystal Piece Giratina' //Items
		],
	},
	ffabans: {
		effectType: 'ValidatorRule',
		name: 'FFA Bans',
		desc: "Bans for free-for-all formats with BGTE Standard.",
		ruleset: ['Sleep Clause Mod'],
		banlist: [
			'Acupressure', 'Aromatic Mist', 'Coaching', 'Court Change', 'Decorate', 'Final Gambit', 'Flatter',
			'Floral Healing', 'Flower Shield', 'Follow Me', 'Heal Pulse', 'Rage Powder', 'Swagger',
		],
	},
	customeventsclause: {
		effectType: 'ValidatorRule',
		name: 'Custom Events Clause',
		desc: "Ban custom events for Mawile and the Tapus added by this fork.",
		banlist: [
			'Mawile + Double Iron Bash', 'Mawile + Fire Punch',
			'Tapu Koko + Rising Voltage', 'Tapu Koko + Terrain Pulse', 'Tapu Koko + Play Rough',
			'Tapu Lele + Expanding Force', 'Tapu Lele + Terrain Pulse',
			'Tapu Bulu + Grassy Glide', 'Tapu Bulu + Terrain Pulse', 'Tapu Bulu + Play Rough',
			'Tapu Fini + Misty Explosion', 'Tapu Fini + Terrain Pulse',
		],
		onBegin() {
			this.add('rule', 'Custom Events Clause: Custom events for Mawile and the Tapus are banned');
		},
	},
	periodicorbitclause: {
		effectType: 'ValidatorRule',
		name: 'Periodic Orbit Clause',
		desc: "Bans Preriodic Orbit in non-singles formats, as the ability only works in singles.",
		onValidateTeam(team) {
			const gameType = this.format.gameType;
			if (gameType !== 'singles') {
				for (const set of team) {
					if (this.toID(set.ability) === 'periodicorbit') {
						return [`${set.name}'s ability Periodic Orbit is banned by Periodic Orbit Clause, because it doesn't work in this gamemode.`];
					}
					const species = this.toID(set.species);
					if (this.toID(set.item) === 'jirachite' && (species === 'jirachi' || species === 'jirachimega')) {
						return [`${set.name}'s item Jirachite is banned by Periodic Orbit Clause, because Jirachi-Mega's ability Periodic Orbit doesn't work in this gamemode.`];
					}
				}
			}
		},
	},
	battleformeabilitycheck: {
		effectType: 'ValidatorRule',
		name: 'Battle Forme Ability Check',
		desc: "Prevents Zacian-Crowned and Zamazenta-Crowned from having an illegal ability, since they are battle-only formes.",
		onValidateSet(set) {
			// Temporary fix until battle-only is implemented properly
			const species = this.toID(set.species);
			const ability = this.toID(set.ability);
			const item = this.toID(set.item);
			if (species === 'zamazentacrowned' && ability !== 'dauntlessshield' && item === 'rustedshield') {
				return [`Zamazenta-Crowned can only use Dauntless Shield because it is a battle-only forme.`];
			}
			if (species === 'zaciancrowned' && ability !== 'intrepidsword' && item === 'rustedsword') {
				return [`Zacian-Crowned can only use Intrepid Sword because it is a battle-only forme.`];
			}
		},
	},
	choicependulumclause: {
		effectType: 'ValidatorRule',
		name: 'Choice Pendulum Clause',
		desc: "Prevents any Pokémon from having the ability Pendulum and a Choice item.",
		banlist: ['Pendulum + Choice Band', 'Pendulum + Choice Scarf', 'Pendulum + Choice Specs'],
		onBegin() {
			this.add('rule', 'Choice Pendulum Clause: Pokémon with Pendulum may not hold a choice item');
		},
	},
	weatherspeedclause: {
		effectType: 'ValidatorRule',
		name: 'Weather Speed Clause',
		desc: "Bans abilities that boost speed in weather.",
		banlist: ['Chlorophyll', 'Sand Rush', 'Slush Rush', 'Swift Swim', 'Shadow Dance'],
		onBegin() {
			this.add('rule', 'Weather Speed Clause: Abilities that boost speed in weather are banned');
		},
	},
	planetseriesclause: {
		effectType: 'ValidatorRule',
		name: 'Planet Series Clause',
		desc: "Bans Planet Series moves (Silverforce, Venusforce, etc.).",
		//banlist: ['Silverforce', 'Venusforce', 'Earthforce', 'Marsforce', 'Zeusforce', 'Saturnforce', 'Cloudforce', 'Plutoforce', 'Lunaforce', 'Graviforce'],
		onBegin() {
			this.add('rule', 'Planet Series Clause: Planet Series move are not yet implemented, so this clause has no effect');
		},
	},
	shadowclause: {
		effectType: 'ValidatorRule',
		name: 'Shadow Clause',
		desc: "Bans Shadow-type Pokémon and moves.",
		banlist: ['Testmon', 'Shadow Blast'],
		onBegin() {
			this.add('rule', 'Shadow Clause: Shadow-type is banned');
		},
	},
	uselessitemsclause: {
		effectType: 'ValidatorRule',
		name: 'Useless Items Clause',
		desc: "Bans items with no effect.",
		banlist: [
			'Dragon Scale', 'Legend Plate', //NYI
			'TR00', 'TR01', 'TR02', 'TR03', 'TR04', 'TR05', 'TR06', 'TR07', 'TR08', 'TR09', 'TR10', 'TR11', 'TR12', 'TR13', 'TR14', 'TR15', 'TR16', 'TR17', 'TR18', 'TR19', 'TR20',
			'TR21', 'TR22', 'TR23', 'TR24', 'TR25', 'TR26', 'TR27', 'TR28', 'TR29', 'TR30', 'TR31', 'TR32', 'TR33', 'TR34', 'TR35', 'TR36', 'TR37', 'TR38', 'TR39', 'TR40', 'TR41',
			'TR42', 'TR43', 'TR44', 'TR45', 'TR46', 'TR47', 'TR48', 'TR49', 'TR50', 'TR51', 'TR52', 'TR53', 'TR54', 'TR55', 'TR56', 'TR57', 'TR58', 'TR59', 'TR60', 'TR61', 'TR62',
			'TR63', 'TR64', 'TR65', 'TR66', 'TR67', 'TR68', 'TR69', 'TR70', 'TR71', 'TR72', 'TR73', 'TR74', 'TR75', 'TR76', 'TR77', 'TR78', 'TR79', 'TR80', 'TR81', 'TR82', 'TR83',
			'TR84', 'TR85', 'TR86', 'TR87', 'TR88', 'TR89', 'TR90', 'TR91', 'TR92', 'TR93', 'TR94', 'TR95', 'TR96', 'TR97', 'TR98', 'TR99', //TRs
			'Ancient Ball', 'Armor Fossil', 'Beast Ball', 'Berry Sweet', 'Bluk Berry', 'Bottle Cap', 'Belue Berry', 'Cherish Ball', 'Chipped Pot', 'Claw Fossil', 'Clover Sweet',
			'Cover Fossil', 'Cracked Pot', 'Cornn Berry', 'Dawn Stone', 'Delta Ball', 'Dive Ball', 'Dome Fossil', 'Dream Ball', 'Dubious Disc', 'Dusk Ball', 'Dusk Stone',
			'Durin Berry', 'Electirizer', 'Fast Ball', 'Fire Stone', 'Flower Sweet', 'Fossilized Bird', 'Fossilized Dino', 'Fossilized Drake', 'Fossilized Fish', 'Friend Ball',
			'Galarica Cuff', 'Galarica Wreath', 'Gold Bottle Cap', 'Great Ball', 'Grepa Berry', 'Heal Ball', 'Heavy Ball', 'Helix Fossil', 'Hondew Berry', 'Ice Stone', 'Jaw Fossil',
			'Kelpsy Berry', 'Leaf Stone', 'Level Ball', 'Love Ball', 'Love Sweet', 'Lure Ball', 'Luxury Ball', 'Magmarizer', 'Master Ball', 'Moon Ball', 'Moon Stone', 'Magost Berry',
			'Nest Ball', 'Net Ball', 'Nocturne Incense', 'Nuzlocke Ball', 'Nanab Berry', 'Nomel Berry', 'Old Amber', 'Oval Stone', 'Park Ball', 'Pinap Berry', 'Plume Fossil',
			'Poke Ball', 'Pomeg Berry', 'Premier Ball', 'Prism Scale', 'Protector', 'Pamtre Berry', 'Qualot Berry', 'Rare Bone', 'Reaper Cloth', 'Repeat Ball', 'Ribbon Sweet',
			'Root Fossil', 'Rabuta Berry', 'Razz Berry', 'Sachet', 'Safari Ball', 'Sail Fossil', 'Shiny Ball', 'Shiny Stone', 'Skull Fossil', 'Snore Ball', 'Sport Ball', 'Star Sweet',
			'Strawberry Sweet', 'Sun Stone', 'Sweet Apple', 'Spelon Berry', 'Tamato Berry', 'Tart Apple', 'Thunder Stone', 'Timer Ball', 'Up-Grade', 'Water Stone', 'Whipped Dream',
			'Watmel Berry', 'Wepear Berry', 
		],
		onBegin() {
			this.add('rule', 'Useless Items Clause: Items with no effect are banned.');
		},
	},
	signatureitemsclause: {
		effectType: 'ValidatorRule',
		name: 'Signature Items Clause',
		desc: "Bans Memories and items that only work with specific Pokémon. Also prevents Rayquaza from Mega Evolving.",
		ruleset: ['Mega Stone Clause'],
		banlist: [
			'Aloraichium Z', 'Decidium Z', 'Eevium Z', 'Incinium Z', 'Kommonium Z', 'Lunalium Z', 'Lycanium Z', 'Marshadium Z', 'Mewnium Z', 'Mimikium Z', 'Pikanium Z', 'Pikashunium Z',
			'Primarium Z', 'Snorlium Z', 'Solganium Z', 'Tapunium Z', 'Ultranecrozium Z', //Z-Crystals
			'Bug Memory', 'Dark Memory', 'Dragon Memory', 'Electric Memory', 'Fairy Memory', 'Fighting Memory', 'Fire Memory', 'Flying Memory', 'Ghost Memory', 'Grass Memory',
			'Ground Memory', 'Ice Memory', 'Poison Memory', 'Psychic Memory', 'Rock Memory', 'Steel Memory', 'Water Memory', //Memories
			'item:Flygon Armor', 'item:Leavanny Armor', 'item:Mewtwo Armor', 'item:Strange Machine', 'item:Tyranitar Armor', 'item:Volcarona-Delta Armor', 'item:Zekrom Armor', //Armors
			'Blue Orb', 'Crystal Piece Arceus', 'Crystal Piece Giratina', 'Crystal Piece Regigigas', 'Red Orb', //Primal formes' items
			'Burn Drive', 'Chill Drive', 'Douse Drive', 'Shock Drive', //Drives
			'Adamant Orb', 'Griseous Orb', 'Lustrous Orb', //Origin formes' items
			'Deep Sea Scale', 'Deep Sea Tooth', /*'Dragon Scale',*/ 'Leek', /*'Legend Plate',*/ 'Light Ball', 'Lucky Punch', 'Metal Powder', 'Quick Powder', 'Rusted Shield',
			'Rusted Sword', 'Soul Dew', 'Stick', 'Thick Club', 'Vile Vial', 
		],
		onBegin() {
			this.add('rule', 'Signature Items Clause: Items that only affect specific Pokémon are banned.');
		},
	},
	megastoneclause: {
		effectType: 'ValidatorRule',
		name: 'Mega Stone Clause',
		desc: "Bans Mega Stones. Also prevents Rayquaza from Mega Evolving.",
		ruleset: ['Mega Rayquaza Clause'],
		banlist: [
			'Abomasite', 'Absolite', 'Aerodactylite', 'Aggronite', 'Alakazite', 'Altarianite', 'Ampharosite', 'Audinite', 'Banettite', 'Beedrillite', 'Bisharpite', 'Blastoisinite',
			'Blazikenite', 'Cacturnite', 'Cameruptite', 'Charizardite X', 'Charizardite Y', 'Chatotite', 'Crawdite', 'Cryogonite', 'Crystal Fragment', 'Crucibellite', 'Delta Bisharpite',
			'Delta Blastoisinite', 'Delta Cameruptite', 'Delta Charizardite', 'Delta Etigirafarigite', 'Delta Froslassite', 'Delta Galladite', 'Delta Gardevoirite', 'Delta Glalitite',
			'Delta Lopunnite', 'Delta Lucarionite', 'Delta Mawilite', 'Delta Medichamite', 'Delta Metagrossite Ruin', 'Delta Metagrossite Spider', 'Delta Milotite', 'Delta Pidgeotite',
			'Delta Sablenite', 'Delta Scizorite', 'Delta Sunflorite', 'Delta Typhlosionite', 'Delta Venusaurite', 'Diancite', 'Donphanite', 'Dugtrinite', 'Eevite', 'Etigirafarigite',
			'Feraligatite', 'Flygonite', 'Froslassite', 'Galladite', 'Garchompite', 'Gardevoirite', 'Gengarite', 'Glalitite', 'Golurkite', 'Gothitite', 'Gyaradosite', 'Haxorite',
			'Heracronite', 'Houndoominite', 'Hydreigonite', 'Jirachite', 'Kangaskhanite', 'Latiasite', 'Latiosite', 'Lopunnite', 'Lucarionite', 'Magcargonite', 'Manectite', 'Marowite',
			'Mawilite', 'Medichamite', 'Meganiumite', 'Metagrossite', 'Mewtwonite X', 'Mewtwonite Y', 'Milotite', 'Miltankite', 'Pidgeotite', 'Pinsirite', 'Politoedite', 'Poliwrathite',
			'Reuniclite', 'Sablenite', 'Salamencite', 'Sceptilite', 'Sceptilite ZO', 'Scizorite', 'Shadow Mewtwonite', 'Sharpedonite', 'Shiftrite', 'Slowbronite', 'Spiritombite',
			'Steelixite Fire', 'Steelixite Steel', 'Stunfiskite', 'Sudowoodite', 'Sunflorite-F', 'Sunflorite-M', 'Swampertite', 'Swampertite ZO', 'Typhlosionite', 'Tyranitarite',
			'Venusaurite', 'Zebstrikite', 'Zoronite',
		],
		onBegin() {
			this.add('rule', 'Mega Stone Clause: Mega Stones are banned.');
		},
	},


	//Mods
	natdexmegas: {
		effectType: 'Rule',
		name: 'NatDex Megas',
		desc: "Allows Mega evolutions to be used in Gen 8 formats.",
		//Hardcoded in sim/battle-actions.ts & sim/team-validator.ts
	},
	multimegamod: {
		effectType: 'Rule',
		name: 'Multi Mega Mod',
		desc: "Removes Mega Evolution limit and Ultra Burst limit.",
		onBegin() {
			this.add('rule', 'Multi Mega Mod: No limit on Mega Evolutions');
		},
		//Hardcoded in sim/battle-actions.ts
	},
	stonelessmegamod: {
		effectType: 'Rule',
		name: 'Stoneless Mega Mod',
		desc: "Allows Pokémon to Mega Evolve without their Mega Stone, though the Pokémon must still be a species capable of Mega Evolution.\nCharizard, Mewtwo, Sceptile, and Swampert will default to their Y/ORAS mega. To use their X/ZO Mega, give their HP stat 2 useless EVs.",
		onBegin() {
			this.add('rule', 'Stoneless Mega Mod: Pokémon don\'t need their Mega Stone to Mega Evolve');
			for (const pokemon of this.getAllPokemon()) {
				let megaID = pokemon.species.id + 'mega';
				if (['charizardmega', 'mewtwomega', 'sceptilemega', 'swampertmega'].includes(megaID)) {
					const evMod = pokemon.set.evs.hp % 4;
					if (pokemon.species.num < 151) { //Charizard (6) & Mewtwo (150)
						if(evMod === 2) megaID += 'x';
						else megaID += 'y';
					} else if (evMod === 2) megaID += 'zo'; //Sceptile (254) & Swampert (260)
				} else if (megaID === 'eeveetutoredmega') megaID = 'eeveemegabase';

				const megaSpecies = this.dex.species.get(megaID)?.name;
				if (megaSpecies && megaSpecies.includes('-Mega') && typeof pokemon.canMegaEvo !== 'string') {
					pokemon.canMegaEvo = megaSpecies;
				}
			}
		},
	},
	multibilitymod: {
		effectType: 'ValidatorRule',
		name: 'Multibility Mod',
		desc: "Run a second ability at the cost of giving up a Pok&eacute;mon's item slot.",
		banlist: ['Trace'],
		restricted: ['Emergency Exit + Regenerator', 'Wimp Out + Regenerator'],
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
	pokebilitiesmod: {
		effectType: 'ValidatorRule',
		name: 'Pokebilities Mod',
		desc: "Pok&eacute;mon have all of their released abilities simultaneously.", //Requres mod: 'pokebilities',
		/*banlist: [
			// Moody:
			'Glalie', 'Octillery', 'Remoraid', 'Snorunt', 'Bidoof', 'Bibarel', 'Smeargle',
			//Arena Trap:
			'Diglett-Base', 'Dugtrio-Base', 'Trapinch',
			// Shadow Tag:
			'Gothita', 'Gothitelle', 'Gothorita', 'Wobbuffet', 'Wynaut',
		],*/
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
		onAfterMega(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
			pokemon.m.innates = undefined;
		},
	},
	dynamegamod: {
		effectType: 'Rule',
		name: 'DynaMega Mod',
		desc: "Mega Evolutions can Dynamax (but not on the same turn as when they mega evolved).",
		onBegin() {
			if(!this.ruleTable.has('dynamaxclause')) this.add('rule', 'DynaMega Mod: Mega Evolutions can Dynamax');
		},
		//Hardcoded in sim/pokemon.ts
	},
	dynazmod: {
		effectType: 'Rule',
		name: 'DynaZ Mod',
		desc: "Pok&eacute;mon with Z-Crystals can Dynamax if they are unable to use their Z-moves.",
		onBegin() {
			if(!this.ruleTable.has('dynamaxclause')) this.add('rule', 'DynaZ Mod: Z-move users can Dynamax if they are unable to use their Z-moves');
		},
		//Hardcoded in sim/pokemon.ts
	},
	zoroarkmegaillusionthing: {
		effectType: 'Rule',
		name: 'Zoroark-Mega Illusion Thing',
		desc: "Probably needed for Zoroark-Mega's Illusion to work.",
		onDamagingHit(damage, target, source, move) {
			if (target.illusion) {
				this.debug('illusion cleared');
				target.illusion = null;
				const details = target.species.name + (target.level === 100 ? '' : ', L' + target.level) +
				(target.gender === '' ? '' : ', ' + target.gender) + (target.set.shiny ? ', shiny' : '');
				this.add('replace', target, details);
				this.add('-end', target, 'Illusion');
			}
		},
		onFaint(pokemon) {
			pokemon.illusion = null;
		},
	},





	
	// Rulesets
	///////////////////////////////////////////////////////////////////

	standard: {
		effectType: 'ValidatorRule',
		name: 'Standard',
		desc: "The standard ruleset for all offical Smogon singles tiers (Ubers, OU, etc.)",
		ruleset: [
			'Obtainable', 'Team Preview', 'Sleep Clause Mod', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod',
		],
		onDamagingHit(damage, target, source, move) {
			if (target.illusion) {
				this.debug('illusion cleared');
				target.illusion = null;
				const details = target.species.name + (target.level === 100 ? '' : ', L' + target.level) +
				(target.gender === '' ? '' : ', ' + target.gender) + (target.set.shiny ? ', shiny' : '');
				this.add('replace', target, details);
				this.add('-end', target, 'Illusion');
			}
		},
		onFaint(pokemon) {
			pokemon.illusion = null;
		},
		banlist: ['Permafrost', 'Livewire', 'Achilles Heel', 'Brush Fire'],
	},
	draft: {
		effectType: 'ValidatorRule',
		name: 'Draft',
		desc: "The custom Draft League ruleset",
		ruleset: [
			'Sleep Clause Mod', 'OHKO Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod',
		],
		onDamagingHit(damage, target, source, move) {
			if (target.illusion) {
				this.debug('illusion cleared');
				target.illusion = null;
				const details = target.species.name + (target.level === 100 ? '' : ', L' + target.level) +
				(target.gender === '' ? '' : ', ' + target.gender) + (target.set.shiny ? ', shiny' : '');
				this.add('replace', target, details);
				this.add('-end', target, 'Illusion');
			}
		},
		onFaint(pokemon) {
			pokemon.illusion = null;
		},
		timer: {starting: 60 * 60, grace: 0, addPerTurn: 10, maxPerTurn: 100, timeoutAutoChoose: true},
	},
	standardnext: {
		effectType: 'ValidatorRule',
		name: 'Standard NEXT',
		desc: "The standard ruleset for the NEXT mod",
		ruleset: [
			'+Unreleased', 'Sleep Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'HP Percentage Mod', 'Cancel Mod',
		],
		banlist: ['Soul Dew'],
	},
	flatrules: {
		effectType: 'ValidatorRule',
		name: 'Flat Rules',
		desc: "The in-game Flat Rules: Adjust Level Down 50, Species Clause, Item Clause, -Mythical, -Restricted Legendary, Bring 6 Pick 3-6 depending on game type.",
		ruleset: ['Obtainable', 'Team Preview', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Adjust Level Down = 50', 'Picked Team Size = Auto', 'Cancel Mod'],
		banlist: ['Mythical', 'Restricted Legendary'],
	},
	limittworestricted: {
		effectType: 'ValidatorRule',
		name: 'Limit Two Restricted',
		desc: "Limit two restricted Pokémon (flagged with * in the rules list)",
		onValidateTeam(team) {
			const restrictedSpecies = [];
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (this.ruleTable.isRestrictedSpecies(species)) restrictedSpecies.push(species.name);
			}
			if (restrictedSpecies.length > 2) {
				return [`You can only use up to two restricted Pok\u00E9mon (you have: ${restrictedSpecies.join(', ')})`];
			}
		},
	},
	limitonerestricted: {
		effectType: 'ValidatorRule',
		name: 'Limit One Restricted',
		desc: "Limit one restricted Pokémon (flagged with * in the rules list)",
		onValidateTeam(team) {
			const restrictedSpecies = [];
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (this.ruleTable.isRestrictedSpecies(species)) restrictedSpecies.push(species.name);
			}
			if (restrictedSpecies.length > 1) {
				return [`You can only use one restricted Pok\u00E9mon (you have: ${restrictedSpecies.join(', ')})`];
			}
		},
	},
	standarddoubles: {
		effectType: 'ValidatorRule',
		name: 'Standard Doubles',
		desc: "The standard ruleset for all official Smogon doubles tiers",
		ruleset: [
			'Obtainable', 'Team Preview', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Gravity Sleep Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod',
		],
	},
	banunbalancedmoves: {
		effectType: 'ValidatorRule',
		name: 'Ban Unbalanced Moves',
		desc: "Bans moves that are not balanced for competitive play.",
		banlist: ['Permafrost', 'Livewire'],
		// banlist: ['Permafrost', 'Livewire', 'Achilles Heel', 'Brush Fire'],
	},
	standardnatdex: {
		effectType: 'ValidatorRule',
		name: 'Standard NatDex',
		desc: "The standard ruleset for all National Dex tiers",
		ruleset: [
			'Obtainable', '+Unobtainable', '+Past', 'Sketch Gen 8 Moves', '+PastMove', 'NatDex Megas', 'Team Preview', 'Nickname Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause',
		],
		onValidateSet(set) {
			// These Pokemon are still unobtainable
			const unobtainables = [
				'Eevee-Starter', 'Floette-Eternal', 'Pichu-Spiky-eared', 'Pikachu-Belle', 'Pikachu-Cosplay', 'Pikachu-Libre',
				'Pikachu-PhD', 'Pikachu-Pop-Star', 'Pikachu-Rock-Star', 'Pikachu-Starter', 'Eternatus-Eternamax',
			];
			const species = this.dex.species.get(set.species);
			if (unobtainables.includes(species.name)) {
				if (this.ruleTable.has(`+pokemon:${species.id}`)) return;
				return [`${set.name || set.species} does not exist in the National Dex.`];
			}
			if (species.tier === "Unreleased") {
				const basePokemon = this.toID(species.baseSpecies);
				if (this.ruleTable.has(`+pokemon:${species.id}`) || this.ruleTable.has(`+basepokemon:${basePokemon}`)) {
					return;
				}
				return [`${set.name || set.species} does not exist in the National Dex.`];
			}
			// Items other than Z-Crystals and Pokémon-specific items should be illegal
			if (!set.item) return;
			const item = this.dex.items.get(set.item);
			if (!item.isNonstandard) return;
			if ([
				'Past', 'PastMove', 'Unobtainable',
			].includes(item.isNonstandard) && !item.zMove && !item.itemUser && !item.forcedForme) {
				if (this.ruleTable.has(`+item:${item.id}`)) return;
				return [`${set.name}'s item ${item.name} does not exist in Gen ${this.dex.gen}.`];
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (target.illusion) {
				this.debug('illusion cleared');
				target.illusion = null;
				const details = target.species.name + (target.level === 100 ? '' : ', L' + target.level) +
				(target.gender === '' ? '' : ', ' + target.gender) + (target.set.shiny ? ', shiny' : '');
				this.add('replace', target, details);
				this.add('-end', target, 'Illusion');
			}
		},
		onFaint(pokemon) {
			pokemon.illusion = null;
		},
	},
	obtainable: {
		effectType: 'ValidatorRule',
		name: 'Obtainable',
		desc: "Makes sure the team is possible to obtain in-game.",
		ruleset: ['Obtainable Moves', 'Obtainable Abilities', 'Obtainable Formes', 'EV Limit = Auto', 'Obtainable Misc', 'NoFusionDupes', 'Limit One LGPE Starter'],
		banlist: ['Unreleased', 'Unobtainable', 'Nonexistent'],
		// Mostly hardcoded in team-validator.ts
		// Duplicate Fusion Code moved to 'NoFusionDupes' rule (so my NatDex AG format can allow duplicate fusions)
		onDamagingHit(damage, target, source, move) {
			if (target.illusion) {
				this.singleEvent('End', this.dex.abilities.get('Illusion'), target.abilityState, target, source, move);
			}
		},
	},
	obtainablemoves: {
		effectType: 'ValidatorRule',
		name: 'Obtainable Moves',
		desc: "Makes sure moves are learnable by the species.",
		// Hardcoded in team-validator.ts
	},
	obtainableabilities: {
		effectType: 'ValidatorRule',
		name: 'Obtainable Abilities',
		desc: "Makes sure abilities match the species.",
		// Hardcoded in team-validator.ts
	},
	obtainableformes: {
		effectType: 'ValidatorRule',
		name: 'Obtainable Formes',
		desc: "Makes sure in-battle formes only appear in-battle.",
		// Hardcoded in team-validator.ts
	},
	obtainablemisc: {
		effectType: 'ValidatorRule',
		name: 'Obtainable Misc',
		desc: "Validate all obtainability things that aren't moves/abilities (Hidden Power type, gender, IVs, events, duplicate moves).",
		// Mostly hardcoded in team-validator.ts
		onChangeSet(set) {
			const species = this.dex.species.get(set.species);

			if (species.gender) {
				if (set.gender !== species.gender) {
					set.gender = species.gender;
				}
			} else {
				if (set.gender !== 'M' && set.gender !== 'F') {
					set.gender = '';
				}
			}

			// limit one of each move
			// repealing this will not actually let you USE multiple moves, because of a cart bug:
			// https://twitter.com/DaWoblefet/status/1396217830006132737
			if (set.moves) {
				const hasMove: {[k: string]: true} = {};
				for (const moveId of set.moves) {
					const move = this.dex.moves.get(moveId);
					const moveid = move.id;
					if (hasMove[moveid]) return [`${species.baseSpecies} has multiple copies of ${move.name}.`];
					hasMove[moveid] = true;
				}
			}
		},
	},
	hoennpokedex: {
		effectType: 'ValidatorRule',
		name: 'Hoenn Pokedex',
		desc: "Only allows Pok&eacute;mon native to the Hoenn region (OR/AS)",
		onValidateSet(set, format) {
			const hoennDex = [
				"Abra", "Absol", "Aggron", "Alakazam", "Altaria", "Anorith", "Armaldo", "Aron", "Azumarill", "Azurill", "Bagon", "Baltoy", "Banette", "Barboach", "Beautifly", "Beldum", "Bellossom", "Blaziken", "Breloom", "Budew", "Cacnea", "Cacturne", "Camerupt", "Carvanha", "Cascoon", "Castform", "Chimecho", "Chinchou", "Chingling", "Clamperl", "Claydol", "Combusken", "Corphish", "Corsola", "Cradily", "Crawdaunt", "Crobat", "Delcatty", "Dodrio", "Doduo", "Donphan", "Dusclops", "Dusknoir", "Duskull", "Dustox", "Electrike", "Electrode", "Exploud", "Feebas", "Flygon", "Froslass", "Gallade", "Gardevoir", "Geodude", "Girafarig", "Glalie", "Gloom", "Golbat", "Goldeen", "Golduck", "Golem", "Gorebyss", "Graveler", "Grimer", "Grovyle", "Grumpig", "Gulpin", "Gyarados", "Hariyama", "Heracross", "Horsea", "Huntail", "Igglybuff", "Illumise", "Jigglypuff", "Kadabra", "Kecleon", "Kingdra", "Kirlia", "Koffing", "Lairon", "Lanturn", "Latias", "Latios", "Lileep", "Linoone", "Lombre", "Lotad", "Loudred", "Ludicolo", "Lunatone", "Luvdisc", "Machamp", "Machoke", "Machop", "Magcargo", "Magikarp", "Magnemite", "Magneton", "Magnezone", "Makuhita", "Manectric", "Marill", "Marshtomp", "Masquerain", "Mawile", "Medicham", "Meditite", "Metagross", "Metang", "Mightyena", "Milotic", "Minun", "Mudkip", "Muk", "Natu", "Nincada", "Ninetales", "Ninjask", "Nosepass", "Numel", "Nuzleaf", "Oddish", "Pelipper", "Phanpy", "Pichu", "Pikachu", "Pinsir", "Plusle", "Poochyena", "Probopass", "Psyduck", "Raichu", "Ralts", "Regice", "Regirock", "Registeel", "Relicanth", "Rhydon", "Rhyhorn", "Rhyperior", "Roselia", "Roserade", "Sableye", "Salamence", "Sandshrew", "Sandslash", "Sceptile", "Seadra", "Seaking", "Sealeo", "Seedot", "Seviper", "Sharpedo", "Shedinja", "Shelgon", "Shiftry", "Shroomish", "Shuppet", "Silcoon", "Skarmory", "Skitty", "Slaking", "Slakoth", "Slugma", "Snorunt", "Solrock", "Spheal", "Spinda", "Spoink", "Starmie", "Staryu", "Surskit", "Swablu", "Swalot", "Swampert", "Swellow", "Taillow", "Tentacool", "Tentacruel", "Torchic", "Torkoal", "Trapinch", "Treecko", "Tropius", "Vibrava", "Vigoroth", "Vileplume", "Volbeat", "Voltorb", "Vulpix", "Wailmer", "Wailord", "Walrein", "Weezing", "Whiscash", "Whismur", "Wigglytuff", "Wingull", "Wobbuffet", "Wurmple", "Wynaut", "Xatu", "Zangoose", "Zigzagoon", "Zubat",
			];
			const species = this.dex.species.get(set.species || set.name);
			if (!hoennDex.includes(species.baseSpecies) && !this.ruleTable.has('+' + species.id)) {
				return [species.baseSpecies + " is not in the Hoenn Pokédex."];
			}
		},
	},
	sinnohpokedex: {
		effectType: 'ValidatorRule',
		name: 'Sinnoh Pokedex',
		desc: "Only allows Pok&eacute;mon native to the Sinnoh region (Platinum)",
		onValidateSet(set, format) {
			const sinnohDex = [
				"Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup", "Empoleon", "Starly", "Staravia", "Staraptor", "Bidoof", "Bibarel", "Kricketot", "Kricketune", "Shinx", "Luxio", "Luxray", "Abra", "Kadabra", "Alakazam", "Magikarp", "Gyarados", "Budew", "Roselia", "Roserade", "Zubat", "Golbat", "Crobat", "Geodude", "Graveler", "Golem", "Onix", "Steelix", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Machop", "Machoke", "Machamp", "Psyduck", "Golduck", "Burmy", "Wormadam", "Mothim", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox", "Combee", "Vespiquen", "Pachirisu", "Buizel", "Floatzel", "Cherubi", "Cherrim", "Shellos", "Gastrodon", "Heracross", "Aipom", "Ambipom", "Drifloon", "Drifblim", "Buneary", "Lopunny", "Gastly", "Haunter", "Gengar", "Misdreavus", "Mismagius", "Murkrow", "Honchkrow", "Glameow", "Purugly", "Goldeen", "Seaking", "Barboach", "Whiscash", "Chingling", "Chimecho", "Stunky", "Skuntank", "Meditite", "Medicham", "Bronzor", "Bronzong", "Ponyta", "Rapidash", "Bonsly", "Sudowoodo", "Mime Jr.", "Mr. Mime", "Happiny", "Chansey", "Blissey", "Cleffa", "Clefairy", "Clefable", "Chatot", "Pichu", "Pikachu", "Raichu", "Hoothoot", "Noctowl", "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", "Snorlax", "Unown", "Riolu", "Lucario", "Wooper", "Quagsire", "Wingull", "Pelipper", "Girafarig", "Hippopotas", "Hippowdon", "Azurill", "Marill", "Azumarill", "Skorupi", "Drapion", "Croagunk", "Toxicroak", "Carnivine", "Remoraid", "Octillery", "Finneon", "Lumineon", "Tentacool", "Tentacruel", "Feebas", "Milotic", "Mantyke", "Mantine", "Snover", "Abomasnow", "Sneasel", "Weavile", "Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Manaphy", "Rotom", "Gligar", "Gliscor", "Nosepass", "Probopass", "Ralts", "Kirlia", "Gardevoir", "Gallade", "Lickitung", "Lickilicky", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Swablu", "Altaria", "Togepi", "Togetic", "Togekiss", "Houndour", "Houndoom", "Magnemite", "Magneton", "Magnezone", "Tangela", "Tangrowth", "Yanma", "Yanmega", "Tropius", "Rhyhorn", "Rhydon", "Rhyperior", "Duskull", "Dusclops", "Dusknoir", "Porygon", "Porygon2", "Porygon-Z", "Scyther", "Scizor", "Elekid", "Electabuzz", "Electivire", "Magby", "Magmar", "Magmortar", "Swinub", "Piloswine", "Mamoswine", "Snorunt", "Glalie", "Froslass", "Absol", "Giratina",
			];
			const species = this.dex.species.get(set.species || set.name);
			if ((!sinnohDex.includes(species.baseSpecies) || species.gen > 4) && !this.ruleTable.has('+' + species.id)) {
				return [`${species.name} is not in the Sinnoh Pokédex.`];
			}
		},
	},
	oldunovapokedex: {
		effectType: 'ValidatorRule',
		name: 'Old Unova Pokedex',
		desc: "Only allows Pok&eacute;mon native to the Unova region as of the original Black/White games",
		onValidateSet(set, format) {
			const species = this.dex.species.get(set.species || set.name);
			const isUnova = (species.num >= 494 && species.num <= 649) &&
				!['Black', 'White', 'Therian', 'Resolute'].includes(species.forme) && species.gen <= 5;
			if (!isUnova && !this.ruleTable.has('+' + species.id)) {
				return [`${species.baseSpecies} is not in the Old Unova Pokédex.`];
			}
		},
	},
	newunovapokedex: {
		effectType: 'ValidatorRule',
		name: 'New Unova Pokedex',
		desc: "Only allows Pok&eacute;mon native to the Unova region as of the Black 2/White 2 games",
		onValidateSet(set, format) {
			const unovaDex = [
				"Victini", "Snivy", "Servine", "Serperior", "Tepig", "Pignite", "Emboar", "Oshawott", "Dewott", "Samurott", "Patrat", "Watchog", "Purrloin", "Liepard", "Pidove", "Tranquill", "Unfezant", "Unfezant", "Sewaddle", "Swadloon", "Leavanny", "Sunkern", "Sunflora", "Lillipup", "Herdier", "Stoutland", "Mareep", "Flaaffy", "Ampharos", "Psyduck", "Golduck", "Azurill", "Marill", "Azumarill", "Riolu", "Lucario", "Dunsparce", "Audino", "Pansage", "Simisage", "Pansear", "Simisear", "Panpour", "Simipour", "Venipede", "Whirlipede", "Scolipede", "Koffing", "Weezing", "Magnemite", "Magneton", "Magnezone", "Growlithe", "Arcanine", "Magby", "Magmar", "Magmortar", "Elekid", "Electabuzz", "Electivire", "Rattata", "Raticate", "Zubat", "Golbat", "Crobat", "Grimer", "Muk", "Woobat", "Swoobat", "Roggenrola", "Boldore", "Gigalith", "Onix", "Steelix", "Timburr", "Gurdurr", "Conkeldurr", "Drilbur", "Excadrill", "Skitty", "Delcatty", "Buneary", "Lopunny", "Cottonee", "Whimsicott", "Petilil", "Lilligant", "Munna", "Musharna", "Cleffa", "Clefairy", "Clefable", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sandile", "Krokorok", "Krookodile", "Darumaka", "Darmanitan", "Basculin", "Basculin", "Trubbish", "Garbodor", "Minccino", "Cinccino", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Sandshrew", "Sandslash", "Dwebble", "Crustle", "Scraggy", "Scrafty", "Maractus", "Sigilyph", "Trapinch", "Vibrava", "Flygon", "Yamask", "Cofagrigus", "Tirtouga", "Carracosta", "Archen", "Archeops", "Klink", "Klang", "Klinklang", "Budew", "Roselia", "Roserade", "Gothita", "Gothorita", "Gothitelle", "Solosis", "Duosion", "Reuniclus", "Combee", "Vespiquen", "Emolga", "Heracross", "Pinsir", "Blitzle", "Zebstrika", "Buizel", "Floatzel", "Zorua", "Zoroark", "Ducklett", "Swanna", "Karrablast", "Escavalier", "Shelmet", "Accelgor", "Deerling", "Sawsbuck", "Foongus", "Amoonguss", "Castform", "Nosepass", "Probopass", "Aron", "Lairon", "Aggron", "Baltoy", "Claydol", "Larvesta", "Volcarona", "Joltik", "Galvantula", "Ferroseed", "Ferrothorn", "Tynamo", "Eelektrik", "Eelektross", "Frillish", "Jellicent", "Alomomola", "Axew", "Fraxure", "Haxorus", "Zangoose", "Seviper", "Elgyem", "Beheeyem", "Litwick", "Lampent", "Chandelure", "Heatmor", "Durant", "Cubchoo", "Beartic", "Cryogonal", "Tornadus", "Thundurus", "Landorus", "Skorupi", "Drapion", "Skarmory", "Numel", "Camerupt", "Spoink", "Grumpig", "Drifloon", "Drifblim", "Shuppet", "Banette", "Wingull", "Pelipper", "Lunatone", "Solrock", "Absol", "Tangela", "Tangrowth", "Mienfoo", "Mienshao", "Gligar", "Gliscor", "Pawniard", "Bisharp", "Cobalion", "Terrakion", "Virizion", "Tympole", "Palpitoad", "Seismitoad", "Stunfisk", "Shuckle", "Mantyke", "Mantine", "Remoraid", "Octillery", "Corsola", "Staryu", "Starmie", "Wailmer", "Wailord", "Lapras", "Spheal", "Sealeo", "Walrein", "Swablu", "Altaria", "Vulpix", "Ninetales", "Bronzor", "Bronzong", "Sneasel", "Weavile", "Delibird", "Vanillite", "Vanillish", "Vanilluxe", "Swinub", "Piloswine", "Mamoswine", "Ditto", "Beldum", "Metang", "Metagross", "Seel", "Dewgong", "Throh", "Sawk", "Bouffalant", "Druddigon", "Golett", "Golurk", "Deino", "Zweilous", "Hydreigon", "Slakoth", "Vigoroth", "Slaking", "Corphish", "Crawdaunt", "Igglybuff", "Jigglypuff", "Wigglytuff", "Lickitung", "Lickilicky", "Yanma", "Yanmega", "Tropius", "Carnivine", "Croagunk", "Toxicroak", "Larvitar", "Pupitar", "Tyranitar", "Reshiram", "Zekrom", "Kyurem", "Keldeo", "Meloetta", "Genesect",
			];
			const species = this.dex.species.get(set.species || set.name);
			const isUnova = unovaDex.includes(species.baseSpecies) && species.gen <= 5;
			if (!isUnova && !this.ruleTable.has('+' + species.id)) {
				return [`${species.baseSpecies} is not in the New Unova Pokédex.`];
			}
		},
	},
	kalospokedex: {
		effectType: 'ValidatorRule',
		name: 'Kalos Pokedex',
		desc: "Only allows Pok&eacute;mon native to the Kalos region (XY)",
		onValidateSet(set, format) {
			const kalosDex = [
				"Chespin", "Quilladin", "Chesnaught", "Fennekin", "Braixen", "Delphox", "Froakie", "Frogadier", "Greninja", "Bunnelby", "Diggersby", "Zigzagoon", "Linoone", "Fletchling", "Fletchinder", "Talonflame", "Pidgey", "Pidgeotto", "Pidgeot", "Scatterbug", "Spewpa", "Vivillon", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pansage", "Simisage", "Pansear", "Simisear", "Panpour", "Simipour", "Pichu", "Pikachu", "Raichu", "Bidoof", "Bibarel", "Dunsparce", "Azurill", "Marill", "Azumarill", "Burmy", "Wormadam", "Mothim", "Surskit", "Masquerain", "Magikarp", "Gyarados", "Corphish", "Crawdaunt", "Goldeen", "Seaking", "Carvanha", "Sharpedo", "Litleo", "Pyroar", "Psyduck", "Golduck", "Farfetch\u2019d", "Riolu", "Lucario", "Ralts", "Kirlia", "Gardevoir", "Gallade", "Flabe\u0301be\u0301", "Floette", "Florges", "Budew", "Roselia", "Roserade", "Ledyba", "Ledian", "Combee", "Vespiquen", "Skitty", "Delcatty", "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Skiddo", "Gogoat", "Pancham", "Pangoro", "Furfrou", "Doduo", "Dodrio", "Plusle", "Minun", "Gulpin", "Swalot", "Scraggy", "Scrafty", "Abra", "Kadabra", "Alakazam", "Oddish", "Gloom", "Vileplume", "Bellossom", "Sentret", "Furret", "Nincada", "Ninjask", "Shedinja", "Espurr", "Meowstic", "Kecleon", "Honedge", "Doublade", "Aegislash", "Venipede", "Whirlipede", "Scolipede", "Audino", "Smeargle", "Croagunk", "Toxicroak", "Ducklett", "Swanna", "Spritzee", "Aromatisse", "Swirlix", "Slurpuff", "Volbeat", "Illumise", "Hoppip", "Skiploom", "Jumpluff", "Munchlax", "Snorlax", "Whismur", "Loudred", "Exploud", "Meditite", "Medicham", "Zubat", "Golbat", "Crobat", "Axew", "Fraxure", "Haxorus", "Diancie", "Hoopa", "Volcanion",
				"Drifloon", "Drifblim", "Mienfoo", "Mienshao", "Zangoose", "Seviper", "Spoink", "Grumpig", "Absol", "Inkay", "Malamar", "Lunatone", "Solrock", "Bagon", "Shelgon", "Salamence", "Wingull", "Pelipper", "Taillow", "Swellow", "Binacle", "Barbaracle", "Dwebble", "Crustle", "Tentacool", "Tentacruel", "Wailmer", "Wailord", "Luvdisc", "Skrelp", "Dragalge", "Clauncher", "Clawitzer", "Staryu", "Starmie", "Shellder", "Cloyster", "Qwilfish", "Horsea", "Seadra", "Kingdra", "Relicanth", "Sandile", "Krokorok", "Krookodile", "Helioptile", "Heliolisk", "Hippopotas", "Hippowdon", "Rhyhorn", "Rhydon", "Rhyperior", "Onix", "Steelix", "Woobat", "Swoobat", "Machop", "Machoke", "Machamp", "Cubone", "Marowak", "Kangaskhan", "Mawile", "Tyrunt", "Tyrantrum", "Amaura", "Aurorus", "Aerodactyl", "Ferroseed", "Ferrothorn", "Snubbull", "Granbull", "Electrike", "Manectric", "Houndour", "Houndoom", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon", "Emolga", "Yanma", "Yanmega", "Hawlucha", "Sigilyph", "Golett", "Golurk", "Nosepass", "Probopass", "Makuhita", "Hariyama", "Throh", "Sawk", "Starly", "Staravia", "Staraptor", "Stunky", "Skuntank", "Nidoran-F", "Nidorina", "Nidoqueen", "Nidoran-M", "Nidorino", "Nidoking", "Dedenne", "Chingling", "Chimecho", "Mime Jr.", "Mr. Mime", "Solosis", "Duosion", "Reuniclus", "Wynaut", "Wobbuffet", "Roggenrola", "Boldore", "Gigalith", "Sableye", "Carbink", "Tauros", "Miltank", "Mareep", "Flaaffy", "Ampharos", "Pinsir", "Heracross", "Pachirisu", "Slowpoke", "Slowbro", "Slowking", "Exeggcute", "Exeggutor", "Chatot", "Mantyke", "Mantine", "Clamperl", "Huntail", "Gorebyss", "Remoraid", "Octillery", "Corsola", "Chinchou", "Lanturn", "Alomomola", "Lapras", "Articuno", "Zapdos", "Moltres",
				"Diglett", "Dugtrio", "Trapinch", "Vibrava", "Flygon", "Gible", "Gabite", "Garchomp", "Geodude", "Graveler", "Golem", "Slugma", "Magcargo", "Shuckle", "Skorupi", "Drapion", "Wooper", "Quagsire", "Goomy", "Sliggoo", "Goodra", "Karrablast", "Escavalier", "Shelmet", "Accelgor", "Bellsprout", "Weepinbell", "Victreebel", "Carnivine", "Gastly", "Haunter", "Gengar", "Poliwag", "Poliwhirl", "Poliwrath", "Politoed", "Ekans", "Arbok", "Stunfisk", "Barboach", "Whiscash", "Purrloin", "Liepard", "Poochyena", "Mightyena", "Patrat", "Watchog", "Pawniard", "Bisharp", "Klefki", "Murkrow", "Honchkrow", "Foongus", "Amoonguss", "Lotad", "Lombre", "Ludicolo", "Buizel", "Floatzel", "Basculin", "Phantump", "Trevenant", "Pumpkaboo", "Gourgeist", "Litwick", "Lampent", "Chandelure", "Rotom", "Magnemite", "Magneton", "Magnezone", "Voltorb", "Electrode", "Trubbish", "Garbodor", "Swinub", "Piloswine", "Mamoswine", "Bergmite", "Avalugg", "Cubchoo", "Beartic", "Smoochum", "Jynx", "Vanillite", "Vanillish", "Vanilluxe", "Snover", "Abomasnow", "Delibird", "Sneasel", "Weavile", "Timburr", "Gurdurr", "Conkeldurr", "Torkoal", "Sandshrew", "Sandslash", "Aron", "Lairon", "Aggron", "Larvitar", "Pupitar", "Tyranitar", "Heatmor", "Durant", "Spinarak", "Ariados", "Spearow", "Fearow", "Cryogonal", "Skarmory", "Noibat", "Noivern", "Gligar", "Gliscor", "Hoothoot", "Noctowl", "Igglybuff", "Jigglypuff", "Wigglytuff", "Shuppet", "Banette", "Zorua", "Zoroark", "Gothita", "Gothorita", "Gothitelle", "Bonsly", "Sudowoodo", "Spinda", "Teddiursa", "Ursaring", "Lickitung", "Lickilicky", "Scyther", "Scizor", "Ditto", "Swablu", "Altaria", "Druddigon", "Deino", "Zweilous", "Hydreigon", "Dratini", "Dragonair", "Dragonite", "Xerneas", "Yveltal", "Zygarde", "Mewtwo",
			];
			const species = this.dex.species.get(set.species || set.name);
			if ((!kalosDex.includes(species.baseSpecies) || species.gen > 6) && !this.ruleTable.has('+' + species.id)) {
				return [`${species.name} is not in the Kalos Pokédex.`];
			}
		},
	},
	oldalolapokedex: {
		effectType: 'ValidatorRule',
		name: 'Old Alola Pokedex',
		desc: "Only allows Pok&eacute;mon native to the Alola region (SUMO)",
		banlist: ['Pikachu-Partner', 'Marowak-Alola-Totem', 'Ribombee-Totem', 'Araquanid-Totem', 'Lycanroc-Dusk', 'Necrozma-Dusk-Mane', 'Necrozma-Dawn-Wings'],
		onValidateSet(set, format) {
			const alolaDex = [
				"Rowlet", "Dartrix", "Decidueye", "Litten", "Torracat", "Incineroar", "Popplio", "Brionne", "Primarina", "Pikipek", "Trumbeak", "Toucannon", "Yungoos", "Gumshoos", "Rattata-Alola", "Raticate-Alola", "Caterpie", "Metapod", "Butterfree", "Ledyba", "Ledian", "Spinarak", "Ariados", "Pichu", "Pikachu", "Raichu-Alola", "Grubbin", "Charjabug", "Vikavolt", "Bonsly", "Sudowoodo", "Happiny", "Chansey", "Blissey", "Munchlax", "Snorlax", "Slowpoke", "Slowbro", "Slowking", "Wingull", "Pelipper", "Abra", "Kadabra", "Alakazam", "Meowth-Alola", "Persian-Alola", "Magnemite", "Magneton", "Magnezone", "Grimer-Alola", "Muk-Alola", "Growlithe", "Arcanine", "Drowzee", "Hypno", "Makuhita", "Hariyama", "Smeargle", "Crabrawler", "Crabominable", "Gastly", "Haunter", "Gengar", "Drifloon", "Drifblim", "Misdreavus", "Mismagius", "Zubat", "Golbat", "Crobat", "Diglett-Alola", "Dugtrio-Alola", "Spearow", "Fearow", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Mankey", "Primeape", "Delibird", "Oricorio", "Cutiefly", "Ribombee", "Petilil", "Lilligant", "Cottonee", "Whimsicott", "Psyduck", "Golduck", "Magikarp", "Gyarados", "Barboach", "Whiscash", "Machop", "Machoke", "Machamp", "Roggenrola", "Boldore", "Gigalith", "Carbink", "Sableye", "Rockruff", "Lycanroc", "Spinda", "Tentacool", "Tentacruel", "Finneon", "Lumineon", "Wishiwashi", "Luvdisc", "Corsola", "Mareanie", "Toxapex", "Shellder", "Cloyster", "Bagon", "Shelgon", "Salamence", "Lillipup", "Herdier", "Stoutland", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon", "Mudbray", "Mudsdale", "Igglybuff", "Jigglypuff", "Wigglytuff", "Tauros", "Miltank", "Surskit", "Masquerain", "Dewpider", "Araquanid", "Fomantis", "Lurantis", "Morelull", "Shiinotic", "Paras", "Parasect", "Poliwag", "Poliwhirl", "Poliwrath", "Politoed", "Goldeen", "Seaking", "Feebas", "Milotic", "Alomomola", "Fletchling", "Fletchinder", "Talonflame", "Salandit", "Salazzle", "Cubone", "Marowak-Alola", "Kangaskhan", "Magby", "Magmar", "Magmortar", "Stufful", "Bewear", "Bounsweet", "Steenee", "Tsareena", "Comfey", "Pinsir", "Oranguru", "Passimian", "Goomy", "Sliggoo", "Goodra", "Castform", "Wimpod", "Golisopod", "Staryu", "Starmie", "Sandygast", "Palossand", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Archen", "Archeops", "Tirtouga", "Carracosta", "Phantump", "Trevenant", "Nosepass", "Probopass", "Pyukumuku", "Chinchou", "Lanturn", "Type: Null", "Silvally", "Zygarde", "Trubbish", "Garbodor", "Skarmory", "Ditto", "Cleffa", "Clefairy", "Clefable", "Minior", "Beldum", "Metang", "Metagross", "Porygon", "Porygon2", "Porygon-Z", "Pancham", "Pangoro", "Komala", "Torkoal", "Turtonator", "Togedemaru", "Elekid", "Electabuzz", "Electivire", "Geodude-Alola", "Graveler-Alola", "Golem-Alola", "Sandile", "Krokorok", "Krookodile", "Trapinch", "Vibrava", "Flygon", "Gible", "Gabite", "Garchomp", "Klefki", "Mimikyu", "Bruxish", "Drampa", "Absol", "Snorunt", "Glalie", "Froslass", "Sneasel", "Weavile", "Sandshrew-Alola", "Sandslash-Alola", "Vulpix-Alola", "Ninetales-Alola", "Vanillite", "Vanillish", "Vanilluxe", "Snubbull", "Granbull", "Shellos", "Gastrodon", "Relicanth", "Dhelmise", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Lapras", "Exeggcute", "Exeggutor-Alola", "Jangmo-o", "Hakamo-o", "Kommo-o", "Emolga", "Scyther", "Scizor", "Murkrow", "Honchkrow", "Riolu", "Lucario", "Dratini", "Dragonair", "Dragonite", "Aerodactyl", "Tapu Koko", "Tapu Lele", "Tapu Bulu", "Tapu Fini", "Cosmog", "Cosmoem", "Solgaleo", "Lunala", "Nihilego", "Buzzwole", "Pheromosa", "Xurkitree", "Celesteela", "Kartana", "Guzzlord", "Necrozma", "Magearna", "Marshadow",
			];
			const species = this.dex.species.get(set.species || set.name);
			if (!alolaDex.includes(species.baseSpecies) && !alolaDex.includes(species.name) &&
				!this.ruleTable.has('+' + species.id)) {
				return [`${species.baseSpecies} is not in the Old Alola Pokédex.`];
			}
		},
	},
	newalolapokedex: {
		effectType: 'ValidatorRule',
		name: 'New Alola Pokedex',
		desc: "Only allows Pok&eacute;mon native to the Alola region (US/UM)",
		onValidateSet(set, format) {
			const alolaDex = [
				"Rowlet", "Dartrix", "Decidueye", "Litten", "Torracat", "Incineroar", "Popplio", "Brionne", "Primarina", "Pikipek", "Trumbeak", "Toucannon", "Yungoos", "Gumshoos", "Rattata-Alola", "Raticate-Alola", "Caterpie", "Metapod", "Butterfree", "Ledyba", "Ledian", "Spinarak", "Ariados", "Buneary", "Lopunny", "Inkay", "Malamar", "Zorua", "Zoroark", "Furfrou", "Pichu", "Pikachu", "Raichu-Alola", "Grubbin", "Charjabug", "Vikavolt", "Bonsly", "Sudowoodo", "Happiny", "Chansey", "Blissey", "Munchlax", "Snorlax", "Slowpoke", "Slowbro", "Slowking", "Wingull", "Pelipper", "Abra", "Kadabra", "Alakazam", "Meowth-Alola", "Persian-Alola", "Magnemite", "Magneton", "Magnezone", "Grimer-Alola", "Muk-Alola", "Mime Jr.", "Mr. Mime", "Ekans", "Arbok", "Dunsparce", "Growlithe", "Arcanine", "Drowzee", "Hypno", "Makuhita", "Hariyama", "Smeargle", "Crabrawler", "Crabominable", "Gastly", "Haunter", "Gengar", "Drifloon", "Drifblim", "Murkrow", "Honchkrow", "Zubat", "Golbat", "Crobat", "Noibat", "Noivern", "Diglett-Alola", "Dugtrio-Alola", "Spearow", "Fearow", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Mankey", "Primeape", "Delibird", "Hawlucha", "Oricorio", "Cutiefly", "Ribombee", "Flabe\u0301be\u0301", "Floette", "Florges", "Petilil", "Lilligant", "Cottonee", "Whimsicott", "Psyduck", "Golduck", "Smoochum", "Jynx", "Magikarp", "Gyarados", "Barboach", "Whiscash", "Seal", "Dewgong", "Machop", "Machoke", "Machamp", "Roggenrola", "Boldore", "Gigalith", "Carbink", "Sableye", "Mawile", "Rockruff", "Lycanroc", "Spinda", "Tentacool", "Tentacruel", "Finneon", "Lumineon", "Wishiwashi", "Luvdisc", "Corsola", "Mareanie", "Toxapex", "Shellder", "Cloyster", "Clamperl", "Huntail", "Gorebyss", "Remoraid", "Octillery", "Mantyke", "Mantine", "Bagon", "Shelgon", "Salamence", "Lillipup", "Herdier", "Stoutland", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon", "Mareep", "Flaaffy", "Ampharos", "Mudbray", "Mudsdale", "Igglybuff", "Jigglypuff", "Wigglytuff", "Tauros", "Miltank", "Surskit", "Masquerain", "Dewpider", "Araquanid", "Fomantis", "Lurantis", "Morelull", "Shiinotic", "Paras", "Parasect", "Poliwag", "Poliwhirl", "Poliwrath", "Politoed", "Goldeen", "Seaking", "Basculin", "Feebas", "Milotic", "Alomomola", "Fletchling", "Fletchinder", "Talonflame", "Salandit", "Salazzle", "Cubone", "Marowak-Alola", "Kangaskhan", "Magby", "Magmar", "Magmortar", "Larvesta", "Volcarona", "Stufful", "Bewear", "Bounsweet", "Steenee", "Tsareena", "Comfey", "Pinsir", "Hoothoot", "Noctowl", "Kecleon", "Oranguru", "Passimian", "Goomy", "Sliggoo", "Goodra", "Castform", "Wimpod", "Golisopod", "Staryu", "Starmie", "Sandygast", "Palossand", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Lileep", "Cradily", "Anorith", "Armaldo", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Tirtouga", "Carracosta", "Archen", "Archeops", "Tyrunt", "Tyrantrum", "Amaura", "Aurorus", "Pupitar", "Larvitar", "Tyranitar", "Phantump", "Trevenant", "Natu", "Xatu", "Nosepass", "Probopass", "Pyukumuku", "Chinchou", "Lanturn", "Type: Null", "Silvally", "Poipole", "Naganadel", "Zygarde", "Trubbish", "Garbodor", "Minccino", "Cinccino", "Pineco", "Forretress", "Skarmory", "Ditto", "Cleffa", "Clefairy", "Clefable", "Elgyem", "Beheeyem", "Minior", "Beldum", "Metang", "Metagross", "Porygon", "Porygon2", "Porygon-Z", "Pancham", "Pangoro", "Komala", "Torkoal", "Turtonator", "Houndour", "Houndoom", "Dedenne", "Togedemaru", "Electrike", "Manectric", "Elekid", "Electabuzz", "Electivire", "Geodude-Alola", "Graveler-Alola", "Golem-Alola", "Sandile", "Krokorok", "Krookodile", "Trapinch", "Vibrava", "Flygon", "Gible", "Gabite", "Garchomp", "Baltoy", "Claydol", "Golett", "Golurk", "Klefki", "Mimikyu", "Shuppet", "Banette", "Frillish", "Jellicent", "Bruxish", "Drampa", "Absol", "Snorunt", "Glalie", "Froslass", "Sneasel", "Weavile", "Sandshrew-Alola", "Sandslash-Alola", "Vulpix-Alola", "Ninetales-Alola", "Vanillite", "Vanillish", "Vanilluxe", "Scraggy", "Scrafty", "Pawniard", "Bisharp", "Snubbull", "Granbull", "Shellos", "Gastrodon", "Relicanth", "Dhelmise", "Carvanha", "Sharpedo", "Skrelp", "Dragalge", "Clauncher", "Clawitzer", "Wailmer", "Wailord", "Lapras", "Tropius", "Exeggcute", "Exeggutor-Alola", "Corphish", "Crawdaunt", "Mienfoo", "Mienshao", "Jangmo-o", "Hakamo-o", "Kommo-o", "Emolga", "Scyther", "Scizor", "Heracross", "Aipom", "Ampibom", "Litleo", "Pyroar", "Misdreavus", "Mismagius", "Druddigon", "Lickitung", "Lickilicky", "Riolu", "Lucario", "Dratini", "Dragonair", "Dragonite", "Aerodactyl", "Tapu Koko", "Tapu Lele", "Tapu Bulu", "Tapu Fini", "Cosmog", "Cosmoem", "Solgaleo", "Lunala", "Nihilego", "Stakataka", "Blacephalon", "Buzzwole", "Pheromosa", "Xurkitree", "Celesteela", "Kartana", "Guzzlord", "Necrozma", "Magearna", "Marshadow", "Zeraora",
			];
			const species = this.dex.species.get(set.species || set.name);
			if (!alolaDex.includes(species.baseSpecies) && !alolaDex.includes(species.name) &&
				!this.ruleTable.has('+' + species.id)) {
				return [`${species.baseSpecies} is not in the New Alola Pokédex.`];
			}
		},
	},
	galarpokedex: {
		effectType: 'ValidatorRule',
		name: 'Galar Pokedex',
		desc: "Only allows Pok&eacute;mon native to the Galar region (Sw/Sh)",
		banlist: ['Raichu-Alola', 'Weezing-Base'],
		onValidateSet(set, format) {
			const galarDex = [
				"Grookey", "Thwackey", "Rillaboom", "Scorbunny", "Raboot", "Cinderace", "Sobble", "Drizzile", "Inteleon", "Blipbug", "Dottler", "Orbeetle", "Caterpie", "Metapod", "Butterfree", "Grubbin", "Charjabug", "Vikavolt", "Hoothoot", "Noctowl", "Rookidee", "Corvisquire", "Corviknight", "Skwovet", "Greedent", "Pidove", "Tranquill", "Unfezant", "Nickit", "Thievul", "Zigzagoon", "Linoone", "Obstagoon", "Wooloo", "Dubwool", "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Chewtle", "Drednaw", "Purrloin", "Liepard", "Yamper", "Boltund", "Bunnelby", "Diggersby", "Minccino", "Cinccino", "Bounsweet", "Steenee", "Tsareena", "Oddish", "Gloom", "Vileplume", "Bellossom", "Budew", "Roselia", "Roserade", "Wingull", "Pelipper", "Joltik", "Galvantula", "Electrike", "Manectric", "Vulpix", "Ninetales", "Growlithe", "Arcanine", "Vanillite", "Vanillish", "Vanilluxe", "Swinub", "Piloswine", "Mamoswine", "Delibird", "Snorunt", "Glalie", "Froslass", "Baltoy", "Claydol", "Mudbray", "Mudsdale", "Dwebble", "Crustle", "Golett", "Golurk", "Munna", "Musharna", "Natu", "Xatu", "Stufful", "Bewear", "Snover", "Abomasnow", "Krabby", "Kingler", "Wooper", "Quagsire", "Corphish", "Crawdaunt", "Nincada", "Ninjask", "Shedinja", "Tyrogue", "Hitmonlee", "Hitmonchan", "Hitmontop", "Pancham", "Pangoro", "Klink", "Klang", "Klinklang", "Combee", "Vespiquen", "Bronzor", "Bronzong", "Ralts", "Kirlia", "Gardevoir", "Gallade", "Drifloon", "Drifblim", "Gossifleur", "Eldegoss", "Cherubi", "Cherrim", "Stunky", "Skuntank", "Tympole", "Palpitoad", "Seismitoad", "Duskull", "Dusclops", "Dusknoir", "Machop", "Machoke", "Machamp", "Gastly", "Haunter", "Gengar", "Magikarp", "Gyarados", "Goldeen", "Seaking", "Remoraid", "Octillery", "Shellder", "Cloyster", "Feebas", "Milotic", "Basculin", "Wishiwashi", "Pyukumuku", "Trubbish", "Garbodor", "Sizzlipede", "Centiskorch", "Rolycoly", "Carkol", "Coalossal", "Diglett", "Dugtrio", "Drilbur", "Excadrill", "Roggenrola", "Boldore", "Gigalith", "Timburr", "Gurdurr", "Conkeldurr", "Woobat", "Swoobat", "Noibat", "Noivern", "Onix", "Steelix", "Arrokuda", "Barraskewda", "Meowth", "Perrserker", "Persian", "Milcery", "Alcremie", "Cutiefly", "Ribombee", "Ferroseed", "Ferrothorn", "Pumpkaboo", "Gourgeist", "Pichu", "Pikachu", "Raichu", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon", "Applin", "Flapple", "Appletun", "Espurr", "Meowstic", "Swirlix", "Slurpuff", "Spritzee", "Aromatisse", "Dewpider", "Araquanid", "Wynaut", "Wobbuffet", "Farfetch\u2019d", "Sirfetch\u2019d", "Chinchou", "Lanturn", "Croagunk", "Toxicroak", "Scraggy", "Scrafty", "Stunfisk", "Shuckle", "Barboach", "Whiscash", "Shellos", "Gastrodon", "Wimpod", "Golisopod", "Binacle", "Barbaracle", "Corsola", "Cursola", "Impidimp", "Morgrem", "Grimmsnarl", "Hatenna", "Hattrem", "Hatterene", "Salandit", "Salazzle", "Pawniard", "Bisharp", "Throh", "Sawk", "Koffing", "Weezing", "Bonsly", "Sudowoodo", "Cleffa", "Clefairy", "Clefable", "Togepi", "Togetic", "Togekiss", "Munchlax", "Snorlax", "Cottonee", "Whimsicott", "Rhyhorn", "Rhydon", "Rhyperior", "Gothita", "Gothorita", "Gothitelle", "Solosis", "Duosion", "Reuniclus", "Karrablast", "Escavalier", "Shelmet", "Accelgor", "Elgyem", "Beheeyem", "Cubchoo", "Beartic", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Skorupi", "Drapion", "Litwick", "Lampent", "Chandelure", "Inkay", "Malamar", "Sneasel", "Weavile", "Sableye", "Mawile", "Maractus", "Sigilyph", "Riolu", "Lucario", "Torkoal", "Mimikyu", "Cufant", "Copperajah", "Qwilfish", "Frillish", "Jellicent", "Mareanie", "Toxapex", "Cramorant", "Toxel", "Toxtricity", "Toxtricity-Low-Key", "Silicobra", "Sandaconda", "Hippopotas", "Hippowdon", "Durant", "Heatmor", "Helioptile", "Heliolisk", "Hawlucha", "Trapinch", "Vibrava", "Flygon", "Axew", "Fraxure", "Haxorus", "Yamask", "Runerigus", "Cofagrigus", "Honedge", "Doublade", "Aegislash", "Ponyta", "Rapidash", "Sinistea", "Polteageist", "Indeedee", "Phantump", "Trevenant", "Morelull", "Shiinotic", "Oranguru", "Passimian", "Morpeko", "Falinks", "Drampa", "Turtonator", "Togedemaru", "Snom", "Frosmoth", "Clobbopus", "Grapploct", "Pincurchin", "Mantyke", "Mantine", "Wailmer", "Wailord", "Bergmite", "Avalugg", "Dhelmise", "Lapras", "Lunatone", "Solrock", "Mime Jr.", "Mr. Mime", "Mr. Rime", "Darumaka", "Darmanitan", "Stonjourner", "Eiscue", "Duraludon", "Rotom", "Ditto", "Dracozolt", "Arctozolt", "Dracovish", "Arctovish", "Charmander", "Charmeleon", "Charizard", "Type: Null", "Silvally", "Larvitar", "Pupitar", "Tyranitar", "Deino", "Zweilous", "Hydreigon", "Goomy", "Sliggoo", "Goodra", "Jangmo-o", "Hakamo-o", "Kommo-o", "Dreepy", "Drakloak", "Dragapult",
			];
			const species = this.dex.species.get(set.species || set.name);
			if (!galarDex.includes(species.baseSpecies) && !galarDex.includes(species.name) &&
				!this.ruleTable.has('+' + species.id)) {
				return [`${species.baseSpecies} is not in the Galar Pokédex.`];
			}
		},
	},
	isleofarmorpokedex: {
		effectType: 'ValidatorRule',
		name: 'Isle of Armor Pokedex',
		desc: "Only allows Pok&eacute;mon native to the Isle of Armor in the Galar Region (Sw/Sh DLC1)",
		onValidateSet(set, format) {
			const ioaDex = [
				"Slowpoke", "Slowbro", "Slowking", "Buneary", "Lopunny", "Happiny", "Chansey", "Blissey", "Skwovet", "Greedent", "Igglybuff", "Jigglypuff", "Wigglytuff", "Blipbug", "Dottler", "Fomantis", "Lurantis", "Applin", "Flapple", "Appletun", "Fletchling", "Fletchinder", "Talonflame", "Shinx", "Luxio", "Luxray", "Klefki", "Pawniard", "Bisharp", "Abra", "Kadabra", "Alakazam", "Ralts", "Kirlia", "Gardevoir", "Gallade", "Krabby", "Kingler", "Tentacool", "Tentacruel", "Magikarp", "Gyarados", "Remoraid", "Octillery", "Mantyke", "Mantine", "Wingull", "Pelipper", "Skorupi", "Drapion", "Dunsparce", "Bouffalant", "Lickitung", "Lickilicky", "Chewtle", "Drednaw", "Wooper", "Quagsire", "Goomy", "Sliggoo", "Goodra", "Druddigon", "Shelmet", "Accelgor", "Karrablast", "Escavalier", "Bulbasaur", "Ivysaur", "Venusaur", "Squirtle", "Wartortle", "Blastoise", "Venipede", "Whirlipede", "Scolipede", "Foongus", "Amoonguss", "Comfey", "Tangela", "Tangrowth", "Croagunk", "Toxicroak", "Pichu", "Pikachu", "Raichu", "Zorua", "Zoroark", "Oranguru", "Passimian", "Corphish", "Crawdaunt", "Cramorant", "Goldeen", "Seaking", "Arrokuda", "Barraskewda", "Staryu", "Starmie", "Kubfu", "Urshifu", "Emolga", "Dedenne", "Morpeko", "Magnemite", "Magneton", "Magnezone", "Inkay", "Malamar", "Wishiwashi", "Carvanha", "Sharpedo", "Lillipup", "Herdier", "Stoutland", "Tauros", "Miltank", "Scyther", "Scizor", "Pinsir", "Heracross", "Dwebble", "Crustle", "Wimpod", "Golisopod", "Pincurchin", "Mareanie", "Toxapex", "Clobbopus", "Grapploct", "Shellder", "Cloyster", "Sandygast", "Palossand", "Drifloon", "Drifblim", "Barboach", "Whiscash", "Azurill", "Marill", "Azumarill", "Poliwag", "Poliwhirl", "Poliwrath", "Politoed", "Psyduck", "Golduck", "Whismur", "Loudred", "Exploud", "Woobat", "Swoobat", "Skarmory", "Roggenrola", "Boldore", "Gigalith", "Rockruff", "Lycanroc", "Salandit", "Salazzle", "Scraggy", "Scrafty", "Mienfoo", "Mienshao", "Jangmo-o", "Hakamo-o", "Kommo-o", "Sandshrew", "Sandslash", "Cubone", "Marowak", "Kangaskhan", "Torkoal", "Silicobra", "Sandaconda", "Sandile", "Krokorok", "Krookodile", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Rhyhorn", "Rhydon", "Rhyperior", "Larvesta", "Volcarona", "Chinchou", "Lanturn", "Wailmer", "Wailord", "Frillish", "Jellicent", "Skrelp", "Dragalge", "Clauncher", "Clawitzer", "Horsea", "Seadra", "Kingdra", "Petilil", "Lilligant", "Combee", "Vespiquen", "Exeggcute", "Exeggutor", "Ditto", "Porygon", "Porygon2", "Porygon-Z",
			];
			const species = this.dex.species.get(set.species || set.name);
			if (!ioaDex.includes(species.baseSpecies) && !ioaDex.includes(species.name) &&
				!this.ruleTable.has('+' + species.id)) {
				return [`${species.baseSpecies} is not in the Isle of Armor Pokédex.`];
			}
		},
	},
	crowntundrapokedex: {
		effectType: 'ValidatorRule',
		name: 'Crown Tundra Pokedex',
		desc: "Only allows Pok&eacute;mon native to the Crown Tundra in the Galar Region (Sw/Sh DLC2)",
		onValidateSet(set, format) {
			const tundraDex = [
				"Nidoran-F", "Nidorina", "Nidoqueen", "Nidoran-M", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Zubat", "Golbat", "Ponyta", "Rapidash", "Mr. Mime", "Jynx", "Electabuzz", "Magmar", "Magikarp", "Gyarados", "Lapras", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Crobat", "Cleffa", "Espeon", "Umbreon", "Shuckle", "Sneasel", "Swinub", "Piloswine", "Delibird", "Smoochum", "Elekid", "Magby", "Larvitar", "Pupitar", "Tyranitar", "Zigzagoon", "Linoone", "Sableye", "Mawile", "Aron", "Lairon", "Aggron", "Swablu", "Altaria", "Barboach", "Whiscash", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Absol", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Relicanth", "Bagon", "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Bronzor", "Bronzong", "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", "Riolu", "Lucario", "Snover", "Abomasnow", "Weavile", "Electivire", "Magmortar", "Leafeon", "Glaceon", "Mamoswine", "Froslass", "Audino", "Timburr", "Gurdurr", "Conkeldurr", "Cottonee", "Whimsicott", "Basculin", "Darumaka", "Darmanitan", "Tirtouga", "Carracosta", "Archen", "Archeops", "Gothita", "Gothorita", "Gothitelle", "Solosis", "Duosion", "Reuniclus", "Vanillite", "Vanillish", "Vanilluxe", "Karrablast", "Escavalier", "Joltik", "Galvantula", "Ferroseed", "Ferrothorn", "Litwick", "Lampent", "Chandelure", "Cubchoo", "Beartic", "Cryogonal", "Shelmet", "Accelgor", "Druddigon", "Golett", "Golurk", "Heatmor", "Durant", "Deino", "Zweilous", "Hydreigon", "Cobalion", "Terrakion", "Virizion", "Tyrunt", "Tyrantrum", "Amaura", "Aurorus", "Sylveon", "Carbink", "Phantump", "Trevenant", "Bergmite", "Avalugg", "Noibat", "Noivern", "Dewpider", "Araquanid", "Mimikyu", "Dhelmise", "Skwovet", "Greedent", "Rookidee", "Corvisquire", "Corviknight", "Gossifleur", "Eldegoss", "Wooloo", "Dubwool", "Yamper", "Boltund", "Rolycoly", "Carkol", "Coalossal", "Sizzlipede", "Centiskorch", "Sinistea", "Polteageist", "Hatenna", "Hattrem", "Hatterene", "Impidimp", "Morgrem", "Grimmsnarl", "Obstagoon", "Mr. Rime", "Pincurchin", "Snom", "Frosmoth", "Stonjourner", "Eiscue", "Indeedee", "Morpeko", "Cufant", "Copperajah", "Dreepy", "Drakloak", "Dragapult", "Regieleki", "Regidrago", "Glastrier", "Spectrier",
			];
			const species = this.dex.species.get(set.species || set.name);
			if (!tundraDex.includes(species.baseSpecies) && !tundraDex.includes(species.name)) {
				return [`${species.baseSpecies} is not in the Crown Tundra Pokédex.`];
			}
		},
	},
	galarexpansionpokedex: {
		effectType: 'ValidatorRule',
		name: 'Galar Expansion Pokedex',
		desc: "Only allows Pok&eacute;mon native to the Galar region, Isle of Armor, or Crown Tundra (Sw/Sh + Expansion Pass)",
		onValidateSet(set, format) {
			const galarDex = [
				"Grookey", "Thwackey", "Rillaboom", "Scorbunny", "Raboot", "Cinderace", "Sobble", "Drizzile", "Inteleon", "Blipbug", "Dottler", "Orbeetle", "Caterpie", "Metapod", "Butterfree", "Grubbin", "Charjabug", "Vikavolt", "Hoothoot", "Noctowl", "Rookidee", "Corvisquire", "Corviknight", "Skwovet", "Greedent", "Pidove", "Tranquill", "Unfezant", "Nickit", "Thievul", "Zigzagoon", "Linoone", "Obstagoon", "Wooloo", "Dubwool", "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Chewtle", "Drednaw", "Purrloin", "Liepard", "Yamper", "Boltund", "Bunnelby", "Diggersby", "Minccino", "Cinccino", "Bounsweet", "Steenee", "Tsareena", "Oddish", "Gloom", "Vileplume", "Bellossom", "Budew", "Roselia", "Roserade", "Wingull", "Pelipper", "Joltik", "Galvantula", "Electrike", "Manectric", "Vulpix", "Ninetales", "Growlithe", "Arcanine", "Vanillite", "Vanillish", "Vanilluxe", "Swinub", "Piloswine", "Mamoswine", "Delibird", "Snorunt", "Glalie", "Froslass", "Baltoy", "Claydol", "Mudbray", "Mudsdale", "Dwebble", "Crustle", "Golett", "Golurk", "Munna", "Musharna", "Natu", "Xatu", "Stufful", "Bewear", "Snover", "Abomasnow", "Krabby", "Kingler", "Wooper", "Quagsire", "Corphish", "Crawdaunt", "Nincada", "Ninjask", "Shedinja", "Tyrogue", "Hitmonlee", "Hitmonchan", "Hitmontop", "Pancham", "Pangoro", "Klink", "Klang", "Klinklang", "Combee", "Vespiquen", "Bronzor", "Bronzong", "Ralts", "Kirlia", "Gardevoir", "Gallade", "Drifloon", "Drifblim", "Gossifleur", "Eldegoss", "Cherubi", "Cherrim", "Stunky", "Skuntank", "Tympole", "Palpitoad", "Seismitoad", "Duskull", "Dusclops", "Dusknoir", "Machop", "Machoke", "Machamp", "Gastly", "Haunter", "Gengar", "Magikarp", "Gyarados", "Goldeen", "Seaking", "Remoraid", "Octillery", "Shellder", "Cloyster", "Feebas", "Milotic", "Basculin", "Wishiwashi", "Pyukumuku", "Trubbish", "Garbodor", "Sizzlipede", "Centiskorch", "Rolycoly", "Carkol", "Coalossal", "Diglett", "Dugtrio", "Drilbur", "Excadrill", "Roggenrola", "Boldore", "Gigalith", "Timburr", "Gurdurr", "Conkeldurr", "Woobat", "Swoobat", "Noibat", "Noivern", "Onix", "Steelix", "Arrokuda", "Barraskewda", "Meowth", "Perrserker", "Persian", "Milcery", "Alcremie", "Cutiefly", "Ribombee", "Ferroseed", "Ferrothorn", "Pumpkaboo", "Gourgeist", "Pichu", "Pikachu", "Raichu", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon", "Applin", "Flapple", "Appletun", "Espurr", "Meowstic", "Swirlix", "Slurpuff", "Spritzee", "Aromatisse", "Dewpider", "Araquanid", "Wynaut", "Wobbuffet", "Farfetch\u2019d", "Sirfetch\u2019d", "Chinchou", "Lanturn", "Croagunk", "Toxicroak", "Scraggy", "Scrafty", "Stunfisk", "Shuckle", "Barboach", "Whiscash", "Shellos", "Gastrodon", "Wimpod", "Golisopod", "Binacle", "Barbaracle", "Corsola", "Cursola", "Impidimp", "Morgrem", "Grimmsnarl", "Hatenna", "Hattrem", "Hatterene", "Salandit", "Salazzle", "Pawniard", "Bisharp", "Throh", "Sawk", "Koffing", "Weezing", "Bonsly", "Sudowoodo", "Cleffa", "Clefairy", "Clefable", "Togepi", "Togetic", "Togekiss", "Munchlax", "Snorlax", "Cottonee", "Whimsicott", "Rhyhorn", "Rhydon", "Rhyperior", "Gothita", "Gothorita", "Gothitelle", "Solosis", "Duosion", "Reuniclus", "Karrablast", "Escavalier", "Shelmet", "Accelgor", "Elgyem", "Beheeyem", "Cubchoo", "Beartic", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Skorupi", "Drapion", "Litwick", "Lampent", "Chandelure", "Inkay", "Malamar", "Sneasel", "Weavile", "Sableye", "Mawile", "Maractus", "Sigilyph", "Riolu", "Lucario", "Torkoal", "Mimikyu", "Cufant", "Copperajah", "Qwilfish", "Frillish", "Jellicent", "Mareanie", "Toxapex", "Cramorant", "Toxel", "Toxtricity", "Toxtricity-Low-Key", "Silicobra", "Sandaconda", "Hippopotas", "Hippowdon", "Durant", "Heatmor", "Helioptile", "Heliolisk", "Hawlucha", "Trapinch", "Vibrava", "Flygon", "Axew", "Fraxure", "Haxorus", "Yamask", "Runerigus", "Cofagrigus", "Honedge", "Doublade", "Aegislash", "Ponyta", "Rapidash", "Sinistea", "Polteageist", "Indeedee", "Phantump", "Trevenant", "Morelull", "Shiinotic", "Oranguru", "Passimian", "Morpeko", "Falinks", "Drampa", "Turtonator", "Togedemaru", "Snom", "Frosmoth", "Clobbopus", "Grapploct", "Pincurchin", "Mantyke", "Mantine", "Wailmer", "Wailord", "Bergmite", "Avalugg", "Dhelmise", "Lapras", "Lunatone", "Solrock", "Mime Jr.", "Mr. Mime", "Mr. Rime", "Darumaka", "Darmanitan", "Stonjourner", "Eiscue", "Duraludon", "Rotom", "Ditto", "Dracozolt", "Arctozolt", "Dracovish", "Arctovish", "Charmander", "Charmeleon", "Charizard", "Type: Null", "Silvally", "Larvitar", "Pupitar", "Tyranitar", "Deino", "Zweilous", "Hydreigon", "Goomy", "Sliggoo", "Goodra", "Jangmo-o", "Hakamo-o", "Kommo-o", "Dreepy", "Drakloak", "Dragapult",
				"Slowpoke", "Slowbro", "Slowking", "Buneary", "Lopunny", "Happiny", "Chansey", "Blissey", "Skwovet", "Greedent", "Igglybuff", "Jigglypuff", "Wigglytuff", "Blipbug", "Dottler", "Fomantis", "Lurantis", "Applin", "Flapple", "Appletun", "Fletchling", "Fletchinder", "Talonflame", "Shinx", "Luxio", "Luxray", "Klefki", "Pawniard", "Bisharp", "Abra", "Kadabra", "Alakazam", "Ralts", "Kirlia", "Gardevoir", "Gallade", "Krabby", "Kingler", "Tentacool", "Tentacruel", "Magikarp", "Gyarados", "Remoraid", "Octillery", "Mantyke", "Mantine", "Wingull", "Pelipper", "Skorupi", "Drapion", "Dunsparce", "Bouffalant", "Lickitung", "Lickilicky", "Chewtle", "Drednaw", "Wooper", "Quagsire", "Goomy", "Sliggoo", "Goodra", "Druddigon", "Shelmet", "Accelgor", "Karrablast", "Escavalier", "Bulbasaur", "Ivysaur", "Venusaur", "Squirtle", "Wartortle", "Blastoise", "Venipede", "Whirlipede", "Scolipede", "Foongus", "Amoonguss", "Comfey", "Tangela", "Tangrowth", "Croagunk", "Toxicroak", "Pichu", "Pikachu", "Raichu", "Zorua", "Zoroark", "Oranguru", "Passimian", "Corphish", "Crawdaunt", "Cramorant", "Goldeen", "Seaking", "Arrokuda", "Barraskewda", "Staryu", "Starmie", "Kubfu", "Urshifu", "Emolga", "Dedenne", "Morpeko", "Magnemite", "Magneton", "Magnezone", "Inkay", "Malamar", "Wishiwashi", "Carvanha", "Sharpedo", "Lillipup", "Herdier", "Stoutland", "Tauros", "Miltank", "Scyther", "Scizor", "Pinsir", "Heracross", "Dwebble", "Crustle", "Wimpod", "Golisopod", "Pincurchin", "Mareanie", "Toxapex", "Clobbopus", "Grapploct", "Shellder", "Cloyster", "Sandygast", "Palossand", "Drifloon", "Drifblim", "Barboach", "Whiscash", "Azurill", "Marill", "Azumarill", "Poliwag", "Poliwhirl", "Poliwrath", "Politoed", "Psyduck", "Golduck", "Whismur", "Loudred", "Exploud", "Woobat", "Swoobat", "Skarmory", "Roggenrola", "Boldore", "Gigalith", "Rockruff", "Lycanroc", "Salandit", "Salazzle", "Scraggy", "Scrafty", "Mienfoo", "Mienshao", "Jangmo-o", "Hakamo-o", "Kommo-o", "Sandshrew", "Sandslash", "Cubone", "Marowak", "Kangaskhan", "Torkoal", "Silicobra", "Sandaconda", "Sandile", "Krokorok", "Krookodile", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Rhyhorn", "Rhydon", "Rhyperior", "Larvesta", "Volcarona", "Chinchou", "Lanturn", "Wailmer", "Wailord", "Frillish", "Jellicent", "Skrelp", "Dragalge", "Clauncher", "Clawitzer", "Horsea", "Seadra", "Kingdra", "Petilil", "Lilligant", "Combee", "Vespiquen", "Exeggcute", "Exeggutor", "Ditto", "Porygon", "Porygon2", "Porygon-Z",
				"Nidoran-F", "Nidorina", "Nidoqueen", "Nidoran-M", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Zubat", "Golbat", "Ponyta", "Rapidash", "Mr. Mime", "Jynx", "Electabuzz", "Magmar", "Magikarp", "Gyarados", "Lapras", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Crobat", "Cleffa", "Espeon", "Umbreon", "Shuckle", "Sneasel", "Swinub", "Piloswine", "Delibird", "Smoochum", "Elekid", "Magby", "Larvitar", "Pupitar", "Tyranitar", "Zigzagoon", "Linoone", "Sableye", "Mawile", "Aron", "Lairon", "Aggron", "Swablu", "Altaria", "Barboach", "Whiscash", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Absol", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Relicanth", "Bagon", "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Bronzor", "Bronzong", "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", "Riolu", "Lucario", "Snover", "Abomasnow", "Weavile", "Electivire", "Magmortar", "Leafeon", "Glaceon", "Mamoswine", "Froslass", "Audino", "Timburr", "Gurdurr", "Conkeldurr", "Cottonee", "Whimsicott", "Basculin", "Darumaka", "Darmanitan", "Tirtouga", "Carracosta", "Archen", "Archeops", "Gothita", "Gothorita", "Gothitelle", "Solosis", "Duosion", "Reuniclus", "Vanillite", "Vanillish", "Vanilluxe", "Karrablast", "Escavalier", "Joltik", "Galvantula", "Ferroseed", "Ferrothorn", "Litwick", "Lampent", "Chandelure", "Cubchoo", "Beartic", "Cryogonal", "Shelmet", "Accelgor", "Druddigon", "Golett", "Golurk", "Heatmor", "Durant", "Deino", "Zweilous", "Hydreigon", "Cobalion", "Terrakion", "Virizion", "Tyrunt", "Tyrantrum", "Amaura", "Aurorus", "Sylveon", "Carbink", "Phantump", "Trevenant", "Bergmite", "Avalugg", "Noibat", "Noivern", "Dewpider", "Araquanid", "Mimikyu", "Dhelmise", "Skwovet", "Greedent", "Rookidee", "Corvisquire", "Corviknight", "Gossifleur", "Eldegoss", "Wooloo", "Dubwool", "Yamper", "Boltund", "Rolycoly", "Carkol", "Coalossal", "Sizzlipede", "Centiskorch", "Sinistea", "Polteageist", "Hatenna", "Hattrem", "Hatterene", "Impidimp", "Morgrem", "Grimmsnarl", "Obstagoon", "Mr. Rime", "Pincurchin", "Snom", "Frosmoth", "Stonjourner", "Eiscue", "Indeedee", "Morpeko", "Cufant", "Copperajah", "Dreepy", "Drakloak", "Dragapult", "Regieleki", "Regidrago", "Glastrier", "Spectrier",
			];
			const species = this.dex.species.get(set.species || set.name);
			if (!galarDex.includes(species.baseSpecies) && !galarDex.includes(species.name)) {
				return [`${species.baseSpecies} is not in the Galar, Isle of Armor, or Crown Tundra Pokédexes.`];
			}
		},
	},
	potd: {
		effectType: 'Rule',
		name: 'PotD',
		desc: "Forces the Pokemon of the Day onto every random team.",
		onBegin() {
			if (global.Config && global.Config.potd) {
				this.add('rule', "Pokemon of the Day: " + this.dex.species.get(Config.potd).name);
			}
		},
	},
	forcemonotype: {
		effectType: 'ValidatorRule',
		name: 'Force Monotype',
		desc: `Forces all teams to have the same type. Usage: Force Monotype = [Type], e.g. "Force Monotype = Water"`,
		hasValue: true,
		onValidateRule(value) {
			if (!this.dex.types.get(value).exists) throw new Error(`Misspelled type "${value}"`);
		},
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const type = this.dex.types.get(this.ruleTable.valueRules.get('forcemonotype')!);
			if (!species.types.map(this.toID).includes(type.id)) {
				return [`${set.species} must have type ${type.name}`];
			}
		},
	},
	evlimits: {
		effectType: 'ValidatorRule',
		name: 'EV Limits',
		desc: "Require EVs to be in specific ranges, such as: \"EV Limits = Atk 0-124 / Def 100-252\"",
		hasValue: true,
		onValidateRule(value) {
			if (!value) throw new Error(`To remove EV limits, use "! EV Limits"`);

			const slashedParts = value.split('/');
			const UINT_REGEX = /^[0-9]{1,4}$/;
			return slashedParts.map(slashedPart => {
				const parts = slashedPart.replace('-', ' - ').replace(/ +/g, ' ').trim().split(' ');
				const [stat, low, hyphen, high] = parts;
				if (parts.length !== 4 || !UINT_REGEX.test(low) || hyphen !== '-' || !UINT_REGEX.test(high)) {
					throw new Error(`EV limits should be in the format "EV Limits = Atk 0-124 / Def 100-252"`);
				}
				const statid = this.dex.toID(stat) as StatID;
				if (!this.dex.stats.ids().includes(statid)) {
					throw new Error(`Unrecognized stat name "${stat}" in "${value}"`);
				}
				return `${statid} ${low}-${high}`;
			}).join(' / ');
		},
		onValidateSet(set) {
			const limits = this.ruleTable.valueRules.get('evlimits')!;
			const problems = [];

			for (const limit of limits.split(' / ')) {
				const [statid, range] = limit.split(' ') as [StatID, string];
				const [low, high] = range.split('-').map(num => parseInt(num));
				const ev = set.evs[statid];

				if (ev < low || ev > high) {
					problems.push(`${set.name || set.species}'s ${this.dex.stats.names[statid]} EV (${ev}) must be ${low}-${high}`);
				}
			}
			return problems;
		},
	},
	teampreview: {
		effectType: 'Rule',
		name: 'Team Preview',
		desc: "Allows each player to see the Pok&eacute;mon on their opponent's team before they choose their lead Pok&eacute;mon",
		onTeamPreview() {
			this.add('clearpoke');
			for (const pokemon of this.getAllPokemon()) {
				const details = pokemon.details.replace(', shiny', '')
					.replace(/(Arceus|Gourgeist|Pumpkaboo|Xerneas|Silvally|Zacian|Zamazenta|Urshifu|Muk-Delta)(-[a-zA-Z?-]+)?/g, '$1-*');
				this.add('poke', pokemon.side.id, details, '');
			}
			this.makeRequest('teampreview');
		},
	},
	onevsone: {
		effectType: 'Rule',
		name: 'One vs One',
		desc: "Only allows one Pok&eacute;mon in battle",
		ruleset: ['Picked Team Size = 1'],
	},
	twovstwo: {
		effectType: 'Rule',
		name: 'Two vs Two',
		desc: "Only allows two Pok&eacute;mon in battle",
		ruleset: ['Picked Team Size = 2'],
	},
	littlecuprule: {
		effectType: 'ValidatorRule',
		name: 'Little Cup Rule',
		desc: "Only allows Pok&eacute;mon that can evolve and don't have any prior evolutions",
		ruleset: ['Max Level = 5'],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species || set.name);
			if (species.prevo && this.dex.species.get(species.prevo).gen <= this.gen) {
				return [set.species + " isn't the first in its evolution family."];
			}
			if (!species.nfe) {
				return [set.species + " doesn't have an evolution family."];
			}
		},
	},
	level120: {
		effectType: 'ValidatorRule',
		name: 'Level 120',
		desc: "Allows Pokémon up to Level 120.",
		ruleset: ['Max Level = 120', 'Default Level = 120', 'Overflow Stat Mod'],
	},
	blitz: {
		effectType: 'Rule',
		name: 'Blitz',
		// THIS 100% INTENTIONALLY SAYS TEN SECONDS PER TURN
		// IGNORE maxPerTurn. addPerTurn IS 5, TRANSLATING TO AN INCREMENT OF 10.
		desc: "Super-fast 'Blitz' timer giving 30 second Team Preview and 10 seconds per turn.",
		onBegin() {
			this.add('rule', 'Blitz: Super-fast timer');
		},
		timer: {starting: 15, addPerTurn: 5, maxPerTurn: 15, maxFirstTurn: 40, grace: 30},
	},
	vgctimer: {
		effectType: 'Rule',
		name: 'VGC Timer',
		desc: "VGC's timer: 90 second Team Preview, 7 minutes Your Time, 1 minute per turn",
		timer: {
			starting: 7 * 60, addPerTurn: 0, maxPerTurn: 55, maxFirstTurn: 90,
			grace: 90, timeoutAutoChoose: true, dcTimerBank: false,
		},
	},
	speciesclause: {
		effectType: 'ValidatorRule',
		name: 'Species Clause',
		desc: "Prevents teams from having more than one Pok&eacute;mon from the same species",
		onBegin() {
			this.add('rule', 'Species Clause: Limit one of each Pokémon');
		},
		onValidateTeam(team, format) {
			const speciesTable = new Set<number>();
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (speciesTable.has(species.num)) {
					return [`You are limited to one of each Pokémon by Species Clause.`, `(You have more than one ${species.baseSpecies})`];
				}
				speciesTable.add(species.num);
			}
		},
	},
	nicknameclause: {
		effectType: 'ValidatorRule',
		name: 'Nickname Clause',
		desc: "Prevents teams from having more than one Pok&eacute;mon with the same nickname",
		onValidateTeam(team, format) {
			const nameTable = new Set<string>();
			for (const set of team) {
				const name = set.name;
				if (name) {
					if (name === this.dex.species.get(set.species).baseSpecies) continue;
					if (nameTable.has(name)) {
						return [`Your Pokémon must have different nicknames.`, `(You have more than one ${name})`];
					}
					nameTable.add(name);
				}
			}
			// Illegality of impersonation of other species is
			// hardcoded in team-validator.js, so we are done.
		},
	},
	itemclause: {
		effectType: 'ValidatorRule',
		name: 'Item Clause',
		desc: "Prevents teams from having more than one Pok&eacute;mon with the same item",
		onBegin() {
			this.add('rule', 'Item Clause: Limit one of each item');
		},
		onValidateTeam(team) {
			const itemTable = new Set<string>();
			for (const set of team) {
				const item = this.toID(set.item);
				if (!item) continue;
				if (itemTable.has(item)) {
					return [
						`You are limited to one of each item by Item Clause.`,
						`(You have more than one ${this.dex.items.get(item).name})`,
					];
				}
				itemTable.add(item);
			}
		},
	},
	doubleitemclause: {
		effectType: 'ValidatorRule',
		name: 'Double Item Clause',
		desc: "Prevents teams from having more than two Pok&eacute;mon with the same item",
		onBegin() {
			this.add('rule', 'Double Item Clause: Limit two of each item');
		},
		onValidateTeam(team) {
			const itemTable: {[k: string]: number} = {};
			for (const set of team) {
				const item = this.toID(set.item);
				if (!item) continue;
				if (item in itemTable) {
					if (itemTable[item] >= 2) {
						return [
							`You are limited to two of each item by Double Item Clause.`,
							`(You have more than two ${this.dex.items.get(item).name})`,
						];
					}
					itemTable[item]++;
				} else {
					itemTable[item] = 1;
				}
			}
		},
	},
	"2abilityclause": {
		effectType: 'ValidatorRule',
		name: '2 Ability Clause',
		desc: "Prevents teams from having more than two Pok&eacute;mon with the same ability",
		onBegin() {
			this.add('rule', '2 Ability Clause: Limit two of each ability');
		},
		onValidateTeam(team) {
			if (this.format.id === 'gen8multibility') return;
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
				let ability = this.toID(set.ability);
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
		},
	},
	ohkoclause: {
		effectType: 'ValidatorRule',
		name: 'OHKO Clause',
		desc: "Bans all OHKO moves, such as Fissure",
		onBegin() {
			this.add('rule', 'OHKO Clause: OHKO moves are banned');
		},
		onValidateSet(set) {
			const problems: string[] = [];
			if (set.moves) {
				for (const moveId of set.moves) {
					const move = this.dex.moves.get(moveId);
					if (move.ohko) problems.push(move.name + ' is banned by OHKO Clause.');
				}
			}
			return problems;
		},
	},
	evasionabilitiesclause: {
		effectType: 'ValidatorRule',
		name: 'Evasion Abilities Clause',
		desc: "Bans abilities that boost Evasion under certain weather conditions",
		banlist: ['Sand Veil', 'Snow Cloak', 'Illuminate'],
		onBegin() {
			this.add('rule', 'Evasion Abilities Clause: Evasion abilities are banned');
		},
	},
	evasionmovesclause: {
		effectType: 'ValidatorRule',
		name: 'Evasion Moves Clause',
		desc: "Bans moves that consistently raise the user's evasion when used",
		banlist: ['Minimize', 'Double Team', 'Lunar Blessing'],
		onBegin() {
			this.add('rule', 'Evasion Moves Clause: Evasion moves are banned');
		},
	},
	accuracymovesclause: {
		effectType: 'ValidatorRule',
		name: 'Accuracy Moves Clause',
		desc: "Bans moves that have a chance to lower the target's accuracy when used",
		banlist: [
			'Flash', 'Kinesis', 'Leaf Tornado', 'Mirror Shot', 'Mud Bomb', 'Mud-Slap', 'Muddy Water', 'Night Daze', 'Octazooka', 'Sand Attack', 'Smokescreen',
		],
		onBegin() {
			this.add('rule', 'Accuracy Moves Clause: Accuracy-lowering moves are banned');
		},
	},
	sleepmovesclause: {
		effectType: 'ValidatorRule',
		name: 'Sleep Moves Clause',
		desc: "Bans all moves that induce sleep, such as Hypnosis",
		banlist: ['Yawn'],
		onBegin() {
			this.add('rule', 'Sleep Clause: Sleep-inducing moves are banned');
		},
		onValidateSet(set) {
			const problems = [];
			if (set.moves) {
				for (const id of set.moves) {
					const move = this.dex.moves.get(id);
					if (move.status && move.status === 'slp') problems.push(move.name + ' is banned by Sleep Clause.');
				}
			}
			return problems;
		},
	},
	gravitysleepclause: {
		effectType: 'ValidatorRule',
		name: 'Gravity Sleep Clause',
		desc: "Bans sleep moves below 100% accuracy, in conjunction with Gravity or Gigantamax Orbeetle",
		banlist: [
			'Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder',
		],
		onValidateTeam(team) {
			let hasOrbeetle = false;
			let hasSleepMove = false;
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (species.name === "Orbeetle" && set.gigantamax) hasOrbeetle = true;
				if (!hasOrbeetle && species.name === "Orbeetle-Gmax") hasOrbeetle = true;
				for (const moveid of set.moves) {
					const move = this.dex.moves.get(moveid);
					if (move.status && move.status === 'slp' && move.accuracy < 100) hasSleepMove = true;
				}
			}
			if (hasOrbeetle && hasSleepMove) {
				return [`The combination of Gravity and Gigantamax Orbeetle on the same team is banned.`];
			}
		},
		onBegin() {
			this.add('rule', 'Gravity Sleep Clause: The combination of sleep-inducing moves with imperfect accuracy and Gravity or Gigantamax Orbeetle are banned');
		},
	},
	endlessbattleclause: {
		effectType: 'Rule',
		name: 'Endless Battle Clause',
		desc: "Prevents players from forcing a battle which their opponent cannot end except by forfeit",
		// implemented in sim/battle.js, see https://dex.pokemonshowdown.com/articles/battlerules#endlessbattleclause for the specification.
		onBegin() {
			this.add('rule', 'Endless Battle Clause: Forcing endless battles is banned');
		},
	},
	moodyclause: {
		effectType: 'ValidatorRule',
		name: 'Moody Clause',
		desc: "Bans the ability Moody",
		banlist: ['Moody'],
		onBegin() {
			this.add('rule', 'Moody Clause: Moody is banned');
		},
	},
	swaggerclause: {
		effectType: 'ValidatorRule',
		name: 'Swagger Clause',
		desc: "Bans the move Swagger",
		banlist: ['Swagger'],
		onBegin() {
			this.add('rule', 'Swagger Clause: Swagger is banned');
		},
	},
	batonpassclause: {
		effectType: 'ValidatorRule',
		name: 'Baton Pass Clause',
		desc: "Stops teams from having more than one Pok&eacute;mon with Baton Pass, and no Pok&eacute;mon may be capable of passing boosts to both Speed and another stat",
		banlist: ["Baton Pass > 1"],
		onBegin() {
			this.add('rule', 'Baton Pass Clause: Limit one Baton Passer, can\'t pass Spe and other stats simultaneously');
		},
		onValidateSet(set, format, setHas) {
			if (!('move:batonpass' in setHas)) return;

			const item = this.dex.items.get(set.item);
			const ability = this.toID(set.ability);
			let speedBoosted: boolean | string = false;
			let nonSpeedBoosted: boolean | string = false;

			for (const moveId of set.moves) {
				const move = this.dex.moves.get(moveId);
				if (move.id === 'flamecharge' || (move.boosts && move.boosts.spe && move.boosts.spe > 0)) {
					speedBoosted = true;
				}
				const nonSpeedBoostedMoves = [
					'acupressure', 'bellydrum', 'chargebeam', 'curse', 'diamondstorm', 'fellstinger', 'fierydance',
					'flowershield', 'poweruppunch', 'rage', 'rototiller', 'skullbash', 'stockpile',
				];
				if (nonSpeedBoostedMoves.includes(move.id) ||
					move.boosts && ((move.boosts.atk && move.boosts.atk > 0) || (move.boosts.def && move.boosts.def > 0) ||
					(move.boosts.spa && move.boosts.spa > 0) || (move.boosts.spd && move.boosts.spd > 0))) {
					nonSpeedBoosted = true;
				}
				if (item.zMove && move.type === item.zMoveType && move.zMove?.boost) {
					const boosts = move.zMove.boost;
					if (boosts.spe && boosts.spe > 0) {
						if (!speedBoosted) speedBoosted = move.name;
					}
					if (
						((boosts.atk && boosts.atk > 0) || (boosts.def && boosts.def > 0) ||
						(boosts.spa && boosts.spa > 0) || (boosts.spd && boosts.spd > 0))
					) {
						if (!nonSpeedBoosted || move.name === speedBoosted) nonSpeedBoosted = move.name;
					}
				}
			}

			const speedBoostedAbilities = ['motordrive', 'rattled', 'speedboost', 'steadfast', 'weakarmor'];
			const speedBoostedItems = ['blazikenite', 'eeviumz', 'kommoniumz', 'salacberry'];
			if (speedBoostedAbilities.includes(ability) || speedBoostedItems.includes(item.id)) {
				speedBoosted = true;
			}
			if (!speedBoosted) return;

			const nonSpeedBoostedAbilities = [
				'angerpoint', 'competitive', 'defiant', 'download', 'justified', 'lightningrod', 'moxie', 'sapsipper', 'stormdrain',
			];
			const nonSpeedBoostedItems = [
				'absorbbulb', 'apicotberry', 'cellbattery', 'eeviumz', 'ganlonberry', 'keeberry', 'kommoniumz', 'liechiberry',
				'luminousmoss', 'marangaberry', 'petayaberry', 'snowball', 'starfberry', 'weaknesspolicy',
			];
			if (nonSpeedBoostedAbilities.includes(ability) || nonSpeedBoostedItems.includes(item.id)) {
				nonSpeedBoosted = true;
			}
			if (!nonSpeedBoosted) return;

			// if both boost sources are Z-moves, and they're distinct
			if (speedBoosted !== nonSpeedBoosted && typeof speedBoosted === 'string' && typeof nonSpeedBoosted === 'string') return;

			return [
				`${set.name || set.species} can Baton Pass both Speed and a different stat, which is banned by Baton Pass Clause.`,
			];
		},
	},
	onebatonpassclause: {
		effectType: 'ValidatorRule',
		name: 'One Baton Pass Clause',
		desc: "Stops teams from having more than one Pok&eacute;mon with Baton Pass",
		banlist: ["Baton Pass > 1"],
		onBegin() {
			this.add('rule', 'One Baton Pass Clause: Limit one Baton Passer');
		},
	},
	oneboostpasserclause: {
		effectType: 'ValidatorRule',
		name: 'One Boost Passer Clause',
		desc: "Stops teams from having a Pok&eacute;mon with Baton Pass that has multiple ways to boost its stats, and no more than one Baton Passer may be able to boost its stats",
		onBegin() {
			this.add('rule', 'One Boost Passer Clause: Limit one Baton Passer that has a way to boost its stats');
		},
		onValidateTeam(team) {
			const boostingEffects = [
				'acidarmor', 'agility', 'amnesia', 'apicotberry', 'barrier', 'bellydrum', 'bulkup', 'calmmind', 'cosmicpower', 'curse',
				'defensecurl', 'dragondance', 'ganlonberry', 'growth', 'harden', 'howl', 'irondefense', 'liechiberry', 'meditate',
				'petayaberry', 'salacberry', 'sharpen', 'speedboost', 'starfberry', 'swordsdance', 'tailglow', 'withdraw',
			];
			let passers = 0;
			for (const set of team) {
				if (!set.moves.includes('Baton Pass')) continue;
				let passableBoosts = 0;
				const item = this.toID(set.item);
				const ability = this.toID(set.ability);
				for (const move of set.moves) {
					if (boostingEffects.includes(this.toID(move))) passableBoosts++;
				}
				if (boostingEffects.includes(item)) passableBoosts++;
				if (boostingEffects.includes(ability)) passableBoosts++;
				if (passableBoosts === 1) passers++;
				if (passableBoosts > 1) {
					return [
						`${set.name || set.species} has Baton Pass and multiple ways to boost its stats, which is banned by One Boost Passer Clause.`,
					];
				}
				if (passers > 1) {
					return [
						`Multiple Pokemon have Baton Pass and a way to boost their stats, which is banned by One Boost Passer Clause.`,
					];
				}
			}
		},
	},
	cfzclause: {
		effectType: 'ValidatorRule',
		name: 'CFZ Clause',
		desc: "Bans the use of crystal-free Z-Moves",
		banlist: [
			'10,000,000 Volt Thunderbolt', 'Acid Downpour', 'All-Out Pummeling', 'Black Hole Eclipse', 'Bloom Doom',
			'Breakneck Blitz', 'Catastropika', 'Clangorous Soulblaze', 'Continental Crush', 'Corkscrew Crash',
			'Devastating Drake', 'Extreme Evoboost', 'Genesis Supernova', 'Gigavolt Havoc', 'Guardian of Alola',
			'Hydro Vortex', 'Inferno Overdrive', 'Let\'s Snuggle Forever', 'Light That Burns the Sky',
			'Malicious Moonsault', 'Menacing Moonraze Maelstrom', 'Never-Ending Nightmare', 'Oceanic Operetta',
			'Pulverizing Pancake', 'Savage Spin-Out', 'Searing Sunraze Smash', 'Shattered Psyche', 'Sinister Arrow Raid',
			'Soul-Stealing 7-Star Strike', 'Splintered Stormshards', 'Stoked Sparksurfer', 'Subzero Slammer',
			'Supersonic Skystrike', 'Tectonic Rage', 'Twinkle Tackle',
		],
		onBegin() {
			this.add('rule', 'CFZ Clause: Crystal-free Z-Moves are banned');
		},
	},
	zmoveclause: {
		effectType: 'ValidatorRule',
		name: 'Z-Move Clause',
		desc: "Bans Pok&eacute;mon from holding Z-Crystals",
		onValidateSet(set) {
			const item = this.dex.items.get(set.item);
			if (item.zMove) return [`${set.name || set.species}'s item ${item.name} is banned by Z-Move Clause.`];
		},
		onBegin() {
			this.add('rule', 'Z-Move Clause: Z-Moves are banned');
		},
	},
	notfullyevolved: {
		effectType: 'ValidatorRule',
		name: 'Not Fully Evolved',
		desc: "Bans Pok&eacute;mon that are fully evolved or can't evolve",
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (!species.nfe) {
				return [set.species + " cannot evolve."];
			}
		},
	},
	hppercentagemod: {
		effectType: 'Rule',
		name: 'HP Percentage Mod',
		desc: "Shows the HP of Pok&eacute;mon in percentages",
		onBegin() {
			this.add('rule', 'HP Percentage Mod: HP is shown in percentages');
			this.reportPercentages = true;
		},
	},
	exacthpmod: {
		effectType: 'Rule',
		name: 'Exact HP Mod',
		desc: "Shows the exact HP of all Pok&eacute;mon",
		onBegin() {
			this.add('rule', 'Exact HP Mod: Exact HP is shown');
			this.reportExactHP = true;
		},
	},
	cancelmod: {
		effectType: 'Rule',
		name: 'Cancel Mod',
		desc: "Allows players to change their own choices before their opponents make one",
		onBegin() {
			this.supportCancel = true;
		},
	},
	sleepclausemod: {
		effectType: 'Rule',
		name: 'Sleep Clause Mod',
		desc: "Prevents players from putting more than one of their opponent's Pok&eacute;mon to sleep at a time, and bans Mega Gengar from using Hypnosis",
		banlist: ['Hypnosis + Gengarite'],
		onBegin() {
			this.add('rule', 'Sleep Clause Mod: Limit one foe put to sleep');
		},
		onSetStatus(status, target, source) {
			if (source && source.isAlly(target)) {
				return;
			}
			if (status.id === 'slp') {
				for (const pokemon of target.side.pokemon) {
					if (pokemon.hp && pokemon.status === 'slp') {
						if (!pokemon.statusState.source || !pokemon.statusState.source.isAlly(pokemon)) {
							this.add('-message', 'Sleep Clause Mod activated.');
							return false;
						}
					}
				}
			}
		},
	},
	stadiumsleepclause: {
		effectType: 'Rule',
		name: 'Stadium Sleep Clause',
		desc: "Prevents players from putting one of their opponent's Pok\u00E9mon to sleep if any of the opponent's other Pok\u00E9mon are asleep (different from Sleep Clause Mod because putting your own Pok\u00E9mon to sleep is enough to prevent opponents from putting your others to sleep).",
		onBegin() {
			this.add('rule', 'Stadium Sleep Clause: Limit one foe put to sleep');
		},
		onSetStatus(status, target, source) {
			if (source && source.isAlly(target)) {
				return;
			}
			if (status.id === 'slp') {
				for (const pokemon of target.side.pokemon) {
					if (pokemon.hp && pokemon.status === 'slp') {
						this.add('-message', "Sleep Clause activated. (In Stadium, Sleep Clause activates if any of the opponent's Pokemon are asleep, even if self-inflicted from Rest)");
						return false;
					}
				}
			}
		},
	},
	switchpriorityclausemod: {
		effectType: 'Rule',
		name: 'Switch Priority Clause Mod',
		desc: "Makes a faster Pokémon switch first when double-switching, unlike in Emerald link battles, where player 1's Pokémon would switch first",
		onBegin() {
			this.add('rule', 'Switch Priority Clause Mod: Faster Pokémon switch first');
		},
	},
	desyncclausemod: {
		effectType: 'Rule',
		name: 'Desync Clause Mod',
		desc: 'If a desync would happen, the move fails instead. This rule currently covers Psywave and Counter.',
		onBegin() {
			this.add('rule', 'Desync Clause Mod: Desyncs changed to move failure.');
		},
		// Hardcoded in gen1/moves.ts
		// Can't be disabled (no precedent for how else to handle desyncs)
	},
	deoxyscamouflageclause: {
		effectType: 'Rule',
		name: 'Deoxys Camouflage Clause',
		desc: "Reveals the Deoxys forme when it is sent in battle.",
		// Hardcoded into effect, cannot be disabled.
		onBegin() {
			this.add('rule', 'Deoxys Camouflage Clause: Reveals the Deoxys forme when it is sent in battle.');
		},
	},
	freezeclausemod: {
		effectType: 'Rule',
		name: 'Freeze Clause Mod',
		desc: "Prevents players from freezing more than one of their opponent's Pok&eacute;mon at a time",
		onBegin() {
			this.add('rule', 'Freeze Clause Mod: Limit one foe frozen');
		},
		onSetStatus(status, target, source) {
			if (source && source.isAlly(target)) {
				return;
			}
			if (status.id === 'frz') {
				for (const pokemon of target.side.pokemon) {
					if (pokemon.status === 'frz') {
						this.add('-message', 'Freeze Clause activated.');
						return false;
					}
				}
			}
		},
	},
	sametypeclause: {
		effectType: 'ValidatorRule',
		name: 'Same Type Clause',
		desc: "Forces all Pok&eacute;mon on a team to share a type with each other",
		banlist: ['Eevite', 'Protean Maxima'],
		onBegin() {
			this.add('rule', 'Same Type Clause: Pokémon in a team must share a type');
		},
		onValidateTeam(team) {
			let typeTable: string[] = [];
			for (const [i, set] of team.entries()) {
				let species = this.dex.species.get(set.species);
				if (!species.types) return [`Invalid pokemon ${set.name || set.species}`];
				if (i === 0) {
					typeTable = species.types;
				} else {
					typeTable = typeTable.filter(type => species.types.includes(type));
				}
				const item = this.dex.items.get(set.item);
				if (item.megaStone && species.baseSpecies === item.megaEvolves) {
					species = this.dex.species.get(item.megaStone);
					typeTable = typeTable.filter(type => species.types.includes(type));
				}
				if (item.id === "ultranecroziumz" && species.baseSpecies === "Necrozma") {
					species = this.dex.species.get("Necrozma-Ultra");
					typeTable = typeTable.filter(type => species.types.includes(type));
				}
				if (!typeTable.length) return [`Your team must share a type.`];
			}
		},
	},
	megarayquazaclause: {
		effectType: 'Rule',
		name: 'Mega Rayquaza Clause',
		desc: "Prevents Rayquaza from mega evolving",
		onBegin() {
			this.add('rule', 'Mega Rayquaza Clause: You cannot mega evolve Rayquaza');
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.species.id === 'rayquaza') pokemon.canMegaEvo = null;
			}
		},
	},
	dynamaxclause: {
		effectType: 'Rule',
		name: 'Dynamax Clause',
		desc: "Prevents Pok&eacute;mon from dynamaxing",
		onValidateSet(set) {
			if (set.gigantamax) {
				return [
					`Your set for ${set.species} is flagged as Gigantamax, but Gigantamaxing is disallowed`,
					`(If this was a mistake, disable Gigantamaxing on the set.)`,
				];
			}
		},
		onBegin() {
			for (const side of this.sides) {
				side.dynamaxUsed = true;
			}
			this.add('rule', 'Dynamax Clause: You cannot dynamax');
		},
	},
	arceusevlimit: {
		effectType: 'ValidatorRule',
		name: 'Arceus EV Limit',
		desc: "Restricts Arceus to a maximum of 100 EVs in any one stat, and only multiples of 10",
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (species.num === 493 && set.evs) {
				let stat: StatID;
				for (stat in set.evs) {
					const ev = set.evs[stat];
					if (ev > 100) {
						return [
							"Arceus can't have more than 100 EVs in any stat, because Arceus is only obtainable from level 100 events.",
							"Level 100 Pokemon can only gain EVs from vitamins (Carbos etc), which are capped at 100 EVs.",
						];
					}
					if (!(
						ev % 10 === 0 ||
						(ev % 10 === 8 && ev % 4 === 0)
					)) {
						return [
							"Arceus can only have EVs that are multiples of 10, because Arceus is only obtainable from level 100 events.",
							"Level 100 Pokemon can only gain EVs from vitamins (Carbos etc), which boost in multiples of 10.",
						];
					}
				}
			}
		},
	},
	inversemod: {
		effectType: 'Rule',
		name: 'Inverse Mod',
		desc: "The mod for Inverse Battle which inverts the type effectiveness chart; weaknesses become resistances, while resistances and immunities become weaknesses",
		onNegateImmunity: false,
		onBegin() {
			this.add('rule', 'Inverse Mod: Weaknesses become resistances, while resistances and immunities become weaknesses.');
		},
		onEffectivenessPriority: 1,
		onEffectiveness(typeMod, target, type, move) {
			// The effectiveness of Achilles Heel, Freeze Dry on Water, and Corrode on Steel aren't reverted. Tesseract's Inverse Battle functionality is in sim/battle-actions.ts
			if (move && move.id === 'achillesheel') return;
			if (move && move.id === 'freezedry' && type === 'Water') return;
			if (move && move.id === 'corrode' && type === 'Steel') return;
			if (move && !this.dex.getImmunity(move, type)) return 1;
			return -typeMod;
		},
	},

	minsourcegen: {
		effectType: 'ValidatorRule',
		name: "Min Source Gen",
		desc: "Pokemon must be obtained from this generation or later.",
		hasValue: 'positive-integer',
		onValidateRule(value) {
			const minSourceGen = parseInt(value);
			if (minSourceGen > this.dex.gen) {
				// console.log(this.ruleTable);
				throw new Error(`Invalid generation ${minSourceGen}${this.ruleTable.blame('minsourcegen')} for a Gen ${this.dex.gen} format`);
			}
		},
	},

	stabmonsmovelegality: {
		effectType: 'ValidatorRule',
		name: 'STABmons Move Legality',
		desc: "Allows Pok&eacute;mon to use any move that they or a previous evolution/out-of-battle forme share a type with",
		checkCanLearn(move, species, setSources, set) {
			const nonstandard = move.isNonstandard === 'Past' && !this.ruleTable.has('standardnatdex');
			if (!nonstandard && !move.isZ && !move.isMax && !this.ruleTable.isRestricted(`move:${move.id}`)) {
				const speciesTypes: string[] = [];
				const moveTypes: string[] = [];
				// BDSP can't import Pokemon from Home, so it shouldn't grant moves from archaic species types
				const minObtainableSpeciesGen = this.dex.currentMod === 'gen8bdsp' ? this.dex.gen : species.gen;
				for (let i = this.dex.gen; i >= minObtainableSpeciesGen && i >= move.gen; i--) {
					const dex = this.dex.forGen(i);
					moveTypes.push(dex.moves.get(move.name).type);

					const pokemon = dex.species.get(species.name);
					if (pokemon.forme || pokemon.otherFormes) {
						const baseSpecies = dex.species.get(pokemon.baseSpecies);
						const originalForme = dex.species.get(pokemon.changesFrom || pokemon.name);
						speciesTypes.push(...originalForme.types);
						if (baseSpecies.otherFormes) {
							for (const formeName of baseSpecies.otherFormes) {
								if (baseSpecies.prevo) {
									const prevo = dex.species.get(baseSpecies.prevo);
									if (prevo.evos.includes(formeName)) continue;
								}
								const forme = dex.species.get(formeName);
								if (
									forme.changesFrom === originalForme.name && !forme.battleOnly &&
									// Temporary workaround
									forme.forme !== 'Crowned'
								) {
									speciesTypes.push(...forme.types);
								}
							}
						}
					} else {
						speciesTypes.push(...pokemon.types);
					}

					let prevo = pokemon.prevo;
					while (prevo) {
						const prevoSpecies = dex.species.get(prevo);
						speciesTypes.push(...prevoSpecies.types);
						prevo = prevoSpecies.prevo;
					}
				}
				if (moveTypes.some(m => speciesTypes.includes(m))) return null;
			}
			return this.checkCanLearn(move, species, setSources, set);
		},
	},
	alphabetcupmovelegality: {
		effectType: 'ValidatorRule',
		name: 'Alphabet Cup Move Legality',
		desc: "Allows Pok&eacute;mon to use any move that shares the same first letter as their name or a previous evolution's name.",
		checkCanLearn(move, species, setSources, set) {
			const nonstandard = move.isNonstandard === 'Past' && !this.ruleTable.has('standardnatdex');
			if (!nonstandard && !move.isZ && !move.isMax && !this.ruleTable.isRestricted(`move:${move.id}`)) {
				const letters = [species.id.charAt(0)];
				let prevo = species.prevo;
				if (species.changesFrom === 'Silvally') prevo = 'Type: Null';
				while (prevo) {
					const prevoSpecies = this.dex.species.get(prevo);
					letters.push(prevoSpecies.id.charAt(0));
					prevo = prevoSpecies.prevo;
				}
				if (letters.includes(move.id.charAt(0))) return null;
			}
			return this.checkCanLearn(move, species, setSources, set);
		},
	},
	sketchmonsmovelegality: {
		effectType: 'ValidatorRule',
		name: 'Sketchmons Move Legality',
		desc: "Pok&eacute;mon can learn one of any move they don't normally learn.",
		checkCanLearn(move, species, lsetData, set) {
			const problem = this.checkCanLearn(move, species, lsetData, set);
			if (!problem) return null;
			if (move.isZ || move.isMax || this.ruleTable.isRestricted(`move:${move.id}`)) return problem;
			if ((set as any).sketchMove) {
				return ` already has ${(set as any).sketchMove} as a sketched move.\n(${species.name} doesn't learn ${move.name}.)`;
			}
			(set as any).sketchMove = move.name;
			return null;
		},
		onValidateTeam(team) {
			const sketches = new Utils.Multiset<string>();
			for (const set of team) {
				if ((set as any).sketchMove) {
					sketches.add((set as any).sketchMove);
				}
			}
			const overSketched = [...sketches.entries()].filter(([moveName, count]) => count > 1);
			if (overSketched.length) {
				return overSketched.map(([moveName, count]) => (
					`You are limited to 1 of ${moveName} by Sketch Clause.\n(You have sketched ${moveName} ${count} times.)`
				));
			}
		},
	},
	camomonsmod: {
		effectType: 'Rule',
		name: 'Camomons Mod',
		desc: `Pok&eacute;mon have their types set to match their first two moves.`,
		onBegin() {
			this.add('rule', 'Camomons Mod: Pok\u00e9mon have their types set to match their first two moves.');
		},
		onModifySpeciesPriority: 2,
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // Chat command
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			const types = [...new Set(target.baseMoveSlots.slice(0, 2).map(move => this.dex.moves.get(move.id).type))];
			return {...species, types: types};
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
		},
	},
	allowtradeback: {
		effectType: 'ValidatorRule',
		name: 'Allow Tradeback',
		desc: "Allows Gen 1 pokemon to have moves from their Gen 2 learnsets",
		// Implemented in team-validator.js
	},
	allowavs: {
		effectType: 'ValidatorRule',
		name: 'Allow AVs',
		desc: "Tells formats with the 'gen7letsgo' mod to take Awakening Values into consideration when calculating stats",
		// implemented in TeamValidator#validateStats
	},
	nfeclause: {
		effectType: 'ValidatorRule',
		name: 'NFE Clause',
		desc: "Bans all NFE Pokemon",
		onValidateSet(set) {
			const species = this.dex.species.get(set.species || set.name);
			if (species.nfe) {
				if (this.ruleTable.has(`+pokemon:${species.id}`)) return;
				return [`${set.species} is banned due to NFE Clause.`];
			}
		},
	},
	'sketchgen8moves': {
		effectType: 'ValidatorRule',
		name: 'Sketch Gen 8 Moves',
		desc: "Allows Pokémon who learn Sketch to learn any Gen 8 move (normally, Sketch is not usable in Gen 8).",
		// Implemented in sim/team-validator.ts
	},
	mimicglitch: {
		effectType: 'ValidatorRule',
		name: 'Mimic Glitch',
		desc: "Allows any Pokemon with access to Assist, Copycat, Metronome, Mimic, or Transform to gain access to almost any other move.",
		// Implemented in sim/team-validator.ts
	},
	overflowstatmod: {
		effectType: 'Rule',
		name: 'Overflow Stat Mod',
		desc: "Caps stats at 654 after a positive nature, or 655 after a negative nature",
		// Implemented in sim/battle.ts
	},
	formeclause: {
		effectType: 'ValidatorRule',
		name: 'Forme Clause',
		desc: "Prevents teams from having more than one Pok&eacute;mon of the same forme",
		onBegin() {
			this.add('rule', 'Forme Clause: Limit one of each forme of a Pokémon');
		},
		onValidateTeam(team) {
			const formeTable = new Set<string>();
			for (const set of team) {
				let species = this.dex.species.get(set.species);
				if (species.name !== species.baseSpecies) {
					const baseSpecies = this.dex.species.get(species.baseSpecies);
					if (
						species.types.join('/') === baseSpecies.types.join('/') &&
						Object.values(species.baseStats).join('/') === Object.values(baseSpecies.baseStats).join('/')
					) {
						species = baseSpecies;
					}
				}
				if (formeTable.has(species.name)) {
					return [
						`You are limited to one of each forme of a Pokémon by Forme Clause.`,
						`(You have more than one of ${species.name})`,
					];
				}
				formeTable.add(species.name);
			}
		},
	},
	'350cupmod': {
		effectType: 'Rule',
		name: '350 Cup Mod',
		desc: "If a Pok&eacute;mon's BST is 350 or lower, all of its stats get doubled.",
		onBegin() {
			this.add('rule', '350 Cup Mod: If a Pokemon\'s BST is 350 or lower, all of its stats get doubled.');
		},
		onModifySpeciesPriority: 2,
		onModifySpecies(species) {
			const newSpecies = this.dex.deepClone(species);
			if (newSpecies.bst <= 350) {
				newSpecies.bst = 0;
				for (const stat in newSpecies.baseStats) {
					newSpecies.baseStats[stat] = this.clampIntRange(newSpecies.baseStats[stat] * 2, 1, 255);
					newSpecies.bst += newSpecies.baseStats[stat];
				}
			}
			return newSpecies;
		},
	},
	flippedmod: {
		effectType: 'Rule',
		name: 'Flipped Mod',
		desc: "Every Pok&eacute;mon's stats are reversed. HP becomes Spe, Atk becomes Sp. Def, Def becomes Sp. Atk, and vice versa.",
		onBegin() {
			this.add('rule', 'Flipped Mod: Pokemon have their stats flipped (HP becomes Spe, vice versa).');
		},
		onModifySpeciesPriority: 2,
		onModifySpecies(species) {
			const newSpecies = this.dex.deepClone(species);
			const reversedNums = Object.values(newSpecies.baseStats).reverse();
			for (const [i, statName] of Object.keys(newSpecies.baseStats).entries()) {
				newSpecies.baseStats[statName] = reversedNums[i];
			}
			return newSpecies;
		},
	},
	scalemonsmod: {
		effectType: 'Rule',
		name: 'Scalemons Mod',
		desc: "Every Pok&eacute;mon's stats, barring HP, are scaled to give them a BST as close to 600 as possible",
		onBegin() {
			this.add('rule', 'Scalemons Mod: Every Pokemon\'s stats, barring HP, are scaled to come as close to a BST of 600 as possible');
		},
		onModifySpeciesPriority: 1,
		onModifySpecies(species) {
			const newSpecies = this.dex.deepClone(species);
			const bstWithoutHp: number = newSpecies.bst - newSpecies.baseStats['hp'];
			const scale = 600 - newSpecies.baseStats['hp'];
			newSpecies.bst = newSpecies.baseStats['hp'];
			for (const stat in newSpecies.baseStats) {
				if (stat === 'hp') continue;
				newSpecies.baseStats[stat] = this.clampIntRange(newSpecies.baseStats[stat] * scale / bstWithoutHp, 1, 255);
				newSpecies.bst += newSpecies.baseStats[stat];
			}
			return newSpecies;
		},
	},
	teamtypepreview: {
		effectType: 'Rule',
		name: 'Team Type Preview',
		desc: "Allows each player to see the Pok&eacute;mon on their opponent's team and those Pok&eacute;mon's types before they choose their lead Pok&eacute;mon",
		onTeamPreview() {
			for (const side of this.sides) {
				for (const pokemon of side.pokemon) {
					const details = pokemon.details.replace(', shiny', '')
						.replace(/(Arceus|Gourgeist|Pumpkaboo|Silvally|Urshifu)(-[a-zA-Z?-]+)?/g, '$1-*');
					this.add('poke', pokemon.side.id, details, '');
				}
				let buf = 'raw|';
				for (const pokemon of side.pokemon) {
					if (!buf.endsWith('|')) buf += '/</span>&#8203;';
					buf += `<span style="white-space:nowrap"><psicon pokemon="${pokemon.species.id}" />`;
					for (const type of pokemon.species.types) {
						buf += `<psicon type="${type}" /> `;
					}
				}
				this.add(`${buf}</span>`);
			}
			this.makeRequest('teampreview');
		},
	},
	aaarestrictedabilities: {
		effectType: 'ValidatorRule',
		name: 'AAA Restricted Abilities',
		desc: "Allows validation for AAA formats to use restricted abilities instead of banned ones.",
		onValidateSet(set) {
			const ability = this.dex.abilities.get(set.ability);
			if (this.ruleTable.isRestricted(`ability:${ability.id}`)) {
				const species = this.dex.species.get(set.species);
				if (!Object.values(species.abilities).includes(ability.name)) {
					return [
						`The Ability "${ability.name}" is restricted.`,
						`(Only Pok\u00e9mon that get ${ability.name} naturally can use it.)`,
					];
				}
			}
		},
	},
	eventmovesclause: {
		effectType: 'ValidatorRule',
		name: 'Event Moves Clause',
		desc: "Bans moves only obtainable through events.",
		onBegin() {
			this.add('rule', 'Event Moves Clause: Event-only moves are banned');
		},
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const learnsetData = {...(this.dex.data.Learnsets[species.id]?.learnset || {})};
			let prevo = species.prevo;
			while (prevo) {
				const prevoSpecies = this.dex.species.get(prevo);
				const prevoLsetData = this.dex.data.Learnsets[prevoSpecies.id]?.learnset || {};
				for (const moveid in prevoLsetData) {
					if (!(moveid in learnsetData)) {
						learnsetData[moveid] = prevoLsetData[moveid];
					} else {
						learnsetData[moveid].push(...prevoLsetData[moveid]);
					}
				}
				prevo = prevoSpecies.prevo;
			}
			const problems = [];
			if (set.moves?.length) {
				for (const move of set.moves) {
					if (learnsetData[this.toID(move)] && !learnsetData[this.toID(move)].filter(v => !v.includes('S')).length) {
						problems.push(`${species.name}'s move ${move} is obtainable only through events.`);
					}
				}
			}
			if (problems.length) problems.push(`(Event-only moves are banned.)`);
			return problems;
		},
	},
	pickedteamsize: {
		effectType: 'Rule',
		name: 'Picked Team Size',
		desc: "Team size (number of pokemon) that can be brought out of Team Preview",
		hasValue: 'positive-integer',
		// hardcoded in sim/side
		onValidateRule() {
			if (!(this.ruleTable.has('teampreview') || this.ruleTable.has('teamtypepreview'))) {
				throw new Error(`The "Picked Team Size" rule${this.ruleTable.blame('pickedteamsize')} requires Team Preview.`);
			}
		},
	},
	minteamsize: {
		effectType: 'ValidatorRule',
		name: "Min Team Size",
		desc: "Minimum team size (number of pokemon) that can be brought into Team Preview (or into the battle, in formats without Team Preview)",
		hasValue: 'positive-integer',
		// hardcoded in sim/team-validator
	},
	evlimit: {
		effectType: 'ValidatorRule',
		name: "EV Limit",
		desc: "Maximum total EVs on each pokemon.",
		hasValue: 'integer',
		// hardcoded in sim/team-validator
	},
	maxteamsize: {
		effectType: 'ValidatorRule',
		name: "Max Team Size",
		desc: "Maximum team size (number of pokemon) that can be brought into Team Preview (or into the battle, in formats without Team Preview)",
		hasValue: 'positive-integer',
		// hardcoded in sim/team-validator
	},
	maxmovecount: {
		effectType: 'ValidatorRule',
		name: "Max Move Count",
		desc: "Max number of moves allowed on a single pokemon (defaults to 4 in a normal game)",
		hasValue: 'positive-integer',
		// hardcoded in sim/team-validator
	},
	maxtotallevel: {
		effectType: 'Rule',
		name: 'Max Total Level',
		desc: "Teams are restricted to a total maximum Level limit and Pokemon are restricted to a set range of Levels",
		hasValue: 'positive-integer',
		onValidateTeam(team) {
			const pickedTeamSize = this.ruleTable.pickedTeamSize || team.length;
			const maxTotalLevel = this.ruleTable.maxTotalLevel;
			if (maxTotalLevel === null) throw new Error("No maxTotalLevel specified.");

			const teamLevels = [];
			for (const set of team) {
				teamLevels.push(set.level);
			}
			teamLevels.sort((a, b) => a - b);

			let totalLowestLevels = 0;
			for (let i = 0; i < pickedTeamSize; i++) {
				totalLowestLevels += teamLevels[i];
			}
			if (totalLowestLevels > maxTotalLevel) {
				const thePokemon = pickedTeamSize === team.length ?
					`all ${team.length} Pokémon` : `the ${pickedTeamSize} lowest-leveled Pokémon`;
				return [
					`The combined levels of ${thePokemon} of your team is ${totalLowestLevels}, above the format's total level limit of ${maxTotalLevel}${this.ruleTable.blame('maxtotallevel')}.`,
				];
			}

			let minTotalWithHighestLevel = teamLevels[teamLevels.length - 1];
			for (let i = 0; i < pickedTeamSize - 1; i++) {
				minTotalWithHighestLevel += teamLevels[i];
			}
			if (minTotalWithHighestLevel > maxTotalLevel) {
				return [
					`Your highest level Pokémon is unusable, because there's no way to create a team with it whose total level is less than the format's total level limit of ${maxTotalLevel}${this.ruleTable.blame('maxtotallevel')}.`,
				];
			}
		},
		onValidateRule(value) {
			const ruleTable = this.ruleTable;
			const maxTotalLevel = ruleTable.maxTotalLevel!;
			const maxTeamSize = ruleTable.pickedTeamSize || ruleTable.maxTeamSize;
			const maxTeamSizeBlame = ruleTable.pickedTeamSize ? ruleTable.blame('pickedteamsize') : ruleTable.blame('maxteamsize');
			if (maxTotalLevel >= ruleTable.maxLevel * maxTeamSize) {
				throw new Error(`A Max Total Level of ${maxTotalLevel}${ruleTable.blame('maxtotallevel')} is too high (and will have no effect) with ${maxTeamSize}${maxTeamSizeBlame} Pokémon at max level ${ruleTable.maxLevel}${ruleTable.blame('maxlevel')}`);
			}
			if (maxTotalLevel <= ruleTable.minLevel * maxTeamSize) {
				throw new Error(`A Max Total Level of ${maxTotalLevel}${ruleTable.blame('maxtotallevel')} is too low with ${maxTeamSize}${maxTeamSizeBlame} Pokémon at min level ${ruleTable.minLevel}${ruleTable.blame('minlevel')}`);
			}
		},
		// hardcoded in sim/side
	},
	minlevel: {
		effectType: 'ValidatorRule',
		name: 'Min Level',
		desc: "Minimum level of brought Pokémon",
		hasValue: 'positive-integer',
		// hardcoded in sim/team-validator
	},
	maxlevel: {
		effectType: 'ValidatorRule',
		name: 'Max Level',
		desc: "Maximum level of brought Pokémon (if you're using both this and Adjust Level, this will control what level moves you have access to)",
		hasValue: 'positive-integer',
		// hardcoded in sim/team-validator
	},
	defaultlevel: {
		effectType: 'ValidatorRule',
		name: 'Default Level',
		desc: "Default level of brought Pokémon (normally should be equal to Max Level, except Custom Games have a very high max level but still default to 100)",
		hasValue: 'positive-integer',
		// hardcoded in sim/team-validator
	},
	adjustlevel: {
		effectType: 'ValidatorRule',
		name: 'Adjust Level',
		desc: "All Pokémon will be set to exactly this level (but unlike Max Level and Min Level, it will still be able to learn moves from above this level) (when using this, Max Level is the level of the pokemon before it's level-adjusted down)",
		hasValue: 'positive-integer',
		mutuallyExclusiveWith: 'adjustleveldown',
		// hardcoded in sim/team-validator
	},
	adjustleveldown: {
		effectType: 'ValidatorRule',
		name: 'Adjust Level Down',
		desc: "Any Pokémon above this level will be set to this level (but unlike Max Level, it will still be able to learn moves from above this level)",
		hasValue: 'positive-integer',
		mutuallyExclusiveWith: 'adjustlevel',
		// hardcoded in sim/team-validator
	},
	stadiumitemsclause: {
		effectType: 'ValidatorRule',
		name: 'Stadium Items Clause',
		desc: "Bans items that are not usable in Pokemon Stadium 2.",
		banlist: ['Fast Ball', 'Friend Ball', 'Great Ball', 'Heavy Ball', 'Level Ball', 'Love Ball', 'Lure Ball', 'Master Ball', 'Moon Ball', 'Park Ball', 'Poke Ball', 'Safari Ball', 'Ultra Ball', 'Fire Stone', 'Leaf Stone', 'Moon Stone', 'Sun Stone', 'Thunder Stone', 'Upgrade', 'Water Stone', 'Mail'],
	},
	nintendocup2000movelegality: {
		effectType: 'ValidatorRule',
		name: "Nintendo Cup 2000 Move Legality",
		desc: "Prevents Pok\u00e9mon from having moves that would only be obtainable in Pok\u00e9mon Crystal.",
		// Implemented in mods/gen2/rulesets.ts
	},
	nintendocup1997movelegality: {
		effectType: 'ValidatorRule',
		name: "Nintendo Cup 1997 Move Legality",
		desc: "Bans move combinations on Pok\u00e9mon that weren't legal in Nintendo Cup 1997.",
		// Implemented in mods/gen1jpn/rulesets.ts
	},
	noswitching: {
		effectType: 'Rule',
		name: 'No Switching',
		desc: 'All Pok\u00e9mon are trapped (cannot switch naturally, but can as the effect of an item, move, or Ability).',
		onBegin() {
			this.add('rule', 'No Switching: All Pok\u00e9mon are trapped');
		},
		onTrapPokemon(pokemon) {
			pokemon.trapped = true;
		},
	},
	chimera1v1rule: {
		effectType: 'Rule',
		name: 'Chimera 1v1 Rule',
		desc: "Validation and battle effects for Chimera 1v1.",
		ruleset: ['Team Preview', 'Picked Team Size = 6'],
		onValidateSet(set) {
			if (!set.item) return;
			const item = this.dex.items.get(set.item);
			if (item.itemUser && !this.ruleTable.has(`+item:${item.id}`)) {
				return [`${set.species}'s item ${item.name} is banned.`];
			}
		},
		onValidateRule() {
			const table = this.ruleTable;
			if ((table.pickedTeamSize || table.minTeamSize) < 6) {
				throw new Error(
					`Custom rules that could allow the active team size to be reduced below 6 (Min Team Size < 6, Picked Team Size < 6) could prevent the Chimera from being fully defined, and are incompatible with Chimera 1v1.`
				);
			}
			const gameType = this.format.gameType;
			if (gameType === 'doubles' || gameType === 'triples') {
				throw new Error(
					`The game type '${gameType}' cannot be 1v1 because sides can have multiple active Pok\u00e9mon, so it is incompatible with Chimera 1v1.`
				);
			}
		},
		onBeforeSwitchIn(pokemon) {
			const allies = pokemon.side.pokemon.splice(1);
			pokemon.side.pokemonLeft = 1;
			const newSpecies = this.dex.deepClone(pokemon.baseSpecies);
			newSpecies.abilities = allies[1].baseSpecies.abilities;
			newSpecies.baseStats = allies[2].baseSpecies.baseStats;
			newSpecies.bst = allies[2].baseSpecies.bst;
			pokemon.item = allies[0].item;
			pokemon.ability = pokemon.baseAbility = allies[1].ability;
			pokemon.set.evs = allies[2].set.evs;
			pokemon.set.nature = allies[2].set.nature;
			pokemon.set.ivs = allies[2].set.ivs;
			pokemon.hpType = (pokemon as any).baseHpType = allies[2].baseHpType;
			pokemon.moveSlots = (pokemon as any).baseMoveSlots = [
				...allies[3].baseMoveSlots.slice(0, 2), ...allies[4].baseMoveSlots.slice(2),
			].filter((move, index, moveSlots) => moveSlots.find(othermove => othermove.id === move.id) === move);
			// so all HP-related properties get re-initialized in setSpecies
			pokemon.maxhp = 0;
			pokemon.setSpecies(newSpecies, null);
		},
	},
	bonustyperule: {
		name: "Bonus Type Rule",
		effectType: "Rule",
		desc: `Pok&eacute;mon can be nicknamed the name of a type to have that type added onto their current ones. Gaining the Shadow type in this way is banned.`,
		onValidateTeam(team) {
			for (const set of team) {
				if (set.name === 'Shadow' || set.name === 'shadow') return [`${set.name}'s nickname is banned by Bonus Type Rule.`];
			}
		},
		onBegin() {
			this.add('rule', 'Bonus Type Rule: Pok\u00e9mon can be nicknamed the name of a type to have that type added onto their current ones.');
		},
		onModifySpeciesPriority: 1,
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // Chat command
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			const typesSet = new Set(species.types);
			const bonusType = this.dex.types.get(target.set.name);
			if (bonusType.exists && bonusType.name !== 'Shadow') typesSet.add(bonusType.name);
			return {...species, types: [...typesSet]};
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
		},
	},
	firstbloodrule: {
		effectType: "Rule",
		name: "First Blood Rule",
		desc: `The first team to have a Pok&eacute;mon faint loses.`,
		onBegin() {
			this.add('rule', 'First Blood Rule: The first team to have a Pok\u00e9mon faint loses.');
		},
		onFaint(target) {
			this.lose(target.side);
		},
	},
	tiershiftmod: {
		effectType: "Rule",
		name: "Tier Shift Mod",
		desc: `Pok&eacute;mon below OU get their stats, excluding HP, boosted. UU/RUBL get +10, RU/NUBL get +20, NU/PUBL get +30, and PU or lower get +40.`,
		ruleset: ['Overflow Stat Mod'],
		onBegin() {
			this.add('rule', 'Tier Shift Mod: Pok\u00e9mon get stat buffs depending on their tier, excluding HP.');
		},
		onModifySpecies(species, target, source, effect) {
			if (!species.baseStats) return;
			const boosts: {[tier: string]: number} = {
				uu: 10,
				rubl: 10,
				ru: 20,
				nubl: 20,
				nu: 30,
				publ: 30,
				pu: 40,
				nfe: 40,
				lc: 40,
			};
			let tier: string = this.toID(species.tier);
			if (!(tier in boosts)) return;
			// Non-Pokemon bans in lower tiers
			if (target) {
				if (target.set.item === 'lightclay') return;
				if (['drizzle', 'drought', 'snowwarning'].includes(target.set.ability) && boosts[tier] > 20) tier = 'nubl';
			}
			const pokemon = this.dex.deepClone(species);
			pokemon.bst = pokemon.baseStats['hp'];
			const boost = boosts[tier];
			let statName: StatID;
			for (statName in pokemon.baseStats as StatsTable) {
				if (statName === 'hp') continue;
				pokemon.baseStats[statName] = this.clampIntRange(pokemon.baseStats[statName] + boost, 1, 255);
				pokemon.bst += pokemon.baseStats[statName];
			}
			return pokemon;
		},
	},
	crossevolutionmod: {
		effectType: "Rule",
		name: "Cross Evolution Mod",
		desc: "Give a Pok&eacute;mon a Pok&eacute;mon name of the next evolution stage as a nickname to inherit stat changes, typing, abilities, and up to 2 moves from the next stage Pok&eacute;mon.",
		ruleset: ['Overflow Stat Mod'],
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
			const onChangeSet = this.dex.formats.get('Pokemon').onChangeSet;
			let problems = onChangeSet?.call(this, set, this.format) || null;
			if (Array.isArray(problems) && problems.length) return problems;
			const crossNonstandard = !this.ruleTable.has('standardnatdex') && crossSpecies.isNonstandard === 'Past';
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
			mixedSpecies.baseSpecies = mixedSpecies.name = `${species.name}-${crossSpecies.name}`;
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
	revelationmonsmod: {
		effectType: "Rule",
		name: "Revelationmons Mod",
		desc: `The moves in the first slot(s) of a Pok&eacute;mon's set have their types changed to match the Pok&eacute;mon's type(s).`,
		onBegin() {
			this.add('rule', 'Revelationmons Mod: The first moveslots have their types changed to match the Pok\u00e9mon\'s types');
		},
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const slotIndex = species.types.length - 1;
			const problems = [];
			for (const [i, moveid] of set.moves.entries()) {
				const move = this.dex.moves.get(moveid);
				if (!this.ruleTable.isRestricted(`move:${move.id}`)) continue;
				if (i <= slotIndex) {
					problems.push(`${move.name} can't be in moveslot ${i + 1} because it's restricted from being in the first ${slotIndex + 1 > 1 ? `${slotIndex + 1} slots` : 'slot'}.`);
				}
			}
			return problems;
		},
		onModifyMove(move, pokemon, target) {
			const types = pokemon.getTypes(true);
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (noModifyType.includes(move.id)) return;
			for (const [i, type] of types.entries()) {
				if (!this.dex.types.isName(type)) continue;
				if (pokemon.moveSlots[i] && move.id === pokemon.moveSlots[i].id) move.type = type;
			}
		},
	},
};
