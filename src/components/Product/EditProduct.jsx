import React, { useState, useEffect } from "react";
import { productDetails, editProduct } from "../../service/api";
import { useParams } from "react-router-dom";

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

// #######################################################################################

const EditProduct = () => {
  const { id } = useParams();
  const [input, setInput] = useState({
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
  useEffect(() => {
    productDetails(id)
      .then((response) => {
        const productData = response.data;
        //   console.log(productData);
        setInput(productData);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error while getting product details:", error.message);
      });
  }, [id]);

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     // setInput({ ...input, [name]: value });
  //     if (name.includes(".")) {
  //       // Handle nested properties
  //       const [parent, child] = name.split(".");
  //       setInput({
  //         ...input,
  //         [parent]: {
  //           ...input[parent],
  //           [child]: value,
  //         },
  //       });
  //     } else {
  //       setInput({ ...input, [name]: value });
  //     }
  //   };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => {
      const newState = { ...prevInput };

      if (name.includes(".")) {
        // Handle nested properties
        const [parent, child] = name.split(".");
        newState[parent] = { ...(newState[parent] || {}), [child]: value };
      } else {
        newState[name] = value;
      }

      return newState;
    });
  };

  //   Handle Submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      let response = await editProduct(input);
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

    // console.log(input._id);
  //   console.log(input);
  return (
    <>
      <Container>
        <Heading>Edit Product</Heading>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item lg={6} md={10} sm={12} xs={12}>
              <TextField
                label="ID"
                name="id"
                value={input?.id || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={10} sm={12} xs={12}>
              <TextField
                label="URL"
                name="url"
                value={input?.url || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={10} sm={12} xs={12}>
              <TextField
                label="Detail URL"
                name="detailUrl"
                value={input?.detailUrl || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={10} sm={12} xs={12}>
              <TextField
                label="Short Title"
                name="title.shortTitle"
                value={input?.title?.shortTitle || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={10} sm={12} xs={12}>
              <TextField
                label="Long Title"
                name="title.longTitle"
                value={input?.title?.longTitle || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={10} sm={12} xs={12}>
              <TextField
                label="MRP"
                name="price.mrp"
                value={input?.price?.mrp || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={10} sm={12} xs={12}>
              <TextField
                label="Cost"
                name="price.cost"
                value={input?.price?.cost || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={10} sm={12} xs={12}>
              <TextField
                label="Discount"
                name="price.discount"
                value={input?.price?.discount || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={10} sm={12} xs={12}>
              <TextField
                label="Quantity"
                name="quantity"
                value={input?.quantity || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={10} sm={12} xs={12}>
              <TextField
                label="Description"
                name="description"
                value={input?.description || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={10} sm={12} xs={12}>
              <TextField
                label="Extra Discount"
                name="ExtraDiscount"
                value={input?.ExtraDiscount || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={10} sm={12} xs={12}>
              <TextField
                label="Tagline"
                name="tagline"
                value={input?.tagline || ""}
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
    </>
  );
};

export default EditProduct;
