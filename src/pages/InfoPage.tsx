import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function InfoPage() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        background: "linear-gradient(to bottom right, #f2f2f2, #ffffff)",
        py: 8,
        px: 2,
      }}
    >
      <Box sx={{ maxWidth: 1000, mx: "auto", textAlign: "center" }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Welcome to Blackjack
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Learn the rules and game modes to master the table.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 6 }}>
          {[
            {
              title: "🎯 How to Play",
              content:
                "Try to get as close to 21 as possible without going over. Face cards are worth 10, aces are 1 or 11, and the rest are face value.",
            },
            {
              title: "🃏 Game Flow",
              content:
                "You're dealt two cards. Choose to Hit or Stand. The dealer reveals their hand after you finish. Whoever is closer to 21 wins.",
            },
            {
              title: "🧍 Solo Mode",
              content:
                "Perfect for practicing. You play alone against the dealer.",
            },
            {
              title: "👥 Local Multiplayer",
              content:
                "Take turns with friends on the same device. Compete to see who has the best strategy.",
            },
          ].map((card, index) => (
            <Grid key={index}>
              <Paper
                elevation={3}
                sx={{ p: 4, borderRadius: 4, height: "100%" }}
              >
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {card.title}
                </Typography>
                <Typography color="text.secondary">{card.content}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
