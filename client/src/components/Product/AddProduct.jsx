import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addProduct } from "../../service/api";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  styled,
} from "@mui/material";

const Container = styled(Box)`
  height: auto;
  margin: 3.7rem 3rem 0 3rem;
  overflow-y: hidden;
`;
const ButtonContainer = styled(Box)`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;
const Heading = styled(Typography)`
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  margin: 10px 0;
  color: #67729d;
`;
const Subheading = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  margin-top:15px;
  color: #67729d;
  text-decoration: none;
`;
// #######################################################################################
const ProductForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    url: "",
    detailUrl: "",
    title: {
      shortTitle: "",
      longTitle: "",
    },
    price: {
      mrp: 0,
      cost: 0,
      discount: "",
    },
    quantity: 1,
    description: "",
    ExtraDiscount: "",
    tagline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
    if (name.includes(".")) {
      // Handle nested properties
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      let response = await addProduct(formData);
      if (!response) {
        console.log("not submitted");
      } else {
        // console.log(response);
        alert("Product submitted Successfully");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Container>
      <Subheading to="/admin">AdminPanel</Subheading>
      <Heading>Add Product</Heading>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={10} sm={12} xs={12}>
            <TextField
              label="ID"
              name="id"
              value={formData.id}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={10} sm={12} xs={12}>
            <TextField
              label="URL"
              name="url"
              value={formData.url}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={10} sm={12} xs={12}>
            <TextField
              label="Detail URL"
              name="detailUrl"
              value={formData.detailUrl}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={10} sm={12} xs={12}>
            <TextField
              label="Short Title"
              name="title.shortTitle"
              value={formData.title.shortTitle}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={10} sm={12} xs={12}>
            <TextField
              label="Long Title"
              name="title.longTitle"
              value={formData.title.longTitle}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={10} sm={12} xs={12}>
            <TextField
              label="MRP"
              name="price.mrp"
              value={formData.price.mrp}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={10} sm={12} xs={12}>
            <TextField
              label="Cost"
              name="price.cost"
              value={formData.price.cost}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={10} sm={12} xs={12}>
            <TextField
              label="Discount"
              name="price.discount"
              value={formData.price.discount}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={10} sm={12} xs={12}>
            <TextField
              label="Quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={10} sm={12} xs={12}>
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={10} sm={12} xs={12}>
            <TextField
              label="Extra Discount"
              name="ExtraDiscount"
              value={formData.ExtraDiscount}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={10} sm={12} xs={12}>
            <TextField
              label="Tagline"
              name="tagline"
              value={formData.tagline}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
        <ButtonContainer>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default ProductForm;
