import {combineReducers} from 'redux';
import connectReducer from './connectReducer';

const allReducers = combineReducers ({
  connectReducer: connectReducer
});

export default allReducers
