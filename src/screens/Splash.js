import React, { Component } from 'reactn';
import { AsyncStorage } from 'react-native';
import { Spinner } from '../components';

class Splash extends Component {
  constructor(props) {
    super(props);

    this.initiate();
  }

  initiate() {
    const keys = ['token', 'preferences'];

    AsyncStorage.multiGet(keys)
      .then(data => {
        let token = data[0][1];
        let preferences = data[1][1];

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

        if (token) {
          this.props.navigation.navigate('_RootStack');
        } else {
          this.props.navigation.navigate('_IntroStack');
        }
      })
      .catch(error => alert(error));
  }

  render() {
    return <Spinner />;
  }
}

export { Splash };
