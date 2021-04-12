import http from './http';
export async function getListFieldApi() {
  return http.get('field/getListField');
}
export async function getDetailFieldApi(id) {
  return http.get('/field/getDetailField/' + id);
}
