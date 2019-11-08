import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from '../Actions';

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      step: 1
    };
  }

  render() {
    const { count, dispatch, navigation } = this.props;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#708090',
          padding: 10
        }}
      >
        <TouchableOpacity
          style={{
            height: 80,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#548',
            borderRadius: 10
          }}
          onPress={() =>
            dispatch({
              type: Actions.COUNTER_INCREMENT,
              step: +this.state.step
            })
          }
        >
          <Text style={{ fontSize: 35, color: 'white' }}>+</Text>
        </TouchableOpacity>

        <View
          style={{
            height: 80,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{ fontSize: 55, color: 'white' }}
            onPress={() => navigation.navigate('_Show')}
          >
            {count}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            height: 80,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#548',
            borderRadius: 10
          }}
          onPress={() =>
            dispatch({
              type: Actions.COUNTER_DECREMENT,
              step: +this.state.step
            })
          }
        >
          <Text style={{ fontSize: 35, color: 'white' }}>-</Text>
        </TouchableOpacity>

        <View
          style={{
            height: 80,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            backgroundColor: 'white',
            borderRadius: 10
          }}
        >
          <TextInput
            style={{ flex: 1, fontSize: 25, textAlign: 'center' }}
            value={String(this.state.step)}
            onChangeText={step => this.setState({ step })}
            defaultValue={String(1)}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.counterReducer.count
  };
};

export default connect(mapStateToProps)(Counter);
