import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import families from './families/reducer';

export default combineReducers({
  auth,
  user,
  families,
});
