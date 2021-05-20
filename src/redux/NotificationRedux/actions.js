import { makeActionCreator, makeConstantCreator } from '../../utils/utils';

export const NotificationTypes = makeConstantCreator(
  'GET_NOTIFICATION',
  'GET_NOTIFICATION_SUCCESS',
  'GET_NOTIFICATION_FAIL',
);

export const getNotification = () => makeActionCreator(NotificationTypes.GET_NOTIFICATION);

export const getNotificationSuccess = (response) =>
  makeActionCreator(NotificationTypes.GET_NOTIFICATION_SUCCESS, { response });

export const getNotificationFail = (error) =>
  makeActionCreator(NotificationTypes.GET_NOTIFICATION_FAIL, { error });
