import React from "react";
import Square from "./Square";

function Board({ board, onMove }) {
  return (
    <div className="board">
        {
            board.map((value, index) => (
                <Square key={index} value={value} onClick={() => onMove(index)} />
            ))
        }
    </div>
  );
}

export default Board;
