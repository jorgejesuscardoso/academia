import { combineReducers } from 'redux';
import { searchReducer, typeSearchReducer } from './searchReducer';

const rootReducer = combineReducers({
  searchRedux: searchReducer,
  typeSearchRedux: typeSearchReducer
})

export default rootReducer;