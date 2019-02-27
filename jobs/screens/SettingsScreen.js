import React, {Component} from 'react';
import {View, Text, Platform} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import * as actions from '../actions';


class SettingsScreen extends Component {
    static navigationOptions = {
        header: {
            style: {
                marginTop: platform.OS === "android" ? 24 : 0
            }
        }
    }
    render(){
        return(
            <View>
                <Button
                    large
                    title="Reset Liked Jobs"
                    buttonStyle={{ backgroundColor: "#F44336" }}
                    icon={{ name: 'delete-forever', color: "white" }}
                    onPress={this.props.clearLikedJobs}
                />
            </View>
        );
    }
}

export default connect(null, actions)(SettingsScreen);