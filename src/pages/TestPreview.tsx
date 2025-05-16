import React from "react";
import GameResultMessage from "../components/GameResultMessage";

export default function TestPreview() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <button onClick={() => setOpen(true)}>Show Win</button>
      <button onClick={() => setOpen(true)}>Show Lose</button>
      <GameResultMessage
        open={open}
        result="win" // hier je nach Button "win", "lose", "draw" setzen
        onClose={() => setOpen(false)}
      />
    </>
  );
}
