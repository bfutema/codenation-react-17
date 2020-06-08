const INITIAL_STATE = {
  categories: [],
  playlists: [],
  tracks: [],
  playingNowId: null,
  playingNowTrack: null,
  playerHeight: 0,
  status: 'idle',
  errorMessage: '',
};

const contentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES_REQUEST':
      return {
        ...state,
        categories: [],
        status: 'running',
      };
    case 'GET_CATEGORIES_SUCCESS':
      return {
        ...state,
        errorMessage: '',
        categories: action.payload,
        status: 'success',
      };
    case 'GET_CATEGORIES_FAILED':
      return {
        ...state,
        errorMessage: action.payload.message,
        categories: [],
        status: 'error',
      };
    case 'GET_CATEGORY_PLAYLIST_REQUEST':
      return {
        ...state,
        playlists: [],
        status: 'running',
      };
    case 'GET_CATEGORY_PLAYLIST_SUCCESS':
      return {
        ...state,
        errorMessage: '',
        playlists: action.payload,
        status: 'success',
      };
    case 'GET_CATEGORY_PLAYLIST_FAILED':
      return {
        ...state,
        errorMessage: action.payload.message,
        playlists: [],
        status: 'error',
      };
    case 'GET_PLAYLIST_TRACKS_REQUEST':
      return {
        ...state,
        tracks: [],
        status: 'running',
      };
    case 'GET_PLAYLIST_TRACKS_SUCCESS':
      return {
        ...state,
        errorMessage: '',
        tracks: action.payload.filter(({ track }) => track),
        status: 'success',
      };
    case 'GET_PLAYLIST_TRACKS_FAILED':
      return {
        ...state,
        tracks: [],
        errorMessage: action.payload.message,
        status: 'error',
      };
    case 'ADD_PLAYER_TRACK':
      return {
        ...state,
        playingNowId: action.payload.id,
        playingNowTrack: action.payload,
      };
    case 'REMOVE_PLAYER_TRACK':
      return {
        ...state,
        playingNowId: null,
        playingNowTrack: null,
        playerHeight: 0,
      };
    case 'SET_PLAYER_HEIGHT':
      return {
        ...state,
        playerHeight: action.payload,
      };
    default:
      return state;
  }
};

export default contentReducer;
