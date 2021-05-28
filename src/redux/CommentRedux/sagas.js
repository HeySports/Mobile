import { call, takeLatest, put } from 'redux-saga/effects';
import { commentTypes } from './actions';
import CommentActions from './actions';
import {
  userCommentFieldApi,
  userRatingFieldApi,
  userGetCommentFieldApi,
  userDeleteCommentApi,
  userUpdateCommentApi,
} from '../../api/comment';
import FieldAction from '../FieldRedux/actions';
export function* userCommentField({ data }) {
  try {
    const dataComment = {
      id_field: data.id_field,
      description: data.description,
    };
    const responseComment = yield call(userCommentFieldApi, dataComment);
    const dataRating = {
      rating: data.rating,
    };
    yield call(userRatingFieldApi, data.id_field, dataRating);
    yield put(CommentActions.userCommentFieldSuccess(responseComment));
    yield put(FieldAction.getDetailField(data.id_field));
    yield put(CommentActions.userGetCommentField(data.id_field));
  } catch (error) {
    yield put(CommentActions.userCommentFieldFailure(error));
  }
}
export function* userGetCommentField({ id }) {
  try {
    const response = yield call(userGetCommentFieldApi, id);
    yield put(CommentActions.userGetCommentFieldSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
export function* userDeleteComment({ data }) {
  try {
    const response = yield call(userDeleteCommentApi, data.id_comment);
    yield put(CommentActions.userCommentFieldSuccess(response));
    yield put(CommentActions.userGetCommentField(data.id_field));
  } catch (error) {
    yield put(CommentActions.userDeleteCommentFailure(error));
  }
}
const commentSagas = () => [
  takeLatest(commentTypes.USER_COMMENT_FIELD, userCommentField),
  takeLatest(commentTypes.USER_GET_COMMENT_FIELD, userGetCommentField),
  takeLatest(commentTypes.USER_DELETE_COMMENT, userDeleteComment),
];
export default commentSagas();
