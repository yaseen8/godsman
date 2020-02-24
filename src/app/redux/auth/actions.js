import {authConstants} from './constants';
import firebase from 'react-native-firebase';

const login = auth => dispatch => {
  dispatch({type: authConstants.LOGIN_REQUEST});
  // const appVerifier = window.recaptchaVerifier;
  firebase
    .auth()
    .signInWithPhoneNumber(auth.number)
    .then(data => {
      dispatch({type: authConstants.CODE_RECEIVED, payload: data});
    })
    .catch(error => {
      console.log('error', error);
      const errors = [];
      errors.push(error.message);
      dispatch({type: authConstants.LOGIN_FAILURE, payload: errors});
    });
};

const confirmCode = (
  confirmationResult,
  confirmationCode,
  props,
) => dispatch => {
  confirmationResult
    .confirm(confirmationCode)
    .then(user => {
      console.log(user);
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: JSON.stringify(user._user),
      });
      props.navigation.navigate('App');
    })
    .catch(error => {
      console.log(error);
      const errors = [];
      errors.push(error.message);
      // alert(JSON.stringify(errors));
      dispatch({type: authConstants.LOGIN_FAILURE, payload: errors});
    });
};

export const authActions = {
  login,
  confirmCode,
}; // const appVerifier = window.recaptchaVerifier;
