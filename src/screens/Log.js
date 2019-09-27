import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Log </Text>
      </View>
    );
  }
}

export { Log };
