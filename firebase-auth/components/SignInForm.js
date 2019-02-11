import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import axios from 'axios';


const ROOT_URL = "https://us-central1-one-time-password-8.cloudfunctions.net";

class SignInForm extends Component {

    state = {phone: '', code: ''};

    handleSubmit = async () => {

        const {phone, code} = this.state;


        try {
            await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {phone, code})
        }catch (err) {
            console.log(err);
        }
    }

    render() {
        return(
            <View>
                <View>
                    <Text>Enter Phone Number</Text>
                    <Input 
                    value={this.state.phone}
                    onChangeText={phone=>this.setState({phone})}
                    />
                </View>
                <View>
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