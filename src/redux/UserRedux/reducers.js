import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { userTypes } from './actions';

const INITIAL_STATE = Immutable({
  loading: false,
  responseUser: null,
  error: null,
  type: '',
  errorCheckPhone: null,
  loadingCheckPhone: false,
  responseCheckPhone: null,
});
export const getAllUser = (state) =>
  state.merge({
    loading: true,
    responseUser: null,
    error: null,
    type: 'GET ALL USER',
  });
export const checkPhone = (state) =>
  state.merge({
    loadingCheckPhone: true,
    responseCheckPhone: null,
    errorCheckPhone: null,
    type: 'CHECK PHONE NUMBER EXISTED',
  });
export const checkPhoneSuccess = (state, { response }) =>
  state.merge({
    loadingCheckPhone: false,
    responseCheckPhone: response,
    errorCheckPhone: null,
    type: 'CHECK PHONE NUMBER EXISTED SUCCESS',
  });
export const checkPhoneFail = (state, { error }) =>
  state.merge({
    loadingCheckPhone: true,
    responseCheckPhone: null,
    errorCheckPhone: error,
    type: 'CHECK PHONE NUMBER EXISTED FAIL',
  });
export const getAllUserSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    responseUser: response,
    error: null,
    type: 'GET ALL USER SUCCESS',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [userTypes.USER_GET_ALL]: getAllUser,
  [userTypes.GET_ALL_USER_SUCCESS]: getAllUserSuccess,
  [userTypes.CHECK_PHONE]: checkPhone,
  [userTypes.CHECK_PHONE_SUCCESS]: checkPhoneSuccess,
  [userTypes.CHECK_PHONE_FAIL]: checkPhoneFail,
});
export default reducer;
