import React from "react";
import { Route, Redirect, Switch, useRouteMatch } from "react-router-dom";
import { Footer } from "../components/UI/Footer";
import { Header } from "../components/UI/Header/Header";
import { Dashboard } from "../pages/User/Dashboard/Dashboard";
import { MyOrders } from "../pages/User/MyOrders/MyOrders";

export const PrivateRoute = () => {
  return (
    <>
      <Header />
      <div class="wrapper">
        <div class="">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-4">
              </div>
              <div class="col-lg-9 col-md-8">
                <Switch>
                  <Route path="/user/dashboard" component={Dashboard} />
                  <Route path="/user/orders" component={MyOrders} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
