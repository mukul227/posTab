import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NAVIGATION } from '@/constants';
import {
  Login,
  VerifyPhone,
  VerifyOtp,
  Passcode,
  VerifySucess,
  Retails,
  POSUsers,
  LoginIntial,
  MerchantPasscode,
} from '@/screens';
import { HomeNavigator } from '@/navigation/HomeNavigator';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export function AuthNavigator(props) {
  return (
    <Stack.Navigator initialRouteName="VerifyPhone">
      <Stack.Screen
        component={VerifyPhone}
        name={NAVIGATION.verifyPhone}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={MerchantPasscode}
        name={NAVIGATION.merchantPasscode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={VerifyOtp}
        name={NAVIGATION.verifyOtp}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={VerifySucess}
        name={NAVIGATION.verifySucess}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        component={POSUsers}
        name={NAVIGATION.posUsers}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={LoginIntial}
        name={NAVIGATION.loginIntial}
        options={{ headerShown: false }}
      /> */}

      {/* <Stack.Screen
        component={HomeNavigator}
        name={NAVIGATION.retails}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}
