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

const AboutUs = props => {
  return (
    <View>
        <ScrollView>
            <View style={{ height: "100%"}}>
                <TopHeader navigation={props.navigation}/>
                <View style={styles.bgTop}>
                    <ImageBackground style={styles.bgPattern} source={BgPattern}>
                        <View style={styles.positionTitle}>
                            <View style={{flexDirection: "row"}}>
                                <Text style={styles.titleText}>About Us</Text>
                            </View>
                            {/* <Text style={styles.jobBookDate}>Date Booked: 22-02-2020</Text>
                            <Text style={styles.bookingInProgress}>In Progress</Text> */}
                        </View>
                    </ImageBackground>
                </View>
                
                <View style={styles.container}>
                    <View style={styles.aboutContent}>
                        <View style={styles.aboutCol}>
                            <View style={styles.detailRow}>
                                <View style={styles.stepDot}></View>
                                <Text style={styles.innerTitle}>Title 1</Text>
                            </View>
                            <Text style={styles.descText}>
                                Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an 
                                unknown printer took a galley of type and scrambled 
                            </Text>
                        </View>
                        <View style={styles.aboutCol}>
                            <View style={styles.detailRow}>
                                <View style={styles.stepDot}></View>
                                <Text style={styles.innerTitle}>Title 2</Text>
                            </View>
                            <Text style={styles.descText}>
                                Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an 
                                unknown printer took a galley of type and scrambled 
                            </Text>
                        </View>
                        <View style={styles.aboutCol}>
                            <View style={styles.detailRow}>
                                <View style={styles.stepDot}></View>
                                <Text style={styles.innerTitle}>Title 3</Text>
                            </View>
                            <Text style={styles.descText}>
                                Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an 
                                unknown printer took a galley of type and scrambled 
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
  );
};

export default AboutUs;

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
        marginBottom: 65
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
    aboutContent: {
        marginTop: 20
    },
    detailRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    aboutCol: {
        marginBottom: 20
    },
    innerTitle: {
        fontSize: 22,
        lineHeight: 26,
        color: "#000",
        fontWeight: "700"
    },
    descText: {
        fontSize: 17,
        lineHeight: 20,
        color: '#6f6f6f',
    },
    stepDot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#ffcd28',
        borderWidth: 1,
        borderColor: "#989487",
        marginRight: 10
    },
});
