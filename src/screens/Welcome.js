import React from 'react';
import { Intro } from '../components';

const Welcome = props => {
  const slides = [
    { title: 'ما خیلی خوبیم!', backgroundColor: 'red' },
    { title: 'ما خیلی خیلی خوبیم!', backgroundColor: 'coral' },
    { title: 'ما خیلی خیلی خیلی خوبیم!', backgroundColor: 'blue' },
    { title: 'ما خیلی خیلی خیلی باحالیم!', backgroundColor: 'green' }
  ];
  return (
    <Intro
      slides={slides}
      lastPage='_RootStack'
      navigation={props.navigation}
    />
  );
};

export { Welcome };
