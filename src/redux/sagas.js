import { all } from 'redux-saga/effects';
import appSaga from './AppRedux/sagas';
export default function* root() {
  yield all([...appSaga]);
}
