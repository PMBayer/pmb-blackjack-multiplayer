import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { AppBar, Box, IconButton, Tab, Tabs, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tabs = ["SOLO", "LOCAL MULTIPLAYER"] as const;

export function NavBar() {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
    const label = tabs[newValue];
    if (label === "SOLO") navigate("/solo");
    else if (label === "LOCAL MULTIPLAYER") navigate("/local");
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: theme.palette.background.paper,
        borderBottom: `1px solid #f0f0f5`,
        boxShadow: "none",
        px: { xs: 1, sm: 2 },
      }}
    >
      <Toolbar sx={{ minHeight: 64, px: 0, justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src="/assets/icon.png" alt="Logo" style={{ height: 36, borderRadius: 8 }} />
          <Box sx={{ fontWeight: 700, fontSize: 22, letterSpacing: -1, color: "#222", ml: 1 }}>
            Blackjack
          </Box>
        </Box>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          sx={{
            minHeight: 0,
            ".MuiTabs-indicator": { height: 3, borderRadius: 2 },
            ".MuiTab-root": {
              fontWeight: 500,
              fontSize: 16,
              minWidth: 120,
              px: 2,
              textTransform: "none",
              color: "#888",
              '&.Mui-selected': { color: theme.palette.primary.main },
            },
          }}
        >
          <Tab label="Solo" />
          <Tab label="Local" />
        </Tabs>
        <IconButton
          onClick={() => navigate("/info")}
          sx={{ ml: 2, color: theme.palette.text.secondary, borderRadius: 12 }}
        >
          <InfoOutlinedIcon fontSize="medium" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
