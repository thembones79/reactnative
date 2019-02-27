import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { Provider } from "react-redux";

import registerForNotifications from  './services/push_notifications';
import store from "./store";
import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ReviewScreen from "./screens/ReviewScreen";

const MainNavigator = createBottomTabNavigator(
  {
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    main: {
      screen: createBottomTabNavigator({
        map: { screen: MapScreen },
        deck: { screen: DeckScreen },
        review: {
          screen: createStackNavigator({
            review: { screen: ReviewScreen },
            settings: { screen: SettingsScreen }
          })
        }
      },{
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarOptions:{
          labelStyle: {fontSize: 12}
        }
      })
    }
  },
  {
    navigationOptions: {
      tabBarOptions: { visible: false }
    },

    lazyLoad: true
  }
);

const Jobs = createAppContainer(MainNavigator);

class App extends React.Component {

  componentDidMount() {
    registerForNotifications();
  }

  render(){
  return (
    <Provider store={store}>
      <Jobs />
    </Provider>
  );
  }
};

export default App;

