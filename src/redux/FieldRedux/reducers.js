import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { fieldTypes } from './actions';

const INITIAL_STATE = Immutable({
  loadingField: false,
  responseField: null,
  errorField: null,
  typeField: '',
  loadingDetailField: false,
  responseDetailField: null,
  errorDetailField: null,
  typeDetailField: '',
  loadingComment: false,
  responseComment: null,
  errorComment: null,
  typeComment: '',
});
export const getListField = (state) =>
  state.merge({
    loadingField: true,
    responseField: null,
    errorField: null,
    typeField: 'GET LIST FIELD',
  });
export const getListFieldSuccess = (state, { response }) =>
  state.merge({
    loadingField: false,
    responseField: response,
    errorField: null,
    typeField: 'GET LIST FIELD SUCCESS',
  });
export const getDetailField = (state) =>
  state.merge({
    loadingDetailField: true,
    responseDetailField: null,
    errorDetailField: null,
    typeDetailField: 'GET DETAIL FIELD',
  });
export const getDetailFieldSuccess = (state, { response }) =>
  state.merge({
    loadingDetailField: false,
    responseDetailField: response,
    errorDetailField: null,
    typeDetailField: 'GET LIST DETAIL SUCCESS',
  });
export const userGetCommentField = (state) =>
  state.merge({
    loadingComment: true,
    responseComment: null,
    errorComment: null,
    typeComment: 'USER GET COMMENT FIELD',
  });
export const userGetCommentFieldSuccess = (state, { response }) =>
  state.merge({
    loadingComment: false,
    responseComment: response,
    errorComment: null,
    typeComment: 'USER GET COMMENT FIELD SUCCESS',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [fieldTypes.GET_LIST_FIELD]: getListField,
  [fieldTypes.GET_LIST_FIELD_SUCCESS]: getListFieldSuccess,
  [fieldTypes.GET_DETAIL_FIELD]: getDetailField,
  [fieldTypes.GET_DETAIL_FIELD_SUCCESS]: getDetailFieldSuccess,
  [fieldTypes.USER_GET_COMMENT_FIELD]: userGetCommentField,
  [fieldTypes.USER_GET_COMMENT_FIELD_SUCCESS]: userGetCommentFieldSuccess,
});
export default reducer;
