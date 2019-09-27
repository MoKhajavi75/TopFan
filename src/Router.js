import { createBottomTabNavigator } from 'react-navigation';
import { Camera, Log } from './screens';

const RootStack = createBottomTabNavigator(
  {
    _Camera: Camera,
    _Log: Log
  },
  {
    initialRouteName: '_Camera'
  }
);

export default RootStack;
