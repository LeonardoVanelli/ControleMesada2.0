import React, { useState, useEffect, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../../../../services/api';

import CheckBox from '../../../../../components/CheckBox';
import {
  Container,
  Header,
  DateText,
  Footer,
  ComplementAmountText,
  Amount,
  Body,
  Assignments,
  LoadingIndicator,
  NotAssignments,
  NotAssignmentsText,
} from './styles';

export default function Panel({ familyId }) {
  const [assignments, setAssignments] = useState([]);
  const [amountWeek, setAmountWeek] = useState(0);
  const [loading, setLoading] = useState(true);
  const userId = useSelector(state => state.user.profile.id);

  async function handleCreateActivity(assignmentId) {
    const response = await api.post('activity', {
      realized_date: new Date(),
      assignment_id: assignmentId,
      user_id: userId,
    });

    if (response.data.created) {
      setAmountWeek(amountWeek + response.data.assignment.value);
    } else {
      setAmountWeek(amountWeek - response.data.assignment.value);
    }

    setAssignments(
      assignments.map(assignment => {
        if (assignment.id === assignmentId) {
          assignment.realized = !assignment.realized;
        }
        return assignment;
      })
    );
  }

  const amountWeekFormatted = useMemo(
    () => currencyFormatter.format(amountWeek, { code: 'BRL' }),
    [amountWeek]
  );

  useEffect(() => {
    async function handleStart() {
      const response = await api.get('card', {
        params: {
          date: new Date(),
          familyId,
          userId,
        },
      });

      setAmountWeek(response.data.amountWeek);
      setAssignments(response.data.assignments);
      setLoading(false);
    }

    handleStart();
  }, [familyId, userId]);

  return (
    <Container>
      <Header>
        <DateText>
          {format(new Date(), `dd 'de' MMMM (EEEE)`, { locale: pt })}
        </DateText>
      </Header>
      <Body>
        {/* eslint-disable-next-line no-nested-ternary */}
        {loading ? (
          <LoadingIndicator>
            <ActivityIndicator size={40} color="#379bd1" />
          </LoadingIndicator>
        ) : assignments.length ? (
          <Assignments>
            {assignments.map(assignment => (
              <CheckBox
                key={assignment.id}
                checked={assignment.realized}
                rightText={assignment.name}
                onPress={() => {
                  handleCreateActivity(assignment.id);
                }}
              />
            ))}
          </Assignments>
        ) : (
          <NotAssignments>
            <NotAssignmentsText>Nenhuma tarefa!</NotAssignmentsText>
          </NotAssignments>
        )}
      </Body>
      <Footer>
        <ComplementAmountText>
          Você arrecadou <Amount>{amountWeekFormatted}</Amount> esta semana
        </ComplementAmountText>
      </Footer>
    </Container>
  );
}

Panel.propTypes = {
  familyId: PropTypes.number.isRequired,
};
