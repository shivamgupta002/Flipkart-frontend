import axios from "axios";
import * as actionType from "../constants/cartConstant";

const URL = "http://localhost:5000";
export const addCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (e) {
    console.log("error while add cart function call due to ", e.message);
    dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: e.message });
  }
};
export const removeCart = (id) => (dispatch) => {
  dispatch({ type: actionType.REMOVE_TO_CART, payload: id });
};
