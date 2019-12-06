import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  formatDistance,
  parseISO,
  format,
  startOfWeek,
  isAfter,
} from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Header,
  UserName,
  Time,
  Body,
  DayRealized,
  AssignmentName,
} from './styles';

export default function Activity({
  userName,
  createdAt,
  assignmentName,
  realizedAt,
}) {
  const realizedAtFormated = useMemo(() => {
    const formated = isAfter(parseISO(realizedAt), startOfWeek(new Date()))
      ? 'cccc'
      : `dd 'de' MMM`;
    return format(parseISO(realizedAt), formated, { locale: pt });
  }, [realizedAt]);

  return (
    <Container>
      <Header>
        <UserName>{userName}</UserName>
        <Time>
          {formatDistance(parseISO(createdAt), new Date(), {
            addSuffix: true,
            locale: pt,
          })}
        </Time>
      </Header>
      <Body>
        <AssignmentName>{assignmentName}</AssignmentName>
        <DayRealized>{realizedAtFormated}</DayRealized>
      </Body>
    </Container>
  );
}

Activity.propTypes = {
  userName: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  assignmentName: PropTypes.string.isRequired,
  realizedAt: PropTypes.string.isRequired,
};
