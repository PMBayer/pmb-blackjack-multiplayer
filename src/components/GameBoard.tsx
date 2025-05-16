import { Box } from "@mui/material";
import DealerTable from "./DealerTable";
import PlayerArea from "./PlayerArea";

export default function GameBoard() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <DealerTable />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <PlayerArea />
      </Box>
    </Box>
  );
}
