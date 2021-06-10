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
export async function commentTeamApi(data) {
  return http.post('/team/ratingTeam', data);
}
export async function getMyDetailTeamApi() {
  return http.get('/team/getDetailTeam/byUser');
}
export async function acceptJoinTeamApi(id) {
  console.log('===============http://127.0.0.1:8000/=====================');
  console.log(id);
  console.log('====================================');
  return http.put('/offers/accept/' + id + '/offerTeam');
}
export async function removeJoinTeamApi(id) {
  return http.put('/offers/remove/' + id + '/offerTeam');
}
