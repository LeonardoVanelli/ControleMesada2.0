import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Drawer from './components/Drawer';

import Home from './pages/Home';
import CreateFamily from './pages/Family/createFamily';

function createStack(screen, title, params) {
  return createStackNavigator(
    {
      start: {
        screen,
        params: { ...params },
        navigationOptions: {
          title,
          headerTitleStyle: {
            color: '#46819D',
            fontFamily: 'Roboto',
          },
          headerStyle: {
            borderBottomColor: '#9CC3D8',
            borderBottomWidth: 1,
            backgroundColor: '#0E285B',
          },
        },
      },
    },
    {
      headerLayoutPreset: 'center',
    }
  );
}

export default families => {
  const familiesComponents = {};

  families.forEach(family => {
    familiesComponents[family.name] = createStack(Home, family.name, {
      family,
    });
  });

  familiesComponents['Criar Familia'] = createStack(
    CreateFamily,
    'Criar família'
  );

  return createDrawerNavigator(familiesComponents, {
    contentComponent: Drawer,
    drawerWidth: 276,
    contentOptions: {
      activeBackgroundColor: '#1D5E79',
      inactiveBackgroundColor: '#18526A',
      activeTintColor: 'rgba(255, 255, 255, 0.54)',
      inactiveTintColor: 'rgba(255, 255, 255, 0.44)',
    },
  });
};
