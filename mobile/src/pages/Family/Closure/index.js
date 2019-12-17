import React, { useEffect, useState } from 'react';
import currencyFormatter from 'currency-formatter';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import api from '../../../services/api';

import Background from '../../../components/Background';
import Collapse from './Components/Collapse';

import {
  Container,
  LoadingContainer,
  Loading,
  AmountText,
  AmountValue,
  About,
  Amount,
  User,
  UserText,
  UserName,
} from './styles';

export default function Closure({ navigation }) {
  const familyId = navigation.getParam('familyId');
  const user = navigation.getParam('user');
  const date = navigation.getParam('date');

  const isProvider = useSelector(state => state.user.profile.provider);

  const [dates, setDates] = useState([]);
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function handleActivities() {
      setLoading(true);
      const response = await api.get('closure', {
        params: {
          date,
          familyId,
          userId: user.id,
        },
      });

      const { activitiesByDate } = response.data;

      const amountOfWeek = currencyFormatter.format(
        response.data.amountOfWeek,
        {
          code: 'BRL',
        }
      );

      const data = activitiesByDate.map(item => ({
        ...item,
        activities: item.activities.map(activity => ({
          ...activity,
          formattedValue: currencyFormatter.format(activity.assignment.value, {
            code: 'BRL',
          }),
        })),
        dayOfWeek: format(parseISO(item.date), 'EEEE', { locale: pt }),
        amount: currencyFormatter.format(
          item.activities.reduce(
            (total, activity) => total + activity.assignment.value,
            0
          ),
          { code: 'BRL' }
        ),
      }));

      setDates(data);
      setAmount(amountOfWeek);
      setLoading(false);
    }

    handleActivities();
  }, [amount, date, familyId, user.id]);

  console.tron.log(familyId, user, date);
  return (
    <Background>
      {loading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <Container>
          <About>
            {isProvider && (
              <User>
                <UserText>Usuário</UserText>
                <UserName>{user.name}</UserName>
              </User>
            )}
            <Amount>
              <AmountText>Total da semana</AmountText>
              <AmountValue>{amount}</AmountValue>
            </Amount>
          </About>
          {dates.map(activitiesDate => (
            <Collapse key={String(activitiesDate.date)} date={activitiesDate} />
          ))}
        </Container>
      )}
    </Background>
  );
}

Closure.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
