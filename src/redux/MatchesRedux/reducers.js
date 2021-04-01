import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { matchesTypes } from './actions';

const INITIAL_STATE = Immutable({
  loadingMatches: false,
  responseMatches: null,
  errorMatches: null,
  type: '',
});

export const getListMatches = (state) =>
  state.merge({
    loadingMatches: true,
    responseMatches: null,
    errorMatches: null,
    type: 'GET LIST MATCHES',
  });

export const getListMatchesSuccess = (state, { response }) =>
  state.merge({
    loadingMatches: false,
    responseMatches: response,
    errorMatches: null,
    type: 'GET_LIST_MATCHES_SUCCESS',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [matchesTypes.GET_LIST_MATCHES]: getListMatches,
  [matchesTypes.GET_LIST_MATCHES_SUCCESS]: getListMatchesSuccess,
});
export default reducer;
