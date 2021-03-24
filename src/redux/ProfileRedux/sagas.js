import { call, takeLatest, put } from 'redux-saga/effects';
import { profileTypes } from './actions';
import ProfileAction from './actions';
import { userGetProfileApi } from '../../api/profile';
export function* userGetProfile() {
  try {
    const response = yield call(userGetProfileApi);
    yield put(ProfileAction.userGetProfileSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
const userProfileSagas = () => [takeLatest(profileTypes.USER_GET_PROFILE, userGetProfile)];
export default userProfileSagas();
