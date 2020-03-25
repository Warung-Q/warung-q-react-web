import { SET_CATEGORIES } from "../actionTypes";

export default function setCategoriesAction(payload) {
  return {
    type: SET_CATEGORIES,
    payload
  };
}
