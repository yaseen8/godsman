import {commonConstants} from './constants';

const initialState = {
  openSideBar: false,
  companyDetail: {},
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
    case commonConstants.COMPANY_DETAIL:
      return {
        ...state,
        companyDetail: action.payload,
      };
    default:
      return state;
  }
};

export default common;
