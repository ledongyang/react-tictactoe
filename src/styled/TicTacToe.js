import React from 'react';
import {Layer, Line, Text} from 'react-konva';

export const Squares = ({
  coordinates,
  gameState,
  win,
  gameOver,
  yourTurn,
  ownMark,
  unit,
  move
}) => {
  let squares = coordinates.map((position, index) => {
    let makeMove = move;
    let mark = gameState[index];
    let fill = 'black';
    if (win && win.includes(index)) {
      fill = 'lightgreen';
    }
    if (gameOver || !yourTurn || mark) {
      makeMove = () => console.log('Nope!')
    }
    return <Text
            key={index}
            index={index}
            x={position[0]}
            y={position[1]}
            fontSize={unit}
            width={unit}
            fill={fill}
            text={mark}
            fontFamily={'Helvetica'}
            align={'center'}
            onClick={(event) => {
              makeMove(event.target.index, ownMark);
            }}
           />
  })
  return (
    <Layer>
      {squares}
    </Layer>
  );
}

export const Board = ({size, rows, unit}) => {
  let grid = [];
  let stroke = 'grey';
  let strokeWidth = 10;
  for (let i = 1; i < rows; i += 1) {
    let position = unit * i;
    // vertical line
    grid.push(
      <Line
        points={[position, 0, position, size]}
        stroke={stroke}
        strokeWidth={strokeWidth}
        key={i+'v'}
      />
    );
    // horizontal line
    grid.push(
      <Line
        points={[0, position, size, position]}
        stroke={stroke}
        strokeWidth={strokeWidth}
        key={i+'h'}
      />
    );
  }

  return (
    <Layer>
      {grid}
    </Layer>
  );
}
