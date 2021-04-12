import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const commentTypes = makeConstantCreator(
  'USER_COMMENT_FIELD',
  'USER_COMMENT_FIELD_SUCCESS',
  'USER_COMMENT_FIELD_FAILURE',
  'USER_GET_COMMENT_FIELD',
  'USER_GET_COMMENT_FIELD_SUCCESS',
);
const userCommentField = (data) => makeActionCreator(commentTypes.USER_COMMENT_FIELD, { data });
const userCommentFieldSuccess = (response) =>
  makeActionCreator(commentTypes.USER_COMMENT_FIELD_SUCCESS, { response });
const userCommentFieldFailure = (error) =>
  makeActionCreator(commentTypes.USER_COMMENT_FIELD_FAILURE);
const userGetCommentField = (id) => makeActionCreator(commentTypes.USER_GET_COMMENT_FIELD, { id });
const userGetCommentFieldSuccess = (response) =>
  makeActionCreator(commentTypes.USER_GET_COMMENT_FIELD_SUCCESS, { response });
export default {
  userCommentField,
  userCommentFieldSuccess,
  userCommentFieldFailure,
  userGetCommentField,
  userGetCommentFieldSuccess,
};
