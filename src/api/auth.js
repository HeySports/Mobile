import http from './http';
export async function userLoginApi(data) {
  return http.post('/auth/login', data);
}
export async function userRegisterApi(data) {
  return http.post('/auth/register', data);
}
export async function userCheckPhoneApi(data) {
  return http.post('/auth/checkUser', data);
}
