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
import TopHeader from '../../components/Header';
import BgPattern from "../../assets/images/bg2.png"
import ArrowIcon from "../../assets/images/arrow-icon-small.png"
import MapImg from "../../assets/images/map-img.png"
import BookingCard from "../../components/BookingCard"

const MyBooking = props => {
  return (
    <View>
        <ScrollView>
            <View style={{ height: "100%"}}>
                <TopHeader navigation={props.navigation}/>
                <View style={styles.bgTop}>
                    <ImageBackground style={styles.bgPattern} source={BgPattern}>
                        <View style={styles.positionTitle}>
                            <View style={{flexDirection: "row"}}>
                                <Text style={styles.titleText}>Bookings</Text>
                            </View>
                            <Text style={styles.bookingInfoTitle}>You can view details of your all old and current tasks</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.container}>
                    <View style={styles.bookingContent}>
                        <View style={styles.bookingCol}>
                            <BookingCard navigation={props.navigation} />
                        </View>
                        <View style={styles.bookingCol}>
                            <BookingCard navigation={props.navigation} />
                        </View>
                        <View style={styles.bookingCol}>
                            <BookingCard navigation={props.navigation} />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
  );
};

export default MyBooking;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15, 
        paddingRight: 15
    },
    bgTop: {
        height: 236,
    },
    bgPattern: {
        width: "100%",
        flex: 1,
        position: "relative",
        zIndex: 999
    },
    positionTitle: {
        paddingHorizontal: 15,
        marginTop: "auto",
        marginBottom: 40
    },
    titleText: {
        fontSize: 34,
        lineHeight: 39,
        fontWeight: "300",
        color: "#fff",
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        width: "auto",
        marginBottom: 12,
        paddingRight: 10
    },
    bookingInfoTitle: {
        fontSize: 16,
        lineHeight: 20,
        color: "#7d2d00",
        maxWidth: "60%",
        marginLeft: "auto",
        textAlign: "right"
    },

    bookingContent: {
        marginTop: 35
    },
    bookingCol: {
        marginBottom: 25
    }
});
