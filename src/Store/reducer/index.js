import { combineReducers } from "redux";
import productData from "./productData";
import customerResponseData from "./customerResponseData"

const reducerObj = {
  product: productData,
  customerResponse: customerResponseData
};
const rootReducer = combineReducers(reducerObj);
export default rootReducer;