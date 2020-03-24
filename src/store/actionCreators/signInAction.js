import server from "../../api";
import setOwnerAction from "./setOwnerAction";
import setLoading from "./setLoadingAction";
import setMessage from "./setMessageAction";

const signInAction = payload => {
  return function(dispatch) {
    dispatch(setLoading(true));
    server
      .post("/owner/login", payload)
      .then(({ data }) => {
        dispatch(setMessage(null));
        dispatch(setOwnerAction(data));
      })
      .catch(err => {
        dispatch(setMessage(err.response.data.errors));
      })
      .finally(_ => {
        dispatch(setLoading(false));
      });
  };
};

export default signInAction;
