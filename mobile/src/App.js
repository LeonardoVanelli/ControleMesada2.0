import React from 'react';
import { StatusBar } from 'react-native';

import './config/Reactotron';

import Routes from './routes';

export default function src() {
  return (
    <>
      <StatusBar backgroundColor="rgba(14, 40, 91, 1)" />
      <Routes />
    </>
  );
}
