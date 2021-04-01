import http from './http';
export async function getListFieldApi() {
  return http.get('field/getListField');
}
