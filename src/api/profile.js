import http from './http';
export async function userGetProfileApi() {
  return http.get('/user/getProfile');
}
