import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';




const MainNavigator = createBottomTabNavigator({
  welcome: {screen: WelcomeScreen},
  auth: {screen: AuthScreen}
});






export default createAppContainer(MainNavigator);



