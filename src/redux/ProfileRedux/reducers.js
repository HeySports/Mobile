import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { profileTypes } from './actions';

const INITIAL_STATE = Immutable({
  loadingProfile: false,
  responseProfile: null,
  errorResponse: null,
  statusProfile: false,
  typeProfile: '',
  loadingChangePassword: false,
  errorChangePassword: null,
  responseChangePassword: null,
  typeChangePassword: '',
  statusChangePassword: false,
});

export const userGetProfile = (state) =>
  state.merge({
    loadingProfile: true,
    responseProfile: null,
    type: 'USER GET PROFILE',
    statusProfile: false,
  });
export const userGetProfileSuccess = (state, { response }) =>
  state.merge({
    loadingProfile: false,
    responseProfile: response,
    type: 'USER_GET_PROFILE_SUCCESS',
    statusProfile: false,
  });
// user change password
export const userChangePassword = (state) =>
  state.merge({
    loadingChangePassword: true,
    typeChangePassword: 'USER CHANGE PASSWORD',
    errorChangePassword: null,
    responseChangePassword: null,
    statusChangePassword: false,
  });
export const userChangePasswordSuccess = (state, { response }) =>
  state.merge({
    loadingChangePassword: false,
    typeChangePassword: 'USER CHANGE PASSWORD SUCCESS',
    errorChangePassword: null,
    responseChangePassword: response,
    statusChangePassword: false,
  });
export const userChangePasswordFailure = (state, { error }) =>
  state.merge({
    loadingChangePassword: false,
    typeChangePassword: 'USER CHANGE PASSWORD FAILURE',
    errorChangePassword: error,
    responseChangePassword: null,
    statusChangePassword: false,
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [profileTypes.USER_GET_PROFILE]: userGetProfile,
  [profileTypes.USER_GET_PROFILE_SUCCESS]: userGetProfileSuccess,
  [profileTypes.USER_CHANGE_PASSWORD]: userChangePassword,
  [profileTypes.USER_CHANGE_PASSWORD_SUCCESS]: userChangePasswordSuccess,
  [profileTypes.USER_CHANGE_PASSWORD_FAILURE]: userChangePasswordFailure,
});
export default reducer;
