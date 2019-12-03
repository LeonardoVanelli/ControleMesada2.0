import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import api from '../../../../services/api';

import Background from '../../../../components/Background';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import { Container } from './styles';

export default function Invite({ navigation }) {
  const familyId = navigation.getParam('familyId');

  const [email, setEmail] = useState('');

  async function handleSubmit() {
    try {
      await api.post('invite', {
        familyId,
        email,
      });

      Alert.alert('Sucesso', 'Convite enviado com sucesso');
      setEmail('');
      Keyboard.dismiss();
    } catch (error) {
      Alert.alert('Opss!', error.response.data.error);
    }
  }

  return (
    <Background>
      <Container>
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <Button onPress={handleSubmit}>Convidar</Button>
      </Container>
    </Background>
  );
}

Invite.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
