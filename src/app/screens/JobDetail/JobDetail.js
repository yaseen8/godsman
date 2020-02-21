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
import BookingCard from "../../components/BookingCard"

const JobDetail = props => {
  return (
    <View>
        <ScrollView>
            <View style={{ height: "100%"}}>
                <TopHeader navigation={props.navigation}/>
                <View style={styles.bgTop}>
                    <ImageBackground style={styles.bgPattern} source={BgPattern}>
                        <View style={styles.positionTitle}>
                            <View style={{flexDirection: "row"}}>
                                <Text style={styles.titleText}>Job Detail</Text>
                            </View>
                            <Text style={styles.jobBookDate}>Date Booked: 22-02-2020</Text>
                            <Text style={styles.bookingInProgress}>In Progress</Text>
                        </View>
                    </ImageBackground>
                </View>
                
                <View style={styles.container}>
                    <View style={styles.bookingDetailContent}>
                        <View style={styles.detailRow}>
                            <View style={styles.stepDot}></View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>Job Initiated</Text>
                                <Text style={styles.cardDate}>22-02-2020 10:04:54 AM</Text>
                            </View>
                        </View>
                        <View style={styles.detailRow}>
                            <View style={styles.stepDot}></View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>Purchase of material complete</Text>
                                <Text style={styles.cardDate}>22-02-2020 10:04:54 AM</Text>
                            </View>
                        </View>
                        <View style={styles.detailRow}>
                            <View style={styles.stepDot}></View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>Day 1 Work Finished : 20%</Text>
                                <Text style={styles.cardDate}>22-02-2020 10:04:54 AM</Text>
                            </View>
                        </View>
                        <View style={styles.detailRow}>
                            <View style={styles.stepDot}></View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>Payment Recieved: PKR 10,000 Rs</Text>
                                <Text style={styles.cardDate}>22-02-2020 10:04:54 AM</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
  );
};

export default JobDetail;

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
        marginBottom: 7,
        paddingRight: 10
    },
    jobBookDate: {
        fontSize: 18,
        lineHeight: 20,
        color: "#fff",
        fontWeight: "700",
        marginBottom: 5
    },
    bookingInProgress: {
        fontSize: 18,
        lineHeight: 20,
        fontWeight: "700",
        color: "#000",
        maxWidth: "60%",
        marginLeft: "auto",
        textAlign: "right"
    },
    bookingDetailContent: {
        marginTop: 35
    },
    detailRow: {
        flexDirection: "row",
        marginBottom: 15
    }, 
    stepDot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#ffcd28',
        borderWidth: 1,
        borderColor: "#989487",
        marginRight: 15
    },
    cardTitle: {
        fontSize: 18,
        color: "#000000",
        lineHeight: 20,
        marginBottom: 3,
    },
    cardDate: {
        fontSize: 16,
        color: "#818181",
        lineHeight: 26,
        marginBottom: 1,
        fontWeight: "300"
    }
});
