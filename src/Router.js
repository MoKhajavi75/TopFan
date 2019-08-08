import { createStackNavigator } from 'react-navigation';
import Landing from './Landing';
import Calculator from './Calculator';
import Spinner from './Spinner';
import Scroll from './Scroll';
import MapPage from './MapPage';
import Images from './Images';
import Flat from './Flat';
import Pick from './Pick';
import Practice from './Practice';
import Login from './Login';
import GetPage from './GetPage';

const RootStack = createStackNavigator(
  {
    _Landing: Landing,
    _Calculator: Calculator,
    _Spinner: Spinner,
    _Scroll: Scroll,
    _MapPage: MapPage,
    _Images: Images,
    _Flat: Flat,
    _Pick: Pick,
    _Practice: Practice,
    _Login: Login,
    _GetPage: GetPage
  },
  {
    initialRouteName: '_GetPage',
    navigationOptions: {
      header: null
    }
  }
);

export default RootStack;
