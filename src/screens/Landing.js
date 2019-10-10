import React, { Component } from 'reactn';
import { View, FlatList, AsyncStorage } from 'react-native';
import { ToDo, Header, Settings } from '../components';

class Landing extends Component {
  static navigationOptions = {
    header: <Header />
  };

  constructor(props) {
    super(props);

    this.state = {
      defaultIcon: true
    };

    this.setGlobal({
      sections: [
        {
          key: 'abc123',
          icon: require('../icons/04.png'),
          headerTitle: 'خانه',
          headerTextColor: 'white',
          headerBackColor: '#555555',
          dotsColor: 'black',
          todoBackColor: 'white',
          todoTextColor: 'black',
          checkedLineColor: 'red'
        }
      ]
    });

    this.setToken();
  }

  setToken() {
    AsyncStorage.setItem('token', '123')
      .then(() => {})
      .catch(error => console.warn(error));
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          ref={todoFlatList => {
            this.todoFlatList = todoFlatList;
          }}
          style={{ flex: 1, alignSelf: 'stretch' }}
          data={[{ key: 'Options' }, ...this.global.sections]}
          renderItem={({ item, index }) => {
            if (item.key === 'Options') {
              return (
                <Settings
                  slideToNext={() =>
                    this.todoFlatList.scrollToIndex({
                      index: 1
                    })
                  }
                />
              );
            } else {
              return (
                <ToDo
                  ID={item.key}
                  headerTitle={item.headerTitle}
                  icon={item.icon}
                  headerTextColor={item.headerTextColor}
                  headerBackColor={item.headerBackColor}
                  dotsColor={item.dotsColor}
                  todoBackColor={item.todoBackColor}
                  todoTextColor={item.todoTextColor}
                  checkedLineColor={item.checkedLineColor}
                  index={index - 1}
                  setIcon={(newIcon, index) => {
                    let newData = [...this.global.sections];
                    newData[index].icon = newIcon;
                    this.setGlobal({ sections: newData }, () =>
                      this.setState({ defaultIcon: false })
                    );
                  }}
                  defaultIcon={this.state.defaultIcon}
                />
              );
            }
          }}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={1}
          onContentSizeChange={() => this.todoFlatList.scrollToEnd()}
        />
      </View>
    );
  }
}

export { Landing };
