import * as React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';
import SignIn from '../app/screens/SignIn';
import Home from '../app/screens/Home';
import TopLeft from '../app/components/TopLeft';
import SideNav from '../app/components/SideNav';

const AuthRoute = createStackNavigator(
  {
    SignIn: {screen: SignIn},
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
  },
);
const DEVICE_WIDTH = Dimensions.get('window').width;
const AppRoute = createDrawerNavigator(
  {
    Home: {screen: Home},
  },
  {
    initialRouteName: 'Home',
    contentComponent: SideNav,
  },
);

const MainNavigation = createSwitchNavigator(
  {
    Auth: AuthRoute,
    App: AppRoute,
  },
  {
    initialRouteName: 'Auth',
  },
);

const Router = createAppContainer(MainNavigation);

export default Router;
