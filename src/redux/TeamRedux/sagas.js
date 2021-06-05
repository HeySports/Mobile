import { call, takeLatest, put } from 'redux-saga/effects';
import { teamTypes } from './actions';
import TeamActions from './actions';
import {
  getTeamUserApi,
  getListTeamApi,
  getTeamDetail,
  offerTeamApi,
  getOfferOfTeamApi,
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
const teamSagas = () => [
  takeLatest(teamTypes.USER_GET_TEAM, userGetTeam),
  takeLatest(teamTypes.GET_TEAM_DETAIL, getTeamDetailApi),
  takeLatest(teamTypes.GET_LIST_TEAM, getListTeam),
  takeLatest(teamTypes.USER_OFFER_TEAM, userOfferTeamApi),
  takeLatest(teamTypes.USER_GET_OFFER_TEAM, userGetListOfferTeam),
];
export default teamSagas();
