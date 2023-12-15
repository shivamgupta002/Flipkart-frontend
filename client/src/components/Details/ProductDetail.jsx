import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  styled,
} from "@mui/material";

import Badge from "@mui/icons-material/LocalOffer";

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;
const StyledBadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;
    border:none;
  }
`;

// ##################################################################
const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787" }}>
        8 Ratings & 1 review
      </Typography>
      <Box component="span">
        <img
          src={fassured}
          alt="fassured img"
          style={{ width: 77, marginLeft: 20 }}
        />
      </Box>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
          &nbsp;&nbsp;
        </Box>
        <Box component="span" style={{ color: "#878787" }}>
          <strike>{product.price.mrp}</strike>
          &nbsp;&nbsp;
        </Box>
        <Box component="span" style={{ color: "#388e3c" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge /> 5% Cashback on FlipKart Axis Bank Card T&C
        </Typography>
        <Typography>
          <StyledBadge />
          ₹2000 Off On Selected Banks Credit and Debit Card Transactions T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Get extra ₹3000 off (price inclusive of cashback/coupon) T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Spotify Premium - 12M at ₹699 T&C
        </Typography>
      </SmallText>
      {/* ------------------------------------------------- */}
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40{" "}
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#2874f0 " }}>
                SuperComNet
              </Box>
              <Typography>GST Invoice Available</Typography>
              <Typography>View More Seller staring from ₹1480</Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colSpan={2}>
              <img src={adURL} alt="superCoin" style={{ width: 390 }} />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell style={{ width: "55vw" }}>
              {product.description}
            </TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
