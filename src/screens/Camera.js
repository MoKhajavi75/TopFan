import React, { Component } from 'reactn';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';

class Camera extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
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
            width: 200,
            height: 200,
            alignSelf: 'center',
            borderWidth: 2,
            borderColor: 'red'
          }}
        >
          <RNCamera
            style={{ flex: 1 }}
            ratio='1:1'
            captureAudio={false}
            onBarCodeRead={e => {
              let newLog = [...this.global.log];
              newLog.push({
                title: e.data,
                time: Date.now()
              });
              this.setGlobal({ log: newLog });
            }}
          />
        </View>
      </View>
    );
  }
}

export { Camera };
