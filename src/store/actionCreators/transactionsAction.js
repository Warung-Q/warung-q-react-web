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
        // resolve();
        dispatch(setTransactionsAction(data));
      })
      .catch(err => {
        // reject(err.response.data.errors);
        dispatch(setMessage(err.response.data.errors));
      })
      .finally(_ => {
        dispatch(setLoading(false));
      });
    // return new Promise((resolve, reject) => {
    // });
  };
}
