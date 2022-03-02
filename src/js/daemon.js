import CharacterMath from './character-math';

export default class Daemon extends CharacterMath {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
