import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { searchTypes } from './actions';
const INITIAL_STATE = Immutable({
  loading: false,
  postHistories: null,
  error: null,
  type: '',
  getHistories: null,
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
const reducer = makeReducerCreator(INITIAL_STATE, {
  [searchTypes.USER_POST_HISTORIES_SEARCH]: userPostHistoriesSearch,
  [searchTypes.USER_POST_HISTORIES_SEARCH_SUCCESS]: userPostHistoriesSearchSuccess,
  [searchTypes.USER_POST_HISTORIES_SEARCH_FAILURE]: userPostHistoriesSearchFailure,
  [searchTypes.USER_GET_HISTORIES_SEARCH]: userGetHistoriesSearch,
  [searchTypes.USER_GET_HISTORIES_SEARCH_SUCCESS]: userGetHistoriesSearchSuccess,
});
export default reducer;
