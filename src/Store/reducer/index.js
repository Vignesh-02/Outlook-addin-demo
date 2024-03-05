import { combineReducers } from "redux";
import productData from "./productData";
const reducerObj = {
  product: productData
,
};
const rootReducer = combineReducers(reducerObj);
export default rootReducer;