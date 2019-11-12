import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { signInRequest } from '../../store/modules/auth/actions';

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
  const dispatch = useDispatch();

  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Logo>Controle de Mesada</Logo>
        <Form>
          <Input
            icon="person-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            icon="https"
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry
            autoCapitalize="none"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
          />
          <Button onPress={handleSubmit} loading={false}>
            Entrar
          </Button>
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
