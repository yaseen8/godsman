import React, {useEffect, useState} from 'react';
import {authActions} from '../../redux/auth/actions';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../styles/index';
import firebase from 'firebase';

import {
    View,
    Text,
    TextInput,
    ImageBackground,
    Image
} from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler';
import BgPattern from "../../assets/images/bg2.png"

const SignIn = props => {
  // const navigation = useNavigation();
  const {login} = props;
  const [auth, setAuth] = useState({number: ''});
  const goToHome = () => {
    props.navigation.navigate('App');
  };
  const userLogin = () => {
    // alert(auth.number);
    login(auth);
  }
  return (
    <View style={styles.signIn_wrap}>
        <View style={styles.signTop}>
            <ImageBackground style={styles.bgPattern} source={BgPattern}>
                <Text style={styles.titleText}>Let's get start</Text>
            </ImageBackground>
        </View>
        <View style={styles.container}>
            <View style={styles.loginWrap}>
                <View>
                    <TextInput 
                        style={styles.inputField}
                        onChangeText={e => setAuth({...auth, number: e})}
                        placeholder="Enter your number" 
                    />
                    <TextInput 
                        style={styles.inputField}
                        onChangeText={e => setAuth({...auth, number: e})}
                        placeholder="Enter verification code" 
                    />
                    <TouchableOpacity 
                        style={styles.logBtn}
                        onPress={() => props.navigation.navigate("Home")}
                    >
                        <Text style={styles.btnText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    signIn_wrap: {
        flex: 1,
    },
    signTop: {
        width: "100%",
        flex: 0.6,
        // backgroundColor: "#ffb90e",
        marginBottom: 30,
        position: "relative"
    },
    container: {
        paddingLeft: "12%",
        paddingRight: "12%",
        width: "100%",
        flex: 1
    },
    logInImg: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    positionLogo: {
        position: "absolute",
        left: 0,
        top: 30
    },
    titleText: {
        position: "absolute",
        bottom: 60,
        left: 15,
        fontSize: 36,
        lineHeight: 39,
        fontWeight: "300",
        color: "#fff"
    },
    bgPattern: {
        width: "100%",
        flex: 1,
        position: "relative"
    },
    loginWrap: {
        flex: 1,
    },
    inputField: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#ffb104",
        fontSize: 16,
        lineHeight: 19,
        color: "#000",
        marginBottom: 20
    },
    logBtn: {
        backgroundColor: "#ffb104",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,
        height: 43,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    btnText: {
        fontSize: 18,
        lineHeight: 43,
        fontWeight: "700",
        color: "#fff",
    }
});

const mapStateToProps = state => {
  const {loggingIn, errors, loggedIn} = state.auth;
  return {loggingIn, errors, loggedIn};
};

const mapDispatchToProps = {
  login: authActions.login,
};

const connectedSignInPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);

export {connectedSignInPage as SignIn};
