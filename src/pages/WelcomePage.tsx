import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import welcomeImage from "../assets/welcome.jpg";

export function WelcomePage() {
  const navigate = useNavigate();

  return (
    <Box
      component="main"
      sx={{
        minWidth: "100wh",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `
      linear-gradient(
        to bottom right,
        rgba(255,255,255,0.1),
        rgba(0,0,0,0.4)
      ),
      url(${welcomeImage})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Glassmorphism-Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          zIndex: 1,
          padding: "40px",
          borderRadius: "20px",
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
          maxWidth: "700px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          fontWeight={700}
          gutterBottom
          sx={{ color: "#fff", textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
        >
          Welcome to Blackjack
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "rgba(255,255,255,0.8)",
            letterSpacing: 0.5,
            mb: 3,
          }}
        >
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
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/solo")}
              sx={{
                borderRadius: "999px",
                px: 4,
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
              }}
            >
              Start Solo
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/local")}
              sx={{
                borderRadius: "999px",
                px: 4,
                color: "#fff",
                borderColor: "rgba(255,255,255,0.7)",
              }}
            >
              Play with Friends
            </Button>
          </Stack>
        </motion.div>
      </motion.div>
    </Box>
  );
}

export default WelcomePage;
