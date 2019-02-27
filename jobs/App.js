import Expo, { Notifications } from "expo";
import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { Provider } from "react-redux";

import registerForNotifications from "./services/push_notifications";
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
      screen: createBottomTabNavigator(
        {
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: createStackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        },
        {
          tabBarPosition: "bottom",
          swipeEnabled: false,
          tabBarOptions: {
            labelStyle: { fontSize: 12 }
          }
        }
      )
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
    Notifications.addListener(notification => {
      const {
        data: { text },
        origin
      } = notification;

      if (origin === "received" && text) {
        Alert.alert("New Push Notification", text, [{ text: "Ok." }]);
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Jobs />
      </Provider>
    );
  }
}

export default App;
