import { Box } from "@mui/material";
import { useBlackjackGame } from "../hooks/useBlackjackGame";
import ControlBar from "./ControlBar";
import DealerTable from "./DealerTable";
import PlayerArea from "./PlayerArea";

export default function GameBoard() {
  const { isRunning, startGame, reset, hit, stand, playerHand, dealerHand } =
    useBlackjackGame();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          padding: 2,
          pb: 8,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <DealerTable gameStarted={isRunning} cards={dealerHand} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <PlayerArea cards={playerHand} onHit={hit} onStand={stand} />
        </Box>
      </Box>
      <ControlBar
        isRunning={isRunning}
        onStart={startGame}
        onStop={stand}
        onReset={reset}
        onHint={() => alert("Noch kein Hint-Feature 😅")}
        hintText="Zieh eine weitere Karte oder bleibe stehen"
      />
    </>
  );
}
