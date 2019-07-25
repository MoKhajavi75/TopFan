import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'coral'
        }}
      >
        <TouchableOpacity
          style={{
            width: 250,
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow',
            borderRadius: 10
          }}
          onPress={() => {
            alert("I'm Pressed!");
          }}
        >
          <Text style={{ fontSize: 32 }}>Press me!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
