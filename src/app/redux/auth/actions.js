import {authConstants} from './constants';
// import API from "../helpers/api";
import firebase from 'react-native-firebase';

const login = auth => dispatch => {
  dispatch({type: authConstants.LOGIN_REQUEST});
  // const appVerifier = window.recaptchaVerifier;
  firebase
    .auth()
    .signInWithPhoneNumber(auth.number)
    .then(data => {
      dispatch({type: authConstants.CODE_RECEIVED, payload: data});
      // alert(JSON.stringify(data));
      // console.log('user', data);
      // localStorage.setItem('_token', data.user.refreshToken);
      // localStorage.setItem('_userData', JSON.stringify(data.user));
      // dispatch({type: authConstants.LOGIN_SUCCESS, payload: data.user});
      // history.push('/home');
    })
    .catch(error => {
      console.log('error', error);
      const errors = [];
      errors.push(error.message);
      dispatch({type: authConstants.LOGIN_FAILURE, payload: errors});
    });
};

const confirmCode = (confirmationResult, confirmationCode) => dispatch => {
  alert(JSON.stringify(confirmationResult));
  confirmationResult
    .confirm(confirmationCode)
    .then(user => {
      alert(JSON.stringify(user));
      //   dispatch({type: authConstants.LOGIN_SUCCESS, payload: user});
      // console.log('user', data);
      // localStorage.setItem('_token', data.user.refreshToken);
      // localStorage.setItem('_userData', JSON.stringify(data.user));
      // dispatch({type: authConstants.LOGIN_SUCCESS, payload: data.user});
      // history.push('/home');
    })
    .catch(error => {
      const errors = [];
      errors.push(error.message);
      alert(JSON.stringify(errors));
      dispatch({type: authConstants.LOGIN_FAILURE, payload: errors});
    });
};

export const authActions = {
  login,
  confirmCode,
}; // const appVerifier = window.recaptchaVerifier;
