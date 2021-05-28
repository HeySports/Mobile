import http from './http';
export async function userCommentFieldApi(data) {
  return http.post('/commentField/postCommentField', data);
}
export async function userRatingFieldApi(id, data) {
  return http.put('/field/putFieldRating/' + id, data);
}
export async function userGetCommentFieldApi(id) {
  return http.get('/commentField/getCommentFieldByIdField/' + id);
}
export async function userDeleteCommentApi(id) {
  return http.delete('/commentField/deleteCommentField/' + id);
}
export async function userUpdateCommentApi(data) {
  return http.put('/commentField/postCommentField');
}
