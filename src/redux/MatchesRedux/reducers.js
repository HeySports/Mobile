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
  responsePostMatch: null,
  loading: false,
  error: null,
  type: '',
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
export const userPostMatch = (state) =>
  state.merge({
    loading: true,
    type: 'POST MATCH',
  });
export const userPostMatchSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    responsePostMatch: response,
    error: null,
    type: 'POST MATCH SUCCESS',
  });
export const userPostMatchFailure = (state, { error }) =>
  state.merge({
    loading: false,
    type: 'POST MATCH FAILURE',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [matchesTypes.GET_LIST_MATCHES]: getListMatches,
  [matchesTypes.GET_LIST_MATCHES_SUCCESS]: getListMatchesSuccess,
  [matchesTypes.USER_GET_DETAIL_MATCH]: userGetDetailMatch,
  [matchesTypes.USER_GET_DETAIL_MATCH_SUCCESS]: userGetDetailMatchSuccess,
  [matchesTypes.USER_POST_MATCH]: userPostMatch,
  [matchesTypes.USER_POST_MATCH_SUCCESS]: userPostMatchSuccess,
  [matchesTypes.USER_POST_MATCH_FAILURE]: userPostMatchFailure,
});
export default reducer;
