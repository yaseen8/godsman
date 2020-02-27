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
import TopHeader from '../../components/Header';
import BgPattern from '../../assets/images/bg2.png';
import CheckIcon from '../../assets/images/check-icon.png';

const BookingComplete = props => {
  return (
    <View>
      <View style={{height: '100%'}}>
        <TopHeader navigation={props.navigation} />
        <View style={styles.bgTop}>
          <ImageBackground style={styles.bgPattern} source={BgPattern}>
            <View style={styles.positionTitle}>
              <Text style={styles.titleText}>
                Great, you are in safe Hands Now!
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.completeWrap}>
          <View style={styles.completeInner}>
            <TouchableOpacity
              style={styles.circleIcon}
              onPress={() => props.navigation.navigate('MyBooking')}>
              <Image source={CheckIcon} />
            </TouchableOpacity>
            <Text style={styles.innerTitle}>Booking Complete</Text>
            <Text style={styles.descText}>
              Our concerned team menber will soon contact you..
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookingComplete;

const styles = StyleSheet.create({
  bgTop: {
    height: 236,
    marginTop: 0,
  },
  bgPattern: {
    width: '100%',
    flex: 1,
    position: 'relative',
    zIndex: 999,
  },
  positionTitle: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
  },
  titleText: {
    fontSize: 34,
    lineHeight: 39,
    fontWeight: '300',
    color: '#fff',
  },

  completeWrap: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 45,
  },
  completeInner: {
    maxWidth: '70%',
  },
  circleIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#7567c9',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 25,
  },
  innerTitle: {
    fontSize: 30,
    lineHeight: 34,
    color: '#000',
    marginBottom: 15,
    textAlign: 'center',
  },
  descText: {
    fontSize: 16,
    lineHeight: 17,
    color: '#6f6f6f',
    textAlign: 'center',
  },
});
