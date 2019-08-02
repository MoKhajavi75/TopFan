import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

class Landing extends Component {
  render() {
    // Our homeworks
    const homeworks = [
      {
        title: 'Calculator',
        pageName: '_Calculator'
      },
      {
        title: 'Spinner & TextInput',
        pageName: '_Spinner'
      },
      {
        title: 'Scroll View',
        pageName: '_Scroll'
      },
      {
        title: 'Map',
        pageName: '_Map'
      },
      {
        title: 'Images',
        pageName: '_Images'
      },
      {
        title: 'Flat List',
        pageName: '_Flat'
      },
      {
        title: 'Picker',
        pageName: '_Pick'
      }
    ];

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#708090',
          padding: 30
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <FlatList
            style={{ flex: 1, alignSelf: 'stretch' }}
            data={homeworks}
            keyExtractor={item => item.title}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    height: 85,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    borderRadius: 10,
                    backgroundColor: 'coral',
                    marginTop: index == 0 ? 0 : 30
                  }}
                  onPress={() => {
                    this.props.navigation.navigate(item.pageName);
                  }}
                >
                  <Text style={{ fontSize: 25, color: 'white' }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

export default Landing;
