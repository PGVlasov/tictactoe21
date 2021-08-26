import React from "react";
import { useEffect, useState } from "react";
import _ from "lodash";
import "./Field1.css";

function generateInitialBoard() {
  const rows = [];

  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let i = 0; i < 10; i++) {
      row.push(null);
    }

    rows.push(row);
  }

  return rows;
}

function move(step, board, row, column) {
  const newBoard = _.cloneDeep(board);
  newBoard[row][column] = step;

  return newBoard;
}

function checkWinner(step, board, lastRow, lastColumn) {
  let winner = "winner";
  const winnerCellNumber = 5;
  const boardSize = board[0].length;

  return (
    checkWinnerLeftToRight(
      step,
      board,
      winnerCellNumber,
      lastRow,
      lastColumn
    ) ||
    topToBottom(step, board, winnerCellNumber, lastRow, lastColumn) ||
    leftBottomRightTop(step, board, winnerCellNumber, lastRow, lastColumn) ||
    leftTopRightBottom(step, board, winnerCellNumber, lastRow, lastColumn)
  );
}

function checkWinnerLeftToRight(
  step,
  board,
  winnerCellNumber,
  lastRow,
  lastColumn,
  boardSize
) {
  const leftBorder =
    lastColumn - winnerCellNumber < 0 ? 0 : lastColumn - winnerCellNumber + 1;

  const rightBorder =
    lastColumn + winnerCellNumber > boardSize
      ? boardSize
      : lastColumn + winnerCellNumber - 1;

  const row = board[lastRow];
  //console.log(row);
  let numberOfSameCellRight = 1;
  for (let i = leftBorder; i < rightBorder; i++) {
    if (row[i] === step) {
      numberOfSameCellRight += 1;
    } else {
      numberOfSameCellRight += 0;
    }
    if (numberOfSameCellRight === winnerCellNumber) {
      return console.log(`${step} is winner`);
    }
  }
  let numberOfSameCellLeft = 1;
  for (let j = rightBorder; j > leftBorder; j--) {
    if (row[j] === step) {
      numberOfSameCellLeft += 1;
    } else {
      numberOfSameCellLeft += 0;
    }
    if (numberOfSameCellLeft === winnerCellNumber) {
      return console.log(`${step} is winner`);
    }
  }
}
// const hasWinner = checkWinnerLeftToRight(
//   step,
//   board,
//   winnerCellNumber,
//   lastRow,
//   lastColumn
// );
//   console.log("Has winner?", hasWinner);
function topToBottom(
  step,
  board,
  winnerCellNumber,
  lastRow,
  lastColumn,
  boardSize
) {
  const topBorder =
    lastRow - winnerCellNumber < 0 ? 0 : lastRow - winnerCellNumber + 1;
  const buttomBorder =
    lastRow + winnerCellNumber > boardSize
      ? boardSize
      : lastRow + winnerCellNumber - 1;

  let arr = [];

  for (let i = 0; i < board.length; i++) {
    arr.push(board[i][lastColumn]);
  }
  let col = Array.from(arr);
  let numberOfSameCellTop = 1;
  for (let k = topBorder; k < buttomBorder; k++) {
    if (col[k] === step) {
      numberOfSameCellTop += 1;
    } else {
      numberOfSameCellTop += 0;
    }
    if (numberOfSameCellTop === winnerCellNumber) {
      return console.log(`${step} is winner`);
    }
  }
  let numberOfSameCellButtom = 1;
  for (let j = buttomBorder; j > topBorder; j--) {
    if (col[j] === step) {
      numberOfSameCellButtom += 1;
    } else {
      numberOfSameCellButtom += 0;
    }
    if (numberOfSameCellButtom === winnerCellNumber) {
      return console.log(`${step} is winner`);
    }
  }
}

function leftBottomRightTop(
  step,
  board,
  winnerCellNumber,
  lastRow,
  lastColumn,
  boardSize
) {
  const leftStartRow = lastRow - (winnerCellNumber + 1);
  const leftStartRowProcessed = leftStartRow < 0 ? 0 : leftStartRow;

  const rightStartRow = lastRow - (winnerCellNumber + 1);
  const rightStartRowProcessed = rightStartRow < -2 ? 0 : rightStartRow;

  //const row = board[lastRow];
}
function leftTopRightBottom(
  step,
  board,
  winnerCellNumber,
  lastRow,
  lastColumn,
  boardSize
) {
  const leftStartRow = lastRow - (winnerCellNumber + 1);
  const leftStartRowProcessed = leftStartRow < 0 ? 0 : leftStartRow;
  //console.log(leftStartRowProcessed);
  const rightStartRow = lastRow + (winnerCellNumber - 1);
  const rightStartRowProcessed =
    rightStartRow > boardSize ? boardSize : rightStartRow;
  const topBorder =
    lastRow - winnerCellNumber < 0 ? 0 : lastRow - winnerCellNumber + 1;
  const buttomBorder =
    lastRow + winnerCellNumber > boardSize
      ? boardSize
      : lastRow + winnerCellNumber - 1;
  const row = board[lastRow];
  let newBoard = _.cloneDeep(board);
  let arr = Array.from(newBoard);
  //   for (let i = 0; i < board.length; i++) {
  //     arr.push(board[i][lastColumn]);
  //   }
  //   let col = Array.from(arr);

  let numberOfSameCell = 0;

  //   for (let j = leftStartRowProcessed; j < rightStartRowProcessed; j++) {
  //     if (row[j - 1] === step && col[j - 1] === step) {
  //       console.log("YESSSSS");
  //     }
  let col = [];
  for (let i = 0; i < board.length; i++) {
    console.log(arr);
    console.log(arr[i]);
    break;

    //   if (col[j - 1] === step && col[j - 1] === step) {
    //     console.log("YESSSSS");
    //     console.log(col[j]);
    //     console.log(col[j - 1]);
    //   }
  }
  console.log(col);
  console.log(arr[1]);
  console.log(arr[1][2]);
}

function Game() {
  const [board, setBoard] = useState(generateInitialBoard());
  const [step, setStep] = useState("X");

  return (
    <div className="App">
      <div className="board">
        {board.map((row, rowIndex) => {
          return (
            <div className="row">
              {row.map((xOrO, columnInd) => (
                <div
                  className="cell"
                  onClick={() => {
                    console.log(`Row: ${rowIndex}, Column: ${columnInd}`);

                    const newBoard = move(step, board, rowIndex, columnInd);
                    console.log(`Board after move:`, newBoard);
                    //  console.log("Winner? ${}");
                    const hasWinner = checkWinner(
                      step,
                      board,
                      rowIndex,
                      columnInd
                    );
                    if (hasWinner) {
                      // setWinner(...)
                    }

                    setBoard(newBoard);
                    setStep(step === "X" ? "O" : "X");
                  }}
                >
                  {xOrO}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Game;
