import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { commentTypes } from './actions';

const INITIAL_STATE = Immutable({
  loading: false,
  responsePostComment: null,
  responseGetComment: null,
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
const reducer = makeReducerCreator(INITIAL_STATE, {
  [commentTypes.USER_COMMENT_FIELD]: userCommentField,
  [commentTypes.USER_COMMENT_FIELD_SUCCESS]: userCommentFieldSuccess,
  [commentTypes.USER_COMMENT_FIELD_FAILURE]: userCommentFieldFailure,
  [commentTypes.USER_GET_COMMENT_FIELD]: userGetCommentField,
  [commentTypes.USER_GET_COMMENT_FIELD_SUCCESS]: userGetCommentFieldSuccess,
});
export default reducer;
