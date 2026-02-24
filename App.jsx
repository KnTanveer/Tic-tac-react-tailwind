import { useState } from 'react';
import { GridButton } from './Components/GridButton'
import './App.css'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return
    const nextSquares = squares.slice();


    if (isNext) {
      nextSquares[i] = 'O';
    } else {
      nextSquares[i] = 'X';
    }

    setSquares(nextSquares);
    setIsNext(!isNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (isNext ? 'O' : 'X');
  }

  function resetBoard() {
    const emptySquares = Array(9).fill(null);
    setSquares(emptySquares);
    setIsNext(false);
  }
  
  return (
    <>
      <div className='flex flex-col justify-center items-center h-[100vh]'>

        <div className='status mb-[4px]'>{status}</div>
        <div className='grid grid-cols-3'>
          <GridButton value={squares[0]} onSquareClick={() => { handleClick(0) }} />
          <GridButton value={squares[1]} onSquareClick={() => { handleClick(1) }} />
          <GridButton value={squares[2]} onSquareClick={() => { handleClick(2) }} />
          <GridButton value={squares[3]} onSquareClick={() => { handleClick(3) }} />
          <GridButton value={squares[4]} onSquareClick={() => { handleClick(4) }} />
          <GridButton value={squares[5]} onSquareClick={() => { handleClick(5) }} />
          <GridButton value={squares[6]} onSquareClick={() => { handleClick(6) }} />
          <GridButton value={squares[7]} onSquareClick={() => { handleClick(7) }} />
          <GridButton value={squares[8]} onSquareClick={() => { handleClick(8) }} />
        </div>
        <button onClick={resetBoard} className="bg-transparent border rounded-[8px] mt-[10px] cursor-pointer">Reset</button>
      </div>
    </>
  )
 
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a]
      }
    };
    return null;
  }
}

export default App
