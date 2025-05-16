import { Container, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import GameBoard from "./components/GameBoard";
import Navbar from "./components/NavBar";
import InfoPage from "./pages/InfoPage";
import LocalMultiplayerPage from "./pages/LocalMultiplayerPage";
import SoloPage from "./pages/SoloPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/solo" element={<SoloPage />} />
          <Route path="/local" element={<LocalMultiplayerPage />} />
          <Route path="/info" element={<InfoPage />} />
          /** DebugRoute */
          <Route path="/debug" element={<GameBoard />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
