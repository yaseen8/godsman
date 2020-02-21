import {combineReducers} from 'redux';
import common from './common';
import auth from './auth';
import services from './services';

const rootReducer = combineReducers({
  common,
  auth,
  services,
});

export default rootReducer;
