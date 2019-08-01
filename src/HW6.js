import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

class HW6 extends Component {
  render() {
    const data = new Array(5000).fill('x');

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F0F8FF'
        }}
      >
        <FlatList
          style={{ flex: 1, alignSelf: 'stretch', margin: 20, borderWidth: 1 }}
          data={data}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  height: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  backgroundColor: 'coral',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: index == 0 ? 0 : 30
                }}
              >
                <Text style={{ fontSize: 32, color: 'white' }}>
                  {index + 1 + ' - ' + item}
                </Text>
              </View>
            );
          }}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

export default HW6;
