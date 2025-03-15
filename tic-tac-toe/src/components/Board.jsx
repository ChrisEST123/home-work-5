import React from "react";

function Board({ board }) {
  return (
    <div className="board">
      {board.map((value) => (
        <button className="square">
            {value}
        </button>
      ))}
    </div>
  );
}

export default Board;
