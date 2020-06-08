const fakeThumb = 'https://avatars3.githubusercontent.com/u/46576135?s=460&u=7ea112bde22b3566c77851301e2fc08920107971&v=4';

export const getUserRequest = () => ({
  type: 'GET_USER_REQUEST',
});

export const getUserSuccess = payload => {
  const userProfile = {
    email: payload.email,
    name: payload.display_name,
    thumb: payload.images.length ? payload.images[0].url : fakeThumb,
  };

  return {
    type: 'GET_USER_SUCCESS',
    payload: { ...userProfile },
  };
};

export const getUserFailed = ({ message }) => ({
  type: 'GET_USER_FAILED',
  payload: { message },
});

export const logout = () => ({
  type: 'USER_LOGOUT',
  payload: {},
});
