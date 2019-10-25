import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

type Props = {
  /**
   * Width of component
   */
  width: number,

  /**
   * Height of component
   */
  height: number,

  /**
   * Text input value
   */
  value: string,

  /**
   * On change text
   */
  onChangeText: Function,

  /**
   * Placeholder
   */
  placeholder: 'Phone' | 'Email',

  /**
   * Color of border if it is valid
   */
  correctColor: string,

  /**
   * Color of border if it is not valid
   */
  wrongColor: string
};

class Input extends Component<Props> {
  check(input, type: 'Phone' | 'Email') {
    let email_re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let iranianPhone_re = /^09[0-9]{9}$/; //regex101.com

    switch (type) {
      case 'Phone':
        return input == '' ? undefined : iranianPhone_re.test(input);

      case 'Email':
        return input == '' ? undefined : email_re.test(input);

      default:
        return undefined;
    }
  }

  render() {
    const {
      width,
      height,
      value,
      onChangeText,
      placeholder,
      correctColor,
      wrongColor
    } = this.props;

    return (
      <View
        style={{
          width,
          height,
          borderWidth: 2,
          borderRadius: 10,
          borderColor:
            this.check(value, placeholder) == undefined
              ? 'white'
              : this.check(value, placeholder)
              ? correctColor
              : wrongColor,
          borderStyle: 'dashed'
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: -18,
            left: 15,
            backgroundColor: '#708090',
            paddingHorizontal: 10
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>{placeholder}</Text>
        </View>

        <TextInput
          style={{
            flex: 1,
            fontSize: 26,
            color: 'white',
            borderRadius: 10,
            textAlign: 'center'
          }}
          value={value}
          onChangeText={text => onChangeText(text)}
          underlineColorAndroid='transparent'
        />
      </View>
    );
  }
}

Input.defaultProps = {
  width: 300,
  height: 80,
  value: '',
  onChangeText: () => {},
  placeholder: 'Phone',
  correctColor: 'green',
  wrongColor: 'red'
};

export { Input };
