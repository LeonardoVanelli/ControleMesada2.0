import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Drawer from './components/Drawer';

import Family from './pages/Family/Home';
import CreateFamily from './pages/Family/CreateFamily';
import AboutFamily from './pages/Family/About';
import Invite from './pages/Family/About/Invite';
import Assignment from './pages/Family/Assignment';
import CreateAssignment from './pages/Family/Assignment/Create';

function getNavigationOptions(title) {
  return {
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
  };
}

function createStack(screen, title, params) {
  return createStackNavigator(
    {
      start: {
        screen,
        params: { ...params },
        navigationOptions: getNavigationOptions(title),
      },
      about: {
        screen: AboutFamily,
        navigationOptions: {
          ...getNavigationOptions(title),
          headerTintColor: '#46819D',
        },
      },
      invite: {
        screen: Invite,
        navigationOptions: {
          ...getNavigationOptions(title),
          headerTintColor: '#46819D',
        },
      },
      assignment: {
        screen: Assignment,
        navigationOptions: {
          ...getNavigationOptions(title),
          headerTintColor: '#46819D',
        },
      },
      createAssignment: {
        screen: CreateAssignment,
        navigationOptions: {
          ...getNavigationOptions(title),
          headerTintColor: '#46819D',
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
    familiesComponents[family.name] = createStack(Family, family.name, {
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
