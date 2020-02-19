import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import TopHeader from '../../components/Header';
import {Container, Content} from 'native-base';

const MyBooking = props => {
  return (
    <View>
        <TopHeader />
        <View>
            <Text>MyBooking</Text>
        </View>
    </View>
  );
};

export default MyBooking;
