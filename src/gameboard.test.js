import { Gameboard } from './gameboard.js';

test('Gameboard returns an object', () => {
  expect(typeof Gameboard()).toBe('object');
});

test('placeShip returns an object', () => {
  expect(typeof Gameboard().placeShip(5,'horizontal',1,1)).toBe('object');
});

test('positionArray of placeShip is an array', () => {
  expect(typeof Gameboard().placeShip(5,'vertical',1,1).positionArray).toBe('object');
});

test('ship returned by placeShip is an object', () => {
  expect(typeof Gameboard().placeShip(5,'horizontal',1,1).ship).toBe('object');
});

test('ship returned by placeShip has correct name', () => {
  expect(Gameboard().placeShip(3,'horizontal',1,1).ship.name).toBe('cruiser');
});

test('Throws an error when ship is placed off the board', () => {
  expect(() => Gameboard().placeShip(5,'horizontal',8,0))
    .toThrow('Cannot place ship off the board');
  expect(() => Gameboard().placeShip(5,'vertical',1,8))
    .toThrow('Cannot place ship off the board');
});

test('positionArray of placeShip contains arrays', () => {
  expect(typeof Gameboard().placeShip(5,'horizontal',1,1).positionArray[0])
    .toBe('object');
});

test('positionArray of placeShip contains two-element arrays', () => {
  expect(Gameboard().placeShip(5,'horizontal',1,1).positionArray[0].length)
    .toBe(2);
});

test('positionArray length should be equal to ship size', () => {
  expect(Gameboard().placeShip(5,'horizontal',1,1).positionArray.length)
    .toBe(5);
});

test('positionArray should be filled with expected values', () => {
  expect(JSON.stringify(Gameboard().placeShip(5,'horizontal',1,1).positionArray))
    .toBe('[[1,1],[2,1],[3,1],[4,1],[5,1]]');
});

test('Throws appropriate error when placing a ship in an occupied space', () => {

  const playerBoard = Gameboard();

  playerBoard.placeShip(5,'horizontal',1,1);

  expect(() => playerBoard.placeShip(5,'vertical',3,0))
    .toThrow('Cannot place ship in an occupied space');
  
});

test('receiveAttack takes a pair of coordinates and returns a boolean', () => {
  expect(typeof Gameboard().receiveAttack(1,2)).toBe('boolean');
});

test('receiveAttack eventually results in a sunk ship', () => {
  const playerBoard = Gameboard();

  playerBoard.placeShip(2,'horizontal',1,1);

  playerBoard.receiveAttack(1,1);

  expect(playerBoard.boardObjects[0].ship.isSunk()).toBe(false);

  playerBoard.receiveAttack(2,1);

  expect(playerBoard.boardObjects[0].ship.isSunk()).toBe(true);
})