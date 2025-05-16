import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Card } from "../game/BlackjackGame";
import CardImage from "./CardImage";

interface PlayerAreaProps {
  cards: Card[];
  onHit: () => void;
  onStand: () => void;
}

const PlayerArea: React.FC<PlayerAreaProps> = ({ cards, onHit, onStand }) => {
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
