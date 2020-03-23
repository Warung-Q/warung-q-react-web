import server from "../../api";
// import setOwnerAction from "./setOwnerAction";
// import setLoading from "./setLoadingAction";
// import setMessage from "./setMessageAction";

const signInAction = payload => {
  return server.post("/owner/login", payload);
};

export default signInAction;
