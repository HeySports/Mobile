import http from './http';
export async function userOrderFieldApi(data) {
  return http.post('/order/postOrder', data);
}
