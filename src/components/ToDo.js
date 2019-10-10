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
  ActivityIndicator,
  Dimensions,
  Image
} from 'react-native';
import { colors, fonts, strings } from '../globals';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions';
import ImagePicker from 'react-native-image-picker';

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      text: '',
      whichEditing: undefined,
      todos: []
    };

    this.icons = {
      delete: require('../icons/02.png')
    };
  }

  componentDidMount() {
    AsyncStorage.getItem(`todos-${this.props.ID}`)
      .then(todos => {
        let parsed = JSON.parse(todos);

        if (parsed) {
          this.setState({ todos: parsed });
        }
      })
      .catch(error => console.warn(error))
      .finally(() => this.setState({ isLoading: false }));
  }

  renderHeaderLeft() {
    if (this.global.sections.length > 1) {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            opacity: this.global.sections.length == 1 ? 0.5 : 1
          }}
          disabled={this.global.sections.length == 1}
          onPress={() => {
            let newData = [...this.global.sections];
            newData.splice(this.props.index, 1);

            this.setGlobal({ sections: newData });
          }}
        >
          <View
            style={{
              width: responsiveWidth(7),
              aspectRatio: 1 / 1
            }}
          >
            <Image
              source={this.icons.delete}
              style={{
                flex: 1,
                width: undefined,
                height: undefined,
                tintColor: colors(this.global.theme).secondary
              }}
            />
          </View>
        </TouchableOpacity>
      );
    } else {
      return <View style={{ flex: 1 }} />;
    }
  }

  renderHeaderRight() {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
        onPress={() => {
          const options = {
            title: 'Select Avatar',
            maxWidth: responsiveWidth(6),
            maxHeight: responsiveWidth(6),
            storageOptions: {
              skipBackup: true,
              path: 'images',
              cameraRoll: false
            }
          };

          ImagePicker.showImagePicker(options, response => {
            // console.warn('Response = ', response);

            if (response.didCancel) {
              // console.warn('User cancelled image picker');
            } else if (response.error) {
              console.warn('ImagePicker Error: ', response.error);
            } else {
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };

              this.props.setIcon(response.uri, this.props.index);
            }
          });
        }}
      >
        <View
          style={{
            width: responsiveWidth(6),
            aspectRatio: 1 / 1
          }}
        >
          <Image
            source={
              this.props.defaultIcon
                ? this.props.icon
                : { uri: this.props.icon }
            }
            style={{
              flex: 1,
              width: undefined,
              height: undefined,
              tintColor: this.props.defaultIcon
                ? colors(this.global.theme).secondary
                : null
            }}
          />
        </View>
      </TouchableOpacity>
    );
  }

  renderHeader() {
    const { headerTitle, headerTextColor, headerBackColor, icon } = this.props;

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
          backgroundColor: headerBackColor
        }}
      >
        {/* Left */}
        {this.renderHeaderLeft()}

        {/* Center */}
        <View
          style={{
            flex: 5,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          <Text
            style={[
              {
                color: headerTextColor,
                fontSize: responsiveFontSize(2.5)
              },
              fonts(this.global.locale).Black
            ]}
          >
            {headerTitle}
          </Text>
        </View>

        {/* Right */}
        {this.renderHeaderRight()}
      </View>
    );
  }

  renderList() {
    const {
      dotsColor,
      todoTextColor,
      checkedLineColor,
      todoBackColor
    } = this.props;

    let search = query => {
      return this.state.todos.filter(item => item.title.includes(query));
    };

    return (
      <View
        style={{
          flex: 8,
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
          data={
            this.global.query ? search(this.global.query) : this.state.todos
          }
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
                backgroundColor: todoBackColor,
                marginVertical: responsiveHeight(2),
                elevation: 5
              }}
              activeOpacity={0.8}
              onPress={() => {
                let newData = [...this.state.todos];
                newData[index].isChecked = !newData[index].isChecked;

                this.setState({ todos: newData });

                AsyncStorage.setItem(
                  `todos-${this.props.ID}`,
                  JSON.stringify(newData)
                )
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
                      color: dotsColor,
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
                      width: item.textWidth + responsiveWidth(5),
                      borderBottomColor: checkedLineColor,
                      borderBottomWidth: responsiveHeight(0.4),
                      position: 'absolute',
                      bottom: responsiveHeight(4.5),
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
                      color: todoTextColor,
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
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch'
                }}
              >
                <Text>هیچی نیس</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }

  renderInput() {
    const { key } = this.props;

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
            AsyncStorage.setItem(
              `todos-${this.props.ID}`,
              JSON.stringify(newData)
            )
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
          style={{
            width: Dimensions.get('screen').width,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
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
          style={{
            width: Dimensions.get('screen').width,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch'
          }}
        >
          {this.renderHeader()}

          {this.renderList()}

          {this.renderInput()}
        </View>
      );
    }
  }
}

ToDo.defaultProps = {
  headerTitle: '...',
  headerTextColor: 'white',
  headerBackColor: '#555555',
  primaryColor: 'khaki',
  dotsColor: 'black',
  todoBackColor: 'white',
  todoTextColor: 'black',
  checkedLineColor: 'red'
};

export { ToDo };
