import { call, takeLatest, put } from 'redux-saga/effects';
import { fieldTypes } from './actions';
import FieldActions from './actions';
import { getListFieldApi } from '../../api/field';
export function* getListField() {
  try {
    const response = yield call(getListFieldApi);
    yield put(FieldActions.getListFieldSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
const fieldSagas = () => [takeLatest(fieldTypes.GET_LIST_FIELD, getListField)];
export default fieldSagas();
