import React from "react";

import { useSelector } from "react-redux";
import { Box, Grid, Typography, Button, styled } from "@mui/material";

import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  [theme.breakpoints.down("md")]: {
    padding: "15px 0",
  },
}));
const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;
const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 00 -2px 10px 0 rgba(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;
const StyleButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  width: 220px;
  height: 51px;
  border-radius: 5px;
`;
const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: "15px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "15px",
  },
}));

// #################################################################
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  // console.log(cartItems);
  return (
    <>
      {cartItems.length ? (
        <Container container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => {
              return <CartItem item={item} />;
            })}
            <ButtonWrapper>
              <StyleButton>Place Order</StyleButton>
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
