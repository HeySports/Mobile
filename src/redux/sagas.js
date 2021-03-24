import { all } from 'redux-saga/effects';
import appSaga from './AppRedux/sagas';
import authSaga from './AuthRedux/sagas';
import profileSaga from './ProfileRedux/sagas';
export default function* root() {
  yield all([...appSaga, ...authSaga, ...profileSaga]);
}
