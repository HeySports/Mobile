import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const commentTypes = makeConstantCreator(
  'USER_COMMENT_FIELD',
  'USER_COMMENT_FIELD_SUCCESS',
  'USER_COMMENT_FIELD_FAILURE',
  'USER_GET_COMMENT_FIELD',
  'USER_GET_COMMENT_FIELD_SUCCESS',
  'USER_DELETE_COMMENT',
  'USER_DELETE_COMMENT_SUCCESS',
  'USER_DELETE_COMMENT_FAILURE',
  'USER_UPDATE_COMMENT',
  'USER_UPDATE_COMMENT_SUCCESS',
  'USER_UPDATE_COMMENT_FAILURE',
);
const userCommentField = (data) => makeActionCreator(commentTypes.USER_COMMENT_FIELD, { data });
const userCommentFieldSuccess = (response) =>
  makeActionCreator(commentTypes.USER_COMMENT_FIELD_SUCCESS, { response });
const userCommentFieldFailure = (error) =>
  makeActionCreator(commentTypes.USER_COMMENT_FIELD_FAILURE, { error });
const userGetCommentField = (id) => makeActionCreator(commentTypes.USER_GET_COMMENT_FIELD, { id });
const userGetCommentFieldSuccess = (response) =>
  makeActionCreator(commentTypes.USER_GET_COMMENT_FIELD_SUCCESS, { response });
const userDeleteComment = (data) => makeActionCreator(commentTypes.USER_DELETE_COMMENT, { data });
const userDeleteCommentSuccess = (response) =>
  makeActionCreator(commentTypes.USER_DELETE_COMMENT_SUCCESS, { response });
const userDeleteCommentFailure = (error) =>
  makeActionCreator(commentTypes.USER_DELETE_COMMENT_FAILURE, { error });
const userUpdateComment = (data) => makeActionCreator(commentTypes.USER_UPDATE_COMMENT, { data });
const userUpdateCommentSuccess = (response) =>
  makeActionCreator(commentTypes.USER_UPDATE_COMMENT_SUCCESS, { response });
const userUpdateCommentFailure = (error) =>
  makeActionCreator(commentTypes.USER_UPDATE_COMMENT_FAILURE, { error });
export default {
  userCommentField,
  userCommentFieldSuccess,
  userCommentFieldFailure,
  userGetCommentField,
  userGetCommentFieldSuccess,
  userDeleteComment,
  userDeleteCommentSuccess,
  userDeleteCommentFailure,
  userUpdateComment,
  userUpdateCommentSuccess,
  userUpdateCommentFailure,
};
