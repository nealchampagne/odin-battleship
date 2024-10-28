import { Ship } from './ship.js';

export const Gameboard = () => {

  const boardObjects = [];
  
  // Set size of board grid
  const gridSize = 9;

  // Function to make sure a given range on the board is empty
  const checkEmpty = (range, direction, x, y) => {
    let isEmpty = true;

    for (let i = 0; i < range; i++) {
      boardObjects.forEach(obj => {
        obj.positionArray.forEach(element => {
          if (direction === 'horizontal') {
            if (JSON.stringify(element) === `[${x+ i},${y}]`) {
              isEmpty = false;
            }
          } else if (direction === 'vertical') {
            if (JSON.stringify(element) === `[${x},${y+i}]`) {
              isEmpty = false;
            };
          }
        });
      });
    };
    return isEmpty;
  };

  // Place ships on the board
  const placeShip = (name, direction, x , y) => {

    // Create an array to hold all the squares the ship occupies
    const positionArray = [];

    // Create a ship of the given type
    const ship = Ship(name);

    // Throw an error if the space is occupied or if the ship goes off the board
    if (!checkEmpty(ship.size, direction, x, y)){
      throw new Error('Cannot place ship in an occupied space');
    } else {
      if (direction === 'horizontal') {
        if ((x + (ship.size - 1)) > gridSize) {
          throw new Error('Cannot place ship off the board');
        } else {
          for(let i = 0; i < ship.size; i++) {
            positionArray.push([x + i, y]);
          };
        };
      } else if (direction === 'vertical') {
        if ((y + (ship.size - 1 )) > gridSize) {
          throw new Error('Cannot place ship off the board')
        } else {
          for(let i = 0; i < ship.size; i++) {
            positionArray.push([x, y + i]);
          };
        };
      };

      // Otherwise, add the new object to the board objects array
      boardObjects.push({ positionArray, ship });

      // Return the object containing the position array and the new ship
      return { positionArray, ship }
    };
  };

  // Handle logic when a board square is attacked
  const receiveAttack = (visitedArray, x, y) => {

    // Throw error if the square has already been visited
    if (visitedArray.some(element => 
      JSON.stringify(element) === `[${x},${y}]`)) {
      throw new Error('Please choose an unvisited square')
    }

    // Otherwise if it's a hit, invoke hit method of ship and return true
    let isHit = false;
    boardObjects.forEach(obj => {
      if (obj.positionArray.find(element =>
        JSON.stringify(element) === `[${x},${y}]`)) {
        obj.ship.hit();
        isHit = true;
      };
    });

    // Add the square to the visited array
    visitedArray.push([x,y]);

    return isHit;
  };

  // Check if all the ships on the board are sunk
  const checkAllSunk = () => {
    let allSunk = true;
    boardObjects.forEach(obj => {
      if (obj.ship.isSunk() === false) {
        allSunk = false;
      };
    });
    return allSunk;
  };

  return { gridSize,
          placeShip, 
          checkEmpty,
          boardObjects,
          receiveAttack,
          checkAllSunk };
};