import { call, takeLatest, put, select } from 'redux-saga/effects';
import { searchTypes } from './actions';
import SearchActions from './actions';
import {
  userPostHistoriesSearchApi,
  userGetHistoriesSearchApi,
  userDeleteHistoriesSearchApi,
} from '../../api/search';
export function* userPostHistoriesSearch({ data }) {
  try {
    const oldHistory = yield select((state) => state.search.getHistories);
    const response = yield call(userPostHistoriesSearchApi, data);
    if (response) {
      yield put(SearchActions.userGetHistoriesSearchSuccess([...oldHistory, data]));
    }
  } catch (error) {
    yield put(SearchActions.userPostHistoriesSearchFailure(error));
  }
}
export function* userGetHistoriesSearch() {
  try {
    const response = yield call(userGetHistoriesSearchApi);
    yield put(SearchActions.userGetHistoriesSearchSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
export function* userDeleteHistoriesSearch({ id }) {
  try {
    const response = yield call(userDeleteHistoriesSearchApi, id);
    yield put(SearchActions.userDeleteHistoriesSuccess(response.data));
    yield put(SearchActions.userGetHistoriesSearch());
  } catch (error) {
    console.log(error);
  }
}
const searchSagas = () => [
  takeLatest(searchTypes.USER_POST_HISTORIES_SEARCH, userPostHistoriesSearch),
  takeLatest(searchTypes.USER_GET_HISTORIES_SEARCH, userGetHistoriesSearch),
  takeLatest(searchTypes.USER_DELETE_HISTORIES_SEARCH, userDeleteHistoriesSearch),
];
export default searchSagas();
