import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button title="Onwards!" raised={false} buttonStyle={styles.buttonStyle} />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundImage: linearGradient(red, yellow)}]}
        >
          <Text style={styles.slideTextStyle}>{slide.text}</Text>
          {this.renderLastSlide(index)}
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
    fontSize: 30,
    padding: 10,
    margin: 10,
    alignSelf: "center",
    color: "white",
    textAlign: "center"
  },
  buttonStyle: {
    backgroundColor: "#0288D1",
    marginTop: 15,
    width: SCREEN_WIDTH / 3,
    alignSelf: "center"
  }
};

export default Slides;
