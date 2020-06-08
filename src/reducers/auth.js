const INITIAL_STATE = {
  accessToken: '',
  errorMessage: '',
  expirationTime: '',
  expiresIn: '',
  isLogged: false,
  tokenType: '',
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTH_CALLBACK_ERROR':
      return {
        ...state,
        accessToken: '',
        errorMessage: action.payload,
        expiresIn: '',
        isLogged: false,
        tokenType: '',
      };
    case 'AUTH_CALLBACK_SUCCESS':
      return {
        ...state,
        accessToken: action.payload.accessToken,
        errorMessage: '',
        expirationTime: new Date().getTime() + parseInt(action.payload.expiresIn),
        expiresIn: action.payload.expiresIn,
        isLogged: true,
        tokenType: action.payload.tokenType,
      };
    default:
      return state;
  }
};

export default authReducer;
