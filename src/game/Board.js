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
    // squaresCopy[i] = 'X';
    let playerValue = null;

    if(this.state.xIsNext === true){
      playerValue='X'
    } else {
      playerValue='Y'
    }
    
    squaresCopy[i] = playerValue;
    // squaresCopy[i] = this.state.xIsNext ? 'X' : 'Y';
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
    const status = 'Next player: X';

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