import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Calculator </Text>
      </View>
    );
  }
}

export { Calculator };
