import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function Input({ icon, ...rest }, ref) {
  return (
    <Container>
      {icon && (
        <Icon
          name={icon}
          size={24}
          style={{ marginRight: 28 }}
          color="rgba(156, 195, 216, 0.54)"
        />
      )}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
};

Input.defaultProps = {
  icon: null,
};

export default forwardRef(Input);
