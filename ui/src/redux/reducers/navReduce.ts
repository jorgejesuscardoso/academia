import { TOGGLE_MOBILE_MENU } from '../actions/searchAction';

export const NavMobileReducer = (state = false, action: any) => {
  switch (action.type) {
    case TOGGLE_MOBILE_MENU:
      return action;
    default:
      return state;
  }
};