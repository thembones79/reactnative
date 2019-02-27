import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { MapView } from "expo";
import { connect } from 'react-redux';
import { Button, Icon } from 'react-native-elements';

import * as actions from '../actions';

class MapScreen extends Component {

static navigationOptions = {
  title: 'Map',
  tabBarIcon: ({tintColor})=>{
      return <Icon name="my-location" size={30} color={tintColor} />

  }
}


  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  };

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
      // console.log(region);
      this.setState({region: region});
  }

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('deck');
    });
  };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }} region={this.state.region}
        onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
          large
          title="Search This Area"
          backgroundColor="#009688"
            buttonStyle={{ backgroundColor: "#009688" }}
          icon={{name: 'search', color: "white"}}
          onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 50,
    right: 50
  }
};

export default connect(null, actions)(MapScreen);
