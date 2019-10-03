import { createBottomTabNavigator } from 'react-navigation';
import { Camera, Log } from './screens';

const RootStack = createBottomTabNavigator(
  {
    دوربین: Camera,
    گزارش: Log
  },
  {
    initialRouteName: 'دوربین',
    tabBarOptions: {
      labelStyle: {
        fontSize: 25
      }
    }
  }
);

export default RootStack;
