import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import currencyFormatter from 'currency-formatter';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import api from '../../../services/api';

import Background from '../../../components/Background';
import Button from '../../../components/Button';

import {
  Container,
  Body,
  Assignments,
  Item,
  ItemName,
  Value,
  DataItem,
  Line,
  Footer,
  NotAssignments,
  NotAssignmentsText,
} from './styles';

export default function Assignment({ navigation }) {
  const familyId = navigation.getParam('familyId');

  const isProvider = useSelector(state => state.user.profile.provider);

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    async function handleStart() {
      try {
        const response = await api.get('assignment', {
          params: {
            familyId,
          },
        });

        const assignmentsComplete = response.data.map(assignment => ({
          ...assignment,
          formattedValue: currencyFormatter.format(assignment.value, {
            code: 'BRL',
          }),
        }));

        setAssignments(assignmentsComplete);
      } catch (error) {
        Alert.alert('Opss!', error.response.data);
      }
    }
    handleStart();

    navigation.addListener('didFocus', () => {
      handleStart();
    });
  }, [familyId, navigation]);

  return (
    <Background>
      {assignments.length === 0 && (
        <NotAssignments>
          <NotAssignmentsText>Nenhuma atividade cadastrada</NotAssignmentsText>
        </NotAssignments>
      )}
      <Container>
        <Body>
          <Assignments>
            {assignments.map(assignment => (
              <Item key={assignment.id}>
                <DataItem>
                  <ItemName disabled={assignment.disabled}>
                    {assignment.name}
                  </ItemName>
                  <Value disabled={assignment.disabled}>
                    {assignment.formattedValue}
                  </Value>
                </DataItem>
                <Line disabled={assignment.disabled} />
              </Item>
            ))}
          </Assignments>
        </Body>
        {isProvider && (
          <Footer>
            <Button
              onPress={() =>
                navigation.navigate('createAssignment', { familyId })
              }
            >
              Nova tarefa
            </Button>
          </Footer>
        )}
      </Container>
    </Background>
  );
}

Assignment.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
