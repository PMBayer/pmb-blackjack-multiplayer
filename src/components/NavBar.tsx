import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import blackjackIcon from "../assets/icon.png";

export default function NavBar() {
  const [tab, setTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const tabs = ["SOLO", "LOCAL MULTIPLAYER"];

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);

    const label = tabs[newValue];
    if (label === "SOLO") {
      navigate("/solo");
    } else if (label === "LOCAL MULTIPLAYER") {
      navigate("/local");
    }
    // Optional: Trigger game mode change logic here
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigateToInfo = () => {
    handleMenuClose();
    navigate("/info");
  };

  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <img
            src={blackjackIcon}
            alt="Cards Icon"
            style={{ width: 28, height: 28, opacity: 0.7 }}
          />

          <Tabs
            value={tab}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="secondary"
          >
            {tabs.map((label) => (
              <Tab key={label} label={label} />
            ))}
          </Tabs>
        </Box>

        <Box>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleMenuClose}>User Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Statistics</MenuItem>
            <MenuItem onClick={handleNavigateToInfo}>Info</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
