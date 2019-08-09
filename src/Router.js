import { createStackNavigator } from 'react-navigation';
import {
  Landing,
  Calculator,
  SpinnerPage,
  Scroll,
  MapPage,
  Images,
  Flat,
  Pick,
  Practice,
  Login,
  GetPage,
  Test,
  Album
} from './screens';

const RootStack = createStackNavigator(
  {
    _Landing: Landing,
    _Calculator: Calculator,
    _SpinnerPage: SpinnerPage,
    _Scroll: Scroll,
    _MapPage: MapPage,
    _Images: Images,
    _Flat: Flat,
    _Pick: Pick,
    _Practice: Practice,
    _Login: Login,
    _GetPage: GetPage,
    _Test: Test,
    _Album: Album
  },
  {
    initialRouteName: '_Album',
    navigationOptions: {
      header: null
    }
  }
);

export default RootStack;
