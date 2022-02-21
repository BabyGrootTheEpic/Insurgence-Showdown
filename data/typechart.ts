export const TypeChart: {[k: string]: TypeData} = {
	"?": {
		damageTaken: {
			"?": 1,
			Bug: 0,
			Crystal: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 0,
			Fairy: 0,
			Fighting: 0,
			Fire: 0,
			Flying: 0,
			Ghost: 0,
			Grass: 0,
			Ground: 0,
			Ice: 0,
			Normal: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 0,
			Shadow: 1,
			Steel: 0,
			Water: 0,
		},
	},
	bug: {
		damageTaken: {
			"?": 0,
			Bug: 0,
			Crystal: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 0,
			Fairy: 0,
			Fighting: 2,
			Fire: 1,
			Flying: 1,
			Ghost: 0,
			Grass: 2,
			Ground: 2,
			Ice: 0,
			Normal: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 1,
			Shadow: 1,
			Steel: 0,
			Water: 0,
		},
		HPivs: {atk: 30, def: 30, spd: 30},
		HPdvs: {atk: 13, def: 13},
	},
	crystal: {
		damageTaken: {
			"?": 0,
			Bug: 0,
			Crystal: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 0,
			Fairy: 0,
			Fighting: 0,
			Fire: 0,
			Flying: 0,
			Ghost: 0,
			Grass: 0,
			Ground: 0,
			Ice: 0,
			Normal: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 0,
			Shadow: 1,
			Steel: 0,
			Water: 0,
		},
	},
	dark: {
		damageTaken: {
			prankster: 3,
			"?": 0,
			Bug: 1,
			Crystal: 0,
			Dark: 2,
			Dragon: 0,
			Electric: 0,
			Fairy: 1,
			Fighting: 1,
			Fire: 0,
			Flying: 0,
			Ghost: 2,
			Grass: 0,
			Ground: 0,
			Ice: 0,
			Normal: 0,
			Poison: 0,
			Psychic: 3,
			Rock: 0,
			Shadow: 1,
			Steel: 0,
			Water: 0,
		},
		HPivs: {},
	},
	dragon: {
		damageTaken: {
			"?": 0,
			Bug: 0,
			Crystal: 0,
			Dark: 0,
			Dragon: 1,
			Electric: 2,
			Fairy: 1,
			Fighting: 0,
			Fire: 2,
			Flying: 0,
			Ghost: 0,
			Grass: 2,
			Ground: 0,
			Ice: 1,
			Normal: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 0,
			Shadow: 1,
			Steel: 0,
			Water: 2,
		},
		HPivs: {atk: 30},
		HPdvs: {def: 14},
	},
	electric: {
		damageTaken: {
			par: 3,
			"?": 0,
			Bug: 0,
			Crystal: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 2,
			Fairy: 0,
			Fighting: 0,
			Fire: 0,
			Flying: 2,
			Ghost: 0,
			Grass: 0,
			Ground: 1,
			Ice: 0,
			Normal: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 0,
			Shadow: 1,
			Steel: 2,
			Water: 0,
		},
		HPivs: {spa: 30},
		HPdvs: {atk: 14},
	},
	fairy: {
		damageTaken: {
			"?": 0,
			Bug: 2,
			Crystal: 0,
			Dark: 2,
			Dragon: 3,
			Electric: 0,
			Fairy: 0,
			Fighting: 2,
			Fire: 0,
			Flying: 0,
			Ghost: 0,
			Grass: 0,
			Ground: 0,
			Ice: 0,
			Normal: 0,
			Poison: 1,
			Psychic: 0,
			Rock: 0,
			Shadow: 1,
			Steel: 1,
			Water: 0,
		},
	},
	fighting: {
		damageTaken: {
			"?": 0,
			Bug: 2,
			Crystal: 0,
			Dark: 2,
			Dragon: 0,
			Electric: 0,
			Fairy: 1,
			Fighting: 0,
			Fire: 0,
			Flying: 1,
			Ghost: 0,
			Grass: 0,
			Ground: 0,
			Ice: 0,
			Normal: 0,
			Poison: 0,
			Psychic: 1,
			Rock: 2,
			Shadow: 1,
			Steel: 0,
			Water: 0,
		},
		HPivs: {def: 30, spa: 30, spd: 30, spe: 30},
		HPdvs: {atk: 12, def: 12},
	},
	fire: {
		damageTaken: {
			brn: 3,
			"?": 0,
			Bug: 2,
			Crystal: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 0,
			Fairy: 2,
			Fighting: 0,
			Fire: 2,
			Flying: 0,
			Ghost: 0,
			Grass: 2,
			Ground: 1,
			Ice: 2,
			Normal: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 1,
			Shadow: 1,
			Steel: 2,
			Water: 1,
		},
		HPivs: {atk: 30, spa: 30, spe: 30},
		HPdvs: {atk: 14, def: 12},
	},
	flying: {
		damageTaken: {
			"?": 0,
			Bug: 2,
			Crystal: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 1,
			Fairy: 0,
			Fighting: 2,
			Fire: 0,
			Flying: 0,
			Ghost: 0,
			Grass: 2,
			Ground: 3,
			Ice: 1,
			Normal: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 1,
			Shadow: 1,
			Steel: 0,
			Water: 0,
		},
		HPivs: {hp: 30, atk: 30, def: 30, spa: 30, spd: 30},
		HPdvs: {atk: 12, def: 13},
	},
	ghost: {
		damageTaken: {
			trapped: 3,
			"?": 0,
			Bug: 2,
			Crystal: 0,
			Dark: 1,
			Dragon: 0,
			Electric: 0,
			Fairy: 0,
			Fighting: 3,
			Fire: 0,
			Flying: 0,
			Ghost: 1,
			Grass: 0,
			Ground: 0,
			Ice: 0,
			Normal: 3,
			Poison: 2,
			Psychic: 0,
			Rock: 0,
			Shadow: 1,
			Steel: 0,
			Water: 0,
		},
		HPivs: {def: 30, spd: 30},
		HPdvs: {atk: 13, def: 14},
	},
	grass: {
		damageTaken: {
			powder: 3,
			"?": 0,
			Bug: 1,
			Crystal: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 2,
			Fairy: 0,
			Fighting: 0,
			Fire: 1,
			Flying: 1,
			Ghost: 0,
			Grass: 2,
			Ground: 2,
			Ice: 1,
			Normal: 0,
			Poison: 1,
			Psychic: 0,
			Rock: 0,
			Shadow: 1,
			Steel: 0,
			Water: 2,
		},
		HPivs: {atk: 30, spa: 30},
		HPdvs: {atk: 14, def: 14},
	},
	ground: {
		damageTaken: {
			sandstorm: 3,
			"?": 0,
			Bug: 0,
			Crystal: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 3,
			Fairy: 0,
			Fighting: 0,
			Fire: 0,
			Flying: 0,
			Ghost: 0,
			Grass: 1,
			Ground: 0,
			Ice: 1,
			Normal: 0,
			Poison: 2,
			Psychic: 0,
			Rock: 2,
			Shadow: 1,
			Steel: 0,
			Water: 1,
		},
		HPivs: {spa: 30, spd: 30},
		HPdvs: {atk: 12},
	},
	ice: {
		damageTaken: {
			hail: 3,
			frz: 3,
			"?": 0,
			Bug: 0,
			Crystal: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 0,
			Fairy: 0,
			Fighting: 1,
			Fire: 1,
			Flying: 0,
			Ghost: 0,
			Grass: 0,
			Ground: 0,
			Ice: 2,
			Normal: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 1,
			Shadow: 1,
			Steel: 1,
			Water: 0,
		},
		HPivs: {atk: 30, def: 30},
		HPdvs: {def: 13},
	},
	normal: {
		damageTaken: {
			"?": 0,
			Bug: 0,
			Crystal: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 0,
			Fairy: 0,
			Fighting: 1,
			Fire: 0,
			Flying: 0,
			Ghost: 3,
			Grass: 0,
			Ground: 0,
			Ice: 0,
			Normal: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 0,
			Shadow: 1,
			Steel: 0,
			Water: 0,
		},
	},
	poison: {
		damageTaken: {
			psn: 3,
			tox: 3,
			"?": 0,
			Bug: 2,
			Crystal: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 0,
			Fairy: 2,
			Fighting: 2,
			Fire: 0,
			Flying: 0,
			Ghost: 0,
			Grass: 2,
			Ground: 1,
			Ice: 0,
			Normal: 0,
			Poison: 2,
			Psychic: 1,
			Rock: 0,
			Shadow: 1,
			Steel: 0,
			Water: 0,
		},
		HPivs: {def: 30, spa: 30, spd: 30},
		HPdvs: {atk: 12, def: 14},
	},
	psychic: {
		damageTaken: {
			"?": 0,
			Bug: 1,
			Crystal: 0,
			Dark: 1,
			Dragon: 0,
			Electric: 0,
			Fairy: 0,
			Fighting: 2,
			Fire: 0,
			Flying: 0,
			Ghost: 1,
			Grass: 0,
			Ground: 0,
			Ice: 0,
			Normal: 0,
			Poison: 0,
			Psychic: 2,
			Rock: 0,
			Shadow: 1,
			Steel: 0,
			Water: 0,
		},
		HPivs: {atk: 30, spe: 30},
		HPdvs: {def: 12},
	},
	rock: {
		damageTaken: {
			sandstorm: 3,
			"?": 0,
			Bug: 0,
			Crystal: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 0,
			Fairy: 0,
			Fighting: 1,
			Fire: 2,
			Flying: 2,
			Ghost: 0,
			Grass: 1,
			Ground: 1,
			Ice: 0,
			Normal: 2,
			Poison: 2,
			Psychic: 0,
			Rock: 0,
			Shadow: 1,
			Steel: 1,
			Water: 1,
		},
		HPivs: {def: 30, spd: 30, spe: 30},
		HPdvs: {atk: 13, def: 12},
	},
	shadow: {
		damageTaken: {
			"?": 2,
			Bug: 2,
			Crystal: 2,
			Dark: 2,
			Dragon: 2,
			Electric: 2,
			Fairy: 2,
			Fighting: 2,
			Fire: 2,
			Flying: 2,
			Ghost: 2,
			Grass: 2,
			Ground: 2,
			Ice: 2,
			Normal: 2,
			Poison: 2,
			Psychic: 2,
			Rock: 2,
			Shadow: 2,
			Steel: 2,
			Water: 2,
		},
	},
	steel: {
		damageTaken: {
			psn: 3,
			tox: 3,
			sandstorm: 3,
			"?": 0,
			Bug: 2,
			Crystal: 0,
			Dark: 0,
			Dragon: 2,
			Electric: 0,
			Fairy: 2,
			Fighting: 1,
			Fire: 1,
			Flying: 2,
			Ghost: 0,
			Grass: 2,
			Ground: 1,
			Ice: 2,
			Normal: 2,
			Poison: 3,
			Psychic: 2,
			Rock: 2,
			Shadow: 1,
			Steel: 2,
			Water: 0,
		},
		HPivs: {spd: 30},
		HPdvs: {atk: 13},
	},
	water: {
		damageTaken: {
			"?": 0,
			Bug: 0,
			Crystal: 0,
			Dark: 0,
			Dragon: 0,
			Electric: 1,
			Fairy: 0,
			Fighting: 0,
			Fire: 2,
			Flying: 0,
			Ghost: 0,
			Grass: 1,
			Ground: 0,
			Ice: 2,
			Normal: 0,
			Poison: 0,
			Psychic: 0,
			Rock: 0,
			Shadow: 1,
			Steel: 2,
			Water: 2,
		},
		HPivs: {atk: 30, def: 30, spa: 30},
		HPdvs: {atk: 14, def: 13},
	},
};
