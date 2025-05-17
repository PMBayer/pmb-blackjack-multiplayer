import { Box, Button, Typography } from "@mui/material";
import React from "react";
import type { Card } from "../logic/BlackjackGame";
import CardImage from "./CardImage";

interface PlayerAreaProps {
  cards: Card[];
  handValue: number; // Wert der Hand als Prop dazu
  onHit: () => void;
  onStand: () => void;
}

const PlayerArea: React.FC<PlayerAreaProps> = ({
  cards,
  handValue,
  onHit,
  onStand,
}) => {
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

      <Typography variant="subtitle1" color="text.secondary" mb={1}>
        Wert: {handValue}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
        {cards.map((card, idx) => (
          <CardImage key={idx} suit={card.suit} value={card.value} />
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={onHit}
        >
          HIT
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={onStand}
        >
          STAND
        </Button>
      </Box>
    </Box>
  );
};

export default PlayerArea;
