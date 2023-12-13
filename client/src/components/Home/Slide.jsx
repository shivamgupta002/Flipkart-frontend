import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Countdown from "react-countdown";

import { Box, Typography, Button, Divider, styled } from "@mui/material";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  background: #fff;
  margin-top: 10px;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
  align-items: center;
`;
const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: #7f7f7f;
`;
const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
  margin-right: 25px;
`;
const ViewAllButton = styled(Button)`
  margin-left: auto;
  background: #2874f0;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
`;
const Image = styled("img")({
  width: "auto",
  height: "150px",
});
const Text = styled(Typography)`
  font-size: 15px;
  margin-top: 5px;
  font-weight: 600;
  color: #212121;
`;

// #################################################
const Slide = ({ products }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };
  return (
    <>
      <Component>
        <Deal>
          <DealText>Deal of the day</DealText>
          <Timer>
            <img src={timerURL} alt="timer" style={{ width: "24px" }} />
            <Countdown date={Date.now() + 15.04e7} renderer={renderer} />
          </Timer>
          <ViewAllButton variant="contained">View All</ViewAllButton>
        </Deal>
        <Divider />
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          slidesToSlide={1}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {products.map((product) => {
            return (
              <Box textAlign="center" style={{ padding: "25px 15px" }}>
                <Image src={product.url} alt="img" />
                <Text>{product.title.shortTitle}</Text>
                <Typography style={{color:'green'}}>{product.discount}</Typography>
                <Typography style={{color:'#212121', opacity:'0.6'}} >{product.tagline}</Typography>
              </Box>
            );
          })}
        </Carousel>
      </Component>
    </>
  );
};

export default Slide;
