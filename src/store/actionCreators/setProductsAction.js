import { SET_PRODUCTS } from "../actionTypes";

export default function setProductsAction(payload) {
  return {
    type: SET_PRODUCTS,
    payload
  };
}
