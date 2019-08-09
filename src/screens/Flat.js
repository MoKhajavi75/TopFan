import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

class Flat extends Component {
  render() {
    const data = [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ];

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
                  width: 50,
                  height: 50,
                  backgroundColor: 'coral',
                  borderRadius: 100,
                  marginBottom: 20
                }}
              />
            );
          }}
          keyExtractor={item => String(item)}
        />
      </View>
    );
  }
}

export { Flat };
