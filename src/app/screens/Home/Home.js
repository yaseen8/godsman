import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import TopHeader from '../../components/Header';
import {Container, Content} from 'native-base';

const Home = props => {
  return (
    <Container>
      <TopHeader />
      <Content>
        <Text>Home</Text>
      </Content>
    </Container>
  );
};

export default Home;
