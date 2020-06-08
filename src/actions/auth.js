export const authCallbackError = (errorMessage) => ({
  type: 'AUTH_CALLBACK_ERROR',
  payload: errorMessage,
});

export const authCallbackSuccess = (credentials) => ({
  type: 'AUTH_CALLBACK_SUCCESS',
  payload: { ...credentials },
});
