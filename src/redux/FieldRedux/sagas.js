import { call, takeLatest, put } from 'redux-saga/effects';
import { fieldTypes } from './actions';
import FieldActions from './actions';
import { getListFieldApi, getDetailFieldApi, userGetChildFieldApi } from '../../api/field';
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
export function* userGetChildField() {
  try {
    const response = yield call(userGetChildFieldApi);
    yield put(FieldActions.userGetChildFieldSuccess(response.data));
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
}
const fieldSagas = () => [
  takeLatest(fieldTypes.GET_LIST_FIELD, getListField),
  takeLatest(fieldTypes.GET_DETAIL_FIELD, getDetailField),
  takeLatest(fieldTypes.USER_GET_ALL_CHILD_FIELD, userGetChildField),
];
export default fieldSagas();
