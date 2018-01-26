import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receieveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = user => dispatch => {
  APIUtil.login(user)
    .then(serverUser => {
      dispatch(receieveCurrentUser(serverUser));
    });
};

export const logout = () => dispatch => {
  APIUtil.logout()
    .then(serverUser => {
      dispatch(receieveCurrentUser(serverUser));
    });
};

export const signup = (user) => dispatch => {
  APIUtil.signup(user)
    .then(serverUser => {
      dispatch(receieveCurrentUser(serverUser));
    });
};
