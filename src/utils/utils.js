// import { call, put } from 'redux-saga/effects';
import _ from 'lodash';
// import { loading, clearLoading } from '../redux/AppRedux/actions';

export function makeConstantCreator(...params) {
  const constant = {};
  _.each(params, (param) => {
    constant[param] = param;
  });
  return constant;
}

export const makeActionCreator = (type, params = null) => ({ type, ...params });

export const makeReducerCreator = (initialState = null, handlers = {}) => (
  state = initialState,
  action,
) => {
  if (!action?.type) {
    return state;
  }
  const handler = handlers[action.type];
  return (handler && handler(state, action)) || state;
};
