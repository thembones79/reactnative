// Import libraries for making a component
import React from "react";
import { Text, View } from "react-native";

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F7F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};

// Make component avaiable to other parts of the app
export {Header};
