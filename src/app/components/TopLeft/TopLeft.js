import React from 'react';
import TopHeader from '../Header';
import SideNav from '../SideNav';
import {Text, View} from 'react-native';

const TopLeft = props => {
  // alert(JSON.stringify(props));
  return (
    <View>
      <TopHeader />
      <SideNav />
    </View>
  );
};

export default TopLeft;
