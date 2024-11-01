// src/reducers/index.js
import { combineReducers } from 'redux';
import jobReducer from './jobReducer';

export default combineReducers({
  job: jobReducer,
});
