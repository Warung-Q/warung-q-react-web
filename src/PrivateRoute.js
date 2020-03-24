import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (location.pathname === "/dashboard") {
          if (localStorage.getItem("warung_q_token_data")) {
            return children;
          } else {
            return (
              <Redirect
                to={{ pathname: "/signin", state: { from: location } }}
              />
            );
          }
        } else if (
          location.pathname === "/signin" ||
          location.pathname === "/signup"
        ) {
          if (!localStorage.getItem("warung_q_token_data")) {
            return children;
          } else {
            return (
              <Redirect
                to={{ pathname: "/dashboard", state: { from: location } }}
              />
            );
          }
        }
      }}
    />
  );
}
