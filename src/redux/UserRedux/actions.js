import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const userTypes = makeConstantCreator(
  'GET_ALL_USER',
  'GET_ALL_USER_SUCCESS',
  'CHECK_PHONE',
  'CHECK_PHONE_SUCCESS',
  'CHECK_PHONE_FAIL',
);
const getAllUsers = () => makeActionCreator(userTypes.GET_ALL_USER);
const getAllUsersSuccess = (response) =>
  makeActionCreator(userTypes.GET_ALL_USER_SUCCESS, { response });
const checkPhoneNumberExisted = makeActionCreator(userTypes.CHECK_PHONE);
const checkPhoneNumberExistedSuccess = (response) =>
  makeActionCreator(userTypes.CHECK_PHONE_SUCCESS, { response });
const checkPhoneNumberExistedFail = (error) =>
  makeActionCreator(userTypes.CHECK_PHONE_FAIL, { error });
export default {
  getAllUsers,
  getAllUsersSuccess,
  checkPhoneNumberExisted,
  checkPhoneNumberExistedSuccess,
  checkPhoneNumberExistedFail,
};
