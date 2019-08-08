import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import styles from './styles';

class Practice extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      text: 'Welcome',
      back: 'white'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  render() {
    if (!this.state.isLoading) {
      const country = 'ایران';
      const flag = false;

      return (
        <View style={[styles.container, { backgroundColor: this.state.back }]}>
          <View style={[styles.full, { marginBottom: 20 }]}>
            <Text style={{ fontSize: 40 }}>{this.state.text}</Text>
          </View>

          <View
            style={[
              styles.full,
              { flexDirection: 'row-reverse', marginBottom: 20 }
            ]}
          >
            <Text style={{ fontSize: 40 }}>
              <Text>{'سلام ملت عزیز    '}</Text>
              <Text style={{ fontSize: 20, color: flag ? 'red' : 'black' }}>
                {country}
              </Text>
            </Text>
          </View>

          <View style={[styles.full, { marginBottom: 20 }]}>
            <Button
              title='Change text'
              onPress={() => this.setState({ text: 'سلام' })}
              color='coral'
            />
          </View>

          <View style={[styles.full, { marginBottom: 20 }]}>
            <Button
              title='Change back color'
              onPress={() => this.setState({ back: '#666666' })}
              color='lime'
            />
          </View>

          <View style={[styles.full, { marginBottom: 20 }]}>
            <Button
              title='Navigate'
              onPress={() =>
                this.props.navigation.navigate('_Landing', {
                  text: this.state.text
                })
              }
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ActivityIndicator color='coral' size='large' />
        </View>
      );
    }
  }
}

export default Practice;
