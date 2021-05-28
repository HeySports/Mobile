import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { teamTypes } from './actions';
const INITIAL_STATE = Immutable({
  loading: false,
  team: null,
  error: null,
  type: '',
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
const reducer = makeReducerCreator(INITIAL_STATE, {
  [teamTypes.USER_GET_TEAM]: useGetTeam,
  [teamTypes.USER_GET_TEAM_SUCCESS]: useGetTeamSuccess,
  [teamTypes.USER_GET_TEAM_FAILURE]: useGetTeamFailure,
});
export default reducer;
