import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import "./style.css";
import waves from "./images/waves.jpg"


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
const leftBoard = document.createElement('div');
const rightBoard = document.createElement('div');
const rightShipTray = document.createElement('div');
const footContainer = document.createElement('div');
const footer = document.createElement('div');
const wavesImage = new Image();
wavesImage.src = waves;

header.classList.add('header');
headContainer.classList.add('headcontainer');
title.classList.add('title');
main.classList.add('main');
nameContainer.classList.add('namecontainer');
leftName.classList.add('name');
rightName.classList.add('name');
boardContainer.classList.add('boardcontainer');
leftShipTray.classList.add('shiptray');
rightShipTray.classList.add('shiptray');
leftBoard.classList.add('board', 'human');
leftBoard.classList.add('humanboard');
rightBoard.classList.add('board', 'computer');
footContainer.classList.add('footcontainer');
footer.classList.add('footer');

title.textContent = 'Battleship';
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
boardContainer.appendChild(leftBoard);
boardContainer.appendChild(rightBoard);

leftBoard.style.backgroundImage = `url(${waves})`;
leftBoard.style.backgroundSize = 'cover';
rightBoard.style.backgroundImage = `url(${waves})`;
rightBoard.style.backgroundSize = 'cover';

boardContainer.appendChild(rightShipTray);
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

      square.setAttribute('id', `${player.name}${i}${j}`);
      square.classList.add('square');

      if (!pvpMode) {
        if (player.name === 'player2')  {
          square.classList.add('fogofwar');
        }
      }

      square.addEventListener('click', () => {
        if (enemy.attack(player.board, i, j)) {
          hitSquare(square);
        } else {
          missSquare(square);
        };
        square.classList.remove('fogofwar');
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

let playerTurn = player1;

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
    }
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

initializePlayers(pvpMode);

player1.board.placeShip(5, 'horizontal', 0,0);
player1.board.placeShip(4, 'horizontal', 0,1);
player1.board.placeShip(3, 'horizontal', 0,2);
player1.board.placeShip(2, 'horizontal', 0,3);
player1.board.placeShip(1, 'horizontal', 0,4);

player2.board.placeShip(5, 'horizontal', 0,0);
player2.board.placeShip(4, 'horizontal', 0,1);
player2.board.placeShip(3, 'horizontal', 0,2);
player2.board.placeShip(2, 'horizontal', 0,3);
player2.board.placeShip(1, 'horizontal', 0,4);

fillBoard(player1, leftBoard, player2);
fillBoard(player2, rightBoard, player1);

