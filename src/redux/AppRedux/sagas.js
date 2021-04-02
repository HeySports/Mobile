import { takeLatest, select, put } from 'redux-saga/effects';
import { AppTypes } from './actions';
import http from '../../api/http';
import { introScreen, loginScreen, homeScreen } from '../../navigation/pushScreen';
import AsyncStorage from '@react-native-community/async-storage';
import ProfileAction from '../ProfileRedux/actions';
export function* loadingAppSagas() {
  try {
    const storeToken = yield AsyncStorage.getItem('token');
    let token = null;
    if (storeToken) {
      token = storeToken;
    } else {
      token = yield select((state) => state.auth.token);
    }
    http.setAuthorizationHeader(token);
    if (token) {
      yield homeScreen();
      yield put(ProfileAction.userGetProfile());
    } else {
      loginScreen();
    }
  } catch (error) {
    loginScreen();
  }
}
export function* goToIntroSagas() {
  introScreen();
}
export function* makeSkipIntroSagas() {
  yield AsyncStorage.setItem('skip', JSON.stringify(true));
  yield loadingAppSagas();
}
const appSagas = () => [
  takeLatest(AppTypes.START_APP, loadingAppSagas),
  takeLatest(AppTypes.GO_TO_INTRO, goToIntroSagas),
  takeLatest(AppTypes.MAKE_SKIP_INTRO, makeSkipIntroSagas),
];
export default appSagas();
