import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const teamTypes = makeConstantCreator(
  'USER_GET_TEAM',
  'USER_GET_TEAM_SUCCESS',
  'USER_GET_TEAM_FAILURE',
);
const userGetTeam = (id) => makeActionCreator(teamTypes.USER_GET_TEAM, { id });
const userGetTeamSuccess = (response) =>
  makeActionCreator(teamTypes.USER_GET_TEAM_SUCCESS, { response });
const userGetTeamFailure = (error) => makeActionCreator(teamTypes.USER_GET_TEAM_FAILURE, { error });
export default {
  userGetTeam,
  userGetTeamSuccess,
  userGetTeamFailure,
};
