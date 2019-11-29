import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Drawer from './route.drawer';

import Loading from './components/Loading';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default (isSigned = false, families, loading = false) => {
  return createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createSwitchNavigator(
          {
            Drawer: Drawer(families),
            Loading,
          },
          { initialRouteName: loading ? 'Loading' : 'Drawer' }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
};
