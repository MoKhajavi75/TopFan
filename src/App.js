import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

class BreweryDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: []
    };
  }

  componentWillMount() {
    this.getBrewDeetsHandler();
  }

  getBrewDeetsHandler = () => {
    fetch('api url', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        itemID: this.props.navigation.state.params.id
      })
    })
      .then(res => res.json())
      .then(myJson => {
        this.setState({
          isLoading: false,
          data: myJson
        });
        console.log(this.state.data[0].venueName);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ActivityIndicator size='large' color='red' />
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>{this.state.data[0].venueName}</Text>
        </View>
      );
    }
  }
}

export default BreweryDetailScreen;
