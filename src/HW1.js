import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class HW1 extends Component {
  render() {
    const buttons = ['View', 'Edit', 'Help'];

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F0F8FF'
        }}
      >
        {/* Top row */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: 'white'
          }}
        >
          {buttons.map(item => {
            return (
              <TouchableOpacity
                key={item}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch'
                }}
                onPress={() => {
                  alert(item);
                }}
              >
                <Text
                  style={{ marginHorizontal: 25, fontSize: 20, color: 'black' }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Bottom section */}
        <View
          style={{
            flex: 8,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: '#E6E6FA'
          }}
        >
          {/* Output */}
          <View
            style={{
              flex: 2,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              alignSelf: 'stretch',
              backgroundColor: '#D3D3D3',
              margin: 20,
              borderWidth: 1
            }}
          >
            <Text style={{ fontSize: 52, margin: 5 }}>0</Text>
          </View>

          {/* Buttons */}
          <View
            style={{
              flex: 8,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: 'white',
              margin: 20
            }}
          >
            <Text style={{ fontSize: 52 }}>Buttons</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default HW1;
