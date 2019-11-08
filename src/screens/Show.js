import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Show extends Component {
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
        <Text style={{ fontSize: 35, color: 'white' }}>{this.props.mamad}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    mamad: state.counterReducer.count
  };
};

export default connect(mapStateToProps)(Show);
