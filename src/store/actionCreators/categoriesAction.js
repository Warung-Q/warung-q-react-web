import server from "../../api";
import setLoading from "./setLoadingAction";
import setMessage from "./setMessageAction";
import setCategoriesAction from "./setCategoriesAction";

export default function categoriesAction(payload) {
  return function(dispatch) {
    dispatch(setLoading(true));
    server
      .get("/categories", {
        headers: {
          access_token: payload
        }
      })
      .then(({ data }) => {
        dispatch(setCategoriesAction(data));
      })
      .catch(err => {
        dispatch(setMessage(err.response.data.errors));
      })
      .finally(_ => {
        dispatch(setLoading(false));
      });
  };
}
