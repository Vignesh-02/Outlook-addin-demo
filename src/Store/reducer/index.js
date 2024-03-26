import { combineReducers } from "redux";
import productData from "./productData";
import customerResponseData from "./customerResponseData"
import materialData from "./materialData";
import accessTokenData from "./accessTokenData";

const reducerObj = {
  product: productData,
  customerResponse: customerResponseData,
  material: materialData,
  accessToken: accessTokenData

};
const rootReducer = combineReducers(reducerObj);
export default rootReducer;