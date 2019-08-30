import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isSending: false
    };
  }

  renderHeader() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
      >
        <Text style={{ fontSize: 38, fontFamily: 'Vazir Black FD' }}>
          برنامه من
        </Text>
      </View>
    );
  }

  renderInputs() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
      >
        <TextInput
          style={{
            width: 350,
            height: 70,
            borderRadius: 10,
            backgroundColor: 'white',
            fontSize: 30,
            fontFamily: 'Vazir Thin FD',
            textAlign: 'center',
            marginBottom: 20
          }}
          autoCorrect={false}
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          onSubmitEditing={() => this.passInput.focus()}
          returnKeyType='next'
          placeholder='نام کاربری'
          underlineColorAndroid='transparent'
        />

        <TextInput
          ref={passInput => {
            this.passInput = passInput;
          }}
          style={{
            width: 350,
            height: 70,
            borderRadius: 10,
            backgroundColor: 'white',
            fontSize: 30,
            fontFamily: 'Vazir Thin FD',
            textAlign: 'center'
          }}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder='گذرواژه'
          underlineColorAndroid='transparent'
          secureTextEntry
        />
      </View>
    );
  }

  renderButton() {
    let disabled = this.state.username == '' || this.state.password == '';

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
      >
        <TouchableOpacity
          style={{
            width: 350,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: '#DC143C',
            fontSize: 30,
            elevation: 5,
            opacity: disabled ? 0.5 : 1
          }}
          onPress={() => {
            this.setState({ isSending: true });

            const url = 'http://mohamadkh75.heisenbug.ir/';

            Axios.post(url, {
              username: this.state.username,
              password: this.state.password
            })
              .then(response => {
                AsyncStorage.setItem('token', '123')
                  .then(() => {
                    alert(response.data.message);
                    this.props.navigation.navigate('_RootStack');
                  })
                  .catch(error => alert(error));
              })
              .catch(error => {
                this.setState({ isSending: false });
                alert(error);
              });
          }}
          disabled={disabled || this.state.isSending}
        >
          {this.state.isSending ? (
            <ActivityIndicator size='large' color='white' />
          ) : (
            <Text
              style={{
                color: 'white',
                fontSize: 38,
                fontFamily: 'Vazir FD'
              }}
            >
              ورود
            </Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <LinearGradient
        colors={['coral', 'yellow']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
      >
        {this.renderHeader()}

        {this.renderInputs()}

        {this.renderButton()}
      </LinearGradient>
    );
  }
}

export { Login };
