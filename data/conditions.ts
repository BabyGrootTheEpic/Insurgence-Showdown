export const Conditions: {[k: string]: ConditionData} = {
	brn: {
		name: 'brn',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.id === 'flameorb') {
				this.add('-status', target, 'brn', '[from] item: Flame Orb');
			} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'brn', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'brn');
			}
		},
		// Damage reduction is handled directly in the sim/battle.js damage function
		onResidualOrder: 10,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 16);
		},
	},
	par: {
		name: 'par',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'par', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'par');
			}
		},
		onModifySpe(spe, pokemon) {
			// Paralysis occurs after all other Speed modifiers, so evaluate all modifiers up to this point first
			spe = this.finalModify(spe);
			if (!pokemon.hasAbility('quickfeet')) {
				spe = Math.floor(spe * 50 / 100);
			}
			return spe;
		},
		onBeforeMovePriority: 1,
		onBeforeMove(pokemon) {
			if (this.randomChance(1, 4)) {
				this.add('cant', pokemon, 'par');
				return false;
			}
		},
	},
	slp: {
		name: 'slp',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'slp', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else if (sourceEffect && sourceEffect.effectType === 'Move') {
				this.add('-status', target, 'slp', '[from] move: ' + sourceEffect.name);
			} else {
				this.add('-status', target, 'slp');
			}
			// 1-3 turns
			this.effectState.startTime = this.random(2, 5);
			this.effectState.time = this.effectState.startTime;

			if (target.removeVolatile('nightmare')) {
				this.add('-end', target, 'Nightmare', '[silent]');
			}
		},
		onBeforeMovePriority: 10,
		onBeforeMove(pokemon, target, move) {
			if (pokemon.hasAbility('earlybird')) {
				pokemon.statusState.time--;
			}
			pokemon.statusState.time--;
			if (pokemon.statusState.time <= 0) {
				pokemon.cureStatus();
				return;
			}
			this.add('cant', pokemon, 'slp');
			if (move.sleepUsable) {
				return;
			}
			return false;
		},
	},
	fsb: {
		name: 'fsb',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'fsb', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'fsb');
			}
			if (target.species.name === 'Shaymin-Sky' && target.baseSpecies.baseSpecies === 'Shaymin') {
				target.formeChange('Shaymin', this.effect, true);
			}
		},
		// Damage reduction is handled directly in the sim/battle.js damage function
		onResidualOrder: 10,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 16);
		},
		onModifyMove(move, pokemon) {
			if (move.flags['defrost']) {
				this.add('-curestatus', pokemon, 'fsb', '[from] move: ' + move);
				pokemon.setStatus('');
			}
		},
		onAfterMoveSecondary(target, source, move) {
			if (move.flags['defrost']) {
				target.cureStatus();
			}
		},
	},
	frz: {
		name: 'frz',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'frz', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'frz');
			}
			if (target.species.name === 'Shaymin-Sky' && target.baseSpecies.baseSpecies === 'Shaymin') {
				target.formeChange('Shaymin', this.effect, true);
			}
		},
		onBeforeMovePriority: 10,
		onBeforeMove(pokemon, target, move) {
			if (move.flags['defrost']) return;
			if (this.randomChance(1, 5)) {
				pokemon.cureStatus();
				return;
			}
			this.add('cant', pokemon, 'frz');
			return false;
		},
		onModifyMove(move, pokemon) {
			if (move.flags['defrost']) {
				this.add('-curestatus', pokemon, 'frz', '[from] move: ' + move);
				pokemon.clearStatus();
			}
		},
		onAfterMoveSecondary(target, source, move) {
			if (move.thawsTarget) {
				target.cureStatus();
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Fire' && move.category !== 'Status') {
				target.cureStatus();
			}
		},
	},
	psn: {
		name: 'psn',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'psn', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'psn');
			}
		},
		onResidualOrder: 9,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 8);
		},
	},
	tox: {
		name: 'tox',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			this.effectState.stage = 0;
			if (sourceEffect && sourceEffect.id === 'toxicorb') {
				this.add('-status', target, 'tox', '[from] item: Toxic Orb');
			} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'tox', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'tox');
			}
		},
		onSwitchIn() {
			this.effectState.stage = 0;
		},
		onResidualOrder: 9,
		onResidual(pokemon) {
			if (this.effectState.stage < 15) {
				this.effectState.stage++;
			}
			this.damage(this.clampIntRange(pokemon.baseMaxhp / 16, 1) * this.effectState.stage);
		},
	},
	confusion: {
		name: 'confusion',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.id === 'lockedmove') {
				this.add('-start', target, 'confusion', '[fatigue]');
			} else {
				this.add('-start', target, 'confusion');
			}
			this.effectState.time = this.random(2, 6);
		},
		onEnd(target) {
			this.add('-end', target, 'confusion');
		},
		onBeforeMovePriority: 3,
		onBeforeMove(pokemon) {
			pokemon.volatiles['confusion'].time--;
			if (!pokemon.volatiles['confusion'].time) {
				pokemon.removeVolatile('confusion');
				return;
			}
			this.add('-activate', pokemon, 'confusion');
			if (!this.randomChance(33, 100)) {
				return;
			}
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 40);
			if (typeof damage !== 'number') throw new Error("Confusion damage not dealt");
			const activeMove = {id: this.toID('confused'), effectType: 'Move', type: '???'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			return false;
		},
	},


	splinters: {
		name: 'splinters',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splinters');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splinters');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splinters');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (???) damage not dealt");
			const activeMove = {id: this.toID('splinters'), effectType: 'Move', type: '???'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splinters'].time--;
			if (!pokemon.volatiles['splinters'].time) {
				pokemon.removeVolatile('splinters');
			}
		},
	},
	splintersbug: {
		name: 'splintersbug',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splintersbug');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splintersbug');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splintersbug');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Bug) damage not dealt");
			const activeMove = {id: this.toID('splintersbug'), effectType: 'Move', type: 'Bug'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splintersbug'].time--;
			if (!pokemon.volatiles['splintersbug'].time) {
				pokemon.removeVolatile('splintersbug');
			}
		},
	},
	splintersdark: {
		name: 'splintersdark',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splintersdark');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splintersdark');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splintersdark');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (dark) damage not dealt");
			const activeMove = {id: this.toID('splintersdark'), effectType: 'Move', type: 'Dark'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splintersdark'].time--;
			if (!pokemon.volatiles['splintersdark'].time) {
				pokemon.removeVolatile('splintersdark');
			}
		},
	},
	splintersdragon: {
		name: 'splintersdragon',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splintersdragon');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splintersdragon');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splintersdragon');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Dragon) damage not dealt");
			const activeMove = {id: this.toID('splintersdragon'), effectType: 'Move', type: 'Dragon'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splintersdragon'].time--;
			if (!pokemon.volatiles['splintersdragon'].time) {
				pokemon.removeVolatile('splintersdragon');
			}
		},
	},
	splinterselectric: {
		name: 'splinterselectric',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splinterselectric');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splinterselectric');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splinterselectric');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Electric) damage not dealt");
			const activeMove = {id: this.toID('splinterselectric'), effectType: 'Move', type: 'Electric'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splinterselectric'].time--;
			if (!pokemon.volatiles['splinterselectric'].time) {
				pokemon.removeVolatile('splinterselectric');
			}
		},
	},
	splintersfairy: {
		name: 'splintersfairy',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splintersfairy');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splintersfairy');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splintersfairy');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Fairy) damage not dealt");
			const activeMove = {id: this.toID('splintersfairy'), effectType: 'Move', type: 'Fairy'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splintersfairy'].time--;
			if (!pokemon.volatiles['splintersfairy'].time) {
				pokemon.removeVolatile('splintersfairy');
			}
		},
	},
	splintersfighting: {
		name: 'splintersfighting',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splintersfighting');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splintersfighting');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splintersfighting');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Fighting) damage not dealt");
			const activeMove = {id: this.toID('splintersfighting'), effectType: 'Move', type: 'Fighting'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splintersfighting'].time--;
			if (!pokemon.volatiles['splintersfighting'].time) {
				pokemon.removeVolatile('splintersfighting');
			}
		},
	},
	splintersfire: {
		name: 'splintersfire',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splintersfire');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splintersfire');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splintersfire');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Fire) damage not dealt");
			const activeMove = {id: this.toID('splintersfire'), effectType: 'Move', type: 'Fire'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splintersfire'].time--;
			if (!pokemon.volatiles['splintersfire'].time) {
				pokemon.removeVolatile('splintersfire');
			}
		},
	},
	splintersflying: {
		name: 'splintersflying',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splintersflying');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splintersflying');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splintersflying');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Flying) damage not dealt");
			const activeMove = {id: this.toID('splintersflying'), effectType: 'Move', type: 'Flying'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splintersflying'].time--;
			if (!pokemon.volatiles['splintersflying'].time) {
				pokemon.removeVolatile('splintersflying');
			}
		},
	},
	splintersghost: {
		name: 'splintersghost',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splintersghost');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splintersghost');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splintersghost');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Ghost) damage not dealt");
			const activeMove = {id: this.toID('splintersghost'), effectType: 'Move', type: 'Ghost'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splintersghost'].time--;
			if (!pokemon.volatiles['splintersghost'].time) {
				pokemon.removeVolatile('splintersghost');
			}
		},
	},
	splintersgrass: {
		name: 'splintersgrass',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splintersgrass');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splintersgrass');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splintersgrass');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Grass) damage not dealt");
			const activeMove = {id: this.toID('splintersgrass'), effectType: 'Move', type: 'Grass'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splintersgrass'].time--;
			if (!pokemon.volatiles['splintersgrass'].time) {
				pokemon.removeVolatile('splintersgrass');
			}
		},
	},
	splintersground: {
		name: 'splintersground',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splintersground');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splintersground');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splintersground');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Ground) damage not dealt");
			const activeMove = {id: this.toID('splintersground'), effectType: 'Move', type: 'Ground'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splintersground'].time--;
			if (!pokemon.volatiles['splintersground'].time) {
				pokemon.removeVolatile('splintersground');
			}
		},
	},
	splintersice: {
		name: 'splintersice',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splintersice');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splintersice');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splintersice');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Ice) damage not dealt");
			const activeMove = {id: this.toID('splintersice'), effectType: 'Move', type: 'Ice'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splintersice'].time--;
			if (!pokemon.volatiles['splintersice'].time) {
				pokemon.removeVolatile('splintersice');
			}
		},
	},
	splintersnormal: {
		name: 'splintersnormal',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splintersnormal');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splintersnormal');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splintersnormal');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Normal) damage not dealt");
			const activeMove = {id: this.toID('splintersnormal'), effectType: 'Move', type: 'Normal'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splintersnormal'].time--;
			if (!pokemon.volatiles['splintersnormal'].time) {
				pokemon.removeVolatile('splintersnormal');
			}
		},
	},
	splinterspoison: {
		name: 'splinterspoison',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splinterspoison');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splinterspoison');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splinterspoison');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Poison) damage not dealt");
			const activeMove = {id: this.toID('splinterspoison'), effectType: 'Move', type: 'Poison'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splinterspoison'].time--;
			if (!pokemon.volatiles['splinterspoison'].time) {
				pokemon.removeVolatile('splinterspoison');
			}
		},
	},
	splinterspsychic: {
		name: 'splinterspsychic',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splinterspsychic');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splinterspsychic');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splinterspsychic');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Psychic) damage not dealt");
			const activeMove = {id: this.toID('splinterspsychic'), effectType: 'Move', type: 'Psychic'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splinterspsychic'].time--;
			if (!pokemon.volatiles['splinterspsychic'].time) {
				pokemon.removeVolatile('splinterspsychic');
			}
		},
	},
	splintersrock: {
		name: 'splintersrock',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splintersrock');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splintersrock');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splintersrock');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Rock) damage not dealt");
			const activeMove = {id: this.toID('splintersrock'), effectType: 'Move', type: 'Rock'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splintersrock'].time--;
			if (!pokemon.volatiles['splintersrock'].time) {
				pokemon.removeVolatile('splintersrock');
			}
		},
	},
	splinterssteel: {
		name: 'splinterssteel',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splinterssteel');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splinterssteel');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splinterssteel');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Steel) damage not dealt");
			const activeMove = {id: this.toID('splinterssteel'), effectType: 'Move', type: 'Steel'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splinterssteel'].time--;
			if (!pokemon.volatiles['splinterssteel'].time) {
				pokemon.removeVolatile('splinterssteel');
			}
		},
	},
	splinterswater: {
		name: 'splinterswater',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splinterswater');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splinterswater');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splinterswater');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Water) damage not dealt");
			const activeMove = {id: this.toID('splinterswater'), effectType: 'Move', type: 'Water'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splinterswater'].time--;
			if (!pokemon.volatiles['splinterswater'].time) {
				pokemon.removeVolatile('splinterswater');
			}
		},
	},
	splinterscrystal: {
		name: 'splinterscrystal',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splinterscrystal');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splinterscrystal');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splinterscrystal');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Crystal) damage not dealt");
			const activeMove = {id: this.toID('splinterscrystal'), effectType: 'Move', type: 'Crystal'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splinterscrystal'].time--;
			if (!pokemon.volatiles['splinterscrystal'].time) {
				pokemon.removeVolatile('splinterscrystal');
			}
		},
	},
	splintersshadow: {
		name: 'splintersshadow',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			this.add('-start', target, 'splintersshadow');
			this.effectState.time = 3;
		},
		onEnd(target) {
			this.add('-end', target, 'splintersshadow');
		},
		onAfterMove(pokemon) {
			//this.add('-activate', pokemon, 'splintersshadow');
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 25, true);
			if (typeof damage !== 'number') throw new Error("Splinters (Shadow) damage not dealt");
			const activeMove = {id: this.toID('splintersshadow'), effectType: 'Move', type: 'Shadow'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			pokemon.volatiles['splintersshadow'].time--;
			if (!pokemon.volatiles['splintersshadow'].time) {
				pokemon.removeVolatile('splintersshadow');
			}
		},
	},


	flinch: {
		name: 'flinch',
		duration: 1,
		onBeforeMovePriority: 8,
		onBeforeMove(pokemon) {
			this.add('cant', pokemon, 'flinch');
			this.runEvent('Flinch', pokemon);
			return false;
		},
	},
	trapped: {
		name: 'trapped',
		noCopy: true,
		onTrapPokemon(pokemon) {
			pokemon.tryTrap();
		},
		onStart(target) {
			this.add('-activate', target, 'trapped');
		},
	},
	trapper: {
		name: 'trapper',
		noCopy: true,
	},
	partiallytrapped: {
		name: 'partiallytrapped',
		duration: 5,
		durationCallback(target, source) {
			if (source?.hasItem('gripclaw')) return 8;
			return this.random(5, 7);
		},
		onStart(pokemon, source) {
			this.add('-activate', pokemon, 'move: ' + this.effectState.sourceEffect, '[of] ' + source);
			this.effectState.boundDivisor = source.hasItem('bindingband') ? 6 : 8;
		},
		onResidualOrder: 13,
		onResidual(pokemon) {
			const source = this.effectState.source;
			// G-Max Centiferno and G-Max Sandblast continue even after the user leaves the field
			const gmaxEffect = ['gmaxcentiferno', 'gmaxsandblast'].includes(this.effectState.sourceEffect.id);
			if (source && (!source.isActive || source.hp <= 0 || !source.activeTurns) && !gmaxEffect) {
				delete pokemon.volatiles['partiallytrapped'];
				this.add('-end', pokemon, this.effectState.sourceEffect, '[partiallytrapped]', '[silent]');
				return;
			}
			this.damage(pokemon.baseMaxhp / this.effectState.boundDivisor);
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, this.effectState.sourceEffect, '[partiallytrapped]');
		},
		onTrapPokemon(pokemon) {
			const gmaxEffect = ['gmaxcentiferno', 'gmaxsandblast'].includes(this.effectState.sourceEffect.id);
			if (this.effectState.source?.isActive || gmaxEffect) pokemon.tryTrap();
		},
	},
	lockedmove: {
		// Outrage, Thrash, Petal Dance...
		name: 'lockedmove',
		duration: 2,
		onResidual(target) {
			if (target.status === 'slp') {
				// don't lock, and bypass confusion for calming
				delete target.volatiles['lockedmove'];
			}
			this.effectState.trueDuration--;
		},
		onStart(target, source, effect) {
			this.effectState.trueDuration = this.random(2, 4);
			this.effectState.move = effect.id;
		},
		onRestart() {
			if (this.effectState.trueDuration >= 2) {
				this.effectState.duration = 2;
			}
		},
		onEnd(target) {
			if (this.effectState.trueDuration > 1) return;
			target.addVolatile('confusion');
		},
		onLockMove(pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			return this.effectState.move;
		},
	},
	twoturnmove: {
		// Skull Bash, SolarBeam, Sky Drop...
		name: 'twoturnmove',
		duration: 2,
		onStart(attacker, defender, effect) {
			// ("attacker" is the Pokemon using the two turn move and the Pokemon this condition is being applied to)
			this.effectState.move = effect.id;
			attacker.addVolatile(effect.id);
			// lastMoveTargetLoc is the location of the originally targeted slot before any redirection
			// note that this is not updated for moves called by other moves
			// i.e. if Dig is called by Metronome, lastMoveTargetLoc will still be the user's location
			let moveTargetLoc: number = attacker.lastMoveTargetLoc!;
			if (effect.sourceEffect && this.dex.moves.get(effect.id).target === 'normal') {
				// this move was called by another move such as Metronome
				// and needs a random target to be determined this turn
				// it will already have one by now if there is any valid target
				// but if there isn't one we need to choose a random slot now
				if (defender.fainted) {
					defender = this.sample(attacker.foes(true));
				}
				moveTargetLoc = attacker.getLocOf(defender);
			}
			attacker.volatiles[effect.id].targetLoc = moveTargetLoc;
			this.attrLastMove('[still]');
			// Run side-effects normally associated with hitting (e.g., Protean, Libero)
			this.runEvent('PrepareHit', attacker, defender, effect);
		},
		onEnd(target) {
			target.removeVolatile(this.effectState.move);
		},
		onLockMove() {
			return this.effectState.move;
		},
		onMoveAborted(pokemon) {
			pokemon.removeVolatile('twoturnmove');
		},
	},
	choicelock: {
		name: 'choicelock',
		noCopy: true,
		onStart(pokemon) {
			if (!this.activeMove) throw new Error("Battle.activeMove is null");
			if (!this.activeMove.id || this.activeMove.hasBounced || this.activeMove.sourceEffect === 'snatch') return false;
			this.effectState.move = this.activeMove.id;
		},
		onBeforeMove(pokemon, target, move) {
			if (!pokemon.getItem().isChoice) {
				pokemon.removeVolatile('choicelock');
				return;
			}
			if (
				!pokemon.ignoringItem() && !pokemon.volatiles['dynamax'] &&
				move.id !== this.effectState.move && move.id !== 'struggle'
			) {
				// Fails unless the Choice item is being ignored, and no PP is lost
				this.addMove('move', pokemon, move.name);
				this.attrLastMove('[still]');
				this.debug("Disabled by Choice item lock");
				this.add('-fail', pokemon);
				return false;
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.getItem().isChoice || !pokemon.hasMove(this.effectState.move)) {
				pokemon.removeVolatile('choicelock');
				return;
			}
			if (pokemon.ignoringItem() || pokemon.volatiles['dynamax']) {
				return;
			}
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.id !== this.effectState.move) {
					pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
				}
			}
		},
	},
	mustrecharge: {
		name: 'mustrecharge',
		duration: 2,
		onBeforeMovePriority: 11,
		onBeforeMove(pokemon) {
			this.add('cant', pokemon, 'recharge');
			pokemon.removeVolatile('mustrecharge');
			pokemon.removeVolatile('truant');
			return null;
		},
		onStart(pokemon) {
			this.add('-mustrecharge', pokemon);
		},
		onLockMove: 'recharge',
	},
	futuremove: {
		// this is a slot condition
		name: 'futuremove',
		duration: 3,
		onResidualOrder: 3,
		onEnd(target) {
			const data = this.effectState;
			// time's up; time to hit! :D
			const move = this.dex.moves.get(data.move);
			if (target.fainted || target === data.source) {
				this.hint(`${move.name} did not hit because the target is ${(target.fainted ? 'fainted' : 'the user')}.`);
				return;
			}

			this.add('-end', target, 'move: ' + move.name);
			target.removeVolatile('Protect');
			target.removeVolatile('Endure');

			if (data.source.hasAbility('infiltrator') && this.gen >= 6) {
				data.moveData.infiltrates = true;
			}
			if (data.source.hasAbility('normalize') && this.gen >= 6) {
				data.moveData.type = 'Normal';
			}
			if (data.source.hasAbility('adaptability') && this.gen >= 6) {
				data.moveData.stab = 2;
			}
			const hitMove = new this.dex.Move(data.moveData) as ActiveMove;

			this.actions.trySpreadMoveHit([target], data.source, hitMove, true);
			if (data.source.isActive && data.source.hasItem('lifeorb') && this.gen >= 5) {
				this.singleEvent('AfterMoveSecondarySelf', data.source.getItem(), data.source.itemState, data.source, target, data.source.getItem());
			}
			this.activeMove = null;

			this.checkWin();
		},
	},
	futuremoveperiodic: {
		// this is a slot condition
		name: 'futuremoveperiodic',
		duration: 3,
		onResidualOrder: 3,
		onEnd(target) {
			const data = this.effectState;
			// time's up; time to hit! :D
			const move = this.dex.moves.get(data.move);
			if (target.fainted || target === data.source) {
				this.hint(`${move.name} did not hit because the target is ${(target.fainted ? 'fainted' : 'the user')}.`);
				return;
			}

			this.add('-end', target, 'move: ' + move.name);
			target.removeVolatile('Protect');
			target.removeVolatile('Endure');

			if (data.source.hasAbility('infiltrator') && this.gen >= 6) {
				data.moveData.infiltrates = true;
			}
			if (data.source.hasAbility('normalize') && this.gen >= 6) {
				data.moveData.type = 'Normal';
			}
			if (data.source.hasAbility('adaptability') && this.gen >= 6) {
				data.moveData.stab = 2;
			}
			const hitMove = new this.dex.Move(data.moveData) as ActiveMove;

			this.actions.trySpreadMoveHit([target], data.source, hitMove, true);
			if (data.source.isActive && data.source.hasItem('lifeorb') && this.gen >= 5) {
				this.singleEvent('AfterMoveSecondarySelf', data.source.getItem(), data.source.itemState, data.source, target, data.source.getItem());
			}
			this.activeMove = null;

			this.checkWin();
		},
	},
	wish: {
		name: 'wish',
		duration: 2,
		durationCallback(pokemon) {
			if (pokemon.hasAbility('periodicorbit')) return 4;
			return 2;
		},
		onStart(pokemon, source) {
			this.effectState.hp = source.maxhp / 2;
		},
		onResidualOrder: 4,
		onEnd(target) {
			if (target && !target.fainted) {
				const damage = this.heal(this.effectState.hp, target, target);
				if (damage) {
					this.add('-heal', target, target.getHealth, '[from] move: Wish', '[wisher] ' + this.effectState.source.name);
				}
			}
		},
	},
	wishperiodic: {
		name: 'wishperiodic',
		duration: 2,
		onStart(pokemon, source) {
			this.effectState.hp = source.maxhp / 2;
		},
		onResidualOrder: 4,
		onEnd(target) {
			if (target && !target.fainted) {
				const damage = this.heal(this.effectState.hp, target, target);
				if (damage) {
					this.add('-heal', target, target.getHealth, '[from] move: Wish', '[wisher] ' + this.effectState.source.name);
				}
			}
		},
	},
	healreplacement: {
		// this is a slot condition
		name: 'healreplacement',
		onStart(target, source, sourceEffect) {
			this.effectState.sourceEffect = sourceEffect;
			this.add('-activate', source, 'healreplacement');
		},
		onSwitchInPriority: 1,
		onSwitchIn(target) {
			if (!target.fainted) {
				target.heal(target.maxhp);
				this.add('-heal', target, target.getHealth, '[from] move: ' + this.effectState.sourceEffect, '[zeffect]');
				target.side.removeSlotCondition(target, 'healreplacement');
			}
		},
	},
	stall: {
		// Protect, Detect, Endure counter
		name: 'stall',
		duration: 2,
		counterMax: 729,
		onStart() {
			this.effectState.counter = 3;
		},
		onStallMove(pokemon) {
			// this.effectState.counter should never be undefined here.
			// However, just in case, use 1 if it is undefined.
			const counter = this.effectState.counter || 1;
			this.debug("Success chance: " + Math.round(100 / counter) + "%");
			const success = this.randomChance(1, counter);
			if (!success) delete pokemon.volatiles['stall'];
			return success;
		},
		onRestart() {
			if (this.effectState.counter < (this.effect as Condition).counterMax!) {
				this.effectState.counter *= 3;
			}
			this.effectState.duration = 2;
		},
	},
	gem: {
		name: 'gem',
		duration: 1,
		affectsFainted: true,
		onBasePowerPriority: 14,
		onBasePower(basePower, user, target, move) {
			this.debug('Gem Boost');
			return this.chainModify([5325, 4096]);
		},
	},

	// weather is implemented here since it's so important to the game

	newmoon: {
		name: 'NewMoon',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('darkrock')) {
				return 8;
			}
			return 5;
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (move.type === 'Dark' || move.type === 'Ghost') {
				this.debug('New Moon damage boost');
				return this.chainModify(1.35);
			}
			if (move.type === 'Fairy') {
				this.debug('New Moon fairy weaken');
				return this.chainModify(0.75);
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'NewMoon', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'NewMoon');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'NewMoon', '[upkeep]');
			if (this.field.isWeather('newmoon')) this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	raindance: {
		name: 'RainDance',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('damprock')) {
				return 8;
			}
			return 5;
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Water') {
				this.debug('rain water boost');
				return this.chainModify(1.5);
			}
			if (move.type === 'Fire') {
				this.debug('rain fire suppress');
				return this.chainModify(0.5);
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'RainDance', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'RainDance');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'RainDance', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	primordialsea: {
		name: 'PrimordialSea',
		effectType: 'Weather',
		duration: 0,
		onTryMovePriority: 1,
		onTryMove(attacker, defender, move) {
			if (move.type === 'Fire' && move.category !== 'Status') {
				this.debug('Primordial Sea fire suppress');
				this.add('-fail', attacker, move, '[from] Primordial Sea');
				this.attrLastMove('[still]');
				return null;
			}
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Water') {
				this.debug('Rain water boost');
				return this.chainModify(1.5);
			}
		},
		onFieldStart(field, source, effect) {
			this.add('-weather', 'PrimordialSea', '[from] ability: ' + effect.name, '[of] ' + source);
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'PrimordialSea', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	sunnyday: {
		name: 'SunnyDay',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('heatrock')) {
				return 8;
			}
			return 5;
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Fire') {
				this.debug('Sunny Day fire boost');
				return this.chainModify(1.5);
			}
			if (move.type === 'Water') {
				this.debug('Sunny Day water suppress');
				return this.chainModify(0.5);
			}
		},
		onFieldStart(battle, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'SunnyDay', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'SunnyDay');
			}
		},
		onImmunity(type, pokemon) {
			if (pokemon.hasItem('utilityumbrella')) return;
			if (type === 'frz') return false;
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'SunnyDay', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	desolateland: {
		name: 'DesolateLand',
		effectType: 'Weather',
		duration: 0,
		onTryMovePriority: 1,
		onTryMove(attacker, defender, move) {
			if (move.type === 'Water' && move.category !== 'Status') {
				this.debug('Desolate Land water suppress');
				this.add('-fail', attacker, move, '[from] Desolate Land');
				this.attrLastMove('[still]');
				return null;
			}
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Fire') {
				this.debug('Sunny Day fire boost');
				return this.chainModify(1.5);
			}
		},
		onFieldStart(field, source, effect) {
			this.add('-weather', 'DesolateLand', '[from] ability: ' + effect.name, '[of] ' + source);
		},
		onImmunity(type, pokemon) {
			if (pokemon.hasItem('utilityumbrella')) return;
			if (type === 'frz') return false;
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'DesolateLand', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	sandstorm: {
		name: 'Sandstorm',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('smoothrock')) {
				return 8;
			}
			return 5;
		},
		// This should be applied directly to the stat before any of the other modifiers are chained
		// So we give it increased priority.
		onModifySpDPriority: 10,
		onModifySpD(spd, pokemon) {
			if (pokemon.hasType('Rock') && this.field.isWeather('sandstorm')) {
				return this.modify(spd, 1.5);
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'Sandstorm', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'Sandstorm');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Sandstorm', '[upkeep]');
			if (this.field.isWeather('sandstorm')) this.eachEvent('Weather');
		},
		onWeather(target) {
			this.damage(target.baseMaxhp / 16);
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	hail: {
		name: 'Hail',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('icyrock')) {
				return 8;
			}
			return 5;
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'Hail', '[from] ability: ' + effect.name, '[of] ' + source);
			} else {
				this.add('-weather', 'Hail');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Hail', '[upkeep]');
			if (this.field.isWeather('hail')) this.eachEvent('Weather');
		},
		onWeather(target) {
			let sleet = false;
			for (const pokemon of this.getAllActive()) {
				if (pokemon.hasAbility('sleet')) {
					sleet = true;
				}
			}
			if (sleet) {
				this.damage(target.baseMaxhp / 5);
			} else {
				this.damage(target.baseMaxhp / 16);
			}
		},
		onModifyMove(move, pokemon) {
			if (move.secondaries) {
				for (const secondary of move.secondaries) {
					if (secondary.chance && secondary.status === 'fsb') {
						this.debug('doubling frostbite chance');
						secondary.chance *= 2;
					}
				}
			}
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	deltastream: {
		name: 'DeltaStream',
		effectType: 'Weather',
		duration: 0,
		onEffectivenessPriority: -1,
		onEffectiveness(typeMod, target, type, move) {
			if (move && move.effectType === 'Move' && move.category !== 'Status' && type === 'Flying' && typeMod > 0) {
				this.add('-activate', '', 'deltastream');
				return 0;
			}
		},
		onFieldStart(field, source, effect) {
			this.add('-weather', 'DeltaStream', '[from] ability: ' + effect.name, '[of] ' + source);
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'DeltaStream', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},

	dynamax: {
		name: 'Dynamax',
		noCopy: true,
		onStart(pokemon) {
			this.effectState.turns = 0;
			pokemon.removeVolatile('minimize');
			pokemon.removeVolatile('substitute');
			if (pokemon.volatiles['torment']) {
				delete pokemon.volatiles['torment'];
				this.add('-end', pokemon, 'Torment', '[silent]');
			}
			if (['cramorantgulping', 'cramorantgorging'].includes(pokemon.species.id) && !pokemon.transformed) {
				pokemon.formeChange('cramorant');
			}
			this.add('-start', pokemon, 'Dynamax', (pokemon.gigantamax && pokemon.species.canGigantamax) ? 'Gmax' : '');
			if (pokemon.baseSpecies.name === 'Shedinja' || pokemon.baseSpecies.name === 'Sepulcumbra') return;

			// Changes based on dynamax level, 2 is max (at LVL 10)
			const ratio = 1.5 + (pokemon.dynamaxLevel * 0.05);

			pokemon.maxhp = Math.floor(pokemon.maxhp * ratio);
			pokemon.hp = Math.floor(pokemon.hp * ratio);
			this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
		},
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'flinch') return null;
		},
		onBeforeSwitchOutPriority: -1,
		onBeforeSwitchOut(pokemon) {
			pokemon.removeVolatile('dynamax');
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.id === 'behemothbash' || move.id === 'behemothblade' || move.id === 'dynamaxcannon') {
				return this.chainModify(2);
			}
		},
		onDragOutPriority: 2,
		onDragOut(pokemon) {
			this.add('-block', pokemon, 'Dynamax');
			return null;
		},
		onResidualPriority: -100,
		onResidual() {
			this.effectState.turns++;
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, 'Dynamax');
			if (pokemon.baseSpecies.name === 'Shedinja' || pokemon.baseSpecies.name === 'Sepulcumbra') return;
			pokemon.hp = pokemon.getUndynamaxedHP();
			pokemon.maxhp = pokemon.baseMaxhp;
			this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
		},
	},

	// Arceus and Silvally's actual typing is implemented here.
	// Their true typing for all their formes is Normal, and it's only
	// Multitype and RKS System, respectively, that changes their type,
	// but their formes are specified to be their corresponding type
	// in the Pokedex, so that needs to be overridden.
	// This is mainly relevant for Hackmons Cup and Balanced Hackmons.
	arceus: {
		name: 'Arceus',
		onTypePriority: 1,
		onType(types, pokemon) {
			if (pokemon.getItem().id === 'legendplate' || pokemon.transformed || pokemon.ability !== 'multitype' && this.gen >= 8) return types;
			let type: string | undefined = 'Normal';
			if (pokemon.ability === 'multitype') {
				type = pokemon.getItem().onPlate;
				if (!type) {
					type = 'Normal';
				}
			}
			return [type];
		},
	},
	silvally: {
		name: 'Silvally',
		onTypePriority: 1,
		onType(types, pokemon) {
			if (pokemon.transformed || pokemon.ability !== 'rkssystem' && this.gen >= 8) return types;
			let type: string | undefined = 'Normal';
			if (pokemon.ability === 'rkssystem') {
				type = pokemon.getItem().onMemory;
				if (!type) {
					type = 'Normal';
				}
			}
			return [type];
		},
	},
};
