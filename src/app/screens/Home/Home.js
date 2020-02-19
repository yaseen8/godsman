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
import {Container, Content} from 'native-base';
import BgPattern from "../../assets/images/bg2.png"
import ArrowIcon from "../../assets/images/arrow-icon.png"
import HomeIcon1 from "../../assets/images/slide-icon1.png"
import HomeIcon2 from "../../assets/images/slide-icon2.png"
import HomeIcon3 from "../../assets/images/slide-icon3.png"

const Home = props => {
  return (
    <View>
        <View style={{ height: "100%"}}>
            <TopHeader />
            <View style={styles.bgTop}>
                <ImageBackground style={styles.bgPattern} source={BgPattern}>
                    <TouchableOpacity style={styles.positionTitle}>
                        <Text style={styles.titleText}>What you need</Text>
                        <Image style={styles.arrowIcon} source={ArrowIcon} />
                    </TouchableOpacity>
                </ImageBackground>

                <View style={styles.dropdownApp}>
                    <TouchableOpacity style={styles.dropdownLink}>
                        <Text style={styles.dropdownText}>I Need Labour</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dropdownLink}>
                        <Text style={styles.dropdownText}>I Need Skilled Worker</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dropdownLink}>
                        <Text style={styles.dropdownText}>I Need Renovation Work</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dropdownLink}>
                        <Text style={styles.dropdownText}>I Need Maintenance Work</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.homeSlide}> 
                <ScrollView horizontal={true}>
                    <View style={styles.slideBadges}>
                        <TouchableOpacity style={styles.badgeSelected}>
                            <Text style={styles.badgeText}>Civil Work</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.slideBadge}>
                            <Text style={styles.badgeText}>Electrical</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.slideBadge}>
                            <Text style={styles.badgeText}>Heating & Cooling</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.slideBadge}>
                            <Text style={styles.badgeText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.slideBadge}>
                            <Text style={styles.badgeText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.slideBadge}>
                            <Text style={styles.badgeText}>6</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <ScrollView horizontal={true}>
                    <View style={styles.slideBoxes}>
                        <TouchableOpacity style={styles.iconBox}>
                            <Image style={styles.slideIcon} source={HomeIcon1} />
                            <Text style={styles.slideText}>Walls, Extension Renovation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconBoxSelected}>
                            <Image style={styles.slideIcon} source={HomeIcon2} />
                            <Text style={styles.slideText}>Doors, Windows Gate etc</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconBox}>
                            <Image style={styles.slideIcon} source={HomeIcon3} />
                            <Text style={styles.slideText}>Lawn, Guarden</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>


            <View style={styles.stepsFooter}>
                <View style={styles.stepsInfo}>
                    <View style={styles.stepCol}>
                        <View style={styles.stepDot}></View>
                        <Text style={styles.stepText}>Step 1/3</Text>
                    </View>
                    <Text style={styles.stepDesc}>You will be asked to set preferred date in next step</Text>
                </View>
                <TouchableOpacity 
                    style={styles.stepBtn}
                    onPress={() => props.navigation.navigate("DateTime")}
                >
                    <Image source={ArrowIcon} style={styles.stepArrow} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    bgTop: {
        height: 236
    },
    bgPattern: {
        width: "100%",
        flex: 1,
        position: "relative",
    },
    positionTitle: {
        position: "absolute",
        bottom: 70,
        left: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 15
    },
    titleText: {
        fontSize: 36,
        lineHeight: 39,
        fontWeight: "300",
        color: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#fff"
    },
    arrowIcon: {
        width: 30,
        height: 20
    },


    dropdownApp: {
        backgroundColor: "#fff",
        elevation: 3,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 7,
        paddingHorizontal: 15,
        paddingVertical: 5,
        position: "absolute",
        bottom: "-50%",
        left: 0,
        width: "93%",
        display: "none",
        opacity: 0
    },
    dropdownLink: {
        paddingVertical: 10,
    },
    dropdownText: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: "300",
        color: "#000"
    },

    homeSlide: {
        paddingTop: 30,
        paddingLeft: 15
    },  
    slideBadges: {
        flexDirection: "row",
        marginBottom: 25
    },
    slideBadge: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        marginRight: 10,
        borderRadius: 8,
        minWidth: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    badgeSelected: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: "#cde5fd",
        marginRight: 10,
        borderRadius: 8,
        minWidth: 80,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#cde5fd"
    },
    badgeText: {
        fontSize: 14,
        lineHeight: 17,
        color: "#353535",
        fontWeight: "300",
    },

    slideBoxes: {
        flexDirection: "row",
        flex: 1
    },
    iconBox: {
        width: "25%",
        backgroundColor: "#fff",
        elevation: 3,
        textAlign: "left",
        padding: 15,
        borderWidth: 1,
        borderColor: "#dcdcdc",
        borderRadius: 10,
        marginRight: 15
    },
    iconBoxSelected: {
        width: "25%",
        backgroundColor: "#fff",
        elevation: 3,
        textAlign: "left",
        padding: 15,
        borderWidth: 1,
        borderColor: "#f45c04",
        borderRadius: 10,
        marginRight: 15,
        borderLeftColor: "#f45c04",
        borderRightColor: "#fdb924"
    },
    slideIcon: {
        // width: 53,
        // height: 47,
        marginBottom: 10
    },
    slideText: {
        fontSize: 14,
        lineHeight: 16,
        color: "#000",
        fontWeight: "300"
    },
    stepsFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 15,
        alignContent: "flex-end",
        marginTop: "auto",
        paddingBottom: 20
    },
    stepsInfo: {
        flex: 0.75
    },
    stepCol: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5
    },
    stepDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ffcd28',
        borderWidth: 1,
        borderColor: "#989487",
        marginRight: 5
    },
    stepText: {
        fontSize: 16,
        color: "#000",
        fontWeight: "700"
    },
    stepDesc: {
        fontSize: 14,
        color: '#6f6f6f'
    }, 
    stepBtnDisabled: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#bbb",
        alignItems: "center",
        justifyContent: "center"
    },
    stepBtn: {
        width: 65,
        height: 65,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f88613"
    },
    stepArrow: {
        width: 30,
        height: 25,
        transform: [{ rotate: '-90deg'}],
        marginLeft: 6
    }
});
