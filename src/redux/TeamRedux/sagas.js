import { call, takeLatest, put } from 'redux-saga/effects';
import { teamTypes } from './actions';
import TeamActions from './actions';
import { getTeamUserApi } from '../../api/team';
export function* userGetTeam({ id }) {
  try {
    const response = yield call(getTeamUserApi, id);
    console.log('===================team=================');
    console.log(response?.data);
    console.log('====================================');
    yield put(TeamActions.userGetTeamSuccess(response?.data));
  } catch (error) {
    yield put(TeamActions.userGetTeamFailure(error));
  }
}
const teamSagas = () => [takeLatest(teamTypes.USER_GET_TEAM, userGetTeam)];
export default teamSagas();
