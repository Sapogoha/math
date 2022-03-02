import Character from './character';

export default class CharacterMath extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    let calculatedAttack;
    if (this.distance > 0 && this.distance < 6) {
      calculatedAttack = Math.round(this._attack * (1.1 - 0.1 * this.distance));
    } else {
      throw new Error('distance should be between 1 and 5 squares');
    }
    if (this._stoned) {
      calculatedAttack = Math.round(
        calculatedAttack - Math.log2(this.distance) * 5,
      );
    }

    return calculatedAttack > 0 ? calculatedAttack : 0;
  }
}
