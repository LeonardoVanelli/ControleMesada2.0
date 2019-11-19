import React from 'react';
import { Text } from 'react-native';

import PropTypes from 'prop-types';

import Background from '../../components/Background';

// import { Container } from './styles';

export default function Home({ navigation }) {
  const family = navigation.getParam('family');

  return (
    <Background>
      <Text>{family.name}</Text>
    </Background>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
