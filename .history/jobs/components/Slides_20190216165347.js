import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

class Slides extends Component {
  renderSlides() {
    return this.props.data.map(slide => {
      return (
        <View key={slide.text} style={styles.slideStyle}>
          <Text style={styles.slideTextStyle}>{slide.text}</Text>
        </View>
      );
    });
  }
  render() {
    return (
      <ScrollView horizontal style={{ flex: 1 }} pagingEnabled>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    aligItems: "center",
    width: SCREEN_WIDTH
  },
  slideTextStyle: {
    fontSize: 30
  }
};

export default Slides;
