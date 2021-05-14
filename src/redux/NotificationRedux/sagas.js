import { takeLatest, call, put } from 'redux-saga/effects';
import { NotificationTypes } from './actions';
import { getNotificationApi } from '../../api/notification';
export function* getNotification() {
  try {
    const response = yield call(getNotificationApi);
    yield put(NotificationTypes.getNotificationSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(NotificationTypes.getNotificationFail(error));
  }
}
const notificationSagas = () => [takeLatest(NotificationTypes.GET_NOTIFICATION, getNotification)];
export default notificationSagas();
