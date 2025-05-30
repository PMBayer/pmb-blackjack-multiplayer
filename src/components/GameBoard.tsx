import { Box, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useBlackjackReducer } from "../hooks/useBlackjackReducer";
import ControlBar from "./ControlBar";
import DealerTable from "./DealerTable";
import GameResultMessage from "./GameResultMessage";
import PlayerArea from "./PlayerArea";

export default function GameBoard() {
  const theme = useTheme();
  const [showResult, setShowResult] = useState(false);
  const [gameStarted, setGameStarted] = useState(true);
  const numPlayers = 2; // Example: support 2 players for now
  const {
    state,
    resetGame,
    hit,
    stand,
    nextPlayer,
  } = useBlackjackReducer(numPlayers);

  const { players, dealer, winner, currentPlayerIndex, gameOver } = state;
  const currentPlayer = players[currentPlayerIndex];
  const isRunning = !winner && gameStarted && !gameOver;

  // Show result message when winner is set
  React.useEffect(() => {
    if (winner) setShowResult(true);
  }, [winner]);

  const handleReset = () => {
    resetGame();
    setShowResult(false);
    setGameStarted(true);
  };

  const handleStart = () => {
    resetGame();
    setShowResult(false);
    setGameStarted(true);
  };

  const handleStop = () => {
    if (!winner && gameStarted) {
      stand();
      nextPlayer();
    }
    setGameStarted(false);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
          padding: 2,
          pb: 8,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <DealerTable
            hand={dealer.hand}
            gameStarted={gameStarted}
            hideHoleCard={isRunning}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {/* Render all players */}
          {players.map((player, idx) => (
            <PlayerArea
              key={player.id}
              hand={player.hand}
              name={player.name}
              onHit={hit}
              onStand={() => { stand(); nextPlayer(); }}
              isRunning={isRunning && currentPlayerIndex === idx}
              disabled={currentPlayerIndex !== idx || gameOver}
            />
          ))}
        </Box>
      </Box>
      <ControlBar
        isRunning={isRunning}
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
        onHint={() => {}}
        hintText={"Try to get as close to 21 as possible without busting!"}
      />
      <GameResultMessage
        open={showResult}
        result={winner === "player" ? "win" : winner === "dealer" ? "lose" : "draw"}
        onClose={() => setShowResult(false)}
      />
    </>
  );
}
