import "./App.css";
import { Box } from "@mui/material";
// ---------------- components ------------
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import DataProvider from "./context/DataProvider";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from "./components/Details/DetailView";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: "54px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<DetailView />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
