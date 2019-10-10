import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dots: [],
      savedDots: []
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('dots')
      .then(dots => {
        if (dots) {
          this.setState({ savedDots: JSON.parse(dots) }, () => {});
        } else {
          this.setState({ dots: [] });
        }
      })
      .catch(error => console.warn(error))
      .finally(() => this.setState({ isLoading: false }));
  }

  showDots() {
    var i = 0,
      howManyTimes = this.state.savedDots.length;

    let f = () => {
      let newDots = [...this.state.dots];
      newDots.push(this.state.savedDots[i]);
      this.setState({ dots: newDots });
      i++;

      if (i < howManyTimes) {
        setTimeout(f, 100);
      }
    };
    f();
  }

  renderBoard() {
    return (
      <View
        style={{
          flex: 7,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          margin: 20,
          borderWidth: 1,
          borderRadius: 15,
          backgroundColor: 'white'
        }}
        onStartShouldSetResponder={e => {
          let newDots = [...this.state.dots];
          newDots.push({
            top: e.nativeEvent.pageY,
            left: e.nativeEvent.pageX
          });
          this.setState({ dots: newDots });
        }}
      />
    );
  }

  renderButtons() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'coral',
            borderRadius: 10
          }}
          onPress={() => this.showDots()}
        >
          <Text style={{ fontSize: 25, color: 'white' }}>Autoplay</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'coral',
            borderRadius: 10
          }}
          onPress={() => {
            this.setState({ dots: [] });
            AsyncStorage.clear();
          }}
        >
          <Text style={{ fontSize: 25, color: 'white' }}>Clear</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'coral',
            borderRadius: 10
          }}
          onPress={() =>
            AsyncStorage.setItem('dots', JSON.stringify(this.state.dots))
              .then(() => {})
              .catch(error => console.warn(error))
          }
        >
          <Text style={{ fontSize: 25, color: 'white' }}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderDots() {
    return this.state.dots.map(item => {
      return (
        <View
          key={String(item.top) + String(item.left)}
          style={{
            width: 10,
            height: 10,
            position: 'absolute',
            top: item.top,
            left: item.left,
            backgroundColor: 'coral',
            borderRadius: 100,
            elevation: 5
          }}
        />
      );
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#708090'
        }}
      >
        {this.renderBoard()}

        {this.renderButtons()}

        {this.renderDots()}
      </View>
    );
  }
}

export { Landing };
