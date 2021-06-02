import http from './http';
export async function getTeamUserApi(id) {
  return http.get('/team/getListTeamByUser/' + id);
}
export async function getListTeamApi() {
  return http.get('/team/getListTeam');
}
export async function getTeamDetail(id) {
  return http.get('/team/getTeam/' + id);
}
