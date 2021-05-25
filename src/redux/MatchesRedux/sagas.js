import { call, takeLatest, put } from 'redux-saga/effects';
import { matchesTypes } from './actions';
import MatchesAction from './actions';
import OrdersActions from '../OrdersRedux/actions';
import {
  getListMatchFindMemberApi,
  getListMatchesApi,
  userGetDetailMatchApi,
  userPostMatchApi,
} from '../../api/matches';
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
    if (data?.type === 0) {
      yield put(MatchesAction.getListMatchFindMember());
    } else {
      yield put(MatchesAction.getListMatches());
    }
    yield put(OrdersActions.userOrderFieldFailure(null));
  } catch (error) {
    yield put(MatchesAction.userPostMatchFailure(error));
  }
}
export function* userJoinAcceptTeam({ data }) {
  try {
  } catch (error) {}
}
const matchesSagas = () => [
  takeLatest(matchesTypes.GET_LIST_MATCHES, getListMatches),
  takeLatest(matchesTypes.GET_LIST_MATCH_FIND_MEMBER, getListMatchFindMember),
  takeLatest(matchesTypes.USER_GET_DETAIL_MATCH, userGetDetailMatch),
  takeLatest(matchesTypes.USER_POST_MATCH, userPostMatch),
];
export default matchesSagas();
