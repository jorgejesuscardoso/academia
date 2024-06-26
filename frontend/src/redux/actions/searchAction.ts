/* eslint-disable @typescript-eslint/no-explicit-any */
export const SEARCH_ACTION = 'SEARCH_ACTION';
export const TYPE_SEARCH_ACTION = 'TYPE_SEARCH_ACTION';

export type SearchResponse = {
  type: string;
  payload: object[];
}

export const searchAction = (search: SearchResponse) => {
  return {
    type: SEARCH_ACTION,
    payload: search
  }
}

export const typeSearchAction = (search: any) => {
  return {
    type: TYPE_SEARCH_ACTION,
    payload: search
  }
};