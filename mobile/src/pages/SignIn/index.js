import React from 'react';
import PropTypes from 'prop-types';

import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Logo,
  Form,
  Text,
  RememberPass,
  NewAccount,
  TextBold,
} from './styles';

export default function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <Logo>Controle de Mesada</Logo>
        <Form>
          <Input icon="person-outline" placeholder="E-mail" />
          <Input icon="https" placeholder="Senha" />
          <Button loading={false}>Entrar</Button>
        </Form>
        <RememberPass>
          <Text>
            Esqueceu sua senha?
            <TextBold> Clique aqui</TextBold>
          </Text>
        </RememberPass>

        <NewAccount onPress={() => navigation.navigate('SignUp')}>
          <Text>
            Não tem conta?
            <TextBold> Cadastre-se</TextBold>
          </Text>
        </NewAccount>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
