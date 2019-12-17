import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import api from '../../../services/api';

import Background from '../../../components/Background';
import DateTimePicker from '../../../components/DateTimePicker';

import Button from '../../../components/Button';

import { Container, Form, DropDown, DropContainer } from './styles';

export default function ClosureFilter({ navigation }) {
  const currentUser = useSelector(state => state.user.profile);
  const familyId = navigation.getParam('familyId');
  const [user, setUser] = useState(null);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function start() {
      const response = await api.get(`family/${familyId}`);
      setUsers(response.data.users.filter(item => !item.provider));
    }
    if (currentUser.provider) start();
  }, [currentUser.provider, familyId]);

  function handleSubmit() {
    if (!user && !currentUser.provider)
      return navigation.navigate('closure', {
        user: currentUser,
        date,
        familyId,
      });
    if (!user) return Alert.alert('Opss!', 'Selecione um usuário');
    return navigation.navigate('closure', { user, date, familyId });
  }

  return (
    <Background>
      <Container>
        <Form>
          <DateTimePicker
            title="Selecione o dia"
            value={date}
            mode="date"
            onChange={value => setDate(value)}
          />
          {currentUser.provider && (
            <DropContainer>
              <DropDown
                onValueChange={changedValue => setUser(changedValue)}
                selectedValue={user}
              >
                {users.map(item => (
                  <DropDown.Item key={item.id} label={item.name} value={item} />
                ))}
              </DropDown>
            </DropContainer>
          )}
        </Form>
        <Button onPress={handleSubmit}>Realizar fechamento</Button>
      </Container>
    </Background>
  );
}

ClosureFilter.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
