import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { LoginTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingLogin: false,
  responseLogin: null,
  checkLoginFail: false,
  errorLogin: null,
  token: null,
  type: '',
});

export const userLogin = (state) =>
  state.merge({ loadingLogin: true, errorLogin: null, type: 'User Login', checkLoginFail: false });

export const userLoginSuccess = (state, { response }) =>
  state.merge({
    loadingLogin: false,
    errorLogin: null,
    responseLogin: response.user,
    token: response.token,
    type: 'User login success',
    checkLoginFail: false,
  });

export const userLoginFailure = (state, { error }) =>
  state.merge({
    loadingLogin: false,
    errorLogin: error,
    responseLogin: error.data.message,
    type: 'User login failure',
    checkLoginFail: true,
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
