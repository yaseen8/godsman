import {servicesConstants} from './constants';
import {bookingConstants} from '../booking/constants';
import firebase from 'react-native-firebase';

const getTypes = () => dispatch => {
  const types = [];
  firebase
    .firestore()
    .collection('types')
    .onSnapshot(snapshot => {
      snapshot.forEach(object => {
        types.push({id: object.id, ...object.data()});
      });
      dispatch({type: servicesConstants.GET_TYPES, payload: types});
    });
};

const getCategories = typeID => dispatch => {
  const categories = [];
  firebase
    .firestore()
    .collection('categories')
    .where('typeID', '==', typeID)
    .onSnapshot(snapshot => {
      snapshot.forEach(object => {
        categories.push({id: object.id, ...object.data()});
      });
      dispatch({type: servicesConstants.GET_SERVICES, payload: []});
      dispatch({type: servicesConstants.GET_CATEGORIES, payload: categories});
    });
};

const getServices = categoryID => dispatch => {
  const services = [];
  firebase
    .firestore()
    .collection('services')
    .where('categoryID', '==', categoryID)
    .onSnapshot(snapshot => {
      snapshot.forEach(object => {
        services.push({id: object.id, ...object.data()});
      });
      dispatch({type: servicesConstants.GET_SERVICES, payload: services});
    });
};

export const servicesAction = {
  getTypes,
  getCategories,
  getServices,
};
