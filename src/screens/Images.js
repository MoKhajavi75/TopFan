import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

class Images extends Component {
  constructor() {
    super();

    this.state = {
      opacity: 1
    };
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
          <ImageBackground
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              opacity: this.state.opacity
            }}
            resizeMode='stretch'
            source={require('../images/back.jpg')}
          >
            <View
              style={{
                width: 200,
                height: 200,
                borderWidth: 3,
                borderColor: 'red'
              }}
            >
              <Image
                style={{ flex: 1 }}
                source={{
                  uri:
                    'https://facebook.github.io/react-native/docs/assets/GettingStartedCongratulations.png'
                }}
              />
            </View>

            <Text style={{ fontSize: 42, color: 'red', marginTop: 50 }}>
              %%%
            </Text>
          </ImageBackground>
        </View>

        <TouchableOpacity
          style={{
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: 'coral',
            borderRadius: 10,
            margin: 15,
            marginTop: 0
          }}
          onPress={() => {
            this.setState({ opacity: Math.random() });
          }}
        >
          <Text style={{ fontSize: 32, color: 'black' }}>Change opacity!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export { Images };
