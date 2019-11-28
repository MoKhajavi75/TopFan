import React from 'react';
import { Platform } from 'react-native';

const PS = ({ android, iOS }) => {
  if (Platform.OS === 'android') {
    return <>{android}</>;
  } else {
    return <>{iOS}</>;
  }
};

export { PS };
