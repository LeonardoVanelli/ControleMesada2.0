import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Drawer from './components/Drawer';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createDrawerNavigator(
          { Home, SignIn },
          {
            contentComponent: Drawer,
            drawerWidth: 276,
            contentOptions: {
              activeBackgroundColor: '#1D5E79',
              inactiveBackgroundColor: '#18526A',
              activeTintColor: 'rgba(255, 255, 255, 0.54)',
              inactiveTintColor: 'rgba(255, 255, 255, 0.44)',
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
