import { SET_LOADING } from "../actionTypes";

export default function setLoadingAction(payload) {
  return {
    type: SET_LOADING,
    payload
  };
}
