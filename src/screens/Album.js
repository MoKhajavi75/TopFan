import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Axios from 'axios';
import { AlbumCard, Spinner } from '../components';

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: []
    };
  }

  componentDidMount() {
    const api = 'https://rallycoding.herokuapp.com/api/music_albums';

    Axios.get(api)
      .then(r => {
        this.setState({ data: r.data, isLoading: false });
      })
      .catch(error => {
        this.setState({ isLoading: false });
        alert(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <FlatList
            style={{ flex: 1 }}
            data={this.state.data}
            renderItem={({ item }) => {
              return (
                <AlbumCard
                  image={item.image}
                  artist={item.artist}
                  album={item.title}
                  url={item.url}
                />
              );
            }}
            keyExtractor={item => item.title}
            showsVerticalScrollIndicator={false}
          />
        </View>
      );
    }
  }
}

export { Album };
