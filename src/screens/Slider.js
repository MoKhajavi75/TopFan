import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      slides: [
        { title: 'اول', backgroundColor: 'coral' },
        { title: 'دوم', backgroundColor: 'red' },
        { title: 'سوم', backgroundColor: 'yellow' },
        { title: 'چهارم', backgroundColor: 'black' },
        { title: 'پنجم', backgroundColor: 'blue' }
      ],
      whichSlide: 0
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('whichSlide')
      .then(whichSlide => {
        if (whichSlide) {
          this.setState({ whichSlide: Number(whichSlide) });
        }
      })
      .catch(error => console.warn(error))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size='large' color='red' />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
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
                  <Text style={{ fontSize: 48, color: 'white' }}>
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
              this.setState({ whichSlide }, () => {
                AsyncStorage.setItem(
                  'whichSlide',
                  String(this.state.whichSlide)
                )
                  .then(() => {})
                  .catch(error => console.warn(error));
              });
            }}
            showsHorizontalScrollIndicator={false}
            initialScrollIndex={this.state.whichSlide}
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
                      AsyncStorage.setItem(
                        'whichSlide',
                        String(this.state.whichSlide)
                      )
                        .then(() => {})
                        .catch(error => console.warn(error));

                      this.flatList.scrollToIndex({
                        index: this.state.whichSlide
                      });
                    } catch (error) {
                      console.warn(error);
                    }
                  }
                );
              } else {
                alert('navigate');
                this.props.navigation.navigate('_Home');
              }
            }}
          >
            <Text style={{ fontSize: 40, color: 'red' }}>
              {this.state.whichSlide != this.state.slides.length - 1
                ? '>'
                : '✓'}
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
                    AsyncStorage.setItem(
                      'whichSlide',
                      String(this.state.whichSlide)
                    )
                      .then(() => {})
                      .catch(error => console.warn(error));

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
}

export { Slider };
