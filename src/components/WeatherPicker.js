import React, { Component } from 'react';
import { View, Picker } from 'react-native';

class WeatherPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: 'ir',
      index: 0,
      city: 'tehran'
    };
  }

  render() {
    const cities = [
      [
        {
          label: 'تهران',
          value: 'tehran'
        },
        {
          label: 'کرج',
          value: 'karaj'
        },
        {
          label: 'شیراز',
          value: 'shiraz'
        }
      ],
      [
        {
          label: 'واشنگتن',
          value: 'washington'
        },
        {
          label: 'فلوریدا',
          value: 'florida'
        },
        {
          label: 'هاوایی',
          value: 'hawaii'
        }
      ],
      [
        {
          label: 'لندن',
          value: 'london'
        },
        {
          label: 'منچستر',
          value: 'manchester'
        },
        {
          label: 'لیورپول',
          value: 'liverpool'
        }
      ]
    ];

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch'
        }}
      >
        <View
          style={{
            height: 50,
            alignSelf: 'stretch',
            backgroundColor: 'white',
            borderRadius: 10,
            marginBottom: 10
          }}
        >
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.state.country}
            onValueChange={(value, index) =>
              this.setState({ country: value, index })
            }
          >
            <Picker.Item label='ایران' value='ir' />
            <Picker.Item label='آمریکا' value='us' />
            <Picker.Item label='انگلیس' value='uk' />
          </Picker>
        </View>

        <View
          style={{
            height: 50,
            alignSelf: 'stretch',
            backgroundColor: 'white',
            borderRadius: 10
          }}
        >
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.state.city}
            onValueChange={value => {
              this.setState({ city: value }, () => {
                this.props.refresh(this.state.city, this.state.country);
              });
            }}
          >
            {cities[this.state.index].map(item => {
              return (
                <Picker.Item
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              );
            })}
          </Picker>
        </View>
      </View>
    );
  }
}

export { WeatherPicker };
