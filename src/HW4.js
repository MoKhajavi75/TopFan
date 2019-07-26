import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

class HW4 extends Component {
  constructor() {
    super();

    this.state = {
      buttons: []
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
            borderWidth: 5,
            borderColor: 'red',
            margin: 40,
            padding: 10
          }}
        >
          <ScrollView
            ref={x => {
              this.x = x;
            }}
            style={{ flex: 1, alignSelf: 'stretch' }}
            onContentSizeChange={() => {
              this.x.scrollToEnd();
            }}
          >
            {this.state.buttons.map(item => {
              return (
                <View
                  key={item}
                  style={{
                    height: 70,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    borderWidth: 1,
                    margin: 15,
                    borderRadius: 10
                  }}
                >
                  <Text style={{ fontSize: 32, color: 'black' }}>{item}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <TouchableOpacity
          style={{
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: 'coral',
            borderRadius: 10,
            margin: 15,
            marginTop: 0
          }}
          onPress={() => {
            var newButtons = this.state.buttons;
            newButtons.push(this.state.buttons.length + 1);
            this.setState({ buttons: newButtons });
          }}
        >
          <Text style={{ fontSize: 32, color: 'black' }}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HW4;
