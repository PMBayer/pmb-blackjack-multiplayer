import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

interface GameResultMessageProps {
  open: boolean;
  result: "win" | "lose" | "draw";
  onClose: () => void;
}

export default function GameResultMessage({
  open,
  result,
  onClose,
}: GameResultMessageProps) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!open) return null;

  const messages = {
    win: "🎉 You won! Congratulations!",
    lose: "😞 You lost! Try again!",
    draw: "🤝 It's a draw! Good game!",
  };

  const severity = {
    win: "success",
    lose: "error",
    draw: "info",
  } as const;

  return (
    <>
      {result === "win" && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={onClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={onClose}
          severity={severity[result]}
          sx={{ width: "100%" }}
        >
          {messages[result]}
        </Alert>
      </Snackbar>
    </>
  );
}
