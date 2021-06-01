import http from './http';
export async function getNotificationApi() {
  return http.get('/notification/getListNotification');
}
export async function putStatusNotificationApi(id) {
  return http.put('/notification/putStatusNotification/' + id);
}
