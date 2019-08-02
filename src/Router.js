import { createStackNavigator } from 'react-navigation';
import Landing from './Landing';
import Calculator from './Calculator';
import Spinner from './Spinner';
import Scroll from './Scroll';
import Map from './Map';
import Images from './Images';
import Flat from './Flat';
import Pick from './Pick';

const RootStack = createStackNavigator(
  {
    _Landing: Landing,
    _Calculator: Calculator,
    _Spinner: Spinner,
    _Scroll: Scroll,
    _Map: Map,
    _Images: Images,
    _Flat: Flat,
    _Pick: Pick
  },
  {
    initialRouteName: '_Landing',
    navigationOptions: {
      header: null
    }
  }
);

export default RootStack;
