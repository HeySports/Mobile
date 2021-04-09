import http from './http';
export async function userPostHistoriesSearchApi(data) {
  return http.post('/match/histories/post', data);
}
export async function userGetHistoriesSearchApi() {
  return http.get('/match/histories/get');
}
export async function userDeleteHistoriesSearchApi(id) {
  return http.delete('match/histories/' + id + '/delete');
}
export async function userSearchMatchesApi(data) {
  return http.post('/match/postSearchByText', data);
}
