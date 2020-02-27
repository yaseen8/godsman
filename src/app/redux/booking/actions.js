import {bookingConstants} from './constants';
import firebase from 'react-native-firebase';

const selectedServiceData = bookingData => dispatch => {
  dispatch({type: bookingConstants.BOOKING_DATA, payload: bookingData});
};
const bookService = (bookingData, props) => dispatch => {
  dispatch({type: bookingConstants.BOOKING_REQUEST});
  bookingData.timestamp = new Date();
  firebase
    .firestore()
    .collection('booking')
    .add(bookingData)
    .then(resp => {
      dispatch({type: bookingConstants.BOOKING_SUCCESS});
      dispatch({type: bookingConstants.BOOKING_DATA, payload: {}});
      props.navigation.navigate('BookingComplete');
      console.log(resp);
    })
    .catch(error => {
      dispatch({type: bookingConstants.BOOKING_FAILURE});
    });
};

const userBooking = userID => dispatch => {
  const bookings = [];
  firebase
    .firestore()
    .collection('booking')
    .where('userID', '==', userID)
    .onSnapshot(snapshot => {
      snapshot.forEach(object => {
        bookings.push({id: object.id, ...object.data()});
      });
      dispatch({type: bookingConstants.GET_USER_BOOKING, payload: bookings});
    });
};

const getBookingLogs = bookingID => dispatch => {
  const logs = [];
  firebase
    .firestore()
    .collection('booking_log')
    .where('bookingID', '==', bookingID)
    .onSnapshot(snapshot => {
      snapshot.forEach(object => {
        logs.push({id: object.id, ...object.data()});
      });
      logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      dispatch({type: bookingConstants.GET_BOOKING_LOG, payload: logs});
    });
};

export const bookingActions = {
  selectedServiceData,
  bookService,
  userBooking,
  getBookingLogs
};
