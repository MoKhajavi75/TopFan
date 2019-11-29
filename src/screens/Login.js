import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  ActivityIndicator
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      location: {}
    };
  }

  componentDidMount() {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    )
      .then(() => {})
      .catch(error => console.warn(error));
  }

  render() {
    let hasLocation = Object.keys(this.state.location).length != 0;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#708090',
          padding: 10
        }}
      >
        <TouchableOpacity
          style={{
            width: 250,
            height: 75,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#456',
            borderRadius: 10
          }}
          onPress={() => {
            this.setState({ isLoading: true });

            Geolocation.getCurrentPosition(
              response => {
                this.setState({ location: response, isLoading: false });
              },
              error => {
                console.warn(JSON.stringify(error, null, 2));
                this.setState({ isLoading: false });
              },
              {
                enableHighAccuracy: true,
                forceRequestLocation: true,
                timeout: 15000,
                maximumAge: 15000
              }
            );
          }}
          disabled={hasLocation}
        >
          {this.state.isLoading ? (
            <ActivityIndicator size='large' color='white' />
          ) : (
            <Text style={{ fontSize: 25, color: 'white' }}>
              {hasLocation ? 'Done!' : 'Get Location'}
            </Text>
          )}
        </TouchableOpacity>

        <View
          style={{
            width: 250,
            height: 350,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'white',
            marginTop: 20,
            borderRadius: 10,
            paddingHorizontal: 5
          }}
        >
          <Text style={{ fontSize: 17, color: 'white' }}>
            {JSON.stringify(this.state.location, null, 2)}
          </Text>
        </View>
      </View>
    );
  }
}

export { Login };
