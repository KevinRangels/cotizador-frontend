import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../pages/Auth/LoginScreen';
import { ToastContainer } from 'react-toastify';
import { MainRouter } from './MainRouter';
import ScrollToTop from './helpers/ScrollToTop';
import 'react-toastify/dist/ReactToastify.css';
import { main } from '../helpers/layout/main';

export const AppRouter = () => {
  const [logged, setLogged] = useState(true);

  useEffect(() => {
    main();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/login" component={LoginScreen} />
        <PrivateRoute path="/" component={MainRouter} isAuthenticated={logged} />
        <Redirect to="/login" />
      </Switch>
      <ToastContainer />
    </Router>
  );
};
