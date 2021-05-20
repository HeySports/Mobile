import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const userTypes = makeConstantCreator(
  'GET_ALL_USER',
  'GET_ALL_USER_SUCCESS',
  'CHECK_PHONE',
  'CHECK_PHONE_SUCCESS',
  'CHECK_PHONE_FAIL',
  'RESET_PASSWORD',
  'RESET_PASSWORD_SUCCESS',
  'RESET_PASSWORD_FAIL',
);
const getAllUsers = () => makeActionCreator(userTypes.GET_ALL_USER);
const getAllUsersSuccess = (response) =>
  makeActionCreator(userTypes.GET_ALL_USER_SUCCESS, { response });
const checkPhoneNumberExisted = (data) => makeActionCreator(userTypes.CHECK_PHONE, { data });
const checkPhoneNumberExistedSuccess = (response) =>
  makeActionCreator(userTypes.CHECK_PHONE_SUCCESS, { response });
const checkPhoneNumberExistedFail = (error) =>
  makeActionCreator(userTypes.CHECK_PHONE_FAIL, { error });
const resetPassword = (data) => makeActionCreator(userTypes.RESET_PASSWORD, { data });
const resetPasswordSuccess = (response) =>
  makeActionCreator(userTypes.RESET_PASSWORD_SUCCESS, { response });
const resetPasswordFail = (error) => makeActionCreator(userTypes.RESET_PASSWORD_FAIL, { error });
export default {
  getAllUsers,
  getAllUsersSuccess,
  resetPassword,
  resetPasswordSuccess,
  resetPasswordFail,
  checkPhoneNumberExisted,
  checkPhoneNumberExistedSuccess,
  checkPhoneNumberExistedFail,
};
