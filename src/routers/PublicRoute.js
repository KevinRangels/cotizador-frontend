import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { LoginScreen } from "../pages/Auth/LoginScreen";

export const PublicRoute = () => {
  return (
        <Switch>
          {/* <Route path="/recover-password" component={OffersScreen} /> */}
          <Route path="/login" component={LoginScreen} />
        </Switch>
  );
};
