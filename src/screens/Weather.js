import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { WeatherCard, Container, Spinner } from '../components';
import Axios from 'axios';

class Weather extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      data: {}
    };
  }

  componentDidMount() {
    let key = '10ac66dc760b7718bee8d9ac26cc3143';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=Karaj,ir&units=metric&appid=${key}`;

    Axios.get(url)
      .then(response => {
        this.setState({ data: response.data, isLoading: false });
      })
      .catch(error => {
        alert(error);
        this.setState({ isLoading: false });
      });
  }

  render() {
    return (
      <Container title='آب و هوا'>
        {this.state.isLoading ? (
          <View style={{ flex: 6, marginBottom: 45 }}>
            <Spinner />
          </View>
        ) : (
          <WeatherCard
            city={this.state.data.name}
            high={this.state.data.main.temp_max}
            low={this.state.data.main.temp_min}
            weatherIcon={this.state.data.weather[0].icon}
            windSpeed={this.state.data.wind.speed}
            windDegree={this.state.data.wind.deg}
            humidity={this.state.data.main.humidity}
            visibility={this.state.data.visibility}
          />
        )}

        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderWidth: 1
          }}
        >
          <Text>Pickers</Text>
        </View>
      </Container>
    );
  }
}

export { Weather };
