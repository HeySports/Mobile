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
  loading: false,
  responseGetChildField: null,
  error: null,
  type: '',
  responsePriceField: null,
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
export const userGetChildField = (state) =>
  state.merge({
    loading: true,
    responseGetChildField: null,
    error: null,
    type: 'USER_GET_ALL_CHILD_FIELD',
  });
export const userGetChildFieldSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    responseGetChildField: response,
    error: null,
    type: 'USER_GET_ALL_CHILD_FIELD_SUCCESS',
  });
export const userGetPriceField = (state) =>
  state.merge({
    loading: true,
    responsePriceField: null,
    error: null,
    type: 'USER_GET_PRICE_FIELD',
  });
export const userGetPriceFieldSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    responsePriceField: response,
    error: null,
    type: 'USER_GET_PRICE_FIELD_SUCCESS',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [fieldTypes.GET_LIST_FIELD]: getListField,
  [fieldTypes.GET_LIST_FIELD_SUCCESS]: getListFieldSuccess,
  [fieldTypes.GET_DETAIL_FIELD]: getDetailField,
  [fieldTypes.GET_DETAIL_FIELD_SUCCESS]: getDetailFieldSuccess,
  [fieldTypes.USER_GET_ALL_CHILD_FIELD]: userGetChildField,
  [fieldTypes.USER_GET_ALL_CHILD_FIELD_SUCCESS]: userGetChildFieldSuccess,
  [fieldTypes.USER_GET_PRICE_FIELD]: userGetPriceField,
  [fieldTypes.USER_GET_PRICE_FIELD_SUCCESS]: userGetPriceFieldSuccess,
});
export default reducer;
