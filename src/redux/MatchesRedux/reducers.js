import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { matchesTypes } from './actions';
const INITIAL_STATE = Immutable({
  loadingMatches: false,
  responseMatches: null,
  responseMatchFindMember: null,
  loadingMatchFindMember: true,
  errorMatches: null,
  typeMatches: '',
  loadingDetailMatches: false,
  responseDetailMatches: null,
  typeDetailMatches: '',
  responsePostMatch: null,
  loading: false,
  error: null,
  type: '',
  checkPostMatch: false,
  response: null,
  responseJoinMatch: null,
});

export const getListMatches = (state) =>
  state.merge({
    loadingMatches: true,
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
export const getListMatchFindMember = (state) =>
  state.merge({
    loadingMatchFindMember: true,
    errorMatches: null,
    typeMatches: 'GET_LIST_MATCH_FIND_MEMBER',
  });

export const getListMatchFindMemberSuccess = (state, { response }) =>
  state.merge({
    loadingMatchFindMember: false,
    responseMatchFindMember: response,
    errorMatches: null,
    typeMatches: 'GET_LIST_MATCH_FIND_MEMBER_SUCCESS',
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
    checkPostMatch: false,
  });
export const userPostMatchSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    responsePostMatch: response,
    error: null,
    checkPostMatch: true,
    type: 'POST MATCH SUCCESS',
  });
export const userPostMatchFailure = (state, { error }) =>
  state.merge({
    loading: false,
    error: error,
    checkPostMatch: true,
    type: 'POST MATCH FAILURE',
  });
export const userJoinAcceptTeam = (state) =>
  state.merge({
    loading: true,
    response: null,
    type: 'Join team',
    error: null,
  });
export const userJoinAcceptTeamSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    response: response,
    type: 'Join team Success',
    error: null,
  });
export const userJoinAcceptTeamFailure = (state, { error }) =>
  state.merge({
    loading: false,
    response: null,
    type: 'Join team failure',
    error: error,
  });
export const joinMatch = (state) =>
  state.merge({
    loading: true,
    responseJoinMatch: null,
    type: 'Join match',
    error: null,
  });
export const joinMatchSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    responseJoinMatch: response,
    type: 'Join match success',
    error: null,
  });
export const joinMatchFailure = (state, { error }) =>
  state.merge({
    loading: false,
    responseJoinMatch: null,
    type: 'Join match failure',
    error: error,
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [matchesTypes.GET_LIST_MATCHES]: getListMatches,
  [matchesTypes.GET_LIST_MATCHES_SUCCESS]: getListMatchesSuccess,
  [matchesTypes.GET_LIST_MATCH_FIND_MEMBER]: getListMatchFindMember,
  [matchesTypes.GET_LIST_MATCH_FIND_MEMBER_SUCCESS]: getListMatchFindMemberSuccess,
  [matchesTypes.USER_GET_DETAIL_MATCH]: userGetDetailMatch,
  [matchesTypes.USER_GET_DETAIL_MATCH_SUCCESS]: userGetDetailMatchSuccess,
  [matchesTypes.USER_POST_MATCH]: userPostMatch,
  [matchesTypes.USER_POST_MATCH_SUCCESS]: userPostMatchSuccess,
  [matchesTypes.USER_POST_MATCH_FAILURE]: userPostMatchFailure,
  [matchesTypes.USER_JOIN_ACCEPT_TEAM]: userJoinAcceptTeam,
  [matchesTypes.USER_JOIN_ACCEPT_TEAM_SUCCESS]: userJoinAcceptTeamSuccess,
  [matchesTypes.USER_JOIN_ACCEPT_TEAM_FAILURE]: userJoinAcceptTeamFailure,
  [matchesTypes.JOIN_MATCH]: joinMatch,
  [matchesTypes.JOIN_MATCH_SUCCESS]: joinMatchSuccess,
  [matchesTypes.JOIN_MATCH_FAILURE]: joinMatchFailure,
});
export default reducer;
