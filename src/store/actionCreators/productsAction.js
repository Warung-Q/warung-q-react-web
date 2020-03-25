import server from "../../api";
import setLoading from "./setLoadingAction";
import setMessage from "./setMessageAction";
import setProductsAction from "./setProductsAction";

export default function productsAction(token) {
  return function(dispatch) {
    dispatch(setLoading(true));
    server
      .get("/products", {
        headers: {
          access_token: token
        }
      })
      .then(({ data }) => {
        dispatch(setProductsAction(data.products));
      })
      .catch(err => {
        dispatch(setMessage(err.response.data.errors));
      })
      .finally(_ => {
        dispatch(setLoading(false));
      });
  };
}
