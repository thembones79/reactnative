import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';


const ROOT_URL = "https://us-central1-one-time-password-8.cloudfunctions.net";

class SignInForm extends Component {

    state = {phone: '', code: ''};

    handleSubmit = async () => {

        const {phone, code} = this.state;


        try {
            let {data} = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {phone, code})
       // console.log(response);
       firebase.auth().signInWithCustomToken(data.token);
        }catch (err) {
      //      console.log(err);
        }
    }

    render() {
        return(
            <View>
                <View style={{marginBottom: 10}}>
                    <Text>Enter Phone Number</Text>
                    <Input 
                    value={this.state.phone}
                    onChangeText={phone=>this.setState({phone})}
                    />
                </View>
                <View style={{marginBottom: 10}}>
                    <Text>Enter Code</Text>
                    <Input 
                    value={this.state.code}
                    onChangeText={code=>this.setState({code})}
                    />
                </View>
                <Button onPress={this.handleSubmit} title="Submit" />
            </View>
        );
    }
}

export default SignInForm;