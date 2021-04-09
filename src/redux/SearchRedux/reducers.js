import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { searchTypes } from './actions';
const INITIAL_STATE = Immutable({
  loading: false,
  postHistories: null,
  error: null,
  type: '',
  getHistories: null,
  deleteHistories: null,
  resultSearch: null,
});

export const userPostHistoriesSearch = (state) =>
  state.merge({
    loading: true,
    postHistories: null,
    error: null,
    type: 'POST HISTORIES SEARCH',
  });
export const userPostHistoriesSearchSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    postHistories: response,
    error: null,
    type: 'POST HISTORIES SEARCH SUCCESS',
    getHistories: response,
  });
export const userPostHistoriesSearchFailure = (state, { error }) =>
  state.merge({
    loading: false,
    postHistories: null,
    error: error,
    type: 'POST HISTORIES SEARCH FAILURE',
  });
export const userGetHistoriesSearch = (state) =>
  state.merge({
    loading: true,
    type: 'USER GET HISTORIES SEARCH',
    getHistories: null,
  });
export const userGetHistoriesSearchSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    type: 'USER GET HISTORIES SEARCH SUCCESS',
    getHistories: response,
  });
export const userDeleteHistories = (state) =>
  state.merge({
    loading: true,
    type: 'USER DELETES HISTORIES',
    deleteHistories: null,
  });
export const useDeleteHistoriesSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    type: 'USER DELETES HISTORIES SUCCESS',
    deleteHistories: response,
  });
export const userSearchMatches = (state) =>
  state.merge({
    loading: true,
    type: 'USER SEARCH MATCHES',
    resultSearch: null,
    error: null,
  });
export const userSearchMatchesSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    type: 'USER SEARCH MATCHES SUCCESS',
    resultSearch: response,
    error: null,
  });
export const userSearchMatchesFailure = (state, { error }) =>
  state.merge({
    loading: false,
    type: 'USER SEARCH MATCHES FAILURE',
    resultSearch: null,
    error: error,
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [searchTypes.USER_POST_HISTORIES_SEARCH]: userPostHistoriesSearch,
  [searchTypes.USER_POST_HISTORIES_SEARCH_SUCCESS]: userPostHistoriesSearchSuccess,
  [searchTypes.USER_POST_HISTORIES_SEARCH_FAILURE]: userPostHistoriesSearchFailure,
  [searchTypes.USER_GET_HISTORIES_SEARCH]: userGetHistoriesSearch,
  [searchTypes.USER_GET_HISTORIES_SEARCH_SUCCESS]: userGetHistoriesSearchSuccess,
  [searchTypes.USER_DELETE_HISTORIES_SEARCH]: userDeleteHistories,
  [searchTypes.USER_DELETE_HISTORIES_SUCCESS]: useDeleteHistoriesSuccess,
  [searchTypes.USER_SEARCH_MATCHES]: userSearchMatches,
  [searchTypes.USER_SEARCH_MATCHES_SUCCESS]: userSearchMatchesSuccess,
  [searchTypes.USER_SEARCH_MATCHES_FAILURE]: userSearchMatchesFailure,
});
export default reducer;
