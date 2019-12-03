import React, { useState } from 'react';
import { Clipboard, ToastAndroid } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { joinFamilyRequest } from '../../../store/modules/families/actions';

import Background from '../../../components/Background';
import HamburguerMenu from '../../../components/Drawer/HamburguerMenu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, InputContainer, PasteButton, Form } from './styles';

export default function Join() {
  const [key, setKey] = useState('');
  const loading = useSelector(state => state.families.loadingJoin);

  const dispatch = useDispatch();

  async function handleSubmit() {
    dispatch(joinFamilyRequest(key));
  }

  async function handlePaste() {
    setKey(await Clipboard.getString());
    ToastAndroid.show('Sua chave de acesso foi colada', 150);
  }

  return (
    <Background>
      <Container>
        <Form>
          <InputContainer>
            <Input
              placeholder="Chave de acesso"
              value={key}
              onChangeText={setKey}
              autoCorrect={false}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
            />
          </InputContainer>

          <PasteButton onPress={handlePaste}>
            <Icon name="paste" color="rgba(255,255,255, 0.30)" size={25} />
          </PasteButton>
        </Form>

        <Button loading={loading} onPress={handleSubmit}>
          Entrar
        </Button>
      </Container>
    </Background>
  );
}

Join.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: HamburguerMenu(navigation),
  };
};
