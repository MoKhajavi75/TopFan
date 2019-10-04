import React, { Component } from 'reactn';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Dimensions
} from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { strings, colors, fonts } from '../globals';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: undefined,
      theme: undefined
    };
  }

  renderHeader() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          backgroundColor: '#555555'
        }}
      >
        <Text
          style={[
            {
              color: 'white',
              fontSize: responsiveFontSize(2.5)
            },
            fonts(this.global.locale).Black
          ]}
        >
          {strings(this.global.locale).settings}
        </Text>
      </View>
    );
  }

  renderLanguage() {
    return (
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <Text
            style={[
              {
                color: colors(this.global.theme).text_color,
                fontSize: responsiveFontSize(3)
              },
              fonts(this.global.locale).Bold
            ]}
          >
            {strings(this.global.locale).settings_locale}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row-reverse',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <TouchableOpacity
            style={{
              width: '40%',
              height: '55%',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: colors(this.global.theme).text_color,
              borderRadius: 10,
              backgroundColor:
                this.state.locale == 'fa'
                  ? colors(this.global.theme).primary
                  : 'transparent'
            }}
            onPress={() => {
              this.setState({ locale: 'fa' });
              this.setGlobal({ locale: 'fa' });
            }}
          >
            <Text
              style={[
                {
                  color: colors(this.global.theme).text_color,
                  fontSize: responsiveFontSize(2)
                },
                fonts('fa').Normal
              ]}
            >
              فارسی
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '40%',
              height: '55%',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: colors(this.global.theme).text_color,
              borderRadius: 10,
              backgroundColor:
                this.state.locale == 'en'
                  ? colors(this.global.theme).primary
                  : 'transparent'
            }}
            onPress={() => {
              this.setState({ locale: 'en' });
              this.setGlobal({ locale: 'en' });
            }}
          >
            <Text
              style={[
                {
                  color: colors(this.global.theme).text_color,
                  fontSize: responsiveFontSize(2)
                },
                fonts('en').Normal
              ]}
            >
              English
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderTheme() {
    return (
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <Text
            style={[
              {
                color: colors(this.global.theme).text_color,
                fontSize: responsiveFontSize(3)
              },
              fonts(this.global.locale).Bold
            ]}
          >
            {strings(this.global.locale).settings_theme}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row-reverse',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <TouchableOpacity
            style={{
              width: '25%',
              height: '55%',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: colors(this.global.theme).text_color,
              borderRadius: 10,
              backgroundColor:
                this.state.theme == 'yellow'
                  ? colors(this.global.theme).primary
                  : 'transparent'
            }}
            onPress={() => {
              this.setState({ theme: 'yellow' });
              this.setGlobal({ theme: 'yellow' });
            }}
          >
            <Text
              style={[
                {
                  color: colors(this.global.theme).text_color,
                  fontSize: responsiveFontSize(2)
                },
                fonts(this.global.locale).Normal
              ]}
            >
              {strings(this.global.locale).yellow}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '25%',
              height: '55%',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: colors(this.global.theme).text_color,
              borderRadius: 10,
              backgroundColor:
                this.state.theme == 'coral'
                  ? colors(this.global.theme).primary
                  : 'transparent'
            }}
            onPress={() => {
              this.setState({ theme: 'coral' });
              this.setGlobal({ theme: 'coral' });
            }}
          >
            <Text
              style={[
                {
                  color: colors(this.global.theme).text_color,
                  fontSize: responsiveFontSize(2)
                },
                fonts(this.global.locale).Normal
              ]}
            >
              {strings(this.global.locale).coral}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '25%',
              height: '55%',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: colors(this.global.theme).text_color,
              borderRadius: 10,
              backgroundColor:
                this.state.theme == 'red'
                  ? colors(this.global.theme).primary
                  : 'transparent'
            }}
            onPress={() => {
              this.setState({ theme: 'red' });
              this.setGlobal({ theme: 'red' });
            }}
          >
            <Text
              style={[
                {
                  color: colors(this.global.theme).text_color,
                  fontSize: responsiveFontSize(2)
                },
                fonts(this.global.locale).Normal
              ]}
            >
              {strings(this.global.locale).red}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderButton() {
    return (
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
      >
        <TouchableOpacity
          style={{
            width: '88%',
            height: '55%',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor: '#3498db'
          }}
          onPress={() => {
            let data = {
              locale: this.state.locale,
              theme: this.state.theme
            };

            AsyncStorage.setItem('preferences', JSON.stringify(data))
              .then(() => this.props.slideToNext())
              .catch(error => console.warn(error));
          }}
        >
          <Text
            style={[
              {
                color: 'white',
                fontSize: responsiveFontSize(3.2)
              },
              fonts(this.global.locale).Bold
            ]}
          >
            {strings(this.global.locale).confirm}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View
        style={{
          width: Dimensions.get('screen').width,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
      >
        {this.renderHeader()}

        {this.renderLanguage()}

        {this.renderTheme()}

        {this.renderButton()}
      </View>
    );
  }
}

export { Settings };
