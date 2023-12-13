import React, { useEffect } from "react";
import { Box, styled } from "@mui/material";
//component
import Navbar from "./Navbar";
import Banner from "./Banner";
import MidSection from "./MidSection";
import Slide from "./Slide";
import MidSlide from "./MidSlide";

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;
const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  // console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discounts for You" timer={false} />
        <Slide products={products} title="Suggested Items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Season's Top Picks" timer={false} />
        <Slide
          products={products}
          title="Top Deals of Accessories"
          timer={false}
        />
      </Component>
    </>
  );
};

export default Home;
