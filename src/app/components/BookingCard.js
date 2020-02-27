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
import Moment, {unix} from 'moment';

const BookingCard = props => {
  const getDate = time => {
    const date = Moment.unix(props.bookingData.timestamp.seconds).format(
      'MMMM Do YYYY, h:mm a',
    );
    return date;
  };
  return (
    <View style={styles.bookingCard}>
      <TouchableOpacity onPress={() => props.navigation.navigate('JobDetail', {bookingDetail: props.bookingData})}>
        <View style={styles.cardRow}>
          <View style={styles.stepDot} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>
              {props.bookingData.serviceName}
            </Text>
            <Text style={styles.cardProgress}>
              Status: {props.bookingData.status}
            </Text>
            <Text style={styles.cardDate}>{getDate()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  bookingCard: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  stepDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#ffcd28',
    borderWidth: 1,
    borderColor: '#989487',
    marginRight: 15,
  },
  cardRow: {
    flexDirection: 'row',
  },
  cardTitle: {
    fontSize: 18,
    color: '#000000',
    lineHeight: 20,
    marginBottom: 5,
    fontWeight: '700',
  },
  cardProgress: {
    fontSize: 18,
    color: '#000000',
    lineHeight: 20,
    marginBottom: 5,
    fontWeight: '300',
  },
  cardDate: {
    fontSize: 16,
    color: '#818181',
    lineHeight: 26,
    marginBottom: 1,
    fontWeight: '300',
  },
});
