import { call, takeLatest, put } from 'redux-saga/effects';
import { fieldTypes } from './actions';
import FieldActions from './actions';
import { getListFieldApi, getDetailFieldApi, userGetCommentFieldApi } from '../../api/field';
export function* getListField() {
  try {
    const response = yield call(getListFieldApi);
    yield put(FieldActions.getListFieldSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
export function* getDetailField({ id }) {
  try {
    const response = yield call(getDetailFieldApi, id);
    yield put(FieldActions.getDetailFieldSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
export function* userGetCommentField({ id }) {
  try {
    const response = yield call(userGetCommentFieldApi, id);
    yield put(FieldActions.userGetCommentFieldSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
const fieldSagas = () => [
  takeLatest(fieldTypes.GET_LIST_FIELD, getListField),
  takeLatest(fieldTypes.GET_DETAIL_FIELD, getDetailField),
  takeLatest(fieldTypes.USER_GET_COMMENT_FIELD, userGetCommentField),
];
export default fieldSagas();
