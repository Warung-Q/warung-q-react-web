import { SET_MESSAGE } from "../actionTypes";

export default function setMessageAction(payload) {
  return {
    type: SET_MESSAGE,
    payload
  };
}
