import { call, takeLatest, put } from 'redux-saga/effects';
import { LoginTypes } from './actions';
import AuthAction from './actions';
import { userLoginApi } from '../../api/auth';
import { userStartApp } from '../AppRedux/actions';
import AsyncStorage from '@react-native-community/async-storage';
export function* userLogin({ data }) {
  try {
    const response = yield call(userLoginApi, data);
    yield AsyncStorage.setItem('token', response.data.access_token);
    yield put(AuthAction.userLoginSuccess(response));
    yield put(userStartApp());
  } catch (error) {
    yield put(AuthAction.userLoginFailure(error));
  }
}

export function* userLogout() {
  yield AsyncStorage.clear();
  yield AsyncStorage.setItem('skip', JSON.stringify(true));
  yield put(userStartApp());
}
const userAuthSagas = () => [
  takeLatest(LoginTypes.USER_LOGIN, userLogin),
  takeLatest(LoginTypes.USER_LOGOUT, userLogout),
];
export default userAuthSagas();
