import React, { Component } from 'react';
import { View, Text } from 'react-native';

class FootballCard extends Component {
  render() {
    return (
      <View style={{ width: 350, height: 150, marginBottom: 30 }}>
        <View
          style={{
            flex: 7.5,
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 3,
            borderColor: 'white',
            borderRadius: 5
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
            <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>
              {this.props.home}
            </Text>
          </View>

          <View
            style={{
              flex: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch'
            }}
          >
            <Text style={{ fontSize: 16, color: 'white' }}>
              {this.props.homeGoals + ' - ' + this.props.awayGoals}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch'
            }}
          >
            <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>
              {this.props.away}
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 2.5,
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            marginHorizontal: 30,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15
          }}
        >
          <View
            style={{
              flex: 1.5,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch'
            }}
          >
            <Text style={{ fontSize: 18 }}>{'لیگ: ' + this.props.league}</Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch'
            }}
          >
            <Text style={{ fontSize: 16 }}>
              {'تا بازی: ' + this.props.remainingHours}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export { FootballCard };
