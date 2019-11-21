import React from 'react';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

export default navigation => (
  <Container onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
    <Icon name="menu" size={24} color="#46819D" />
  </Container>
);
