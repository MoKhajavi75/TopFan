import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HW6 extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F0F8FF'
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderWidth: 1,
            margin: 40
          }}
        >
          <Text>...</Text>
        </View>
      </View>
    );
  }
}

export default HW6;
