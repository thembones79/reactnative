import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner, CardSection } from "./components/common";
import LoginForm from "./components/LoginForm";

class Auth extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAKPyhp9vW7uc-p9SxYipIkJBVYDJTlcyI",
      authDomain: "authentication-12be7.firebaseapp.com",
      databaseURL: "https://authentication-12be7.firebaseio.com",
      projectId: "authentication-12be7",
      storageBucket: "authentication-12be7.appspot.com",
      messagingSenderId: "175761512933"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
        <CardSection><Button>Log Out</Button></CardSection>
        
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default Auth;
