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
export async function userJoinAcceptTeamApi(data) {
  return http.put('/match/joinTeamOpponent/' + data?.id, data);
}
export async function getMyMatchApi() {
  return http.get('/match/getListMatchOfUser?page=1&limit=10&orderBy=createdAt:DESC');
}
