"use strict";
var gBoard = [];
var gtimerInterval = 0;
var numCompare = 1;

function init(numCells) {
  gBoard = createBoard(+numCells);
  renderBoard(gBoard);

  var timer = document.querySelector(".time");
  timer.innerText = "";
}

function createBoard(numCells) {
  var board = [];
  for (var i = 0; i < numCells; i++) {
    board[i] = i + 1;
  }

  var shuffledBoard = board.sort((a, b) => 0.5 - Math.random());

  return shuffledBoard;
}

function renderBoard(board) {
  var elTable = document.querySelector("table");
  var rowCount = Math.sqrt(board.length);
  var colCount = Math.sqrt(board.length);

  var strHTML = "";
  for (var i = 0; i < rowCount; i++) {
    strHTML += `\n<tr>\n`;

    for (var j = 0; j < colCount; j++) {
      strHTML += `<td onclick="cellClicked(this)">${board.pop()}</td>\n`;
    }

    strHTML += `</tr>\n`;
  }

  elTable.innerHTML = strHTML;
}

function cellClicked(clickedNum) {
  var elTd = document.querySelectorAll("td");

  if (+clickedNum.innerHTML === 1) showTimer();

  if (+clickedNum.innerHTML === numCompare) {
    clickedNum.style.backgroundColor = "orange";
    numCompare++;
  } else return;

  if (+clickedNum.innerHTML === elTd.length) clearInterval(gtimerInterval);
}

function showTimer() {
  var timer = document.querySelector(".time");
  var start = Date.now();

  gtimerInterval = setInterval(function () {
    timer.innerText = `Timer:\n ${(Date.now() - start) / 1000}`;
  }, 100);
}
