import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { userTypes } from './actions';

const INITIAL_STATE = Immutable({
  loading: false,
  responseUser: null,
  error: null,
  type: '',
  errorCheckPhone: null,
  loadingCheckPhone: false,
  responseCheckPhone: true,
  loadingResetPassword: false,
  responseResetPassword: null,
  errorResetPassword: null,
});
export const getAllUser = (state) =>
  state.merge({
    loading: true,
    responseUser: null,
    error: null,
    type: 'GET ALL USER',
  });
export const checkPhone = (state) =>
  state.merge({
    loadingCheckPhone: true,
    responseCheckPhone: true,
    errorCheckPhone: null,
    type: 'CHECK PHONE NUMBER EXISTED',
  });
export const checkPhoneSuccess = (state) =>
  state.merge({
    loadingCheckPhone: false,
    responseCheckPhone: true,
    errorCheckPhone: null,
    type: 'CHECK PHONE NUMBER EXISTED SUCCESS',
  });
export const checkPhoneFail = (state) =>
  state.merge({
    loadingCheckPhone: false,
    responseCheckPhone: false,
    type: 'CHECK PHONE NUMBER EXISTED FAIL',
  });
export const resetPassword = (state) =>
  state.merge({
    loadingResetPassword: true,
    // responseResetPassword: null,
    errorResetPassword: null,
    type: 'RESET PASSWORD',
  });
export const resetPasswordSuccess = (state, { response }) =>
  state.merge({
    loadingResetPassword: false,
    responseResetPassword: response,
    errorResetPassword: null,
    type: 'RESET PASSWORD SUCCESS',
  });
export const resetPasswordFail = (state, { error }) =>
  state.merge({
    loadingResetPassword: true,
    responseResetPassword: null,
    errorResetPassword: error,
    type: 'RESET PASSWORD FAIL',
  });
export const getAllUserSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    responseUser: response,
    error: null,
    type: 'GET ALL USER SUCCESS',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [userTypes.USER_GET_ALL]: getAllUser,
  [userTypes.GET_ALL_USER_SUCCESS]: getAllUserSuccess,
  [userTypes.CHECK_PHONE]: checkPhone,
  [userTypes.CHECK_PHONE_SUCCESS]: checkPhoneSuccess,
  [userTypes.CHECK_PHONE_FAIL]: checkPhoneFail,
  [userTypes.RESET_PASSWORD]: resetPassword,
  [userTypes.RESET_PASSWORD_SUCCESS]: resetPasswordSuccess,
  [userTypes.RESET_PASSWORD_FAIL]: resetPasswordFail,
});
export default reducer;
