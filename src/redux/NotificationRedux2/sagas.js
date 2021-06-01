import { takeLatest, call, put, select } from 'redux-saga/effects';
import {
  NotificationTypes,
  getNotificationFail,
  getNotificationSuccess,
  putStatusNotificationFail,
  putStatusNotificationSuccess,
} from './actions';
import http from '../../api/http';
import AsyncStorage from '@react-native-community/async-storage';
import { getNotificationApi, putStatusNotificationApi } from '../../api/notification';
export function* getNotification() {
  try {
    const response = yield call(getNotificationApi);
    console.log('res.................................................'.response);
    yield put(getNotificationSuccess(response.data));
  } catch (error) {
    console.log('error................................................', error);
    yield put(getNotificationFail(error));
  }
}
export function* putStatusNotification({ id }) {
  try {
    const storeToken = yield AsyncStorage.getItem('token');
    let token = null;
    if (storeToken) {
      token = storeToken;
    } else {
      token = yield select((state) => state.auth.token);
    }
    token && http.setAuthorizationHeader(token);
    const response = yield call(putStatusNotificationApi, id);
    yield put(putStatusNotificationSuccess(response.message));
  } catch (error) {
    console.log('error................................................', error);
    yield put(putStatusNotificationFail(error));
  }
}
const notificationSagas = () => [
  takeLatest(NotificationTypes.GET_NOTIFICATION, getNotification),
  takeLatest(NotificationTypes.PUT_STATUS_NOTIFICATION, putStatusNotification),
];
export default notificationSagas();
