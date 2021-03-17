import http from './http';
export async function userLoginApi(data) {
  return http.post('auth/login', data);
}
