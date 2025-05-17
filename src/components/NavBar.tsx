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
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import blackjackIcon from "../assets/icon-dark.svg";

const tabs = ["SOLO", "LOCAL MULTIPLAYER"] as const;

export function NavBar() {
  const [tab, setTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
    const label = tabs[newValue];
    if (label === "SOLO") navigate("/solo");
    else if (label === "LOCAL MULTIPLAYER") navigate("/local");
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
    <AppBar
      position="static"
      elevation={1}
      sx={{
        bgcolor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 2, sm: 4 },
          minHeight: 64,
        }}
      >
        {/* Logo + Tabs */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <img
            src={blackjackIcon}
            alt="Blackjack Icon"
            style={{ width: 32, height: 32, opacity: 0.85, cursor: "pointer" }}
            onClick={() => navigate("/")}
          />

          <Tabs
            value={tab}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            sx={{
              ".MuiTabs-flexContainer": {
                gap: 6,
              },
            }}
          >
            {tabs.map((label) => (
              <Tab
                key={label}
                label={
                  <Typography
                    sx={{
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      fontSize: "0.9rem",
                      textTransform: "none",
                    }}
                  >
                    {label}
                  </Typography>
                }
              />
            ))}
          </Tabs>
        </Box>

        {/* User Menu */}
        <Box>
          <IconButton
            onClick={handleMenuOpen}
            size="large"
            aria-label="User account menu"
            aria-controls={anchorEl ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={Boolean(anchorEl) ? "true" : undefined}
            color="primary"
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>

          <Menu
            id="account-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
              sx: {
                mt: 1,
                minWidth: 160,
                boxShadow:
                  "0px 4px 10px rgba(0, 0, 0, 0.1), 0px 0px 20px rgba(0, 0, 0, 0.05)",
                borderRadius: 2,
              },
            }}
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

export default NavBar;
