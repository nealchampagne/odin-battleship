import { Player } from "./player.js";

test("Returns correct type", () => {
  expect(Player("human").name).toBe("human");
});

test("Attacks are properly received by opposing player", () => {
  const player1 = Player("player1");
  const player2 = Player("player2");

  player2.board.placeShip("destroyer", "horizontal", 1, 1);

  expect(player2.board.boardObjects[0].ship.isSunk()).toBe(false);

  player1.attack(player2.board, 1, 1);
  player1.attack(player2.board, 2, 1);

  expect(player2.board.boardObjects[0].ship.isSunk()).toBeTruthy();
});

test("A hit by computer activates hunterMode, unless it sinks the ship", () => {
  const human = Player("human");
  const computer = Player("computer");

  human.board.placeShip("destroyer", "horizontal", 1, 1);
  human.board.placeShip("cruiser", "vertical", 7, 7);

  expect(computer.getHunterMode()).toBe(false);

  computer.computerAttack(human.board, 7, 7);

  expect(computer.getHunterMode()).toBe(true);
});

test("hitArray and targetArray for hunterMode are initialized on hit", () => {
  const human = Player("human");
  const computer = Player("computer");

  human.board.placeShip("carrier", "horizontal", 1, 1);

  expect(computer.getHunterMode()).toBe(false);

  computer.computerAttack(human.board, 1, 1);

  expect(computer.getHunterMode()).toBeTruthy();

  expect(computer.hitArray).toEqual([[1, 1]]);
  expect(computer.targetArray).toEqual([
    [0, 1],
    [1, 0],
    [1, 2],
    [2, 1],
  ]);
});

test("hitArray and targetArray change as expected on repeated hits", () => {
  const human = Player("human");
  const computer = Player("computer");

  human.board.placeShip("submarine", "horizontal", 4, 5);
  human.board.placeShip("carrier", "vertical", 0, 0);
  human.board.placeShip("destroyer", "horizontal", 8, 9);
  human.board.placeShip("battleship", "vertical", 9, 0);

  while (!human.board.checkAllSunk()) {
    computer.computerAttack(human.board);
  }

  expect(human.board.checkAllSunk()).toBe(true);
});
