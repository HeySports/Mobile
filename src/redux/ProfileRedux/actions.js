import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const profileTypes = makeConstantCreator(
  'USER_GET_PROFILE',
  'USER_GET_PROFILE_SUCCESS',
  'USER_CHANGE_PASSWORD',
  'USER_CHANGE_PASSWORD_SUCCESS',
  'USER_CHANGE_PASSWORD_FAILURE',
);
const userGetProfile = () => makeActionCreator(profileTypes.USER_GET_PROFILE);
const userGetProfileSuccess = (response) =>
  makeActionCreator(profileTypes.USER_GET_PROFILE_SUCCESS, { response });
const userChangePassword = (data) => makeActionCreator(profileTypes.USER_CHANGE_PASSWORD, { data });
const userChangePasswordSuccess = (response) =>
  makeActionCreator(profileTypes.USER_CHANGE_PASSWORD_SUCCESS, { response });
const userChangePasswordFailure = (error) =>
  makeActionCreator(profileTypes.USER_CHANGE_PASSWORD_FAILURE, { error });
export default {
  userGetProfile,
  userGetProfileSuccess,
  userChangePassword,
  userChangePasswordSuccess,
  userChangePasswordFailure,
};
