import {bookingConstants} from './constants';
import firebase from 'react-native-firebase';

const selectedServiceData = bookingData => dispatch => {
  dispatch({type: bookingConstants.BOOKING_DATA, payload: bookingData});
};
const bookService = bookingData => dispatch => {
  dispatch({type: bookingConstants.BOOKING_REQUEST});
  bookingData.timestamp = new Date();
  firebase
    .firestore()
    .collection('booking')
    .add(bookingData)
    .then(resp => {
      console.log(resp);
    })
    .catch(error => console.log(error));
};

export const bookingActions = {
  selectedServiceData,
  bookService,
};
