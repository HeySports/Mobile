import { call, takeLatest, put } from 'redux-saga/effects';
import { matchesTypes } from './actions';
import MatchesAction from './actions';
import { getListMatchesApi, userGetDetailMatchApi, userSearchMatchesApi } from '../../api/matches';
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
export function* userSearchMatches({ data }) {
  try {
    const response = yield call(userSearchMatchesApi, data);
    yield put(MatchesAction.userSearchMatchesSuccess(response.data));
  } catch (error) {
    yield put(MatchesAction.userSearchMatchesFailure(error));
  }
}
const matchesSagas = () => [
  takeLatest(matchesTypes.GET_LIST_MATCHES, getListMatches),
  takeLatest(matchesTypes.USER_GET_DETAIL_MATCH, userGetDetailMatch),
  takeLatest(matchesTypes.USER_SEARCH_MATCHES, userSearchMatches),
];
export default matchesSagas();
