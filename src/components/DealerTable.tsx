import { Box, Typography, Paper } from "@mui/material";

function DealerTable() {
  return (
    <Box sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h6">Dealer</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        <Paper elavation={3} sx={{ width: 80, height: 120 }} />
        <Paper elavation={3} sx={{ width: 80, height: 120 }} />
      </Box>
    </Box>
  );
}

export default DealerTable;
