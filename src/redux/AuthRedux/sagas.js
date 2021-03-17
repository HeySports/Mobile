import { call, takeLatest } from 'redux-saga/effects';
import { LoginTypes } from './actions';
import { userLoginApi } from '../../api/auth';
export function* userLogin({ data }) {
  try {
    const response = yield call(userLoginApi, data);
    // const newResponse = {
    //   data: response.data.user,
    //   token: response.data.token.access_token,
    // };
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

const userAuthSagas = () => [takeLatest(LoginTypes.USER_LOGIN, userLogin)];
export default userAuthSagas();
