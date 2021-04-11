import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const userTypes = makeConstantCreator('GET_ALL_USER', 'GET_ALL_USER_SUCCESS');
const getAllUsers = () => makeActionCreator(userTypes.GET_ALL_USER);
const getAllUsersSuccess = (response) =>
  makeActionCreator(userTypes.GET_ALL_USER_SUCCESS, { response });
export default {
  getAllUsers,
  getAllUsersSuccess,
};
