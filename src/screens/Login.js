import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  AsyncStorage,
  ScrollView
} from 'react-native';
import Modal from 'react-native-modalbox';
import LinearGradient from 'react-native-linear-gradient';
import Axios from 'axios';
import { CheckBox } from '../components';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isSending: false,
      rules: false,
      isModalVisible: false
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

  renderModal() {
    return (
      <Modal
        style={{
          width: 300,
          height: 400,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10
        }}
        position={'center'}
        isOpen={this.state.isModalVisible}
        onClosed={() => this.setState({ isModalVisible: false })}
        coverScreen
        backdropPressToClose
        backButtonClose
        swipeToClose={false}
        backdropColor='red'
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: 'white',
            borderRadius: 10
          }}
        >
          <ScrollView
            style={{
              flex: 1,
              alignSelf: 'stretch',
              paddingHorizontal: 10
            }}
          >
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. The standard chunk of Lorem Ipsum used since the
              1500s is reproduced below for those interested. Sections 1.10.32
              and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum. The standard
              chunk of Lorem Ipsum used since the 1500s is reproduced below for
              those interested. Sections 1.10.32 and 1.10.33 from de Finibus
              Bonorum et Malorum by Cicero are also reproduced in their exact
              original form, accompanied by English versions from the 1914
              translation by H. Rackham. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. The standard chunk of Lorem Ipsum used
              since the 1500s is reproduced below for those interested. Sections
              1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero
              are also reproduced in their exact original form, accompanied by
              English versions from the 1914 translation by H. Rackham.
            </Text>

            <TouchableOpacity
              style={{
                width: 200,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                backgroundColor: '#DC143C',
                elevation: 5,
                marginVertical: 15
              }}
              onPress={() =>
                this.setState({ isModalVisible: false, rules: true })
              }
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 26,
                  fontFamily: 'Vazir FD'
                }}
              >
                موافقم!
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    );
  }

  renderButton() {
    let disabled =
      this.state.username == '' ||
      this.state.password == '' ||
      this.state.rules == false;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
      >
        <View
          style={{
            width: 350,
            height: 40,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            borderRadius: 10,
            marginBottom: 5,
            paddingHorizontal: 10
          }}
        >
          <TouchableOpacity
            style={{ borderBottomWidth: 1 }}
            onPress={() => this.setState({ isModalVisible: true })}
          >
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontFamily: 'Vazir FD'
              }}
            >
              شرایط و قوانین را می‌پذیرم!
            </Text>
          </TouchableOpacity>

          <CheckBox
            onPress={() => this.setState({ rules: !this.state.rules })}
            style={{ marginLeft: 10 }}
            checked={this.state.rules}
          />
        </View>

        <TouchableOpacity
          style={{
            width: 350,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: '#DC143C',
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

        {this.renderModal()}
      </LinearGradient>
    );
  }
}

export { Login };
