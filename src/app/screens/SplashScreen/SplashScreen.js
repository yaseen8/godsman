import React, {useEffect, useState} from 'react';
import { 
    Text, 
    View,
    ImageBackground,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import LogoSplash from "../../assets/images/splash-logo.png"

const SplashScreen = props => {
  return (
        <View style={styles.splashBg}>
            <View>
                <Image source={LogoSplash} />
            </View>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    splashBg: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }
});
