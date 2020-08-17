import React, { useEffect, useCallback } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ProtectedRoute from "components/ProtectedRoute";
import Main from "layouts/main/Main.js";
import Login from "layouts/login/Login.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth">{true ? <Login /> : <Redirect to="/app" />}</Route>
        <ProtectedRoute path="/app" component={<Main />} />
        <Redirect from="/" to="/app" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
