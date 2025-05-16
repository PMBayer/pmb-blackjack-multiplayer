import React from "react";
import { Box, Typography } from "@mui/material";

const DealerTable: React.FC = () => {
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
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Box
          sx={{
            width: { xs: 60, sm: 80, md: 100 },
            height: 140,
            bgcolor: "grey.100",
            borderRadius: 1,
            boxShadow: 1,
          }}
        />
        <Box
          sx={{
            width: { xs: 60, sm: 80, md: 100 },
            height: 140,
            bgcolor: "grey.100",
            borderRadius: 1,
            boxShadow: 1,
          }}
        />
      </Box>
    </Box>
  );
};

export default DealerTable;
