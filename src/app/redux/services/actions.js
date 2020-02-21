import {servicesConstants} from './constants';
import firebase from 'react-native-firebase';

const getTypes = dispatch => {
  // const appVerifier = window.recaptchaVerifier;
  firebase
    .firestore()
    .collection('types')
    .then(data => {
      dispatch({type: servicesConstants.GET_TYPES, payload: data});
    })
    .catch(error => {
      console.log('error', error);
      const errors = [];
      errors.push(error.message);
    });
};

const getCategories = typeID => dispatch => {
  firebase
    .firestore()
    .then(categories => {
      dispatch({type: servicesConstants.GET_CATEGORIES, payload: categories});
    })
    .catch(error => {
      console.log(error);
      const errors = [];
      errors.push(error.message);
    });
};

export const servicesAction = {
  getTypes,
  getCategories,
};
