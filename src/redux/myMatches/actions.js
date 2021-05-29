import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const myMatchesType = makeConstantCreator(
  'USER_GET_MY_MATCHES',
  'USER_GET_MY_MATCHES_SUCCESS',
  'USER_GET_MY_MATCHES_FAILURE',
);
const userGetMyMatches = () => makeActionCreator(myMatchesType.USER_GET_MY_MATCHES);
const userGetMyMatchesSuccess = (response) =>
  makeActionCreator(myMatchesType.USER_GET_MY_MATCHES_SUCCESS, { response });
const userGetMyMatchesFailure = (err) =>
  makeActionCreator(myMatchesType.USER_GET_MY_MATCHES_FAILURE, { err });
export default {
  userGetMyMatches,
  userGetMyMatchesSuccess,
  userGetMyMatchesFailure,
};
