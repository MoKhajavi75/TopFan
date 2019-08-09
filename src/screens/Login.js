import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import axios from 'axios';
import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSending: false,
      username: '',
      password: ''
    };
  }

  render() {
    const url = 'http://mohamadkh75.heisenbug.ir/';

    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: '#708090',
            padding: 10
          }
        ]}
      >
        <View style={[styles.full, { backgroundColor: 'khaki' }]}>
          <Text style={{ fontSize: 30 }}> Login </Text>
        </View>

        <View style={[styles.full, { flex: 6 }]}>
          <TextInput
            style={{
              alignSelf: 'stretch',
              textAlign: 'center',
              height: 70,
              backgroundColor: 'white',
              borderRadius: 20,
              fontSize: 30,
              marginBottom: 30
            }}
            value={this.state.username}
            onChangeText={txt => this.setState({ username: txt })}
            placeholder='username'
          />

          <TextInput
            style={{
              alignSelf: 'stretch',
              textAlign: 'center',
              height: 70,
              backgroundColor: 'white',
              borderRadius: 20,
              fontSize: 30
            }}
            value={this.state.password}
            onChangeText={txt => this.setState({ password: txt })}
            placeholder='password'
            secureTextEntry
          />
        </View>

        <View style={[styles.full, { flex: 2 }]}>
          <TouchableOpacity
            style={[
              styles.full,
              { backgroundColor: 'coral', borderRadius: 10 }
            ]}
            onPress={() => {
              this.setState({ isSending: true });

              axios
                .post(url, {
                  username: this.state.username,
                  password: this.state.password
                })
                .then(response => {
                  // stop spinner
                  this.setState({ isSending: false });

                  // show a message
                  alert(response.data.message);

                  // navigate
                  this.props.navigation.navigate('_Practice');
                })
                .catch(() => {
                  // stop spinner
                  this.setState({ isSending: false });

                  // show a message
                  alert('اطلاعات وارد شده صحیح نمی باشد!');
                });
            }}
          >
            {this.state.isSending ? (
              <ActivityIndicator size='large' color='white' />
            ) : (
              <Text style={{ fontSize: 30, color: 'white' }}>Login</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export { Login };
