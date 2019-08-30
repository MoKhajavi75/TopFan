import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CurrencyCard extends Component {
  render() {
    if (this.props.type == 1) {
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
            marginVertical: 10
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
            <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>
              {this.props.code}
            </Text>
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
    } else {
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
            marginVertical: 10
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
            <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>
              {this.props.code}
            </Text>
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
              <Text style={{ fontSize: 20, color: 'black' }}>
                {'نرخ: ' + this.props.rate}
              </Text>
            </View>
          </View>
        </View>
      );
    }
  }
}

export { CurrencyCard };
