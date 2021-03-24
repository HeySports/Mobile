import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { profileTypes } from './actions';

const INITIAL_STATE = Immutable({
  loadingProfile: false,
  responseProfile: null,
  errorResponse: null,
  statusProfile: false,
  type: '',
});

export const userGetProfile = (state) =>
  state.merge({
    loadingProfile: true,
    responseProfile: null,
    type: 'USER GET PROFILE',
    statusProfile: false,
  });
export const userGetProfileSuccess = (state, { response }) =>
  state.merge({
    loadingProfile: false,
    responseProfile: response,
    type: 'USER_GET_PROFILE_SUCCESS',
    statusProfile: false,
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [profileTypes.USER_GET_PROFILE]: userGetProfile,
  [profileTypes.USER_GET_PROFILE_SUCCESS]: userGetProfileSuccess,
});
export default reducer;
