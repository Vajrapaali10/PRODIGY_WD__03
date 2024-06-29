// Variables to keep track of game state
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

// Array of winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Function to handle user clicks on squares
function handleClick(squareIndex) {
  if (gameActive && board[squareIndex] === "") {
    board[squareIndex] = currentPlayer;
    renderBoard();
    if (checkWinner(currentPlayer)) {
      document.getElementById("message").innerText = `${currentPlayer} wins!`;
      gameActive = false;
    } else if (isBoardFull()) {
      document.getElementById("message").innerText = `It's a draw!`;
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

// Function to check for a winner
function checkWinner(player) {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return board[index] === player;
    });
  });
}

// Function to check if the board is full
function isBoardFull() {
  return board.every((square) => square !== "");
}

// Function to render the board
function renderBoard() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square, index) => {
    square.innerText = board[index];
  });
}

// Function to reset the game
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  document.getElementById("message").innerText = "";
  renderBoard();
}

// Initialize the game
renderBoard();
