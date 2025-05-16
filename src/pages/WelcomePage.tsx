import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f9f9f9, #e6e6e6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textAlign: "center", maxWidth: 700 }}
      >
        <Typography variant="h2" fontWeight={700} gutterBottom>
          Welcome to Blackjack
        </Typography>

        <Typography variant="h5" color="text.secondary" paragraph>
          Experience the classic game reimagined with elegance.
        </Typography>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            mt={4}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate("/solo")}
              sx={{ borderRadius: 10, px: 4 }}
            >
              Start Solo
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/local")}
              sx={{ borderRadius: 10, px: 4 }}
            >
              Play with Friends
            </Button>
          </Stack>
        </motion.div>
      </motion.div>
    </Box>
  );
}
