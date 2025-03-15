import './App.css'
import React, { useState } from "react";
import Board from "./components/Board";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const resetGame = () => {
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <Board board={board} />
      <button onClick={resetGame}>Restart Game</button>
    </div>
  );
}

export default App;
