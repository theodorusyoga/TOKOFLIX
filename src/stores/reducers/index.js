import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import simpleReducer from './SimpleReducer';

export default combineReducers({
  routing: routerReducer,
  simpleReducer
});
