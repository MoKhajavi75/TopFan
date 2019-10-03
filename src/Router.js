import { createStackNavigator } from 'react-navigation';
import { Slider } from './screens';

const RootStack = createStackNavigator(
  {
    _Slider: Slider
  },
  {
    initialRouteName: '_Slider',
    navigationOptions: {
      header: null
    }
  }
);

export default RootStack;
