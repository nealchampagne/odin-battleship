import { Gameboard } from "./gameboard.js";

export const Player = (name, array = []) => {
  // Each player needs their own Gameboard object
  const board = Gameboard();

  // Invoke receiveAttack on the provided board
  const attack = (playerBoard, x, y, visitedArray = array) => {
    return playerBoard.receiveAttack(visitedArray, x, y);
  };

  // Some general housekeeping variables
  let hunterMode = false;
  let linearHunt = false;
  let sunkLength = 0;

  const hitArray = [];
  let targetArray = [];

  // Define parameters to filter out invalid shots
  const filterParams = (arr, visitedArray) =>
    arr[0] >= 0 &&
    arr[0] <= board.gridSize &&
    arr[1] >= 0 &&
    arr[1] <= board.gridSize &&
    !JSON.stringify(visitedArray).includes(`${JSON.stringify(arr)}`);

  const getHunterMode = () => hunterMode;

  // Generate random values for computerAttack **UPGRADE THIS LATER**
  const getRandomValue = () => Math.floor(Math.random() * (board.gridSize + 1));

  const computerAttack = (
    playerBoard,
    x = getRandomValue(),
    y = getRandomValue(),
    visitedArray = array,
  ) => {
    let isHit = false;

    // During random search
    if (hunterMode === false) {
      // If the random space has been visited, reroll until a new space is found
      while (
        visitedArray.some(
          (element) => JSON.stringify(element) === `[${x},${y}]`,
        )
      ) {
        x = getRandomValue();
        y = getRandomValue();
      }

      if (playerBoard.receiveAttack(visitedArray, x, y)) {
        isHit = true;

        playerBoard.boardObjects.forEach((obj) => {
          if (
            obj.positionArray.some(
              (element) => JSON.stringify(element) === `[${x},${y}]`,
            )
          ) {
            /** If the hit sinks the ship, do not activate hunter mode,
             *  otherwise begin hunting logic */
            if (obj.ship.isSunk()) {
              console.log("Sunk em!");
              hunterMode = false;
            } else {
              hunterMode = true;
              linearHunt = true;

              hitArray.push([x, y]);

              const adjacencyArray = [
                [x - 1, y],
                [x + 1, y],
                [x, y - 1],
                [x, y + 1],
              ].filter((arr) => {
                return filterParams(arr, visitedArray);
              });

              adjacencyArray.forEach((element) => {
                targetArray.push(element);
              });
              targetArray.sort();
            }
          }
        });
      }

      /** Pass values back to for the DOM manipulating code to process */
      return [isHit, x, y];
    } else if (hunterMode === true) {
      targetArray.sort();

      if (targetArray.length === 0) {
        linearHunt = false;

        hitArray.forEach((arr) => {
          const newTargets = [
            [arr[0] - 1, arr[1]],
            [arr[0] + 1, arr[1]],
            [arr[0], arr[1] - 1],
            [arr[0], arr[1] + 1],
          ];
          newTargets.forEach((arr) => targetArray.push(arr));
        });
      }

      // Filter out any invalid targets in the array
      targetArray = targetArray.filter((arr) => {
        return filterParams(arr, visitedArray);
      });

      // Pick a target at random from the valid targets
      let target = targetArray[Math.floor(Math.random() * targetArray.length)];

      // Handle logic if the attack is a hit
      if (playerBoard.receiveAttack(visitedArray, target[0], target[1])) {
        isHit = true;

        hitArray.push(target);

        playerBoard.boardObjects.forEach((obj) => {
          if (
            obj.positionArray.some(
              (element) =>
                JSON.stringify(element) === `[${target[0]},${target[1]}]`,
            )
          ) {
            // If the hit sinks the ship,deactivate hunter mode,
            if (obj.ship.isSunk()) {
              sunkLength += obj.ship.size;

              if (sunkLength === hitArray.length) {
                hunterMode = false;
                linearHunt = false;
                sunkLength = 0;
                hitArray.length = 0;
                targetArray.length = 0;
              }
            }
          }
        });

        // If the hit doesn't turn off hunter mode, continue hunting logic
        if (hunterMode === true) {
          hitArray.sort();

          if (linearHunt === true) {
            targetArray.length = 0;
            if (hitArray[0][0] === hitArray[1][0]) {
              targetArray.push(
                [hitArray[0][0], hitArray[0][1] - 1],
                [hitArray[0][0], hitArray[hitArray.length - 1][1] + 1],
              );
            } else if (hitArray[0][1] === hitArray[0][1]) {
              targetArray.push(
                [hitArray[0][0] - 1, hitArray[0][1]],
                [hitArray[hitArray.length - 1][0] + 1, hitArray[0][1]],
              );
            }
          }

          // Filter out any invalid targets
          targetArray = targetArray.filter((arr) => {
            return filterParams(arr, visitedArray);
          });
        }
      } else {
        // On a miss, remove that item from the target array
        targetArray.splice(targetArray.indexOf(target), 1);
      }

      // Return whether it was a hit or not and location for styling purposes
      return [isHit, target[0], target[1]];
    }
  };

  return {
    name,
    get visitedArray() {
      return array;
    },
    board,
    attack,
    hitArray,
    targetArray,
    computerAttack,
    getHunterMode,
  };
};
