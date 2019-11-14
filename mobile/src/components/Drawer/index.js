import React from 'react';
import { DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import {
  Container,
  Safe,
  Header,
  Logo,
  User,
  Session,
  Title,
  Footer,
  NavButton,
  ButtonText,
  Top,
  Border,
} from './styles';

export default props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile);

  return (
    <Container>
      <Safe forceInset={{ top: 'always', horizontal: 'never' }}>
        <Top>
          <Header>
            <Logo>Controle de Mesada</Logo>
            <User>{user.name}</User>
          </Header>
          <Session>
            <Icon
              name="people-outline"
              size={24}
              color="rgba(255, 255, 255, 0.2)"
            />
            <Title>Familias</Title>
          </Session>
          <DrawerItems {...props} />
        </Top>
        <Footer>
          <Border>
            <NavButton onPress={() => {}}>
              <Icon
                name="person-outline"
                size={16}
                color="rgba(255, 255, 255, 0.54)"
              />
              <ButtonText>Perfil</ButtonText>
            </NavButton>
          </Border>
          <Border>
            <NavButton onPress={() => dispatch(signOut())}>
              <Icon
                name="exit-to-app"
                size={16}
                color="rgba(255, 255, 255, 0.54)"
              />
              <ButtonText>Sair</ButtonText>
            </NavButton>
          </Border>
        </Footer>
      </Safe>
    </Container>
  );
};
