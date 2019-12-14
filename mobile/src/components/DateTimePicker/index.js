import React, { useState, useEffect } from 'react';
import DatePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Button, DateText, Title } from './styles';

export default function DateTimePicker({ value, onChange, mode, title }) {
  const [show, setShow] = useState(false);
  const [SelectedTitle, setSelectedTitle] = useState('');

  function openDateTime() {
    setShow(true);
  }

  function onChangeDate(event, date) {
    setShow(false);
    if (date) {
      onChange(date);
    }
  }

  useEffect(() => {
    setSelectedTitle(format(value, `dd 'de' MMMM 'de' yyyy`, { locale: pt }));
  }, [value]);

  return (
    <Container>
      <Title>{title}</Title>
      <Button onPress={openDateTime}>
        <DateText>{SelectedTitle || title}</DateText>
      </Button>
      {show && <DatePicker value={value} onChange={onChangeDate} mode={mode} />}
    </Container>
  );
}

DateTimePicker.propTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
