import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
} from './styles';

export default function Assignment({ navigation }) {
  const familyId = navigation.getParam('familyId');

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    async function handleStart() {
      try {
        const response = await api.get('assignment', {
          params: {
            familyId,
          },
        });

        setAssignments(response.data);
      } catch (error) {
        Alert.alert('Opss!', error.response.data);
      }
    }
    handleStart();
  }, [familyId]);

  return (
    <Background>
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
                    {assignment.value}
                  </Value>
                </DataItem>
                <Line disabled={assignment.disabled} />
              </Item>
            ))}
          </Assignments>
        </Body>
        <Footer>
          <Button>Nova tarefa</Button>
        </Footer>
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
