import React from 'react';
import {DrawerActions} from 'react-navigation-drawer';
import firebase from 'react-native-firebase';
import {commonConstants} from './constants';

const toggleSideBar = props => dispatch => {
  props.navigation.dispatch(DrawerActions.openDrawer());
};

const closeSideBar = props => dispatch => {
  props.navigation.dispatch(DrawerActions.closeDrawer());
};

const getCompanyInfo = () => dispatch => {
  const company = [];
  firebase
    .firestore()
    .collection('company')
    .onSnapshot(snapshot => {
      snapshot.forEach(object => {
        company.push({id: object.id, ...object.data()});
      });
      dispatch({type: commonConstants.COMPANY_DETAIL, payload: company[0]});
    });
};

export const commonActions = {
  toggleSideBar,
  closeSideBar,
  getCompanyInfo,
};
