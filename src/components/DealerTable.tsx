import { Box, Typography } from "@mui/material";
import { Card } from "../game/BlackjackGame";
import CardImage from "./CardImage";

interface DealerTableProps {
  gameStarted: boolean;
  cards: Card[];
}

function DealerTable({ gameStarted, cards }: DealerTableProps) {
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
        Dealer
      </Typography>

      {gameStarted && (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {cards.map((card, idx) => (
            <CardImage key={idx} suit={card.suit} value={card.value} />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default DealerTable;
