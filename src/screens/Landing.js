import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const buttons = [
      {
        title: 'ماشین حساب',
        page: '_Calculator'
      },
      {
        title: 'آلبوم',
        page: '_Album'
      }
    ];

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#708090',
          padding: 10
        }}
      >
        <FlatList
          style={{ flex: 1, alignSelf: 'stretch' }}
          data={buttons}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  flex: 1,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'coral',
                  borderRadius: 10,
                  margin: 5
                }}
                onPress={() => this.props.navigation.navigate(item.page)}
              >
                <Text style={{ fontSize: 25, color: 'white' }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
          numColumns={2}
          keyExtractor={item => item.page}
        />

        <TouchableOpacity
          style={{
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: 'coral',
            borderRadius: 10
          }}
          onPress={() => {
            AsyncStorage.removeItem('token')
              .then(() => {
                alert('Bye Bye :|');
                this.props.navigation.navigate('_AuthStack');
              })
              .catch(error => alert(error));
          }}
        >
          <Text style={{ fontSize: 25, color: 'white' }}>خروج</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export { Landing };
