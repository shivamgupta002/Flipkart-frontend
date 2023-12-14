import axios from "axios";

import * as actionTypes from "../constants/productConstant";

const URL = "http://localhost:5000";

export const getProducts = () => async (dispatch) => {
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
    dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST });
    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS, payload: data });
  } catch (e) {
    console.log(
      "Error while calling getProduct details in redux folder",
      e.message
    );
    dispatch({
      type: actionTypes.GET_PRODUCTS_DETAILS_FAIL,
      payload: e.message,
    });
  }
};
