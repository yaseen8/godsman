import {bookingConstants} from './constants';
const initialState = {
  bookingStart: false,
  bookingData: {},
  bookingResponse: {},
  error: null,
};

const booking = (state = initialState, action) => {
  switch (action.type) {
    case bookingConstants.BOOKING_DATA:
      return {
        ...state,
        bookingData: action.payload,
      };
    case bookingConstants.BOOKING_REQUEST:
      return {
        ...state,
        bookingStart: true,
        bookingResponse: {},
      };
    case bookingConstants.BOOKING_SUCCESS:
      return {
        ...state,
        bookingStart: false,
        bookingResponse: action.payload,
        error: null,
      };
    case bookingConstants.BOOKING_FAILURE:
      return {
        ...state,
        bookingStart: false,
        bookingResponse: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default booking;
