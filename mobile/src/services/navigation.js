import { NavigationActions } from 'react-navigation';

const config = {};

export function setNavigator(nav) {
  if (nav) {
    config.navigator = nav;
  }
}

export function navigate(routeName, params = {}) {
  if (config.navigator && routeName) {
    const actionNavigation = NavigationActions.navigate({
      routeName,
      params,
    });

    config.navigator.dispatch(actionNavigation);
  }
}

export function goBack() {
  if (config.navigator) {
    const action = NavigationActions.back({});
    config.navigator.dispatch(action);
  }
}
