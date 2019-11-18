import { combineReducers } from 'redux';
import countryReducer from './countryReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  country: countryReducer,
  error: errorReducer,
  auth: authReducer
});
