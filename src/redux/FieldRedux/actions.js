import { makeActionCreator, makeConstantCreator } from '../../utils/utils';
export const fieldTypes = makeConstantCreator('GET_LIST_FIELD', 'GET_LIST_FIELD_SUCCESS');
const getListField = () => makeActionCreator(fieldTypes.GET_LIST_FIELD);
const getListFieldSuccess = (response) =>
  makeActionCreator(fieldTypes.GET_LIST_FIELD_SUCCESS, { response });
export default {
  getListField,
  getListFieldSuccess,
};
