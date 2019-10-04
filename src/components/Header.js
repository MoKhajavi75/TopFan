import React, { Component } from 'reactn';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { colors, strings, fonts } from '../globals';

class Header extends Component {
  render() {
    return (
      <View
        style={{
          height: '10%',
          flexDirection:
            strings(this.global.locale).DIRECTION == 'ltr'
              ? 'row'
              : 'row-reverse',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors(this.global.theme).primary
        }}
      >
        {/* Left */}
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
          onPress={() => alert('search')}
        >
          <View
            style={{
              width: responsiveWidth(7),
              aspectRatio: 1 / 1
            }}
          >
            <Image
              source={require('../icons/03.png')}
              style={{
                flex: 1,
                width: undefined,
                height: undefined,
                tintColor: colors(this.global.theme).secondary,
                transform: [
                  {
                    rotateY:
                      strings(this.global.locale).DIRECTION == 'ltr'
                        ? '0deg'
                        : '180deg'
                  }
                ]
              }}
            />
          </View>
        </TouchableOpacity>

        {/* Center */}
        <View
          style={{
            flex: 5,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <Text
            style={[
              {
                color: colors(this.global.theme).secondary,
                fontSize: responsiveFontSize(3)
              },
              fonts(this.global.locale).Black
            ]}
          >
            {strings(this.global.locale).header_text}
          </Text>
        </View>

        {/* Right */}
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
          onPress={() => alert('Add Section')}
        >
          <View
            style={{
              width: responsiveWidth(6),
              aspectRatio: 1 / 1
            }}
          >
            <Image
              source={require('../icons/05.png')}
              style={{
                flex: 1,
                width: undefined,
                height: undefined,
                tintColor: colors(this.global.theme).secondary
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export { Header };
