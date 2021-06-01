import { call, takeLatest, put } from 'redux-saga/effects';
import { LoginTypes } from './actions';
import AuthAction from './actions';
import { userLoginApi, userRegisterApi, userCheckPhoneApi } from '../../api/auth';
import { userStartApp } from '../AppRedux/actions';
import { pushScreen, goBack } from '../../navigation/pushScreen';
import AsyncStorage from '@react-native-community/async-storage';
export function* userLogin({ data }) {
  try {
    const response = yield call(userLoginApi, data);
    yield AsyncStorage.setItem('token', response.data.access_token);
    yield put(AuthAction.userLoginSuccess(response?.data));
    yield put(userStartApp());
  } catch (error) {
    yield put(AuthAction.userLoginFailure(error));
  }
}
export function* userCheckPhone({ data }) {
  try {
    const response = yield call(userCheckPhoneApi, data);
    console.log('check phone..............................', JSON.stringify(response));
    yield put(AuthAction.userCheckPhoneSuccess());
  } catch (error) {
    yield put(AuthAction.userCheckPhoneFailure());
    pushScreen('login', 'CodeRegister', data, 'CodeRegister', false, '', '');
  }
}
export function* userRegister({ data }) {
  try {
    console.log('register saga: ');
    const response = yield call(userRegisterApi, data);
    yield put(userStartApp());
  } catch (error) {
    yield put(AuthAction.userRegisterFailure(error));
    goBack();
  }
}
export function* userLogout() {
  yield AsyncStorage.clear();
  yield AsyncStorage.setItem('skip', JSON.stringify(true));
  yield put(userStartApp());
}
const userAuthSagas = () => [
  takeLatest(LoginTypes.USER_LOGIN, userLogin),
  takeLatest(LoginTypes.USER_REGISTER, userRegister),
  takeLatest(LoginTypes.USER_LOGOUT, userLogout),
  takeLatest(LoginTypes.USER_CHECK_PHONE, userCheckPhone),
];
export default userAuthSagas();
