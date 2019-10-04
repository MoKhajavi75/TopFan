import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Landing, Welcome, Splash } from './screens';

const IntroStack = createStackNavigator(
  {
    _Welcome: Welcome
  },
  {
    initialRouteName: '_Welcome',
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
    _IntroStack: IntroStack,
    _RootStack: RootStack
  },
  {
    initialRouteName: '_Splash'
  }
);

export default SwitchNavigator;
