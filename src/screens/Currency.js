import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Axios from 'axios';
import { CurrencyCard, Spinner, Container } from '../components';

class Currency extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      data: [
        {
          title: 'Dollar',
          icon: require('../images/Currency/01.png'),
          buy: 0,
          sell: 0
        },
        {
          title: 'Euro',
          icon: require('../images/Currency/02.png'),
          buy: 0,
          sell: 0
        },
        {
          title: 'Dirham',
          icon: require('../images/Currency/03.png'),
          buy: 0,
          sell: 0
        }
      ]
    };
  }

  componentDidMount() {
    const url =
      'http://www.tgju.org/?act=sanarateservice&client=tgju&noview&type=json';

    Axios.get(url)
      .then(response => {
        let newData = this.state.data;
        newData.forEach((item, index) => {
          if (index == 0) {
            item.buy = response.data.sana_buy_usd.price;
            item.sell = response.data.sana_sell_usd.price;
          } else if (index == 1) {
            item.buy = response.data.sana_buy_eur.price;
            item.sell = response.data.sana_sell_eur.price;
          } else {
            item.buy = response.data.sana_buy_aed.price;
            item.sell = response.data.sana_sell_aed.price;
          }
        });

        this.setState({ data: newData, isLoading: false });
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
        <Container title='قیمت ارز'>
          <View
            style={{
              flex: 8,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch'
            }}
          >
            <FlatList
              style={{ flex: 1 }}
              data={this.state.data}
              renderItem={({ item }) => {
                return (
                  <CurrencyCard
                    image={item.icon}
                    buy={item.buy}
                    sell={item.sell}
                  />
                );
              }}
              keyExtractor={item => item.title}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </Container>
      );
    }
  }
}

export { Currency };
