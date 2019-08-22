import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class WeatherItem extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row-reverse',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 10,
          margin: 5,
          elevation: 2
        }}
      >
        <View
          style={{
            flex: 1.5,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderLeftWidth: 1,
            borderColor: 'white'
          }}
        >
          <Image
            style={{ width: 25, height: 25, tintColor: 'white' }}
            source={this.props.icon}
          />
        </View>

        <View
          style={{
            flex: 4,
            justifyContent: 'center',
            alignItems: 'flex-end',
            alignSelf: 'stretch',
            paddingRight: 15
          }}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>
            {`${this.props.title}: ${this.props.value}`}
          </Text>
        </View>
      </View>
    );
  }
}

class WeatherCard extends Component {
  render() {
    var data = [
      [
        {
          icon: require('../images/Weather/03.png'),
          title: 'سرعت باد',
          value: this.props.windSpeed || 0
        },
        {
          icon: require('../images/Weather/04.png'),
          title: 'درجه باد',
          value: this.props.windDegree || 0
        }
      ],
      [
        {
          icon: require('../images/Weather/05.png'),
          title: 'رطوبت',
          value: this.props.humidity || 0
        },
        {
          icon: require('../images/Weather/06.png'),
          title: 'وسعت دید',
          value: this.props.visibility / 10000 || 0
        }
      ]
    ];

    return (
      <View
        style={{
          flex: 6,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          borderWidth: 2,
          borderRadius: 10,
          borderColor: 'white',
          marginBottom: 45
        }}
      >
        <View
          style={{
            flex: 2,
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row-reverse',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch'
            }}
          >
            <Image
              style={{ width: 60, height: 60, tintColor: 'red' }}
              source={require('../images/Weather/01.png')}
            />

            <Text style={{ fontSize: 40, color: 'white', marginRight: 10 }}>
              {this.props.high}
            </Text>
          </View>

          <View
            style={{
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch'
            }}
          >
            <Text style={{ fontSize: 70, color: 'white' }}>/</Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row-reverse',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch'
            }}
          >
            <Text style={{ fontSize: 40, color: 'white', marginLeft: 10 }}>
              {this.props.low}
            </Text>

            <Image
              style={{ width: 60, height: 60, tintColor: 'blue' }}
              source={require('../images/Weather/02.png')}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            paddingBottom: 5
          }}
        >
          <Text style={{ fontSize: 40, color: 'white' }}>
            {this.props.city}
          </Text>
        </View>

        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          {data.map((row, rowIndex) => {
            return (
              <View
                key={rowIndex}
                style={{
                  flex: 1,
                  flexDirection: 'row-reverse',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch'
                }}
              >
                {row.map((item, itemIndex) => {
                  return (
                    <WeatherItem
                      key={itemIndex}
                      title={item.title}
                      icon={item.icon}
                      value={item.value}
                    />
                  );
                })}
              </View>
            );
          })}
        </View>

        <View
          style={{
            width: 80,
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 100,
            marginBottom: -40,
            zIndex: 1
          }}
        >
          <Image
            style={{ width: 115, height: 115 }}
            source={{
              uri: `http://openweathermap.org/img/w/${
                this.props.weatherIcon
              }.png`
            }}
          />
        </View>
      </View>
    );
  }
}

export { WeatherCard };
