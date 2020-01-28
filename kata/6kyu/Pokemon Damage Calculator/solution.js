/*** Best Solution ***/
// By using mapper 

// This class is not necessary for this question, but it is a best practice for creating similar objects
class EffectivenessMapper {
  constructor(fire, grass, water, electric){
    this.fire = fire
    this.grass = grass
    this.water = water
    this.electric = electric
  }
}
export const calculateDamage = (yourType, opponentType, attack, defense) => {
  const mapper = {
    fire: new EffectivenessMapper(0.5, 2, 0.5, 1),
    grass: new EffectivenessMapper(0.5, 0.5, 2, 1),
    water: new EffectivenessMapper(2, 0.5, 0.5, 0.5),
    electric: new EffectivenessMapper(1, 1, 2, 0.5),
  }
  return 50 * (attack/defense) * mapper[yourType][opponentType];
}

/*** More Explanatory Solution ***/

// This Enum is not necessary for this question, but always it is a best practice for large scale projects.
const pokemonTypes = {
  fire: "fire",
  water: "water",
  grass: 'grass',
  electric: 'electric'
}

export function calculateDamage2(yourType, opponentType, attack, defense){
  const calculateDamage = (attack, defense, effectiveness) => 50 * (attack / defense) * effectiveness
  const calculateEffectiveness = (attacker, defender) => {
    switch (attacker) {
      case pokemonTypes.fire:
        if(defender === pokemonTypes.grass) return 2;
        else if (defender === pokemonTypes.electric) return 1;
        return 0.5;
      
      case pokemonTypes.water:
        if(defender === pokemonTypes.fire) return 2;
        return 0.5;

      case pokemonTypes.grass:
        if(defender === pokemonTypes.water) return 2;
        else if(defender === pokemonTypes.electric) return 1;
        return 0.5;

      case pokemonTypes.electric:
        if(defender === pokemonTypes.water) return 2;
        else if(defender === attacker) return 0.5;
        return 1;
    }
  }
  return calculateDamage(attack, defense, calculateEffectiveness(yourType, opponentType))
}
