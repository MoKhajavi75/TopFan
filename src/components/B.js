import React, { Component } from 'react';
import { View, Text } from 'react-native';

class B extends Component {
  render() {
    return (
      <View
        style={{
          width: 250,
          height: 85,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#726',
          padding: 10
        }}
      >
        <Text style={{ fontSize: 25, color: 'white' }}>B</Text>
      </View>
    );
  }
}

export { B };
