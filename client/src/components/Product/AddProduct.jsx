import React, { useState } from "react";
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
  margin: 4.5rem 3rem 0 3rem;
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
    discount: "",
    tagline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("your-backend-api-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Reset form or redirect to another page as needed
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container>
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
              name="shortTitle"
              value={formData.title.shortTitle}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={10} sm={12} xs={12}>
            <TextField
              label="Long Title"
              name="longTitle"
              value={formData.title.longTitle}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={10} sm={12} xs={12}>
            <TextField
              label="MRP"
              name="mrp"
              value={formData.price.mrp}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={10} sm={12} xs={12}>
            <TextField
              label="Cost"
              name="cost"
              value={formData.price.cost}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={10} sm={12} xs={12}>
            <TextField
              label="Discount"
              name="discount"
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
              label="Discount"
              name="discount"
              value={formData.discount}
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
