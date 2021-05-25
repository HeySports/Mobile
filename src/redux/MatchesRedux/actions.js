import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const matchesTypes = makeConstantCreator(
  'GET_LIST_MATCH_FIND_MEMBER',
  'GET_LIST_MATCH_FIND_MEMBER_SUCCESS',
  'GET_LIST_MATCHES',
  'GET_LIST_MATCHES_SUCCESS',
  'USER_GET_DETAIL_MATCH',
  'USER_GET_DETAIL_MATCH_SUCCESS',
  'USER_POST_MATCH',
  'USER_POST_MATCH_SUCCESS',
  'USER_POST_MATCH_FAILURE',
  'USER_JOIN_ACCEPT_TEAM',
  'USER_JOIN_ACCEPT_TEAM_SUCCESS',
  'USER_JOIN_ACCEPT_TEAM_FAILURE',
);
const getListMatches = () => makeActionCreator(matchesTypes.GET_LIST_MATCHES);
const getListMatchesSuccess = (response) =>
  makeActionCreator(matchesTypes.GET_LIST_MATCHES_SUCCESS, { response });

const getListMatchFindMember = () => makeActionCreator(matchesTypes.GET_LIST_MATCH_FIND_MEMBER);
const getListMatchFindMemberSuccess = (response) =>
  makeActionCreator(matchesTypes.GET_LIST_MATCH_FIND_MEMBER_SUCCESS, { response });

const userGetDetailMatch = (id) => makeActionCreator(matchesTypes.USER_GET_DETAIL_MATCH, { id });
const userGetDetailMatchSuccess = (response) =>
  makeActionCreator(matchesTypes.USER_GET_DETAIL_MATCH_SUCCESS, { response });
const userPostMatch = (data) => makeActionCreator(matchesTypes.USER_POST_MATCH, { data });
const userPostMatchSuccess = (response) =>
  makeActionCreator(matchesTypes.USER_POST_MATCH_SUCCESS, { response });
const userPostMatchFailure = (error) =>
  makeActionCreator(matchesTypes.USER_POST_MATCH_FAILURE, { error });
const userAcceptTeam = ({ data }) =>
  makeActionCreator(matchesTypes.USER_JOIN_ACCEPT_TEAM, { data });
const userAcceptTeamSuccess = ({ response }) =>
  makeActionCreator(matchesTypes.USER_JOIN_ACCEPT_TEAM_SUCCESS, { response });
const userAcceptTeamFailure = ({ error }) =>
  makeActionCreator(matchesTypes.USER_JOIN_ACCEPT_TEAM_FAILURE, { error });

export default {
  getListMatchFindMember,
  getListMatchFindMemberSuccess,
  getListMatches,
  getListMatchesSuccess,
  userGetDetailMatch,
  userGetDetailMatchSuccess,
  userPostMatch,
  userPostMatchSuccess,
  userPostMatchFailure,
  userAcceptTeam,
  userAcceptTeamSuccess,
  userAcceptTeamFailure,
};
