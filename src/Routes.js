import React, { useState, useEffect, useCallback, useRef } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ProtectedRoute from "components/ProtectedRoute";
import Main from "layouts/main/Main.js";
import Login from "layouts/login/Login.js";
import { useGlobal } from "store";

import { fb, auth } from "fb";

const Routes = () => {
  // load the global state and actions
  const [globalState, globalActions] = useGlobal();

  //will use this to wait firebase initialization
  const [isLoading, setIsLoading] = useState(true);

  // this useEffect will check if we are logged or not
  useEffect(() => {
    fb.auth().onAuthStateChanged((user) => {
      //update user information
      globalActions.login.setUser(user);
      if (user) {
        console.log("Logged in");
        setIsLoading(false);
        globalActions.login.setIsLogged(true);
      } else {
        console.log("Not logged in");
        setIsLoading(false);
        globalActions.login.setIsLogged(false);
      }
    });
  }, [globalActions.login]);

  // we will wait until firebase initiation is finished in order to check if the user is logged or not
  return isLoading ? (
    "Loading..."
  ) : (
    //once everything is loaded, we launch the routes
    <BrowserRouter>
      <Switch>
        {/*Login window. Redirects to app if already logged*/}
        <Route path="/auth">
          {!auth.currentUser ? <Login /> : <Redirect to="/app" />}
        </Route>
        {/*Main window. Is protected and only authed users can access*/}
        <ProtectedRoute path="/app" component={<Main />} />
        <Redirect from="/" to="/app" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
