import React, { Component } from 'react';
import { View, Image, FlatList, TouchableOpacity, Text } from 'react-native';
import { FootballCard, Container, Spinner } from '../components';
import Axios from 'axios';

class Football extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      data: [],
      lastUpdate: '-'
    };
  }

  componentDidMount() {
    this.refreshData();
  }

  refreshData() {
    // Show spinner
    this.setState({ isLoading: true });

    // Fetch data
    const url = 'http://api.football-data.org/v2/matches';

    Axios.get(url, {
      headers: { 'X-Auth-Token': 'f0ad145a3a4345b0b9bac0a1cb25a4b6' }
    })
      .then(response => {
        let today = new Date();
        let time =
          today.getHours() +
          ':' +
          today.getMinutes() +
          ':' +
          today.getSeconds();

        this.setState({
          data: response.data.matches,
          isLoading: false,
          lastUpdate: time
        });
      })
      .catch(error => {
        alert(error);
        this.setState({ isLoading: false, lastUpdate: '-' });
      });
  }

  renderItem = ({ item }) => {
    let currentHour = new Date().getHours();
    let gameTime = item.utcDate.split('T');
    let gameHour = gameTime[1].split(':');
    let remainingHours = gameHour[0] - currentHour;

    return (
      <FootballCard
        home={item.homeTeam.name}
        homeGoals={
          item.score.fullTime.homeTeam ? item.score.fullTime.homeTeam : '0'
        }
        away={item.awayTeam.name}
        awayGoals={
          item.score.fullTime.awayTeam ? item.score.fullTime.awayTeam : '0'
        }
        league={item.competition.name}
        remainingHours={remainingHours}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    } else {
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
          <View
            style={{
              flex: 0.8,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch'
            }}
          >
            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>
              {'آخرین به‌روزرسانی: ' + this.state.lastUpdate}
            </Text>
          </View>

          <View
            style={{
              flex: 8,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch'
            }}
          >
            <FlatList
              style={{ flex: 1 }}
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={item => String(item.id)}
              showsVerticalScrollIndicator={false}
            />
          </View>

          <TouchableOpacity
            style={{
              width: 75,
              height: 75,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'red',
              position: 'absolute',
              bottom: 10,
              left: 10,
              elevation: 5
            }}
            onPress={() => this.refreshData()}
          >
            <Image
              style={{ width: 50, height: 50, tintColor: 'white' }}
              source={require('../images/Football/01.png')}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }
}

export { Football };
