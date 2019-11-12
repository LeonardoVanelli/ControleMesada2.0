import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { signUpRequest } from '../../store/modules/auth/actions';

import {
  Container,
  Logo,
  Form,
  ExistentAccount,
  Text,
  TextBold,
} from './styles';

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const dispatch = useDispatch();

  function handleSubmit() {
    const equalPassword = password === confirmPassword;
    if (equalPassword) {
      dispatch(signUpRequest(name, email, password));
    }
  }

  return (
    <Background>
      <Container>
        <Logo>Controle de Mesada</Logo>
        <Form>
          <Input
            placeholder="Nome"
            value={name}
            onChangeText={setName}
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <Input
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            ref={emailRef}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            ref={passwordRef}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
          />
          <Input
            placeholder="Confime sua senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="send"
            ref={confirmPasswordRef}
            onSubmitEditing={handleSubmit}
          />

          <Button onPress={handleSubmit}>Criar conta</Button>
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
