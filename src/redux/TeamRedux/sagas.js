import { call, takeLatest, put } from 'redux-saga/effects';
import { teamTypes } from './actions';
import TeamActions from './actions';
import {
  getTeamUserApi,
  getListTeamApi,
  getTeamDetail,
  offerTeamApi,
  getOfferOfTeamApi,
  createTeamApi,
  commentTeamApi,
  getMyDetailTeamApi,
  acceptJoinTeamApi,
  removeJoinTeamApi,
} from '../../api/team';
export function* userGetTeam({ id }) {
  try {
    const response = yield call(getTeamUserApi, id);
    yield put(TeamActions.userGetTeamSuccess(response?.data));
  } catch (error) {
    yield put(TeamActions.userGetTeamFailure(error));
  }
}
export function* getListTeam() {
  try {
    const response = yield call(getListTeamApi);
    yield put(TeamActions.getListTeamSuccess(response?.data));
  } catch (error) {
    yield put(TeamActions.getListTeamFailure(error));
  }
}
export function* getTeamDetailApi({ id }) {
  try {
    const response = yield call(getTeamDetail, id);
    yield put(TeamActions.getTeamDetailSuccess(response?.data));
  } catch (error) {
    yield put(TeamActions.getTeamDetailFailure(error));
  }
}
export function* userOfferTeamApi({ data }) {
  try {
    const response = yield call(offerTeamApi, data);
    yield put(TeamActions.userOfferTeamSuccess(response?.data));
    yield put(TeamActions.userGetOfferTeam(data?.id_team));
  } catch (error) {
    yield put(TeamActions.userOfferTeamFailure(error));
  }
}
export function* userGetListOfferTeam({ id }) {
  try {
    const response = yield call(getOfferOfTeamApi, id);
    yield put(TeamActions.userGetOfferTeamSuccess(response?.data));
  } catch (error) {
    yield put(TeamActions.userGetOfferTeamFailure(error));
  }
}
export function* userCreateTeam({ data }) {
  try {
    const response = yield call(createTeamApi, data);
    yield put(TeamActions.createTeamSuccess(response?.data));
    yield put(TeamActions.getListTeam());
  } catch (error) {
    yield put(TeamActions.createTeamFailure(error));
  }
}
export function* userCommentTeam({ data }) {
  try {
    const response = yield call(commentTeamApi, data);
    yield put(TeamActions.commentTeamSuccess(response?.data));
    yield put(TeamActions.getTeamDetail(data?.id_team));
  } catch (error) {
    yield put(TeamActions.commentTeamFailure(error));
  }
}
export function* myDetailTeam() {
  try {
    const response = yield call(getMyDetailTeamApi);
    yield put(TeamActions.userGetOfferTeam(response?.data?.team?.id));
    yield put(TeamActions.myDetailTeamSuccess(response.data));
  } catch (error) {
    yield put(TeamActions.myDetailTeamFailure(error));
  }
}
export function* acceptJoinTeam({ id }) {
  try {
    const response = yield call(acceptJoinTeamApi, id);
    yield put(TeamActions.acceptJoinTeamSuccess(response?.data));
    yield put(TeamActions.myDetailTeam());
  } catch (error) {
    yield put(TeamActions.acceptJoinTeamFailure(error));
  }
}
export function* removeJoinTeam({ id }) {
  try {
    const response = yield call(removeJoinTeamApi, id);
    yield put(TeamActions.removeJoinTeamSuccess(response?.data));
    yield put(TeamActions.myDetailTeam());
  } catch (error) {
    yield put(TeamActions.removeJoinTeamFailure(error));
  }
}
const teamSagas = () => [
  takeLatest(teamTypes.USER_GET_TEAM, userGetTeam),
  takeLatest(teamTypes.GET_TEAM_DETAIL, getTeamDetailApi),
  takeLatest(teamTypes.GET_LIST_TEAM, getListTeam),
  takeLatest(teamTypes.USER_OFFER_TEAM, userOfferTeamApi),
  takeLatest(teamTypes.USER_GET_OFFER_TEAM, userGetListOfferTeam),
  takeLatest(teamTypes.COMMENT_TEAM, userCommentTeam),
  takeLatest(teamTypes.CREATE_TEAM, userCreateTeam),
  takeLatest(teamTypes.MY_DETAIL_TEAM, myDetailTeam),
  takeLatest(teamTypes.ACCEPT_JOIN_TEAM, acceptJoinTeam),
  takeLatest(teamTypes.REMOVE_JOIN_TEAM, removeJoinTeam),
];
export default teamSagas();
