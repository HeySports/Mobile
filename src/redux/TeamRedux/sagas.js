import { call, takeLatest, put } from 'redux-saga/effects';
import { teamTypes } from './actions';
import TeamActions from './actions';
import { getTeamUserApi, getListTeamApi } from '../../api/team';
export function* userGetTeam({ id }) {
  try {
    const response = yield call(getTeamUserApi, id);
    yield put(TeamActions.userGetTeamSuccess(response?.data));
  } catch (error) {
    yield put(TeamActions.userGetTeamFailure(error));
  }
}
export function* getListTeam() {
  try {
    const response = yield call(getListTeamApi);
    yield put(TeamActions.getListTeamSuccess(response?.data));
  } catch (error) {
    yield put(TeamActions.getListTeamFailure(error));
  }
}
const teamSagas = () => [
  takeLatest(teamTypes.USER_GET_TEAM, userGetTeam),
  takeLatest(teamTypes.GET_LIST_TEAM, getListTeam),
];
export default teamSagas();
