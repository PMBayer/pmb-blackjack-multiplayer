import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

interface NavBarProps {
  gameMode: string;
  setGameMode: (mode: string) => void;
  username: string;
  setUsername: (name: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({
  gameMode,
  setGameMode,
  username,
  setUsername,
}) => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          Blackjack
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Select
            value={gameMode}
            onChange={(e) => setGameMode(e.target.value)}
            size="small"
            sx={{ bgcolor: "background.paper", borderRadius: 1, minWidth: 120 }}
          >
            <MenuItem value="solo">Solo</MenuItem>
            <MenuItem value="local">Local Multiplayer</MenuItem>
          </Select>

          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            size="small"
            placeholder="Username"
            sx={{ bgcolor: "background.paper", borderRadius: 1, width: 150 }}
            inputProps={{ style: { color: "text.primary" } }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
