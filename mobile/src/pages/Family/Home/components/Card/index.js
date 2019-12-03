import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Description } from './styles';

export default function Card({ text, iconName, onPress }) {
  return (
    <Container onPress={onPress}>
      <Icon name={iconName} size={24} color="rgba(255,255,255, 0.54)" />
      <Description>{text}</Description>
    </Container>
  );
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
