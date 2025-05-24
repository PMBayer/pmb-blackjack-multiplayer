import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import { Box, Divider, Fade, IconButton, Stack, Tooltip } from "@mui/material";

interface ControlBarProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onHint: () => void;
  isRunning: boolean;
  hintText: string;
}

export default function ControlBar({
  onStart,
  onStop,
  onReset,
  onHint,
  isRunning,
  hintText,
}: ControlBarProps) {
  return (
    <Fade in timeout={400}>
      <Box
        sx={{
          position: "fixed",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          bgcolor: "background.paper",
          borderRadius: 32,
          px: 3,
          py: 1.5,
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          zIndex: 1300,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          divider={<Divider orientation="vertical" flexItem />}
        >
          {!isRunning ? (
            <Tooltip title="Start" arrow>
              <IconButton
                onClick={onStart}
                sx={{
                  color: "#007aff",
                  width: 56,
                  height: 56,
                  borderRadius: 28,
                }}
              >
                <PlayArrowRoundedIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Stop" arrow>
              <IconButton
                onClick={onStop}
                sx={{
                  color: "#ff3b30",
                  width: 56,
                  height: 56,
                  borderRadius: 28,
                }}
              >
                <StopRoundedIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title="Reset" arrow>
            <IconButton
              onClick={onReset}
              sx={{
                color: "#222",
                width: 48,
                height: 48,
                borderRadius: 24,
              }}
            >
              <ReplayRoundedIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
          <Tooltip title={hintText} arrow>
            <IconButton
              onClick={onHint}
              sx={{
                color: "#888",
                width: 48,
                height: 48,
                borderRadius: 24,
              }}
            >
              <LightbulbOutlinedIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
    </Fade>
  );
}
