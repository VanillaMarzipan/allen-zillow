// src/reducers/index.js
import { combineReducers } from 'redux';
import uiData from './uiData';

const rootReducer = combineReducers({
  uiData
});

export default rootReducer;
