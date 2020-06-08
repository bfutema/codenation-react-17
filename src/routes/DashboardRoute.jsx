import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, useRouteMatch } from 'react-router-dom';

import {
  getUserRequest,
  getUserSuccess,
  getUserFailed,
  logout,
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesFailed,
} from '../actions';

import { endpoints } from '../modules/endpoints';
import { request } from '../modules/request';

import { WelcomeBox } from '../components';
import { Dashboard, Topbar, PrivateRoute, Categories } from '../containers';

import PlaylistsRoute from './PlaylistsRoute';
import TracksRoute from './TracksRoute';

const { getUserProfile, getCategories } = endpoints;

const DashboardRoute = () => {
  const { auth, user, content } = useSelector(state => state);
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    const requestOptions = {
      ...getUserProfile.options,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` },
    };

    dispatch(getUserRequest());

    request(getUserProfile.url, requestOptions)
      .then(data => dispatch(getUserSuccess(data)))
      .catch(err => {
        if (err === 401) {
          dispatch(logout());
          return;
        }

        dispatch(getUserFailed(err));
      });
  }, [auth.accessToken, dispatch]);

  useEffect(() => {
    const requestOptions = {
      ...getCategories.options,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` },
    };

    dispatch(getCategoriesRequest());

    request(getCategories.url, requestOptions)
      .then(data => dispatch(getCategoriesSuccess(data)))
      .catch(err => {
        if (err === 401) {
          dispatch(logout());
          return;
        }

        dispatch(getCategoriesFailed(err));
      });
  }, [auth, dispatch]);

  return (
    <Dashboard>
      <Topbar />

      <Switch>
        <PrivateRoute exact path={path}>
          <WelcomeBox name={user.name} />

          <Categories
            isLoading={content.status === 'running' && content.categories.length === 0}
            data={content.categories}
            url={url}
          />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId`}>
          <PlaylistsRoute path={path} />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId/:playlistId`}>
          <TracksRoute />
        </PrivateRoute>
      </Switch>
    </Dashboard>
  );
};

export default DashboardRoute;
