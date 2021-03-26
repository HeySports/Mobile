import http from './http';
export async function userGetProfileApi() {
  return http.get('/user/getProfile');
}
export async function userChangePasswordApi(data) {
  return http.post('/user/update/password', data);
}