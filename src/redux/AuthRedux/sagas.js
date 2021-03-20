import { call, takeLatest, put } from 'redux-saga/effects';
import { LoginTypes } from './actions';
import AuthAction from './actions';
import { userLoginApi } from '../../api/auth';
import { userStartApp } from '../AppRedux/actions';
import AsyncStorage from '@react-native-community/async-storage';
export function* userLogin({ data }) {
  try {
    const response = yield call(userLoginApi, data);
    console.log(response.data.access_token);
    yield AsyncStorage.setItem('token', response.data.access_token);
    yield put(AuthAction.userLoginSuccess(response));
    yield put(userStartApp());
  } catch (error) {
    console.log(error);
  }
}
const userAuthSagas = () => [takeLatest(LoginTypes.USER_LOGIN, userLogin)];
export default userAuthSagas();
