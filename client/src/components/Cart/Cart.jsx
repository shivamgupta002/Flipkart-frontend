import React from "react";

import { useSelector } from "react-redux";
import { Box, Grid, Typography, Button, styled } from "@mui/material";

import CartItem from "./CartItem";
import TotalView from "./TotalView";

const Container = styled(Grid)`
  padding: 30px 135px;
`;

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
  border-radius:5px;
`;

// #################################################################
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  // console.log(cartItems);
  return (
    <>
      {cartItems.length ? (
        <Container container>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => {
              return <CartItem item={item} />;
            })}
            <ButtonWrapper>
              <StyleButton>Place Order</StyleButton>
            </ButtonWrapper>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView />
          </Grid>
        </Container>
      ) : (
        <Typography>Please Add Item</Typography>
      )}
    </>
  );
};

export default Cart;
