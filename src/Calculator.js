import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Calculator extends Component {
  render() {
    const buttons = ['View', 'Edit', 'Help'];

    const rows = [
      ['MC', 'MR', 'MS', 'M+', 'M-'],
      ['<-', 'CE', 'C', '+-', '√'],
      ['7', '8', '9', '/', '%'],
      ['4', '5', '6', 'x', '1/x']
    ];

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F0F8FF'
        }}
      >
        {/* Top row */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: 'white'
          }}
        >
          {buttons.map(item => {
            return (
              <TouchableOpacity
                key={item}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch'
                }}
                onPress={() => {
                  alert(item);
                }}
              >
                <Text
                  style={{ marginHorizontal: 25, fontSize: 20, color: 'black' }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Bottom section */}
        <View
          style={{
            flex: 8,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: '#E6E6FA'
          }}
        >
          {/* Output */}
          <View
            style={{
              flex: 2,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              alignSelf: 'stretch',
              backgroundColor: '#D3D3D3',
              margin: 20,
              borderWidth: 1
            }}
          >
            <Text style={{ fontSize: 52, margin: 5 }}>0</Text>
          </View>

          {/* Buttons */}
          <View
            style={{
              flex: 8,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              backgroundColor: 'white',
              margin: 20,
              padding: 10,
              borderWidth: 1
            }}
          >
            {rows.map((eachRow, rowIndex) => {
              return (
                <View
                  key={rowIndex}
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    borderWidth: 1
                  }}
                >
                  {eachRow.map((button, buttonIndex) => {
                    return (
                      <View
                        key={buttonIndex}
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          alignSelf: 'stretch',
                          borderWidth: 1
                        }}
                      >
                        <Text style={{ fontSize: 30 }}>{button}</Text>
                      </View>
                    );
                  })}
                </View>
              );
            })}

            {/* last row */}
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                borderWidth: 1
              }}
            >
              <View
                style={{
                  flex: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  borderWidth: 1
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    borderWidth: 1
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      borderWidth: 1
                    }}
                  >
                    <Text>1</Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      borderWidth: 1
                    }}
                  >
                    <Text>2</Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      borderWidth: 1
                    }}
                  >
                    <Text>3</Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      borderWidth: 1
                    }}
                  >
                    <Text>-</Text>
                  </View>
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    borderWidth: 1
                  }}
                >
                  <View
                    style={{
                      flex: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      borderWidth: 1
                    }}
                  >
                    <Text>0</Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      borderWidth: 1
                    }}
                  >
                    <Text>.</Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      borderWidth: 1
                    }}
                  >
                    <Text>+</Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  borderWidth: 1
                }}
              >
                <Text>=</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Calculator;
