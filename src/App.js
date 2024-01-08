import "./App.css";
import { Box } from "@mui/material";
// ---------------- components ------------
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import DataProvider from "./context/DataProvider";
import DetailView from "./components/Details/DetailView";
import AdminPanel from "./components/Admin/AdminPanel";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/Product/AddProduct";
import EditProduct from "./components/Product/EditProduct";

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
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/editProduct/:id" element={<EditProduct />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
