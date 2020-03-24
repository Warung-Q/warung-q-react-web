import { SIGN_IN } from "../actionTypes";

const initialState = {
  warung_name: "",
  username: "",
  email: "",
  access_token: ""
};

export default function ownerReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        warung_name: action.payload.waurung_name,
        username: action.payload.username,
        email: action.payload.email,
        access_token: action.payload.access_token
      };
    default:
      return state;
  }
}
