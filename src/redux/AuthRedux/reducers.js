import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { LoginTypes } from './actions';
export const INITIAL_STATE = Immutable({
  loadingLogin: false,
  responseLogin: null,
  checkLoginFail: false,
  errorLogin: null,
  errorRegister: null,
  token: null,
  type: '',
  checkPhone: true,
  loadingCheckPhone: false,
  loadingRegister: false,
  responseRegister: null,
  checkRegisterFail: false,
});

export const userLogin = (state) =>
  state.merge({
    loadingLogin: true,
    errorLogin: null,
    type: 'User CheckPhone',
    checkCheckPhoneFail: false,
  });
export const userCheckPhone = (state) =>
  state.merge({
    type: 'User CheckPhone ',
    checkPhone: true,
    loadingCheckPhone: true,
  });
export const userCheckPhoneSuccess = (state) =>
  state.merge({
    type: 'User CheckPhone Exist',
    checkPhone: false,
    loadingCheckPhone: false,
  });
export const userCheckPhoneFailure = (state) =>
  state.merge({
    type: 'User CheckPhone not Exist',
    checkPhone: true,
    loadingCheckPhone: false,
  });
export const userRegister = (state) =>
  state.merge({
    loadingRegister: true,
    errorRegister: null,
    type: 'User Register',
    checkRegisterFail: false,
  });
export const userLoginSuccess = (state, { response }) =>
  state.merge({
    loadingLogin: false,
    errorLogin: null,
    responseLogin: response.user,
    token: response.access_token,
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
export const userRegisterFailure = (state, { error }) =>
  state.merge({
    loadingRegister: false,
    errorRegister: error,
    type: 'User register failure',
    checkRegisterFail: true,
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
  [LoginTypes.USER_CHECK_PHONE]: userCheckPhone,
  [LoginTypes.USER_CHECK_PHONE_SUCCESS]: userCheckPhoneSuccess,
  [LoginTypes.USER_CHECK_PHONE_FAILURE]: userCheckPhoneFailure,
  [LoginTypes.USER_REGISTER]: userRegister,
  [LoginTypes.USER_REGISTER_FAILURE]: userRegisterFailure,
  [LoginTypes.USER_LOGOUT]: userLogout,
});

export default reducer;
