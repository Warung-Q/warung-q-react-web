import server from "../../api";
import setLoading from "./setLoadingAction";
import setMessage from "./setMessageAction";
import setTransactionsAction from "./setTransactionsAction";

export default function productsAction(token) {
  return function(dispatch) {
    dispatch(setLoading(true));
    server
      .get("/transaction", {
        headers: {
          access_token: token
        }
      })
      .then(({ data }) => {
        dispatch(setTransactionsAction(data));
      })
      .catch(err => {
        dispatch(setMessage(err.response.data.errors));
      })
      .finally(_ => {
        dispatch(setLoading(false));
      });
  };
}
