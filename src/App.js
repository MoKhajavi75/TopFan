import React, { Component } from 'reactn';
import { AsyncStorage, ActivityIndicator, View } from 'react-native';
import Router from './Router';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    };

    this.initiate();
  }

  initiate() {
    AsyncStorage.getItem('preferences')
      .then(preferences => {
        let parsed = JSON.parse(preferences);

        if (parsed) {
          this.setGlobal({
            locale: parsed.locale,
            theme: parsed.theme
          });
        } else {
          this.setGlobal({
            locale: 'en',
            theme: 'coral'
          });
        }
      })
      .catch(error => console.warn(error))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size='large' />
        </View>
      );
    } else {
      return <Router />;
    }
  }
}

export default App;
