import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CheckBox extends Component {
  render() {
    return (
      <View
        style={[
          {
            width: 22,
            height: 22,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3,
            backgroundColor: 'white',
            elevation: 3
          },
          this.props.style
        ]}
      >
        {this.props.checked ? (
          <Text
            style={{
              color: 'black',
              fontSize: 24
            }}
          >
            ✓
          </Text>
        ) : null}
      </View>
    );
  }
}

export { CheckBox };
