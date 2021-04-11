import { call, takeLatest, put, take } from 'redux-saga/effects';
import { userTypes } from './actions';
import UserAction from './actions';
import { getAllUsersApi } from '../../api/users';
export function* getAllUsers() {
  try {
    const response = yield call(getAllUsersApi);
    yield put(UserAction.getAllUsersSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

const userSagas = () => [takeLatest(userTypes.GET_ALL_USER, getAllUsers)];
export default userSagas();
