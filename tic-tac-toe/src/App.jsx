import './App.css'
import React, { useState } from "react";
import Board from "./components/Board";
import GameStatus from "./components/GameStatus";

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [winner, setWinner] = useState(null);

    const checkWinner = (board) => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const [a, b, c] of winPatterns) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return board.includes(null) ? null : "Draw";
    };

    const handleMove = (index) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        const gameWinner = checkWinner(newBoard);

        setBoard(newBoard);
        setWinner(gameWinner);
        if (!gameWinner) {
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer("X");
        setWinner(null);
    };

    return (
        <div className="game">
            <h1>Tic-Tac-Toe</h1>
            <GameStatus winner={winner} currentPlayer={currentPlayer} />
            <Board board={board} onMove={handleMove} />
            <button onClick={resetGame}>Restart Game</button>
        </div>
    );
}

export default App;
