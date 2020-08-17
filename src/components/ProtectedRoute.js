import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "fb";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.currentUser) {
          return { ...Component, props: props, rest: rest };
        } else {
          return (
            <Redirect
              to={{
                pathname: "/auth",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
