import { call, takeLatest, put } from 'redux-saga/effects';
import { fieldTypes } from './actions';
import FieldActions from './actions';
import {
  getListFieldApi,
  getDetailFieldApi,
  userGetChildFieldApi,
  userGetPriceFieldApi,
} from '../../api/field';
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
export function* userGetChildField({ id }) {
  try {
    const response = yield call(userGetChildFieldApi, id);
    yield put(FieldActions.userGetChildFieldSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
export function* userGetPriceField({ data }) {
  try {
    const response = yield call(userGetPriceFieldApi, data);
    yield put(FieldActions.userGetPriceFieldSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
const fieldSagas = () => [
  takeLatest(fieldTypes.GET_LIST_FIELD, getListField),
  takeLatest(fieldTypes.GET_DETAIL_FIELD, getDetailField),
  takeLatest(fieldTypes.USER_GET_ALL_CHILD_FIELD, userGetChildField),
  takeLatest(fieldTypes.USER_GET_PRICE_FIELD, userGetPriceField),
];
export default fieldSagas();
