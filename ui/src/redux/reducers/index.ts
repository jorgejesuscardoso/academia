import { combineReducers } from 'redux';
import { searchReducer, typeSearchReducer } from './searchReducer';
import { NavMobileReducer } from './navReduce';

const rootReducer = combineReducers({
  searchRedux: searchReducer,
  typeSearchRedux: typeSearchReducer,
  NavMobile: NavMobileReducer
})

export default rootReducer;