import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class HW3 extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F0F8FF'
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderWidth: 1,
            margin: 40
          }}
        >
          <ScrollView style={{ flex: 1, alignSelf: 'stretch' }}>
            <Text
              style={{ fontSize: 30, color: 'black' }}
              selectable
              selectionColor='red'
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. The standard chunk of Lorem Ipsum used since the
              1500s is reproduced below for those interested. Sections 1.10.32
              and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum. The standard
              chunk of Lorem Ipsum used since the 1500s is reproduced below for
              those interested. Sections 1.10.32 and 1.10.33 from de Finibus
              Bonorum et Malorum by Cicero are also reproduced in their exact
              original form, accompanied by English versions from the 1914
              translation by H. Rackham.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. The standard chunk of Lorem Ipsum used
              since the 1500s is reproduced below for those interested. Sections
              1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero
              are also reproduced in their exact original form, accompanied by
              English versions from the 1914 translation by H. Rackham.
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default HW3;
