import {authConstants} from './constants';
// let auth = null;

// const loggedInUser = JSON.parse(localStorage.getItem('_userData'));
const initialState = {
  loggedIn: false,
  user: null,
  loggingIn: false,
  errors: null,
  confirmationResult: null,
};
// ? {loggedIn: true, user: loggedInUser}
// : {loggedIn: false, user: null, loggingIn: false, errors: null};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        user: {},
        loggedIn: false,
        loggingIn: true,
        errors: null,
        confirmationResult: {},
      };
    case authConstants.CODE_RECEIVED:
      return {
        ...state,
        loggedIn: false,
        loggingIn: true,
        confirmationResult: action.payload,
        errors: null,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loggingIn: false,
        user: action.payload,
        errors: null,
      };
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        user: {},
        loggingIn: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
