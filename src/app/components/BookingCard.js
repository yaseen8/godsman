import React, {useEffect, useState} from 'react';
import { 
    Text, 
    View,
    ImageBackground,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';

const BookingCard = props => {
  return (
    <View style={styles.bookingCard}>
        <View style={styles.cardRow}>
            <View style={styles.stepDot}></View>
            <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Civil - Window, Door Renovation</Text>
                <Text style={styles.cardProgress}>Status: In Progress</Text>
                <Text style={styles.cardDate}>22-02-2020 10:04:54 AM</Text>
            </View>
        </View>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
    bookingCard: {
        padding: 15,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#ccc"
    },
    stepDot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#ffcd28',
        borderWidth: 1,
        borderColor: "#989487",
        marginRight: 20
    },
    cardRow: {
        flexDirection: "row"
    }, 
    cardTitle: {
        fontSize: 20,
        color: "#000000",
        lineHeight: 24,
        marginBottom: 5,
        fontWeight: "700"
    },
    cardProgress: {
        fontSize: 20,
        color: "#000000",
        lineHeight: 26,
        marginBottom: 5,
        fontWeight: "300"
    },
    cardDate: {
        fontSize: 16,
        color: "#818181",
        lineHeight: 26,
        marginBottom: 1,
        fontWeight: "300"
    }
});
