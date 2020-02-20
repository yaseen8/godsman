import React, {useEffect, useState} from 'react';
import { 
	Text, 
	TouchableOpacity, 
	View,
	StyleSheet,
	Image
} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import Header from '../Header';
import { notifications } from 'react-native-firebase';

import MenuBtn from "../../assets/images/menu-btn.png"
import NotificationIcon from "../../assets/images/bell-icon.png"
import SmallLogo from "../../assets/images/logo-sidebar.png"
import {commonActions} from '../../redux/common/actions';
import {connect} from 'react-redux';

const SideNav = props => {
  // alert(JSON.stringify(props));
	const {closeSideBar} = props;

	const closeDrawer = () => {
		console.log('sdsdsd');
		closeSideBar(props);
	}

  return (
    <View style={{flex: 1,}}>
      {/*<Header />*/}
      <View style={styles.userWrap}>
		<View style={styles.drawerHead}>
			<TouchableOpacity style={styles.drawerBtn} onPress={()=>closeDrawer()}>
				<Image style={styles.drawerBtnImg} source={MenuBtn} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.notificationBtn}>
				<View style={styles.notificationDot}></View>
				<Image style={styles.notificationBtnImg} source={NotificationIcon} />
			</TouchableOpacity>
		</View>

		<View style={styles.userInfo}>
			<Text style={styles.userText}>Hi Usman!</Text>
			<Text style={styles.userDesc}>How are you doing</Text>
			<Text style={styles.userDesc}>Today</Text>
		</View>
	  </View>
	  <View style={styles.menuWrap}>
      	{/* <DrawerNavigatorItems style={{fontSize: 30, color: "red"}} {...props} /> */}
		  <TouchableOpacity style={styles.navLink} onPress={()=>props.navigation.navigate("Home")}>
			  <Text  style={styles.navLinkText}>Start</Text>
		  </TouchableOpacity>
		  <TouchableOpacity style={styles.navLink} onPress={()=>props.navigation.navigate("MyBooking")}>
			  <Text  style={styles.navLinkText}>My Booking</Text>
		  </TouchableOpacity>
	  </View>

	  <View style={styles.drawerFooter}>
		  <Image style={styles.footerLogo} source={SmallLogo} />
		  <Text style={styles.copyrightText}>Copyright 2020</Text>
	  </View>
    </View>
  );
};

const mapStateToProps = state => {
	const {openSidebar} = state.common;
	return {openSidebar};
  };
  
  const mapDispatchToProps = {
	closeSideBar: commonActions.closeSideBar,
  };
  
  const connectedTopHeader = connect(
	mapStateToProps,
	mapDispatchToProps,
  )(SideNav);
  
  export {connectedTopHeader as SideNav};


const styles = StyleSheet.create({
	userWrap: {
		backgroundColor: "#f35000",
		height: 250,
		paddingHorizontal: 15,
		paddingVertical: 15,
		justifyContent: "space-between"
	},
	drawerBtn: {
		width: 35,
		height: 20
	}, 
	drawerBtnImg: {
		width: 35,
		height: 20
	},
	drawerHead: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	notificationBtn: {
		width: 25,
		height: 25,
		position: "relative"
	},
	notificationBtnImg: {
		width: 25,
		height: 25
	},
	notificationDot: {
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: "#ffcb25",
		position: "absolute",
		right: 3,
		top: 0,
		zIndex: 10
	},

	userText: {
		fontSize: 34,
		lineHeight: 39,
		color: "#fff",
		marginBottom: 10
	},
	userDesc: {
		fontSize: 26,
		lineHeight: 30,
		color: "#fff",
	},

	menuWrap: {
		paddingLeft: 15,
		paddingRight: 15,
		marginTop: 15
	},
	navLinkText: {
		fontSize: 18,
		lineHeight: 20,
		color: "#000",
		paddingVertical: 10
	},

	drawerFooter: {
		marginTop: "auto",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 30,
		paddingHorizontal: 15,
	},
	copyrightText: {
		fontSize: 14,
		lineHeight: 18,
		color: "#000",
		marginTop: 12
	},
});
