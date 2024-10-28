import { Gameboard } from "./gameboard.js";

test("Gameboard returns an object", () => {
  expect(typeof Gameboard()).toBe("object");
});

test("placeShip returns an object", () => {
  expect(typeof Gameboard().placeShip("carrier", "horizontal", 1, 1)).toBe(
    "object",
  );
});

test("positionArray of placeShip is an array", () => {
  expect(
    typeof Gameboard().placeShip("carrier", "vertical", 1, 1).positionArray,
  ).toBe("object");
});

test("ship returned by placeShip is an object", () => {
  expect(typeof Gameboard().placeShip("carrier", "horizontal", 1, 1).ship).toBe(
    "object",
  );
});

test("ship returned by placeShip has correct size", () => {
  expect(Gameboard().placeShip("submarine", "horizontal", 1, 1).ship.size).toBe(
    3,
  );
});

test("Throws an error when ship is placed off the board", () => {
  expect(() => Gameboard().placeShip("carrier", "horizontal", 8, 0)).toThrow(
    "Cannot place ship off the board",
  );
  expect(() => Gameboard().placeShip("carrier", "vertical", 1, 8)).toThrow(
    "Cannot place ship off the board",
  );
});

test("positionArray of placeShip contains arrays", () => {
  expect(
    typeof Gameboard().placeShip("carrier", "horizontal", 1, 1)
      .positionArray[0],
  ).toBe("object");
});

test("positionArray of placeShip contains two-element arrays", () => {
  expect(
    Gameboard().placeShip("destroyer", "horizontal", 1, 1).positionArray[0]
      .length,
  ).toBe(2);
});

test("positionArray length should be equal to ship size", () => {
  expect(
    Gameboard().placeShip("carrier", "horizontal", 1, 1).positionArray.length,
  ).toBe(5);
});

test("positionArray should be filled with expected values", () => {
  expect(
    JSON.stringify(
      Gameboard().placeShip("carrier", "horizontal", 1, 1).positionArray,
    ),
  ).toBe("[[1,1],[2,1],[3,1],[4,1],[5,1]]");
});

test("Throws appropriate error when placing a ship in an occupied space", () => {
  const playerBoard = Gameboard();

  playerBoard.placeShip("carrier", "horizontal", 1, 1);

  expect(() => playerBoard.placeShip("carrier", "vertical", 3, 0)).toThrow(
    "Cannot place ship in an occupied space",
  );
});

test("receiveAttack takes a pair of coordinates and returns a boolean", () => {
  expect(typeof Gameboard().receiveAttack([], 1, 2)).toBe("boolean");
});

test("receiveAttack eventually results in a sunk ship", () => {
  const playerBoard = Gameboard();
  const visitedArray = [];

  playerBoard.placeShip("destroyer", "horizontal", 1, 1);

  playerBoard.receiveAttack(visitedArray, 1, 1);

  expect(playerBoard.boardObjects[0].ship.isSunk()).toBe(false);

  playerBoard.receiveAttack(visitedArray, 2, 1);

  expect(playerBoard.boardObjects[0].ship.isSunk()).toBeTruthy();
});

test("If all boats are sunk, allSunk returns true", () => {
  const playerBoard = Gameboard();
  const visitedArray = [];

  playerBoard.placeShip("destroyer", "horizontal", 1, 1);
  playerBoard.placeShip("battleship", "vertical", 4, 4);

  playerBoard.receiveAttack(visitedArray, 1, 1);
  playerBoard.receiveAttack(visitedArray, 2, 1);

  expect(playerBoard.checkAllSunk()).toBe(false);

  playerBoard.receiveAttack(visitedArray, 4, 4);
  playerBoard.receiveAttack(visitedArray, 4, 5);
  playerBoard.receiveAttack(visitedArray, 4, 6);
  playerBoard.receiveAttack(visitedArray, 4, 7);

  expect(playerBoard.checkAllSunk()).toBe(true);
});

test(`Choosing a square you've already shot at produces an error`, () => {
  const playerBoard = Gameboard();
  const visitedArray = [];

  playerBoard.receiveAttack(visitedArray, 1, 1);

  expect(() => playerBoard.receiveAttack(visitedArray, 1, 1)).toThrow(
    "Please choose an unvisited square",
  );

  playerBoard.receiveAttack(visitedArray, 3, 3);

  expect(() => playerBoard.receiveAttack(visitedArray, 3, 3)).toThrow(
    "Please choose an unvisited square",
  );
});
