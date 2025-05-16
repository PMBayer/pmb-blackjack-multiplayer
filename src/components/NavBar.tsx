import React from "react";
import {
  AppBar,
  Typography,
  Menu,
  MenuItem,
  TextField,
  Box,
  Toolbar,
  Select,
} from "@mui/material";

function NavBar() {
  const [mode, setMode] = React.useState("solo");
  const [name, setName] = React.useState("");

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Blackjack
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            size="small"
            variant="outlined"
            sx={{ backgroundColor: "white" }}
          >
            <MenuItem value="Solo">Solo</MenuItem>
            <MenuItem value="local">Multiplayer</MenuItem>
          </Select>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="small"
            variant="outlined"
            placeholder="Username"
            sx={{ backgroundColor: "white" }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
