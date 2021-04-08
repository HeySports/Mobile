import http from './http';
export async function userPostHistoriesSearchApi(data) {
  return http.post('/match/histories/post', data);
}
export async function userGetHistoriesSearchApi(data) {
  return http.get('/match/histories/get');
}
