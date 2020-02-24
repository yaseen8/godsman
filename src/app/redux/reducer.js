import {combineReducers} from 'redux';
import common from './common';
import auth from './auth';
import services from './services';
import booking from './booking';

const rootReducer = combineReducers({
  common,
  auth,
  services,
  booking,
});

export default rootReducer;
