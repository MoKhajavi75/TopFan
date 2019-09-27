import { createStackNavigator } from 'react-navigation';
import { Home, Settings } from './screens';

const RootStack = createStackNavigator(
  {
    _Home: Home,
    _Settings: Settings
  },
  {
    initialRouteName: '_Home'
  }
);

export default RootStack;
