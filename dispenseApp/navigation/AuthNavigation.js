import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WellcomeScreen from '../screens/auth/WellcomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartAppScreen from '../screens/auth/StartAppScreen';
import LoginScreen from '../screens/auth/LoginScreen';
const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WellcomeScreen"
        component={WellcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StartAppScreen"
        component={StartAppScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
