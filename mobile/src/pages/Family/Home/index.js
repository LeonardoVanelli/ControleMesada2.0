import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import HamburguerMenu from '../../../components/Drawer/HamburguerMenu';
import Background from '../../../components/Background';
import Cards from './components/Cards';
import Panel from './components/Panel';
import PanelProvider from './components/PanelProvider';

import { Container, Footer } from './styles';

export default function Home({ navigation }) {
  const family = navigation.getParam('family');
  const isProvider = useSelector(state => state.user.profile.provider);

  return (
    <Background>
      <Container>
        {isProvider ? (
          <PanelProvider familyId={family.id} />
        ) : (
          <Panel familyId={family.id} />
        )}
        <Footer>
          <Cards familyId={family.id} navigation={navigation} />
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
