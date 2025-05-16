import { Box, Typography, Paper, Button } from "@mui/material";

function PlayerArea() {
  return (
    <Box sx={{ mt: 6, textAlign: "center" }}>
      <Typography variant="h6">Spieler 1</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        <Paper elevation={3} sx={{ width: 80, height: 120 }} />
        <Paper elevation={3} sx={{ width: 80, height: 120 }} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <Button variant="contained" color="success">
          Hit
        </Button>
        <Button variant="contained" color="error">
          Stand
        </Button>
      </Box>
    </Box>
  );
}

export default PlayerArea;
