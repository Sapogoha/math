import Magician from '../magician';

describe('class CharacterMath regulates attack level', () => {
  test('Magician stoned', () => {
    const magician = new Magician('Test');
    magician.stoned = true;
    expect(magician.stoned).toBe(true);
  });

  test('calculate attack if stoned with distance = 2', () => {
    const magician = new Magician('Test');
    magician.attack = 100;
    magician.distance = 2;
    magician.stoned = true;
    expect(magician.attack).toBe(85);
  });

  test('calculate attack if stoned with distance = 2', () => {
    const magician = new Magician('Test');
    magician.attack = 200;
    magician.distance = 2;
    magician.stoned = true;
    expect(magician.attack).toBe(175);
  });

  test('calculate attack with distance = 7', () => {
    const magician = new Magician('Test');
    magician.attack = 200;
    magician.distance = 7;
    expect(() => magician.attack).toThrowError();
  });

  test('attack value is negative', () => {
    const magician = new Magician('Test');
    magician.attack = -200;
    expect(magician.attack).toBe(0);
  });
});
