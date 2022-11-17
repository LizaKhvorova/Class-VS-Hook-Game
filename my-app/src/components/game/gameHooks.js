import React, { useState} from 'react';
import "./game.css";
import {calculateWinner} from './utils';

function Square(props) {
  return(
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}


function Board (props) {

  function renderSquare(i) {
    return (
      <Square 
        value={props.squares[i]} 
        onClick={() => props.onClick(i)}
      />
    );
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export function GameHook(props) {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    }
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(history.concat([
        {
          squares: squares
        }
      ]));
    setStepNumber(history.length);
    setXIsNext(!xIsNext);
  };

  function jumpTo(step) {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ?
      "Перейти к ходу №" + move :
      "К началу игры";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return(
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )

}
