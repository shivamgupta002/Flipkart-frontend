import "./App.css";
import { Box } from "@mui/material";
// ---------------- components ------------
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import DataProvider from "./context/DataProvider";
import DetailView from "./components/Details/DetailView";

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
