import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

class CheckBox extends Component {
  render() {
    return (
      <TouchableOpacity
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
        onPress={() => this.props.onPress()}
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
      </TouchableOpacity>
    );
  }
}

export { CheckBox };
