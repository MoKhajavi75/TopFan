import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createTabNavigator } from 'react-navigation';
import { Weather, Football, Currency, Support } from './screens';

const RootStack = createStackNavigator(
  {
    _Tabs: createTabNavigator(
      {
        _Weather: {
          screen: Weather,
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? 'red' : 'black'
                  }}
                  source={require('./images/Tabs/01.png')}
                />
              );
            }
          }
        },
        _Football: {
          screen: Football,
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? 'red' : 'black'
                  }}
                  source={require('./images/Tabs/02.png')}
                />
              );
            }
          }
        },
        _Currency: {
          screen: Currency,
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? 'red' : 'black'
                  }}
                  source={require('./images/Tabs/03.png')}
                />
              );
            }
          }
        },
        _Support: {
          screen: Support,
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? 'red' : 'black'
                  }}
                  source={require('./images/Tabs/04.png')}
                />
              );
            }
          }
        }
      },
      {
        tabBarPosition: 'bottom',
        tabBarOptions: {
          showIcon: true,
          showLabel: false,
          style: {
            backgroundColor: 'white',
            paddingBottom: 10
          },
          //labelStyle: {
          //  color: 'red'
          //},
          indicatorStyle: {
            backgroundColor: 'red',
            height: 5
          }
        },
        initialRouteName: '_Weather',
        animationEnabled: true,
        swipeEnabled: true,
        lazy: false
      }
    )
  },
  {
    initialRouteName: '_Tabs',
    navigationOptions: {
      header: null
    }
  }
);

export default RootStack;
