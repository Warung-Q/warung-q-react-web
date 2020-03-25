import { SET_CATEGORIES } from "../actionTypes";

const initialState = {
  categories: []
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}
