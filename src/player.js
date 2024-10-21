import { Gameboard } from './gameboard.js';

export const Player = (name, array = []) => {

  const board = Gameboard();

  const attack = (playerBoard, x, y, visitedArray = array,) => {
    return playerBoard.receiveAttack(visitedArray,x,y);
  };

  let hunterMode = false;
  let sunkLength = 0;

  const hitArray = [];
  let targetArray = [];

  const filterParams = (arr, visitedArray) => ((arr[0] >= 0 && arr[0] <= board.gridSize)
  && (arr[1] >= 0 && arr[1] <= board.gridSize) 
  && !JSON.stringify(visitedArray).includes(`${JSON.stringify(arr)}`));

  const getHunterMode = () => hunterMode;

  const getRandomValue = () => Math.floor(Math.random()*(board.gridSize+1));

  const computerAttack = (playerBoard,
    x = getRandomValue(),
    y = getRandomValue(),
    visitedArray = array) => {
    
    let isHit = false;

    // During random search
    if (hunterMode === false) {

      // If the random space has been visited, reroll until a new space is found
      while (visitedArray.some(element => 
        JSON.stringify(element) === `[${x},${y}]`)) {
        x = getRandomValue();
        y = getRandomValue();
      };

      if (playerBoard.receiveAttack(visitedArray,x,y)) {

        isHit = true;

        playerBoard.boardObjects.forEach(obj => {

          if(obj.positionArray.some(element => 

            JSON.stringify(element) === `[${x},${y}]`)) {

            /** If the hit sinks the ship, do not activate hunter mode,
             *  otherwise begin hunting logic */
            if (obj.ship.isSunk()) {

              console.log('Sunk em!')
              hunterMode = false;

            } else {

              hunterMode = true;

              hitArray.push([x,y]);

              const adjacencyArray = [[x-1,y],[x+1,y],[x,y-1],[x,y+1]].filter(arr => { 
                return (filterParams(arr,visitedArray));
              });

              adjacencyArray.forEach(element => {
                targetArray.push(element);
              })
              targetArray.sort()
            }
          }
        })
      };

      /** Pass values back to for the DOM manipulating code to process */
      return [isHit, x, y];

    } else if (hunterMode === true) {
      
      targetArray.sort();

      if (targetArray.length === 0) {
        hitArray.forEach(arr => {
          const newTargets = [[arr[0]-1,arr[1]],
                              [arr[0]+1,arr[1]],
                              [arr[0],arr[1]-1],
                              [arr[0],arr[1]+1]];
          newTargets.forEach(arr => targetArray.push(arr));
        });
      };

      targetArray = targetArray.filter(arr => {
        return filterParams(arr, visitedArray);
      });

      let target = targetArray[Math.floor(Math.random()*targetArray.length)];

      if (playerBoard.receiveAttack(visitedArray,target[0],target[1])) {
        
        isHit = true;

        hitArray.push(target);

        playerBoard.boardObjects.forEach(obj => {

          if(obj.positionArray.some(element => 

            JSON.stringify(element) === `[${target[0]},${target[1]}]`)) {

            // If the hit sinks the ship,deactivate hunter mode,
            if (obj.ship.isSunk()) {
              sunkLength += obj.ship.size;
              console.log(sunkLength);
              console.log(hitArray.length);
              if (sunkLength === hitArray.length) {
                hunterMode = false;
                sunkLength = 0;
                hitArray.length = 0;
                targetArray.length = 0;
              };
            };
          };
        });
        if (hunterMode === true) {
          
          hitArray.sort();

          targetArray.length = 0;
          if (hitArray[0][0] === hitArray[1][0]) {
            targetArray.push([hitArray[0][0],(hitArray[0][1]-1)],
              [hitArray[0][0],hitArray[hitArray.length-1][1]+1]);
          } else if (hitArray[0][1] === hitArray[0][1]) {
            targetArray.push([hitArray[0][0]-1,hitArray[0][1]],
              [hitArray[hitArray.length-1][0]+1,hitArray[0][1]]);
          };

          targetArray = targetArray.filter(arr => { return filterParams(arr,visitedArray) });

        };
      } else {
        targetArray.splice(targetArray.indexOf(target), 1);
      };
      return [isHit, target[0], target[1]];
    };
  };

  return { name,
          get visitedArray() {
            return array
          },
          board,
          attack,
          hitArray,
          targetArray,
          computerAttack,
          getHunterMode };
};