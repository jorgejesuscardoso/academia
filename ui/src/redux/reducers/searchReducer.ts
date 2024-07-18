/* eslint-disable @typescript-eslint/no-explicit-any */
import { SEARCH_ACTION, SearchResponse } from '../actions/searchAction';

export const searchReducer = (state = [], action: SearchResponse) => {
  switch (action.type) {
    case SEARCH_ACTION:
      return action.payload;
    default:
      return state;
  }
}

export const typeSearchReducer = (state = '', action: any) => {
  switch (action.type) {
    case 'TYPE_SEARCH_ACTION':
      return action.payload;
    default:
      return state;
  }
}