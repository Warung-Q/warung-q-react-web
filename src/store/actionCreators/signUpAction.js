import server from "../../api";
import setLoading from "./setLoadingAction";
import setMessage from "./setMessageAction";

const signUpAction = payload => {
  return function(dispatch) {
    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
      server
        .post("/owner/register", payload)
        .then(_ => {
          resolve();
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
};

export default signUpAction;
