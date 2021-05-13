import http from './http';
export async function getNotificationApi() {
  return http.get('/notification/getListNotification');
}
