import { call, takeLatest, put } from 'redux-saga/effects';
import { profileTypes } from './actions';
import ProfileAction from './actions';
import { userGetProfileApi, userChangePasswordApi, userGetHistoriesApi } from '../../api/profile';
export function* userGetProfile() {
  try {
    const response = yield call(userGetProfileApi);
    yield put(ProfileAction.userGetProfileSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
export function* userChangePassword({ data }) {
  try {
    const response = yield call(userChangePasswordApi, data);
    yield put(ProfileAction.userChangePasswordSuccess(response.data));
  } catch (error) {
    yield put(ProfileAction.userChangePasswordFailure(error.data));
  }
}
export function* userGetHistories() {
  try {
    const response = yield call(userGetHistoriesApi);
    yield put(ProfileAction.userGetHistoriesSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
const userProfileSagas = () => [
  takeLatest(profileTypes.USER_GET_PROFILE, userGetProfile),
  takeLatest(profileTypes.USER_CHANGE_PASSWORD, userChangePassword),
  takeLatest(profileTypes.USER_GET_HISTORIES, userGetHistories),
];
export default userProfileSagas();
