import React from 'react';
import { Image } from 'react-native';
import {
  createStackNavigator,
  createTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation';
import {
  Splash,
  Login,
  Weather,
  Football,
  Currency,
  Support,
  Landing,
  Album,
  Calculator
} from './screens';
import { Header } from './components';

const AuthStack = createStackNavigator(
  {
    _Login: Login
  },
  {
    initialRouteName: '_Login',
    navigationOptions: {
      header: null
    }
  }
);

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
        'خانه': {
          screen: createStackNavigator(
            {
              _Landing: Landing,
              _Album: Album,
              _Calculator: Calculator
            },
            {
              initialRouteName: '_Landing',
              navigationOptions: {
                header: null
              }
            }
          ),
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
          navigation={navigation}
          title={navigation.state.routes[navigation.state.index].routeName}
        />
      )
    })
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    _AuthStack: AuthStack,
    _RootStack: createDrawerNavigator(
      {
        'صفحه اصلی': RootStack,
        'آلبوم': Album,
        'ماشین حساب': Calculator
      },
      {
        initialRouteName: 'صفحه اصلی',
        drawerPosition: 'right',
        drawerBackgroundColor: 'khaki',
        drawerLockMode: 'locked-closed',
        contentOptions: {
          activeTintColor: 'red',
          labelStyle: {
            fontSize: 25
          }
        }
      }
    ),
    _Splash: Splash
  },
  {
    initialRouteName: '_Splash'
  }
);

export default SwitchNavigator;
