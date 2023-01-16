import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WellcomeScreen from '../screens/auth/WellcomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WellcomeScreen"
        component={WellcomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
