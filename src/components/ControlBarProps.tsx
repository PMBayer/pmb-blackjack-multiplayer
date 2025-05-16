import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ReplayIcon from "@mui/icons-material/Replay";
import StopIcon from "@mui/icons-material/Stop";
import { Box, IconButton, Stack } from "@mui/material";
import React from "react";

interface ControlBarProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  isRunning: boolean;
}

const ControlBar: React.FC<ControlBarProps> = ({
  onStart,
  onStop,
  onReset,
  isRunning,
}) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        bgcolor: "#f5f5f7",
        borderTop: "1px solid #d1d1d6",
        py: 1,
        display: "flex",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <Stack direction="row" spacing={3}>
        {!isRunning ? (
          <IconButton
            onClick={onStart}
            sx={{
              bgcolor: "#007aff",
              color: "white",
              "&:hover": { bgcolor: "#005bb5" },
              borderRadius: "50%",
              width: 48,
              height: 48,
            }}
            aria-label="Start"
          >
            <PlayArrowIcon fontSize="large" />
          </IconButton>
        ) : (
          <IconButton
            onClick={onStop}
            sx={{
              bgcolor: "#ff3b30",
              color: "white",
              "&:hover": { bgcolor: "#b82a22" },
              borderRadius: "50%",
              width: 48,
              height: 48,
            }}
            aria-label="Stop"
          >
            <StopIcon fontSize="large" />
          </IconButton>
        )}
        <IconButton
          onClick={onReset}
          sx={{
            border: "1.5px solid #8e8e93",
            color: "#8e8e93",
            "&:hover": {
              borderColor: "#636366",
              backgroundColor: "#e5e5ea",
              color: "#636366",
            },
            borderRadius: "50%",
            width: 48,
            height: 48,
          }}
          aria-label="Reset"
        >
          <ReplayIcon fontSize="large" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default ControlBar;
