import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/SignIn';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
  }),
);
