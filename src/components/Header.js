import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
  Text
} from 'react-native';

class Header extends Component {
  constructor() {
    super();

    // if (Platform.OS === 'android') {
    //  UIManager.setLayoutAnimationEnabledExperimental &&
    //    UIManager.setLayoutAnimationEnabledExperimental(true);
    // }
  }

  // componentWillUpdate() {
  //   LayoutAnimation.spring();
  // }

  render() {
    return (
      <SafeAreaView
        style={{
          height: 60,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white'
        }}
      >
        {/* Left */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        ></View>

        {/* Center */}
        <View
          style={{
            flex: 5,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <Text style={{ fontSize: 34, color: 'red', textAlign: 'center' }}>
            {this.props.title}
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
          onPress={() => this.props.navigation.openDrawer()}
        >
          <Text style={{ fontSize: 34, color: 'red', textAlign: 'center' }}>
            ≡
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export { Header };
