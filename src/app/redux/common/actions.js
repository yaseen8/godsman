import {commonConstants} from './constants';
// import firebase from 'firebase';
import React, {useEffect, useState} from 'react';
import {DrawerActions} from 'react-navigation-drawer';


const toggleSideBar = props => dispatch => {
  alert(JSON.stringify(props));
  // dispatch({type: commonConstants.TOGGLE_SIDEBAR});
  props.navigation.dispatch(DrawerActions.openDrawer());
};

// const logout = history => dispatch => {
//   dispatch({type: commonConstants.LOGOUT_REQUEST});
//   firebase
//     .auth()
//     .signOut()
//     .then(data => {
//       localStorage.clear();
//       dispatch({type: commonConstants.LOGOUT_SUCCESS, payload: {}});
//       history.push('/login');
//     })
//     .catch(error => {
//       console.log('error', error);
//       const errors = [];
//       errors.push(error.message);
//       dispatch({type: commonConstants.LOGIN_FAILURE, payload: errors});
//     });
// };

export const commonActions = {
  toggleSideBar,
  // logout,
};
