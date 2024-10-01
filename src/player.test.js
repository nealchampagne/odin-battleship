import { Player } from './player.js';

test('Returns correct type', () => {
  expect (Player('human').type).toBe('human');
});