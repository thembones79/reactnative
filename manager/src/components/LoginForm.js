import React, { Component } from "react";
import { connect } from "react-redux";
//import { View, Text } from "react-ative";
import { Card, CardSection, Input, Button } from "./common";
import { emailChanged, passwordChanged } from "../actions";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.props.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged }
)(LoginForm);