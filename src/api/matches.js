import http from './http';
export async function getListMatchesApi() {
  return http.get('match/getAll');
}
