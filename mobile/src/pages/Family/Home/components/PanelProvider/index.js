import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import currencyFormatter from 'currency-formatter';
import { FlatList } from 'react-native';

import api from '../../../../../services/api';

import Activity from './components/Activity';

import {
  Container,
  Header,
  Title,
  Body,
  Footer,
  ComplementAmountText,
  Amount,
  ShowMore,
  ShowMoreText,
  Loading,
} from './styles';

export default function PanelProvider({ familyId }) {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(0);
  const [activities, setActivities] = useState([]);
  const [endList, setEndList] = useState([]);
  const [amount, setAmount] = useState(0);

  async function getActivities(pageNumber = page, shouldRefresh = false) {
    setLoading(true);
    const response = await api.get('activity', {
      params: {
        familyId,
        page: pageNumber,
      },
    });

    setEndList(response.data.activities.length < 10);
    setPage(pageNumber + 1);

    setAmount(response.data.amount);
    setActivities(
      shouldRefresh
        ? response.data.activities
        : [...activities, ...response.data.activities]
    );
    setLoading(false);
  }

  useEffect(() => {
    getActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [familyId]);

  async function refreshList() {
    setRefreshing(true);

    await getActivities(0, true);
    setRefreshing(false);
  }

  const amountFormatted = useMemo(
    () => currencyFormatter.format(amount, { code: 'BRL' }),
    [amount]
  );

  return (
    <Container>
      <Header>
        <Title>Histórico de atividades</Title>
      </Header>
      <Body>
        <FlatList
          contentContainerStyle={{ padding: 18, paddingBottom: 13 }}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          data={activities}
          keyExtractor={activity => String(activity.id)}
          onRefresh={refreshList}
          refreshing={refreshing}
          ListFooterComponent={
            loading ? (
              <Loading />
            ) : (
              activities.length &&
              (!endList && (
                <ShowMore onPress={() => getActivities()}>
                  <ShowMoreText>Mostrar mais</ShowMoreText>
                </ShowMore>
              ))
            )
          }
          renderItem={({ item }) => (
            <Activity
              userName={item.user.name}
              createdAt={item.createdAt}
              realizedAt={item.realized_date}
              assignmentName={item.assignment.name}
            />
          )}
        />
      </Body>
      <Footer>
        <ComplementAmountText>
          Foram realizados <Amount>{amountFormatted}</Amount> em tarefas essa
          semana
        </ComplementAmountText>
      </Footer>
    </Container>
  );
}

PanelProvider.propTypes = {
  familyId: PropTypes.number.isRequired,
};
