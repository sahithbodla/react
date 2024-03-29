import React from 'react';
import Square from './Square';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext:true
    }
  }

  // ['O',null,'O',
  //   'X',null,null,
  //   null,'X',null]

  handleBoardClick(i) {
    const squaresCopy = this.state.squares.slice();
    if(calculateWinner(squaresCopy)) {
      return;
    }
    let playerValue = null;

    if(this.state.xIsNext === true){
      playerValue='X'
    } else {
      playerValue='Y'
    }

    squaresCopy[i] = playerValue;
    this.setState({
      squares:squaresCopy,
      xIsNext: !this.state.xIsNext
    })
  }

  renderSquare(i) {
    return (
    <Square 
    value = {this.state.squares[i]}
    handleClick = {() => this.handleBoardClick(i)}
    />);
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;

    if(winner) {
      status = "Winner: " + winner;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'Y'}`
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}