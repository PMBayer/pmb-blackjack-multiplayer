import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import ControlBar from "./ControlBar";
import DealerTable from "./DealerTable";
import PlayerArea from "./PlayerArea";

export default function GameBoard() {
  const theme = useTheme();

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
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
          padding: 2,
          pb: 8,
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
