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
  const body = document.body;
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

  clearChildren(content);

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

  header.classList.add('header');
  headContainer.classList.add('headcontainer');
  title.classList.add('title');
  main.classList.add('main');
  nameContainer.classList.add('namecontainer');
  leftName.classList.add('name');
  rightName.classList.add('name');
  boardContainer.classList.add('boardcontainer');
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
  leftBoard.classList.add('board');
  rightBoard.classList.add('board');
  footContainer.classList.add('footcontainer');
  footer.classList.add('footer');

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
  footer.textContent = '© 2024'

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

  leftBoard.style.backgroundImage = `url(${waves})`;
  leftBoard.style.backgroundSize = 'cover';
  rightBoard.style.backgroundImage = `url(${waves})`;
  rightBoard.style.backgroundSize = 'cover';
  body.style.backgroundImage = `url(${waves})`;
  body.style.backgroundSize = 'cover';

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

  content.appendChild(footContainer);
  footContainer.appendChild(footer);

  const hitSquare = (square) => {
    square.textContent = 'X';
    square.classList.add('hit');
  }

  const missSquare = (square) => {
    square.textContent = 'O';
    square.classList.add('miss');
  }

  const fillBoard = (player, board, enemy) => {
    for (let i = 0; i < Gameboard().gridSize + 1; i++) {
      for (let j = 0; j < Gameboard().gridSize + 1; j++) {
        const square = document.createElement('div');

        square.setAttribute('id', `${player.name}${j}${i}`);
        square.classList.add('square');

        if (!pvpMode) {
          if (player.name === 'player2')  {
            square.classList.add('fogofwar');
          };
          if (player.name === 'player1') {
            board.classList.add('ownboard');
          };
        };

        square.addEventListener('click', () => {
          if (enemy.attack(player.board, j, i)) {
            hitSquare(square);
          } else {
            missSquare(square);
          };
          square.classList.remove('fogofwar');
          player.board.boardObjects.forEach(obj => {
            console.log(obj.ship.isSunk());
            if (obj.ship.isSunk()[0] === 'carrier') {
              if (board === leftBoard) {
                leftCarrierImage.classList.add('sunkship');
                leftCarrierLabel.classList.add('sunklabel');
              } else {
                rightCarrierImage.classList.add('sunkship');
                rightCarrierLabel.classList.add('sunklabel');
              }
            } else if (obj.ship.isSunk()[0] === 'battleship') {
              if (board === leftBoard) {
                leftBattleshipImage.classList.add('sunkship');
                leftBattleshipLabel.classList.add('sunklabel');
              } else {
                rightBattleshipImage.classList.add('sunkship');
                rightBattleshipLabel.classList.add('sunklabel');
              }
            } else if (obj.ship.isSunk()[0] === 'cruiser') {
              if (board === leftBoard) {
                leftCruiserImage.classList.add('sunkship');
                leftCruiserLabel.classList.add('sunklabel');
              } else {
                rightCruiserImage.classList.add('sunkship');
                rightCruiserLabel.classList.add('sunklabel');
              }
            } else if (obj.ship.isSunk()[0] === 'submarine') {
              if (board === leftBoard) {
                leftSubmarineImage.classList.add('sunkship');
                leftSubmarineLabel.classList.add('sunklabel');
              } else {
                rightSubmarineImage.classList.add('sunkship');
                rightSubmarineLabel.classList.add('sunklabel');
              }
            } else if (obj.ship.isSunk()[0] === 'destroyer') {
              if (board === leftBoard) {
                leftDestroyerImage.classList.add('sunkship');
                leftDestroyerLabel.classList.add('sunklabel');
              } else {
                rightDestroyerImage.classList.add('sunkship');
                rightDestroyerLabel.classList.add('sunklabel');
              }
            }
          })
          togglePlayerTurn();
        });

        board.appendChild(square);
      }
    }
  };

  let pvpMode = false;
  let player1;
  let player2;
  const visitedArray1 = [];
  const visitedArray2 = [];

  let playerTurn = 'player1';



  const togglePlayerTurn = () => {
    if (pvpMode) {
      if (playerTurn === 'player1') {
        playerTurn = 'player2';
      } else {
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
    };
  };

  const initializePlayers = ( mode ) => { 
    player1 = Player('player1',visitedArray1);
    player2 = Player('player2',visitedArray2);

    if (mode === true) {
      
      leftName.textContent = 'Player 1';
      rightName.textContent = 'Player 2';

    } else {

      leftName.textContent = 'Human';
      rightName.textContent = 'Computer';
    };
  }

  const placeOwnShip = (player, name, direction, x, y) => {
    let myShip = player.board.placeShip(name, direction, x, y);
    for (let i = 0; i < myShip.ship.size; i++) {
      const square = (direction === 'horizontal'
        ? document.getElementById(`${player.name}${x+i}${y}`)
        : document.getElementById(`${player.name}${x}${y+i}`));
      square.classList.add('ownfleet');
    };
  };

  initializePlayers(pvpMode);

  fillBoard(player1, leftBoard, player2);
  fillBoard(player2, rightBoard, player1);

  placeOwnShip(player1, 'carrier', 'horizontal', 0,0);
  placeOwnShip(player1, 'battleship', 'horizontal', 0,1);
  placeOwnShip(player1, 'cruiser', 'horizontal', 0,2);
  placeOwnShip(player1, 'submarine', 'horizontal', 0,3);
  placeOwnShip(player1, 'destroyer', 'horizontal', 0,4);

  placeOwnShip(player2, 'carrier', 'horizontal', 0,0);
  placeOwnShip(player2, 'batteship', 'horizontal', 0,1);
  placeOwnShip(player2, 'cruiser', 'horizontal', 0,2);
  placeOwnShip(player2, 'submarine', 'horizontal', 0,3);
  placeOwnShip(player2, 'destroyer', 'horizontal', 0,4);

};

homeLoad();