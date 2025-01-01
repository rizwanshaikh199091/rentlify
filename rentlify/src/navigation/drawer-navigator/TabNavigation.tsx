  import React from 'react';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import { StyleSheet } from 'react-native';
  import HomeScreen from '../../screens/home/HomeScreen';
  import PropertyScreen from '../../screens/property/PropertyScreen';
  import TenantScreen from '../../screens/Tenant/TenantScreen';
  import InvoiceScreen from '../../screens/Invoice/InvoiceScreen';


  const Tab = createBottomTabNavigator<TMainNavigatorParams>();

  export const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarActiveTintColor: '#22215B',
          tabBarInactiveTintColor: '#7B7F9E',
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="home" color={color} size={focused ? 26 : 22} />
            ),
          }}
        />
        <Tab.Screen
          name="PropertyScreen"
          component={PropertyScreen}
          options={{
            tabBarLabel: 'Property',
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="apartment" color={color} size={focused ? 26 : 22} />
            ),
          }}
        />
        <Tab.Screen
          name="TenantScreen"
          component={TenantScreen}
          options={{
            tabBarLabel: 'Tenant',
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="people" color={color} size={focused ? 26 : 22} />
            ),
          }}
        />
        <Tab.Screen
          name="InvoiceScreen"
          component={InvoiceScreen}
          options={{
            tabBarLabel: 'Invoice',
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="receipt-long" color={color} size={focused ? 26 : 22} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const styles = StyleSheet.create({
    tabBarStyle: {
      backgroundColor: '#ffffff',
      paddingHorizontal: 10,
      height: 60,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 5,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: '600',
    },
  });
