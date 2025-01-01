import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigator} from './TabNavigation';
import SettingsScreen from '../../screens/setting/SettingsScreen';
import otherServiceScreen from '../../screens/otherServices/otherServiceScreen';
import SideDrawer from '../../screens/drawerScreen/sideDrawer';

const Drawer = createDrawerNavigator<TDrawerNavigatorParams>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="TabNavigator"
      backBehavior="history"
      drawerContent={SideDrawer}>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="SettingScreen"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="otherServiceScreen"
        component={otherServiceScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
