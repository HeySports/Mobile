import { call, takeLatest, put } from 'redux-saga/effects';
import { searchTypes } from './actions';
import SearchActions from './actions';
import { userPostHistoriesSearchApi, userGetHistoriesSearchApi } from '../../api/search';
export function* userPostHistoriesSearch({ data }) {
  try {
    const response = yield call(userPostHistoriesSearchApi, data);
    yield put(SearchActions.userGetHistoriesSearchSuccess(response));
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
const searchSagas = () => [
  takeLatest(searchTypes.USER_POST_HISTORIES_SEARCH, userPostHistoriesSearch),
  takeLatest(searchTypes.USER_GET_HISTORIES_SEARCH, userGetHistoriesSearch),
];
export default searchSagas();
