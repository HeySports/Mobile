import http from './http';
export async function getTeamUserApi(id) {
  return http.get('/team/getListTeamByUser/' + id);
}
