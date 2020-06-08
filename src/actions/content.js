export const getCategoriesRequest = () => ({
  type: 'GET_CATEGORIES_REQUEST',
});

export const getCategoriesSuccess = ({ categories }) => ({
  type: 'GET_CATEGORIES_SUCCESS',
  payload: categories.items,
});

export const getCategoriesFailed = ({ message }) => ({
  type: 'GET_CATEGORIES_FAILED',
  payload: { message },
});

export const getCategoryPlaylistRequest = () => ({
  type: 'GET_CATEGORY_PLAYLIST_REQUEST',
});

export const getCategoryPlaylistSuccess = ({ playlists }) => ({
  type: 'GET_CATEGORY_PLAYLIST_SUCCESS',
  payload: playlists.items,
});

export const getCategoryPlaylistFailed = ({ message }) => ({
  type: 'GET_CATEGORY_PLAYLIST_FAILED',
  payload: { message },
});

export const getPlaylistTracksRequest = () => ({
  type: 'GET_PLAYLIST_TRACKS_REQUEST',
});

export const getPlaylistTracksSuccess = ({ items }) => ({
  type: 'GET_PLAYLIST_TRACKS_SUCCESS',
  payload: items,
});

export const getPlaylistTracksFailed = ({ message }) => ({
  type: 'GET_PLAYLIST_TRACKS_FAILED',
  payload: { message },
});

export const addTrackToPlayer = (track) => ({
  type: 'ADD_PLAYER_TRACK',
  payload: track,
});

export const removeTrackToPlayer = () => ({
  type: 'REMOVE_PLAYER_TRACK',
});

export const setPlayerHeight = height => ({
  type: 'SET_PLAYER_HEIGHT',
  payload: height,
});
