import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const fieldTypes = makeConstantCreator(
  'GET_LIST_FIELD',
  'GET_LIST_FIELD_SUCCESS',
  'GET_DETAIL_FIELD',
  'GET_DETAIL_FIELD_SUCCESS',
  'USER_GET_ALL_CHILD_FIELD',
  'USER_GET_ALL_CHILD_FIELD_SUCCESS',
);
const getListField = () => makeActionCreator(fieldTypes.GET_LIST_FIELD);
const getListFieldSuccess = (response) =>
  makeActionCreator(fieldTypes.GET_LIST_FIELD_SUCCESS, { response });
const getDetailField = (id) => makeActionCreator(fieldTypes.GET_DETAIL_FIELD, { id });
const getDetailFieldSuccess = (response) =>
  makeActionCreator(fieldTypes.GET_DETAIL_FIELD_SUCCESS, { response });
const userGetChildField = () => makeActionCreator(fieldTypes.USER_GET_ALL_CHILD_FIELD);
const userGetChildFieldSuccess = (response) =>
  makeActionCreator(fieldTypes.USER_GET_ALL_CHILD_FIELD_SUCCESS, { response });

export default {
  getListField,
  getListFieldSuccess,
  getDetailField,
  getDetailFieldSuccess,
  userGetChildField,
  userGetChildFieldSuccess,
};
