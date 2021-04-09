import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const matchesTypes = makeConstantCreator(
  'GET_LIST_MATCHES',
  'GET_LIST_MATCHES_SUCCESS',
  'USER_GET_DETAIL_MATCH',
  'USER_GET_DETAIL_MATCH_SUCCESS',
);
const getListMatches = () => makeActionCreator(matchesTypes.GET_LIST_MATCHES);
const getListMatchesSuccess = (response) =>
  makeActionCreator(matchesTypes.GET_LIST_MATCHES_SUCCESS, { response });
const userGetDetailMatch = (id) => makeActionCreator(matchesTypes.USER_GET_DETAIL_MATCH, { id });
const userGetDetailMatchSuccess = (response) =>
  makeActionCreator(matchesTypes.USER_GET_DETAIL_MATCH_SUCCESS, { response });
export default {
  getListMatches,
  getListMatchesSuccess,
  userGetDetailMatch,
  userGetDetailMatchSuccess,
};
