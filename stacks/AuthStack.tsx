import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ForgotPassword} from '~/modules/authentication/ForgotPassword';
import {ResetPassword} from '~/modules/authentication/ResetPassword';
import {Signin} from '~/modules/authentication/Signin';
import {Signup} from '~/modules/authentication/Signup';
import {Screens} from '~/stacks/Screens';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Screens.Signin}>
      <Stack.Screen name={Screens.Signin} component={Signin} />
      <Stack.Screen name={Screens.Signup} component={Signup} />
      <Stack.Screen name={Screens.ForgotPassword} component={ForgotPassword} />
      <Stack.Screen name={Screens.ResetPassword} component={ResetPassword} />
    </Stack.Navigator>
  );
};
