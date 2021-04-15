import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const searchTypes = makeConstantCreator(
  'USER_GET_HISTORIES_SEARCH',
  'USER_GET_HISTORIES_SEARCH_SUCCESS',
  'USER_POST_HISTORIES_SEARCH',
  'USER_POST_HISTORIES_SEARCH_SUCCESS',
  'USER_POST_HISTORIES_SEARCH_FAILURE',
  'USER_DELETE_HISTORIES_SEARCH',
  'USER_DELETE_HISTORIES_SEARCH_SUCCESS',
);
const userGetHistoriesSearch = () => makeActionCreator(searchTypes.USER_GET_HISTORIES_SEARCH);
const userGetHistoriesSearchSuccess = (response) =>
  makeActionCreator(searchTypes.USER_GET_HISTORIES_SEARCH_SUCCESS, { response });
const userPostHistoriesSearch = (data) =>
  makeActionCreator(searchTypes.USER_POST_HISTORIES_SEARCH, { data });
const userPostHistoriesSearchSuccess = (response) =>
  makeActionCreator(searchTypes.USER_POST_HISTORIES_SEARCH_SUCCESS, { response });
const userPostHistoriesSearchFailure = (error) =>
  makeActionCreator(searchTypes.USER_POST_HISTORIES_SEARCH_FAILURE, { error });
const userDeleteHistories = (id) =>
  makeActionCreator(searchTypes.USER_DELETE_HISTORIES_SEARCH, { id });
const userDeleteHistoriesSuccess = (response) =>
  makeActionCreator(searchTypes.USER_DELETE_HISTORIES_SEARCH_SUCCESS, { response });
export default {
  userGetHistoriesSearch,
  userGetHistoriesSearchSuccess,
  userPostHistoriesSearch,
  userPostHistoriesSearchSuccess,
  userPostHistoriesSearchFailure,
  userDeleteHistories,
  userDeleteHistoriesSuccess,
};
