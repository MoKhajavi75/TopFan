import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      table: {
        hasan: 'rohani',
        divar: '22',
        ajor: '3cm',
        غذا: 'قرمه سبزی',
        rang: 'coral',
        قیمت: '22.000'
      }
    };
  }

  render() {
    const price = this.state.table['قیمت']
      ? this.state.table['قیمت']
      : undefined;

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
        {Object.entries(this.state.table).map((pair, index) => (
          <View
            key={index.toString()}
            style={{
              //flex: 1,
              width: 300,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: index % 2 ? '#AAA' : '#EEE',
              borderWidth: 1
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                borderRightWidth: 1
              }}
            >
              <Text
                style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 10 }}
              >{`${pair[0]}`}</Text>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch'
              }}
            >
              <Text
                style={{ fontSize: 20, marginVertical: 10 }}
              >{`${pair[1]}`}</Text>
            </View>
          </View>
        ))}

        {price ? (
          <Text
            style={{ fontSize: 26, color: 'white', marginTop: 20 }}
          >{`قیمت: ${price}`}</Text>
        ) : null}
      </View>
    );
  }
}

export { Login };
