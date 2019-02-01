import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import EmployeeForm from "EmployeeForm";
import { Text } from "react-native";
import { employeeUpdate } from "../actions";
import { Card, CardSection, Button } from "./common";

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employee.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const {name, phone, shift} = this.props;
  }
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToprops = (state) => {
  const {name, phone, shift} = state.EmployeeForm;
  return {name, phone, shift};
};

export default connect(
  null,
  { employeeUpdate }
)(EmployeeEdit);
