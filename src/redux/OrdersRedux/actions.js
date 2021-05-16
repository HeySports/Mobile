import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const ordersType = makeConstantCreator(
  'USER_ORDER_FIELD',
  'USER_ORDER_FIELD_SUCCESS',
  'USER_ORDER_FIELD_FIELD',
);
const userOrderField = (data) => makeActionCreator(ordersType.USER_ORDER_FIELD, { data });
const userOrderFieldSuccess = (response) =>
  makeActionCreator(ordersType.USER_ORDER_FIELD_SUCCESS, { response });
const userOrderFieldFailure = (error) =>
  makeActionCreator(ordersType.USER_ORDER_FIELD_SUCCESS, { error });
export default {
  userOrderField,
  userOrderFieldSuccess,
  userOrderFieldFailure,
};
