import React, {Component} from 'react';
import {Stage} from 'react-konva';
import {Board, Squares} from '../styled/TicTacToe';

class TicTacToe extends Component {
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
    console.log('Move made', marker, index);
  }

  makeAiMove = () => {

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
