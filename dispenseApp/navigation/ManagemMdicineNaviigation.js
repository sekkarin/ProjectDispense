import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/managemMdicine/MainScreen';
import AddMedicine from '../screens/managemMdicine/AddMedicine';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Qrcode from '../screens/QrCodeScreens/Qrcode';
import ProfileScreen from '../screens/profile/ProfileScreen';
// file-medical
import {Icon} from '@rneui/base';
const TapNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: 60},
        tabBarLabelStyle: {fontSize: 15},
      }}>
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarIcon: () => {
            return (
              <Icon
                name="medical-services"
                type="fontAwesome5"
                color="#35C5F5"
                size={32}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Qrcode"
        component={Qrcode}
        options={{
          tabBarIcon: () => {
            return (
              <Icon
                name="qr-code"
                type="fontAwesome5"
                color="#35C5F5"
                size={32}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => {
            return (
              <Icon
                name="supervised-user-circle"
                type="fontAwesome5"
                color="#35C5F5"
                size={32}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const ManagemMdicine = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={TapNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddMedicine"
        component={AddMedicine}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ManagemMdicine;
