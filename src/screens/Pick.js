import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

class Pick extends Component {
  constructor() {
    super();

    this.state = {
      color: 'black'
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
            borderRadius: 10,
            margin: 40
          }}
        >
          <View
            style={{
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              borderWidth: 1,
              borderRadius: 10,
              margin: 40,
              backgroundColor: this.state.color
            }}
          >
            <Text style={{ fontSize: 30, color: 'white' }}>xxx</Text>
          </View>

          <View
            style={{
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              borderWidth: 1,
              borderRadius: 10,
              margin: 40
            }}
          >
            <Picker
              style={{
                flex: 1,
                alignSelf: 'stretch'
              }}
              selectedValue={this.state.color}
              onValueChange={value => {
                this.setState({ color: value });
              }}
            >
              <Picker.Item label='قرمز' value='red' />
              <Picker.Item label='آبی' value='blue' />
              <Picker.Item label='زرد' value='yellow' />
            </Picker>
          </View>
        </View>
      </View>
    );
  }
}

export { Pick };
