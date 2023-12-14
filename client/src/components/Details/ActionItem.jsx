import React from "react";

import { Box, Button, styled } from "@mui/material";
import Cart from "@mui/icons-material/ShoppingCartIcon";
import Flash from "@mui/icons-material/FlashOn";
// import {
//   ShoppingCartIcon as Cart,
//   FlashOn as Flash,
// } from "@mui/icons-material";

const LeftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
`;
const Image = styled("img")({
  padding: "15px",
});

const StyleButton = styled(Button)`
  width: 47%;
  height: 50px;
  border-radius: 3px;
`;
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
