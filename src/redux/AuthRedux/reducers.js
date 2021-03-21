import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { LoginTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingLogin: false,
  responseLogin: null,
  errorLogin: null,
  token: null,
  type: '',
});

export const userLogin = (state) =>
  state.merge({ loadingLogin: true, errorLogin: null, type: 'User Login' });

export const userLoginSuccess = (state, { response }) =>
  state.merge({
    loadingLogin: false,
    errorLogin: null,
    responseLogin: response.user,
    token: response.token,
    type: 'User login success',
  });

export const userLoginFailure = (state, { error }) =>
  state.merge({
    loadingLogin: false,
    errorLogin: error,
    responseLogin: error,
    type: 'User login failure',
  });
export const userLogout = (state) =>
  state.merge({
    token: null,
    response: null,
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN]: userLogin,
  [LoginTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [LoginTypes.USER_LOGIN_FAILURE]: userLoginFailure,
  [LoginTypes.USER_LOGOUT]: userLogout,
});

export default reducer;
