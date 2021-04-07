import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const matchesTypes = makeConstantCreator(
  'GET_LIST_MATCHES',
  'GET_LIST_MATCHES_SUCCESS',
  'USER_GET_DETAIL_MATCH',
  'USER_GET_DETAIL_MATCH_SUCCESS',
  'USER_SEARCH_MATCHES',
  'USER_SEARCH_MATCHES_SUCCESS',
  'USER_SEARCH_MATCHES_FAILURE',
);
const getListMatches = () => makeActionCreator(matchesTypes.GET_LIST_MATCHES);
const getListMatchesSuccess = (response) =>
  makeActionCreator(matchesTypes.GET_LIST_MATCHES_SUCCESS, { response });
const userGetDetailMatch = (id) => makeActionCreator(matchesTypes.USER_GET_DETAIL_MATCH, { id });
const userGetDetailMatchSuccess = (response) =>
  makeActionCreator(matchesTypes.USER_GET_DETAIL_MATCH_SUCCESS, { response });
const userSearchMatches = (data) => makeActionCreator(matchesTypes.USER_SEARCH_MATCHES, { data });
const userSearchMatchesSuccess = (response) =>
  makeActionCreator(matchesTypes.USER_SEARCH_MATCHES_SUCCESS, { response });
const userSearchMatchesFailure = (error) =>
  makeActionCreator(matchesTypes.USER_GET_DETAIL_MATCH_FAILURE, { error });
export default {
  getListMatches,
  getListMatchesSuccess,
  userGetDetailMatch,
  userGetDetailMatchSuccess,
  userSearchMatches,
  userSearchMatchesSuccess,
  userSearchMatchesFailure,
};
