import * as React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions, Text, Image, View, TouchableOpacity} from 'react-native';
import SignIn from '../app/screens/SignIn';
import Home from '../app/screens/Home';
import MyBooking from '../app/screens/MyBooking/MyBooking';
import SideNav from '../app/components/SideNav';
import DateTime from '../app/screens/DateTime';
import Location from '../app/screens/Location';
import BookingComplete from '../app/screens/BookingComplete';
import CallUs from '../app/screens/CallUs';
import TopHeader from '../app/components/Header';
import MenuBtn from '../app/assets/images/menu-btn.png';
import SplashScreen from '../app/screens/SplashScreen';
import JobDetail from '../app/screens/JobDetail/JobDetail';
import AboutUs from '../app/screens/AboutUs/AboutUs';
import HowItWorks from '../app/screens/HowItWorks/HowItWorks';

const AuthRoute = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
    },
    DateTime: {
      screen: DateTime,
    },
    Location: {
      screen: Location,
    },
    BookingComplete: {
      screen: BookingComplete,
    },
    CallUs: {
      screen: CallUs,
    },
    SplashScreen: {
      screen: SplashScreen,
    },
    JobDetail: {
      screen: JobDetail,
    },

    // Drawer Screens
    Home: {
      screen: Home,
    },
    MyBooking: {
      screen: MyBooking,
    },
    AboutUs: {
      screen: AboutUs,
    },
    HowItWorks: {
      screen: HowItWorks,
    },
  },
  {
    // initialRouteName: 'SplashScreen',
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
    AboutUs: {
      screen: AboutUs,
    },
    HowItWorks: {
      screen: HowItWorks,
    },
  },
  {
    drawerWidth: 335,
    initialRouteName: null,
    contentComponent: SideNav,
  },
);

const MainNavigation = createSwitchNavigator(
  {
    Auth: AuthRoute,
    App: AppRoute,
  },
  {
    initialRouteName: 'App',
  },
);

const Router = createAppContainer(MainNavigation);

export default Router;
