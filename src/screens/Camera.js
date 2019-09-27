import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
      >
        <Text> Camera </Text>
      </View>
    );
  }
}

export { Camera };
