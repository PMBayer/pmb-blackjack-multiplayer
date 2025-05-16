import { Container, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import GameBoard from "./components/GameBoard";
import Navbar from "./components/NavBar";
import InfoPage from "./pages/InfoPage";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<GameBoard />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
