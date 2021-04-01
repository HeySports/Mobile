import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const matchesTypes = makeConstantCreator('GET_LIST_MATCHES', 'GET_LIST_MATCHES_SUCCESS');
const getListMatches = () => makeActionCreator(matchesTypes.GET_LIST_MATCHES);
const getListMatchesSuccess = (response) =>
  makeActionCreator(matchesTypes.GET_LIST_MATCHES_SUCCESS, { response });
export default {
  getListMatches,
  getListMatchesSuccess,
};
