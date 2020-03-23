import { SIGN_IN } from "../actionTypes";

export default function setOwnerAction(payload) {
  return {
    type: SIGN_IN,
    payload
  };
}
