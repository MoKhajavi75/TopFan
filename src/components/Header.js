import React, { Component } from 'react';
import {
  SafeAreaView,
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
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white'
        }}
      >
        <Text style={{ fontSize: 34, color: 'red', textAlign: 'center' }}>
          {this.props.title}
        </Text>
      </SafeAreaView>
    );
  }
}

export { Header };
