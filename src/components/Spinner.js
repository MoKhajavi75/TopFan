import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

class Spinner extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='red' />
      </View>
    );
  }
}

export { Spinner };
