import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const LoginTypes = makeConstantCreator(
  'USER_LOGIN',
  'USER_LOGIN_SUCCESS',
  'USER_LOGIN_FAILURE',
  'USER_LOGOUT',
);
const userLogin = (data) => makeActionCreator(LoginTypes.USER_LOGIN, { data });
const userLoginSuccess = (response) =>
  makeActionCreator(LoginTypes.USER_LOGIN_SUCCESS, { response });
const userLoginFailure = (error) => makeActionCreator(LoginTypes.USER_LOGIN_FAILURE, { error });
const userLogout = () => makeActionCreator(LoginTypes.USER_LOGOUT);
export default {
  userLogin,
  userLoginSuccess,
  userLoginFailure,
  userLogout,
};
