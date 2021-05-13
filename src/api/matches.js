import http from './http';
export async function getListMatchesApi() {
  return http.get('/match/getListMatchFindOpponent');
}
export async function userGetDetailMatchApi(id) {
  return http.get('/match/getDetailMatch/' + id);
}

export async function userPostMatchApi(data) {
  return http.post('/match/postMatch', data);
}
export async function getListMatchFindMemberApi() {
  return http.get('/match/getListMatchFindMember');
}
