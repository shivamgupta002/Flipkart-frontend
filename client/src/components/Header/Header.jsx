import React from "react";
import { AppBar, Toolbar, Box, styled, Typography } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";

import { Link } from "react-router-dom";

const StyleHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: 11,
  height: 11,
  marginLeft: 5,
  marginTop: 2,
});
// ------------------------------ Header --------------------------------------------
const Header = () => {
  const logoUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <>
      <StyleHeader>
        <Toolbar style={{ minHeight: "55px" }}>
          <Component to="/">
            <img src={logoUrl} alt="logo" style={{ width: "75px" }} />
            <Box style={{ display: "flex" }}>
              <SubHeading>
                Explore &nbsp;
                <Box component="span" style={{ color: "#ffe500" }}>
                  Plus
                </Box>
              </SubHeading>
              <PlusImage src={subUrl} alt="plus" />
            </Box>
          </Component>
          <Search />
          <CustomButtons />
        </Toolbar>
      </StyleHeader>
    </>
  );
};

export default Header;
