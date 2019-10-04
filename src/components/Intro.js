import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from 'react-native';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: this.props.slides,
      whichSlide: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden animated />

        <FlatList
          ref={flatList => {
            this.flatList = flatList;
          }}
          style={{
            flex: 1,
            alignSelf: 'stretch'
          }}
          data={this.state.slides}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  width: Dimensions.get('screen').width,
                  height: Dimensions.get('screen').height,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  backgroundColor: item.backgroundColor
                }}
              >
                <Text
                  style={{
                    fontSize: 48,
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: 60
                  }}
                >
                  {item.title}
                </Text>
              </View>
            );
          }}
          horizontal
          keyExtractor={item => item.title}
          pagingEnabled
          onMomentumScrollEnd={e => {
            const contentOffset = e.nativeEvent.contentOffset;
            const viewSize = e.nativeEvent.layoutMeasurement;

            // Divide the horizontal offset by the width of the view to see which page is visible
            const whichSlide = (contentOffset.x / viewSize.width).toFixed();

            // Set the slide number
            this.setState({ whichSlide });
          }}
          showsHorizontalScrollIndicator={false}
        />

        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            position: 'absolute',
            bottom: 30,
            right: 30,
            backgroundColor: '#FFFFFF88'
          }}
          onPress={() => {
            if (this.state.whichSlide != this.state.slides.length - 1) {
              this.setState(
                { whichSlide: Number(this.state.whichSlide) + 1 },
                () => {
                  try {
                    this.flatList.scrollToIndex({
                      index: this.state.whichSlide
                    });
                  } catch (error) {
                    console.warn(error);
                  }
                }
              );
            } else {
              this.props.navigation.navigate(this.props.lastPage);
            }
          }}
        >
          <Text style={{ fontSize: 40, color: 'red' }}>
            {this.state.whichSlide != this.state.slides.length - 1 ? '>' : '✓'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            position: 'absolute',
            bottom: 30,
            left: 30,
            backgroundColor: '#FFFFFF88',
            opacity: this.state.whichSlide == 0 ? 0.5 : 1
          }}
          onPress={() => {
            this.setState(
              { whichSlide: Number(this.state.whichSlide) - 1 },
              () => {
                try {
                  this.flatList.scrollToIndex({
                    index: this.state.whichSlide
                  });
                } catch (error) {
                  console.warn(error);
                }
              }
            );
          }}
          disabled={this.state.whichSlide == 0}
        >
          <Text style={{ fontSize: 40, color: 'red' }}>{'<'}</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: 20,
            position: 'absolute',
            bottom: 45,
            left: 125,
            right: 125
          }}
        >
          {this.state.slides.map((_, index) => {
            return (
              <View
                key={index}
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 100,
                  backgroundColor:
                    this.state.whichSlide == index ? '#FFFFFF' : '#888888'
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

Intro.defaultProps = {
  slides: [
    {
      title: '...',
      backgroundColor: 'coral'
    }
  ],
  lastPage: '',
  navigation: {
    navigate: () => {}
  }
};

export { Intro };
