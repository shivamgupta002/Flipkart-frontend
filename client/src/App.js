import "./App.css";
import { Box } from "@mui/material";
// ---------------- components ------------
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Box style={{ marginTop: "54px" }}>
        <Home />
      </Box>
    </>
  );
}

export default App;
