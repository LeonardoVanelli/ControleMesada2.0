import React from 'react';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

// import { Container } from './styles';

export default function Home() {
  const dispatch = useDispatch();

  return <Button title="Sair" onPress={() => dispatch(signOut())} />;
}
