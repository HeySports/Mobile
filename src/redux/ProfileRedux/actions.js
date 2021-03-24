import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const profileTypes = makeConstantCreator('USER_GET_PROFILE', 'USER_GET_PROFILE_SUCCESS');
const userGetProfile = () => makeActionCreator(profileTypes.USER_GET_PROFILE);
const userGetProfileSuccess = (response) =>
  makeActionCreator(profileTypes.USER_GET_PROFILE_SUCCESS, { response });
export default {
  userGetProfile,
  userGetProfileSuccess,
};
