import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import { navigation  } from "react-navigation";

class ReviewScreen extends Component {
    static navigationOptions = {
        title: "Review Jobs",
        headerRight:  <Button title="Settings" onPress={()=>navigation.navigate('settings') } />
        }
    
    render(){
        return(
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;