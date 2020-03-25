import { SET_TRANSACTIONS } from "../actionTypes";

export default function setTransactionsAction(payload) {
  return {
    type: SET_TRANSACTIONS,
    payload
  };
}
