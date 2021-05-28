import { call, takeLatest, put, take, select } from 'redux-saga/effects';
import { userTypes } from './actions';
import UserAction from './actions';
import { userStartApp } from '../AppRedux/actions';
import { pushScreen, goBack } from '../../navigation/pushScreen';
import { getAllUsersApi, checkPhoneNumberExistedApi, resetPasswordApi } from '../../api/users';
export function* getAllUsers() {
  try {
    const response = yield call(getAllUsersApi);
    yield put(UserAction.getAllUsersSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
function* waitFor(selector) {
  if (yield select(selector)) {
    return;
  } // (1)

  while (true) {
    yield take('*'); // (1a)
    if (yield select(selector)) {
      return;
    } // (1b)
  }
}
export function* checkPhoneNumberExisted({ data }) {
  try {
    const response = yield call(checkPhoneNumberExistedApi, data.phone_numbers);
    yield put(UserAction.checkPhoneNumberExistedSuccess(response.data));
    yield call(waitFor, (state) => state.users.responseCheckPhone != null);
    pushScreen('login', 'Code', data.phone_numbers, 'Code', false, '', '');
  } catch (error) {
    console.log(error);
    yield put(UserAction.checkPhoneNumberExistedFail(error));
  }
}
export function* resetPassword({ data }) {
  try {
    const response = yield call(resetPasswordApi, data);
    yield put(UserAction.resetPasswordSuccess(response.data));
    yield put(userStartApp());
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
