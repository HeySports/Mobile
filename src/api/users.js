import http from './http';
export async function getAllUsersApi() {
  return http.get('/user/getAll');
}
