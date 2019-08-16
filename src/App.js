import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import Router from './Router';

YellowBox.ignoreWarnings(['Method `jumpToIndex` is']);

class App extends Component {
  render() {
    return <Router />;
  }
}

export default App;
