import React, { useEffect, useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
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
  LoadingIndicator,
} from './styles';

export default function About({ navigation }) {
  const familyId = navigation.getParam('familyId');
  const idProvider = useSelector(state => state.user.profile.provider);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function handleAboutFamily() {
      try {
        setLoading(true);
        const response = await api.get(`family/${familyId}`);

        setUsers(response.data.users);
        setLoading(false);
      } catch (error) {
        Alert.alert('Opss!!! ', error.response.data.error);
        setLoading(false);
      }
    }

    handleAboutFamily();
  }, [familyId, navigation]);

  return (
    <Background>
      {loading ? (
        <LoadingIndicator>
          <ActivityIndicator size={40} color="#379bd1" />
        </LoadingIndicator>
      ) : (
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
          {idProvider && (
            <Button onPress={() => navigation.navigate('invite', { familyId })}>
              Convidar membro
            </Button>
          )}
        </Container>
      )}
    </Background>
  );
}

About.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
