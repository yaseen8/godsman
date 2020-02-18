import React, {useEffect, useState} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Text,
} from 'native-base';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {commonActions} from '../../redux/common/actions';

const TopHeader = props => {
  const {toggleSideBar} = props;
  const openDrawer = () => {
    toggleSideBar(props);
  };
  return (
    <Header>
      <Left>
        <Button transparent onPress={openDrawer}>
          {/*<Icon name="menu" />*/}
        </Button>
      </Left>
      <Body>
        <Title>Header</Title>
      </Body>
      <Right />
    </Header>
  );
};

const mapStateToProps = state => {
  const {openSidebar} = state.common;
  return {openSidebar};
};

const mapDispatchToProps = {
  toggleSideBar: commonActions.toggleSideBar,
};

const connectedTopHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopHeader);

export {connectedTopHeader as TopHeader};
