import { call, takeLatest, put } from 'redux-saga/effects';
import { matchesTypes } from './actions';
import MatchesAction from './actions';
import { getListMatchesApi } from '../../api/matches';
export function* getListMatches() {
  try {
    const response = yield call(getListMatchesApi);
    yield put(MatchesAction.getListMatchesSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

const matchesSagas = () => [takeLatest(matchesTypes.GET_LIST_MATCHES, getListMatches)];
export default matchesSagas();
