import { Gameboard } from './gameboard.js';

export const Player = type => {

  const board = Gameboard();

  const attack = (playerBoard, x, y) => {
    playerBoard.receiveAttack(x,y);
  };

  let hunterMode = false;
  const visitedArray = [];

  const hitArray = [];
  let targetArray = [];

  const getTargetArray = () => targetArray;

  const filterParams = arr => ((arr[0] >= 0 && arr[0] <= board.gridSize)
  && (arr[1] >= 0 && arr[1] <= board.gridSize) 
  && !JSON.stringify(visitedArray).includes(`${JSON.stringify(arr)}`));

  const getHunterMode = () => hunterMode;

  const getRandomValue = () => Math.floor(Math.random()*(board.gridSize+1));

  const computerAttack = (playerBoard, 
    x = getRandomValue(),
    y = getRandomValue()) => {

    // During random search
    if (hunterMode === false) {

      // If the random space has been visited, reroll until a new space is found
      while (visitedArray.some(element => 
        JSON.stringify(element) === `[${x},${y}]`)) {
        x = getRandomValue();
        y = getRandomValue();
      };
      visitedArray.push([x,y]);

      if (playerBoard.receiveAttack(x,y)) {

        playerBoard.boardObjects.forEach(obj => {

          if(obj.positionArray.some(element => 

            JSON.stringify(element) === `[${x},${y}]`)) {

            /** If the hit sinks the ship, do not activate hunter mode,
             *  otherwise begin hunting logic */
            if (obj.ship.isSunk()) {

              hunterMode = false;

            } else {

              hunterMode = true;

              hitArray.push([x,y]);

              const adjacencyArray = [[x-1,y],[x+1,y],[x,y-1],[x,y+1]].filter(arr => { 
                return (filterParams(arr));
              });

              adjacencyArray.forEach(element => {
                targetArray.push(element);
              })
              targetArray.sort()
            }
          }
        })
      };
    } else if (hunterMode === true) {

      targetArray.sort();

      let target = targetArray[Math.floor(Math.random()*targetArray.length)];
      visitedArray.push(target);
      if (playerBoard.receiveAttack(target[0],target[1])) {
        playerBoard.boardObjects.forEach(obj => {

          if(obj.positionArray.some(element => 

            JSON.stringify(element) === `[${target[0]},${target[1]}]`)) {

            // If the hit sinks the ship,deactivate hunter mode,
            if (obj.ship.isSunk()) {

              hunterMode = false;
              hitArray.length = 0;
              targetArray.length = 0;

            }
          }
        });
        if (hunterMode === true) {
          hitArray.push(target);
          hitArray.sort();

          targetArray.length = 0;
          if (hitArray[0][0] === hitArray[1][0]) {
            targetArray.push([hitArray[0][0],(hitArray[0][1]-1)],[hitArray[0][0],hitArray[hitArray.length-1][1]+1]);
          } else if (hitArray[0][1] === hitArray[0][1]) {
            targetArray.push([hitArray[0][0]-1,hitArray[0][1]],[hitArray[hitArray.length-1][0]+1,hitArray[0][1]])
          }

          targetArray = targetArray.filter(arr => {return filterParams(arr)});

        }
      } else {
        targetArray.splice(targetArray.indexOf(target), 1);
      };
    };
  };

  return { type,
          board,
          attack,
          hitArray,
          getTargetArray,
          computerAttack,
          visitedArray,
          getHunterMode };

};