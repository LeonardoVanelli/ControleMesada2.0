import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '../../../services/api';

import Background from '../../../components/Background';
import Button from '../../../components/Button';

import {
  Container,
  Body,
  Session,
  SessionName,
  Users,
  UserName,
} from './styles';

export default function About({ navigation }) {
  const familyId = navigation.getParam('familyId');

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function handleAboutFamily() {
      const response = await api.get(`family/${familyId}`);

      setUsers(response.data.users);
    }

    handleAboutFamily();
  }, [familyId, navigation]);

  return (
    <Background>
      <Container>
        <Body>
          <Session>
            <SessionName>Responsáveis</SessionName>
            <Users>
              {users.map(
                user =>
                  user.provider && (
                    <UserName key={user.id}>{user.name}</UserName>
                  )
              )}
            </Users>
          </Session>
          <Session>
            <SessionName>Usuários</SessionName>
            <Users>
              {users.map(
                user =>
                  !user.provider && (
                    <UserName key={user.id}>{user.name}</UserName>
                  )
              )}
            </Users>
          </Session>
        </Body>
        <Button onPress={() => navigation.navigate('invite', { familyId })}>
          Convidar membro
        </Button>
      </Container>
    </Background>
  );
}

About.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
