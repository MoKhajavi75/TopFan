import { createStackNavigator } from 'react-navigation';
import Counter from './screens/Counter';
import Show from './screens/Show';

const RootStack = createStackNavigator(
  {
    _Counter: Counter,
    _Show: Show
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default RootStack;
