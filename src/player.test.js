import { Player } from './player.js';

test('Returns correct type', () => {
  expect (Player('human').type).toBe('human');
});

test('Attacks are properly received by opposing player', () => {
  const player1 = Player('human');
  const player2 = Player('human');

  player2.board.placeShip(1,'horizontal',1,1);

  expect(player2.board.boardObjects[0].ship.isSunk()).toBe(false);

  player1.attack(player2.board,1,1);

  expect(player2.board.boardObjects[0].ship.isSunk()).toBe(true);
});

test('A hit by computer activates hunterMode, unless it sinks the ship', () => {
  const human = Player('human');
  const computer = Player('computer');

  human.board.placeShip(1,'horizontal',1,1);
  human.board.placeShip(2,'vertical',7,7);

  expect(computer.getHunterMode()).toBe(false);

  computer.computerAttack(human.board,1,1);

  expect(computer.getHunterMode()).toBe(false);

  computer.computerAttack(human.board,7,7);

  expect(computer.getHunterMode()).toBe(true);
});

test('hitArray and targetArray for hunterMode are initialized on hit', () => {
  const human = Player('human');
  const computer = Player('computer');

  human.board.placeShip(5,'horizontal',1,1);

  expect(computer.getHunterMode()).toBe(false);

  computer.computerAttack(human.board,1,1);

  expect(computer.getHunterMode()).toBe(true);

  expect(computer.hitArray).toEqual([[1,1]]);
  expect(computer.getTargetArray()).toEqual([[0,1],[1,0],[1,2],[2,1]])
});

test('hitArray and targetArray change as expected on repeated hits', () => {
  const human = Player('human');
  const computer = Player('computer');

  human.board.placeShip(3,'horizontal',4,5);
  human.board.placeShip(5,'vertical',0,0);
  human.board.placeShip(2,'horizontal',8,9);
  human.board.placeShip(4,'vertical',9,0);


  while (!human.board.checkAllSunk()) {
    computer.computerAttack(human.board);
  };

  expect(human.board.checkAllSunk()).toBe(true);

});