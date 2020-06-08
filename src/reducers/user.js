const INITIAL_STATE = {
  email: '',
  errorMessage: '',
  name: '',
  status: 'idle',
  thumb: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_USER_REQUEST':
      return {
        ...state,
        status: 'running',
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        ...action.payload,
        status: 'success',
      };
    case 'GET_USER_FAILED':
      return {
        ...state,
        errorMessage: action.payload.message,
        status: 'error',
      };
    default:
      return state;
  }
};

export default userReducer;
