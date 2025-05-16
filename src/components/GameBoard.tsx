import React from "react";
import { Box, Grid } from "@mui/material";
import DealerTable from "./DealerTable";
import PlayerArea from "./PlayerArea";

const GameBoard: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "calc(100vh - 64px)",
        p: 3,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <DealerTable />
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <PlayerArea />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GameBoard;
