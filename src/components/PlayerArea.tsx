import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CardImage from "./CardImage";

type Card = {
  value: string;
  suit: string;
};

interface PlayerAreaProps {
  hand: Card[];
  name: string;
  onHit: () => void;
  onStand: () => void;
  isRunning: boolean;
  disabled?: boolean;
}

const PlayerArea: React.FC<PlayerAreaProps> = ({ hand, name, onHit, onStand, isRunning, disabled }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: 2,
        p: 3,
        boxShadow: 3,
        textAlign: "center",
        width: { xs: '100%', sm: 350 },
        m: { xs: 1, sm: 2 },
      }}
    >
      <Typography variant="h6" gutterBottom color="text.primary">
        {name}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: "center", gap: 2, mb: 2 }}>
        {hand.map((card, idx) => (
          <CardImage key={idx} value={card.value} suit={card.suit} />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={onHit}
          disabled={!isRunning || disabled}
          aria-label={`Hit for ${name}`}
        >
          HIT
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={onStand}
          disabled={!isRunning || disabled}
          aria-label={`Stand for ${name}`}
        >
          STAND
        </Button>
      </Box>
    </Box>
  );
};

export default PlayerArea;
