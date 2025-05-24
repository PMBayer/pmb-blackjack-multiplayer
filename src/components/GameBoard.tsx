import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import ControlBar from "./ControlBar";
import DealerTable from "./DealerTable";
import PlayerArea from "./PlayerArea";
import useBlackjackGame from "../hooks/UseBlackjackGame";
import GameResultMessage from "./GameResultMessage";

export default function GameBoard() {
  const theme = useTheme();
  const [showResult, setShowResult] = useState(false);
  const [gameStarted, setGameStarted] = useState(true); // Start with a game, or set to false for explicit start
  const {
    playerHand,
    dealerHand,
    winner,
    hit,
    stand,
    reset,
  } = useBlackjackGame(6); // Use 6 decks for a more realistic game

  const isRunning = winner === null && gameStarted;

  // Show result message when winner is set
  React.useEffect(() => {
    if (winner) setShowResult(true);
  }, [winner]);

  const handleReset = () => {
    reset();
    setShowResult(false);
    setGameStarted(true);
  };

  const handleStart = () => {
    reset();
    setShowResult(false);
    setGameStarted(true);
  };

  const handleStop = () => {
    if (!winner && gameStarted) {
      stand();
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
            hand={dealerHand}
            gameStarted={gameStarted}
            hideHoleCard={isRunning}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <PlayerArea
            hand={playerHand}
            onHit={hit}
            onStand={stand}
            isRunning={isRunning}
            disabled={!isRunning}
          />
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
