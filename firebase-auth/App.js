import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {

componentDidMount(){
  const config = {
    apiKey: "AIzaSyASGp0hJDmL_-ldeNEVf0UlRmsnMchjiL0",
    authDomain: "one-time-password-8.firebaseapp.com",
    databaseURL: "https://one-time-password-8.firebaseio.com",
    projectId: "one-time-password-8",
    storageBucket: "one-time-password-8.appspot.com",
    messagingSenderId: "387240407096"
  };
  firebase.initializeApp(config);
}

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
