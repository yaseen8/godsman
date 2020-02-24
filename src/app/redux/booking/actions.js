import {bookingConstants} from './constants';
import firebase from 'react-native-firebase';

const selectedService = service => dispatch => {
  const bookingObject = {};
  bookingObject.service = service;
  dispatch({type: bookingConstants.BOOKING_DATA, payload: bookingObject});
};

const selectedBookingDate = (selectedService, date) => dispatch => {
  selectedService.date = date;
  dispatch({type: bookingConstants.BOOKING_DATA, payload: selectedService});
};
const selectedBookingTime = (selectedService, time) => dispatch => {
  selectedService.time = time;
  dispatch({type: bookingConstants.BOOKING_DATA, payload: selectedService});
};

export const bookingActions = {
  selectedService,
  selectedBookingDate,
  selectedBookingTime,
};
