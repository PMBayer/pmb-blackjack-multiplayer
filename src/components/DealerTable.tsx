import { Box, Typography } from "@mui/material";
import CardImage from "./CardImage";

type Card = {
  value: string;
  suit: string;
};

interface DealerTableProps {
  hand: Card[];
  gameStarted: boolean;
  hideHoleCard?: boolean;
}

function DealerTable({ hand, gameStarted, hideHoleCard = false }: DealerTableProps) {
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
          {hand.map((card, idx) => {
            if (hideHoleCard && idx === 1) {
              return (
                <img
                  key={idx}
                  src={"/assets/cards/back.png"}
                  alt="Hidden card"
                  style={{
                    width: "80px",
                    height: "120px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    backgroundColor: "#f0f0f0",
                  }}
                />
              );
            }
            return <CardImage key={idx} value={card.value} suit={card.suit} />;
          })}
        </Box>
      )}
    </Box>
  );
}

export default DealerTable;
