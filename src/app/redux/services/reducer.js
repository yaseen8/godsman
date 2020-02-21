import {servicesConstants} from './constants';

const initialState = {
  types: [],
  categories: [],
  services: [],
  errors: null,
};

const services = (state = initialState, action) => {
  switch (action.type) {
    case servicesConstants.GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case servicesConstants.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case servicesConstants.GET_SERVICES:
      return {
        ...state,
        services: action.pa
      };
    default:
      return state;
  }
};

export default services;
