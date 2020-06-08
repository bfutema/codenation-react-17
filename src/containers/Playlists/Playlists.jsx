import React  from 'react';
import Proptypes from 'prop-types';

import { Loading, RouteHeader } from '../../components';
import PlaylistItem from './PlaylistItem';

import './Playlists.scss';

const Playlists = ({ data, categoryName, categoryId, isLoading, path }) => (
  <div className="playlists" data-testid="playlists">
    <div className="container">
      <RouteHeader
        categoryName={categoryName}
        path={path}
      />

      {isLoading
        ? <Loading text="Carregando playlists..." />
        : (
        <div className="playlists__content">
          {data.length && data.map(playlist => (
            <PlaylistItem
              key={playlist.id}  
              id={playlist.id}
              categoryId={categoryId}
              description={playlist.description}
              image={playlist.images[0]}
              name={playlist.name}
              path={path}
            />
          ))}
        </div>
      )}
    </div>
  </div>
);

Playlists.defaultProps = {
  isLoading: false,
};

Playlists.propTypes = {
  categoryId: Proptypes.string.isRequired,
  categoryName: Proptypes.string.isRequired,
  data: Proptypes.array.isRequired,
  isLoading: Proptypes.bool,
  path: Proptypes.string.isRequired,
};

export default Playlists;
