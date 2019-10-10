import React, { Component } from 'reactn';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import {
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import Modal from 'react-native-modalbox';
import { colors, strings, fonts } from '../globals';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      isSearchModalVisible: false,
      isAddModalVisible: false
    };

    this.setGlobal({
      query: ''
    });
  }

  renderSearchModal() {
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
        isOpen={this.state.isSearchModalVisible}
        onClosed={() => this.setState({ isSearchModalVisible: false })}
        coverScreen
        backdropPressToClose
        backButtonClose
        swipeToClose={false}
        backdropColor='#222222'
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
          <View
            style={{
              width: 250,
              height: 50,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 10,
              borderWidth: 1
            }}
          >
            <TextInput
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center'
              }}
              value={this.global.query}
              onChangeText={query => this.setGlobal({ query })}
              placeholder='...'
            />
          </View>

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
            onPress={() => this.setState({ isSearchModalVisible: false })}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 26,
                fontFamily: 'Vazir FD'
              }}
            >
              بگرد!
            </Text>
          </TouchableOpacity>

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
            onPress={() => {
              this.setState({ isSearchModalVisible: false });
              this.setGlobal({ query: '' });
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 26,
                fontFamily: 'Vazir FD'
              }}
            >
              نمایش همه!
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  renderAddModal() {
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
        isOpen={this.state.isAddModalVisible}
        onClosed={() => this.setState({ isAddModalVisible: false })}
        coverScreen
        backdropPressToClose
        backButtonClose
        swipeToClose={false}
        backdropColor='#222222'
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
          <View
            style={{
              width: 250,
              height: 50,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 10,
              borderWidth: 1
            }}
          >
            <TextInput
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center'
              }}
              value={this.global.query}
              onChangeText={query => this.setGlobal({ query })}
              placeholder='...'
            />
          </View>

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
            onPress={() => {
              let newData = [...this.global.sections];
              newData.push({
                key: Math.random() + 'abc',
                icon: require('../icons/04.png'),
                headerTitle: Math.random().toFixed(2),
                headerTextColor: 'white',
                headerBackColor: '#555555',
                dotsColor: 'black',
                todoBackColor: 'khaki',
                todoTextColor: 'black',
                checkedLineColor: 'red'
              });

              this.setGlobal({ sections: newData });
              this.setState({ isAddModalVisible: false });
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 26,
                fontFamily: 'Vazir FD'
              }}
            >
              اضافه کن!
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  renderLeft() {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
        onPress={() => this.setState({ isSearchModalVisible: true })}
      >
        <View
          style={{
            width: responsiveWidth(7),
            aspectRatio: 1 / 1
          }}
        >
          <Image
            source={require('../icons/03.png')}
            style={{
              flex: 1,
              width: undefined,
              height: undefined,
              tintColor: colors(this.global.theme).secondary,
              transform: [
                {
                  rotateY:
                    strings(this.global.locale).DIRECTION == 'ltr'
                      ? '0deg'
                      : '180deg'
                }
              ]
            }}
          />
        </View>
      </TouchableOpacity>
    );
  }

  renderTitle() {
    return (
      <View
        style={{
          flex: 5,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
      >
        <Text
          style={[
            {
              color: colors(this.global.theme).secondary,
              fontSize: responsiveFontSize(3)
            },
            fonts(this.global.locale).Black
          ]}
        >
          {strings(this.global.locale).header_text}
        </Text>
      </View>
    );
  }

  renderRight() {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
        onPress={() => this.setState({ isAddModalVisible: true })}
      >
        <View
          style={{
            width: responsiveWidth(6),
            aspectRatio: 1 / 1
          }}
        >
          <Image
            source={require('../icons/05.png')}
            style={{
              flex: 1,
              width: undefined,
              height: undefined,
              tintColor: colors(this.global.theme).secondary
            }}
          />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View
        style={{
          height: '10%',
          flexDirection:
            strings(this.global.locale).DIRECTION == 'ltr'
              ? 'row'
              : 'row-reverse',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors(this.global.theme).primary
        }}
      >
        {/* Left */}
        {this.renderLeft()}

        {/* Center */}
        {this.renderTitle()}

        {/* Right */}
        {this.renderRight()}

        {/* Search Modal */}
        {this.renderSearchModal()}

        {/* Add Modal */}
        {this.renderAddModal()}
      </View>
    );
  }
}

export { Header };
