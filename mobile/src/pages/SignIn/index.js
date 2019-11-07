import React from 'react';

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

export default function SignIn() {
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

        <NewAccount>
          <Text>
            Não tem conta?
            <TextBold> Cadastre-se</TextBold>
          </Text>
        </NewAccount>
      </Container>
    </Background>
  );
}
