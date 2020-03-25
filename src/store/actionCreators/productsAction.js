import server from "../../api";
import setLoading from "./setLoadingAction";
import setMessage from "./setMessageAction";
import setProductsAction from "./setProductsAction";

export default function productsAction(payload) {
  return function(dispatch) {
    dispatch(setLoading(true));
    server
      .get("/products", {
        headers: {
          access_token: payload
        }
      })
      .then(({ data }) => {
        // resolve();
        console.log(data);
        dispatch(setProductsAction(data.products));
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
