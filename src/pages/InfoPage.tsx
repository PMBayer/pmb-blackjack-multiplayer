import { Box, Grid, Typography } from "@mui/material";

export default function InfoPage() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        background: "linear-gradient(to bottom right, #f8f8fa, #fff)",
        py: 8,
        px: 2,
      }}
    >
      <Box sx={{ maxWidth: 600, mx: "auto", textAlign: "center" }}>
        <Typography
          variant="h3"
          fontWeight={700}
          gutterBottom
          sx={{ letterSpacing: -1, mb: 2 }}
        >
          Welcome to Blackjack
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          paragraph
          sx={{ mb: 4 }}
        >
          Learn the rules and game modes to master the table.
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ mt: 2, justifyContent: "center" }}
        >
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: 3,
                p: 3,
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={600}
                sx={{ mb: 1 }}
              >
                How to Play
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Get as close to 21 as possible without going over. Face cards are
                worth 10, Aces are 1 or 11. Beat the dealer to win.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: 3,
                p: 3,
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={600}
                sx={{ mb: 1 }}
              >
                Game Modes
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Play solo or with friends locally. Simple, elegant, and
                distraction-free.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
