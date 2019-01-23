import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";
//import { Text, View } from "react-native";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

class Manager extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAhfF8kD419QdXUUXzxnFqDou4AH6l8-_I",
      authDomain: "manager-470e5.firebaseapp.com",
      databaseURL: "https://manager-470e5.firebaseio.com",
      projectId: "manager-470e5",
      storageBucket: "manager-470e5.appspot.com",
      messagingSenderId: "168766344006"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default Manager;
