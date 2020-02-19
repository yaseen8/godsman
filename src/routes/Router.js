import * as React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {
  Dimensions,
  Text
} from 'react-native';
import SignIn from '../app/screens/SignIn';
import Home from '../app/screens/Home';
import MyBooking from "../app/screens/MyBooking/MyBooking";
import SideNav from '../app/components/SideNav';
import DateTime from "../app/screens/DateTime"

const AuthRoute = createStackNavigator(
  {
    SignIn: {screen: SignIn},
    DateTime: {screen: DateTime}
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
  },
);
const DEVICE_WIDTH = Dimensions.get('window').width;
const AppRoute = createDrawerNavigator(
  {
    Home: {
        screen: Home,
    },
    MyBooking: {
        screen: MyBooking,
    },
  },
  {
    drawerWidth: 335,
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
