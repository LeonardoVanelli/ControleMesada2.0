import React from 'react';

import {
  Container,
  Header,
  UserName,
  Time,
  Body,
  Text,
  AssignmentName,
} from './styles';

export default function Activity() {
  return (
    <Container>
      <Header>
        <UserName>Gustavo Santos</UserName>
        <Time>Há 20 minutos</Time>
      </Header>
      <Body>
        <Text>Reaizou a tarefa: </Text>
        <AssignmentName>Secar a louça</AssignmentName>
      </Body>
    </Container>
  );
}
