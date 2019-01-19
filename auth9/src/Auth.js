import React, { Component } from "react";
import { View } from "react-native";
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';


class Auth extends Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAKPyhp9vW7uc-p9SxYipIkJBVYDJTlcyI",
      authDomain: "authentication-12be7.firebaseapp.com",
      databaseURL: "https://authentication-12be7.firebaseio.com",
      projectId: "authentication-12be7",
      storageBucket: "authentication-12be7.appspot.com",
      messagingSenderId: "175761512933"
    });
  }
  render() {
    return (
      <View>
          <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default Auth;
