import http from './http';
export async function getAllUsersApi() {
  return http.get('/user/getAll');
}
export async function checkPhoneNumberExistedApi(data) {
  return http.get('/user/checkPhoneNumber/' + data);
}
export async function resetPasswordApi(data) {
  console.log('resetPassword: ' + JSON.stringify(data));
  return http.put('/user/resetPassword', data);
}
