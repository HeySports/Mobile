import { combineReducers } from 'redux';
import app from './AppRedux/reducers';
import auth from './AuthRedux/reducers';
import profile from './ProfileRedux/reducers';
import matches from './MatchesRedux/reducers';
import fields from './FieldRedux/reducers';
import search from './SearchRedux/reducers';
import users from './UserRedux/reducers';
import comment from './CommentRedux/reducers';
import orders from './OrdersRedux/reducers';
import team from './TeamRedux/reducers';
import notification from './NotificationRedux/reducers';
import myMatches from './myMatches/reducers';
const rootReducer = combineReducers({
  app,
  auth,
  profile,
  matches,
  fields,
  search,
  users,
  comment,
  orders,
  team,
  notification,
  myMatches,
});
export default rootReducer;
