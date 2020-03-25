import server from "../../api";
import setOwnerAction from "./setOwnerAction";
import setLoading from "./setLoadingAction";
import setMessage from "./setMessageAction";

const signInAction = payload => {
  return function(dispatch) {
    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
      server
        .post("/owner/login", payload)
        .then(({ data }) => {
          dispatch(setOwnerAction(data));
          localStorage.setItem("warung_q_token_data", JSON.stringify(data));
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

export default signInAction;
