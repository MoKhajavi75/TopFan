import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

class App extends Component {
  constructor() {
    super();

    this.state = {
      backColor: 'white'
    };
  }

  render() {
    let buttons = [1, 2, 3];

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: 'rgb(245,246,247)',
            borderWidth: 1,
            paddingRight: 80
          }}
        >
          {buttons.map(item => {
            return (
              <View
                key={item}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1
                }}
              >
                <Text style={{ fontSize: 32 }}>{item * 2}</Text>
              </View>
            );
          })}
        </View>

        <View
          style={{
            flex: 9,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: 'rgb(225,234,245)',
            borderWidth: 1
          }}
        >
          <Text style={{ fontSize: 32 }}>Bottom</Text>
        </View>
      </View>
    );
  }
}

export default App;
