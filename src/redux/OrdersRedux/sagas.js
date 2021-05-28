import { call, takeLatest, put } from 'redux-saga/effects';
import { ordersType } from './actions';
import OrderAction from './actions';
import { userOrderFieldApi } from '../../api/orders';
export function* userOrderField({ data }) {
  try {
    const response = yield call(userOrderFieldApi, data);
    yield put(OrderAction.userOrderFieldSuccess(response?.data));
  } catch (error) {
    yield put(OrderAction.userOrderFieldFailure(error));
  }
}
const orderSagas = () => [takeLatest(ordersType.USER_ORDER_FIELD, userOrderField)];
export default orderSagas();
