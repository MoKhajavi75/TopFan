import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Album </Text>
      </View>
    );
  }
}

export { Album };
