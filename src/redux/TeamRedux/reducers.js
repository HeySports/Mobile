import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { teamTypes } from './actions';
const INITIAL_STATE = Immutable({
  loading: false,
  loadingOffer: false,
  team: null,
  error: null,
  type: '',
  listTeam: null,
  teamDetail: null,
  offerTeam: null,
  listOfferTeam: null,
  loadingListOffer: false,
  createTeam: null,
  commentTeam: null,
  myTeam: null,
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
export const userOfferTeam = (state) =>
  state.merge({
    loadingOffer: true,
    offerTeam: null,
    error: null,
    type: 'userOfferTeam',
  });
export const userOfferTeamSuccess = (state, { response }) =>
  state.merge({
    loadingOffer: false,
    offerTeam: response,
    error: null,
    type: 'userOfferTeam success',
  });
export const userOfferTeamFailure = (state, { error }) =>
  state.merge({
    loadingOffer: false,
    offerTeam: null,
    error: error,
    type: 'userOfferTeam failure',
  });
export const userGetOfferTeam = (state) =>
  state.merge({
    loadingListOffer: true,
    listOfferTeam: null,
    error: null,
    type: 'user get Offer Team',
  });
export const userGetOfferTeamSuccess = (state, { response }) =>
  state.merge({
    loadingListOffer: false,
    listOfferTeam: response,
    error: null,
    type: 'user get Offer Team success',
  });
export const userGetOfferTeamFailure = (state, { error }) =>
  state.merge({
    loadingListOffer: false,
    listOfferTeam: null,
    error: error,
    type: 'user get Offer Team failure',
  });
export const createTeam = (state) =>
  state.merge({
    loading: true,
    createTeam: null,
    error: null,
    type: 'user createTeam ',
  });
export const createTeamSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    createTeam: response,
    error: null,
    type: 'user createTeam success',
  });
export const createTeamFailure = (state, { error }) =>
  state.merge({
    loading: false,
    createTeam: null,
    error: error,
    type: 'user createTeam failure',
  });
export const commentTeam = (state) =>
  state.merge({
    loadingOffer: true,
    commentTeam: null,
    error: null,
    type: 'commentTeam ',
  });
export const commentTeamSuccess = (state, { response }) =>
  state.merge({
    loadingOffer: false,
    commentTeam: response,
    error: null,
    type: 'commentTeam success',
  });
export const commentTeamFailure = (state, { error }) =>
  state.merge({
    loadingOffer: false,
    commentTeam: null,
    error: error,
    type: 'commentTeam failure',
  });
export const myTeamDetail = (state) =>
  state.merge({
    loading: true,
    error: null,
    type: 'myTeamDetail ',
  });
export const myTeamDetailSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    myTeam: response,
    error: null,
    type: 'myTeamDetailSuccess',
  });
export const myTeamDetailFailure = (state, { error }) =>
  state.merge({
    loading: false,
    myTeam: null,
    error: error,
    type: 'myTeamDetailFailure',
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
  [teamTypes.USER_OFFER_TEAM]: userOfferTeam,
  [teamTypes.USER_OFFER_TEAM_SUCCESS]: userOfferTeamSuccess,
  [teamTypes.USER_OFFER_TEAM_FAILURE]: userOfferTeamFailure,
  [teamTypes.USER_GET_OFFER_TEAM]: userGetOfferTeam,
  [teamTypes.USER_GET_OFFER_TEAM_SUCCESS]: userGetOfferTeamSuccess,
  [teamTypes.USER_GET_OFFER_TEAM_FAILURE]: userGetOfferTeamFailure,
  [teamTypes.CREATE_TEAM]: createTeam,
  [teamTypes.CREATE_TEAM_SUCCESS]: createTeamSuccess,
  [teamTypes.CREATE_TEAM_FAILURE]: createTeamFailure,
  [teamTypes.COMMENT_TEAM]: commentTeam,
  [teamTypes.COMMENT_TEAM_SUCCESS]: commentTeamSuccess,
  [teamTypes.COMMENT_TEAM_FAILURE]: commentTeamFailure,
  [teamTypes.MY_DETAIL_TEAM]: myTeamDetail,
  [teamTypes.MY_DETAIL_TEAM_SUCCESS]: myTeamDetailSuccess,
  [teamTypes.MY_DETAIL_TEAM_FAILURE]: myTeamDetailFailure,
});
export default reducer;
