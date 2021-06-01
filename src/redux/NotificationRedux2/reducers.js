import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { NotificationTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingApp: true,
  error: null,
  notificationData: null,
  messagePut: '',
  NotificationTypes: '',
});

export const getNotification = (state) =>
  state.merge({ loadingApp: false, NotificationTypes: 'GET NOTIFICATION' });
export const getNotificationSuccess = (state, { response }) =>
  state.merge({
    loadingApp: true,
    notificationData: response,
    NotificationTypes: 'GET NOTIFICATION SUCCESS',
    error: null,
  });
export const getNotificationFail = (state, { error }) =>
  state.merge({
    loadingApp: false,
    notificationData: null,
    error: error,
    NotificationTypes: 'GET NOTIFICATION FAIL',
  });
export const putStatusNotificationSuccess = (state, { response }) =>
  state.merge({
    messagePut: response,
    NotificationTypes: 'PUT STATUS NOTIFICATION SUCCESS',
    error: null,
  });
export const putStatusNotificationFail = (state, { error }) =>
  state.merge({
    messagePut: error,
    NotificationTypes: 'PUT STATUS NOTIFICATION  FAIL',
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [NotificationTypes.GET_NOTIFICATION]: getNotification,
  [NotificationTypes.GET_NOTIFICATION_SUCCESS]: getNotificationSuccess,
  [NotificationTypes.GET_NOTIFICATION_FAIL]: getNotificationFail,
  [NotificationTypes.PUT_STATUS_NOTIFICATION_SUCCESS]: putStatusNotificationSuccess,
  [NotificationTypes.PUT_STATUS_NOTIFICATION_FAIL]: putStatusNotificationFail,
});

export default reducer;
