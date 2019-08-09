import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';
import axios from 'axios';
import styles from './styles';

class GetPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      data: []
    };
  }

  render() {
    const url = 'https://jsonplaceholder.typicode.com/todos';

    return (
      <View style={styles.container}>
        <View
          style={{
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
            height: 80,
            borderWidth: 2,
            borderRadius: 10,
            margin: 10,
            marginBottom: 0
          }}
        >
          <TextInput
            style={{
              flex: 1,
              alignSelf: 'stretch',
              textAlign: 'center',
              textAlignVertical: 'center',
              borderRadius: 20,
              fontSize: 30
            }}
            value={this.state.query}
            onChangeText={txt => this.setState({ query: txt })}
            placeholder='search...'
          />
        </View>

        <View
          style={[styles.full, { marginHorizontal: 10, marginVertical: 15 }]}
        >
          <FlatList
            style={{
              flex: 1,
              alignSelf: 'stretch',
              borderWidth: 1,
              borderRadius: 5
            }}
            data={this.state.data.filter(item =>
              item.title.includes(this.state.query)
            )}
            renderItem={({ item }) => {
              return (
                <View
                  style={[
                    styles.full,
                    {
                      height: 65,
                      backgroundColor: item.completed ? 'lime' : 'coral',
                      borderRadius: 5,
                      marginBottom: 15
                    }
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'white',
                      textAlign: 'center'
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              );
            }}
            keyExtractor={item => String(item.id)}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
            height: 90,
            padding: 10
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#666666',
              borderRadius: 10,
              marginRight: 10
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

          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#666666',
              borderWidth: 2,
              borderRadius: 10
            }}
            onPress={() => {
              this.setState({ query: '' });
            }}
          >
            <Text style={{ fontSize: 30, color: '#666666' }}>Clear!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export { GetPage };
