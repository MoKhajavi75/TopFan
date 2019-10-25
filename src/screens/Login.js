import React, { Component } from 'react';
import { View, NetInfo } from 'react-native';
import { Input } from '../components';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txt: ''
    };
  }

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
        <Input
          width={300}
          height={80}
          value={this.state.txt}
          onChangeText={txt => this.setState({ txt })}
          placeholder='Email'
          correctColor='lime'
          wrongColor='red'
        />
      </View>
    );
  }
}

export { Login };
