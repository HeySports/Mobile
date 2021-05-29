import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { myMatchesType } from './actions';
const INITIAL_STATE = Immutable({
  loading: false,
  response: null,
  error: null,
  type: '',
});

export const getMyMatches = (state) =>
  state.merge({
    loading: true,
    response: null,
    error: null,
    type: 'get My matches',
  });

export const getMyMatchSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    response: response,
    error: null,
    type: 'get my matches success',
  });

export const getMyMatchFailure = (state, { error }) =>
  state.merge({
    loading: false,
    response: null,
    error: error,
    type: 'get my matches failure',
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [myMatchesType.USER_GET_MY_MATCHES]: getMyMatches,
  [myMatchesType.USER_GET_MY_MATCHES_SUCCESS]: getMyMatchSuccess,
  [myMatchesType.USER_GET_MY_MATCHES_FAILURE]: getMyMatchFailure,
});
export default reducer;
