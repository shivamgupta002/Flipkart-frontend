import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, styled } from "@mui/material";
import Cart from "@mui/icons-material/ShoppingCart";
import Flash from "@mui/icons-material/FlashOn";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: " 40%",
  padding: "40px 0 0 5px",
  [theme.breakpoints.down("lg")]: {
    padding: "40 0 0 0",
  },
}));

const Image = styled("img")({
  padding: "15px",
  width: "100%",
});

const StyleButton = styled(Button)(({ theme }) => ({
  width: "47%",
  height: "50px",
  borderRadius: "3px",
  [theme.breakpoints.down("lg")]: {
    width: "40%",
    margin: "5px 10px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
    margin: "5px 10px",
  },
}));

// ###################################################################
const ActionItem = ({ product }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    Navigate("/cart");
  };
  return (
    <>
      <LeftContainer>
        <Box
          style={{
            padding: "15px 20px",
            border: "1px solid #f0f0f0",
            width: "90%",
          }}
        >
          <Image src={product.detailUrl} alt="img" />
        </Box>
        <StyleButton
          variant="contained"
          style={{ marginRight: 10, background: "#ff9f00" }}
        >
          <Cart /> Buy Now
        </StyleButton>
        <StyleButton
          variant="contained"
          style={{ background: "#fb541b" }}
          onClick={() => addItemToCart()}
        >
          <Flash /> Add to Cart
        </StyleButton>
      </LeftContainer>
    </>
  );
};

export default ActionItem;
