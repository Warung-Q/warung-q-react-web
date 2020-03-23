import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Dashboard from "./views/Dashboard";
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
              <Route exact path="/signin">
                <SignIn color={value.color} />
              </Route>
              <Route exact path="/signup">
                <SignUp color={value.color} />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </Router>
        </Provider>
      )}
    </ColorContext.Consumer>
  );
}

export default App;
