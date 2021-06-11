import http from './http';
export async function getListFieldApi() {
  return http.get('field/getListField');
}
export async function getDetailFieldApi(id) {
  return http.get('/field/getDetailField/' + id);
}
export async function userGetChildFieldApi(data) {
  return http.get('/field/' + data.id_field + '/getChildFieldWithType/' + data.type_field);
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
