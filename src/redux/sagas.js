import { all } from 'redux-saga/effects';
import appSaga from './AppRedux/sagas';
import authSaga from './AuthRedux/sagas';
import profileSaga from './ProfileRedux/sagas';
import matchesSagas from './MatchesRedux/sagas';
import fieldSagas from './FieldRedux/sagas';
import searchSagas from './SearchRedux/sagas';
import userSagas from './UserRedux/sagas';
import commentSagas from './CommentRedux/sagas';
import orderSagas from './OrdersRedux/sagas';
import teamSagas from './TeamRedux/sagas';
import notificationSagas from './NotificationRedux/sagas';
export default function* root() {
  yield all([
    ...appSaga,
    ...authSaga,
    ...profileSaga,
    ...matchesSagas,
    ...fieldSagas,
    ...searchSagas,
    ...userSagas,
    ...commentSagas,
    ...orderSagas,
    ...teamSagas,
    ...notificationSagas,
  ]);
}
