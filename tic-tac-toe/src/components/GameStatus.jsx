import React from "react";

function GameStatus({ winner, currentPlayer }) {
    return (
        <h2>
            {winner 
                ? winner === "Draw" 
                ? "It's a Draw!" 
                : `Winner: ${winner}`
                : `Next Player: ${currentPlayer}`}
        </h2>
    );
}

export default GameStatus;
