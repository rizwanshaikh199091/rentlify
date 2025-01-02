import React from 'react';
import { useAppSelector } from '../redux/hook';
import ForceUpdate from '../screens/forceUpdate/ForceUpdate';
import SplashScreen from '../screens/splash/SplashScreen';
import AuthNavigator from './auth-navigator/AuthNavigator';
import DrawerNavigation from './drawer-navigator/DrawerNavigator';

const AppNavigator = () => {
  const loginState = useAppSelector((state) => state.login.status);

  switch (loginState) {
    case 'authenticating':
      return <SplashScreen />;
    case 'loggedIn':
      return <DrawerNavigation />;
    case 'logout':
      return <AuthNavigator />;
    case 'forceUpdate':
      return <ForceUpdate />;
    default:
      return <AuthNavigator />;
  }
};

export default AppNavigator;
