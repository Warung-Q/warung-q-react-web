import { SIGN_IN } from "../actionTypes";

const initialState = {
  email: "",
  access_token: ""
};

export default function ownerReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        email: action.payload.email,
        access_token: action.payload.access_token
      };
    default:
      return state;
  }
}
