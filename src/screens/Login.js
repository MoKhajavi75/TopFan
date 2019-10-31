import React, { Component } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: new Array(30).fill(Math.random().toFixed(3)),
      isLoading: false
    };
  }

  reload() {
    this.setState({ isLoading: true }, () =>
      setTimeout(() => this.setState({ isLoading: false }), 5000)
    );
  }

  render() {
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
        <FlatList
          style={{ flex: 1, alignSelf: 'stretch' }}
          data={this.state.data}
          renderItem={({ item }) => (
            <View
              style={{
                height: 80,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                borderRadius: 10,
                backgroundColor: 'coral',
                margin: 10
              }}
            >
              <Text style={{ fontSize: 25, color: 'white' }}>{item}</Text>
            </View>
          )}
          keyExtractor={item => item}
          refreshControl={
            <RefreshControl
              colors={['rgba(53,171,221,0.7)', '#FF0000']}
              refreshing={this.state.isLoading}
              onRefresh={() => this.reload()}
            />
          }
        />
      </View>
    );
  }
}

export { Login };
