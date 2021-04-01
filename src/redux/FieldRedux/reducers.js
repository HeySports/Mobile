import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { fieldTypes } from './actions';

const INITIAL_STATE = Immutable({
  loadingField: false,
  responseField: null,
  errorField: null,
  type: '',
});

export const getListField = (state) =>
  state.merge({
    loadingField: true,
    responseField: null,
    errorField: null,
    type: 'GET LIST FIELD',
  });

export const getListFieldSuccess = (state, { response }) =>
  state.merge({
    loadingField: false,
    responseField: response,
    errorField: null,
    type: 'GET LIST FIELD SUCCESS',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [fieldTypes.GET_LIST_FIELD]: getListField,
  [fieldTypes.GET_LIST_FIELD_SUCCESS]: getListFieldSuccess,
});
export default reducer;
