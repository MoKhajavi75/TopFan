import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Spinner } from '../components';

class Splash extends Component {
  constructor(props) {
    super(props);

    this.loadToken();
  }

  loadToken() {
    AsyncStorage.getItem('token')
      .then(token => {
        if (token) {
          this.props.navigation.navigate('_RootStack');
        } else {
          this.props.navigation.navigate('_AuthStack');
        }
      })
      .catch(error => alert(error));
  }

  render() {
    return <Spinner />;
  }
}

export { Splash };
