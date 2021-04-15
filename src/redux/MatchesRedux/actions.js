import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const matchesTypes = makeConstantCreator(
  'GET_LIST_MATCHES',
  'GET_LIST_MATCHES_SUCCESS',
  'USER_GET_DETAIL_MATCH',
  'USER_GET_DETAIL_MATCH_SUCCESS',
  'USER_POST_MATCH',
  'USER_POST_MATCH_SUCCESS',
  'USER_POST_MATCH_FAILURE',
);
const getListMatches = () => makeActionCreator(matchesTypes.GET_LIST_MATCHES);
const getListMatchesSuccess = (response) =>
  makeActionCreator(matchesTypes.GET_LIST_MATCHES_SUCCESS, { response });
const userGetDetailMatch = (id) => makeActionCreator(matchesTypes.USER_GET_DETAIL_MATCH, { id });
const userGetDetailMatchSuccess = (response) =>
  makeActionCreator(matchesTypes.USER_GET_DETAIL_MATCH_SUCCESS, { response });
const userPostMatch = (data) => makeActionCreator(matchesTypes.USER_POST_MATCH, { data });
const userPostMatchSuccess = (response) =>
  makeActionCreator(matchesTypes.USER_POST_MATCH_SUCCESS, { response });
const userPostMatchFailure = (error) =>
  makeActionCreator(matchesTypes.USER_POST_MATCH_FAILURE, { error });
export default {
  getListMatches,
  getListMatchesSuccess,
  userGetDetailMatch,
  userGetDetailMatchSuccess,
  userPostMatch,
  userPostMatchSuccess,
  userPostMatchFailure,
};
