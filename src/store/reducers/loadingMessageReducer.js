import { SET_MESSAGE, SET_LOADING } from "../actionTypes";

const initialState = {
  loading: false,
  message: null
};

export default function loadingMessageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
