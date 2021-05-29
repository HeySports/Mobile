import { call, takeLatest, put } from 'redux-saga/effects';
import { myMatchesType } from './actions';
import myMatchActions from './actions';
import { getMyMatchApi } from '../../api/matches';
export function* myMatchApi() {
  try {
    const response = yield call(getMyMatchApi);
    console.log('====================================');
    console.log(response);
    console.log('====================================');
    yield put(myMatchActions.userGetMyMatchesSuccess(response.data));
  } catch (error) {
    yield put(myMatchActions.userGetMyMatchesFailure(error));
  }
}
const myMatchSagas = () => [takeLatest(myMatchesType.USER_GET_MY_MATCHES, myMatchApi)];
export default myMatchSagas();
