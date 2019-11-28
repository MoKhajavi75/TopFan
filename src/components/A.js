import React, { Component } from 'react';
import { View, Text } from 'react-native';

class A extends Component {
  render() {
    return (
      <View
        style={{
          width: 250,
          height: 85,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#159',
          padding: 10,
          borderRadius: 10
        }}
      >
        <Text style={{ fontSize: 25, color: 'white' }}>A</Text>
      </View>
    );
  }
}

export { A };
