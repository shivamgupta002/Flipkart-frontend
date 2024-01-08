import axios from "axios";
import * as actionTypes from "../constants/productConstant";

// const URL = "http://localhost:5000";
const URL = "https://flipkartclonebackend-3icu.onrender.com";

export const getProducts = () => async (dispatch, getState) => {
  const { products } = getState().getProducts;
  // console.log(products);
  // If products are already present, return and don't make the request again
  if (products.length > 0) {
    return;
  }

  try {
    const { data } = await axios.get(`${URL}/products`);
    // console.log(data);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (e) {
    console.log("Error while calling getProduct in redux folder", e.message);
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: e.message });
  }
};
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (e) {
    console.log(
      "Error while calling getProduct details in redux folder",
      e.message
    );
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: e.message,
    });
  }
};
