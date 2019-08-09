import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Card } from '../components';

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Card
          image='https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg'
          artist='mamad'
          album='hasan agha'
          url='https://www.google.com'
        />

        <Card
          image='https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg'
          artist='ali'
          album='hosein agha agha'
          url='https://www.google.com'
        />
      </View>
    );
  }
}

export { Test };
