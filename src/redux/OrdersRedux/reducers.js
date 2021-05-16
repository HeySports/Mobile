import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { ordersType } from './actions';
const INITIAL_STATE = Immutable({
  loading: false,
  orders: null,
  error: null,
  type: '',
});
export const userOrderField = (state) =>
  state.merge({
    loading: true,
    typeField: 'ORDER FIELD',
  });
export const userOrderFieldSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    orders: response,
    error: null,
    type: 'ORDER FIELD SUCCESS',
  });

export const userOrderFieldFailure = (state, { error }) =>
  state.merge({
    loading: false,
    orders: null,
    error: error,
    type: 'ORDER FIELD FAILURE',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [ordersType.USER_ORDER_FIELD]: userOrderField,
  [ordersType.USER_ORDER_FIELD_SUCCESS]: userOrderFieldSuccess,
  [ordersType.USER_ORDER_FIELD_FAILURE]: userOrderFieldFailure,
});
export default reducer;
