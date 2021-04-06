import { call, takeLatest, put } from 'redux-saga/effects';
import { matchesTypes } from './actions';
import MatchesAction from './actions';
import { getListMatchesApi, userGetDetailMatchApi } from '../../api/matches';
export function* getListMatches() {
  try {
    const response = yield call(getListMatchesApi);
    yield put(MatchesAction.getListMatchesSuccess(response.data));
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
const matchesSagas = () => [
  takeLatest(matchesTypes.GET_LIST_MATCHES, getListMatches),
  takeLatest(matchesTypes.USER_GET_DETAIL_MATCH, userGetDetailMatch),
];
export default matchesSagas();
