import React from "react";
import { InputBase, Box, styled } from "@mui/material";
import SearchIcons from "@mui/icons-material/Search";
const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 5px;
  margin-left: 10px;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;
const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
`;
const Search = () => {
  return (
    <>
      <SearchContainer>
        <InputSearchBase placeholder="Search for product,brands and More" />
        <SearchIconWrapper>
          <SearchIcons />
        </SearchIconWrapper>
      </SearchContainer>
    </>
  );
};

export default Search;
