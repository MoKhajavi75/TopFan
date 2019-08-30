import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createTabNavigator } from 'react-navigation';
import { Weather, Football, Currency, Support } from './screens';
import { Header } from './components';

const RootStack = createStackNavigator(
  {
    _Tabs: createTabNavigator(
      {
        'آب و هوا': {
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
        'فوتبال': {
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
        'ارز': {
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
                  source={require('./images/Tabs/04.png')}
                />
              );
            }
          }
        },
        'پشتیبانی': {
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
                  source={require('./images/Tabs/05.png')}
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
        initialRouteName: 'خانه',
        animationEnabled: true,
        swipeEnabled: true,
        lazy: false
      }
    )
  },
  {
    initialRouteName: '_Tabs',
    navigationOptions: ({ navigation }) => ({
      header: (
        <Header
          title={navigation.state.routes[navigation.state.index].routeName}
        />
      )
    })
  }
);
  }
);

export default RootStack;
