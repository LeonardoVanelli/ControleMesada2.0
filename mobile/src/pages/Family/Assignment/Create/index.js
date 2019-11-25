import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import api from '../../../../services/api';

import Background from '../../../../components/Background';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

import { Container, Inputs, Buttons, ContainerButton } from './styles';

export default function Create({ navigation }) {
  const familyId = navigation.getParam('familyId');

  const valueRef = useRef();

  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    try {
      setLoading(true);
      await api.post('assignment', {
        name,
        value,
        familyId,
      });

      setLoading(false);
      navigation.navigate(
        'assignment',
        { familyId },
        {
          reset: true,
        }
      );
    } catch (error) {
      Alert.alert('Opss!', error.response.data.error);
      setLoading(false);
    }
  }

  return (
    <Background>
      <Container>
        <Inputs>
          <Input
            autoCorrect={false}
            placeholder="Nome"
            returnKeyType="next"
            onSubmitEditing={() => valueRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <Input
            autoCorrect={false}
            placeholder="Valor"
            returnKeyType="send"
            keyboardType="numeric"
            onSubmitEditing={handleSubmit}
            ref={valueRef}
            value={value}
            onChangeText={setValue}
          />
        </Inputs>
        <Buttons>
          <ContainerButton>
            <Button loading={loading} onPress={handleSubmit}>
              Salvar
            </Button>
          </ContainerButton>
        </Buttons>
      </Container>
    </Background>
  );
}

Create.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
