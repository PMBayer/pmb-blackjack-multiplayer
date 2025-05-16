import { Box } from "@mui/material";
import DealerTable from "./DealerTable";
import PlayerArea from "./PlayerArea";

function GameBoard() {
  return (
    <Box sx={{ backgroundColor: "green", minHeight: "100vh", padding: 2 }}>
      <DealerTable />
      <PlayerArea />
    </Box>
  );
}

export default GameBoard;
