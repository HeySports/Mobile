import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/utils';
import { AppTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingApp: true,
  AppTypes: '',
});

export const userStartApp = (state, { response }) =>
  state.merge({ loadingApp: false, AppTypes: '' });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [AppTypes.START_APP]: userStartApp,
});

export default reducer;
