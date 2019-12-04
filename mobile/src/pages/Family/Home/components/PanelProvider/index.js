import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';

import Activity from './components/Activity';

import {
  Container,
  Header,
  Title,
  Body,
  LoadingIndicator,
  Activities,
  NotAssignments,
  NotAssignmentsText,
  Footer,
  ComplementAmountText,
  Amount,
} from './styles';

export default function PanelProvider() {
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Header>
        <Title>Histórico de atividades mais recentes</Title>
      </Header>
      <Body>
        {/* eslint-disable-next-line no-nested-ternary */}
        {loading ? (
          <LoadingIndicator>
            <ActivityIndicator size={40} color="#379bd1" />
          </LoadingIndicator>
        ) : true ? (
          <Activities>
            <Activity />
            <Activity />
          </Activities>
        ) : (
          <NotAssignments>
            <NotAssignmentsText>Nenhuma tarefa!</NotAssignmentsText>
          </NotAssignments>
        )}
      </Body>
      <Footer>
        <ComplementAmountText>
          Você arrecadou <Amount>R$ 105,00</Amount> esta semana
        </ComplementAmountText>
      </Footer>
    </Container>
  );
}
