import { combineReducers } from 'redux';
import app from './AppRedux/reducers';
import auth from './AuthRedux/reducers';
import profile from './ProfileRedux/reducers';
const rootReducer = combineReducers({
  app,
  auth,
  profile,
});
export default rootReducer;
