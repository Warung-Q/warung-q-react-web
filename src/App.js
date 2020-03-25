import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Dashboard from "./views/Dashboard";
import PrivateRoute from "./PrivateRoute";
import "./App.css";
import ColorContext from "./context/ColorContext";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <ColorContext.Consumer>
      {value => (
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home color={value.color} />
              </Route>
              <PrivateRoute exact path="/signin">
                <SignIn color={value.color} />
              </PrivateRoute>
              <PrivateRoute exact path="/signup">
                <SignUp color={value.color} />
              </PrivateRoute>
              <PrivateRoute path="/dashboard/:params">
                <Dashboard color={value.color} />
              </PrivateRoute>
            </Switch>
          </Router>
        </Provider>
      )}
    </ColorContext.Consumer>
  );
}

export default App;
