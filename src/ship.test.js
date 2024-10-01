import { Ship } from './ship.js'

test('returns an object', () => {
  expect(typeof Ship(5)).toBe('object');
});

test('Is not sunk on initialization', () => {
  expect(Ship(5).isSunk()).toBe(false);
});