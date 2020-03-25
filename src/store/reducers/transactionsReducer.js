import { SET_TRANSACTIONS } from "../actionTypes";

const initialState = {
  transactions: [],
  datasetsYearly: {
    januaryData: 0,
    februaryData: 0,
    marchData: 0,
    aprilData: 0,
    mayData: 0,
    juneData: 0,
    julyData: 0,
    augustData: 0,
    septemberData: 0,
    octoberData: 0,
    novemberData: 0,
    decemberData: 0
  }
};

export default function transactionsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        datasetsYearly: {
          januaryData: action.payload.filter(
            item =>
              new Date(item.createdAt).getMonth() ===
              new Date(new Date().getFullYear(), 0).getMonth()
          ),
          februaryData: action.payload.filter(
            item =>
              new Date(item.createdAt).getMonth() ===
              new Date(new Date().getFullYear(), 1).getMonth()
          ),
          marchData: action.payload.filter(
            item =>
              new Date(item.createdAt).getMonth() ===
              new Date(new Date().getFullYear(), 2).getMonth()
          ),
          aprilData: action.payload.filter(
            item =>
              new Date(item.createdAt).getMonth() ===
              new Date(new Date().getFullYear(), 3).getMonth()
          ),
          mayData: action.payload.filter(
            item =>
              new Date(item.createdAt).getMonth() ===
              new Date(new Date().getFullYear(), 4).getMonth()
          ),
          juneData: action.payload.filter(
            item =>
              new Date(item.createdAt).getMonth() ===
              new Date(new Date().getFullYear(), 5).getMonth()
          ),
          julyData: action.payload.filter(
            item =>
              new Date(item.createdAt).getMonth() ===
              new Date(new Date().getFullYear(), 6).getMonth()
          ),
          augustData: action.payload.filter(
            item =>
              new Date(item.createdAt).getMonth() ===
              new Date(new Date().getFullYear(), 7).getMonth()
          ),
          septemberData: action.payload.filter(
            item =>
              new Date(item.createdAt).getMonth() ===
              new Date(new Date().getFullYear(), 8).getMonth()
          ),
          octoberData: action.payload.filter(
            item =>
              new Date(item.createdAt).getMonth() ===
              new Date(new Date().getFullYear(), 9).getMonth()
          ),
          novemberData: action.payload.filter(
            item =>
              new Date(item.createdAt).getMonth() ===
              new Date(new Date().getFullYear(), 10).getMonth()
          ),
          decemberData: action.payload.filter(
            item =>
              new Date(item.createdAt).getMonth() ===
              new Date(new Date().getFullYear(), 11).getMonth()
          )
        }
      };
    default:
      return state;
  }
}
