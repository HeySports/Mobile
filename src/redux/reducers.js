import { combineReducers } from 'redux';
import app from './AppRedux/reducers';
import auth from './AuthRedux/reducers';
const rootReducer = combineReducers({
  app,
  auth,
});
export default rootReducer;
