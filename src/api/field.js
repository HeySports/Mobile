import http from './http';
export async function getListFieldApi() {
  return http.get('field/getListField');
}
export async function getDetailFieldApi(id) {
  return http.get('/field/getDetailField/' + id);
}
export async function userGetChildFieldApi(id) {
  return http.get('/field/getChildField/' + id);
}

export async function userGetPriceFieldApi(data) {
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return http.get(
    '/match/price/' +
      data?.id_field +
      '/field/byType/' +
      data?.type_field +
      '/and/byTime/' +
      data?.time,
  );
}
