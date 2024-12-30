import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import LoginScreen from '../../screens/login/LoginScreen';
import SignUpScreen from '../../screens/signUp/SignUpScreen';
import SplashScreen from '../../screens/splash/SplashScreen';
import VerifyOTPScreen from '../../screens/verifyotp/VerifyOTPScreen';
import WelcomeScreen from '../../screens/welcome/WelcomeScreen';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator<TAuthNavigatorParams>();
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
 <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyOTP"
        component={VerifyOTPScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export type TAuthRoutes = NativeStackNavigationProp<TAuthNavigatorParams>;

export default AuthNavigator;
