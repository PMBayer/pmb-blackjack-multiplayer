import React from "react";
import { Box, Typography, Button } from "@mui/material";

const PlayerArea: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: 2,
        p: 3,
        boxShadow: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" gutterBottom color="text.primary">
        Spieler 1
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
        <Box
          sx={{
            width: { xs: 60, sm: 80, md: 100 },
            height: 140,
            bgcolor: "grey.100",
            borderRadius: 1,
            boxShadow: 1,
          }}
        />
        <Box
          sx={{
            width: { xs: 60, sm: 80, md: 100 },
            height: 140,
            bgcolor: "grey.100",
            borderRadius: 1,
            boxShadow: 1,
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        <Button variant="contained" color="primary" size="small">
          HIT
        </Button>
        <Button variant="contained" color="primary" size="small">
          STAND
        </Button>
      </Box>
    </Box>
  );
};

export default PlayerArea;
