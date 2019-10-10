import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Splash, Login, Landing } from './screens';

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
    _Landing: Landing
  },
  {
    initialRouteName: '_Landing',
    navigationOptions: {
      header: null
    }
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    _Splash: Splash,
    _AuthStack: AuthStack,
    _RootStack: RootStack
  },
  {
    initialRouteName: '_Splash'
  }
);

export default SwitchNavigator;
