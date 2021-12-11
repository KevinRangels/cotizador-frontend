import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Footer } from '../components/UI/Footer';
import { Navbar } from '../components/UI/Navbar/Navbar';
import { Sidenav } from '../components/UI/Sidenav/Sidenav';
import { DashboardScreen } from '../pages/Dashboard/DashboardScreen';

export const MainRouter = () => {
  return (
    <div className="g-sidenav-show  bg-gray-100">
      <Sidenav />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <Navbar />
        <div class="container-fluid py-4">
          <Switch>
            <Route path="/" component={DashboardScreen} />
            {/* <Route exact path="/hero/:heroId" component={HeroScreen} />
      <Route exact path="/dc" component={DcScreen} />
      <Route exact path="/search" component={SearchScreen} /> */}
            <Redirect to="/" />
          </Switch>
          <Footer />
        </div>
      </main>
    </div>
  );
};
