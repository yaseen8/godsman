import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const SignOut = props => {
  return (
    <View style={styles.signOutOverlay}>
      <View style={styles.signOutCard}>
        <Text style={styles.logoutText}>Are you sure you want to logout?</Text>
        <View style={styles.row}>
          <View
            style={{
              width: '50%',
              borderRightColor: '#ccc',
              borderRightWidth: 1,
            }}>
            <TouchableOpacity style={styles.logoutBtns}>
              <Text style={styles.textCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: '50%'}}>
            <TouchableOpacity style={styles.logoutBtns}>
              <Text style={styles.textOut}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignOut;

const styles = StyleSheet.create({
  signOutOverlay: {
    // backgroundColor: '#ffcd28',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 9999999999,
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutCard: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffcd28',
    backgroundColor: '#fff',
    maxWidth: '70%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoutText: {
    fontSize: 18,
    lineHeight: 22,
    marginBottom: 10,
    textAlign: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  textCancel: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  textOut: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  logoutBtns: {
    padding: 10,
  },
});
