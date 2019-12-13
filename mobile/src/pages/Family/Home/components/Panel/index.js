import React, { useState, useEffect, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import PropTypes from 'prop-types';
import { format, startOfWeek, eachDayOfInterval } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../../../../services/api';

import CheckBox from '../../../../../components/CheckBox';

import {
  Container,
  Header,
  DropDown,
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
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const userId = useSelector(state => state.user.profile.id);

  async function handleCreateActivity(assignmentId) {
    const response = await api.post('activity', {
      realized_date: date,
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

  const dates = useMemo(() => {
    const daysWeek = eachDayOfInterval({
      start: startOfWeek(new Date(), { weekStartsOn: 1 }),
      end: new Date(),
    });

    return daysWeek.reverse().map(day => ({
      value: day,
      label: format(day, `dd 'de' MMMM (EEEE)`, { locale: pt }),
    }));
  }, []);

  useEffect(() => {
    async function handleStart() {
      setLoading(true);
      const response = await api.get('card', {
        params: {
          date,
          familyId,
          userId,
        },
      });

      setAmountWeek(response.data.amountWeek);
      setAssignments(response.data.assignments);
      setLoading(false);
    }

    handleStart();
  }, [date, familyId, userId]);

  return (
    <Container>
      <Header>
        <DropDown
          onValueChange={changedValue => setDate(changedValue)}
          selectedValue={date}
        >
          {dates.map(item => (
            <DropDown.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </DropDown>
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
