import server from "../../api";
import setLoading from "./setLoadingAction";
import setMessage from "./setMessageAction";

export default function editProductAction(payload, id, token) {
  return function(dispatch) {
    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
      server
        .put(`/products/${id}`, payload, {
          headers: {
            access_token: token
          }
        })
        .then(({ data }) => {
          dispatch(setMessage(data.msg));
          resolve(data.msg);
        })
        .catch(err => {
          dispatch(setMessage(err.response.data.errors));
          reject(err.response.data.errors);
        })
        .finally(_ => {
          dispatch(setLoading(false));
        });
    });
  };
}
