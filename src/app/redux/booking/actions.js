import {authConstants} from './constants';
// import API from "../helpers/api";
import firebase from 'react-native-firebase';
import {AsyncStorage} from 'react-native';

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
      storeData(JSON.stringify(user._user));
      // alert(JSON.stringify(user));
      dispatch({type: authConstants.LOGIN_SUCCESS, payload: user._user});
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

const storeData = async user => {
  try {
    await AsyncStorage.setItem('_user', user);
  } catch (error) {
    // Error saving data
  }
};

export const authActions = {
  login,
  confirmCode,
}; // const appVerifier = window.recaptchaVerifier;
