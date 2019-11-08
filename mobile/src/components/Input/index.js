import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

export default function Input({ icon, ...rest }) {
  return (
    <Container>
      {icon !== '' && (
        <Icon
          name={icon}
          size={24}
          style={{ marginRight: 28 }}
          color="rgba(156, 195, 216, 0.54)"
        />
      )}
      <TInput {...rest} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
};

Input.defaultProps = {
  icon: '',
};
