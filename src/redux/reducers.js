import { combineReducers } from 'redux';
import app from './AppRedux/reducers';
const rootReducer = combineReducers({
  app,
});
export default rootReducer;
