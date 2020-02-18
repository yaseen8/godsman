import React, {useEffect, useState} from 'react';
import {authActions} from '../../redux/auth/actions';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../styles/index';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';
import firebase from 'firebase';

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
    <Container>
      <Content>
        <Form style={style.position}>
          <Item floatingLabel rounded>
            <Label>Mobile Number</Label>
            <Input onChangeText={e => setAuth({...auth, number: e})} />
          </Item>
          <Button
            block
            rounded
            style={style.loginButton}
            onPress={userLogin}
            disabled={!auth.number}
            >
            <Text>Signin</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

const style = StyleSheet.create({
  position: {
    paddingTop: 100,
  },
  loginButton: {
    backgroundColor: colors.primary,
    marginTop: 50,
  },
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
