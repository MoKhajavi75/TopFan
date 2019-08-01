import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

class HW7 extends Component {
  constructor() {
    super();

    this.state = {
      size: 20
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
              margin: 40
            }}
          >
            <Text style={{ fontSize: Number(this.state.size) }}>xxx</Text>
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
              selectedValue={this.state.size}
              onValueChange={value => {
                this.setState({ size: value });
              }}
            >
              <Picker.Item label='ده' value='10' />
              <Picker.Item label='بیست' value='20' />
              <Picker.Item label='سی' value='30' />
              <Picker.Item label='چهل' value='40' />
            </Picker>
          </View>
        </View>
      </View>
    );
  }
}

export default HW7;
