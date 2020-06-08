import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  getPlaylistTracksRequest,
  getPlaylistTracksSuccess,
  getPlaylistTracksFailed,
  logout,
} from '../actions';

import { endpoints } from '../modules/endpoints';
import { getContentNameById } from '../modules/helpers';
import { request, sanitizeUrl } from '../modules/request';

import { Tracks } from '../containers';

const { getPlaylistTracks } = endpoints;

const TracksRoute = ({ path }) => {
  const { auth, content } = useSelector(state => state);
  const { playlistId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const requestOptions = {
      ...getPlaylistTracks.options,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` },
    };

    dispatch(getPlaylistTracksRequest());

    request(sanitizeUrl(getPlaylistTracks.url, { playlistId }), requestOptions)
      .then(data => dispatch(getPlaylistTracksSuccess(data)))
      .catch(err => {
        if (err === 401) {
          dispatch(logout());
          return;
        }

        dispatch(getPlaylistTracksFailed(err));
      });
  }, [auth, playlistId, dispatch]);

  return (
    <Tracks
      categoryName={getContentNameById(playlistId, content.playlists)}
      data={content.tracks}
      isLoading={content.status === 'running'}
      path={path}
    />
  );
};

export default TracksRoute;
