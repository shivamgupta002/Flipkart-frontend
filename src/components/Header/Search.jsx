import React, { useState, useEffect } from "react";
import { InputBase, Box, List, ListItem, styled } from "@mui/material";
import SearchIcons from "@mui/icons-material/Search";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";

const SearchContainer = styled(Box)(({ theme }) => ({
  background: "#ffffff",
  width: "38%",
  borderRadius: " 5px",
  margin: "0 10px",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    width: "75%",
    margin: "0 20px",
  },
}));

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;
const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
`;

const ListWrapper = styled(List)(({ theme }) => ({
  position: "absolute",
  background: "#ffffff",
  color: "#000",
  marginTop: "2.95%",
  [theme.breakpoints.down("sm")]: {
    marginTop: "10%",
    marginRight: "2px",
    marginLeft: "-5px",
    " & >ul": {
      marginTop: "8%",
    },
  },
}));

// ##############################################
const Search = () => {
  const [text, setText] = useState("");
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  });
  const getText = (text) => {
    setText(text);
  };

  return (
    <>
      <SearchContainer>
        <InputSearchBase
          placeholder="Search for product,brands and More"
          onChange={(e) => getText(e.target.value)}
          value={text}
        />
        <SearchIconWrapper>
          <SearchIcons />
        </SearchIconWrapper>
        {text && (
          <ListWrapper>
            {products
              .filter((product) =>
                product.title.longTitle
                  .toLowerCase()
                  .includes(text.toLowerCase())
              )
              .map((product) => {
                return (
                  <ListItem>
                    <Link
                      to={`/product/${product.id}`}
                      onClick={() => setText("")}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {product.title.longTitle}
                    </Link>
                  </ListItem>
                );
              })}
          </ListWrapper>
        )}
      </SearchContainer>
    </>
  );
};

export default Search;
