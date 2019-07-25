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
          backgroundColor: '#F0F8FF'
        }}
      >
        {/* Top row */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: 'white'
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch'
            }}
            onPress={() => {
              alert('View');
            }}
          >
            <Text
              style={{ marginHorizontal: 25, fontSize: 20, color: 'black' }}
            >
              View
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch'
            }}
          >
            <Text
              style={{ marginHorizontal: 25, fontSize: 20, color: 'black' }}
            >
              Edit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch'
            }}
          >
            <Text
              style={{ marginHorizontal: 25, fontSize: 20, color: 'black' }}
            >
              Help
            </Text>
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <View
          style={{
            flex: 8,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: '#E6E6FA'
          }}
        />
      </View>
    );
  }
}

export default App;
