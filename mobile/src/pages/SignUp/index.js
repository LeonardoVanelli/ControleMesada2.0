import React from 'react';
import PropTypes from 'prop-types';

import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Logo,
  Form,
  ExistentAccount,
  Text,
  TextBold,
} from './styles';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Logo>Controle de Mesada</Logo>
        <Form>
          <Input placeholder="Nome" />
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />

          <Button>Criar conta</Button>
        </Form>
        <ExistentAccount onPress={() => navigation.navigate('SignIn')}>
          <Text>
            Ja possui conta?
            <TextBold> Entrar</TextBold>
          </Text>
        </ExistentAccount>
      </Container>
    </Background>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
