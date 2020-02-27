import React, {useEffect, useState} from 'react';
import {authActions} from '../../redux/auth/actions';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';

import {View, Text, TextInput, ImageBackground, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BgPattern from '../../assets/images/bg2.png';
import {authConstants} from '../../redux/auth/constants';
import firebase from 'react-native-firebase';

const SignIn = props => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('usetr data', user);
        if (user._user.displayName) {
          props.navigation.navigate('Home');
        }
      } else {
        console.log('not logged');
      }
    });
  });

  const {
    login,
    confirmationResult,
    confirmCode,
    user,
    userData,
    saveUserName,
    errors,
    clearState,
  } = props;
  const [auth, setAuth] = useState({number: '', code: '', name: ''});
  const userLogin = () => {
    login(auth);
  };
  const codeConfirmation = () => {
    confirmCode(confirmationResult, auth.code, props);
  };
  const saveUserData = () => {
    userData(auth.name, props);
  };
  const clear = () => {
    clearState();
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
          {!confirmationResult && (
            <View>
              <TextInput
                style={styles.inputField}
                onChangeText={e => setAuth({...auth, number: e})}
                placeholder="Enter your number"
              />
              <TouchableOpacity
                style={styles.logBtn}
                onPress={userLogin}
                disabled={!auth.number}>
                <Text style={styles.btnText}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
          {!saveUserName && confirmationResult && !errors && (
            <View>
              <TextInput
                style={styles.inputField}
                onChangeText={e => setAuth({...auth, code: e})}
                placeholder="Enter verification code"
              />
              <TouchableOpacity
                style={styles.logBtn}
                onPress={codeConfirmation}
                disabled={!auth.code}>
                <Text style={styles.btnText}>Continue</Text>
              </TouchableOpacity>
            </View>
          )}
          {saveUserName && (
            <View>
              <TextInput
                style={styles.inputField}
                onChangeText={e => setAuth({...auth, name: e})}
                placeholder="Name"
              />
              <TouchableOpacity
                style={styles.logBtn}
                onPress={saveUserData}
                disabled={!auth.name}>
                <Text style={styles.btnText}>Continue</Text>
              </TouchableOpacity>
            </View>
          )}
          {errors && (
            <View>
              <Text>{errors}</Text>
              <TouchableOpacity style={styles.logBtn} onPress={clear}>
                <Text style={styles.btnText}>Back To Sign In</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  const {
    loggingIn,
    errors,
    loggedIn,
    confirmationResult,
    user,
    saveUserName,
  } = state.auth;
  return {loggingIn, errors, loggedIn, confirmationResult, user, saveUserName};
};

const mapDispatchToProps = {
  login: authActions.login,
  confirmCode: authActions.confirmCode,
  userData: authActions.userData,
  clearState: authActions.clearState,
};

const connectedSignInPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);

export {connectedSignInPage as SignIn};

const styles = StyleSheet.create({
  signIn_wrap: {
    flex: 1,
  },
  signTop: {
    width: '100%',
    flex: 0.6,
    // backgroundColor: "#ffb90e",
    marginBottom: 30,
    position: 'relative',
  },
  container: {
    paddingLeft: '12%',
    paddingRight: '12%',
    width: '100%',
    flex: 1,
  },
  logInImg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  titleText: {
    position: 'absolute',
    bottom: 60,
    left: 15,
    fontSize: 36,
    lineHeight: 39,
    fontWeight: '300',
    color: '#fff',
  },
  bgPattern: {
    width: '100%',
    flex: 1,
    position: 'relative',
  },
  loginWrap: {
    flex: 1,
  },
  inputField: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ffb104',
    fontSize: 16,
    lineHeight: 19,
    color: '#000',
    marginBottom: 20,
  },
  logBtn: {
    backgroundColor: '#ffb104',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    height: 43,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 43,
    fontWeight: '700',
    color: '#fff',
  },
});
