import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PrivateRoute } from '../containers';

import LoginRoute from './LoginRoute';
import AuthorizeRoute from './AuthorizeRoute';
import DashboardRoute from './DashboardRoute';

const Routes = () => {
  return (
    <Switch>
      <Route component={LoginRoute} exact path="/" />
      <Route component={AuthorizeRoute} exact path="/authorize" />
      <PrivateRoute comp={DashboardRoute} path="/dashboard" />
    </Switch>
  );
}

export default Routes;
