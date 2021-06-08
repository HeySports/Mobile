import { call, takeLatest, put } from 'redux-saga/effects';
import { matchesTypes } from './actions';
import MatchesAction from './actions';
import OrdersActions from '../OrdersRedux/actions';
import {
  getListMatchFindMemberApi,
  getListMatchesApi,
  userGetDetailMatchApi,
  userPostMatchApi,
  userJoinAcceptTeamApi,
  joinMatchFindMembers,
} from '../../api/matches';
import myMatchActions from '../myMatches/actions';
export function* getListMatches() {
  try {
    const response = yield call(getListMatchesApi);
    yield put(MatchesAction.getListMatchesSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
export function* getListMatchFindMember() {
  try {
    const response = yield call(getListMatchFindMemberApi);
    yield put(MatchesAction.getListMatchFindMemberSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
export function* userGetDetailMatch({ id }) {
  try {
    const response = yield call(userGetDetailMatchApi, id);
    yield put(MatchesAction.userGetDetailMatchSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
export function* userPostMatch({ data }) {
  try {
    const response = yield call(userPostMatchApi, data);
    yield put(MatchesAction.userPostMatchSuccess(response.data));
    yield put(OrdersActions.userOrderFieldFailure(null));
    yield put(myMatchActions.userGetMyMatches());
  } catch (error) {
    yield put(MatchesAction.userPostMatchFailure(error));
  }
}
export function* userJoinAcceptTeam({ data }) {
  try {
    const response = yield call(userJoinAcceptTeamApi, data);
    yield put(MatchesAction.userAcceptTeamSuccess(response));
    yield put(myMatchActions.userGetMyMatches());
  } catch (error) {
    yield put(MatchesAction.userAcceptTeamFailure(error));
  }
}
export function* userJoinMatchApi({ data }) {
  try {
    const response = yield call(joinMatchFindMembers, data);
    yield put(MatchesAction.getListMatchFindMember());
    yield put(myMatchActions.userGetMyMatches());
    yield put(MatchesAction.userJoinMatchSuccess(response?.data));
  } catch (error) {
    yield put(MatchesAction.userJoinMatchFailure(error));
  }
}
const matchesSagas = () => [
  takeLatest(matchesTypes.GET_LIST_MATCHES, getListMatches),
  takeLatest(matchesTypes.GET_LIST_MATCH_FIND_MEMBER, getListMatchFindMember),
  takeLatest(matchesTypes.USER_GET_DETAIL_MATCH, userGetDetailMatch),
  takeLatest(matchesTypes.USER_POST_MATCH, userPostMatch),
  takeLatest(matchesTypes.USER_JOIN_ACCEPT_TEAM, userJoinAcceptTeam),
  takeLatest(matchesTypes.JOIN_MATCH, userJoinMatchApi),
];
export default matchesSagas();
