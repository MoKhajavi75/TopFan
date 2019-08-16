import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class CurrencyCard extends Component {
  render() {
    return (
      <View
        style={{
          height: 130,
          width: 350,
          flexDirection: 'row-reverse',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          borderWidth: 3,
          borderColor: 'black',
          backgroundColor: 'white',
          marginVertical: 15
        }}
      >
        <View
          style={{
            flex: 1.2,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderLeftWidth: 3
          }}
        >
          <Image style={{ width: 70, height: 70 }} source={this.props.image} />
        </View>

        <View
          style={{
            flex: 3,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              marginBottom: 10
            }}
          >
            <Text style={{ fontSize: 20, color: 'black', marginBottom: 20 }}>
              {'خرید: ' + this.props.buy}
            </Text>

            <Text style={{ fontSize: 20, color: 'black' }}>
              {'فروش: ' + this.props.sell}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export { CurrencyCard };
