import React, { Component } from 'reactn';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Keyboard,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import { Header } from '../components';
import { colors, fonts, strings } from '../globals';
import {
  responsiveFontSize,
  responsiveHeight
} from 'react-native-responsive-dimensions';

class Home extends Component {
  static navigationOptions = {
    header: ({ navigation }) => <Header navigation={navigation} />
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      text: '',
      whichEditing: undefined,
      todos: []
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('todos')
      .then(todos => {
        let parsed = JSON.parse(todos);

        if (parsed) {
          this.setState({ todos: parsed });
        }
      })
      .catch(error => console.warn(error))
      .finally(() => this.setState({ isLoading: false }));
  }

  renderList() {
    return (
      <View
        style={{
          flex: 9,
          alignSelf: 'stretch'
        }}
      >
        <FlatList
          ref={flatList => {
            this.flatList = flatList;
          }}
          style={{
            flex: 1,
            alignSelf: 'stretch'
          }}
          data={this.state.todos}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                height: responsiveHeight(10),
                width: '90%',
                flexDirection:
                  strings(this.global.locale).DIRECTION == 'ltr'
                    ? 'row'
                    : 'row-reverse',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                backgroundColor: colors(this.global.theme).primary,
                marginVertical: responsiveHeight(2),
                elevation: 5
              }}
              activeOpacity={0.8}
              onPress={() => {
                let newData = [...this.state.todos];
                newData[index].isChecked = !newData[index].isChecked;

                this.setState({ todos: newData });

                AsyncStorage.setItem('todos', JSON.stringify(newData))
                  .then(() => {})
                  .catch(error => console.warn(error));
              }}
              onLongPress={() => {
                Alert.alert(
                  strings(this.global.locale).deleteTitle,
                  strings(this.global.locale).deleteMessage,
                  [
                    {
                      text: strings(this.global.locale).deleteYes,
                      onPress: () => {
                        let newData = [...this.state.todos];
                        newData.splice(index, 1);

                        this.setState({ todos: newData });
                      }
                    },
                    {
                      text: strings(this.global.locale).deleteNo,
                      onPress: () => {}
                    }
                  ],
                  {
                    cancelable: false
                  }
                );
              }}
            >
              {/* Edit */}
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch'
                }}
                onPress={() => {
                  this.setState({ text: item.title, whichEditing: index });
                  this.textInput.focus();
                }}
              >
                <Text
                  style={[
                    {
                      color: colors(this.global.theme).text_color,
                      fontSize: responsiveFontSize(3.5)
                    },
                    fonts(this.global.locale).Black
                  ]}
                >
                  ⋮
                </Text>
              </TouchableOpacity>

              {/* Task's title */}
              <View
                style={{
                  flex: 9,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch'
                }}
              >
                {/* If this task is completed */}
                {item.isChecked ? (
                  <View
                    style={{
                      width: item.textWidth,
                      borderBottomColor: colors(this.global.theme).opposite,
                      borderBottomWidth: responsiveHeight(0.4),
                      position: 'absolute',
                      zIndex: 1
                    }}
                  />
                ) : null}

                <Text
                  onLayout={e => {
                    let newData = [...this.state.todos];
                    newData[index].textWidth = e.nativeEvent.layout.width;
                    this.setState({ todos: newData });
                  }}
                  style={[
                    {
                      color: colors(this.global.theme).text_color,
                      fontSize: responsiveFontSize(3)
                    },
                    fonts(this.global.locale).Medium
                  ]}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.title + index}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => this.flatList.scrollToEnd()}
        />
      </View>
    );
  }

  renderInput() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection:
            strings(this.global.locale).DIRECTION == 'ltr'
              ? 'row'
              : 'row-reverse',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          borderWidth: 1
        }}
      >
        <View
          style={{
            flex: 8.5,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderWidth: 1
          }}
        >
          <TextInput
            ref={textInput => {
              this.textInput = textInput;
            }}
            style={[
              {
                flex: 1,
                alignSelf: 'stretch',
                textAlign: 'center',
                fontSize: responsiveFontSize(2.5)
              },
              fonts(this.global.locale).Normal
            ]}
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            placeholder={strings(this.global.locale).inputPlaceHolder}
            underlineColorAndroid='transparent'
            maxLength={15}
          />
        </View>

        <TouchableOpacity
          style={{
            flex: 1.5,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderWidth: 1,
            opacity: this.state.text == '' ? 0.5 : 1
          }}
          onPress={() => {
            if (this.state.whichEditing !== undefined) {
              var newData = [...this.state.todos];
              newData[this.state.whichEditing].title = this.state.text;
              newData[this.state.whichEditing].isChecked = false;
            } else {
              var newData = [...this.state.todos];
              newData.push({
                title: this.state.text,
                isChecked: false
              });
            }

            this.setState({
              todos: newData,
              text: '',
              whichEditing: undefined
            });
            Keyboard.dismiss();
            AsyncStorage.setItem('todos', JSON.stringify(newData))
              .then(() => {})
              .catch(error => console.warn(error));
          }}
          disabled={this.state.text == ''}
        >
          <Text
            style={[
              {
                color: colors(this.global.theme).text_color,
                fontSize: responsiveFontSize(4)
              },
              fonts(this.global.locale).Black
            ]}
          >
            {this.state.whichEditing !== undefined ? '✓' : '+'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator
            size='large'
            color={colors(this.global.theme).opposite}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          {this.renderList()}

          {this.renderInput()}
        </View>
      );
    }
  }
}

export { Home };
