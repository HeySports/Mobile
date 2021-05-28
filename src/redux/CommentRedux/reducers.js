import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { commentTypes } from './actions';

const INITIAL_STATE = Immutable({
  loading: false,
  responsePostComment: null,
  responseGetComment: null,
  responseDeleteComment: null,
  responseUpdateComment: null,
  error: null,
  type: '',
});
export const userCommentField = (state) =>
  state.merge({
    loading: true,
    responsePostComment: null,
    error: null,
    type: 'USER COMMENT FIELD',
  });
export const userCommentFieldSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    responsePostComment: response,
    error: null,
    type: 'USER COMMENT FIELD SUCCESS',
  });
export const userCommentFieldFailure = (state, { error }) => {
  state.merge({
    loading: false,
    responsePostComment: null,
    error: error,
    type: 'USER COMMENT FIELD FAILURE',
  });
};
export const userGetCommentField = (state) =>
  state.merge({
    loading: true,
    responseGetComment: null,
    error: null,
    type: 'USER GET COMMENT FIELD',
  });
export const userGetCommentFieldSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    responseGetComment: response,
    error: null,
    type: 'USER GET COMMENT FIELD SUCCESS',
  });
export const userUpdateComment = (state) =>
  state.merge({
    loading: true,
    responseUpdateComment: null,
    error: null,
    type: 'USER UPDATES COMMENT',
  });
export const userUpdateCommentSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    responseUpdateComment: response,
    error: null,
    type: 'USER_UPDATE_COMMENT_SUCCESS',
  });
export const userUpdateCommentFailure = (state, { error }) =>
  state.merge({
    loading: false,
    responseUpdateComment: null,
    error: error,
    type: 'USER_UPDATE_COMMENT_FAILURE',
  });
const userDeleteComment = (state) =>
  state.merge({
    loading: true,
    responseDeleteComment: null,
    error: null,
    type: 'USER_DELETE_COMMENT',
  });
const userDeleteCommentSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    responseDeleteComment: response,
    error: null,
    type: 'USER_DELETE_COMMENT_SUCCESS',
  });
const userDeleteCommentFailure = (state, { error }) =>
  state.merge({
    loading: false,
    responseDeleteComment: null,
    error: error,
    type: 'USER_USER_DELETE_COMMENT_FAILURE',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [commentTypes.USER_COMMENT_FIELD]: userCommentField,
  [commentTypes.USER_COMMENT_FIELD_SUCCESS]: userCommentFieldSuccess,
  [commentTypes.USER_COMMENT_FIELD_FAILURE]: userCommentFieldFailure,
  [commentTypes.USER_GET_COMMENT_FIELD]: userGetCommentField,
  [commentTypes.USER_GET_COMMENT_FIELD_SUCCESS]: userGetCommentFieldSuccess,
  [commentTypes.USER_UPDATE_COMMENT]: userUpdateComment,
  [commentTypes.USER_UPDATE_COMMENT_SUCCESS]: userUpdateCommentSuccess,
  [commentTypes.USER_UPDATE_COMMENT_FAILURE]: userUpdateCommentFailure,
  [commentTypes.USER_DELETE_COMMENT]: userDeleteComment,
  [commentTypes.USER_DELETE_COMMENT_SUCCESS]: userDeleteCommentSuccess,
  [commentTypes.USER_DELETE_COMMENT_FAILURE]: userDeleteCommentFailure,
});
export default reducer;
