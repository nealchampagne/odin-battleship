import { Ship } from './ship.js';

export const Gameboard = () => {

  const boardObjects = [];
  
  const gridSize = 9;

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

  const placeShip = (size, direction, x , y) => {

    const positionArray = [];
    const ship = Ship(size);

    if (!checkEmpty(size, direction, x, y)){
      throw new Error('Cannot place ship in an occupied space');
    } else {
      if (direction === 'horizontal') {
        if ((x + (size - 1)) > gridSize) {
          throw new Error('Cannot place ship off the board');
        } else {
          for(let i = 0; i < size; i++) {
            positionArray.push([x + i, y]);
          };
        };
      } else if (direction === 'vertical') {
        if ((y + (size - 1 )) > gridSize) {
          throw new Error('Cannot place ship off the board')
        } else {
          for(let i = 0; i < size; i++) {
            positionArray.push([x, y + i]);
          };
        };
      };

      boardObjects.push({ positionArray, ship });

      return { positionArray, ship }
    };
  };

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
    if (isHit) {
      console.log('KABOOM');
    } else {
      console.log('SPLOOSH');
    }
    return isHit;
  };

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