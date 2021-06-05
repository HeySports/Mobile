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
export async function offerTeamApi(data) {
  return http.post('/offers/offerTeam', data);
}

export async function getOfferOfTeamApi(id) {
  return http.get('/offers/get/' + id + '/offerTeam');
}
export async function createTeamApi(data) {
  return http.post('/team/postTeam', data);
}
