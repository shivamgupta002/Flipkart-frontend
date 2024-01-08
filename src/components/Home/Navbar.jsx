import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { navData } from "../../constants/data";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "55px 130px 0 130px",
  overflow: "overlay",
  // overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));
const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const Navbar = () => {
  return (
    <>
      <Box
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Component>
          {navData.map((data) => {
            return (
              <Container>
                <img src={data.url} alt="nav" style={{ width: "65px" }} />
                <Text>{data.text}</Text>
              </Container>
            );
          })}
        </Component>
      </Box>
    </>
  );
};

export default Navbar;
