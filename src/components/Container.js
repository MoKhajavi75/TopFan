import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Container extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#708090',
          padding: 10
        }}
      >
        <View
          style={{
            height: 80,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <Text
            style={{
              fontSize: 40,
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            {this.props.title}
          </Text>
        </View>

        {this.props.children}
      </View>
    );
  }
}

export { Container };
