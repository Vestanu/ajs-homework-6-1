/* eslint-disable no-new */
// eslint-disable-next-line import/extensions
import Character from '../src/main.js';

test('Функция создает новую с правильными значениями Zombie', () => {
  const someNew = new Character('Petr', 'Zombie');
  expect(someNew).toEqual({
    attack: 40, defense: 10, health: 100, level: 1, name: 'Petr', type: 'Zombie',
  });
});

test('Функция создает новую с правильными значениями Bowman', () => {
  const someNew = new Character('Pavel', 'Bowman');
  expect(someNew).toEqual({
    attack: 25, defense: 25, health: 100, level: 1, name: 'Pavel', type: 'Bowman',
  });
});

test('Функция создает новую с правильными значениями Swordsman', () => {
  const someNew = new Character('Misha', 'Swordsman');
  expect(someNew).toEqual({
    attack: 40, defense: 10, health: 100, level: 1, name: 'Misha', type: 'Swordsman',
  });
});

test('Функция создает новую с правильными значениями Magician', () => {
  const someNew = new Character('David', 'Magician');
  expect(someNew).toEqual({
    attack: 10, defense: 40, health: 100, level: 1, name: 'David', type: 'Magician',
  });
});

test('Функция создает новую с правильными значениями Undead', () => {
  const someNew = new Character('Eva', 'Undead');
  expect(someNew).toEqual({
    attack: 25, defense: 25, health: 100, level: 1, name: 'Eva', type: 'Undead',
  });
});

test('Функция создает новую с правильными значениями Daemon', () => {
  const someNew = new Character('Lilith', 'Daemon');
  expect(someNew).toEqual({
    attack: 10, defense: 40, health: 100, level: 1, name: 'Lilith', type: 'Daemon',
  });
});

test('Функция выдает ошибку, если неверно введено имя', () => {
  expect(() => {
    new Character(1234, 'Daemon');
  }).toThrow('Недопустимая длина имени или формат');
});

test('Функция выдает ошибку, если неверно введен тип', () => {
  expect(() => {
    new Character('Somebody', 123);
  }).toThrow('Недопустимый тип');
});

test('Функция выдает ошибку, если неверно введено значение типа', () => {
  expect(() => {
    new Character('Somebody', 'Pirat');
  }).toThrow('Недопустимый тип');
});
