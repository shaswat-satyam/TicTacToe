let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let players = ["0", "1", "2"];
let icons = ["-", "O", "X"];

let player = 1;

let buttons = document.getElementsByTagName("button");
let heading = document.getElementById("heading");

display();
players[1] = prompt("Enter the name of the first player");
players[2] = prompt("Enter the name of the second player");
heading.innerText = "Player " + players[player] + "'s move";

function reset() {
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  document.body.style.backgroundColor = "white";
  heading.innerText = "New Game!";
  display();
}

function display() {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      buttons[count].innerText = icons[board[i][j]];
      count++;
    }
  }
}

function horizontalWin(player) {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] == player &&
      board[i][1] == player &&
      board[i][2] == player
    ) {
      return true;
    }
  }
  return false;
}

function verticalWin(player) {
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] == player &&
      board[1][i] == player &&
      board[2][i] == player
    ) {
      return true;
    }
  }
  return false;
}

function diagonalWin(player) {
  return (
    (board[0][0] == player && board[1][1] == player && board[2][2] == player) ||
    (board[2][0] == player && board[1][1] == player && board[0][2] == player)
  );
}
function win(player) {
  return horizontalWin(player) || verticalWin(player) || diagonalWin(player);
}

function tie() {
  for (let i = 0; i < 9; i++) {
    if (board.flat()[i] == 0) {
      return false;
    }
  }
  return true;
}

function set(i, j) {
  if (board[i][j] == 0) {
    board[i][j] = player;

    display();

    if (win(player)) {
      heading.innerText = players[player] + " wins!";
      document.body.style.backgroundColor = "green";
    } else if (tie()) {
      heading.innerText = "Game is Tied";
      document.body.style.backgroundColor = "gray";
    } else {
      if (player == 1) {
        player = 2;
      } else {
        player = 1;
      }
      heading.innerText = "Player " + players[player] + "'s move";
    }
  } else {
    alert("Wrong move");
  }
}
