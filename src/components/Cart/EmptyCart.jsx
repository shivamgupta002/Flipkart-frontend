import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)(({ theme }) => ({
  height: "67vh",
  width: "80%",
  backgroundColor: "#fff",
  marginTop: "10%",
  marginLeft: "10%",
  [theme.breakpoints.down("md")]: {
    marginTop: "25%",
    height: "50vh",
  },
}));

const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;

// #############################################
const EmptyCart = () => {
  const imgUrl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  return (
    <>
      <Component>
        <Container>
          <img
            src={imgUrl}
            alt="empty"
            style={{ width: "20%", marginBottom: "20px" }}
          />
          <Typography>Missing Cart Items?</Typography>
          <Typography>Add items to it now</Typography>
        </Container>
      </Component>
    </>
  );
};

export default EmptyCart;
