import React from "react";
import Square from "./Square";

function Board({ board, onMove, winningSquares }) {
    return (
        <div className="board">
            {Array.from({ length: 3 }, (_, row) => (
                <div key={row} className="board-row">
                    {Array.from({ length: 3 }, (_, col) => {
                        const index = row * 3 + col;
                        return (
                            <Square
                                key={index}
                                value={board[index]}
                                onClick={() => onMove(index)}
                                isWinningSquare={winningSquares?.includes(index)}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default Board;
