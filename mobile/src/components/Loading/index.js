import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

import Background from '../Background';

export default function Loading() {
  return (
    <Background>
      <Container>
        <ActivityIndicator size={40} color="#379bd1" />
      </Container>
    </Background>
  );
}
