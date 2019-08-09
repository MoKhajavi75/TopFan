import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';

class Card extends Component {
  render() {
    return (
      <View
        style={{
          height: 400,
          width: 350,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          borderWidth: 3,
          borderColor: 'black',
          backgroundColor: 'white',
          marginVertical: 15
        }}
      >
        <View
          style={{
            flex: 1.4,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <Image
            style={{ width: 180, height: 180, borderRadius: 10 }}
            source={{
              uri: this.props.image
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
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
              {'خواننده: ' + this.props.artist}
            </Text>

            <Text style={{ fontSize: 20, color: 'black' }}>
              {'آلبوم: ' + this.props.album}
            </Text>
          </View>

          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: 'coral',
              borderRadius: 20,
              marginHorizontal: 25,
              marginBottom: 10
            }}
            onPress={() => {
              Linking.openURL(this.props.url);
            }}
          >
            <Text style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>
              خرید
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export { Card };
