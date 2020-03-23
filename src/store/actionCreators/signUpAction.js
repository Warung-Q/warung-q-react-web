import server from "../../api";
import setLoading from "./setLoadingAction";
import setMessage from "./setMessageAction";

const signUpAction = payload => {
  return function(dispatch) {
    dispatch(setLoading(true));
    server
      .post("/owner/register", payload)
      .then(_ => {
        setMessage(null);
      })
      .catch(({ response }) => {
        dispatch(response.data.errors);
      })
      .finally(_ => {
        dispatch(setLoading(false));
      });
  };
};

export default signUpAction;
