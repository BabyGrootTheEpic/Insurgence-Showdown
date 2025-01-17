export const FormatsData: {[k: string]: SpeciesFormatsData} = {
	/*Instead of attempting to keep tiers up to date with National Dex and adding tierings for fakemons,
	* everything will be either AG, Uber, (PU) (a.k.a. untiered), NFE, or LC.*/
	testmon: {
		tier: "AG",
	},
	divaevus: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	maladeux: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	ausitto: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	megasparce: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	fulsignis: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	umilautus: {
		//isNonstandard: "Past",
		tier: "AG", //Its only ability is banned in Ubers
	},
	gaiacastus: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	tonitreum: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	terranumen: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	adamandura: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	geludeus: {
		//isNonstandard: "Past",
		tier: "AG", //Its only ability is banned in Ubers
	},
	memorpheus: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	certapugno: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	ryubestia: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	exarego: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	venocoluber: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	ferrocalyps: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	sepulcumbra: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	caelitus: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	leporea: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	warhaxorus: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	cybergoomy: {
		//isNonstandard: "Past",
		tier: "AG",
	},
	hydreigod: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	machamence: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	rizeflygon: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	shineflygon: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	gigagoomy: {
		//isNonstandard: "Past",
		tier: "AG",
	},
	bulbasaur: {
		tier: "LC",
	},
	bulbasaurdelta: {
		tier: "LC",
	},
	ivysaur: {
		tier: "NFE",
	},
	ivysaurdelta: {
		tier: "NFE",
	},
	venusaur: {
		randomBattleMoves: ["gigadrain", "leechseed", "sleeppowder", "sludgebomb", "substitute"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	venusaurdelta: {
		randomBattleMoves: ["calmmind", "moonblast", "psychic", "moonlight", "leechseed", "earthquake"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	venusaurmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	venusaurdeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	venusaurgmax: {
		randomDoubleBattleMoves: ["earthpower", "energyball", "leechseed", "protect", "sleeppowder", "sludgebomb"],
		randomDoubleBattleLevel: 80,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	charmander: {
		tier: "LC",
	},
	charmanderdelta: {
		tier: "LC",
	},
	charmeleon: {
		tier: "NFE",
	},
	charmeleondelta: {
		tier: "NFE",
	},
	charizard: {
		randomBattleMoves: ["airslash", "earthquake", "fireblast", "focusblast", "roost"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["airslash", "heatwave", "overheat", "protect", "scorchingsands", "tailwind"],
		randomDoubleBattleLevel: 80,
		randomBattleNoDynamaxMoves: ["defog", "earthquake", "fireblast", "hurricane", "roost", "toxic"],
		tier: "(PU)",
	},
	charizarddelta: {
		randomBattleMoves: ["dragondance", "shadowbone", "outrage", "dracometeor", "earthquake"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	charizardmegax: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	charizardmegay: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	charizardgmax: {
		randomDoubleBattleMoves: ["airslash", "fireblast", "focusblast", "heatwave", "protect", "tailwind"],
		randomDoubleBattleLevel: 80,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	charizarddeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	charizarddeltae: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	squirtle: {
		tier: "LC",
	},
	squirtledelta: {
		tier: "LC",
	},
	wartortle: {
		tier: "NFE",
	},
	wartortledelta: {
		tier: "NFE",
	},
	blastoise: {
		randomBattleMoves: ["earthquake", "hydropump", "icebeam", "shellsmash"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["icebeam", "muddywater", "protect", "shellsmash"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	blastoisedelta: {
		randomBattleMoves: ["knockoff", "closecombat", "flashcannon", "uturn", "stealthrock", "spikes"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	blastoisemega: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	blastoisedeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	blastoisegmax: {
		randomBattleMoves: ["icebeam", "protect", "rapidspin", "scald", "toxic"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["fakeout", "flipturn", "followme", "icywind", "lifedew", "muddywater", "protect"],
		randomDoubleBattleLevel: 80,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	blastoisedeltas: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	caterpie: {
		tier: "LC",
	},
	metapod: {
		tier: "NFE",
	},
	butterfree: {
		randomBattleMoves: ["energyball", "hurricane", "quiverdance", "sleeppowder"],
		randomBattleLevel: 87,
		randomDoubleBattleMoves: ["hurricane", "pollenpuff", "protect", "ragepowder", "sleeppowder", "tailwind"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	butterfreegmax: {
		randomBattleMoves: ["airslash", "bugbuzz", "quiverdance", "sleeppowder"],
		randomBattleLevel: 87,
		randomDoubleBattleMoves: ["hurricane", "pollenpuff", "protect", "quiverdance", "sleeppowder"],
		randomDoubleBattleLevel: 88,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	weedle: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	kakuna: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	beedrill: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	beedrillmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	pidgey: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	pidgeydelta: {
		tier: "LC",
	},
	pidgeotto: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	pidgeottodelta: {
		tier: "NFE",
	},
	pidgeot: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	pidgeotdelta: {
		randomBattleMoves: ["dragondance", "knockoff", "outrage", "irontail", "uturn"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	pidgeotmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	pidgeotdeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	rattata: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	rattataalola: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	raticate: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	raticatealola: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	raticatealolatotem: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	spearow: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	fearow: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	ekans: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	arbok: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	pichu: {
		tier: "LC",
	},
	pichudelta: {
		tier: "LC",
	},
	pichuspikyeared: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	pikachu: {
		randomBattleMoves: ["irontail", "knockoff", "surf", "voltswitch", "volttackle"],
		randomBattleLevel: 92,
		randomDoubleBattleMoves: ["fakeout", "grassknot", "knockoff", "protect", "volttackle"],
		randomDoubleBattleLevel: 91,
		tier: "NFE",
	},
	pikachudelta: {
		tier: "NFE",
	},
	pikachucosplay: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	pikachurockstar: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	pikachubelle: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	pikachupopstar: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	pikachuphd: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	pikachulibre: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	pikachuoriginal: {
		tier: "(PU)",
	},
	pikachuhoenn: {
		tier: "(PU)",
	},
	pikachusinnoh: {
		tier: "(PU)",
	},
	pikachuunova: {
		tier: "(PU)",
	},
	pikachukalos: {
		tier: "(PU)",
	},
	pikachualola: {
		tier: "(PU)",
	},
	pikachupartner: {
		tier: "(PU)",
	},
	pikachustarter: {
		//isNonstandard: "LGPE",
		tier: "(PU)",
	},
	pikachugmax: {
		randomDoubleBattleMoves: ["extremespeed", "fakeout", "knockoff", "surf", "volttackle"],
		randomDoubleBattleLevel: 90,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	pikachustartergmax: {
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	pikachuworld: {
		tier: "(PU)",
	},
	raichu: {
		randomBattleMoves: ["focusblast", "grassknot", "nastyplot", "surf", "thunderbolt", "voltswitch"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["encore", "fakeout", "grassknot", "helpinghand", "nuzzle", "protect", "thunderbolt", "voltswitch"],
		randomDoubleBattleLevel: 88,
		randomBattleNoDynamaxMoves: ["encore", "focusblast", "grassknot", "nastyplot", "surf", "thunderbolt", "voltswitch"],
		tier: "(PU)",
	},
	raichudelta: {
		randomBattleMoves: ["moonblast", "hurricane", "rapidspin", "focusblast", "knockoff", "uturn"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	raichualola: {
		randomBattleMoves: ["focusblast", "grassknot", "nastyplot", "psyshock", "thunderbolt", "voltswitch"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["focusblast", "nastyplot", "psyshock", "thunderbolt", "voltswitch"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	raichudeltas: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	sandshrew: {
		tier: "LC",
	},
	sandshrewalola: {
		tier: "LC",
	},
	sandslash: {
		randomBattleMoves: ["earthquake", "knockoff", "rapidspin", "spikes", "stealthrock", "stoneedge", "swordsdance", "toxic"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["drillrun", "knockoff", "protect", "stealthrock", "stoneedge", "swordsdance"],
		randomDoubleBattleLevel: 89,
		tier: "(PU)",
	},
	sandslashalola: {
		randomBattleMoves: ["earthquake", "ironhead", "knockoff", "rapidspin", "swordsdance", "tripleaxel"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["drillrun", "ironhead", "protect", "swordsdance", "tripleaxel"],
		randomDoubleBattleLevel: 90,
		tier: "(PU)",
	},
	nidoranf: {
		tier: "LC",
	},
	nidorina: {
		tier: "NFE",
	},
	nidoqueen: {
		randomBattleMoves: ["earthpower", "icebeam", "sludgewave", "stealthrock", "toxicspikes"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["earthpower", "icebeam", "protect", "sludgebomb", "stealthrock"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	nidoranm: {
		tier: "LC",
	},
	nidorino: {
		tier: "NFE",
	},
	nidoking: {
		randomBattleMoves: ["earthpower", "icebeam", "sludgewave", "substitute", "superpower"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["earthpower", "fireblast", "icebeam", "protect", "sludgebomb", "superpower"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	cleffa: {
		tier: "LC",
	},
	clefairy: {
		randomDoubleBattleMoves: ["followme", "helpinghand", "moonblast", "protect"],
		randomDoubleBattleLevel: 95,
		tier: "NFE",
	},
	clefable: {
		randomBattleMoves: ["calmmind", "fireblast", "moonblast", "softboiled", "stealthrock", "thunderwave"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["fireblast", "followme", "healpulse", "helpinghand", "moonblast", "protect", "thunderwave"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	vulpix: {
		tier: "LC",
	},
	vulpixalola: {
		tier: "LC",
	},
	ninetales: {
		randomBattleMoves: ["fireblast", "nastyplot", "scorchingsands", "solarbeam", "willowisp"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["heatwave", "nastyplot", "protect", "scorchingsands", "solarbeam"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	ninetalesalola: {
		randomBattleMoves: ["auroraveil", "blizzard", "freezedry", "moonblast", "nastyplot"],
		randomBattleLevel: 79,
		randomDoubleBattleMoves: ["auroraveil", "blizzard", "encore", "freezedry", "moonblast"],
		randomDoubleBattleLevel: 81,
		tier: "(PU)",
	},
	ninetalesdelta: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	igglybuff: {
		tier: "LC",
	},
	jigglypuff: {
		tier: "NFE",
	},
	wigglytuff: {
		randomBattleMoves: ["dazzlinggleam", "fireblast", "healbell", "lightscreen", "reflect", "stealthrock"],
		randomBattleLevel: 90,
		randomDoubleBattleMoves: ["dazzlinggleam", "healpulse", "helpinghand", "hypervoice", "thunderwave"],
		randomDoubleBattleLevel: 90,
		tier: "(PU)",
	},
	zubat: {
		tier: "LC",
	},
	golbat: {
		tier: "NFE",
	},
	crobat: {
		randomBattleMoves: ["bravebird", "defog", "roost", "superfang", "taunt", "toxic", "uturn"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["bravebird", "defog", "roost", "superfang", "tailwind", "taunt"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	oddish: {
		tier: "LC",
	},
	gloom: {
		tier: "NFE",
	},
	vileplume: {
		randomBattleMoves: ["aromatherapy", "gigadrain", "sleeppowder", "sludgebomb", "strengthsap"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["aromatherapy", "energyball", "pollenpuff", "sleeppowder", "sludgebomb", "strengthsap"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	bellossom: {
		randomBattleMoves: ["gigadrain", "moonblast", "quiverdance", "sleeppowder", "strengthsap"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["energyball", "moonblast", "quiverdance", "sleeppowder", "strengthsap"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	paras: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	parasect: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	venonat: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	venomoth: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	diglett: {
		tier: "LC",
	},
	diglettdelta: {
		tier: "LC",
	},
	diglettalola: {
		tier: "LC",
	},
	dugtrio: {
		randomBattleMoves: ["earthquake", "memento", "stoneedge", "suckerpunch"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["highhorsepower", "memento", "protect", "rockslide", "substitute", "suckerpunch"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	dugtriomega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	dugtriodelta: {
		randomBattleMoves: ["headcharge", "iciclecrash", "earthquake", "extremespeed", "knockoff"],
		randomBattleLevel: 88,
		tier: "(PU)",
	},
	dugtrioalola: {
		randomBattleMoves: ["earthquake", "ironhead", "stealthrock", "stoneedge", "suckerpunch"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["highhorsepower", "ironhead", "memento", "protect", "rockslide", "suckerpunch"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	meowth: {
		tier: "LC",
	},
	meowthalola: {
		tier: "LC",
	},
	meowthgalar: {
		tier: "LC",
	},
	meowthgmax: {
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	persian: {
		randomBattleMoves: ["doubleedge", "fakeout", "knockoff", "playrough", "uturn"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["doubleedge", "fakeout", "hypnosis", "icywind", "knockoff", "taunt"],
		randomDoubleBattleLevel: 90,
		tier: "(PU)",
	},
	persianalola: {
		randomBattleMoves: ["darkpulse", "hypnosis", "nastyplot", "thunderbolt"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["fakeout", "foulplay", "icywind", "partingshot", "protect", "snarl", "taunt"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	perrserker: {
		randomBattleMoves: ["closecombat", "crunch", "fakeout", "ironhead", "uturn"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["closecombat", "fakeout", "ironhead", "lashout", "protect", "uturn"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	psyduck: {
		tier: "LC",
	},
	golduck: {
		randomBattleMoves: ["calmmind", "focusblast", "icebeam", "psyshock", "scald", "substitute"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["calmmind", "encore", "icebeam", "muddywater", "protect"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	mankey: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	primeape: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	growlithe: {
		tier: "LC",
	},
	growlithedelta: {
		tier: "LC",
	},
	growlithehisui: {
		//isNonstandard: "Future",
		tier: "LC",
	},
	arcanine: {
		randomBattleMoves: ["closecombat", "extremespeed", "flareblitz", "morningsun", "toxic", "wildcharge", "willowisp"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["closecombat", "extremespeed", "flareblitz", "morningsun", "protect", "snarl", "willowisp"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	arcaninedelta: {
		randomBattleMoves: ["swordsdance", "extremespeed", "earthquake", "dracojet", "outrage"],
		randomBattleLevel: 76,
		tier: "(PU)",
	},
	arcaninehisui: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	poliwag: {
		tier: "LC",
	},
	poliwhirl: {
		tier: "NFE",
	},
	poliwrath: {
		randomBattleMoves: ["closecombat", "darkestlariat", "liquidation", "raindance"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["closecombat", "coaching", "darkestlariat", "helpinghand", "icywind", "liquidation", "protect"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	poliwrathmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	politoed: {
		randomBattleMoves: ["encore", "icebeam", "protect", "rest", "scald", "toxic"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["earthpower", "helpinghand", "icywind", "muddywater", "protect"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	politoedmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	abra: {
		tier: "LC",
	},
	kadabra: {
		tier: "NFE",
	},
	alakazam: {
		randomBattleMoves: ["counter", "focusblast", "nastyplot", "psychic", "shadowball"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["focusblast", "nastyplot", "protect", "psychic", "shadowball"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	alakazammega: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	machop: {
		tier: "LC",
	},
	machoke: {
		tier: "NFE",
	},
	machamp: {
		randomBattleMoves: ["bulletpunch", "closecombat", "dynamicpunch", "facade", "knockoff", "stoneedge"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["bulletpunch", "closecombat", "facade", "knockoff", "protect"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	machampgmax: {
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	machampdelta: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	bellsprout: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	bellsproutzo: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	weepinbell: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	weepinbellzo: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	victreebel: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	victreebelzo: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	tentacool: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	tentacooldelta: {
		tier: "LC",
	},
	tentacruel: {
		randomBattleMoves: ["haze", "knockoff", "rapidspin", "scald", "sludgebomb", "toxicspikes"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["acidspray", "icywind", "knockoff", "muddywater", "rapidspin", "sludgebomb"],
		randomDoubleBattleLevel: 87,
		tier: "(PU)",
	},
	tentacrueldelta: {
		randomBattleMoves: ["corrode", "powerwhip", "strengthsap", "knockoff", "toxicspikes", "sleeppowder"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	geodude: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	geodudedelta: {
		tier: "LC",
	},
	geodudealola: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	graveler: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	gravelerdelta: {
		tier: "NFE",
	},
	graveleralola: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	golem: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	golemdelta: {
		randomBattleMoves: ["stoneedge", "zenheadbutt", "earthquake", "icepunch", "stealthrock", "knockoff"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	golemalola: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	ponyta: {
		tier: "LC",
	},
	ponytagalar: {
		tier: "LC",
	},
	rapidash: {
		randomBattleMoves: ["flareblitz", "highhorsepower", "morningsun", "swordsdance", "wildcharge", "willowisp"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["flareblitz", "highhorsepower", "morningsun", "protect", "swordsdance", "wildcharge"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	rapidashgalar: {
		randomBattleMoves: ["highhorsepower", "morningsun", "playrough", "swordsdance", "zenheadbutt"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["highhorsepower", "playrough", "protect", "swordsdance", "zenheadbutt"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	slowpoke: {
		tier: "LC",
	},
	slowpokegalar: {
		tier: "LC",
	},
	slowbro: {
		randomBattleMoves: ["futuresight", "icebeam", "scald", "slackoff", "teleport", "thunderwave"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["calmmind", "fireblast", "icebeam", "psychic", "scald", "slackoff", "trickroom"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	slowbromega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	slowbrogalar: {
		randomBattleMoves: ["flamethrower", "psychic", "shellsidearm", "trick", "trickroom"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["fireblast", "healpulse", "protect", "psychic", "shellsidearm", "trickroom"],
		randomDoubleBattleLevel: 85,
		tier: "(PU)",
	},
	slowking: {
		randomBattleMoves: ["fireblast", "futuresight", "psyshock", "scald", "slackoff", "teleport", "toxic", "trick"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["fireblast", "icebeam", "nastyplot", "psychic", "scald", "slackoff", "trickroom"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	slowkinggalar: {
		randomBattleMoves: ["fireblast", "futuresight", "psyshock", "slackoff", "sludgebomb", "trick"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["fireblast", "protect", "psychic", "sludgebomb", "trick", "trickroom"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	magnemite: {
		tier: "LC",
	},
	magneton: {
		tier: "NFE",
	},
	magnezone: {
		randomBattleMoves: ["bodypress", "flashcannon", "mirrorcoat", "thunderbolt", "voltswitch"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["bodypress", "electroweb", "flashcannon", "protect", "thunderbolt", "voltswitch"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	farfetchd: {
		randomBattleMoves: ["bravebird", "closecombat", "knockoff", "leafblade", "swordsdance"],
		randomBattleLevel: 90,
		randomDoubleBattleMoves: ["bravebird", "closecombat", "leafblade", "protect", "quickattack", "swordsdance"],
		randomDoubleBattleLevel: 95,
		tier: "(PU)",
	},
	farfetchdgalar: {
		tier: "LC",
	},
	sirfetchd: {
		randomBattleMoves: ["bravebird", "closecombat", "firstimpression", "knockoff", "swordsdance"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["bravebird", "closecombat", "firstimpression", "knockoff", "poisonjab", "protect", "swordsdance"],
		randomDoubleBattleLevel: 85,
		randomBattleNoDynamaxMoves: ["bravebird", "closecombat", "firstimpression", "knockoff", "poisonjab", "swordsdance"],
		tier: "(PU)",
	},
	doduo: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	doduodelta: {
		tier: "LC",
	},
	dodrio: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	dodriodelta: {
		randomBattleMoves: ["zenheadbutt", "bravebird", "superpower", "knockoff"],
		randomBattleLevel: 88,
		tier: "(PU)",
	},
	seel: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	dewgong: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	grimer: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	grimerdelta: {
		tier: "LC",
	},
	grimeralola: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	muk: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	mukdelta: {
		randomBattleMoves: ["earthquake", "recover", "stealthrock", "stoneedge", "knockoff"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	mukdeltawater: {
		tier: "(PU)",
	},
	mukdeltagrass: {
		tier: "(PU)",
	},
	mukdeltafire: {
		tier: "(PU)",
	},
	mukdeltadark: {
		tier: "(PU)",
	},
	mukdeltanormal: {
		tier: "(PU)",
	},
	mukdeltapsychic: {
		tier: "(PU)",
	},
	mukalola: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	shellder: {
		tier: "LC",
	},
	cloyster: {
		randomBattleMoves: ["explosion", "hydropump", "iciclespear", "rockblast", "shellsmash"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["hydropump", "iciclespear", "protect", "rockblast", "shellsmash"],
		randomDoubleBattleLevel: 84,
		randomBattleNoDynamaxMoves: ["hydropump", "iciclespear", "rockblast", "shellsmash"],
		tier: "(PU)",
	},
	gastly: {
		tier: "LC",
	},
	haunter: {
		tier: "NFE",
	},
	gengar: {
		randomDoubleBattleMoves: ["focusblast", "nastyplot", "protect", "shadowball", "sludgebomb", "thunderbolt", "trick", "willowisp"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	gengarmega: {
		//isNonstandard: "Past",
		tier: "AG", //Its only ability is banned in Ubers
	},
	gengargmax: {
		randomBattleMoves: ["focusblast", "nastyplot", "shadowball", "sludgewave", "trick"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["focusblast", "nastyplot", "protect", "shadowball", "sludgebomb", "thunderbolt", "willowisp"],
		randomDoubleBattleLevel: 86,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	onix: {
		tier: "LC",
	},
	steelix: {
		randomBattleMoves: ["dragondance", "earthquake", "headsmash", "heavyslam", "stealthrock", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["headsmash", "heavyslam", "highhorsepower", "protect", "rockpolish"],
		randomDoubleBattleLevel: 88,
		randomBattleNoDynamaxMoves: ["curse", "earthquake", "headsmash", "heavyslam", "stealthrock", "toxic"],
		tier: "(PU)",
	},
	steelixmegasteel: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	steelixmegafire: {
		tier: "(PU)",
	},
	drowzee: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	hypno: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	krabby: {
		tier: "LC",
	},
	kingler: {
		randomBattleMoves: ["agility", "liquidation", "rockslide", "superpower", "swordsdance", "xscissor"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["agility", "knockoff", "liquidation", "protect", "superpower", "xscissor"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	kinglergmax: {
		randomDoubleBattleMoves: ["knockoff", "liquidation", "protect", "superpower", "xscissor"],
		randomDoubleBattleLevel: 86,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	voltorb: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	voltorbhisui: {
		//isNonstandard: "Future",
		tier: "LC",
	},
	electrode: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	electrodehisui: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	exeggcute: {
		tier: "LC",
	},
	exeggutor: {
		randomBattleMoves: ["gigadrain", "leechseed", "psychic", "sleeppowder", "substitute"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["energyball", "protect", "psychic", "sleeppowder", "trickroom"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	exeggutoralola: {
		randomBattleMoves: ["dracometeor", "flamethrower", "gigadrain", "leafstorm", "trickroom"],
		randomBattleLevel: 87,
		randomDoubleBattleMoves: ["dragonpulse", "energyball", "flamethrower", "protect", "trickroom"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	cubone: {
		tier: "LC",
	},
	marowak: {
		randomBattleMoves: ["doubleedge", "earthquake", "knockoff", "stealthrock", "stoneedge", "swordsdance"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["bonemerang", "knockoff", "protect", "stealthrock", "stoneedge"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	marowakalola: {
		randomBattleMoves: ["earthquake", "flamecharge", "flareblitz", "poltergeist", "stealthrock", "stoneedge"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["bonemerang", "flamecharge", "flareblitz", "protect", "shadowbone"],
		randomDoubleBattleLevel: 83,
		tier: "(PU)",
	},
	marowakalolatotem: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	marowakmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	tyrogue: {
		tier: "LC",
	},
	hitmonlee: {
		randomBattleMoves: ["closecombat", "curse", "highjumpkick", "knockoff", "poisonjab", "stoneedge"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["closecombat", "fakeout", "knockoff", "poisonjab", "protect", "rockslide"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	hitmonchan: {
		randomBattleMoves: ["bulkup", "drainpunch", "icepunch", "machpunch", "rapidspin", "throatchop"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["coaching", "drainpunch", "feint", "firepunch", "icepunch", "machpunch", "protect"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	hitmontop: {
		randomBattleMoves: ["closecombat", "earthquake", "rapidspin", "suckerpunch", "toxic", "tripleaxel"],
		randomBattleLevel: 85,
		randomDoubleBattleMoves: ["closecombat", "coaching", "fakeout", "helpinghand", "rapidspin", "suckerpunch", "tripleaxel"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	lickitung: {
		tier: "LC",
	},
	lickilicky: {
		randomBattleMoves: ["bodyslam", "earthquake", "explosion", "healbell", "knockoff", "protect", "swordsdance", "wish"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["bodyslam", "explosion", "helpinghand", "icywind", "knockoff", "protect"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	koffing: {
		tier: "LC",
	},
	koffingdelta: {
		tier: "LC",
	},
	weezing: {
		randomBattleMoves: ["fireblast", "painsplit", "sludgebomb", "toxicspikes", "willowisp"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["fireblast", "painsplit", "sludgebomb", "toxicspikes", "willowisp"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	weezinggalar: {
		randomBattleMoves: ["defog", "fireblast", "painsplit", "sludgebomb", "strangesteam", "toxicspikes", "willowisp"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["clearsmog", "defog", "fireblast", "painsplit", "strangesteam", "toxicspikes", "willowisp"],
		randomDoubleBattleLevel: 89,
		tier: "(PU)",
	},
	weezingdelta: {
		randomBattleMoves: ["boomburst", "overdrive", "calmmind", "roost", "hurricane"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	rhyhorn: {
		tier: "LC",
	},
	rhydon: {
		tier: "NFE",
		randomBattleMoves: ["earthquake", "megahorn", "stealthrock", "stoneedge", "toxic"],
		randomBattleLevel: 87,
	},
	rhyperior: {
		randomBattleMoves: ["earthquake", "firepunch", "megahorn", "rockpolish", "stoneedge"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["highhorsepower", "icepunch", "megahorn", "protect", "rockslide", "stoneedge"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	happiny: {
		tier: "LC",
	},
	chansey: {
		randomBattleMoves: ["healbell", "seismictoss", "softboiled", "stealthrock", "toxic"],
		randomBattleLevel: 84,
		tier: "NFE",
	},
	blissey: {
		randomBattleMoves: ["seismictoss", "softboiled", "stealthrock", "teleport", "toxic"],
		randomBattleLevel: 83,
		randomDoubleBattleMoves: ["allyswitch", "protect", "seismictoss", "softboiled", "thunderwave", "toxic"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	tangela: {
		tier: "LC",
	},
	tangeladelta: {
		tier: "LC",
	},
	tangrowth: {
		randomBattleMoves: ["earthquake", "gigadrain", "knockoff", "leechseed", "sleeppowder", "sludgebomb"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["focusblast", "knockoff", "powerwhip", "ragepowder", "sleeppowder"],
		randomDoubleBattleLevel: 85,
		tier: "(PU)",
	},
	tangrowthdelta: {
		randomBattleMoves: ["earthquake", "knockoff", "closecombat", "stealthrock", "spikes", "synthesis"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	kangaskhan: {
		randomBattleMoves: ["doubleedge", "earthquake", "fakeout", "hammerarm", "suckerpunch"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["doubleedge", "drainpunch", "fakeout", "protect", "rockslide", "suckerpunch"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	kangaskhanmega: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	horsea: {
		tier: "LC",
	},
	horseazo: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	seadra: {
		tier: "NFE",
	},
	seadrazo: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	kingdra: {
		randomBattleMoves: ["dracometeor", "flipturn", "hurricane", "hydropump", "raindance"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["dracometeor", "hurricane", "hydropump", "icebeam", "muddywater", "raindance"],
		randomDoubleBattleLevel: 82,
		randomBattleNoDynamaxMoves: ["dracometeor", "flipturn", "hydropump", "icebeam", "raindance"],
		tier: "(PU)",
	},
	kingdrazo: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	goldeen: {
		tier: "LC",
	},
	seaking: {
		randomBattleMoves: ["drillrun", "knockoff", "megahorn", "swordsdance", "waterfall"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["drillrun", "knockoff", "megahorn", "protect", "scaleshot", "swordsdance", "waterfall"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	staryu: {
		tier: "LC",
	},
	starmie: {
		randomBattleMoves: ["hydropump", "icebeam", "psyshock", "rapidspin", "recover", "scald", "thunderbolt"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["flipturn", "hydropump", "icebeam", "protect", "psyshock", "thunderbolt"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	mimejr: {
		tier: "LC",
	},
	mrmime: {
		randomBattleMoves: ["dazzlinggleam", "focusblast", "healingwish", "nastyplot", "psychic"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["dazzlinggleam", "fakeout", "icywind", "lightscreen", "psychic", "reflect"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	mrmimegalar: {
		randomBattleMoves: ["focusblast", "freezedry", "nastyplot", "psychic", "rapidspin"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["fakeout", "focusblast", "freezedry", "nastyplot", "protect", "psychic"],
		randomDoubleBattleLevel: 86,
		tier: "NFE",
	},
	mrrime: {
		randomBattleMoves: ["focusblast", "freezedry", "psychic", "rapidspin", "slackoff", "trick"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["fakeout", "focusblast", "freezedry", "icywind", "protect", "psychic", "rapidspin"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	scyther: {
		randomBattleMoves: ["brickbreak", "dualwingbeat", "knockoff", "roost", "swordsdance", "uturn"],
		randomBattleLevel: 81,
		randomDoubleBattleMoves: ["brickbreak", "bugbite", "dualwingbeat", "uturn"],
		randomDoubleBattleLevel: 84,
		tier: "LC",
	},
	scytherdelta: {
		randomBattleMoves: ["honeclaws", "roost", "iciclecrash", "closecombat", "knockoff"],
		randomBattleLevel: 80,
		tier: "LC",
	},
	scizor: {
		randomBattleMoves: ["bulletpunch", "dualwingbeat", "knockoff", "roost", "superpower", "swordsdance", "uturn"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["bugbite", "bulletpunch", "dualwingbeat", "feint", "protect", "superpower", "swordsdance", "uturn"],
		randomDoubleBattleLevel: 80,
		randomBattleNoDynamaxMoves: ["bulletpunch", "knockoff", "roost", "superpower", "swordsdance", "uturn"],
		tier: "(PU)",
	},
	scizordelta: {
		randomBattleMoves: ["swordsdance", "icepunch", "closecombat", "roost", "knockoff", "iceshard", "agility"],
		randomBattleLevel: 80,
		tier: "(PU)",
	},
	scizormega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	scizordeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	smoochum: {
		tier: "LC",
	},
	jynx: {
		randomBattleMoves: ["focusblast", "icebeam", "lovelykiss", "nastyplot", "psyshock", "trick"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["focusblast", "icebeam", "lovelykiss", "nastyplot", "psychic"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	elekid: {
		tier: "LC",
	},
	elekiddelta: {
		tier: "LC",
	},
	electabuzz: {
		tier: "NFE",
	},
	electabuzzdelta: {
		tier: "NFE",
	},
	electivire: {
		randomBattleMoves: ["crosschop", "earthquake", "flamethrower", "icepunch", "voltswitch", "wildcharge"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["crosschop", "flamethrower", "icepunch", "stompingtantrum", "wildcharge"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	electiviredelta: {
		randomBattleMoves: ["swordsdance", "stoneedge", "outrage", "earthquake", "dracojet"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	magby: {
		tier: "LC",
	},
	magbyzo: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	magbydelta: {
		tier: "LC",
	},
	magmar: {
		tier: "NFE",
	},
	magmarzo: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	magmardelta: {
		tier: "NFE",
	},
	magmortar: {
		randomBattleMoves: ["earthquake", "fireblast", "focusblast", "psychic", "taunt", "thunderbolt"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["fireblast", "focusblast", "heatwave", "protect", "thunderbolt"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	magmortarzo: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	magmortardelta: {
		randomBattleMoves: ["waterpulse", "flashcannon", "aurasphere", "icebeam", "energyball", "flipturn"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	pinsir: {
		randomBattleMoves: ["closecombat", "earthquake", "knockoff", "stealthrock", "stoneedge", "xscissor"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["closecombat", "feint", "protect", "rockslide", "swordsdance", "xscissor"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	pinsirmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	pinsirdelta: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	tauros: {
		randomBattleMoves: ["bodyslam", "closecombat", "rockslide", "throatchop", "zenheadbutt"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["bodyslam", "closecombat", "lashout", "protect", "rockslide"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	magikarp: {
		tier: "LC",
	},
	gyarados: {
		randomBattleMoves: ["bounce", "dragondance", "earthquake", "powerwhip", "waterfall"],
		randomBattleLevel: 76,
		randomDoubleBattleMoves: ["bounce", "dragondance", "icefang", "powerwhip", "protect", "waterfall"],
		randomDoubleBattleLevel: 81,
		tier: "(PU)",
	},
	gyaradosmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	lapras: {
		tier: "(PU)",
	},
	laprasgmax: {
		randomBattleMoves: ["freezedry", "icebeam", "protect", "sparklingaria", "thunderbolt", "toxic"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["freezedry", "helpinghand", "hydropump", "icywind", "protect", "thunderbolt"],
		randomDoubleBattleLevel: 84,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	ditto: {
		randomBattleMoves: ["transform"],
		randomBattleLevel: 76,
		randomDoubleBattleMoves: ["transform"],
		randomDoubleBattleLevel: 88,
		tier: "LC",
	},
	dittodelta: {
		randomBattleMoves: ["morph", "retrograde", "mirrormove", "transform"],
		randomBattleLevel: 100,
		tier: "(PU)",
	},
	eevee: {
		tier: "LC",
	},
	eeveegmax: {
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	eeveestarter: {
		//isNonstandard: "LGPE",
		tier: "(PU)",
	},
	eeveestartergmax: {
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	eeveetutored: {
		tier: "NFE",
	},
	eeveetutoredgmax: {
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	eeveemega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	eeveemegav: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	eeveemegaj: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	eeveemegaf: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	eeveemegae: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	eeveemegau: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	eeveemegal: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	eeveemegag: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	eeveemegas: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	vaporeon: {
		randomBattleMoves: ["healbell", "icebeam", "protect", "scald", "toxic", "wish"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["healbell", "icywind", "protect", "scald", "toxic", "wish"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	jolteon: {
		randomBattleMoves: ["hypervoice", "shadowball", "thunderbolt", "voltswitch"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["faketears", "protect", "shadowball", "thunderbolt", "thunderwave"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	flareon: {
		randomBattleMoves: ["facade", "flamecharge", "flareblitz", "quickattack", "superpower"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["facade", "flamecharge", "flareblitz", "protect", "quickattack", "superpower"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	espeon: {
		randomBattleMoves: ["calmmind", "dazzlinggleam", "morningsun", "psychic", "shadowball"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["calmmind", "dazzlinggleam", "morningsun", "protect", "psychic", "shadowball"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	umbreon: {
		randomBattleMoves: ["foulplay", "protect", "toxic", "wish"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["foulplay", "helpinghand", "moonlight", "protect", "snarl", "toxic"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	leafeon: {
		randomBattleMoves: ["doubleedge", "knockoff", "leafblade", "swordsdance", "synthesis", "xscissor"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["doubleedge", "knockoff", "leafblade", "protect", "swordsdance"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	glaceon: {
		randomBattleMoves: ["freezedry", "protect", "shadowball", "toxic", "wish"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["blizzard", "freezedry", "helpinghand", "protect", "shadowball", "wish"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	sylveon: {
		randomBattleMoves: ["calmmind", "hypervoice", "mysticalfire", "protect", "psyshock", "shadowball", "wish"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["calmmind", "hypervoice", "mysticalfire", "protect", "psyshock"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	porygon: {
		tier: "LC",
	},
	porygon2: {
		randomBattleMoves: ["discharge", "icebeam", "recover", "toxic", "triattack"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["icebeam", "protect", "recover", "thunderbolt", "toxic", "triattack"],
		randomDoubleBattleLevel: 82,
		tier: "NFE",
	},
	porygonz: {
		randomBattleMoves: ["darkpulse", "icebeam", "nastyplot", "thunderbolt", "triattack", "trick"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["darkpulse", "icebeam", "protect", "thunderbolt", "triattack", "trick"],
		randomDoubleBattleLevel: 84,
		randomBattleNoDynamaxMoves: ["icebeam", "nastyplot", "shadowball", "thunderbolt", "triattack", "trick"],
		tier: "(PU)",
	},
	omanyte: {
		tier: "LC",
	},
	omastar: {
		randomBattleMoves: ["earthpower", "hydropump", "icebeam", "shellsmash", "spikes", "stealthrock"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["earthpower", "icebeam", "muddywater", "shellsmash"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	kabuto: {
		tier: "LC",
	},
	kabutodelta: {
		tier: "LC",
	},
	kabutops: {
		randomBattleMoves: ["aquajet", "knockoff", "liquidation", "rapidspin", "stoneedge", "swordsdance"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["knockoff", "protect", "stoneedge", "superpower", "swordsdance", "waterfall"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	kabutopsdelta: {
		randomBattleMoves: ["knockoff", "leechlife", "gunkshot", "closecombat", "swordsdance"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	aerodactyl: {
		randomBattleMoves: ["aquatail", "dualwingbeat", "earthquake", "honeclaws", "stoneedge"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["aquatail", "dragondance", "dualwingbeat", "earthquake", "rockslide"],
		randomDoubleBattleLevel: 82,
		tier: "(PU)",
	},
	aerodactylmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	aerodactyldelta: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	munchlax: {
		tier: "LC",
	},
	munchlaxdelta: {
		tier: "LC",
	},
	snorlax: {
		randomBattleMoves: ["darkestlariat", "doubleedge", "earthquake", "facade", "heatcrash"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	snorlaxgmax: {
		randomBattleMoves: ["bodyslam", "curse", "darkestlariat", "earthquake", "rest"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["bodyslam", "curse", "darkestlariat", "highhorsepower", "recycle"],
		randomDoubleBattleLevel: 84,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	snorlaxdelta: {
		randomBattleMoves: ["bulkup", "synthesis", "woodhammer", "rockslide", "drainpunch", "bellydrum"],
		randomBattleLevel: 80,
		tier: "(PU)",
	},
	articuno: {
		randomBattleMoves: ["defog", "freezedry", "healbell", "roost", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["freezedry", "healbell", "hurricane", "icebeam", "roost", "toxic"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	articunogalar: {
		randomBattleMoves: ["airslash", "calmmind", "freezingglare", "recover"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["calmmind", "freezingglare", "hurricane", "recover", "tailwind"],
		randomDoubleBattleLevel: 80,
		randomBattleNoDynamaxMoves: ["calmmind", "freezingglare", "hurricane", "recover"],
		tier: "(PU)",
	},
	zapdos: {
		randomBattleMoves: ["defog", "discharge", "heatwave", "hurricane", "roost", "uturn"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["heatwave", "hurricane", "roost", "tailwind", "thunderbolt", "voltswitch"],
		randomDoubleBattleLevel: 79,
		tier: "(PU)",
	},
	zapdosgalar: {
		randomBattleMoves: ["bravebird", "bulkup", "closecombat", "throatchop", "uturn"],
		randomBattleLevel: 76,
		randomDoubleBattleMoves: ["bravebird", "bulkup", "closecombat", "throatchop", "thunderouskick", "uturn"],
		randomDoubleBattleLevel: 76,
		tier: "(PU)",
	},
	moltres: {
		randomBattleMoves: ["airslash", "defog", "fireblast", "roost", "uturn"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["bravebird", "fireblast", "heatwave", "protect", "roost", "tailwind"],
		randomDoubleBattleLevel: 81,
		randomBattleNoDynamaxMoves: ["defog", "fireblast", "hurricane", "roost", "uturn"],
		tier: "(PU)",
	},
	moltresgalar: {
		randomBattleMoves: ["fierywrath", "hurricane", "nastyplot", "rest"],
		randomBattleLevel: 75,
		randomDoubleBattleMoves: ["fierywrath", "hurricane", "nastyplot", "protect"],
		randomDoubleBattleLevel: 75,
		randomBattleNoDynamaxMoves: ["agility", "fierywrath", "hurricane", "nastyplot", "rest"],
		tier: "(PU)",
	},
	dratini: {
		tier: "LC",
	},
	dratinidelta: {
		tier: "LC",
	},
	dragonair: {
		tier: "NFE",
	},
	dragonairdelta: {
		tier: "NFE",
	},
	dragonite: {
		randomBattleMoves: ["dragondance", "dualwingbeat", "earthquake", "extremespeed", "outrage"],
		randomBattleLevel: 75,
		randomDoubleBattleMoves: ["dragonclaw", "dragondance", "dualwingbeat", "extremespeed", "firepunch"],
		randomDoubleBattleLevel: 82,
		randomBattleNoDynamaxMoves: ["dragondance", "dualwingbeat", "earthquake", "outrage", "roost"],
		tier: "(PU)",
	},
	dragonitedelta: {
		randomBattleMoves: ["wildcharge", "liquidation", "icepunch", "flipturn", "knockoff", "earthquake"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	mewtwo: {
		randomBattleMoves: ["fireblast", "nastyplot", "psystrike", "recover", "shadowball"],
		randomBattleLevel: 72,
		randomDoubleBattleMoves: ["aurasphere", "icebeam", "nastyplot", "psystrike", "recover"],
		randomDoubleBattleLevel: 74,
		tier: "Uber",
	},
	mewtwoarmor: {
		tier: "Uber",
	},
	mewtwostrangemachine: {
		tier: "Uber",
	},
	mewtwoshadow: {
		randomBattleMoves: ["psystrike", "calmmind", "recover", "darkpulse", "focusblast"],
		randomBattleLevel: 72,
		tier: "Uber",
	},
	mewtwomegax: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	mewtwomegay: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	mewtwoshadowmega: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	mew: {
		randomBattleMoves: ["bravebird", "closecombat", "dragondance", "flareblitz", "psychicfangs", "swordsdance"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["fakeout", "pollenpuff", "psychic", "stealthrock", "tailwind", "toxicspikes", "transform"],
		randomDoubleBattleLevel: 80,
		randomBattleNoDynamaxMoves: ["fireblast", "nastyplot", "psychic", "roost", "stealthrock", "toxicspikes"],
		tier: "(PU)",
	},
	chikorita: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	bayleef: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	meganium: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	meganiummega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	cyndaquil: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	cyndaquildelta: {
		tier: "LC",
	},
	quilava: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	quilavadelta: {
		tier: "NFE",
	},
	typhlosion: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	typhlosionmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	typhlosiondelta: {
		randomBattleMoves: ["voltswitch", "flashcannon", "energyball", "dazzlinggleam", "thunderbolt"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	typhlosiondeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	typhlosionhisui: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	totodile: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	croconaw: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	feraligatr: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	feraligatrmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	sentret: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	furret: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	hoothoot: {
		tier: "LC",
	},
	hoothootdelta: {
		tier: "LC",
	},
	noctowl: {
		randomBattleMoves: ["defog", "heatwave", "hurricane", "nastyplot", "roost"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["airslash", "heatwave", "hypervoice", "nastyplot", "roost", "tailwind"],
		randomDoubleBattleLevel: 84,
		randomBattleNoDynamaxMoves: ["defog", "heatwave", "hurricane", "nastyplot", "roost"],
		tier: "(PU)",
	},
	noctowldelta: {
		randomBattleMoves: ["blizzard", "hurricane", "tailwind", "roost"],
		randomBattleLevel: 90,
		tier: "(PU)",
	},
	ledyba: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	ledian: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	spinarak: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	ariados: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	chinchou: {
		tier: "LC",
	},
	chinchoudelta: {
		tier: "LC",
	},
	lanturn: {
		randomBattleMoves: ["healbell", "icebeam", "scald", "thunderbolt", "toxic", "voltswitch"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["healbell", "icebeam", "protect", "scald", "thunderbolt", "thunderwave"],
		randomDoubleBattleLevel: 90,
		tier: "(PU)",
	},
	lanturndelta: {
		randomBattleMoves: ["willowisp", "hex", "flamethrower", "sludgebomb", "earthpower"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	togepi: {
		tier: "LC",
	},
	togetic: {
		tier: "NFE",
	},
	togekiss: {
		randomBattleMoves: ["airslash", "aurasphere", "fireblast", "nastyplot", "roost", "thunderwave", "trick"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["airslash", "dazzlinggleam", "followme", "heatwave", "protect", "tailwind"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	natu: {
		tier: "LC",
	},
	xatu: {
		randomBattleMoves: ["heatwave", "psychic", "roost", "teleport", "thunderwave"],
		randomBattleLevel: 89,
		randomDoubleBattleMoves: ["airslash", "heatwave", "lightscreen", "psychic", "reflect", "roost", "tailwind"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	mareep: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	flaaffy: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	ampharos: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	ampharosmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	azurill: {
		tier: "LC",
	},
	marill: {
		tier: "NFE",
	},
	azumarill: {
		randomBattleMoves: ["aquajet", "knockoff", "liquidation", "playrough", "superpower"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["aquajet", "knockoff", "liquidation", "playrough", "protect"],
		randomDoubleBattleLevel: 87,
		tier: "(PU)",
	},
	bonsly: {
		tier: "LC",
	},
	sudowoodo: {
		randomBattleMoves: ["earthquake", "headsmash", "stealthrock", "suckerpunch", "woodhammer"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["bodypress", "firepunch", "headsmash", "protect", "suckerpunch", "woodhammer"],
		randomDoubleBattleLevel: 90,
		tier: "(PU)",
	},
	sudowoodomega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	hoppip: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	skiploom: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	jumpluff: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	aipom: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	aipomdelta: {
		tier: "LC",
	},
	ambipom: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	ambipomdelta: {
		randomBattleMoves: ["poltergeist", "fakeout", "tailslap", "uturn", "achillesheel", "knockoff"],
		randomBattleLevel: 78,
		tier: "(PU)",
	},
	sunkern: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	sunkerndelta: {
		tier: "LC",
	},
	sunflora: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	sunfloraf: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	sunfloradelta: {
		randomBattleMoves: ["corrode", "willowisp", "earthpower", "fireblast", "painsplit", "nastyplot", "trickroom"],
		randomBattleLevel: 88,
		tier: "(PU)",
	},
	sunflorammega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	sunflorafmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	sunfloradeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	yanma: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	yanmadelta: {
		tier: "LC",
	},
	yanmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	yanmegadelta: {
		randomBattleMoves: ["leafstorm", "hurricane", "uturn", "energyball", "airslash"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	wooper: {
		tier: "LC",
	},
	wooperdelta: {
		tier: "LC",
	},
	quagsire: {
		randomBattleMoves: ["earthquake", "icebeam", "recover", "scald", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["highhorsepower", "protect", "recover", "scald", "toxic"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	quagsiredelta: {
		randomBattleMoves: ["leechseed", "willowisp", "strengthsap", "flamethrower", "seedbomb", "earthquake", "knockoff"],
		randomBattleLevel: 88,
		tier: "(PU)",
	},
	murkrow: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	honchkrow: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	misdreavus: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	misdreavusdelta: {
		tier: "LC",
	},
	mismagius: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	mismagiusdelta: {
		randomBattleMoves: ["moonblast", "freezedry", "uturn", "trick", "powergem", "calmmind"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	unown: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	wynaut: {
		tier: "LC",
	},
	wobbuffet: {
		randomBattleMoves: ["charm", "counter", "encore", "mirrorcoat"],
		randomBattleLevel: 92,
		randomDoubleBattleMoves: ["charm", "counter", "encore", "mirrorcoat"],
		randomDoubleBattleLevel: 100,
		randomBattleNoDynamaxMoves: ["counter", "destinybond", "encore", "mirrorcoat"],
		tier: "(PU)",
	},
	girafarig: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	girafarigdelta: {
		randomBattleMoves: ["toxicspikes", "corrode", "thunderbolt", "autotomize", "nastyplot", "flashcannon"],
		randomBattleLevel: 88,
		tier: "(PU)",
	},
	girafarigmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	girafarigdeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	pineco: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	forretress: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	dunsparce: {
		randomBattleMoves: ["bodyslam", "coil", "earthquake", "roost"],
		randomBattleLevel: 90,
		randomDoubleBattleMoves: ["glare", "headbutt", "protect", "rockslide"],
		randomDoubleBattleLevel: 90,
		tier: "(PU)",
	},
	dunsparcedelta: {
		randomBattleMoves: ["firstimpression", "liquidation", "iciclespear", "pinmissile", "aquajet", "rockblast", "watershuriken"],
		randomBattleLevel: 90,
		tier: "(PU)",
	},
	gligar: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	gliscor: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	snubbull: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	granbull: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	qwilfish: {
		randomBattleMoves: ["destinybond", "spikes", "taunt", "thunderwave", "toxicspikes", "waterfall"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["liquidation", "poisonjab", "protect", "taunt", "thunderwave", "toxicspikes"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	qwilfishhisui: {
		//isNonstandard: "Future",
		tier: "LC",
	},
	shuckle: {
		randomBattleMoves: ["encore", "knockoff", "stealthrock", "stickyweb", "toxic"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["acupressure", "guardsplit", "helpinghand", "infestation", "knockoff", "stealthrock", "stickyweb", "toxic"],
		randomDoubleBattleLevel: 100,
		tier: "(PU)",
	},
	shuckledelta: {
		randomBattleMoves: ["spikes", "seismictoss", "knockoff", "toxic", "rest", "sleeptalk"],
		randomBattleLevel: 90,
		tier: "(PU)",
	},
	heracross: {
		randomBattleMoves: ["closecombat", "facade", "knockoff", "megahorn"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["closecombat", "facade", "knockoff", "megahorn", "protect", "swordsdance"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	heracrossmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	sneasel: {
		tier: "LC",
	},
	sneaselhisui: {
		//isNonstandard: "Future",
		tier: "LC",
	},
	weavile: {
		randomBattleMoves: ["iceshard", "knockoff", "lowkick", "swordsdance", "tripleaxel"],
		randomBattleLevel: 79,
		randomDoubleBattleMoves: ["fakeout", "iceshard", "knockoff", "swordsdance", "tripleaxel"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	teddiursa: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	ursaring: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	slugma: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	magcargo: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	magcargomega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	swinub: {
		tier: "LC",
	},
	piloswine: {
		tier: "NFE",
	},
	mamoswine: {
		randomBattleMoves: ["earthquake", "iceshard", "iciclecrash", "knockoff", "stealthrock", "superpower"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["highhorsepower", "iceshard", "iciclecrash", "protect", "rockslide"],
		randomDoubleBattleLevel: 83,
		tier: "(PU)",
	},
	corsola: {
		randomBattleMoves: ["powergem", "recover", "scald", "stealthrock", "toxic"],
		randomBattleLevel: 93,
		randomDoubleBattleMoves: ["icywind", "lifedew", "recover", "scald", "toxic"],
		randomDoubleBattleLevel: 95,
		tier: "(PU)",
	},
	corsolagalar: {
		randomBattleMoves: ["haze", "nightshade", "stealthrock", "strengthsap", "willowisp"],
		randomBattleLevel: 84,
		tier: "LC",
	},
	cursola: {
		randomBattleMoves: ["earthpower", "hydropump", "icebeam", "shadowball", "stealthrock", "strengthsap"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["earthpower", "hydropump", "icebeam", "protect", "shadowball", "strengthsap"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	remoraid: {
		tier: "LC",
	},
	remoraidelta: {
		tier: "LC",
	},
	octillery: {
		randomBattleMoves: ["energyball", "fireblast", "gunkshot", "hydropump", "icebeam", "protect"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["fireblast", "gunkshot", "hydropump", "icebeam", "protect", "substitute"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	octillerydelta: {
		randomBattleMoves: ["overheat", "energyball", "earthpower", "vacuumwave", "scald", "ancientpower"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	delibird: {
		randomBattleMoves: ["freezedry", "memento", "rapidspin", "spikes"],
		randomBattleLevel: 100,
		randomDoubleBattleMoves: ["bravebird", "defog", "fakeout", "helpinghand", "icepunch", "memento", "tailwind"],
		randomDoubleBattleLevel: 100,
		tier: "(PU)",
	},
	mantyke: {
		tier: "LC",
	},
	mantine: {
		randomBattleMoves: ["defog", "hurricane", "icebeam", "roost", "scald", "toxic"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["haze", "helpinghand", "hurricane", "roost", "scald", "tailwind"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	skarmory: {
		randomBattleMoves: ["bodypress", "bravebird", "roost", "spikes", "stealthrock", "whirlwind"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["bodypress", "bravebird", "irondefense", "roost"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	houndour: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	houndoom: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	houndoommega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	houndoomdelta: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	phanpy: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	donphan: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	donphanmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	stantler: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	smeargle: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	miltank: {
		randomBattleMoves: ["bodyslam", "earthquake", "healbell", "milkdrink", "stealthrock", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["bodypress", "bodyslam", "helpinghand", "icywind", "milkdrink", "protect", "rockslide"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	miltankmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	raikou: {
		randomBattleMoves: ["aurasphere", "calmmind", "scald", "substitute", "thunderbolt", "voltswitch"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["aurasphere", "calmmind", "protect", "scald", "snarl", "thunderbolt", "voltswitch"],
		randomDoubleBattleLevel: 82,
		tier: "(PU)",
	},
	entei: {
		randomBattleMoves: ["extremespeed", "flareblitz", "sacredfire", "stompingtantrum", "stoneedge"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["extremespeed", "protect", "sacredfire", "snarl", "stompingtantrum", "stoneedge"],
		randomDoubleBattleLevel: 79,
		tier: "(PU)",
	},
	suicune: {
		randomBattleMoves: ["airslash", "calmmind", "icebeam", "rest", "scald", "sleeptalk"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["icebeam", "scald", "snarl", "tailwind", "toxic"],
		randomDoubleBattleLevel: 82,
		randomBattleNoDynamaxMoves: ["calmmind", "icebeam", "rest", "scald", "sleeptalk"],
		tier: "(PU)",
	},
	larvitar: {
		tier: "LC",
	},
	pupitar: {
		tier: "NFE",
	},
	tyranitar: {
		randomBattleMoves: ["crunch", "dragondance", "earthquake", "firepunch", "stealthrock", "stoneedge"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["dragondance", "firepunch", "highhorsepower", "lashout", "protect", "rockslide", "stoneedge"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	tyranitararmor: {
		tier: "(PU)",
	},
	tyranitarmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	lugia: {
		randomBattleMoves: ["airslash", "earthquake", "roost", "substitute", "toxic"],
		randomBattleLevel: 74,
		randomDoubleBattleMoves: ["aeroblast", "calmmind", "psyshock", "roost", "toxic"],
		randomDoubleBattleLevel: 72,
		tier: "Uber",
	},
	hooh: {
		randomBattleMoves: ["bravebird", "defog", "earthquake", "roost", "sacredfire", "toxic"],
		randomBattleLevel: 72,
		randomDoubleBattleMoves: ["bravebird", "earthpower", "protect", "roost", "sacredfire", "tailwind"],
		randomDoubleBattleLevel: 72,
		tier: "Uber",
	},
	celebi: {
		randomBattleMoves: ["earthpower", "gigadrain", "leafstorm", "nastyplot", "psychic", "recover", "stealthrock", "uturn"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["earthpower", "energyball", "nastyplot", "protect", "psychic", "recover"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	treecko: {
		tier: "LC",
	},
	treeckodelta: {
		tier: "LC",
	},
	grovyle: {
		tier: "NFE",
	},
	grovyledelta: {
		tier: "NFE",
	},
	sceptile: {
		randomBattleMoves: ["earthquake", "focusblast", "gigadrain", "leafstorm", "leechseed", "rockslide", "substitute"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["breakingswipe", "dragonpulse", "focusblast", "leafstorm", "protect"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	sceptilemega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	sceptilemegazo: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	sceptiledelta: {
		randomBattleMoves: ["dragondance", "closecombat", "outrage", "knockoff", "facade", "dracometeor"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	torchic: {
		tier: "LC",
	},
	torchicdelta: {
		tier: "LC",
	},
	combusken: {
		tier: "NFE",
	},
	combuskendelta: {
		tier: "NFE",
	},
	blaziken: {
		randomBattleMoves: ["closecombat", "flareblitz", "knockoff", "stoneedge", "swordsdance"],
		randomBattleLevel: 76,
		randomDoubleBattleMoves: ["closecombat", "flareblitz", "knockoff", "protect", "swordsdance"],
		randomDoubleBattleLevel: 78,
		tier: "(PU)",
	},
	blazikenmega: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	blazikendelta: {
		randomBattleMoves: ["hurricane", "psychic", "earthquake", "knockoff", "uturn"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	mudkip: {
		tier: "LC",
	},
	marshtomp: {
		tier: "NFE",
	},
	swampert: {
		randomBattleMoves: ["earthquake", "flipturn", "icebeam", "protect", "scald", "stealthrock", "toxic"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["highhorsepower", "icywind", "muddywater", "protect", "stealthrock", "wideguard"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	swampertmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	swampertmegazo: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	poochyena: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	mightyena: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	zigzagoon: {
		tier: "LC",
	},
	zigzagoongalar: {
		tier: "LC",
	},
	linoone: {
		randomBattleMoves: ["bellydrum", "extremespeed", "stompingtantrum", "throatchop"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["bellydrum", "extremespeed", "protect", "throatchop"],
		randomDoubleBattleLevel: 90,
		tier: "(PU)",
	},
	linoonegalar: {
		tier: "NFE",
	},
	obstagoon: {
		randomBattleMoves: ["bulkup", "closecombat", "facade", "knockoff", "partingshot"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["closecombat", "facade", "knockoff", "obstruct", "partingshot", "taunt"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	wurmple: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	silcoon: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	beautifly: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	cascoon: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	dustox: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	lotad: {
		tier: "LC",
	},
	lotaddelta: {
		tier: "LC",
	},
	lombre: {
		tier: "NFE",
	},
	lombredelta: {
		tier: "NFE",
	},
	ludicolo: {
		randomBattleMoves: ["gigadrain", "hydropump", "icebeam", "raindance", "scald"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["energyball", "fakeout", "hydropump", "icebeam", "raindance"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	ludicolodelta: {
		randomBattleMoves: ["calmmind", "psyshock", "scald", "focusblast", "icebeam", "thunderbolt"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	seedot: {
		tier: "LC",
	},
	seedotdelta: {
		tier: "LC",
	},
	nuzleaf: {
		tier: "NFE",
	},
	nuzleafdelta: {
		tier: "NFE",
	},
	shiftry: {
		randomBattleMoves: ["darkpulse", "defog", "heatwave", "leafstorm", "nastyplot", "suckerpunch"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["fakeout", "knockoff", "leafblade", "suckerpunch", "swordsdance", "tailwind"],
		randomDoubleBattleLevel: 88,
		randomBattleNoDynamaxMoves: ["defog", "knockoff", "leafblade", "lowkick", "rockslide", "suckerpunch", "swordsdance"],
		tier: "(PU)",
	},
	shiftrydelta: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "energyball", "dazzlinggleam", "voltswitch", "fireblast"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	shiftrymega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	taillow: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	swellow: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	wingull: {
		tier: "LC",
	},
	pelipper: {
		randomBattleMoves: ["defog", "hurricane", "hydropump", "roost", "scald", "uturn"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["hurricane", "hydropump", "protect", "roost", "tailwind", "wideguard"],
		randomDoubleBattleLevel: 83,
		tier: "(PU)",
	},
	ralts: {
		tier: "LC",
	},
	raltsdelta: {
		tier: "LC",
	},
	kirlia: {
		tier: "NFE",
	},
	kirliadelta: {
		tier: "NFE",
	},
	gardevoir: {
		randomBattleMoves: ["calmmind", "moonblast", "mysticalfire", "psyshock", "substitute", "trick", "willowisp"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["calmmind", "dazzlinggleam", "moonblast", "mysticalfire", "protect", "psyshock", "trick"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	gardevoirdelta: {
		randomBattleMoves: ["icebeam", "thunderbolt", "earthplate", "moonblast", "voltswitch", "calmmind"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	gardevoirmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	gardevoirdeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	gallade: {
		randomBattleMoves: ["closecombat", "knockoff", "shadowsneak", "swordsdance", "trick", "zenheadbutt"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["closecombat", "feint", "knockoff", "protect", "swordsdance", "tripleaxel", "zenheadbutt"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	galladedelta: {
		randomBattleMoves: ["tripleaxel", "iceshard", "wildcharge", "closecombat", "knockoff", "swordsdance"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	gallademega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	galladedeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	surskit: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	masquerain: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	shroomish: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	breloom: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	slakoth: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	vigoroth: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	slaking: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	nincada: {
		tier: "LC",
	},
	ninjask: {
		randomBattleMoves: ["acrobatics", "leechlife", "swordsdance", "uturn"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["acrobatics", "defog", "leechlife", "protect", "swordsdance"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	shedinja: {
		randomBattleMoves: ["poltergeist", "shadowsneak", "swordsdance", "willowisp", "xscissor"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["allyswitch", "poltergeist", "protect", "shadowsneak", "swordsdance", "willowisp", "xscissor"],
		randomDoubleBattleLevel: 95,
		tier: "(PU)",
	},
	whismur: {
		tier: "LC",
	},
	loudred: {
		tier: "NFE",
	},
	exploud: {
		randomBattleMoves: ["boomburst", "fireblast", "focusblast", "surf"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["boomburst", "fireblast", "focusblast", "hypervoice", "icywind", "protect"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	makuhita: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	hariyama: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	nosepass: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	probopass: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	skitty: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	delcatty: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	sableye: {
		randomBattleMoves: ["knockoff", "recover", "taunt", "toxic", "willowisp"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["disable", "encore", "fakeout", "foulplay", "knockoff", "quash", "recover", "willowisp"],
		randomDoubleBattleLevel: 88,
		randomBattleNoDynamaxMoves: ["encore", "knockoff", "recover", "taunt", "toxic", "willowisp"],
		tier: "(PU)",
	},
	sableyedelta: {
		randomBattleMoves: ["swordsdance", "flareblitz", "stoneedge", "earthquake", "knockoff", "willowisp"],
		randomBattleLevel: 90,
		tier: "(PU)",
	},
	sableyemega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	sableyedeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	mawile: {
		randomBattleMoves: ["ironhead", "playrough", "stealthrock", "suckerpunch", "swordsdance"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["firefang", "ironhead", "playrough", "protect", "suckerpunch", "swordsdance"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	mawiledelta: {
		randomBattleMoves: ["spikes", "toxicspikes", "knockoff", "swordsdance", "suckerpunch", "powerwhip"],
		randomBattleLevel: 90,
		tier: "(PU)",
	},
	mawilemega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	mawiledeltamega: {
		//isNonstandard: "Past",
		tier: "AG", //Its only ability is banned in Ubers
	},
	aron: {
		tier: "LC",
	},
	arondelta: {
		tier: "LC",
	},
	lairon: {
		tier: "NFE",
	},
	lairondelta: {
		tier: "NFE",
	},
	aggron: {
		randomBattleMoves: ["bodypress", "earthquake", "headsmash", "heavyslam", "rockpolish", "stealthrock"],
		randomBattleLevel: 85,
		randomDoubleBattleMoves: ["aquatail", "bodypress", "headsmash", "heavyslam", "highhorsepower", "rockpolish"],
		randomDoubleBattleLevel: 89,
		tier: "(PU)",
	},
	aggronmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	aggrondelta: {
		randomBattleMoves: ["flareblitz", "ironhead", "knockoff", "earthquake", "stealthrock", "autotomize"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	aggrondeltai: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	meditite: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	medititedelta: {
		tier: "LC",
	},
	medicham: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	medichamdelta: {
		randomBattleMoves: ["earthpower", "moonblast", "calmmind", "slackoff", "aurasphere", "psychic"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	medichammega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	medichamdeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	electrike: {
		tier: "LC",
	},
	manectric: {
		randomBattleMoves: ["flamethrower", "overheat", "switcheroo", "thunderbolt", "voltswitch"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["overheat", "protect", "snarl", "thunderbolt", "voltswitch"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	manectricmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	plusle: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	plusledelta: {
		randomBattleMoves: ["quiverdance", "hypervoice", "fireblast", "energyball", "psychic"],
		randomBattleLevel: 88,
		tier: "(PU)",
	},
	minun: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	minundelta: {
		randomBattleMoves: ["quiverdance", "hypervoice", "icebeam", "energyball", "psychic"],
		randomBattleLevel: 88,
		tier: "(PU)",
	},
	volbeat: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	illumise: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	budew: {
		tier: "LC",
	},
	budewdelta: {
		tier: "LC",
	},
	roselia: {
		tier: "NFE",
	},
	roseliadelta: {
		tier: "NFE",
	},
	roserade: {
		randomBattleMoves: ["leafstorm", "sleeppowder", "sludgebomb", "spikes", "synthesis", "toxicspikes"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["energyball", "leafstorm", "protect", "sleeppowder", "sludgebomb"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	roseradedelta: {
		randomBattleMoves: ["spikes", "moonblast", "calmmind", "darkpulse", "moonlight", "heatwave"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	gulpin: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	swalot: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	carvanha: {
		tier: "LC",
	},
	sharpedo: {
		randomBattleMoves: ["closecombat", "crunch", "hydropump", "protect"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["closecombat", "crunch", "flipturn", "icebeam", "protect", "waterfall"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	sharpedomega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	wailmer: {
		tier: "LC",
	},
	wailmerdelta: {
		tier: "LC",
	},
	wailord: {
		randomBattleMoves: ["hydropump", "hypervoice", "icebeam", "waterspout"],
		randomBattleLevel: 90,
		randomDoubleBattleMoves: ["hydropump", "hypervoice", "icebeam", "waterspout"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	wailorddelta: {
		randomBattleMoves: ["blizzard", "hurricane", "roost", "surf", "uturn", "freezedry"],
		randomBattleLevel: 88,
		tier: "(PU)",
	},
	numel: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	numeldelta: {
		tier: "LC",
	},
	camerupt: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	cameruptdelta: {
		randomBattleMoves: ["toxicspikes", "corrode", "flamethrower", "scald", "earthquake"],
		randomBattleLevel: 90,
		tier: "(PU)",
	},
	cameruptmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	cameruptdeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	torkoal: {
		randomBattleMoves: ["earthquake", "lavaplume", "rapidspin", "solarbeam", "stealthrock"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["bodypress", "earthpower", "fireblast", "heatwave", "protect", "solarbeam", "willowisp"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	spoink: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	grumpig: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	spinda: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	trapinch: {
		tier: "LC",
	},
	vibrava: {
		tier: "NFE",
	},
	flygon: {
		randomBattleMoves: ["defog", "dragondance", "earthquake", "firepunch", "outrage", "uturn"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["dragonclaw", "dragondance", "earthquake", "firepunch", "protect", "rockslide", "tailwind"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	flygonarmor: {
		tier: "(PU)",
	},
	flygonmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	cacnea: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	cacturne: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	cacturnemega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	swablu: {
		tier: "LC",
	},
	altaria: {
		randomBattleMoves: ["defog", "dracometeor", "earthquake", "fireblast", "roost", "toxic"],
		randomBattleLevel: 90,
		randomDoubleBattleMoves: ["defog", "dracometeor", "fireblast", "roost", "tailwind", "toxic"],
		randomDoubleBattleLevel: 91,
		tier: "(PU)",
	},
	altariamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	zangoose: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	zangoosedelta: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	seviper: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	lunatone: {
		randomBattleMoves: ["earthpower", "moonblast", "nastyplot", "powergem", "psychic", "stealthrock"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["earthpower", "icebeam", "meteorbeam", "protect", "psychic", "trickroom"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	solrock: {
		randomBattleMoves: ["earthquake", "explosion", "morningsun", "rockslide", "stealthrock", "willowisp"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["allyswitch", "flareblitz", "helpinghand", "rockslide", "stoneedge", "willowisp"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	barboach: {
		tier: "LC",
	},
	whiscash: {
		randomBattleMoves: ["dragondance", "earthquake", "liquidation", "stoneedge", "zenheadbutt"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["dragondance", "earthquake", "liquidation", "protect", "stoneedge"],
		randomDoubleBattleLevel: 90,
		tier: "(PU)",
	},
	corphish: {
		tier: "LC",
	},
	crawdaunt: {
		randomBattleMoves: ["aquajet", "closecombat", "crabhammer", "dragondance", "knockoff"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["aquajet", "closecombat", "crabhammer", "knockoff", "protect", "swordsdance"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	crawdauntmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	baltoy: {
		tier: "LC",
	},
	claydol: {
		randomBattleMoves: ["earthquake", "icebeam", "psychic", "rapidspin", "stealthrock", "toxic"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["allyswitch", "earthpower", "icebeam", "psychic", "rapidspin", "stealthrock"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	lileep: {
		tier: "LC",
	},
	cradily: {
		randomBattleMoves: ["powerwhip", "recover", "stealthrock", "stoneedge", "swordsdance", "toxic"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["powerwhip", "protect", "recover", "stealthrock", "stoneedge", "stringshot", "toxic"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	anorith: {
		tier: "LC",
	},
	armaldo: {
		randomBattleMoves: ["earthquake", "knockoff", "liquidation", "rapidspin", "stealthrock", "stoneedge", "swordsdance"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["knockoff", "liquidation", "stoneedge", "superpower", "xscissor"],
		randomDoubleBattleLevel: 88,
		randomBattleNoDynamaxMoves: ["earthquake", "knockoff", "rapidspin", "stealthrock", "stoneedge", "swordsdance"],
		tier: "(PU)",
	},
	feebas: {
		tier: "LC",
	},
	feebasdelta: {
		tier: "LC",
	},
	milotic: {
		randomBattleMoves: ["haze", "icebeam", "recover", "scald", "toxic"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["coil", "hypnosis", "muddywater", "recover"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	miloticdelta: {
		randomBattleMoves: ["willowisp", "recover", "shadowball", "aurasphere", "calmmind"],
		randomBattleLevel: 78,
		tier: "(PU)",
	},
	miloticmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	miloticdeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	miloticdeltaf: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	castform: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	castformsunny: {
		//isNonstandard: "Past",
	},
	castformrainy: {
		//isNonstandard: "Past",
	},
	castformsnowy: {
		//isNonstandard: "Past",
	},
	castformcloudy: {
		//isNonstandard: "Past",
	},
	castformsandy: {
		//isNonstandard: "Past",
	},
	kecleon: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	shuppet: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	banette: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	banettemega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	duskull: {
		tier: "LC",
	},
	dusclops: {
		randomDoubleBattleMoves: ["allyswitch", "haze", "helpinghand", "nightshade", "painsplit", "trickroom", "willowisp"],
		randomDoubleBattleLevel: 84,
		tier: "NFE",
	},
	dusknoir: {
		randomBattleMoves: ["earthquake", "icepunch", "painsplit", "poltergeist", "shadowsneak", "trick", "willowisp"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["earthquake", "haze", "icepunch", "poltergeist", "shadowsneak", "trickroom", "willowisp"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	tropius: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	chingling: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	chimecho: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	chimechodelta: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	absol: {
		randomBattleMoves: ["closecombat", "knockoff", "playrough", "suckerpunch", "swordsdance"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["closecombat", "knockoff", "protect", "suckerpunch", "swordsdance"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	absolmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	snorunt: {
		tier: "LC",
	},
	snoruntdelta: {
		tier: "LC",
	},
	glalie: {
		randomBattleMoves: ["disable", "earthquake", "freezedry", "protect", "substitute"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["disable", "earthquake", "freezedry", "protect", "substitute"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	glaliedelta: {
		randomBattleMoves: ["spikes", "stealthrock", "headsmash", "flareblitz", "earthquake", "energyball"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	glaliemega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	glaliedeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	froslass: {
		randomBattleMoves: ["destinybond", "poltergeist", "spikes", "taunt", "tripleaxel", "willowisp"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["destinybond", "icebeam", "icywind", "protect", "shadowball", "willowisp"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	froslassdelta: {
		randomBattleMoves: ["spikes", "stealthrock", "eruption", "taunt", "earthquake", "energyball", "fireblast"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	froslassmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	froslassdeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	spheal: {
		tier: "LC",
	},
	sealeo: {
		tier: "NFE",
	},
	walrein: {
		randomBattleMoves: ["icebeam", "protect", "surf", "toxic"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["brine", "icebeam", "icywind", "superfang"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	clamperl: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	clamperldelta: {
		tier: "LC",
	},
	huntail: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	huntaildelta: {
		randomBattleMoves: ["shellsmash", "crunch", "outrage", "ironhead", "icefang", "firefang"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	gorebyss: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	gorebyssdelta: {
		randomBattleMoves: ["shellsmash", "moonblast", "dragonpulse", "dracometeor", "icebeam"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	relicanth: {
		randomBattleMoves: ["bodypress", "earthquake", "headsmash", "liquidation", "stealthrock", "yawn"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["bodypress", "headsmash", "liquidation", "stealthrock", "yawn"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	luvdisc: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	bagon: {
		tier: "LC",
	},
	shelgon: {
		tier: "NFE",
	},
	salamence: {
		randomBattleMoves: ["dragondance", "dualwingbeat", "earthquake", "outrage", "roost"],
		randomBattleLevel: 76,
		randomDoubleBattleMoves: ["dragonclaw", "fireblast", "hurricane", "protect", "tailwind"],
		randomDoubleBattleLevel: 79,
		tier: "(PU)",
	},
	salamencemega: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	beldum: {
		tier: "LC",
	},
	beldumdeltas: {
		tier: "LC",
	},
	beldumdeltar: {
		tier: "LC",
	},
	metang: {
		tier: "NFE",
	},
	metangdeltas: {
		tier: "NFE",
	},
	metangdeltar: {
		tier: "NFE",
	},
	metagross: {
		randomBattleMoves: ["agility", "bulletpunch", "earthquake", "explosion", "meteormash", "stealthrock", "thunderpunch"],
		randomBattleLevel: 79,
		randomDoubleBattleMoves: ["agility", "bulletpunch", "icepunch", "meteormash", "stompingtantrum", "trick", "zenheadbutt"],
		randomDoubleBattleLevel: 82,
		tier: "(PU)",
	},
	metagrossmega: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	metagrossdeltas: {
		randomBattleMoves: ["uturn", "stickyweb", "earthquake", "stealthrock", "spikes", "knockoff", "stoneedge"],
		randomBattleLevel: 78,
		tier: "(PU)",
	},
	metagrossdeltar: {
		randomBattleMoves: ["headsmash", "woodhammer", "earthquake", "voltswitch", "diamondstorm", "stealthrock"],
		randomBattleLevel: 76,
		tier: "(PU)",
	},
	metagrossdeltasmega: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	metagrossdeltarmega: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	metagrossdeltarcrystal: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	regirock: {
		randomBattleMoves: ["bodypress", "curse", "earthquake", "explosion", "rest", "rockslide", "stoneedge"],
		randomBattleLevel: 85,
		randomDoubleBattleMoves: ["bodypress", "curse", "rest", "rockslide"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	regirockdelta: {
		randomBattleMoves: ["earthquake", "stealthrock", "knockoff", "recover", "stoneedge"],
		randomBattleLevel: 78,
		tier: "(PU)",
	},
	regice: {
		randomBattleMoves: ["focusblast", "icebeam", "rest", "rockpolish", "sleeptalk", "thunderbolt"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["focusblast", "icebeam", "icywind", "rockpolish", "thunderbolt"],
		randomDoubleBattleLevel: 87,
		tier: "(PU)",
	},
	regicedelta: {
		randomBattleMoves: ["scald", "stealthrock", "knockoff", "recover", "icebeam"],
		randomBattleLevel: 76,
		tier: "(PU)",
	},
	registeel: {
		randomBattleMoves: ["bodypress", "curse", "ironhead", "protect", "rest", "sleeptalk", "stealthrock", "toxic"],
		randomBattleLevel: 83,
		randomDoubleBattleMoves: ["bodypress", "curse", "ironhead", "rest", "toxic"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	registeeldelta: {
		randomBattleMoves: ["lavaplume", "stealthrock", "knockoff", "recover", "earthquake", "willowisp"],
		randomBattleLevel: 80,
		tier: "(PU)",
	},
	latias: {
		randomBattleMoves: ["calmmind", "dracometeor", "healingwish", "mysticalfire", "psychic", "roost"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["calmmind", "dracometeor", "healpulse", "mysticalfire", "psyshock", "roost", "tailwind"],
		randomDoubleBattleLevel: 82,
		tier: "(PU)",
	},
	latiasmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	latios: {
		randomBattleMoves: ["calmmind", "dracometeor", "mysticalfire", "psyshock", "roost", "trick"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "mysticalfire", "psychic", "psyshock", "roost", "tailwind", "trick"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	latiosmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	kyogre: {
		randomBattleMoves: ["calmmind", "icebeam", "originpulse", "thunder", "waterspout"],
		randomBattleLevel: 72,
		randomDoubleBattleMoves: ["icebeam", "originpulse", "thunder", "waterspout"],
		randomDoubleBattleLevel: 69,
		tier: "Uber",
	},
	kyogreprimal: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	groudon: {
		randomBattleMoves: ["heatcrash", "heavyslam", "precipiceblades", "stealthrock", "stoneedge", "swordsdance", "thunderwave"],
		randomBattleLevel: 73,
		randomDoubleBattleMoves: ["heatcrash", "precipiceblades", "rockpolish", "stoneedge", "swordsdance"],
		randomDoubleBattleLevel: 72,
		randomBattleNoDynamaxMoves: ["heatcrash", "precipiceblades", "stealthrock", "stoneedge", "swordsdance", "thunderwave"],
		tier: "Uber",
	},
	groudonprimal: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	rayquaza: {
		randomBattleMoves: ["dracometeor", "dragonascent", "dragondance", "earthquake", "extremespeed", "swordsdance", "vcreate"],
		randomBattleLevel: 74,
		randomDoubleBattleMoves: ["dracometeor", "dragonascent", "dragonclaw", "dragondance", "earthpower", "extremespeed", "vcreate"],
		randomDoubleBattleLevel: 74,
		randomBattleNoDynamaxMoves: ["dracometeor", "dragonascent", "dragondance", "earthquake", "extremespeed", "vcreate"],
		tier: "Uber",
	},
	rayquazamega: {
		//isNonstandard: "Past",
		tier: "AG",
	},
	jirachi: {
		randomBattleMoves: ["bodyslam", "firepunch", "ironhead", "stealthrock", "toxic", "trick", "uturn"],
		randomBattleLevel: 79,
		randomDoubleBattleMoves: ["firepunch", "followme", "ironhead", "lifedew", "protect", "thunderwave"],
		randomDoubleBattleLevel: 77,
		tier: "(PU)",
	},
	jirachidelta: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	jirachimega: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	deoxys: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	deoxysattack: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	deoxysdefense: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	deoxysspeed: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	turtwig: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	turtwigdelta: {
		tier: "LC",
	},
	grotle: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	grotledelta: {
		tier: "NFE",
	},
	torterra: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	torterradelta: {
		randomBattleMoves: ["stealthrock", "recover", "spikes", "earthquake", "curse", "liquidation", "stoneedge"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	chimchar: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	monferno: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	infernape: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	piplup: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	prinplup: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	empoleon: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	starly: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	staravia: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	staraptor: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	bidoof: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	bibarel: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	kricketot: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	kricketune: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	shinx: {
		tier: "LC",
	},
	shinxdelta: {
		tier: "LC",
	},
	luxio: {
		tier: "NFE",
	},
	luxiodelta: {
		tier: "NFE",
	},
	luxray: {
		randomBattleMoves: ["agility", "crunch", "facade", "superpower", "voltswitch", "wildcharge"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["playrough", "protect", "superpower", "voltswitch", "wildcharge"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	luxraydelta: {
		randomBattleMoves: ["gunkshot", "ironhead", "earthquake", "closecombat", "agility", "toxicspikes"],
		randomBattleLevel: 88,
		tier: "(PU)",
	},
	cranidos: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	rampardos: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	shieldon: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	bastiodon: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	burmy: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	wormadam: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	wormadamsandy: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	wormadamtrash: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	mothim: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	combee: {
		tier: "LC",
	},
	combeedelta: {
		tier: "LC",
	},
	vespiquen: {
		randomBattleMoves: ["airslash", "defog", "roost", "toxic", "uturn"],
		randomBattleLevel: 96,
		randomDoubleBattleMoves: ["airslash", "roost", "tailwind", "toxicspikes"],
		randomDoubleBattleLevel: 98,
		tier: "(PU)",
	},
	vespiquendelta: {
		randomBattleMoves: ["roost", "stealthrock", "flashcannon", "voltswitch", "calmmind", "fireblast"],
		randomBattleLevel: 80,
		tier: "(PU)",
	},
	pachirisu: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	buizel: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	floatzel: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	cherubi: {
		tier: "LC",
	},
	cherrim: {
		randomBattleMoves: ["dazzlinggleam", "energyball", "healingwish", "petaldance", "pollenpuff"],
		randomBattleLevel: 93,
		randomDoubleBattleMoves: ["aromatherapy", "energyball", "helpinghand", "pollenpuff", "protect"],
		randomDoubleBattleLevel: 92,
		tier: "(PU)",
	},
	cherrimsunshine: {
		randomDoubleBattleMoves: ["playrough", "solarblade", "sunnyday", "weatherball"],
		randomDoubleBattleLevel: 92,
	},
	shellos: {
		tier: "LC",
	},
	gastrodon: {
		randomBattleMoves: ["clearsmog", "earthquake", "icebeam", "recover", "scald", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["clearsmog", "earthpower", "icywind", "protect", "recover", "scald", "yawn"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	drifloon: {
		tier: "LC",
	},
	drifloondelta: {
		tier: "LC",
	},
	drifblim: {
		randomBattleMoves: ["calmmind", "shadowball", "strengthsap", "thunderbolt"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["destinybond", "hex", "tailwind", "thunderwave", "willowisp"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	drifblimdelta: {
		randomBattleMoves: ["willowisp", "hurricane", "inferno", "roost", "scald", "calmmind"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	buneary: {
		tier: "LC",
	},
	bunearydelta: {
		tier: "LC",
	},
	lopunny: {
		randomBattleMoves: ["closecombat", "facade", "healingwish", "switcheroo"],
		randomBattleLevel: 90,
		randomDoubleBattleMoves: ["closecombat", "fakeout", "switcheroo", "uturn"],
		randomDoubleBattleLevel: 92,
		tier: "(PU)",
	},
	lopunnydelta: {
		randomBattleMoves: ["bulkup", "closecombat", "knockoff", "poisonjab", "uturn", "zenheadbutt"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	lopunnymega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	lopunnydeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	glameow: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	purugly: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	stunky: {
		tier: "LC",
	},
	skuntank: {
		randomBattleMoves: ["crunch", "defog", "fireblast", "poisonjab", "suckerpunch", "taunt", "toxic"],
		randomBattleLevel: 85,
		randomDoubleBattleMoves: ["crunch", "fireblast", "haze", "poisonjab", "suckerpunch", "taunt"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	bronzor: {
		tier: "LC",
	},
	bronzong: {
		randomBattleMoves: ["earthquake", "ironhead", "protect", "stealthrock", "toxic"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["allyswitch", "bodypress", "explosion", "ironhead", "trickroom"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	chatot: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	chatotmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	spiritomb: {
		randomBattleMoves: ["foulplay", "poltergeist", "shadowsneak", "suckerpunch", "trick"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["foulplay", "poltergeist", "protect", "snarl", "suckerpunch", "willowisp"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	spiritombmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	gible: {
		tier: "LC",
	},
	gabite: {
		tier: "NFE",
	},
	garchomp: {
		randomBattleMoves: ["earthquake", "fireblast", "firefang", "outrage", "stealthrock", "stoneedge", "swordsdance"],
		randomBattleLevel: 74,
		randomDoubleBattleMoves: ["dragonclaw", "earthquake", "fireblast", "protect", "rockslide", "swordsdance"],
		randomDoubleBattleLevel: 79,
		tier: "(PU)",
	},
	garchompmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	riolu: {
		tier: "LC",
	},
	rioludelta: {
		tier: "LC",
	},
	lucario: {
		randomBattleMoves: ["closecombat", "extremespeed", "meteormash", "stoneedge", "swordsdance"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["closecombat", "darkpulse", "extremespeed", "icepunch", "meteormash", "protect", "swordsdance"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	lucariodelta: {
		randomBattleMoves: ["earthquake", "knockoff", "stoneedge", "suckerpunch", "swordsdance", "blizzard"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	lucariomega: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	lucariodeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	hippopotas: {
		tier: "LC",
	},
	hippowdon: {
		randomBattleMoves: ["earthquake", "slackoff", "stealthrock", "stoneedge", "toxic", "whirlwind"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["highhorsepower", "protect", "rockslide", "slackoff", "stealthrock", "whirlwind", "yawn"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	skorupi: {
		tier: "LC",
	},
	drapion: {
		randomBattleMoves: ["aquatail", "earthquake", "knockoff", "poisonjab", "swordsdance", "taunt", "toxicspikes"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["knockoff", "poisonjab", "protect", "rockslide", "taunt"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	croagunk: {
		tier: "LC",
	},
	croagunkdelta: {
		tier: "LC",
	},
	toxicroak: {
		randomBattleMoves: ["drainpunch", "gunkshot", "icepunch", "knockoff", "substitute", "suckerpunch", "swordsdance"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["drainpunch", "fakeout", "gunkshot", "icepunch", "protect", "suckerpunch", "swordsdance", "taunt"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	toxicroakdelta: {
		randomBattleMoves: ["flareblitz", "earthquake", "knockoff", "thunderpunch", "superpower"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	carnivine: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	finneon: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	lumineon: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	snover: {
		tier: "LC",
	},
	abomasnow: {
		randomBattleMoves: ["auroraveil", "blizzard", "earthquake", "iceshard", "woodhammer"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["auroraveil", "blizzard", "focusblast", "iceshard", "protect", "woodhammer"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	abomasnowmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	rotom: {
		randomBattleMoves: ["nastyplot", "shadowball", "thunderbolt", "voltswitch", "willowisp"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["electroweb", "protect", "shadowball", "thunderbolt", "voltswitch", "willowisp"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	rotomheat: {
		randomBattleMoves: ["defog", "nastyplot", "overheat", "thunderbolt", "voltswitch", "willowisp"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["electroweb", "overheat", "protect", "thunderbolt", "voltswitch", "willowisp"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	rotomwash: {
		randomBattleMoves: ["hydropump", "thunderbolt", "trick", "voltswitch", "willowisp"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["hydropump", "protect", "thunderbolt", "thunderwave", "voltswitch", "willowisp"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	rotomfrost: {
		randomBattleMoves: ["blizzard", "nastyplot", "thunderbolt", "voltswitch", "willowisp"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["blizzard", "nastyplot", "protect", "thunderbolt", "willowisp"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	rotomfan: {
		randomBattleMoves: ["airslash", "nastyplot", "thunderbolt", "voltswitch", "willowisp"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["airslash", "darkpulse", "nastyplot", "protect", "thunderbolt"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	rotommow: {
		randomBattleMoves: ["leafstorm", "nastyplot", "thunderbolt", "trick", "voltswitch", "willowisp"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["electroweb", "leafstorm", "protect", "thunderbolt", "voltswitch", "willowisp"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	uxie: {
		randomBattleMoves: ["healbell", "knockoff", "psychic", "stealthrock", "uturn", "yawn"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["helpinghand", "knockoff", "psychic", "stealthrock", "thunderwave", "yawn"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	mesprit: {
		randomBattleMoves: ["energyball", "healingwish", "icebeam", "nastyplot", "psychic", "stealthrock", "thunderwave", "uturn"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["dazzlinggleam", "knockoff", "nastyplot", "psychic", "thunderbolt", "thunderwave"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	azelf: {
		randomBattleMoves: ["dazzlinggleam", "fireblast", "nastyplot", "psychic", "psyshock", "stealthrock", "taunt", "uturn"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["energyball", "fireblast", "nastyplot", "protect", "psychic", "shadowball", "uturn"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	dialga: {
		randomBattleMoves: ["dracometeor", "fireblast", "flashcannon", "stealthrock", "thunderbolt", "toxic"],
		randomBattleLevel: 74,
		randomDoubleBattleMoves: ["dracometeor", "earthpower", "flashcannon", "protect", "thunderbolt", "thunderwave"],
		randomDoubleBattleLevel: 74,
		tier: "Uber",
	},
	dialgaorigin: {
		//isNonstandard: "Future",
		tier: "Uber",
	},
	palkia: {
		randomBattleMoves: ["dracometeor", "fireblast", "hydropump", "spacialrend", "thunderwave"],
		randomBattleLevel: 74,
		randomDoubleBattleMoves: ["fireblast", "hydropump", "protect", "spacialrend", "thunderbolt", "thunderwave"],
		randomDoubleBattleLevel: 74,
		tier: "Uber",
	},
	palkiaorigin: {
		//isNonstandard: "Future",
		tier: "Uber",
	},
	heatran: {
		randomBattleMoves: ["earthpower", "flashcannon", "lavaplume", "protect", "stealthrock", "taunt", "toxic"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["earthpower", "eruption", "flashcannon", "heatwave", "protect"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	regigigas: {
		randomBattleMoves: ["bodyslam", "protect", "substitute", "toxic"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["bodyslam", "knockoff", "protect", "thunderwave"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	regigigasprimal: {
		tier: "Uber",
	},
	giratina: {
		randomBattleMoves: ["hex", "rest", "sleeptalk", "toxic", "willowisp"],
		randomBattleLevel: 74,
		randomDoubleBattleMoves: ["calmmind", "dragonpulse", "rest", "shadowball", "willowisp"],
		randomDoubleBattleLevel: 74,
		tier: "Uber",
	},
	giratinaorigin: {
		randomBattleMoves: ["dualwingbeat", "honeclaws", "outrage", "poltergeist", "shadowsneak"],
		randomBattleLevel: 74,
		randomDoubleBattleMoves: ["breakingswipe", "dracometeor", "protect", "shadowball", "shadowsneak", "tailwind", "willowisp"],
		randomDoubleBattleLevel: 74,
		randomBattleNoDynamaxMoves: ["defog", "dracometeor", "earthquake", "poltergeist", "shadowsneak", "willowisp"],
		tier: "Uber",
	},
	giratinaprimal: {
		tier: "AG",
	},
	cresselia: {
		randomBattleMoves: ["calmmind", "moonblast", "moonlight", "psyshock", "thunderwave", "toxic"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["allyswitch", "helpinghand", "icywind", "moonlight", "psychic"],
		randomDoubleBattleLevel: 83,
		tier: "(PU)",
	},
	phione: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	manaphy: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	darkrai: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	shaymin: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	shayminsky: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceus: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceusprimal: {
		tier: "AG",
	},
	arceusbug: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceusdark: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceusdragon: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceuselectric: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceusfairy: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceusfighting: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceusfire: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceusflying: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceusghost: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceusgrass: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceusground: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceusice: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceuspoison: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceuspsychic: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceusrock: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceussteel: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	arceuswater: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	victini: {
		randomBattleMoves: ["blueflare", "boltstrike", "energyball", "glaciate", "uturn", "vcreate", "zenheadbutt"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["boltstrike", "glaciate", "protect", "uturn", "vcreate", "zenheadbutt"],
		randomDoubleBattleLevel: 81,
		tier: "(PU)",
	},
	victinidelta: {
		tier: "(PU)",
	},
	snivy: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	snivydelta: {
		tier: "LC",
	},
	servine: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	servinedelta: {
		tier: "NFE",
	},
	serperior: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	serperiordelta: {
		randomBattleMoves: ["slackoff", "flipturn", "scald", "glare", "dracometeor", "earthquake", "icebeam"],
		randomBattleLevel: 80,
		tier: "(PU)",
	},
	tepig: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	pignite: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	emboar: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	oshawott: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	dewott: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	samurott: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	samurotthisui: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	patrat: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	watchog: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	lillipup: {
		tier: "LC",
	},
	herdier: {
		tier: "NFE",
	},
	stoutland: {
		randomBattleMoves: ["crunch", "facade", "playrough", "superpower", "wildcharge"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["crunch", "facade", "helpinghand", "protect", "superpower", "thunderwave"],
		randomDoubleBattleLevel: 90,
		tier: "(PU)",
	},
	purrloin: {
		tier: "LC",
	},
	purrloindelta: {
		tier: "LC",
	},
	liepard: {
		randomBattleMoves: ["copycat", "encore", "knockoff", "playrough", "thunderwave", "uturn"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["copycat", "encore", "fakeout", "foulplay", "snarl", "taunt", "thunderwave"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	lieparddelta: {
		randomBattleMoves: ["swordsdance", "poltergeist", "playrough", "knockoff", "uturn"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	pansage: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	simisage: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	pansear: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	simisear: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	panpour: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	simipour: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	munna: {
		tier: "LC",
	},
	musharna: {
		randomBattleMoves: ["calmmind", "moonblast", "moonlight", "psychic", "thunderwave"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["helpinghand", "hypnosis", "moonblast", "protect", "psychic", "trickroom"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	pidove: {
		tier: "LC",
	},
	tranquill: {
		tier: "NFE",
	},
	unfezant: {
		randomBattleMoves: ["bravebird", "defog", "nightslash", "roost", "uturn"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["bravebird", "nightslash", "quickattack", "roost", "tailwind", "uturn"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	blitzle: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	zebstrika: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	zebstrikamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	roggenrola: {
		tier: "LC",
	},
	boldore: {
		tier: "NFE",
	},
	gigalith: {
		randomBattleMoves: ["earthquake", "explosion", "stealthrock", "stoneedge", "superpower"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["bodypress", "explosion", "heavyslam", "protect", "rockslide", "stealthrock", "stompingtantrum", "stoneedge", "wideguard"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	woobat: {
		tier: "LC",
	},
	swoobat: {
		randomBattleMoves: ["airslash", "calmmind", "heatwave", "roost", "storedpower"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["airslash", "calmmind", "heatwave", "psychic"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	drilbur: {
		tier: "LC",
	},
	excadrill: {
		randomBattleMoves: ["earthquake", "ironhead", "rapidspin", "rockslide", "swordsdance"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["highhorsepower", "ironhead", "protect", "rapidspin", "rockslide", "swordsdance"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	audino: {
		randomBattleMoves: ["healbell", "knockoff", "protect", "toxic", "wish"],
		randomBattleLevel: 91,
		randomDoubleBattleMoves: ["bodyslam", "healpulse", "helpinghand", "knockoff", "protect", "thunderwave"],
		randomDoubleBattleLevel: 90,
		tier: "(PU)",
	},
	audinomega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	timburr: {
		tier: "LC",
	},
	gurdurr: {
		randomBattleMoves: ["bulkup", "defog", "drainpunch", "knockoff", "machpunch"],
		randomBattleLevel: 83,
		tier: "NFE",
	},
	conkeldurr: {
		randomBattleMoves: ["closecombat", "drainpunch", "facade", "knockoff", "machpunch"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["closecombat", "drainpunch", "highhorsepower", "icepunch", "knockoff", "machpunch", "protect", "stoneedge"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	tympole: {
		tier: "LC",
	},
	palpitoad: {
		tier: "NFE",
	},
	seismitoad: {
		randomBattleMoves: ["earthquake", "liquidation", "raindance", "sludgebomb", "stealthrock"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["earthpower", "knockoff", "muddywater", "powerwhip", "protect", "raindance"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	throh: {
		randomBattleMoves: ["bulkup", "circlethrow", "icepunch", "knockoff", "rest", "sleeptalk", "stormthrow"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["facade", "knockoff", "poisonjab", "protect", "stoneedge", "stormthrow", "wideguard"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	sawk: {
		randomBattleMoves: ["bulkup", "closecombat", "knockoff", "poisonjab", "stoneedge"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["closecombat", "helpinghand", "knockoff", "poisonjab", "protect", "rockslide"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	sewaddle: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	swadloon: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	leavanny: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	leavannyarmor: {
		tier: "(PU)",
	},
	venipede: {
		tier: "LC",
	},
	venipededelta: {
		tier: "LC",
	},
	whirlipede: {
		tier: "NFE",
	},
	whirlipededelta: {
		tier: "NFE",
	},
	scolipede: {
		randomBattleMoves: ["earthquake", "megahorn", "poisonjab", "protect", "spikes", "swordsdance", "toxicspikes"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["megahorn", "poisonjab", "protect", "rockslide", "superpower", "swordsdance"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	scolipededelta: {
		randomBattleMoves: ["stealthrock", "spikes", "flareblitz", "stoneedge", "earthquake", "swordsdance"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	cottonee: {
		tier: "LC",
	},
	whimsicott: {
		randomBattleMoves: ["defog", "energyball", "leechseed", "moonblast", "stunspore", "taunt", "uturn"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["encore", "energyball", "helpinghand", "moonblast", "tailwind", "taunt"],
		randomDoubleBattleLevel: 82,
		randomBattleNoDynamaxMoves: ["defog", "encore", "energyball", "leechseed", "moonblast", "stunspore", "taunt", "uturn"],
		tier: "(PU)",
	},
	petilil: {
		tier: "LC",
	},
	petilildeltaw: {
		tier: "LC",
	},
	petilildeltaf: {
		tier: "LC",
	},
	lilligant: {
		randomBattleMoves: ["gigadrain", "petaldance", "pollenpuff", "quiverdance", "sleeppowder"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["energyball", "pollenpuff", "quiverdance", "sleeppowder"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	lilligantdeltaw: {
		randomBattleMoves: ["calmmind", "recover", "scald", "fireblast", "energyball"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	lilligantdeltaf: {
		randomBattleMoves: ["calmmind", "roost", "airslash", "focusblast", "moonblat", "heatwave"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	lilliganthisui: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	basculin: {
		randomBattleMoves: ["aquajet", "crunch", "flipturn", "headsmash", "liquidation", "psychicfangs"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["flipturn", "headsmash", "icebeam", "liquidation", "muddywater", "protect", "psychicfangs", "superpower"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	basculinbluestriped: {
		randomBattleMoves: ["aquajet", "crunch", "flipturn", "headsmash", "liquidation", "psychicfangs"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["aquajet", "flipturn", "headsmash", "icebeam", "liquidation", "protect", "psychicfangs", "superpower"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	basculinwhitestriped: {
		//isNonstandard: "Future",
		tier: "LC",
	},
	sandile: {
		tier: "LC",
	},
	krokorok: {
		tier: "NFE",
	},
	krookodile: {
		randomBattleMoves: ["closecombat", "earthquake", "knockoff", "stealthrock", "stoneedge"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["closecombat", "highhorsepower", "knockoff", "protect", "rockslide", "taunt"],
		randomDoubleBattleLevel: 81,
		tier: "(PU)",
	},
	darumaka: {
		tier: "LC",
	},
	darumakagalar: {
		tier: "LC",
	},
	darumakadelta: {
		tier: "LC",
	},
	darmanitan: {
		randomBattleMoves: ["earthquake", "flareblitz", "rockslide", "superpower", "uturn"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["earthquake", "flareblitz", "rockslide", "superpower", "uturn"],
		randomDoubleBattleLevel: 82,
		tier: "(PU)",
	},
	darmanitandelta: {
		randomBattleMoves: ["poltergeist", "knockoff", "uturn", "superpower", "shadowsneak"],
		randomBattleLevel: 80,
		tier: "(PU)",
	},
	darmanitangalar: {
		randomBattleMoves: ["earthquake", "flareblitz", "iciclecrash", "superpower", "uturn"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["earthquake", "flareblitz", "iciclecrash", "rockslide", "superpower", "uturn"],
		randomDoubleBattleLevel: 80,
		tier: "Uber",
	},
	darmanitangalarzen: {
		randomBattleMoves: ["bellydrum", "earthquake", "firepunch", "iciclecrash", "substitute"],
		randomBattleLevel: 78,
	},
	maractus: {
		randomBattleMoves: ["energyball", "knockoff", "leechseed", "spikes", "spikyshield", "toxic"],
		randomBattleLevel: 94,
		randomDoubleBattleMoves: ["acupressure", "drainpunch", "helpinghand", "leafstorm", "spikyshield", "suckerpunch"],
		randomDoubleBattleLevel: 96, // buffed twice in the last 6 months as of Nov 2021
		tier: "(PU)",
	},
	maractusdelta: {
		randomBattleMoves: ["shiftgear", "meteormash", "knockoff", "wildcharge", "uturn", "overheat"],
		randomBattleLevel: 90,
		tier: "(PU)",
	},
	dwebble: {
		tier: "LC",
	},
	dwebbledeltab: {
		tier: "LC",
	},
	dwebbledeltac: {
		tier: "LC",
	},
	crustle: {
		randomBattleMoves: ["earthquake", "shellsmash", "spikes", "stealthrock", "stoneedge", "xscissor"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["knockoff", "protect", "rockslide", "shellsmash", "stompingtantrum", "xscissor"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	crustledeltab: {
		randomBattleMoves: ["spikes", "earthquake", "gunkshot", "swordsdance", "leafblade"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	crustledeltac: {
		randomBattleMoves: ["shellsmash", "playrough", "facade", "brickbreak", "knockoff"],
		randomBattleLevel: 74,
		tier: "Uber",
	},
	scraggy: {
		tier: "LC",
	},
	scraggydelta: {
		tier: "LC",
	},
	scrafty: {
		randomBattleMoves: ["closecombat", "dragondance", "icepunch", "knockoff", "poisonjab"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["closecombat", "coaching", "drainpunch", "fakeout", "icepunch", "knockoff"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	scraftydelta: {
		randomBattleMoves: ["bulkup", "synthesis", "woodhammer", "rockslide", "knockoff", "superpower"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	sigilyph: {
		randomBattleMoves: ["airslash", "defog", "energyball", "heatwave", "psychic"],
		randomBattleLevel: 83,
		randomDoubleBattleMoves: ["airslash", "heatwave", "protect", "psychic", "tailwind"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	yamask: {
		tier: "LC",
	},
	yamaskdelta: {
		tier: "LC",
	},
	yamaskgalar: {
		tier: "LC",
	},
	cofagrigus: {
		randomBattleMoves: ["bodypress", "memento", "shadowball", "toxicspikes", "willowisp"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["bodypress", "irondefense", "painsplit", "shadowball", "trickroom", "willowisp"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	cofagrigusdelta: {
		randomBattleMoves: ["corrode", "earthpower", "painsplit", "willowisp", "toxicspikes", "bodypress", "flashcannon"],
		randomBattleLevel: 88,
		tier: "(PU)",
	},
	runerigus: {
		randomBattleMoves: ["earthquake", "haze", "poltergeist", "stealthrock", "toxicspikes", "willowisp"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["earthquake", "poltergeist", "protect", "trickroom", "willowisp"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	tirtouga: {
		tier: "LC",
	},
	carracosta: {
		randomBattleMoves: ["aquajet", "hydropump", "shellsmash", "stoneedge", "superpower"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["aquajet", "liquidation", "shellsmash", "stoneedge", "superpower"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	archen: {
		tier: "LC",
	},
	archeops: {
		randomBattleMoves: ["dualwingbeat", "earthquake", "roost", "stoneedge", "uturn"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["aquatail", "dualwingbeat", "earthquake", "heatwave", "protect", "rockslide", "uturn"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	trubbish: {
		tier: "LC",
	},
	garbodor: {
		tier: "(PU)",
	},
	garbodorgmax: {
		randomBattleMoves: ["explosion", "gunkshot", "painsplit", "spikes", "stompingtantrum", "toxicspikes"],
		randomBattleLevel: 87,
		randomDoubleBattleMoves: ["drainpunch", "explosion", "gunkshot", "protect", "toxicspikes"],
		randomDoubleBattleLevel: 90,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	zorua: {
		tier: "LC",
	},
	zoruahisui: {
		//isNonstandard: "Future",
		tier: "LC",
	},
	zoroark: {
		randomBattleMoves: ["darkpulse", "flamethrower", "nastyplot", "sludgebomb", "trick"],
		randomDoubleBattleMoves: ["darkpulse", "flamethrower", "focusblast", "nastyplot", "protect", "sludgebomb"],
		tier: "(PU)",
	},
	zoroarkmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	zoroarkhisui: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	minccino: {
		tier: "LC",
	},
	cinccino: {
		randomBattleMoves: ["bulletseed", "knockoff", "rockblast", "tailslap", "uturn"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["bulletseed", "knockoff", "protect", "rockblast", "tailslap", "tripleaxel", "uturn"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	gothita: {
		tier: "LC",
	},
	gothorita: {
		tier: "NFE",
	},
	gothitelle: {
		randomBattleMoves: ["nastyplot", "psychic", "shadowball", "thunderbolt", "trick"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["allyswitch", "fakeout", "healpulse", "helpinghand", "hypnosis", "protect", "psychic", "shadowball", "trickroom"],
		randomDoubleBattleLevel: 83,
		tier: "(PU)",
	},
	gothitellemega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	solosis: {
		tier: "LC",
	},
	solosisdelta: {
		tier: "LC",
	},
	duosion: {
		tier: "NFE",
	},
	duosiondelta: {
		tier: "NFE",
	},
	reuniclus: {
		randomBattleMoves: ["calmmind", "focusblast", "psychic", "recover", "shadowball", "trickroom"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["focusblast", "protect", "psychic", "shadowball", "trickroom"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	reuniclusmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	reuniclusdelta: {
		randomBattleMoves: ["trickroom", "shadowball", "powergem", "focusblast", "calmmind", "earthpower"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	ducklett: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	swanna: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	vanillite: {
		tier: "LC",
	},
	vanillish: {
		tier: "NFE",
	},
	vanilluxe: {
		randomBattleMoves: ["auroraveil", "blizzard", "explosion", "flashcannon", "freezedry"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["auroraveil", "blizzard", "freezedry", "iceshard", "protect"],
		randomDoubleBattleLevel: 82,
		tier: "(PU)",
	},
	deerling: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	sawsbuck: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	emolga: {
		randomBattleMoves: ["airslash", "defog", "energyball", "roost", "thunderbolt", "toxic", "uturn"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["acrobatics", "helpinghand", "nuzzle", "tailwind", "taunt"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	emolgadelta: {
		randomBattleMoves: ["fireblast", "knockoff", "woodhammer", "uturn", "willowisp"],
		randomBattleLevel: 78,
		tier: "Uber",
	},
	karrablast: {
		tier: "LC",
	},
	karrablastdelta: {
		tier: "LC",
	},
	escavalier: {
		randomBattleMoves: ["closecombat", "drillrun", "ironhead", "knockoff", "megahorn", "swordsdance"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["closecombat", "drillrun", "ironhead", "knockoff", "megahorn", "protect", "swordsdance"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	escavalierdelta: {
		randomBattleMoves: ["trickroom", "swordsdance", "playrough", "knockoff", "superpower", "zenheadbutt"],
		randomBattleLevel: 78,
		tier: "(PU)",
	},
	foongus: {
		tier: "LC",
	},
	foongusdelta: {
		tier: "LC",
	},
	amoonguss: {
		randomBattleMoves: ["clearsmog", "gigadrain", "sludgebomb", "spore", "synthesis", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["clearsmog", "pollenpuff", "protect", "ragepowder", "spore"],
		randomDoubleBattleLevel: 81,
		tier: "(PU)",
	},
	amoongussdelta: {
		randomBattleMoves: ["willowisp", "hex", "poltergeist", "knockoff", "destinybond"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	frillish: {
		tier: "LC",
	},
	jellicent: {
		randomBattleMoves: ["icebeam", "recover", "scald", "shadowball", "toxic", "willowisp"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["protect", "scald", "shadowball", "strengthsap", "trickroom", "willowisp"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	alomomola: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	joltik: {
		tier: "LC",
	},
	galvantula: {
		randomBattleMoves: ["bugbuzz", "gigadrain", "stickyweb", "thunder", "voltswitch"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["bugbuzz", "electroweb", "energyball", "protect", "stickyweb", "thunder"],
		randomDoubleBattleLevel: 85,
		tier: "(PU)",
	},
	ferroseed: {
		tier: "LC",
	},
	ferrothorn: {
		randomBattleMoves: ["gyroball", "knockoff", "leechseed", "powerwhip", "protect", "spikes", "stealthrock"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["bodypress", "gyroball", "knockoff", "leechseed", "powerwhip", "protect", "toxic"],
		randomDoubleBattleLevel: 83,
		tier: "(PU)",
	},
	klink: {
		tier: "LC",
	},
	klang: {
		tier: "NFE",
	},
	klinklang: {
		randomBattleMoves: ["geargrind", "shiftgear", "substitute", "wildcharge"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["geargrind", "protect", "shiftgear", "thunderwave", "wildcharge"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	tynamo: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	eelektrik: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	eelektross: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	elgyem: {
		tier: "LC",
	},
	beheeyem: {
		randomBattleMoves: ["psychic", "shadowball", "thunderbolt", "trick", "trickroom"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["protect", "psychic", "shadowball", "thunderbolt", "trickroom"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	litwick: {
		tier: "LC",
	},
	litwickdelta: {
		tier: "LC",
	},
	lampent: {
		tier: "NFE",
	},
	lampentdelta: {
		tier: "NFE",
	},
	chandelure: {
		randomBattleMoves: ["calmmind", "energyball", "fireblast", "shadowball", "substitute", "trick"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["calmmind", "energyball", "heatwave", "overheat", "protect", "shadowball", "trick"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	chandeluredelta: {
		randomBattleMoves: ["moonblast", "fireblast", "earthpower", "trick", "calmmind"],
		randomBattleLevel: 76,
		tier: "(PU)",
	},
	axew: {
		tier: "LC",
	},
	axewdelta: {
		tier: "LC",
	},
	fraxure: {
		tier: "NFE",
	},
	fraxuredelta: {
		tier: "NFE",
	},
	haxorus: {
		randomBattleMoves: ["closecombat", "dragondance", "earthquake", "outrage", "poisonjab"],
		randomBattleLevel: 77,
		randomDoubleBattleMoves: ["closecombat", "dragonclaw", "dragondance", "poisonjab", "protect"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	haxorusmega: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	haxorusdelta: {
		randomBattleMoves: ["swordsdance", "liquidation", "anchorshot", "knockoff", "earthquake"],
		randomBattleLevel: 78,
		tier: "(PU)",
	},
	cubchoo: {
		tier: "LC",
	},
	beartic: {
		randomBattleMoves: ["aquajet", "iciclecrash", "stoneedge", "superpower", "swordsdance"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["aquajet", "iciclecrash", "protect", "rockslide", "superpower", "swordsdance", "throatchop"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	cryogonal: {
		randomBattleMoves: ["freezedry", "haze", "rapidspin", "recover", "toxic"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["freezedry", "haze", "icebeam", "icywind", "rapidspin", "recover", "toxic"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	cryogonalmega: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	shelmet: {
		tier: "LC",
	},
	accelgor: {
		randomBattleMoves: ["bugbuzz", "energyball", "focusblast", "sludgebomb", "spikes", "toxic", "yawn"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["acidspray", "bugbuzz", "encore", "energyball", "focusblast"],
		randomDoubleBattleLevel: 88,
		randomBattleNoDynamaxMoves: ["bugbuzz", "encore", "energyball", "focusblast", "spikes", "toxic"],
		tier: "(PU)",
	},
	stunfisk: {
		randomBattleMoves: ["discharge", "earthpower", "foulplay", "sludgebomb", "stealthrock"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["earthpower", "electroweb", "foulplay", "muddywater", "stealthrock", "thunderbolt"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	stunfiskgalar: {
		randomBattleMoves: ["earthquake", "painsplit", "stealthrock", "stoneedge", "thunderwave"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["earthquake", "foulplay", "protect", "stealthrock", "stoneedge", "thunderwave"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	stunfiskmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	mienfoo: {
		tier: "LC",
	},
	mienshao: {
		randomBattleMoves: ["closecombat", "fakeout", "knockoff", "poisonjab", "stoneedge", "swordsdance", "uturn"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["closecombat", "fakeout", "knockoff", "poisonjab", "protect", "uturn"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	druddigon: {
		randomBattleMoves: ["earthquake", "glare", "outrage", "stealthrock", "suckerpunch", "superpower"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["firepunch", "glare", "gunkshot", "protect", "scaleshot", "suckerpunch"],
		randomDoubleBattleLevel: 87,
		tier: "(PU)",
	},
	golett: {
		tier: "LC",
	},
	golettdelta: {
		tier: "LC",
	},
	golurk: {
		randomBattleMoves: ["dynamicpunch", "earthquake", "poltergeist", "rockpolish", "stoneedge"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["dynamicpunch", "earthquake", "highhorsepower", "icepunch", "poltergeist", "protect"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	golurkmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	golurkdelta: {
		randomBattleMoves: ["closecombat", "bulkup", "knockoff", "bulletpunch", "icepunch", "facade", "drainpunch"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	pawniard: {
		tier: "LC",
	},
	pawniarddelta: {
		tier: "LC",
	},
	bisharp: {
		randomBattleMoves: ["ironhead", "knockoff", "stealthrock", "suckerpunch", "swordsdance"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["brickbreak", "ironhead", "knockoff", "protect", "suckerpunch", "swordsdance"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	bisharpdelta: {
		randomBattleMoves: ["uturn", "closecombat", "knockoff", "ironhead", "acrobatics"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	bisharpmega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	bisharpdeltamega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	bouffalant: {
		randomBattleMoves: ["closecombat", "earthquake", "headcharge", "megahorn", "swordsdance"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["closecombat", "headcharge", "lashout", "protect", "wildcharge"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	rufflet: {
		tier: "LC",
	},
	braviary: {
		randomBattleMoves: ["bravebird", "bulkup", "closecombat", "retaliate", "roost", "uturn"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["bravebird", "closecombat", "protect", "roost", "tailwind"],
		randomDoubleBattleLevel: 82,
		tier: "(PU)",
	},
	braviaryhisui: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	vullaby: {
		tier: "LC",
	},
	mandibuzz: {
		randomBattleMoves: ["bravebird", "defog", "foulplay", "roost", "toxic"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["foulplay", "roost", "snarl", "tailwind", "taunt"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	heatmor: {
		randomBattleMoves: ["firelash", "gigadrain", "knockoff", "substitute", "suckerpunch", "superpower"],
		randomBattleLevel: 90,
		randomDoubleBattleMoves: ["firelash", "gigadrain", "incinerate", "protect", "rocktomb", "suckerpunch", "superpower", "willowisp"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	heatmordelta: {
		randomBattleMoves: ["shiftgear", "gunkshot", "ironhead", "crunch", "fireblast"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	durant: {
		randomBattleMoves: ["firstimpression", "honeclaws", "ironhead", "rockslide", "superpower"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["firstimpression", "ironhead", "protect", "rockslide", "superpower", "xscissor"],
		randomDoubleBattleLevel: 82,
		tier: "(PU)",
	},
	deino: {
		tier: "LC",
	},
	deinodelta: {
		tier: "LC",
	},
	zweilous: {
		tier: "NFE",
	},
	zweilousdelta: {
		tier: "NFE",
	},
	hydreigon: {
		randomBattleMoves: ["darkpulse", "dracometeor", "fireblast", "flashcannon", "nastyplot", "roost", "uturn"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["darkpulse", "dracometeor", "dragonpulse", "earthpower", "fireblast", "nastyplot", "protect", "tailwind"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	hydreigonmega: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	hydreigonmegasix: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	hydreigonmegaseven: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	hydreigonmegaeight: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	hydreigonmeganine: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	hydreigondelta: {
		randomBattleMoves: ["earthpower", "hypervoice", "fireblast", "glare", "uturn"],
		randomBattleLevel: 78,
		tier: "(PU)",
	},
	larvesta: {
		tier: "LC",
	},
	larvestadelta: {
		tier: "LC",
	},
	volcarona: {
		randomBattleMoves: ["bugbuzz", "fireblast", "gigadrain", "quiverdance", "roost"],
		randomBattleLevel: 76,
		randomDoubleBattleMoves: ["bugbuzz", "gigadrain", "heatwave", "hurricane", "protect", "quiverdance"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	volcaronadelta: {
		randomBattleMoves: ["corrode", "darkpulse", "roost", "taunt", "earthpower"],
		randomBattleLevel: 74,
		tier: "Uber",
	},
	volcaronadeltaarmor: {
		tier: "Uber",
	},
	cobalion: {
		randomBattleMoves: ["closecombat", "ironhead", "stealthrock", "stoneedge", "swordsdance", "voltswitch"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["closecombat", "ironhead", "protect", "stoneedge", "swordsdance", "thunderwave"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	terrakion: {
		randomBattleMoves: ["closecombat", "earthquake", "quickattack", "stoneedge", "swordsdance"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["closecombat", "protect", "rockslide", "swordsdance"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	virizion: {
		randomBattleMoves: ["closecombat", "leafblade", "stoneedge", "swordsdance"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["closecombat", "coaching", "leafblade", "protect", "stoneedge", "swordsdance"],
		randomDoubleBattleLevel: 86,
		randomBattleNoDynamaxMoves: ["closecombat", "leafblade", "stoneedge", "swordsdance"],
		tier: "(PU)",
	},
	tornadus: {
		randomBattleMoves: ["defog", "grassknot", "heatwave", "hurricane", "nastyplot"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["heatwave", "hurricane", "nastyplot", "superpower", "tailwind", "taunt"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	tornadustherian: {
		randomBattleMoves: ["defog", "hurricane", "knockoff", "superpower", "uturn"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["heatwave", "hurricane", "knockoff", "nastyplot", "protect"],
		randomDoubleBattleLevel: 80,
		tier: "Uber",
	},
	thundurus: {
		randomBattleMoves: ["grassknot", "knockoff", "nastyplot", "sludgewave", "superpower", "thunderbolt", "thunderwave"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["grassknot", "knockoff", "nastyplot", "protect", "sludgebomb", "thunderbolt", "thunderwave"],
		randomDoubleBattleLevel: 82,
		tier: "(PU)",
	},
	thundurustherian: {
		randomBattleMoves: ["focusblast", "grassknot", "nastyplot", "psychic", "thunderbolt", "voltswitch"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["agility", "focusblast", "grassknot", "nastyplot", "sludgebomb", "thunderbolt", "voltswitch"],
		randomDoubleBattleLevel: 82,
		tier: "(PU)",
	},
	reshiram: {
		randomBattleMoves: ["blueflare", "defog", "dracometeor", "earthpower", "roost", "stoneedge", "toxic"],
		randomBattleLevel: 74,
		randomDoubleBattleMoves: ["blueflare", "dracometeor", "earthpower", "heatwave", "roost", "tailwind"],
		randomDoubleBattleLevel: 72,
		tier: "Uber",
	},
	zekrom: {
		randomBattleMoves: ["boltstrike", "dragondance", "outrage", "roost"],
		randomBattleLevel: 69,
		randomDoubleBattleMoves: ["boltstrike", "dragonclaw", "dragondance", "roost"],
		randomDoubleBattleLevel: 72,
		tier: "Uber",
	},
	zekromarmor: {
		tier: "Uber",
	},
	landorus: {
		randomBattleMoves: ["earthpower", "focusblast", "knockoff", "rockpolish", "rockslide", "sludgewave", "stealthrock"],
		randomBattleLevel: 76,
		randomDoubleBattleMoves: ["calmmind", "earthpower", "focusblast", "protect", "psychic", "sludgebomb"],
		randomDoubleBattleLevel: 80,
		tier: "Uber",
	},
	landorustherian: {
		randomBattleMoves: ["earthquake", "fly", "stealthrock", "stoneedge", "swordsdance", "uturn"],
		randomBattleLevel: 72,
		randomDoubleBattleMoves: ["earthquake", "fly", "knockoff", "stoneedge", "swordsdance", "uturn"],
		randomDoubleBattleLevel: 76,
		randomBattleNoDynamaxMoves: ["earthquake", "knockoff", "stealthrock", "stoneedge", "swordsdance", "uturn"],
		tier: "(PU)",
	},
	kyurem: {
		randomBattleMoves: ["dracometeor", "earthpower", "freezedry", "icebeam", "roost", "substitute"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["dracometeor", "earthpower", "freezedry", "glaciate", "protect", "roost"],
		randomDoubleBattleLevel: 78,
		tier: "(PU)",
	},
	kyuremblack: {
		randomBattleMoves: ["dragondance", "fusionbolt", "iciclespear", "outrage"],
		randomBattleLevel: 73,
		randomDoubleBattleMoves: ["dragonclaw", "dragondance", "fusionbolt", "iciclespear", "protect", "roost"],
		randomDoubleBattleLevel: 75,
		tier: "Uber",
	},
	kyuremwhite: {
		randomBattleMoves: ["dracometeor", "earthpower", "freezedry", "fusionflare", "icebeam", "roost"],
		randomBattleLevel: 74,
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "earthpower", "freezedry", "fusionflare", "icebeam", "protect", "roost"],
		randomDoubleBattleLevel: 72,
		tier: "Uber",
	},
	keldeo: {
		randomDoubleBattleMoves: ["airslash", "calmmind", "icywind", "muddywater", "protect", "secretsword"],
		randomDoubleBattleLevel: 82,
		tier: "(PU)",
	},
	keldeoresolute: {
		randomBattleMoves: ["airslash", "calmmind", "hydropump", "icywind", "scald", "secretsword", "substitute"],
		randomBattleLevel: 79,
	},
	meloetta: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	meloettapirouette: {
		//isNonstandard: "Past",
	},
	meloettadark: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	meloettadelta: {
		randomBattleMoves: ["knockoff", "playrough", "uturn", "ironhead", "suckerpunch", "taunt"],
		randomBattleLevel: 76,
		tier: "(PU)",
	},
	meloettadeltamagician: {
		randomBattleMoves: ["calmmind", "psychic", "darkpulse", "focusblast", "uturn", "trick"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	genesect: {
		randomBattleMoves: ["blazekick", "extremespeed", "ironhead", "leechlife", "shiftgear", "thunderbolt", "uturn"],
		randomBattleLevel: 74,
		randomDoubleBattleMoves: ["blazekick", "ironhead", "leechlife", "protect", "shiftgear", "thunderbolt", "uturn"],
		randomDoubleBattleLevel: 78,
		tier: "Uber",
	},
	genesectburn: {
		tier: "Uber",
	},
	genesectchill: {
		tier: "Uber",
	},
	genesectdouse: {
		randomBattleMoves: ["bugbuzz", "extremespeed", "flamethrower", "icebeam", "ironhead", "technoblast", "thunderbolt", "uturn"],
		randomBattleLevel: 74,
		tier: "Uber",
	},
	genesectshock: {
		tier: "Uber",
	},
	chespin: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	quilladin: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	chesnaught: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	fennekin: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	braixen: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	delphox: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	froakie: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	froakiedelta: {
		tier: "LC",
	},
	frogadier: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	frogadierdelta: {
		tier: "NFE",
	},
	greninja: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	greninjadelta: {
		randomBattleMoves: ["spikes", "uturn", "willowisp", "endeavor", "flareblitz", "knockoff", "leafstorm"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	greninjaash: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	bunnelby: {
		tier: "LC",
	},
	diggersby: {
		randomBattleMoves: ["bodyslam", "earthquake", "knockoff", "quickattack", "swordsdance", "uturn"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["bodyslam", "highhorsepower", "knockoff", "protect", "quickattack", "swordsdance", "uturn"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	fletchling: {
		tier: "LC",
	},
	fletchinder: {
		tier: "NFE",
	},
	talonflame: {
		randomBattleMoves: ["bravebird", "defog", "flareblitz", "roost", "swordsdance", "uturn"],
		randomBattleLevel: 81,
		randomDoubleBattleMoves: ["bravebird", "defog", "incinerate", "overheat", "roost", "tailwind", "u-turn", "willowisp"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	scatterbug: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	spewpa: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	vivillon: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	vivillonfancy: {
		//isNonstandard: "Past",
	},
	vivillonpokeball: {
		//isNonstandard: "Past",
	},
	litleo: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	pyroar: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	flabebe: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	floette: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	floetteeternal: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	florges: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	skiddo: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	gogoat: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	pancham: {
		tier: "LC",
	},
	pangoro: {
		randomBattleMoves: ["closecombat", "gunkshot", "icepunch", "knockoff", "partingshot"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["bulletpunch", "closecombat", "drainpunch", "gunkshot", "icepunch", "knockoff", "protect"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	furfrou: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	espurr: {
		tier: "LC",
	},
	meowstic: {
		randomBattleMoves: ["lightscreen", "psychic", "reflect", "thunderwave", "yawn"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["fakeout", "lightscreen", "psychic", "reflect", "thunderwave"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	meowsticf: {
		randomBattleMoves: ["energyball", "nastyplot", "psychic", "shadowball", "thunderbolt"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["fakeout", "nastyplot", "psychic", "shadowball", "thunderbolt"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	honedge: {
		tier: "LC",
	},
	doublade: {
		randomBattleMoves: ["closecombat", "ironhead", "shadowclaw", "shadowsneak", "swordsdance"],
		randomBattleLevel: 82,
		tier: "NFE",
	},
	aegislash: {
		randomBattleMoves: ["closecombat", "flashcannon", "kingsshield", "shadowball", "shadowsneak", "substitute", "toxic"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["flashcannon", "kingsshield", "shadowball", "shadowsneak"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	aegislashblade: {
		randomBattleMoves: ["closecombat", "ironhead", "shadowclaw", "shadowsneak", "swordsdance"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["closecombat", "ironhead", "kingsshield", "shadowclaw", "shadowsneak", "swordsdance"],
		randomDoubleBattleLevel: 84,
	},
	spritzee: {
		tier: "LC",
	},
	aromatisse: {
		randomBattleMoves: ["calmmind", "moonblast", "protect", "toxic", "wish"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["healpulse", "moonblast", "protect", "thunderbolt", "trickroom", "wish"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	swirlix: {
		tier: "LC",
	},
	slurpuff: {
		randomBattleMoves: ["bellydrum", "drainpunch", "facade", "playrough"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["faketears", "flamethrower", "helpinghand", "playrough", "stickyweb"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	inkay: {
		tier: "LC",
	},
	malamar: {
		randomBattleMoves: ["knockoff", "psychocut", "rest", "sleeptalk", "substitute", "superpower"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["knockoff", "psychocut", "rest", "superpower"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	binacle: {
		tier: "LC",
	},
	barbaracle: {
		randomBattleMoves: ["crosschop", "earthquake", "liquidation", "shellsmash", "stoneedge"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["liquidation", "protect", "rockslide", "shellsmash", "superpower"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	skrelp: {
		tier: "LC",
	},
	dragalge: {
		randomBattleMoves: ["dracometeor", "dragonpulse", "flipturn", "focusblast", "sludgewave", "toxicspikes"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "focusblast", "protect", "sludgebomb"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	clauncher: {
		tier: "LC",
	},
	clawitzer: {
		randomBattleMoves: ["aurasphere", "darkpulse", "icebeam", "scald", "uturn", "waterpulse"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["aurasphere", "darkpulse", "icebeam", "muddywater", "uturn"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	helioptile: {
		tier: "LC",
	},
	heliolisk: {
		randomBattleMoves: ["glare", "grassknot", "hypervoice", "surf", "thunderbolt", "voltswitch"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["glare", "grassknot", "hypervoice", "protect", "thunderbolt", "voltswitch"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	tyrunt: {
		tier: "LC",
	},
	tyrantrum: {
		randomBattleMoves: ["closecombat", "dragondance", "earthquake", "headsmash", "outrage"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["closecombat", "dragonclaw", "dragondance", "headsmash", "highhorsepower"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	amaura: {
		tier: "LC",
	},
	amauradelta: {
		tier: "LC",
	},
	aurorus: {
		randomBattleMoves: ["ancientpower", "blizzard", "earthpower", "freezedry", "stealthrock", "thunderwave"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["auroraveil", "blizzard", "earthpower", "freezedry", "protect", "thunderwave"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	aurorusdelta: {
		randomBattleMoves: ["scald", "recover", "flipturn", "icebeam", "earthpower", "calmmind"],
		randomBattleLevel: 80,
		tier: "(PU)",
	},
	hawlucha: {
		randomBattleMoves: ["bravebird", "closecombat", "roost", "stoneedge", "swordsdance", "throatchop"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["bravebird", "closecombat", "protect", "swordsdance", "throatchop"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	dedenne: {
		randomBattleMoves: ["protect", "recycle", "thunderbolt", "toxic"],
		randomBattleLevel: 87,
		randomDoubleBattleMoves: ["eerieimpulse", "helpinghand", "nuzzle", "recycle", "superfang", "thunderbolt"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	carbink: {
		randomBattleMoves: ["bodypress", "lightscreen", "moonblast", "reflect", "stealthrock"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["bodypress", "irondefense", "moonblast", "stealthrock"],
		randomDoubleBattleLevel: 90,
		tier: "(PU)",
	},
	goomy: {
		tier: "LC",
	},
	goomydelta: {
		tier: "LC",
	},
	sliggoo: {
		tier: "NFE",
	},
	sliggoodelta: {
		tier: "NFE",
	},
	sliggoohisui: {
		//isNonstandard: "Future",
		tier: "NFE",
	},
	goodra: {
		randomBattleMoves: ["dracometeor", "earthquake", "fireblast", "powerwhip", "sludgebomb", "thunderbolt"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["breakingswipe", "dracometeor", "fireblast", "muddywater", "powerwhip", "protect", "sludgebomb", "thunderbolt"],
		randomDoubleBattleLevel: 85,
		tier: "(PU)",
	},
	goodradelta: {
		randomBattleMoves: ["earthpower", "scald", "icebeam", "stealthrock", "calmmind"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	goodrahisui: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	klefki: {
		randomBattleMoves: ["magnetrise", "playrough", "spikes", "thunderwave", "toxic"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["dazzlinggleam", "foulplay", "spikes", "thunderwave"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	phantump: {
		tier: "LC",
	},
	phantumpdelta: {
		tier: "LC",
	},
	trevenant: {
		randomBattleMoves: ["earthquake", "hornleech", "poltergeist", "rockslide", "trickroom", "woodhammer"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["allyswitch", "poltergeist", "rockslide", "trickroom", "willowisp", "woodhammer"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	trevenantdelta: {
		randomBattleMoves: ["closecombat", "auroraveil", "knockoff", "playrough", "earthquake"],
		randomBattleLevel: 88,
		tier: "(PU)",
	},
	pumpkaboo: {
		tier: "LC",
	},
	pumpkaboosmall: {
		tier: "LC",
	},
	pumpkaboolarge: {
		tier: "LC",
	},
	pumpkaboosuper: {
		tier: "LC",
	},
	gourgeist: {
		randomBattleMoves: ["poltergeist", "powerwhip", "shadowsneak", "synthesis", "willowisp"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["leechseed", "poltergeist", "powerwhip", "substitute", "willowisp"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	gourgeistsmall: {
		randomBattleMoves: ["leechseed", "poltergeist", "powerwhip", "substitute", "willowisp"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["leechseed", "poltergeist", "powerwhip", "substitute", "willowisp"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	gourgeistlarge: {
		randomBattleMoves: ["poltergeist", "powerwhip", "shadowsneak", "synthesis", "willowisp"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["poltergeist", "powerwhip", "protect", "shadowsneak", "trickroom"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	gourgeistsuper: {
		randomBattleMoves: ["poltergeist", "powerwhip", "rockslide", "shadowsneak", "trickroom"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["poltergeist", "powerwhip", "protect", "shadowsneak", "trickroom"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	bergmite: {
		tier: "LC",
	},
	bergmitedelta: {
		tier: "LC",
	},
	avalugg: {
		randomBattleMoves: ["avalanche", "bodypress", "curse", "rapidspin", "recover"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["avalanche", "bodypress", "curse", "highhorsepower", "protect", "recover"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	avaluggdelta: {
		randomBattleMoves: ["stealthrock", "rapidspin", "slackoff", "stoneedge", "outrage", "earthquake"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	avalugghisui: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	noibat: {
		tier: "LC",
	},
	noibatdelta: {
		tier: "LC",
	},
	noivern: {
		randomBattleMoves: ["defog", "dracometeor", "flamethrower", "hurricane", "roost", "switcheroo"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["boomburst", "dracometeor", "flamethrower", "hurricane", "protect", "tailwind"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	noiverndelta: {
		randomBattleMoves: ["nastyplot", "flashcannon", "boomburst", "energyball", "leafstorm", "uturn"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	xerneas: {
		randomBattleMoves: ["focusblast", "geomancy", "moonblast", "psyshock", "thunderbolt"],
		randomBattleLevel: 67,
		randomDoubleBattleMoves: ["dazzlinggleam", "focusblast", "geomancy", "moonblast", "thunderbolt"],
		randomDoubleBattleLevel: 70,
		tier: "Uber",
	},
	xerneasneutral: {
		isNonstandard: "Custom", // can't be used in battle
		tier: "Illegal",
	},
	yveltal: {
		randomBattleMoves: ["defog", "heatwave", "knockoff", "oblivionwing", "roost", "suckerpunch", "taunt"],
		randomBattleLevel: 69,
		randomDoubleBattleMoves: ["darkpulse", "heatwave", "knockoff", "oblivionwing", "roost", "suckerpunch", "tailwind", "uturn"],
		randomDoubleBattleLevel: 71,
		tier: "Uber",
	},
	zygarde: {
		randomBattleMoves: ["dragondance", "outrage", "substitute", "thousandarrows"],
		randomBattleLevel: 70,
		randomDoubleBattleMoves: ["coil", "dragondance", "extremespeed", "glare", "irontail", "thousandarrows"],
		randomDoubleBattleLevel: 72,
		tier: "Uber",
	},
	zygarde10: {
		randomBattleMoves: ["coil", "extremespeed", "irontail", "outrage", "thousandarrows"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["dragondance", "extremespeed", "irontail", "protect", "rockslide", "thousandarrows"],
		randomDoubleBattleLevel: 77,
		tier: "(PU)",
	},
	zygardecomplete: {
		tier: "Uber",
	},
	diancie: {
		randomBattleMoves: ["bodypress", "diamondstorm", "earthpower", "moonblast", "stealthrock", "toxic"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["bodypress", "diamondstorm", "earthpower", "moonblast"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	dianciemega: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	hoopa: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	hoopadelta: {
		randomBattleMoves: ["aeroblast", "moonblast", "heatwave", "voltswitch", "icebeam", "nastyplot"],
		randomBattleLevel: 80,
		tier: "(PU)",
	},
	hoopaunbound: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	hoopadeltaunbound: {
		randomBattleMoves: ["aeroblast", "moonblast", "heatwave", "voltswitch", "icebeam", "nastyplot"],
		randomBattleLevel: 76,
		tier: "Uber",
	},
	volcanion: {
		randomBattleMoves: ["defog", "earthpower", "flamethrower", "sludgebomb", "steameruption"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["earthpower", "heatwave", "protect", "sludgebomb", "steameruption"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	rowlet: {
		tier: "LC",
	},
	dartrix: {
		tier: "NFE",
	},
	decidueye: {
		randomBattleMoves: ["bravebird", "leafblade", "poltergeist", "roost", "shadowsneak", "swordsdance"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["bravebird", "leafblade", "protect", "shadowsneak", "spiritshackle", "swordsdance"],
		randomDoubleBattleLevel: 88,
		randomBattleNoDynamaxMoves: ["leafblade", "roost", "shadowsneak", "spiritshackle", "swordsdance", "uturn"],
		tier: "(PU)",
	},
	decidueyehisui: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	litten: {
		tier: "LC",
	},
	torracat: {
		tier: "NFE",
	},
	incineroar: {
		randomBattleMoves: ["earthquake", "flareblitz", "knockoff", "partingshot", "uturn", "willowisp"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["fakeout", "flareblitz", "knockoff", "partingshot", "snarl"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	popplio: {
		tier: "LC",
	},
	brionne: {
		tier: "NFE",
	},
	primarina: {
		randomBattleMoves: ["energyball", "hydropump", "moonblast", "psychic", "sparklingaria"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["dazzlinggleam", "flipturn", "hypervoice", "moonblast", "protect", "psychic"],
		randomDoubleBattleLevel: 82,
		tier: "(PU)",
	},
	pikipek: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	trumbeak: {
		//isNonstandard: "Past",
		tier: "NFE",
	},
	toucannon: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	yungoos: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	gumshoos: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	gumshoostotem: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	grubbin: {
		tier: "LC",
	},
	charjabug: {
		tier: "NFE",
	},
	vikavolt: {
		randomBattleMoves: ["bugbuzz", "energyball", "roost", "stickyweb", "thunderbolt", "voltswitch"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["bugbuzz", "energyball", "protect", "stickyweb", "thunderbolt", "voltswitch"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	vikavolttotem: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	crabrawler: {
		//isNonstandard: "Past",
		tier: "LC",
	},
	crabominable: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	oricorio: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	oricoriopompom: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	oricoriopau: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	oricoriosensu: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	cutiefly: {
		tier: "LC",
	},
	ribombee: {
		randomBattleMoves: ["moonblast", "psychic", "stickyweb", "stunspore", "uturn"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["helpinghand", "moonblast", "pollenpuff", "speedswap", "stickyweb", "tailwind"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	ribombeetotem: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	rockruff: {
		tier: "LC",
	},
	rockruffdusk: {
		tier: "LC",
	},
	lycanroc: {
		randomBattleMoves: ["accelerock", "closecombat", "psychicfangs", "stoneedge", "swordsdance"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["accelerock", "closecombat", "drillrun", "protect", "rockslide", "swordsdance"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	lycanrocmidnight: {
		randomBattleMoves: ["closecombat", "irontail", "stealthrock", "stoneedge", "suckerpunch", "swordsdance"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["closecombat", "irontail", "protect", "stoneedge", "suckerpunch", "swordsdance"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	lycanrocdusk: {
		randomBattleMoves: ["accelerock", "closecombat", "psychicfangs", "stoneedge", "swordsdance"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["accelerock", "closecombat", "drillrun", "protect", "rockslide", "swordsdance"],
		randomDoubleBattleLevel: 81,
		tier: "(PU)",
	},
	wishiwashi: {
		tier: "(PU)",
	},
	wishiwashischool: {
		randomBattleMoves: ["earthquake", "hydropump", "icebeam", "scald", "uturn"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["earthquake", "helpinghand", "hydropump", "icebeam", "muddywater", "protect"],
		randomDoubleBattleLevel: 88,
	},
	mareanie: {
		tier: "LC",
	},
	toxapex: {
		randomBattleMoves: ["banefulbunker", "haze", "recover", "scald", "toxic", "toxicspikes"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["banefulbunker", "haze", "recover", "scald", "toxic", "toxicspikes"],
		randomDoubleBattleLevel: 90,
		tier: "(PU)",
	},
	mudbray: {
		tier: "LC",
	},
	mudsdale: {
		randomBattleMoves: ["bodypress", "earthquake", "heavyslam", "rockslide", "stealthrock"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["bodypress", "heavyslam", "highhorsepower", "protect", "rest", "rocktomb"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	dewpider: {
		tier: "LC",
	},
	araquanid: {
		randomBattleMoves: ["leechlife", "liquidation", "mirrorcoat", "stickyweb", "toxic"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["leechlife", "liquidation", "lunge", "protect", "stickyweb", "wideguard"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	araquanidtotem: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	fomantis: {
		tier: "LC",
	},
	lurantis: {
		randomBattleMoves: ["defog", "knockoff", "leafstorm", "superpower", "synthesis"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["defog", "knockoff", "leafstorm", "protect", "superpower"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	lurantistotem: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	morelull: {
		tier: "LC",
	},
	shiinotic: {
		randomBattleMoves: ["energyball", "leechseed", "moonblast", "spore", "strengthsap"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["energyball", "moonblast", "protect", "spore", "strengthsap"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	salandit: {
		tier: "LC",
	},
	salazzle: {
		randomBattleMoves: ["flamethrower", "protect", "substitute", "toxic"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["encore", "fakeout", "fireblast", "nastyplot", "protect", "sludgebomb"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	salazzletotem: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	stufful: {
		tier: "LC",
	},
	bewear: {
		randomBattleMoves: ["closecombat", "darkestlariat", "doubleedge", "icepunch", "swordsdance"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["closecombat", "darkestlariat", "doubleedge", "drainpunch", "highhorsepower", "icepunch", "protect", "wideguard"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	bounsweet: {
		tier: "LC",
	},
	steenee: {
		tier: "NFE",
	},
	tsareena: {
		randomBattleMoves: ["highjumpkick", "knockoff", "powerwhip", "rapidspin", "synthesis", "tripleaxel", "uturn"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["highjumpkick", "knockoff", "playrough", "powerwhip", "rapidspin", "tripleaxel", "uturn"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	comfey: {
		randomBattleMoves: ["calmmind", "drainingkiss", "gigadrain", "storedpower", "trick", "uturn"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["defog", "drainingkiss", "floralhealing", "gigadrain", "helpinghand", "protect"],
		randomDoubleBattleLevel: 89,
		tier: "(PU)",
	},
	oranguru: {
		randomBattleMoves: ["focusblast", "nastyplot", "psychic", "thunderbolt", "trickroom"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["allyswitch", "focusblast", "instruct", "protect", "psychic", "trickroom"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	passimian: {
		randomBattleMoves: ["closecombat", "earthquake", "gunkshot", "knockoff", "rockslide", "uturn"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["closecombat", "gunkshot", "knockoff", "rockslide", "uturn"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	wimpod: {
		tier: "LC",
	},
	golisopod: {
		randomBattleMoves: ["firstimpression", "knockoff", "leechlife", "liquidation", "spikes"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["aquajet", "closecombat", "firstimpression", "knockoff", "leechlife", "liquidation", "protect", "wideguard"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	sandygast: {
		tier: "LC",
	},
	palossand: {
		randomBattleMoves: ["earthpower", "scorchingsands", "shadowball", "shoreup", "stealthrock", "toxic"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["hypnosis", "protect", "scorchingsands", "shadowball", "shoreup", "stealthrock"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	pyukumuku: {
		randomBattleMoves: ["counter", "mirrorcoat", "recover", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["helpinghand", "lightscreen", "memento", "reflect"],
		randomDoubleBattleLevel: 100,
		tier: "(PU)",
	},
	typenull: {
		randomBattleMoves: ["crushclaw", "payback", "rest", "sleeptalk", "swordsdance"],
		randomBattleLevel: 86,
		tier: "LC",
	},
	silvally: {
		randomBattleMoves: ["crunch", "explosion", "flamecharge", "flamethrower", "multiattack", "swordsdance", "uturn"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["crunch", "explosion", "flamethrower", "multiattack", "protect", "tailwind"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	silvallybug: {
		randomBattleMoves: ["flamethrower", "multiattack", "partingshot", "psychicfangs", "thunderbolt"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["flamethrower", "multiattack", "psychicfangs", "tailwind", "uturn"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	silvallydark: {
		randomBattleMoves: ["ironhead", "multiattack", "partingshot", "psychicfangs", "swordsdance"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["ironhead", "multiattack", "psychicfangs", "swordsdance", "tailwind"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	silvallydragon: {
		randomBattleMoves: ["flamecharge", "ironhead", "multiattack", "partingshot", "swordsdance"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["firefang", "ironhead", "multiattack", "swordsdance", "tailwind"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	silvallyelectric: {
		randomBattleMoves: ["flamethrower", "icebeam", "multiattack", "partingshot", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["flamethrower", "grasspledge", "icebeam", "multiattack", "tailwind"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	silvallyfairy: {
		randomBattleMoves: ["flamecharge", "multiattack", "psychicfangs", "swordsdance"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["flamethrower", "multiattack", "partingshot", "tailwind"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	silvallyfighting: {
		randomBattleMoves: ["crunch", "ironhead", "multiattack", "swordsdance", "uturn"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["crunch", "multiattack", "rockslide", "swordsdance", "tailwind"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	silvallyfire: {
		randomBattleMoves: ["crunch", "ironhead", "multiattack", "swordsdance"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["heatwave", "icebeam", "multiattack", "tailwind", "thunderbolt"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	silvallyflying: {
		randomBattleMoves: ["firefang", "ironhead", "multiattack", "rockslide", "swordsdance"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["firefang", "ironhead", "multiattack", "swordsdance", "tailwind"],
		randomDoubleBattleLevel: 86,
		randomBattleNoDynamaxMoves: ["flamecharge", "ironhead", "multiattack", "rockslide", "swordsdance"],
		tier: "(PU)",
	},
	silvallyghost: {
		randomBattleMoves: ["multiattack", "partingshot", "swordsdance", "xscissor"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["multiattack", "swordsdance", "tailwind", "xscissor"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	silvallygrass: {
		randomBattleMoves: ["defog", "flamethrower", "icebeam", "multiattack", "partingshot"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["flamethrower", "icebeam", "multiattack", "partingshot", "tailwind"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	silvallyground: {
		randomBattleMoves: ["defog", "flamethrower", "icebeam", "multiattack", "partingshot", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["multiattack", "rockslide", "swordsdance", "tailwind"],
		randomDoubleBattleLevel: 89,
		tier: "(PU)",
	},
	silvallyice: {
		randomBattleMoves: ["flamecharge", "multiattack", "psychicfangs", "swordsdance"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["flamethrower", "multiattack", "partingshot", "tailwind", "thunderbolt"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	silvallypoison: {
		randomBattleMoves: ["defog", "flamethrower", "grasspledge", "multiattack", "partingshot", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["flamethrower", "grasspledge", "multiattack", "partingshot", "snarl", "tailwind"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	silvallypsychic: {
		randomBattleMoves: ["crunch", "multiattack", "swordsdance", "uturn"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["flamethrower", "multiattack", "partingshot", "tailwind", "xscissor"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	silvallyrock: {
		randomBattleMoves: ["flamecharge", "multiattack", "partingshot", "psychicfangs", "swordsdance"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["flamethrower", "multiattack", "partingshot", "psychicfangs", "tailwind"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	silvallysteel: {
		randomBattleMoves: ["defog", "flamethrower", "multiattack", "partingshot", "thunderbolt", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["flamethrower", "multiattack", "partingshot", "tailwind", "thunderbolt"],
		randomDoubleBattleLevel: 87,
		tier: "(PU)",
	},
	silvallywater: {
		randomBattleMoves: ["defog", "icebeam", "multiattack", "partingshot", "thunderbolt", "toxic"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["icebeam", "multiattack", "partingshot", "tailwind", "thunderbolt"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	minior: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	miniormeteor: {
		//isNonstandard: "Past",
	},
	komala: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	turtonator: {
		randomBattleMoves: ["bodypress", "dracometeor", "earthquake", "fireblast", "rapidspin", "shellsmash", "willowisp"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["dragonpulse", "fireblast", "protect", "scorchingsands", "shellsmash"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	togedemaru: {
		randomBattleMoves: ["ironhead", "nuzzle", "spikyshield", "uturn", "wish", "zingzap"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["encore", "fakeout", "ironhead", "nuzzle", "spikyshield", "zingzap"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	togedemarutotem: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	mimikyu: {
		randomBattleMoves: ["drainpunch", "playrough", "shadowclaw", "shadowsneak", "swordsdance"],
		randomBattleLevel: 76,
		randomDoubleBattleMoves: ["playrough", "protect", "shadowclaw", "shadowsneak", "swordsdance"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	mimikyutotem: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	mimikyubustedtotem: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	bruxish: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	drampa: {
		randomBattleMoves: ["dracometeor", "fireblast", "glare", "hypervoice", "roost", "thunderbolt"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "glare", "heatwave", "hurricane", "hypervoice", "protect", "roost"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	dhelmise: {
		randomBattleMoves: ["anchorshot", "earthquake", "poltergeist", "powerwhip", "rapidspin", "swordsdance"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["anchorshot", "knockoff", "poltergeist", "powerwhip", "protect"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	jangmoo: {
		tier: "LC",
	},
	hakamoo: {
		tier: "NFE",
	},
	kommoo: {
		randomBattleMoves: ["clangingscales", "clangoroussoul", "closecombat", "poisonjab", "stealthrock"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["bodypress", "dracometeor", "irondefense", "protect"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	kommoototem: {
		//isNonstandard: "Past",
		tier: "(PU)",
	},
	tapukoko: {
		randomBattleMoves: ["calmmind", "dazzlinggleam", "grassknot", "substitute", "thunderbolt", "voltswitch"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["bravebird", "dazzlinggleam", "grassknot", "taunt", "thunderbolt", "uturn"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	tapulele: {
		randomBattleMoves: ["calmmind", "focusblast", "moonblast", "psychic", "psyshock", "shadowball"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["calmmind", "dazzlinggleam", "focusblast", "moonblast", "protect", "psyshock"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	tapubulu: {
		randomBattleMoves: ["closecombat", "hornleech", "megahorn", "stoneedge", "swordsdance", "woodhammer"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["closecombat", "highhorsepower", "hornleech", "protect", "stoneedge", "swordsdance", "woodhammer"],
		randomDoubleBattleLevel: 83,
		tier: "(PU)",
	},
	tapufini: {
		randomBattleMoves: ["calmmind", "defog", "moonblast", "surf", "taunt"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["haze", "healpulse", "moonblast", "muddywater", "naturesmadness", "protect", "taunt"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	cosmog: {
		tier: "LC",
	},
	cosmoem: {
		tier: "NFE",
	},
	solgaleo: {
		randomBattleMoves: ["closecombat", "flamecharge", "flareblitz", "knockoff", "psychicfangs", "sunsteelstrike"],
		randomBattleLevel: 72,
		randomDoubleBattleMoves: ["closecombat", "flareblitz", "morningsun", "protect", "psychicfangs", "stoneedge", "sunsteelstrike"],
		randomDoubleBattleLevel: 76,
		tier: "Uber",
	},
	lunala: {
		randomBattleMoves: ["calmmind", "moonblast", "moongeistbeam", "psyshock", "roost"],
		randomBattleLevel: 72,
		randomDoubleBattleMoves: ["calmmind", "moonblast", "moongeistbeam", "protect", "psyshock", "roost"],
		randomDoubleBattleLevel: 74,
		tier: "Uber",
	},
	nihilego: {
		randomBattleMoves: ["grassknot", "powergem", "sludgewave", "stealthrock", "thunderbolt", "toxicspikes"],
		randomBattleLevel: 79,
		randomDoubleBattleMoves: ["grassknot", "meteorbeam", "protect", "sludgebomb", "thunderbolt"],
		randomDoubleBattleLevel: 81,
		tier: "(PU)",
	},
	buzzwole: {
		randomBattleMoves: ["closecombat", "darkestlariat", "dualwingbeat", "ironhead", "leechlife", "stoneedge"],
		randomBattleLevel: 77,
		randomDoubleBattleMoves: ["closecombat", "darkestlariat", "dualwingbeat", "ironhead", "leechlife", "stoneedge"],
		randomDoubleBattleLevel: 80,
		randomBattleNoDynamaxMoves: ["bulkup", "closecombat", "darkestlariat", "leechlife", "poisonjab", "roost", "stoneedge"],
		tier: "(PU)",
	},
	pheromosa: {
		randomBattleMoves: ["closecombat", "icebeam", "poisonjab", "throatchop", "uturn"],
		randomBattleLevel: 76,
		randomDoubleBattleMoves: ["closecombat", "icebeam", "poisonjab", "protect", "throatchop", "uturn"],
		randomDoubleBattleLevel: 78,
		tier: "Uber",
	},
	xurkitree: {
		randomBattleMoves: ["dazzlinggleam", "energyball", "hypnosis", "thunderbolt", "voltswitch"],
		randomBattleLevel: 76,
		randomDoubleBattleMoves: ["dazzlinggleam", "energyball", "thunderbolt", "voltswitch"],
		randomDoubleBattleLevel: 79,
		tier: "(PU)",
	},
	celesteela: {
		randomBattleMoves: ["airslash", "earthquake", "fireblast", "flashcannon", "leechseed", "protect"],
		randomBattleLevel: 77,
		randomDoubleBattleMoves: ["airslash", "fireblast", "flashcannon", "leechseed", "protect", "wideguard"],
		randomDoubleBattleLevel: 78,
		randomBattleNoDynamaxMoves: ["airslash", "earthquake", "fireblast", "heavyslam", "leechseed", "protect"],
		tier: "(PU)",
	},
	kartana: {
		randomBattleMoves: ["knockoff", "leafblade", "sacredsword", "smartstrike", "swordsdance"],
		randomBattleLevel: 74,
		randomDoubleBattleMoves: ["knockoff", "leafblade", "sacredsword", "smartstrike", "swordsdance"],
		randomDoubleBattleLevel: 78,
		tier: "Uber",
	},
	guzzlord: {
		randomBattleMoves: ["darkpulse", "dracometeor", "fireblast", "knockoff", "sludgebomb"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["dracometeor", "fireblast", "knockoff", "protect", "sludgebomb"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	necrozma: {
		randomBattleMoves: ["calmmind", "heatwave", "moonlight", "photongeyser", "stealthrock"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["calmmind", "earthpower", "heatwave", "moonlight", "photongeyser", "protect"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	necrozmaduskmane: {
		randomBattleMoves: ["dragondance", "earthquake", "morningsun", "photongeyser", "sunsteelstrike"],
		randomBattleLevel: 68,
		randomDoubleBattleMoves: ["dragondance", "photongeyser", "protect", "sunsteelstrike"],
		randomDoubleBattleLevel: 72,
		tier: "Uber",
	},
	necrozmadawnwings: {
		randomBattleMoves: ["calmmind", "heatwave", "moongeistbeam", "photongeyser", "stealthrock"],
		randomBattleLevel: 76,
		randomDoubleBattleMoves: ["heatwave", "moongeistbeam", "photongeyser", "protect", "thunderwave"],
		randomDoubleBattleLevel: 72,
		tier: "Uber",
	},
	necrozmaultra: {
		//isNonstandard: "Past",
		tier: "Uber",
	},
	magearna: {
		randomBattleMoves: ["agility", "calmmind", "flashcannon", "fleurcannon"],
		randomBattleLevel: 76,
		randomDoubleBattleMoves: ["agility", "aurasphere", "dazzlinggleam", "flashcannon", "fleurcannon", "protect", "trick"],
		randomDoubleBattleLevel: 72,
		tier: "Uber",
	},
	magearnaoriginal: {
		randomBattleMoves: ["agility", "calmmind", "flashcannon", "fleurcannon"],
		randomBattleLevel: 76,
		randomDoubleBattleMoves: ["agility", "aurasphere", "dazzlinggleam", "flashcannon", "fleurcannon", "protect", "trick"],
		randomDoubleBattleLevel: 72,
		tier: "Uber",
	},
	marshadow: {
		randomBattleMoves: ["bulkup", "closecombat", "icepunch", "rocktomb", "shadowsneak", "spectralthief"],
		randomBattleLevel: 70,
		randomDoubleBattleMoves: ["closecombat", "protect", "rocktomb", "shadowsneak", "spectralthief"],
		randomDoubleBattleLevel: 72,
		tier: "Uber",
	},
	poipole: {
		tier: "LC",
	},
	naganadel: {
		randomBattleMoves: ["airslash", "dracometeor", "fireblast", "nastyplot", "sludgewave"],
		randomBattleLevel: 74,
		randomDoubleBattleMoves: ["dracometeor", "flamethrower", "nastyplot", "sludgebomb", "uturn"],
		randomDoubleBattleLevel: 76,
		randomBattleNoDynamaxMoves: ["dracometeor", "fireblast", "nastyplot", "sludgewave", "uturn"],
		tier: "Uber",
	},
	stakataka: {
		randomBattleMoves: ["bodypress", "earthquake", "gyroball", "stealthrock", "stoneedge", "trickroom"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["bodypress", "gyroball", "highhorsepower", "rockslide", "trickroom"],
		randomDoubleBattleLevel: 82,
		tier: "(PU)",
	},
	blacephalon: {
		randomBattleMoves: ["calmmind", "fireblast", "psyshock", "shadowball", "trick"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["fireblast", "protect", "psyshock", "shadowball", "trick"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	zeraora: {
		randomBattleMoves: ["blazekick", "bulkup", "closecombat", "grassknot", "knockoff", "plasmafists", "playrough", "voltswitch"],
		randomBattleLevel: 76,
		randomDoubleBattleMoves: ["closecombat", "fakeout", "grassknot", "knockoff", "plasmafists", "playrough", "snarl"],
		randomDoubleBattleLevel: 78,
		tier: "(PU)",
	},
	meltan: {
		tier: "(PU)",
	},
	melmetal: {
		randomBattleMoves: ["doubleironbash", "earthquake", "superpower", "thunderpunch", "thunderwave"],
		randomBattleLevel: 74,
		randomDoubleBattleMoves: ["acidarmor", "bodypress", "doubleironbash", "protect", "thunderpunch", "thunderwave"],
		randomDoubleBattleLevel: 76,
		tier: "Uber",
	},
	melmetalgmax: {
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	grookey: {
		tier: "LC",
	},
	thwackey: {
		tier: "NFE",
	},
	rillaboom: {
		randomBattleMoves: ["grassyglide", "highhorsepower", "knockoff", "uturn", "woodhammer"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["fakeout", "grassyglide", "highhorsepower", "protect", "uturn", "woodhammer"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	rillaboomgmax: {
		randomBattleMoves: ["acrobatics", "grassyglide", "highhorsepower", "knockoff", "swordsdance"],
		randomBattleLevel: 78,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	scorbunny: {
		tier: "LC",
	},
	raboot: {
		tier: "NFE",
	},
	cinderace: {
		randomBattleMoves: ["courtchange", "gunkshot", "highjumpkick", "pyroball", "uturn", "zenheadbutt"],
		randomBattleLevel: 74,
		randomDoubleBattleMoves: ["courtchange", "gunkshot", "highjumpkick", "protect", "pyroball", "suckerpunch", "uturn"],
		randomDoubleBattleLevel: 80,
		tier: "Uber",
	},
	cinderacegmax: {
		randomBattleLevel: 74,
		randomBattleMoves: ["bulkup", "highjumpkick", "pyroball", "suckerpunch"],
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	sobble: {
		tier: "LC",
	},
	drizzile: {
		tier: "NFE",
	},
	inteleon: {
		randomBattleMoves: ["airslash", "darkpulse", "hydropump", "icebeam", "scald", "uturn"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["airslash", "hydropump", "icebeam", "muddywater", "shadowball", "uturn"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	inteleongmax: {
		randomBattleMoves: ["airslash", "focusenergy", "icebeam", "surf"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["focusenergy", "hydropump", "icebeam", "muddywater"],
		randomDoubleBattleLevel: 84,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	skwovet: {
		tier: "LC",
	},
	greedent: {
		randomBattleMoves: ["bodyslam", "earthquake", "firefang", "payback", "swordsdance"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["bodyslam", "crunch", "gyroball", "protect", "stompingtantrum", "swordsdance"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	rookidee: {
		tier: "LC",
	},
	corvisquire: {
		tier: "NFE",
	},
	corviknight: {
		randomBattleMoves: ["bodypress", "bravebird", "bulkup", "defog", "roost"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["bodypress", "bravebird", "bulkup", "ironhead", "roost", "tailwind"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	corviknightgmax: {
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	blipbug: {
		tier: "LC",
	},
	dottler: {
		tier: "NFE",
	},
	orbeetle: {
		randomBattleMoves: ["bodypress", "bugbuzz", "calmmind", "psychic", "recover", "stickyweb", "uturn"],
		randomBattleLevel: 86,
		tier: "(PU)",
	},
	orbeetlegmax: {
		randomDoubleBattleMoves: ["helpinghand", "hypnosis", "lightscreen", "psychic", "reflect", "stickyweb", "strugglebug"],
		randomDoubleBattleLevel: 88,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	nickit: {
		tier: "LC",
	},
	thievul: {
		randomBattleMoves: ["darkpulse", "foulplay", "grassknot", "nastyplot", "partingshot", "psychic"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["faketears", "foulplay", "partingshot", "snarl", "taunt"],
		randomDoubleBattleLevel: 89,
		tier: "(PU)",
	},
	gossifleur: {
		tier: "LC",
	},
	eldegoss: {
		randomBattleMoves: ["energyball", "leechseed", "pollenpuff", "rapidspin", "sleeppowder"],
		randomBattleLevel: 90,
		randomDoubleBattleMoves: ["charm", "energyball", "helpinghand", "pollenpuff", "protect", "sleeppowder"],
		randomDoubleBattleLevel: 90,
		tier: "(PU)",
	},
	wooloo: {
		tier: "LC",
	},
	dubwool: {
		randomBattleMoves: ["bodypress", "cottonguard", "rest", "sleeptalk"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["doubleedge", "protect", "swordsdance", "thunderwave", "wildcharge", "zenheadbutt"],
		randomDoubleBattleLevel: 90,
		tier: "(PU)",
	},
	chewtle: {
		tier: "LC",
	},
	drednaw: {
		randomBattleMoves: ["liquidation", "stealthrock", "stoneedge", "superpower", "swordsdance"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["highhorsepower", "liquidation", "protect", "rockslide", "superpower", "swordsdance"],
		randomDoubleBattleLevel: 84,
		randomBattleNoDynamaxMoves: ["liquidation", "raindance", "stealthrock", "stoneedge", "superpower"],
		tier: "(PU)",
	},
	drednawgmax: {
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	yamper: {
		tier: "LC",
	},
	boltund: {
		randomBattleMoves: ["bulkup", "crunch", "firefang", "playrough", "psychicfangs", "thunderfang", "voltswitch"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["crunch", "firefang", "nuzzle", "playrough", "protect", "psychicfangs", "snarl", "thunderfang"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	rolycoly: {
		tier: "LC",
	},
	carkol: {
		tier: "NFE",
	},
	coalossal: {
		tier: "(PU)",
	},
	coalossalgmax: {
		randomBattleMoves: ["overheat", "rapidspin", "spikes", "stealthrock", "stoneedge", "willowisp"],
		randomBattleLevel: 87,
		randomDoubleBattleMoves: ["fireblast", "incinerate", "protect", "stealthrock", "stoneedge", "willowisp"],
		randomDoubleBattleLevel: 85,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	applin: {
		tier: "LC",
	},
	flapple: {
		randomBattleMoves: ["dragondance", "gravapple", "outrage", "suckerpunch", "uturn"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["acrobatics", "dragondance", "dragonrush", "gravapple", "protect"],
		randomDoubleBattleLevel: 89,
		tier: "(PU)",
	},
	flapplegmax: {
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	appletun: {
		randomBattleMoves: ["appleacid", "dragonpulse", "leechseed", "recover"],
		randomBattleLevel: 90,
		randomDoubleBattleMoves: ["appleacid", "dragonpulse", "leechseed", "protect", "recover"],
		randomDoubleBattleLevel: 90,
		tier: "(PU)",
	},
	appletungmax: {
		randomBattleMoves: ["appleacid", "dracometeor", "leechseed", "recover"],
		randomBattleLevel: 90,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	silicobra: {
		tier: "LC",
	},
	sandaconda: {
		randomBattleMoves: ["coil", "earthquake", "glare", "rest", "stealthrock", "stoneedge"],
		randomBattleLevel: 84,
		tier: "(PU)",
	},
	sandacondagmax: {
		randomDoubleBattleMoves: ["coil", "glare", "highhorsepower", "protect", "stoneedge"],
		randomDoubleBattleLevel: 86,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	cramorant: {
		randomBattleMoves: ["bravebird", "defog", "roost", "superpower", "surf"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["hurricane", "icebeam", "protect", "roost", "surf", "tailwind"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	arrokuda: {
		tier: "LC",
	},
	barraskewda: {
		randomBattleMoves: ["closecombat", "crunch", "liquidation", "poisonjab", "psychicfangs"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["closecombat", "crunch", "drillrun", "flipturn", "liquidation", "poisonjab"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	toxel: {
		tier: "LC",
	},
	toxtricity: {
		randomBattleMoves: ["boomburst", "overdrive", "shiftgear", "sludgewave", "voltswitch"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	toxtricitylowkey: {
		randomBattleMoves: ["boomburst", "overdrive", "sludgewave", "voltswitch"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	toxtricitygmax: {
		randomDoubleBattleMoves: ["boomburst", "overdrive", "shiftgear", "sludgebomb", "snarl", "voltswitch"],
		randomDoubleBattleLevel: 84,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	toxtricitylowkeygmax: {
		randomDoubleBattleMoves: ["boomburst", "overdrive", "sludgebomb", "snarl", "voltswitch"],
		randomDoubleBattleLevel: 84,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	sizzlipede: {
		tier: "LC",
	},
	centiskorch: {
		randomBattleMoves: ["coil", "firelash", "knockoff", "leechlife", "powerwhip"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["coil", "firelash", "knockoff", "leechlife", "powerwhip", "protect"],
		randomDoubleBattleLevel: 89,
		tier: "(PU)",
	},
	centiskorchgmax: {
		randomDoubleBattleMoves: ["coil", "firelash", "knockoff", "leechlife", "powerwhip", "protect"],
		randomDoubleBattleLevel: 89,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	clobbopus: {
		tier: "LC",
	},
	grapploct: {
		randomBattleMoves: ["brutalswing", "bulkup", "drainpunch", "icepunch", "suckerpunch"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["closecombat", "coaching", "drainpunch", "icepunch", "octolock", "payback", "protect"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	sinistea: {
		tier: "LC",
	},
	polteageist: {
		randomBattleMoves: ["gigadrain", "shadowball", "shellsmash", "storedpower", "strengthsap"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["gigadrain", "protect", "shadowball", "shellsmash", "storedpower"],
		randomDoubleBattleLevel: 84,
		tier: "(PU)",
	},
	hatenna: {
		tier: "LC",
	},
	hattrem: {
		tier: "NFE",
	},
	hatterene: {
		tier: "(PU)",
	},
	hatterenegmax: {
		randomBattleMoves: ["calmmind", "dazzlinggleam", "mysticalfire", "psychic", "psyshock", "trickroom"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["dazzlinggleam", "mysticalfire", "protect", "psychic", "trickroom"],
		randomDoubleBattleLevel: 80,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	impidimp: {
		tier: "LC",
	},
	morgrem: {
		tier: "NFE",
	},
	grimmsnarl: {
		randomBattleMoves: ["lightscreen", "reflect", "spiritbreak", "taunt", "thunderwave"],
		randomBattleLevel: 82,
		tier: "(PU)",
	},
	grimmsnarlgmax: {
		randomBattleMoves: ["bulkup", "darkestlariat", "playrough", "rest", "suckerpunch", "trick"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["darkestlariat", "fakeout", "lightscreen", "reflect", "spiritbreak", "taunt", "thunderwave"],
		randomDoubleBattleLevel: 84,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	milcery: {
		tier: "LC",
	},
	alcremie: {
		tier: "(PU)",
	},
	alcremiegmax: {
		randomBattleMoves: ["calmmind", "dazzlinggleam", "mysticalfire", "psychic", "recover"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["dazzlinggleam", "decorate", "mysticalfire", "protect", "recover"],
		randomDoubleBattleLevel: 85,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	falinks: {
		randomBattleMoves: ["closecombat", "noretreat", "poisonjab", "rockslide", "throatchop"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["closecombat", "noretreat", "poisonjab", "rockslide", "throatchop"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	pincurchin: {
		randomBattleMoves: ["risingvoltage", "scald", "spikes", "suckerpunch", "toxicspikes"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["acupressure", "protect", "risingvoltage", "scald", "suckerpunch"],
		randomDoubleBattleLevel: 90,
		tier: "(PU)",
	},
	snom: {
		tier: "LC",
	},
	frosmoth: {
		randomBattleMoves: ["bugbuzz", "gigadrain", "hurricane", "icebeam", "quiverdance"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["bugbuzz", "gigadrain", "hurricane", "icebeam", "protect", "quiverdance", "wideguard"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	stonjourner: {
		randomBattleMoves: ["earthquake", "heatcrash", "rockpolish", "stealthrock", "stoneedge"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["bodypress", "heatcrash", "heavyslam", "protect", "rockpolish", "stoneedge", "wideguard"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	eiscue: {
		randomBattleMoves: ["bellydrum", "iciclecrash", "liquidation", "substitute", "zenheadbutt"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["bellydrum", "iciclecrash", "liquidation", "protect", "zenheadbutt"],
		randomDoubleBattleLevel: 86,
		tier: "(PU)",
	},
	indeedee: {
		randomBattleMoves: ["calmmind", "expandingforce", "hypervoice", "mysticalfire", "trick"],
		randomBattleLevel: 83,
		randomDoubleBattleMoves: ["encore", "expandingforce", "hypervoice", "mysticalfire", "protect", "trick"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	indeedeef: {
		randomBattleMoves: ["calmmind", "expandingforce", "healingwish", "hypervoice", "mysticalfire"],
		randomBattleLevel: 85,
		randomDoubleBattleMoves: ["expandingforce", "followme", "healpulse", "helpinghand", "protect"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	morpeko: {
		randomBattleMoves: ["aurawheel", "foulplay", "partingshot", "protect", "psychicfangs", "rapidspin"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["aurawheel", "fakeout", "partingshot", "protect", "rapidspin", "superfang"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	cufant: {
		tier: "LC",
	},
	copperajah: {
		randomBattleMoves: ["earthquake", "ironhead", "playrough", "rockslide", "stealthrock"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["heatcrash", "highhorsepower", "ironhead", "playrough", "powerwhip", "protect", "stoneedge"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	copperajahgmax: {
		randomBattleMoves: ["earthquake", "heatcrash", "heavyslam", "powerwhip", "stoneedge"],
		randomBattleLevel: 84,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	dracozolt: {
		randomBattleMoves: ["aerialace", "boltbeak", "earthquake", "lowkick", "outrage"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["aerialace", "boltbeak", "dragonclaw", "highhorsepower", "rockslide"],
		randomDoubleBattleLevel: 82,
		randomBattleNoDynamaxMoves: ["boltbeak", "dragonclaw", "earthquake", "outrage"],
		tier: "(PU)",
	},
	arctozolt: {
		randomBattleMoves: ["boltbeak", "freezedry", "iciclecrash", "stompingtantrum", "thunderwave"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["blizzard", "boltbeak", "iciclecrash", "lowkick", "protect"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	dracovish: {
		randomBattleMoves: ["crunch", "fishiousrend", "icefang", "lowkick", "psychicfangs"],
		randomBattleLevel: 80,
		randomDoubleBattleMoves: ["crunch", "dragonrush", "fishiousrend", "icefang", "psychicfangs"],
		randomDoubleBattleLevel: 78,
		tier: "Uber",
	},
	arctovish: {
		randomBattleMoves: ["bodyslam", "fishiousrend", "freezedry", "iciclecrash", "psychicfangs"],
		randomBattleLevel: 86,
		randomDoubleBattleMoves: ["blizzard", "fishiousrend", "iciclecrash", "protect", "superfang"],
		randomDoubleBattleLevel: 88,
		tier: "(PU)",
	},
	duraludon: {
		randomBattleMoves: ["bodypress", "dracometeor", "flashcannon", "stealthrock", "thunderbolt"],
		randomBattleLevel: 84,
		randomDoubleBattleMoves: ["bodypress", "dracometeor", "dragonpulse", "flashcannon", "protect", "snarl", "thunderbolt"],
		randomDoubleBattleLevel: 87,
		tier: "(PU)",
	},
	duraludongmax: {
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	dreepy: {
		tier: "LC",
	},
	drakloak: {
		tier: "NFE",
	},
	dragapult: {
		randomBattleMoves: ["dracometeor", "fireblast", "shadowball", "thunderbolt", "uturn"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["dragondarts", "fireblast", "protect", "shadowball", "thunderbolt", "willowisp"],
		randomDoubleBattleLevel: 80,
		tier: "Uber",
	},
	zacian: {
		randomBattleMoves: ["closecombat", "crunch", "playrough", "psychicfangs", "swordsdance"],
		randomBattleLevel: 68,
		randomDoubleBattleMoves: ["closecombat", "crunch", "playrough", "protect", "psychicfangs", "swordsdance"],
		randomDoubleBattleLevel: 72,
		tier: "AG",
	},
	zaciancrowned: {
		randomBattleMoves: ["behemothblade", "closecombat", "crunch", "playrough", "psychicfangs", "swordsdance"],
		randomBattleLevel: 62,
		randomDoubleBattleMoves: ["behemothblade", "closecombat", "playrough", "protect", "psychicfangs", "swordsdance"],
		randomDoubleBattleLevel: 65,
		tier: "AG",
	},
	zamazenta: {
		randomBattleMoves: ["closecombat", "crunch", "psychicfangs", "wildcharge"],
		randomBattleLevel: 73,
		randomDoubleBattleMoves: ["closecombat", "crunch", "playrough", "protect", "psychicfangs"],
		randomDoubleBattleLevel: 74,
		tier: "Uber",
	},
	zamazentacrowned: {
		randomBattleMoves: ["behemothbash", "closecombat", "crunch", "howl", "psychicfangs"],
		randomBattleLevel: 71,
		randomDoubleBattleMoves: ["behemothbash", "closecombat", "crunch", "howl", "protect", "psychicfangs"],
		randomDoubleBattleLevel: 72,
		tier: "Uber",
	},
	eternatus: {
		randomBattleMoves: ["dynamaxcannon", "flamethrower", "recover", "sludgewave", "toxic"],
		randomBattleLevel: 69,
		randomDoubleBattleMoves: ["cosmicpower", "dynamaxcannon", "flamethrower", "recover"],
		randomDoubleBattleLevel: 72,
		tier: "Uber",
	},
	eternatuseternamax: {
		isNonstandard: "Unobtainable",
		tier: "Illegal",
	},
	ufi: {
		tier: "Uber",
	},
	kubfu: {
		tier: "LC",
	},
	urshifu: {
		randomBattleMoves: ["closecombat", "ironhead", "suckerpunch", "uturn", "wickedblow"],
		randomBattleLevel: 76,
		randomDoubleBattleMoves: ["closecombat", "ironhead", "protect", "suckerpunch", "wickedblow"],
		randomDoubleBattleLevel: 76,
		tier: "Uber",
	},
	urshifurapidstrike: {
		randomBattleMoves: ["bulkup", "drainpunch", "substitute", "surgingstrikes"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["aquajet", "closecombat", "poisonjab", "protect", "surgingstrikes", "uturn"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	urshifugmax: {
		randomBattleMoves: ["bulkup", "drainpunch", "substitute", "wickedblow"],
		randomBattleLevel: 76,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	urshifurapidstrikegmax: {
		randomBattleMoves: ["bulkup", "closecombat", "icepunch", "surgingstrikes", "uturn"],
		randomBattleLevel: 78,
		isNonstandard: "Gigantamax",
		tier: "AG",
	},
	zarude: {
		randomBattleMoves: ["bulkup", "closecombat", "darkestlariat", "junglehealing", "powerwhip", "uturn"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["closecombat", "darkestlariat", "junglehealing", "powerwhip", "protect", "rockslide"],
		randomDoubleBattleLevel: 80,
		tier: "(PU)",
	},
	zarudedada: {
		randomBattleMoves: ["bulkup", "closecombat", "darkestlariat", "junglehealing", "powerwhip", "uturn"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["closecombat", "darkestlariat", "junglehealing", "powerwhip", "protect", "rockslide"],
		randomDoubleBattleLevel: 80,
	},
	regieleki: {
		randomBattleMoves: ["explosion", "substitute", "thunderbolt", "voltswitch"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["electroweb", "extremespeed", "protect", "thundercage", "voltswitch"],
		randomDoubleBattleLevel: 82,
		randomBattleNoDynamaxMoves: ["explosion", "rapidspin", "thunderbolt", "voltswitch"],
		tier: "(PU)",
	},
	regidrago: {
		randomBattleMoves: ["dracometeor", "dragondance", "firefang", "hammerarm", "outrage"],
		randomBattleLevel: 78,
		randomDoubleBattleMoves: ["crunch", "dragonclaw", "dragonenergy", "firefang"],
		randomDoubleBattleLevel: 78,
		tier: "(PU)",
	},
	glastrier: {
		randomBattleMoves: ["closecombat", "highhorsepower", "iciclecrash", "swordsdance"],
		randomBattleLevel: 82,
		randomDoubleBattleMoves: ["closecombat", "highhorsepower", "iciclecrash", "protect"],
		randomDoubleBattleLevel: 82,
		tier: "(PU)",
	},
	spectrier: {
		randomBattleMoves: ["darkpulse", "nastyplot", "shadowball", "substitute"],
		randomBattleLevel: 74,
		randomDoubleBattleMoves: ["darkpulse", "nastyplot", "protect", "shadowball"],
		randomDoubleBattleLevel: 78,
		tier: "Uber",
	},
	calyrex: {
		randomBattleMoves: ["calmmind", "gigadrain", "leechseed", "psyshock", "substitute"],
		randomBattleLevel: 88,
		randomDoubleBattleMoves: ["helpinghand", "leafstorm", "pollenpuff", "protect"],
		randomDoubleBattleLevel: 94,
		tier: "(PU)",
	},
	calyrexice: {
		randomBattleMoves: ["agility", "closecombat", "glaciallance", "highhorsepower", "trickroom"],
		randomBattleLevel: 72,
		randomDoubleBattleMoves: ["closecombat", "glaciallance", "highhorsepower", "swordsdance", "trickroom"],
		randomDoubleBattleLevel: 72,
		tier: "Uber",
	},
	calyrexshadow: {
		randomBattleMoves: ["astralbarrage", "nastyplot", "pollenpuff", "psyshock", "substitute", "trick"],
		randomBattleLevel: 65,
		randomDoubleBattleMoves: ["astralbarrage", "nastyplot", "pollenpuff", "protect", "psyshock"],
		randomDoubleBattleLevel: 68,
		tier: "Uber",
	},
	wyrdeer: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	kleavor: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	ursaluna: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	basculegion: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	basculegionf: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	sneasler: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	overqwil: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	enamorus: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	enamorustherian: {
		//isNonstandard: "Future",
		tier: "(PU)",
	},
	missingno: {
		tier: "AG",
	},
	syclar: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	syclant: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	revenankh: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	embirch: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	flarelm: {
		isNonstandard: "CAP",
		tier: "CAP NFE",
	},
	pyroak: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	breezi: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	fidgit: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	rebble: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	tactite: {
		isNonstandard: "CAP",
		tier: "CAP NFE",
	},
	stratagem: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	privatyke: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	arghonaut: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	nohface: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	kitsunoh: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	monohm: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	duohm: {
		isNonstandard: "CAP",
		tier: "CAP NFE",
	},
	cyclohm: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	dorsoil: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	colossoil: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	protowatt: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	krilowatt: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	voodoll: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	voodoom: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	scratchet: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	tomohawk: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	necturine: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	necturna: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	mollux: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	cupra: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	argalis: {
		isNonstandard: "CAP",
		tier: "CAP NFE",
	},
	aurumoth: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	brattler: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	malaconda: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	cawdet: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	cawmodore: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	volkritter: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	volkraken: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	snugglow: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	plasmanta: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	floatoy: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	caimanoe: {
		isNonstandard: "CAP",
		tier: "CAP NFE",
	},
	naviathan: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	crucibelle: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	crucibellemega: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	pluffle: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	kerfluffle: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	pajantom: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	mumbao: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	jumbao: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	fawnifer: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	electrelk: {
		isNonstandard: "CAP",
		tier: "CAP NFE",
	},
	caribolt: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	smogecko: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	smoguana: {
		isNonstandard: "CAP",
		tier: "CAP NFE",
	},
	smokomodo: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	swirlpool: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	coribalis: {
		isNonstandard: "CAP",
		tier: "CAP NFE",
	},
	snaelstrom: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	justyke: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	equilibra: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	solotl: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	astrolotl: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	miasmite: {
		isNonstandard: "CAP",
		tier: "CAP LC",
	},
	miasmaw: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	chromera: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	venomicon: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	venomiconepilogue: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	saharaja: {
		isNonstandard: "CAP",
		tier: "CAP",
	},
	pokestarsmeargle: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestarufo: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestarufo2: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestarbrycenman: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestarmt: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestarmt2: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestartransport: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestargiant: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestargiant2: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestarhumanoid: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestarmonster: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestarf00: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestarf002: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestarspirit: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestarblackdoor: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestarwhitedoor: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestarblackbelt: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestargiantpropo2: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
	pokestarufopropu2: {
		isNonstandard: "Custom",
		tier: "Illegal",
	},
};
