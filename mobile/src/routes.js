import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Drawer from './route.drawer';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default (isSigned = false, families) => {
  return createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: Drawer(families),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
};
