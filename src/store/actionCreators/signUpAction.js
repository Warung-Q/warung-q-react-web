import server from "../../api";
import setLoading from "./setLoadingAction";
import setMessage from "./setMessageAction";

const signUpAction = payload => {
  return function(dispatch) {
    dispatch(setLoading(true));
    server
      .post("/owner/register", payload)
      .then(_ => {
        dispatch(setMessage(null));
      })
      .catch(err => {
        dispatch(setMessage(err.response.data.errors));
      })
      .finally(_ => {
        dispatch(setLoading(false));
      });
  };
};

export default signUpAction;
