import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Weather extends Component {
  render() {
    const url =
      'http://api.openweathermap.org/data/2.5/weather?q=Tehran,ir&units=metric&appid=10ac66dc760b7718bee8d9ac26cc3143';

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#708090',
          padding: 30
        }}
      >
        <Text style={{ fontSize: 40 }}>Weather</Text>
      </View>
    );
  }
}

export { Weather };
