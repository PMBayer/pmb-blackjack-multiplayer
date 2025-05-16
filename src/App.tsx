import { CssBaseline } from "@mui/material";
import Navbar from "./components/NavBar";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <GameBoard />
    </>
  );
}

export default App;
