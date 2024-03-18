import { combineReducers } from "redux";
import productData from "./productData";
import customerResponseData from "./customerResponseData"
import materialData from "./materialData";

const reducerObj = {
  product: productData,
  customerResponse: customerResponseData,
  material: materialData

};
const rootReducer = combineReducers(reducerObj);
export default rootReducer;