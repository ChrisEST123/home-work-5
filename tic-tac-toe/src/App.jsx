import './App.css'
import React, { useState } from "react";
import Board from "./components/Board";
import GameStatus from "./components/GameStatus";

function App() {
    const [history, setHistory] = useState([{ board: Array(9).fill(null), moveLocation: null }]);
    const [currentMove, setCurrentMove] = useState(0);
    const [isAscending, setIsAscending] = useState(true);

    const currentBoard = history[currentMove].board;
    const currentPlayer = currentMove % 2 === 0 ? "X" : "O";
    const winnerInfo = checkWinner(currentBoard);
    const winner = winnerInfo?.winner;
    const winningSquares = winnerInfo?.winningSquares;

    function handleMove(index) {
        if (currentBoard[index] || winner) return;

        const newBoard = [...currentBoard];
        newBoard[index] = currentPlayer;
        
        const newHistory = history.slice(0, currentMove + 1);
        setHistory([...newHistory, { board: newBoard, moveLocation: getMoveLocation(index) }]);
        setCurrentMove(newHistory.length);
    }

    function jumpTo(move) {
        setCurrentMove(move);
    }

    function resetGame() {
        setHistory([{ board: Array(9).fill(null), moveLocation: null }]);
        setCurrentMove(0);
    }

    function toggleSort() {
        setIsAscending(!isAscending);
    }

    return (
        <div className="game">
            <h1>Tic-Tac-Toe</h1>
            <GameStatus winner={winner} currentPlayer={currentPlayer} />
            <Board board={currentBoard} onMove={handleMove} winningSquares={winningSquares} />
            
            <button onClick={resetGame}>Restart Game</button>
            <button onClick={toggleSort}>Sort Moves: {isAscending ? "Ascending" : "Descending"}</button>

            <ol>
                {(isAscending ? history : [...history].reverse()).map((step, move) => {
                    const moveText = move === 0 
                        ? "Go to game start" 
                        : move === currentMove 
                            ? `You are at move #${move}` 
                            : `Go to move #${move} (${step.moveLocation})`;

                    return (
                        <li key={move}>
                            {move === currentMove ? (
                                <span>{moveText}</span>
                            ) : (
                                <button onClick={() => jumpTo(move)}>{moveText}</button>
                            )}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

function checkWinner(board) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const [a, b, c] of winPatterns) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return { winner: board[a], winningSquares: [a, b, c] };
        }
    }

    return board.includes(null) ? null : { winner: "Draw", winningSquares: [] };
}

function getMoveLocation(index) {
    const row = Math.floor(index / 3) + 1;
    const col = (index % 3) + 1;
    return `(${row}, ${col})`;
}

export default App;
