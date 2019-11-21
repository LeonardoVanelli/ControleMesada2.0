import React from 'react';
import { Text } from 'react-native';

import PropTypes from 'prop-types';

import HamburguerMenu from '../../components/Drawer/HamburguerMenu';
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

Home.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: HamburguerMenu(navigation),
  };
};

Home.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
