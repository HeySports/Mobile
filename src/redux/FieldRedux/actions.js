import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const fieldTypes = makeConstantCreator(
  'GET_LIST_FIELD',
  'GET_LIST_FIELD_SUCCESS',
  'GET_DETAIL_FIELD',
  'GET_DETAIL_FIELD_SUCCESS',
  'USER_GET_COMMENT_FIELD',
  'USER_GET_COMMENT_FIELD_SUCCESS',
);
const getListField = () => makeActionCreator(fieldTypes.GET_LIST_FIELD);
const getListFieldSuccess = (response) =>
  makeActionCreator(fieldTypes.GET_LIST_FIELD_SUCCESS, { response });
const getDetailField = (id) => makeActionCreator(fieldTypes.GET_DETAIL_FIELD, { id });
const getDetailFieldSuccess = (response) =>
  makeActionCreator(fieldTypes.GET_DETAIL_FIELD_SUCCESS, { response });
const userGetCommentField = (id) => makeActionCreator(fieldTypes.USER_GET_COMMENT_FIELD, { id });
const userGetCommentFieldSuccess = (response) =>
  makeActionCreator(fieldTypes.USER_GET_COMMENT_FIELD_SUCCESS, { response });
export default {
  getListField,
  getListFieldSuccess,
  getDetailField,
  getDetailFieldSuccess,
  userGetCommentField,
  userGetCommentFieldSuccess,
};
