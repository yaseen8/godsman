import {commonConstants} from './constants';

const initialState = {
  openSideBar: false,
  errors: [],
};

const common = (state = initialState, action) => {
  console.log('actions', action);
  switch (action.type) {
    case commonConstants.TOGGLE_SIDEBAR:
      return {
        ...state,
        openSideBar: !state.openSideBar,
      };
    case commonConstants.LOGOUT_REQUEST:
      return {
        ...state,
      };
    case commonConstants.LOGOUT_SUCCESS:
      return {
        ...state,
      };
    case commonConstants.LOGOUT_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default common;
