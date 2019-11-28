import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import { Container, RightText } from './styles';

export default function CheckBox({ checked = false, rightText, onPress }) {
  return (
    <Container onPress={onPress}>
      {checked ? (
        <Icon name="check-square" size={24} color="rgba(255, 255, 255, 0.4)" />
      ) : (
        <Icon name="square-o" size={24} color="rgba(255, 255, 255, 0.4)" />
      )}
      <RightText>{rightText}</RightText>
    </Container>
  );
}

CheckBox.propTypes = {
  checked: PropTypes.bool,
  rightText: PropTypes.string,
  onPress: PropTypes.func,
};

CheckBox.defaultProps = {
  checked: false,
  rightText: '',
  onPress: () => {},
};
