import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const teamTypes = makeConstantCreator(
  'USER_GET_TEAM',
  'USER_GET_TEAM_SUCCESS',
  'USER_GET_TEAM_FAILURE',
  'GET_LIST_TEAM',
  'GET_LIST_TEAM_SUCCESS',
  'GET_LIST_TEAM_FAILURE',
  'GET_TEAM_DETAIL',
  'GET_TEAM_DETAIL_SUCCESS',
  'GET_TEAM_DETAIL_FAILURE',
  'USER_OFFER_TEAM',
  'USER_OFFER_TEAM_SUCCESS',
  'USER_OFFER_TEAM_FAILURE',
  'USER_GET_OFFER_TEAM',
  'USER_GET_OFFER_TEAM_SUCCESS',
  'USER_GET_OFFER_TEAM_FAILURE',
  'CREATE_TEAM',
  'CREATE_TEAM_SUCCESS',
  'CREATE_TEAM_FAILURE',
  'COMMENT_TEAM',
  'COMMENT_TEAM_SUCCESS',
  'COMMENT_TEAM_FAILURE',
  'MY_DETAIL_TEAM',
  'MY_DETAIL_TEAM_SUCCESS',
  'MY_DETAIL_TEAM_FAILURE',
  'ACCEPT_JOIN_TEAM',
  'ACCEPT_JOIN_TEAM_SUCCESS',
  'ACCEPT_JOIN_TEAM_FAILURE',
  'REMOVE_JOIN_TEAM',
  'REMOVE_JOIN_TEAM_SUCCESS',
  'REMOVE_JOIN_TEAM_FAILURE',
);
const userGetTeam = (id) => makeActionCreator(teamTypes.USER_GET_TEAM, { id });
const userGetTeamSuccess = (response) =>
  makeActionCreator(teamTypes.USER_GET_TEAM_SUCCESS, { response });
const userGetTeamFailure = (error) => makeActionCreator(teamTypes.USER_GET_TEAM_FAILURE, { error });
const getListTeam = () => makeActionCreator(teamTypes.GET_LIST_TEAM);
const getListTeamSuccess = (response) =>
  makeActionCreator(teamTypes.GET_LIST_TEAM_SUCCESS, { response });
const getListTeamFailure = (error) => makeActionCreator(teamTypes.GET_LIST_TEAM_FAILURE, { error });
const getTeamDetail = (id) => makeActionCreator(teamTypes.GET_TEAM_DETAIL, { id });
const getTeamDetailSuccess = (response) =>
  makeActionCreator(teamTypes.GET_TEAM_DETAIL_SUCCESS, { response });

const getTeamDetailFailure = (error) =>
  makeActionCreator(teamTypes.GET_TEAM_DETAIL_FAILURE, { error });
const userOfferTeam = (data) => makeActionCreator(teamTypes.USER_OFFER_TEAM, { data });
const userOfferTeamSuccess = (response) =>
  makeActionCreator(teamTypes.USER_OFFER_TEAM_SUCCESS, { response });
const userOfferTeamFailure = (error) =>
  makeActionCreator(teamTypes.USER_OFFER_TEAM_FAILURE, { error });
const userGetOfferTeam = (id) => makeActionCreator(teamTypes.USER_GET_OFFER_TEAM, { id });
const userGetOfferTeamSuccess = (response) =>
  makeActionCreator(teamTypes.USER_GET_OFFER_TEAM_SUCCESS, { response });
const userGetOfferTeamFailure = (error) =>
  makeActionCreator(teamTypes.USER_GET_OFFER_TEAM_FAILURE, { error });
const createTeam = (data) => makeActionCreator(teamTypes.CREATE_TEAM, { data });
const createTeamSuccess = (response) =>
  makeActionCreator(teamTypes.CREATE_TEAM_SUCCESS, { response });
const createTeamFailure = (error) => makeActionCreator(teamTypes.CREATE_TEAM_FAILURE, { error });
const commentTeam = (data) => makeActionCreator(teamTypes.COMMENT_TEAM, { data });
const commentTeamSuccess = (response) =>
  makeActionCreator(teamTypes.COMMENT_TEAM_SUCCESS, { response });
const commentTeamFailure = (error) => makeActionCreator(teamTypes.COMMENT_TEAM_FAILURE, { error });
const myDetailTeam = () => makeActionCreator(teamTypes.MY_DETAIL_TEAM);
const myDetailTeamSuccess = (response) =>
  makeActionCreator(teamTypes.MY_DETAIL_TEAM_SUCCESS, { response });
const myDetailTeamFailure = (error) =>
  makeActionCreator(teamTypes.MY_DETAIL_TEAM_FAILURE, { error });
const acceptJoinTeam = (id) => makeActionCreator(teamTypes.ACCEPT_JOIN_TEAM, { id });
const acceptJoinTeamSuccess = (response) =>
  makeActionCreator(teamTypes.ACCEPT_JOIN_TEAM_SUCCESS, { response });
const acceptJoinTeamFailure = (error) =>
  makeActionCreator(teamTypes.ACCEPT_JOIN_TEAM_FAILURE, { error });
const removeJoinTeam = (id) => makeActionCreator(teamTypes.REMOVE_JOIN_TEAM, { id });
const removeJoinTeamSuccess = (response) =>
  makeActionCreator(teamTypes.REMOVE_JOIN_TEAM_SUCCESS, { response });
const removeJoinTeamFailure = (error) =>
  makeActionCreator(teamTypes.REMOVE_JOIN_TEAM_FAILURE, { error });
export default {
  userGetTeam,
  userGetTeamSuccess,
  userGetTeamFailure,
  getListTeam,
  getListTeamSuccess,
  getListTeamFailure,
  getTeamDetail,
  getTeamDetailSuccess,
  getTeamDetailFailure,
  userOfferTeam,
  userOfferTeamSuccess,
  userOfferTeamFailure,
  userGetOfferTeam,
  userGetOfferTeamSuccess,
  userGetOfferTeamFailure,
  createTeam,
  createTeamSuccess,
  createTeamFailure,
  commentTeam,
  commentTeamFailure,
  commentTeamSuccess,
  myDetailTeam,
  myDetailTeamSuccess,
  myDetailTeamFailure,
  acceptJoinTeam,
  acceptJoinTeamSuccess,
  acceptJoinTeamFailure,
  removeJoinTeam,
  removeJoinTeamFailure,
  removeJoinTeamSuccess,
};
