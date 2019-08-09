import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity
} from 'react-native';

class SpinnerPage extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      isSecure: true,
      username: ''
    };

    this.setLoading();
  }

  setLoading() {
    setTimeout(() => this.setState({ isLoading: false }), 3000);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F0F8FF'
          }}
        >
          <ActivityIndicator size='large' color='red' />
          <Text style={{ fontSize: 30, color: 'black', marginTop: 10 }}>
            در حال پردازش..
          </Text>
        </View>
      );
    } else {
      const onChangeText = text => {
        this.setState({ username: text });
      };

      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F0F8FF'
          }}
        >
          {/* Show the text */}
          <View
            style={{
              width: 250,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'red',
              borderRadius: 10,
              marginBottom: 30
            }}
          >
            <Text style={{ fontSize: 40, color: 'black' }}>
              {this.state.username}
            </Text>
          </View>

          {/* Text input */}
          <View
            style={{
              width: 250,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 10
            }}
          >
            <TextInput
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                fontSize: 32,
                textAlign: 'center'
              }}
              value={this.state.text}
              onChangeText={onChangeText}
              onEndEditing={() => {
                if (this.state.username.length == 2) {
                  alert('OK!');
                } else {
                  alert('Nokay :|');
                }
              }}
              placeholder='لطفا وارد کنید!'
              maxLength={4}
              secureTextEntry={this.state.isSecure}
            />
          </View>

          {/* Button */}
          <TouchableOpacity
            style={{
              width: 250,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: 'coral',
              marginTop: 30
            }}
            onPress={() => {
              this.setState({ isSecure: !this.state.isSecure });
            }}
          >
            <Text>Click here to toggle secure</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

export { SpinnerPage };
