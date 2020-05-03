/* eslint-disable no-unused-vars */

function Character(name, type) {
  this.health = 100;
  this.level = 1;
  if (type === 'Bowman') {
    this.attack = 25;
    this.defense = 25;
  }
  if (type === 'Swordsman') {
    this.attack = 40;
    this.defense = 10;
  }
  if (type === 'Magician') {
    this.attack = 10;
    this.defense = 40;
  }
  if (type === 'Undead') {
    this.attack = 25;
    this.defense = 25;
  }
  if (type === 'Zombie') {
    this.attack = 40;
    this.defense = 10;
  }
  if (type === 'Daemon') {
    this.attack = 10;
    this.defense = 40;
  }

  if (typeof name !== 'string' || name.length > 10 || name.length < 2) {
    throw new Error('Недопустимая длина имени или формат');
  }

  if (type !== 'Bowman' && type !== 'Swordsman' && type !== 'Magician' && type !== 'Daemon' && type !== 'Undead' && type !== 'Zombie') {
    throw new Error('Недопустимый тип');
  }
  this.name = name;
  this.type = type;
}

export default Character;
