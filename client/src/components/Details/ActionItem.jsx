import React from "react";

import { Box, Button, styled } from "@mui/material";
import Cart from "@mui/icons-material/ShoppingCart";
import Flash from "@mui/icons-material/FlashOn";

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
    margin: "0 10px",
  },
}));

// ###################################################################
const ActionItem = ({ product }) => {
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
        <StyleButton variant="contained" style={{ background: "#fb541b" }}>
          <Flash /> Add to Cart
        </StyleButton>
      </LeftContainer>
    </>
  );
};

export default ActionItem;
