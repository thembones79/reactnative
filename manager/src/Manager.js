import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
//import { Text, View } from "react-native";
import ReduxThunk from 'redux-thunk';
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
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default Manager;
