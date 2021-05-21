import { call, takeLatest, put } from 'redux-saga/effects';
import { profileTypes } from './actions';
import ProfileAction from './actions';
import TeamActions from '../TeamRedux/actions';
import {
  userGetProfileApi,
  userChangePasswordApi,
  userGetHistoriesApi,
  userGetDetailInfoApi,
} from '../../api/profile';
export function* userGetProfile() {
  try {
    const response = yield call(userGetProfileApi);
    yield put(ProfileAction.userGetProfileSuccess(response.data));
    yield put(TeamActions.userGetTeam(response?.data?.id));
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
export function* userGetDetailInfo({ id }) {
  try {
    const response = yield call(userGetDetailInfoApi, id);
    yield put(ProfileAction.userGetDetailSuccess(response.data.data[0]));
  } catch (error) {
    console.log(error);
  }
}
const userProfileSagas = () => [
  takeLatest(profileTypes.USER_GET_PROFILE, userGetProfile),
  takeLatest(profileTypes.USER_CHANGE_PASSWORD, userChangePassword),
  takeLatest(profileTypes.USER_GET_HISTORIES, userGetHistories),
  takeLatest(profileTypes.USER_GET_DETAIL, userGetDetailInfo),
];
export default userProfileSagas();
