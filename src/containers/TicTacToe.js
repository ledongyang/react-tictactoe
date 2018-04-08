import React, {Component} from 'react';
import {Stage} from 'react-konva';
import {Board, Squares} from '../styled/TicTacToe';

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.winCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  }

  state ={
    rows: 3,
    gameState: new Array(9).fill(false),
    ownMark: 'X',
    otherMark: 'O',
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false
  }

  componentWillMount() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let size = (height < width) ? height * 0.8 : width * 0.8;
    let rows = this.state.rows;
    let unit = size / rows;
    let coordinates = [];
    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < rows; x += 1) {
        coordinates.push([unit * x, unit * y]);
      }
    }
    this.setState({
      size,
      rows,
      unit,
      coordinates
    });
  }

  move = (index, marker) => {
    this.setState((prevState, prop) => {
      let {gameState, yourTurn, gameOver, winner} = prevState;
      yourTurn = !yourTurn;
      gameState[index] = marker;
      let foundWin = this.checkWin(gameState);
      if (foundWin) {
        winner = gameState[foundWin[0]];
      }
      if (foundWin || !gameState.includes(false)) {
        gameOver = true;
      }
      return {
        gameState,
        yourTurn,
        gameOver,
        winner,
        win: foundWin || false
      }
    });
    let {yourTurn, gameOver, gameState} = this.state;
    if (!yourTurn && !gameOver) {
      setTimeout(() => {
        this.makeAiMove(gameState);
      }, 1000);
    }
  }

  makeAiMove = (gameState) => {
    let otherMark = this.state.otherMark;
    let openSquares = [];
    gameState.forEach((square, index) => {
      if (!square) {
        openSquares.push(index);
      }
    });
    let aiMove = openSquares[this.random(0, openSquares.length)];
    this.move(aiMove, otherMark);
  }

  random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  checkWin = (gameState) => {
    let winCombos = this.winCombos;
    return winCombos.find((winCombo) => {
      let [a, b, c] = winCombo;
      return (gameState[a] === gameState[b] && gameState[a] === gameState[c] && gameState[a]);
    });
  }

  turningTest = () => {

  }

  recordGame = () => {

  }

  render() {
    let {size} = this.state;
    return (
      <div>
        <Stage
          width={size}
          height={size}
        >
          <Board {...this.state}/>
          <Squares {...this.state} move={this.move}/>
        </Stage>
      </div>
    );
  }
}

export default TicTacToe;
