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
};
