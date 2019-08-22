import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard
} from 'react-native';

class Support extends Component {
  constructor() {
    super();

    this.state = {
      chats: [],
      message: ''
    };
  }

  renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          flex: 1,
          width: 300,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: item.isUser ? 'flex-end' : 'flex-start',
          borderRadius: 15,
          backgroundColor: item.isUser ? 'white' : 'coral',
          marginBottom: index == this.state.chats.length - 1 ? 90 : 10
        }}
      >
        <Text style={{ fontSize: 40, color: item.isUser ? 'black' : 'white' }}>
          {item.text}
        </Text>

        <Text
          style={{
            fontSize: 18,
            color: 'black',
            alignSelf: 'flex-end',
            margin: 5
          }}
        >
          {item.time}
        </Text>
      </View>
    );
  };

  render() {
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
          ref={flatList => {
            this.flatList = flatList;
          }}
          style={{
            flex: 1,
            alignSelf: 'stretch',
            borderWidth: 1,
            borderRadius: 10
          }}
          data={this.state.chats}
          renderItem={this.renderItem}
          keyExtractor={(_, index) => String(index)}
          onContentSizeChange={() => this.flatList.scrollToEnd()}
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 75,
            width: 350,
            backgroundColor: 'white',
            borderWidth: 1,
            borderRadius: 25,
            borderColor: 'red',
            position: 'absolute',
            bottom: 10
          }}
        >
          <TextInput
            ref={input => {
              this.input = input;
            }}
            style={{
              flex: 8.5,
              fontSize: 30,
              textAlign: 'center',
              textAlignVertical: 'center'
            }}
            value={this.state.message}
            onChangeText={message => this.setState({ message })}
            placeholder='Your message...'
          />

          <TouchableOpacity
            style={{
              flex: 1.5,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              borderLeftWidth: 2
            }}
            onPress={() => {
              // Clear text input
              this.input.clear();

              // Dismiss the keyboard
              //Keyboard.dismiss();

              // Push new message
              let newChats = [...this.state.chats];
              let currentTime = new Date();
              var hour = currentTime.getHours();
              var minute = currentTime.getMinutes();
              var second = currentTime.getSeconds();

              newChats.push(
                {
                  text: this.state.message,
                  time: hour + ':' + minute + ':' + second,
                  isUser:
                    this.state.chats.length == 0
                      ? true
                      : !this.state.chats[this.state.chats.length - 1].isUser
                }
                /*
                {
                  text: Math.random().toFixed(2),
                  time: hour + ':' + minute,
                  isUser: false
                }
                */
              );

              this.setState({ chats: newChats, message: '' });
            }}
            disabled={this.state.message == ''}
          >
            <Image
              style={{
                width: 25,
                height: 25,
                opacity: this.state.message == '' ? 0.2 : 1
              }}
              source={require('../images/Support/01.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export { Support };
