import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { Header } from "./components/common";

const TechStack = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
          <Header headerText='Tech Stack'/>
        <View>
          <Text>Dupa</Text>
        </View>
      </View>
    </Provider>
  );
};

export default TechStack;
