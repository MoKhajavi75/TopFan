import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from './styles';

class GetPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render() {
    const url = 'https://jsonplaceholder.typicode.com/todos';

    return (
      <View style={styles.container}>
        <View style={[styles.full, { margin: 20 }]}>
          <FlatList
            style={{
              flex: 1,
              alignSelf: 'stretch',
              borderWidth: 1,
              borderRadius: 10
            }}
            data={this.state.data}
            renderItem={({ item }) => {
              return (
                <View
                  style={[
                    styles.full,
                    {
                      backgroundColor: item.completed ? 'red' : 'coral',
                      borderRadius: 10,
                      marginBottom: 15
                    }
                  ]}
                >
                  <Text style={{ fontSize: 20, color: 'white' }}>
                    {item.title}
                  </Text>
                </View>
              );
            }}
            keyExtractor={item => String(item.id)}
          />
        </View>

        <TouchableOpacity
          style={{
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
            height: 90,
            backgroundColor: '#666666',
            borderRadius: 10,
            margin: 20
          }}
          onPress={() => {
            axios
              .get(url)
              .then(response => {
                this.setState({ data: response.data });
              })
              .catch(error => alert(error));
          }}
        >
          <Text style={{ fontSize: 30, color: 'white' }}>Get</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default GetPage;
