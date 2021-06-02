import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { teamTypes } from './actions';
const INITIAL_STATE = Immutable({
  loading: false,
  team: null,
  error: null,
  type: '',
  listTeam: null,
  teamDetail: null,
});
export const useGetTeam = (state) =>
  state.merge({
    loading: true,
    typeField: 'useGetTeam',
  });
export const useGetTeamSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    team: response,
    error: null,
    type: 'useGetTeamSuccess',
  });

export const useGetTeamFailure = (state, { error }) =>
  state.merge({
    loading: false,
    team: null,
    error: error,
    type: 'useGetTeamError',
  });
export const userGetListTeam = (state) =>
  state.merge({
    loading: true,
    listTeam: null,
    error: null,
    type: 'get List Team',
  });
export const userGetListTeamSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    listTeam: response,
    error: null,
    type: 'get List Team success',
  });
export const userGetListTeamFailure = (state, { error }) =>
  state.merge({
    loading: false,
    listTeam: null,
    error: error,
    type: 'get List Team failure',
  });
export const getTeamDetail = (state) =>
  state.merge({
    loading: true,
    teamDetail: null,
    error: null,
    type: 'get detail Team',
  });
export const getTeamDetailSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    teamDetail: response,
    error: null,
    type: 'get team detail success',
  });
export const getTeamDetailFailure = (state, { error }) =>
  state.merge({
    loading: false,
    teamDetail: null,
    error: error,
    type: 'get Team detail failure',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [teamTypes.USER_GET_TEAM]: useGetTeam,
  [teamTypes.USER_GET_TEAM_SUCCESS]: useGetTeamSuccess,
  [teamTypes.USER_GET_TEAM_FAILURE]: useGetTeamFailure,
  [teamTypes.GET_LIST_TEAM]: userGetListTeam,
  [teamTypes.GET_LIST_TEAM_SUCCESS]: userGetListTeamSuccess,
  [teamTypes.GET_LIST_TEAM_FAILURE]: userGetListTeamFailure,
  [teamTypes.GET_TEAM_DETAIL]: getTeamDetail,
  [teamTypes.GET_TEAM_DETAIL_SUCCESS]: getTeamDetailSuccess,
  [teamTypes.GET_TEAM_DETAIL_FAILURE]: getTeamDetailFailure,
});
export default reducer;
