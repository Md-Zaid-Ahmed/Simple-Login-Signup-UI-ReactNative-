import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import EmailCheck from '../Screens/EmailCheck';
import ResetPassword from '../Screens/ResetPassword';
import Register from '../Screens/Register';
import Otp from '../Screens/Otp';
import ForgotPassword from '../Screens/ForgotPassword';
import Home from '../Screens/Home';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" options={{ headerShown: false }}>
        {() => <Login />}
      </Stack.Screen>
      <Stack.Screen name="Email Check" options={{ headerShown: false }} >
        {() => <EmailCheck />}
      </Stack.Screen>
      <Stack.Screen name="Reset Password" options={{ headerShown: false }}>
        {() => <ResetPassword />}
      </Stack.Screen>
      <Stack.Screen name="Register" options={{ headerShown: false }}>
        {() => <Register />}
      </Stack.Screen>
      <Stack.Screen name="Otp" options={{ headerShown: false }}>
        {() => <Otp />}
      </Stack.Screen>
      <Stack.Screen name="Forgot Password" options={{ headerShown: false }}>
        {() => <ForgotPassword />}
      </Stack.Screen>
      <Stack.Screen name="Home" options={{ headerShown: false }}>
        {() => <Home />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default Routes;
