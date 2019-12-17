import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Body,
  LeftContent,
  About,
  DayWeek,
  AmountActivities,
  Value,
  Acitivity,
  AcitivityName,
  AcitivityValue,
} from './styles';

export default function Collapse({ date }) {
  const [open, setOpen] = useState(false);

  function togleBody() {
    setOpen(!open);
  }

  return (
    <Container>
      <Header onPress={togleBody}>
        <LeftContent>
          <About>
            <DayWeek>{date.dayOfWeek}</DayWeek>
            <AmountActivities>
              {date.activities.length}{' '}
              {date.activities.length === 1 ? 'Atividade' : 'Atividades'}
            </AmountActivities>
          </About>
          <Value>{date.amount}</Value>
        </LeftContent>
        <Icon
          style={{ paddingLeft: 8, paddingRight: 8 }}
          name={open ? 'expand-less' : 'expand-more'}
          size={21}
          color="#B5FFFF"
        />
      </Header>
      {open && (
        <Body>
          {date.activities.map(activity => (
            <Acitivity key={activity.id}>
              <AcitivityName>{activity.assignment.name}</AcitivityName>
              <AcitivityValue>{activity.formattedValue}</AcitivityValue>
            </Acitivity>
          ))}
        </Body>
      )}
    </Container>
  );
}

Collapse.propTypes = {
  date: PropTypes.shape({}).isRequired,
};
