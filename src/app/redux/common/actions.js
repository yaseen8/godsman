import {commonConstants} from './constants';
// import firebase from 'firebase';
import React, {useEffect, useState} from 'react';
import {DrawerActions} from 'react-navigation-drawer';



const toggleSideBar = props => dispatch => {
  console.log('action----', props);
  
  // dispatch({type: commonConstants.TOGGLE_SIDEBAR});
  props.navigation.dispatch(DrawerActions.openDrawer());
};

const closeSideBar = props => dispatch => {
  console.log('action 222----', props);
  
  // dispatch({type: commonConstants.TOGGLE_SIDEBAR});
  props.navigation.dispatch(DrawerActions.closeDrawer());
};

export const commonActions = {
  toggleSideBar,
  closeSideBar
  // logout,
};
