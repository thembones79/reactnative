import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from './reducers';

const TechStack = () => {
  return (
      <Provider store={createStore(reducers)}>
    <View>
      <Text>Dupa</Text>
    </View>
    </Provider>
  );
};

export default TechStack;
