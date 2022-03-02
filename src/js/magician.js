import CharacterMath from './character-math';

export default class Magician extends CharacterMath {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
