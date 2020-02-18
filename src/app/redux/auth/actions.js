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
      // alert(JSON.stringify(data));
      firebase.auth().onAuthStateChanged(response => {
        if (response) {
          alert(JSON.stringify(response));
        }
      })
      // console.log('user', data);
      // localStorage.setItem('_token', data.user.refreshToken);
      // localStorage.setItem('_userData', JSON.stringify(data.user));
      dispatch({type: authConstants.LOGIN_SUCCESS, payload: data.user});
      // history.push('/home');
    })
    .catch(error => {
      console.log('error', error);
      const errors = [];
      errors.push(error.message);
      dispatch({type: authConstants.LOGIN_FAILURE, payload: errors});
    });
};

export const authActions = {
  login,
};
