import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import SignIn from "./views/SignIn";
import "./App.css";
import ColorContext from "./context/ColorContext";

function App() {
  return (
    <ColorContext.Consumer>
      {value => (
        <Router>
          <Switch>
            <Route exact path="/">
              <Home color={value.color} />
            </Route>
            <Route exact path="/signin">
              <SignIn color={value.color} />
            </Route>
          </Switch>
        </Router>
      )}
    </ColorContext.Consumer>
  );
}

export default App;
