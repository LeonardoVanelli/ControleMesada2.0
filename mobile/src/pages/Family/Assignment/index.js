import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import currencyFormatter from 'currency-formatter';
import { useSelector } from 'react-redux';
import { Alert, ActivityIndicator, FlatList } from 'react-native';

import api from '../../../services/api';

import Background from '../../../components/Background';
import Button from '../../../components/Button';

import {
  Container,
  LoadingIndicator,
  Body,
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
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const getAssignments = useCallback(async () => {
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
      setLoading(false);
    }
  }, [familyId]);

  useEffect(() => {
    setLoading(true);

    navigation.addListener('didFocus', async () => {
      await getAssignments();
      setLoading(false);
    });
  }, [getAssignments, navigation]);

  async function onRefreshing() {
    setRefreshing(true);
    await getAssignments();
    setRefreshing(false);
  }

  return (
    <Background>
      <Container>
        {/* eslint-disable-next-line no-nested-ternary */}
        {loading ? (
          <LoadingIndicator>
            <ActivityIndicator size={40} color="#379bd1" />
          </LoadingIndicator>
        ) : assignments.length === 0 ? (
          <NotAssignments>
            <NotAssignmentsText>
              Nenhuma atividade cadastrada
            </NotAssignmentsText>
          </NotAssignments>
        ) : (
          <Body>
            <FlatList
              contentContainerStyle={{ padding: 18, paddingBottom: 18 }}
              overScrollMode="never"
              data={assignments}
              keyExtractor={assignment => String(assignment.id)}
              onRefresh={() => onRefreshing()}
              refreshing={refreshing}
              renderItem={({ item }) => (
                <Item>
                  <DataItem>
                    <ItemName disabled={item.disabled}>{item.name}</ItemName>
                    <Value disabled={item.disabled}>
                      {item.formattedValue}
                    </Value>
                  </DataItem>
                  <Line disabled={item.disabled} />
                </Item>
              )}
            />
          </Body>
        )}
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
