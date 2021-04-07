import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const profileTypes = makeConstantCreator(
  'USER_GET_PROFILE',
  'USER_GET_PROFILE_SUCCESS',
  'USER_CHANGE_PASSWORD',
  'USER_CHANGE_PASSWORD_SUCCESS',
  'USER_CHANGE_PASSWORD_FAILURE',
  'USER_GET_HISTORIES',
  'USER_GET_HISTORIES_SUCCESS',
  'USER_GET_DETAIL',
  'USER_GET_DETAIL_SUCCESS',
);
const userGetProfile = () => makeActionCreator(profileTypes.USER_GET_PROFILE);
const userGetProfileSuccess = (response) =>
  makeActionCreator(profileTypes.USER_GET_PROFILE_SUCCESS, { response });
const userChangePassword = (data) => makeActionCreator(profileTypes.USER_CHANGE_PASSWORD, { data });
const userChangePasswordSuccess = (response) =>
  makeActionCreator(profileTypes.USER_CHANGE_PASSWORD_SUCCESS, { response });
const userChangePasswordFailure = (error) =>
  makeActionCreator(profileTypes.USER_CHANGE_PASSWORD_FAILURE, { error });
const userGetHistories = () => makeActionCreator(profileTypes.USER_GET_HISTORIES);
const userGetHistoriesSuccess = (response) =>
  makeActionCreator(profileTypes.USER_GET_HISTORIES_SUCCESS, { response });
const userGetDetail = (id) => makeActionCreator(profileTypes.USER_GET_DETAIL, { id });
const userGetDetailSuccess = (response) =>
  makeActionCreator(profileTypes.USER_GET_DETAIL_SUCCESS, { response });
export default {
  userGetProfile,
  userGetProfileSuccess,
  userChangePassword,
  userChangePasswordSuccess,
  userChangePasswordFailure,
  userGetHistories,
  userGetHistoriesSuccess,
  userGetDetail,
  userGetDetailSuccess,
};
