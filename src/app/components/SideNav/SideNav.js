import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import Header from '../Header';

const SideNav = props => {
  // alert(JSON.stringify(props));
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/*<Header />*/}
      <Text style={{fontSize: 32}}>Drawer</Text>
      <DrawerNavigatorItems {...props} />
    </View>
  );
};

export default SideNav;
