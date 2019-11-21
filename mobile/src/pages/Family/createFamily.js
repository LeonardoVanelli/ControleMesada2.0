import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import HamburguerMenu from '../../components/Drawer/HamburguerMenu';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { createRequest } from '../../store/modules/families/actions';

import { Container } from './styles';

export default function Family() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  function handleSubmit() {
    dispatch(createRequest(name));
  }
  return (
    <Background>
      <Container>
        <Input
          placeholder="Nome"
          autoCorrect={false}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={name}
          onChangeText={setName}
        />
        <Button onPress={handleSubmit}>Criar</Button>
      </Container>
    </Background>
  );
}

Family.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: HamburguerMenu(navigation),
  };
};
