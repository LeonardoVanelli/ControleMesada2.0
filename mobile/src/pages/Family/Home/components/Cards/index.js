import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import { Container } from './styles';

export default function Cards({ familyId, navigation }) {
  return (
    <Container>
      <Card
        text="Sobre a família"
        iconName="people-outline"
        onPress={() => navigation.navigate('about', { familyId })}
      />
      <Card
        text="Tarefas"
        iconName="fitness-center"
        onPress={() => {
          navigation.navigate('assignment', { familyId });
        }}
      />
      <Card
        text="Atividades semana"
        iconName="description"
        onPress={() => {}}
      />
      <Card text="Perfil" iconName="person-outline" onPress={() => {}} />
    </Container>
  );
}

Cards.propTypes = {
  familyId: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
