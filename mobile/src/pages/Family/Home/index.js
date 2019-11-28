import React from 'react';
import PropTypes from 'prop-types';

import HamburguerMenu from '../../../components/Drawer/HamburguerMenu';
import Background from '../../../components/Background';
import Card from '../components/Card';
import Panel from './components/Panel';

import { Container, Footer, Cards } from './styles';

export default function Home({ navigation }) {
  const family = navigation.getParam('family');

  return (
    <Background>
      <Container>
        <Panel familyId={family.id} />
        <Footer>
          <Cards>
            <Card
              text="Sobre a família"
              iconName="people-outline"
              onPress={() =>
                navigation.navigate('about', { familyId: family.id })
              }
            />
            <Card
              text="Tarefas"
              iconName="fitness-center"
              onPress={() => {
                navigation.navigate('assignment', { familyId: family.id });
              }}
            />
            <Card
              text="Atividades semana"
              iconName="description"
              onPress={() => {}}
            />
            <Card text="Perfil" iconName="person-outline" onPress={() => {}} />
          </Cards>
        </Footer>
      </Container>
    </Background>
  );
}

Home.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: HamburguerMenu(navigation),
  };
};

Home.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
