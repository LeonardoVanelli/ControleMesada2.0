import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUn from './pages/SignUp';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUn,
  })
);
