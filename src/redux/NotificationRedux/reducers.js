import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { NotificationTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingApp: true,
  error: null,
  notificationData: null,
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

const reducer = makeReducerCreator(INITIAL_STATE, {
  [NotificationTypes.GET_NOTIFICATION]: getNotification,
  [NotificationTypes.GET_NOTIFICATION_SUCCESS]: getNotificationSuccess,
  [NotificationTypes.GET_NOTIFICATION_FAIL]: getNotificationFail,
});

export default reducer;
