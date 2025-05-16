import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";

export default function NavBar() {
  const [mode, setMode] = useState("solo");
  const [username, setUsername] = useState("");

  const handleModeChange = (event: React.SyntheticEvent, newValue: string) => {
    setMode(newValue);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: "white", mr: 2 }}>
          Blackjack
        </Typography>
        <Tabs
          value={mode}
          onChange={handleModeChange}
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab label="Solo" value="solo" sx={{ color: "white" }} />
          <Tab
            label="Local Multiplayer"
            value="local"
            sx={{ color: "white" }}
          />
        </Tabs>
        <TextField
          label="Username"
          variant="outlined"
          size="small"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ ml: 3, backgroundColor: "white", borderRadius: 1 }}
        />
      </Toolbar>
    </AppBar>
  );
}
