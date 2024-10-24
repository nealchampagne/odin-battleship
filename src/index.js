import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { clearChildren } from "./clearchildren.js";
import "./style.css";
import waves from "./images/waves.jpg"
import fiveShip from "./images/fiveship.png"
import fourShip from "./images/fourship.png"
import threeShip from "./images/threeship.png"
import twoShip from "./images/twoship.png"

const homeLoad = () => {

  /** Grab/create DOM elements */
  const body = document.body;

  const modeContainer = document.createElement('div');
  const modeModal = document.createElement('div');
  const modeMessage = document.createElement('div');
  const modeButtonContainer = document.createElement('div');
  const onePlayerButton = document.createElement('button');
  const twoPlayerButton = document.createElement('button');

  const header = document.createElement('div');
  const headContainer = document.createElement('div');
  const title = document.createElement('div');

  const content = document.getElementById('content');
  const main = document.createElement('div');

  const nameContainer = document.createElement('div');
  const leftName = document.createElement('div');
  const rightName = document.createElement('div');

  const boardContainer = document.createElement('div');
  const leftShipTray = document.createElement('div');
  const leftCarrierLabel = document.createElement('div');
  const leftBattleshipLabel = document.createElement('div');
  const leftCruiserLabel = document.createElement('div');
  const leftSubmarineLabel = document.createElement('div');
  const leftDestroyerLabel = document.createElement('div');
  const leftBoard = document.createElement('div');
  const rightBoard = document.createElement('div');
  const rightShipTray = document.createElement('div');
  const rightCarrierLabel = document.createElement('div');
  const rightBattleshipLabel = document.createElement('div');
  const rightCruiserLabel = document.createElement('div');
  const rightSubmarineLabel = document.createElement('div');
  const rightDestroyerLabel = document.createElement('div');

  const helpText = document.createElement('div');

  const footContainer = document.createElement('div');
  const footer = document.createElement('div');

  const wavesImage = new Image();
  const leftCarrierImage = new Image();
  const leftBattleshipImage = new Image();
  const leftCruiserImage = new Image();
  const leftSubmarineImage = new Image();
  const leftDestroyerImage = new Image();
  const rightCarrierImage = new Image();
  const rightBattleshipImage = new Image();
  const rightCruiserImage = new Image();
  const rightSubmarineImage = new Image();
  const rightDestroyerImage = new Image();

  /** Assign image sources */
  wavesImage.src = waves;
  leftCarrierImage.src = fiveShip;
  leftBattleshipImage.src = fourShip;
  leftCruiserImage.src = threeShip;
  leftSubmarineImage.src = threeShip;
  leftDestroyerImage.src = twoShip;
  rightCarrierImage.src = fiveShip;
  rightBattleshipImage.src = fourShip;
  rightCruiserImage.src = threeShip;
  rightSubmarineImage.src = threeShip;
  rightDestroyerImage.src = twoShip;

  /** Add CSS selectors */
  modeContainer.classList.add('modalcontainer');
  modeModal.classList.add('modal');
  modeMessage.classList.add('modemessage');
  modeButtonContainer.classList.add('modebtncontainer');

  header.classList.add('header');
  headContainer.classList.add('headcontainer');
  title.classList.add('title');

  main.classList.add('main');
  nameContainer.classList.add('namecontainer');
  leftName.classList.add('name');
  rightName.classList.add('name');

  boardContainer.classList.add('boardcontainer');
  leftBoard.classList.add('board');
  rightBoard.classList.add('board');

  leftShipTray.classList.add('shiptray');
  leftCarrierImage.classList.add('shipimage');
  leftBattleshipImage.classList.add('shipimage');
  leftCruiserImage.classList.add('shipimage');
  leftSubmarineImage.classList.add('shipimage');
  leftDestroyerImage.classList.add('shipimage');
  leftCarrierLabel.classList.add('shiplabel');
  leftBattleshipLabel.classList.add('shiplabel');
  leftCruiserLabel.classList.add('shiplabel');
  leftSubmarineLabel.classList.add('shiplabel');
  leftDestroyerLabel.classList.add('shiplabel');

  rightShipTray.classList.add('shiptray');
  rightCarrierImage.classList.add('shipimage');
  rightBattleshipImage.classList.add('shipimage');
  rightCruiserImage.classList.add('shipimage');
  rightSubmarineImage.classList.add('shipimage');
  rightDestroyerImage.classList.add('shipimage');
  rightCarrierLabel.classList.add('shiplabel');
  rightBattleshipLabel.classList.add('shiplabel');
  rightCruiserLabel.classList.add('shiplabel');
  rightSubmarineLabel.classList.add('shiplabel');
  rightDestroyerLabel.classList.add('shiplabel');

  helpText.classList.add('helptext');

  footContainer.classList.add('footcontainer');
  footer.classList.add('footer');

  /** Populate text content */
  title.textContent = 'Battleship';
  leftCarrierLabel.textContent = 'Carrier';
  leftBattleshipLabel.textContent = 'Battleship';
  leftCruiserLabel.textContent = 'Cruiser';
  leftSubmarineLabel.textContent = 'Submarine';
  leftDestroyerLabel.textContent = 'Destroyer';
  rightCarrierLabel.textContent = 'Carrier';
  rightBattleshipLabel.textContent = 'Battleship';
  rightCruiserLabel.textContent = 'Cruiser';
  rightSubmarineLabel.textContent = 'Submarine';
  rightDestroyerLabel.textContent = 'Destroyer';

  modeMessage.textContent = 'Select game mode:';
  onePlayerButton.textContent = "One Player";
  twoPlayerButton.textContent = "Two Player";

  footer.textContent = 'By Neal Champagne: October 2024'

  /** Set background images for boards and main body */
  leftBoard.style.backgroundImage = `url(${waves})`;
  leftBoard.style.backgroundSize = 'cover';
  rightBoard.style.backgroundImage = `url(${waves})`;
  rightBoard.style.backgroundSize = 'cover';
  body.style.backgroundImage = `url(${waves})`;
  body.style.backgroundSize = 'cover';

  /** Wipe the slate clean for resets */
  clearChildren(content);

  main.appendChild(modeContainer);
  modeContainer.appendChild(modeModal);
  modeModal.appendChild(modeMessage);
  modeModal.appendChild(modeButtonContainer);
  modeButtonContainer.appendChild(onePlayerButton);
  modeButtonContainer.appendChild(twoPlayerButton);

  content.appendChild(header);
  header.appendChild(headContainer);
  headContainer.appendChild(title);

  content.appendChild(main);
  main.appendChild(nameContainer);
  nameContainer.appendChild(leftName);
  nameContainer.appendChild(rightName);

  main.appendChild(boardContainer);
  boardContainer.appendChild(leftShipTray);
  leftShipTray.appendChild(leftCarrierLabel);
  leftShipTray.appendChild(leftCarrierImage);
  leftShipTray.appendChild(leftBattleshipLabel);
  leftShipTray.appendChild(leftBattleshipImage);
  leftShipTray.appendChild(leftCruiserLabel);
  leftShipTray.appendChild(leftCruiserImage);
  leftShipTray.appendChild(leftSubmarineLabel);
  leftShipTray.appendChild(leftSubmarineImage);
  leftShipTray.appendChild(leftDestroyerLabel);
  leftShipTray.appendChild(leftDestroyerImage);
  
  boardContainer.appendChild(leftBoard);
  boardContainer.appendChild(rightBoard);

  boardContainer.appendChild(rightShipTray);
  rightShipTray.appendChild(rightCarrierLabel);
  rightShipTray.appendChild(rightCarrierImage);
  rightShipTray.appendChild(rightBattleshipLabel);
  rightShipTray.appendChild(rightBattleshipImage);
  rightShipTray.appendChild(rightCruiserLabel);
  rightShipTray.appendChild(rightCruiserImage);
  rightShipTray.appendChild(rightSubmarineLabel);
  rightShipTray.appendChild(rightSubmarineImage);
  rightShipTray.appendChild(rightDestroyerLabel);
  rightShipTray.appendChild(rightDestroyerImage);
  
  main.appendChild(helpText);

  content.appendChild(footContainer);
  footContainer.appendChild(footer);

  /** Initialize necessary variables and arrays */
  let pvpMode = false;
  let setupPhase = false;
  let battlePhase = false;

  let player1;
  let player2;

  let placeCarrier = false;
  let placeBattleship = false;
  let placeCruiser = false;
  let placeSubmarine = false;
  let placeDestroyer = false;

  let placeDirection = 'horizontal';
  let hoverTarget;

  const playerOneSquares = [];
  const playerTwoSquares = [];
  const visitedArray1 = [];
  const visitedArray2 = [];

  let playerTurn = 'player1';

  /** Close mode-select modal and begin setup */
  const closeModeModal = () => {
    if (pvpMode) {
      leftName.textContent = 'Player 1';
      rightName.textContent = 'Player 2';
      helpText.textContent = `Take turns placing ships by clicking on the desired square.
      Press spacebar to rotate ship. Don't let the other player watch while you position your fleet!`
    } else if (!pvpMode) {
      helpText.textContent = `Place your ships by clicking on the desired square.
      Press spacebar to rotate ship.`
    }
    leftBoard.style.pointerEvents = 'auto';
    modeModal.style.display = 'none';
    setupPhase = true;
    placeCarrier = true;
  };

  /** Procede to 1-player game and close modal */
  onePlayerButton.addEventListener('click', () => {
    pvpMode = false;
    closeModeModal();
  });

  /** Activate PvP and close modal */
  twoPlayerButton.addEventListener('click', () => {
    pvpMode = true;
    closeModeModal();
  });

  /** Listen for spacebar to rotate ship placement */
  document.addEventListener('keydown', event => {
    if (setupPhase && event.code === 'Space') {
      placeDirection = (placeDirection === 'horizontal' ? 'vertical' : 'horizontal');
      event.preventDefault();
    };
  });

  /** Add 'hit' class on hit */
  const hitSquare = (square) => {
    square.textContent = 'X';
    square.classList.add('hit');
  };

  /** Add 'miss' class on miss */
  const missSquare = (square) => {
    square.textContent = 'O';
    square.classList.add('miss');
  };

  /** Check for sunk ships after attacking, update CSS as necessary */
  const markSunkShips = (player, board) => {
    player.board.boardObjects.forEach(obj => {

      if (obj.ship.isSunk()[0] === 'carrier') {
        if (board === leftBoard) {
          leftCarrierImage.classList.add('sunkship');
          leftCarrierLabel.classList.add('sunklabel');
        } else {
          rightCarrierImage.classList.add('sunkship');
          rightCarrierLabel.classList.add('sunklabel');
        };
      } else if (obj.ship.isSunk()[0] === 'battleship') {
        if (board === leftBoard) {
          leftBattleshipImage.classList.add('sunkship');
          leftBattleshipLabel.classList.add('sunklabel');
        } else {
          rightBattleshipImage.classList.add('sunkship');
          rightBattleshipLabel.classList.add('sunklabel');
        };
      } else if (obj.ship.isSunk()[0] === 'cruiser') {
        if (board === leftBoard) {
          leftCruiserImage.classList.add('sunkship');
          leftCruiserLabel.classList.add('sunklabel');
        } else {
          rightCruiserImage.classList.add('sunkship');
          rightCruiserLabel.classList.add('sunklabel');
        };
      } else if (obj.ship.isSunk()[0] === 'submarine') {
        if (board === leftBoard) {
          leftSubmarineImage.classList.add('sunkship');
          leftSubmarineLabel.classList.add('sunklabel');
        } else {
          rightSubmarineImage.classList.add('sunkship');
          rightSubmarineLabel.classList.add('sunklabel');
        };
      } else if (obj.ship.isSunk()[0] === 'destroyer') {
        if (board === leftBoard) {
          leftDestroyerImage.classList.add('sunkship');
          leftDestroyerLabel.classList.add('sunklabel');
        } else {
          rightDestroyerImage.classList.add('sunkship');
          rightDestroyerLabel.classList.add('sunklabel');
        };
      };
    });
  }

  /** Generate board squares and attach necessary CSS selectors */
  const fillBoard = (player, board, enemy) => {
    for (let i = 0; i < Gameboard().gridSize + 1; i++) {
      for (let j = 0; j < Gameboard().gridSize + 1; j++) {

        const square = document.createElement('div');

        square.setAttribute('id', `${player.name}${j}${i}`);
        square.classList.add(`${player.name}`, 'square');

        if (!pvpMode) {
          if (player.name === 'player2')  {
            square.classList.add('fogofwar');
          };
        };

        square.addEventListener('mouseover', () => {
          hoverTarget = square;
          let size;
          if (setupPhase) {
            if (placeCarrier) {
              size = 5;
            } else if (placeBattleship) {
              size = 4;
            } else if (placeCruiser || placeSubmarine) {
              size = 3;
            } else if (placeDestroyer) {
              size = 2;
            };
            highlightRange(player, size, placeDirection, j, i);
          };
        });

        document.addEventListener('keydown', event => {
          if (setupPhase && event.code === 'Space') {
            if (hoverTarget === square) {
            let size;
              if (placeCarrier) {
                size = 5;
              } else if (placeBattleship) {
                size = 4;
              } else if (placeCruiser || placeSubmarine) {
                size = 3;
              } else if (placeDestroyer) {
                size = 2;
              };
            clearHighlight(player);
            highlightRange(player, size, placeDirection, j, i);
            };
          };
        });

        square.addEventListener('mouseout', () => {
          if (setupPhase) {
            clearHighlight(player);
            hoverTarget = undefined;
          };
        });

        square.addEventListener('click', () => {
          if (setupPhase) {
            if (placeCarrier) {
              try {
                placeOwnShip(player, 'carrier', placeDirection, j, i);
                stepThroughSetup();
              } catch (error) {
                handleError(error);
              }
            } else if (placeBattleship) {
              try {
                placeOwnShip(player, 'battleship', placeDirection, j, i);
                stepThroughSetup();
              } catch (error) {
                handleError(error);
              }
            } else if (placeCruiser) {
              try {
                placeOwnShip(player, 'cruiser', placeDirection, j, i);
                stepThroughSetup();
              } catch (error) {
                handleError(error);
              }
            } else if (placeSubmarine) {
              try {
                placeOwnShip(player, 'submarine', placeDirection, j, i);
                stepThroughSetup();
              } catch (error) {
                handleError(error);
              }
            } else if (placeDestroyer) {
              try {
                placeOwnShip(player, 'destroyer', placeDirection, j, i);
                if (!pvpMode) {
                  endSetup();
                } else {
                  togglePlayerTurn();
                }
              } catch (error) {
                handleError(error);
              };
            };
          } else if (battlePhase) {
            if (enemy.attack(player.board, j, i)) {
              hitSquare(square);
            } else {
              missSquare(square);
            };

            square.classList.remove('fogofwar');

            markSunkShips(player, board);

            if (player.board.checkAllSunk()) {
              endGame(enemy, player);
            };

            togglePlayerTurn();
          }
        });

        board.appendChild(square);
        player.name === 'player1' 
          ? playerOneSquares.push(square) :
            playerTwoSquares.push(square);
      };
    };
  };

  /** Handle turn switching */
  const togglePlayerTurn = () => {
    if (pvpMode) {
      if (playerTurn === 'player1') {
        document.querySelectorAll('.player1').classList.add('fogofwar');
        interstitialScreen();
        playerTurn = 'player2';
      } else {
        document.querySelectorAll('.player2').classList.add('fogofwar');
        playerTurn = 'player1';
      };
    } else {
      const computerResult = player2.computerAttack(player1.board);
      const square = document.getElementById(`player1${computerResult[1]}${computerResult[2]}`);
      if (computerResult[0]) {
        hitSquare(square);
      } else {
        missSquare(square);
      };
      markSunkShips(player1, leftBoard);
      if (player1.board.checkAllSunk()) {
        endGame(player2, player1);
      }
    };
  };

  /** Create two players */
  const initializePlayers = () => { 
    player1 = Player('player1',visitedArray1);
    player2 = Player('player2',visitedArray2);

    leftName.textContent = 'Player';
    rightName.textContent = 'Computer';
  };

  /** Step down through ship size for setup purposes */
  const stepThroughSetup = () => {
    if (placeCarrier) {
      placeCarrier = false;
      placeBattleship = true;
    } else if (placeBattleship) {
      placeBattleship = false;
      placeCruiser = true;
    } else if (placeCruiser) {
      placeCruiser = false;
      placeSubmarine = true;
    } else if (placeSubmarine) {
      placeSubmarine = false;
      placeDestroyer = true
    } else if (placeDestroyer) {
      placeDestroyer = false;
    };
  };

  const endSetup = pvpMode => {
    if (pvpMode) {
      interstitialScreen(playerTurn);
    } else {
      placeCarrier = true;
      placeComputerShips();
    };
    leftBoard.style.pointerEvents = 'none';
    setupPhase = false;
    battlePhase = true;
  };

  const placeComputerShips = () => {
    let placingShips = true;
    
    while (placingShips) {

      placeDirection = ((Math.random()*2 >= 1) ? 'horizontal' : 'vertical');
      let x = Math.floor(Math.random() * (player2.board.gridSize + 1));
      let y = Math.floor(Math.random() * (player2.board.gridSize + 1));
      console.log(placeDirection, x, y);

      if (placeCarrier) { 
        try {
          placeOwnShip(player2, 'carrier', placeDirection, x, y);
          console.log('Hiya!');
          stepThroughSetup();
        } catch (error) {
          // Don't do anything on error, just try again;
        };
      } else if (placeBattleship) {
        try {
          placeOwnShip(player2, 'battleship', placeDirection, x, y);
          stepThroughSetup();
        } catch (error) {
          // Don't do anything, just try again;
        };
      } else if (placeCruiser) {
        try {
          placeOwnShip(player2, 'cruiser', placeDirection, x, y);
          stepThroughSetup();
        } catch (error) {
          // Don't do anything, just try again;
        };
      } else if (placeSubmarine) {
        try {
          placeOwnShip(player2, 'submarine', placeDirection, x, y);
          stepThroughSetup();
        } catch (error) {
          // Don't do anything, just try again;
        };
      } else if (placeDestroyer) {
        try {
          placeOwnShip(player2, 'destroyer', placeDirection, x, y);
          console.log('All done!');
          placingShips = false;
        } catch (error) {
          // Don't do anything, just try again;
        };
      }
    };
  };

  const interstitialScreen = turn => {
    concealBoard(playerOneSquares);
    concealBoard(playerTwoSquares);
    if (turn === 'player1') {
      interstitialText.textContent = `Player 1, click 'Ready' to proceed with your turn.`
    } else {
      interstitialText.textContent = `Player 2, click 'Ready' to proceed with your turn.`
    };
  };

  const closeInterstitial = turn => {

  }

  const concealBoard = arr => {
    arr.forEach(square => {
      if (!square.classList.contains('hit') && !square.classList.contains('miss')) {
        square.classList.add('fogofwar');
      };
    });
  };

  /** Show a ghost image of a ship to review before placing it */
  const highlightRange = (player, range, direction, x, y) => {
    for (let i = 0; i < range; i++) {
      if (direction === 'horizontal' ? ((x + i) <= player.board.gridSize)
        : ((y + i) <= player.board.gridSize)) {
      const square = (direction === 'horizontal'
        ? document.getElementById(`${player.name}${x+i}${y}`)
        : document.getElementById(`${player.name}${x}${y+i}`));
      square.classList.add('shippreview');
      };
    };
  };

  /** Clear ghost image when not over an element or changing direction */
  const clearHighlight = (player) => {
    for (let i = 0; i <= player.board.gridSize; i++) {
      for (let j = 0; j <= player.board.gridSize; j++) {
      const square = document.getElementById(`${player.name}${j}${i}`);
      square.classList.remove('shippreview');
      };
    };
  };

  /** Places a ship on the board and reflects this in the DOM */
  const placeOwnShip = (player, name, direction, x, y) => {
    let myShip = player.board.placeShip(name, direction, x, y);
    for (let i = 0; i < myShip.ship.size; i++) {
      const square = (direction === 'horizontal'
        ? document.getElementById(`${player.name}${x+i}${y}`)
        : document.getElementById(`${player.name}${x}${y+i}`));
      square.classList.add('ownfleet');
    };
  };

  /** Declare winner and disable attacking behavior */
  const endGame = (player, enemy) => {
    main.style.pointerEvents = 'none';
    helpText.textContent = `${player.name} sunk all of ${enemy.name}'s
     ships. ${player.name} wins!`;
  };

  /** --TO DO: MAKE ERROR MODAL-- Error handler */
  const handleError = error => {
    alert(error);
  }

  initializePlayers(pvpMode);

  fillBoard(player1, leftBoard, player2);
  fillBoard(player2, rightBoard, player1);
};

homeLoad();