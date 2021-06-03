import { call, takeLatest, put, take, select } from 'redux-saga/effects';
import { userTypes } from './actions';
import UserAction from './actions';
import AuthAction from '../AuthRedux/actions';
import { userStartApp } from '../AppRedux/actions';
import { pushScreen, goBack } from '../../navigation/pushScreen';
import { getAllUsersApi, resetPasswordApi } from '../../api/users';
import { userCheckPhoneApi } from '../../api/auth';

export function* getAllUsers() {
  try {
    const response = yield call(getAllUsersApi);
    yield put(UserAction.getAllUsersSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
export function* checkPhoneNumberExisted({ data }) {
  try {
    const response = yield call(userCheckPhoneApi, data);
    yield put(UserAction.checkPhoneNumberExistedSuccess());
    pushScreen('login', 'Code', data.phone_numbers, 'Code', false, '', '');
  } catch (error) {
    console.log(error);
    yield put(UserAction.checkPhoneNumberExistedFail());
  }
}
export function* resetPassword({ data }) {
  try {
    const response = yield call(resetPasswordApi, data);
    yield put(UserAction.resetPasswordSuccess(response.data));
    yield put(AuthAction.userLogin(data));
  } catch (error) {
    console.log(error);
    yield put(UserAction.resetPasswordFail(error));
  }
}
const userSagas = () => [
  takeLatest(userTypes.GET_ALL_USER, getAllUsers),
  takeLatest(userTypes.CHECK_PHONE, checkPhoneNumberExisted),
  takeLatest(userTypes.RESET_PASSWORD, resetPassword),
];
export default userSagas();
