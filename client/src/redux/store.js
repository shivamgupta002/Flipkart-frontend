import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";

import { thunk } from "redux-thunk";

import { composeWithDevTools } from "@redux-devtools/extension";
import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
});
const middleware = [thunk];

const store = configureStore(
  {
    reducer,
  },
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
