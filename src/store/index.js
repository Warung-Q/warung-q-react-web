import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import loadingMessageReducer from "./reducers/loadingMessageReducer";
import ownerReducer from "./reducers/ownerReducer";
import productsReducer from "./reducers/productsReducer";

const reducers = combineReducers({
  loadingMessageReducer,
  ownerReducer,
  productsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
