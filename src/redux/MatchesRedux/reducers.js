import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { matchesTypes } from './actions';
const INITIAL_STATE = Immutable({
  loadingMatches: false,
  responseMatches: null,
  errorMatches: null,
  typeMatches: '',
  loadingDetailMatches: false,
  responseDetailMatches: null,
  typeDetailMatches: '',
  loadingSearch: false,
  responseSearch: null,
  errorSearch: null,
  typeSearch: '',
});

export const getListMatches = (state) =>
  state.merge({
    loadingMatches: true,
    responseMatches: null,
    errorMatches: null,
    typeMatches: 'GET LIST MATCHES',
  });

export const getListMatchesSuccess = (state, { response }) =>
  state.merge({
    loadingMatches: false,
    responseMatches: response,
    errorMatches: null,
    typeMatches: 'GET_LIST_MATCHES_SUCCESS',
  });
export const userGetDetailMatch = (state) =>
  state.merge({
    loadingDetailMatches: true,
    responseDetailMatches: null,
    typeDetailMatches: 'USER GET DETAIL MATCH',
  });
export const userGetDetailMatchSuccess = (state, { response }) =>
  state.merge({
    loadingDetailMatches: false,
    responseDetailMatches: response,
    typeDetailMatches: 'USER GET DETAIL MATCH SUCCESS',
  });
export const userSearchMatches = (state) =>
  state.merge({
    loadingSearch: true,
    responseSearch: null,
    errorSearch: null,
    typeSearch: 'USER SEARCH',
  });
export const userSearchMatchesSuccess = (state, { response }) =>
  state.merge({
    loadingSearch: false,
    responseSearch: response,
    errorSearch: null,
    typeSearch: 'USER SEARCH SUCCESS',
  });
export const userSearchMatchesFailure = (state, { error }) =>
  state.merge({
    loadingSearch: false,
    responseSearch: null,
    errorSearch: error,
    typeSearch: 'USER SEARCH FAILURE',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [matchesTypes.GET_LIST_MATCHES]: getListMatches,
  [matchesTypes.GET_LIST_MATCHES_SUCCESS]: getListMatchesSuccess,
  [matchesTypes.USER_GET_DETAIL_MATCH]: userGetDetailMatch,
  [matchesTypes.USER_GET_DETAIL_MATCH_SUCCESS]: userGetDetailMatchSuccess,
  [matchesTypes.USER_SEARCH_MATCHES]: userSearchMatches,
  [matchesTypes.USER_SEARCH_MATCHES_SUCCESS]: userSearchMatchesSuccess,
  [matchesTypes.USER_SEARCH_MATCHES_FAILURE]: userSearchMatchesFailure,
});
export default reducer;
