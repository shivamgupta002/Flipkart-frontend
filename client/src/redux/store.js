import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";

import { thunk } from "redux-thunk";

import { composeWithDevTools } from "@redux-devtools/extension";
import { getProductsReducer } from "./reducers/productReducers";

const reducer = combineReducers({
  getProducts: getProductsReducer,
});
const middleware = [thunk];

const store = configureStore(
  {
    reducer,
  },
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;