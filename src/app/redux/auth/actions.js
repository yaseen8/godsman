import {authConstants} from './constants';
import firebase from 'react-native-firebase';

const login = auth => dispatch => {
  dispatch({type: authConstants.LOGIN_REQUEST});
  firebase
    .auth()
    .signInWithPhoneNumber(auth.number)
    .then(data => {
      dispatch({type: authConstants.CODE_RECEIVED, payload: data});
    })
    .catch(error => {
      const errors = [];
      errors.push(error.message);
      alert(errors);
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
      if (user._user.displayName) {
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: JSON.stringify(user._user),
        });
        props.navigation.navigate('Home');
      } else {
        dispatch({type: authConstants.USER_DATA, payload: true});
      }
    })
    .catch(error => {
      const errors = [];
      errors.push(error.message);
      alert(errors);
      dispatch({type: authConstants.LOGIN_FAILURE, payload: errors});
    });
};

const userData = (name, props) => dispatch => {
  firebase.auth().onAuthStateChanged(currentUser => {
    const data = {
      displayName: name,
    };
    currentUser
      .updateProfile(data)
      .then(user => {
        props.navigation.navigate('Home');
      })
      .catch(error => console.log('error upddating', error));
  });
};

const clearState = () => dispatch => {
  dispatch({type: authConstants.INITIAL_STATE});
};

const saveUserObject = user => dispatch => {
  dispatch({type: authConstants.USER_OBJECT, payload: user});
};

export const authActions = {
  login,
  confirmCode,
  userData,
  clearState,
  saveUserObject,
};
