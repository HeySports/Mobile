import { makeActionCreator, makeConstantCreator } from '../../utils/utils';

export const NotificationTypes = makeConstantCreator(
  'GET_NOTIFICATION',
  'GET_NOTIFICATION_SUCCESS',
  'GET_NOTIFICATION_FAIL',
  'PUT_STATUS_NOTIFICATION',
  'PUT_STATUS_NOTIFICATION_SUCCESS',
  'PUT_STATUS_NOTIFICATION_FAIL',
);
export const getNotification = () => makeActionCreator(NotificationTypes.GET_NOTIFICATION);
export const putStatusNotification = (id) =>
  makeActionCreator(NotificationTypes.PUT_STATUS_NOTIFICATION, { id });

export const getNotificationSuccess = (response) =>
  makeActionCreator(NotificationTypes.GET_NOTIFICATION_SUCCESS, { response });

export const getNotificationFail = (error) =>
  makeActionCreator(NotificationTypes.PUT_STATUS_NOTIFICATION_FAIL, { error });
export const putStatusNotificationSuccess = (response) =>
  makeActionCreator(NotificationTypes.PUT_STATUS_NOTIFICATION_SUCCESS, { response });

export const putStatusNotificationFail = (error) =>
  makeActionCreator(NotificationTypes.GET_NOTIFICATION_FAIL, { error });
