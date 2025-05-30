import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CardImage from "./CardImage";

type Card = {
  value: string;
  suit: string;
};

interface PlayerAreaProps {
  hand: Card[];
  onHit: () => void;
  onStand: () => void;
  isRunning: boolean;
  disabled?: boolean;
}

const PlayerArea: React.FC<PlayerAreaProps> = ({ hand, onHit, onStand, isRunning, disabled }) => {
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
        {hand.map((card, idx) => (
          <CardImage key={idx} value={card.value} suit={card.suit} />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        <Button variant="contained" color="primary" size="small" onClick={onHit} disabled={!isRunning || disabled}>
          HIT
        </Button>
        <Button variant="contained" color="primary" size="small" onClick={onStand} disabled={!isRunning || disabled}>
          STAND
        </Button>
      </Box>
    </Box>
  );
};

export default PlayerArea;
