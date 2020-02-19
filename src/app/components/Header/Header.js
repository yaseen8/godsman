import React, {useEffect, useState} from 'react';

import  {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {commonActions} from '../../redux/common/actions';
import MenuBtn from "../../assets/images/menu-btn.png"
import UserIcon from "../../assets/images/user-icon.png"




const TopHeader = props => {
  const {toggleSideBar} = props;
  const openDrawer = () => {
    toggleSideBar(props);
  };
  return (
    <View style={styles.header}>
        <TouchableOpacity style={styles.drawerBtn}>
            <Image style={styles.drawerBtnImg} source={MenuBtn} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.userBtn}>
            <Image source={UserIcon}  style={styles.userBtnImg} />
            <View style={styles.dotUser}></View>
        </TouchableOpacity>
    </View>
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

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        paddingVertical: 15,
        paddingHorizontal: 15,
        top: 0,
        left: 0,
        width: "100%",
        // backgroundColor: "#ffcb25",
        height: 54,
        zIndex: 99999
    },  
    drawerBtn: {
		width: 35,
		height: 20
	}, 
	drawerBtnImg: {
		width: 35,
		height: 20
    },
    userBtn: {
        width: 25,
        height: 25
    },
    userBtnImg: {
        width: 25,
        height: 25
    },
    dotUser: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#f45903",
        position: "absolute",
        right: -2,
        top: -3
    }
});
