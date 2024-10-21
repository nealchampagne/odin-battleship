import { Ship } from './ship.js'
import {jest} from '@jest/globals'

test('returns an object', () => {
  expect(typeof Ship('carrier')).toBe('object');
});

test('Is not sunk on initialization', () => {
  expect(Ship('carrier').isSunk()).toBe(false);
});

test('Name maps to ship size', () => {
  expect(Ship('cruiser').size).toBe(3);
});

test('Two different names of ship can have the same size', () => {
  expect(Ship('submarine').size).toBe(3);
});

jest.mock('./ship.js');

test('A carrier (size 5) should be sunk after 5 hits.', () => {
  const carrier = Ship('carrier');
  
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  
  expect(carrier.isSunk()).toBe(false);

  carrier.hit();
  
  expect(carrier.isSunk()).toBeTruthy();
});

test('A battleship (size 4) should be sunk after 4 hits.', () => {
  const battleship = Ship('battleship');
  
  battleship.hit();
  battleship.hit();
  battleship.hit();

  
  expect(battleship.isSunk()).toBe(false);

  battleship.hit();
  
  expect(battleship.isSunk()).toBeTruthy();
})