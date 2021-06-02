import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const teamTypes = makeConstantCreator(
  'USER_GET_TEAM',
  'USER_GET_TEAM_SUCCESS',
  'USER_GET_TEAM_FAILURE',
  'GET_LIST_TEAM',
  'GET_LIST_TEAM_SUCCESS',
  'GET_LIST_TEAM_FAILURE',
);
const userGetTeam = (id) => makeActionCreator(teamTypes.USER_GET_TEAM, { id });
const userGetTeamSuccess = (response) =>
  makeActionCreator(teamTypes.USER_GET_TEAM_SUCCESS, { response });
const userGetTeamFailure = (error) => makeActionCreator(teamTypes.USER_GET_TEAM_FAILURE, { error });
const getListTeam = () => makeActionCreator(teamTypes.GET_LIST_TEAM);
const getListTeamSuccess = (response) =>
  makeActionCreator(teamTypes.GET_LIST_TEAM_SUCCESS, { response });
const getListTeamFailure = (error) => makeActionCreator(teamTypes.GET_LIST_TEAM_FAILURE, { error });
export default {
  userGetTeam,
  userGetTeamSuccess,
  userGetTeamFailure,
  getListTeam,
  getListTeamSuccess,
  getListTeamFailure,
};
