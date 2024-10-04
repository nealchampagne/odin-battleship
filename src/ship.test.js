import { Ship } from './ship.js'
import {jest} from '@jest/globals'

test('returns an object', () => {
  expect(typeof Ship(5)).toBe('object');
});

test('Is not sunk on initialization', () => {
  expect(Ship(5).isSunk()).toBe(false);
});

test('Size maps to ship name', () => {
  expect(Ship(3).name).toBe('cruiser');
});

jest.mock('./ship.js');

test('A carrier (size 5) should be sunk after 5 hits.', () => {
  const carrier = Ship(5);
  
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  
  expect(carrier.isSunk()).toBe(false);

  carrier.hit();
  
  expect(carrier.isSunk()).toBe(true);
});

test('A battleship (size 4) should be sunk after 4 hits.', () => {
  const battleship = Ship(4);
  
  battleship.hit();
  battleship.hit();
  battleship.hit();

  
  expect(battleship.isSunk()).toBe(false);

  battleship.hit();
  
  expect(battleship.isSunk()).toBe(true);
})