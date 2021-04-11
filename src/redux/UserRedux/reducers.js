import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { userTypes } from './actions';

const INITIAL_STATE = Immutable({
  loading: false,
  responseUser: null,
  error: null,
  type: '',
});
export const getAllUser = (state) =>
  state.merge({
    loading: true,
    responseUser: null,
    error: null,
    type: 'GET ALL USER',
  });
export const getAllUserSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    responseUser: response,
    error: null,
    type: 'GET ALL USER SUCCESS',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [userTypes.USER_GET_ALL]: getAllUser,
  [userTypes.GET_ALL_USER_SUCCESS]: getAllUserSuccess,
});
export default reducer;
