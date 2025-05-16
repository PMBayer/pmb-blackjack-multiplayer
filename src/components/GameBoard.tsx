import { Box } from "@mui/material";
import { useState } from "react";
import ControlBar from "./ControlBar"; // Pfad anpassen
import DealerTable from "./DealerTable";
import PlayerArea from "./PlayerArea";

export default function GameBoard() {
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    // Hier ggf. Spiel-Reset-Logik ergänzen
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          padding: 2,
          pb: 8 /* Platz für ControlBar */,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <DealerTable />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <PlayerArea />
        </Box>
      </Box>
      <ControlBar
        isRunning={isRunning}
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
      />
    </>
  );
}
