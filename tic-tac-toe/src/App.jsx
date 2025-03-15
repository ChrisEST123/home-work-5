import './App.css'
import React, { useState } from "react";
import Board from "./components/Board";

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");

    const handleMove = (index) => {
        if (board[index]) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;

        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer("X");
    };

    return (
        <div className="game">
            <h1>Tic-Tac-Toe</h1>
            <Board board={board} onMove={handleMove} />
            <button onClick={resetGame}>Restart Game</button>
        </div>
    );
}

export default App;
