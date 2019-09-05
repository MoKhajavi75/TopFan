import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import Router from './Router';

YellowBox.ignoreWarnings([
  'Method `jumpToIndex` is',
  'createTabNavigator is deprecated'
]);

class App extends Component {
  render() {
    return <Router />;
  }
}

export default App;
