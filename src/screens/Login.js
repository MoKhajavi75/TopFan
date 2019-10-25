import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Share from 'react-native-share';
import { Input } from '../components';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isConnected: undefined,
      name: '',
      email: ''
    };
  }

  componentDidMount() {
    // Fetch network status
    NetInfo.isConnected
      .fetch()
      .done(isConnected => this.setState({ isConnected }));

    this.netInfoListener = NetInfo.isConnected.addEventListener(
      'connectionChange',
      isConnected => this.setState({ isConnected })
    );
  }

  componentWillUnmount() {
    this.netInfoListener();
  }

  renderButtons() {
    let submitDisabled = this.state.name == '' || this.state.email == '';
    let shareDisabled = submitDisabled || !this.state.isConnected;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
      >
        <TouchableOpacity
          style={{
            height: 120,
            width: 150,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'coral',
            borderRadius: 10,
            opacity: submitDisabled ? 0.5 : 1
          }}
          disabled={submitDisabled}
          onPress={() => {
            alert(JSON.stringify([this.state.name, this.state.email], null, 2));
          }}
        >
          <Text style={{ fontSize: 26, color: 'white' }}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 120,
            width: 150,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'coral',
            borderRadius: 10,
            opacity: shareDisabled ? 0.5 : 1
          }}
          disabled={shareDisabled}
          onPress={() => {
            let shareOptions = {
              title: 'گزارش',
              message: `کاربر گرامی ${this.state.name}، ایمیل شما به آدرس ${this.state.email} تایید شد.`,
              url: '',
              subject: 'گزارش'
            };

            Share.open(shareOptions)
              .then(response => console.warn(JSON.stringify(response, null, 2)))
              .catch(error => console.warn(error));
          }}
        >
          <Text style={{ fontSize: 26, color: 'white' }}>Share</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#708090',
            padding: 10
          }}
        >
          <View
            style={{
              flex: 1.5,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              alignSelf: 'stretch'
            }}
          >
            <Input
              width={300}
              height={80}
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              placeholder='Name'
              correctColor='lime'
              wrongColor='red'
            />

            <Input
              width={300}
              height={80}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              placeholder='Email'
              correctColor='lime'
              wrongColor='red'
            />
          </View>

          {this.renderButtons()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export { Login };
