import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/managemMdicine/MainScreen';
import AddMedicine from '../screens/managemMdicine/AddMedicine';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Qrcode from '../screens/QrCodeScreens/Qrcode';
import ProfileScreen from '../screens/profile/ProfileScreen';
// file-medical
import {Icon} from '@rneui/base';
import ListMedicine from '../screens/managemMdicine/ListMedicine';
import HisoryMdc from '../screens/managemMdicine/HisoryMdc';
<<<<<<< HEAD
<<<<<<< HEAD
import EditUserLogin from '../screens/profile/EditUserLogin';
import EditUser from '../screens/profile/EditUser';
<<<<<<< HEAD
import ListMedicine2 from '../screens/managemMdicine/ListMedicine2';
=======
>>>>>>> parent of 6880d4c (Edit)
=======
>>>>>>> parent of eb2be9e (edit chang button)
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
        name="HisoryMdc"
        component={HisoryMdc}
        options={{
          title: 'History',
          tabBarIcon: () => {
            return (
              <Icon
                name="history"
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
          title: 'Profile',
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
      <Stack.Screen
        name="ListMedicine"
        component={ListMedicine}
        options={{headerShown: false}}
      />
<<<<<<< HEAD
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditUser"
        component={EditUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditUserLogin"
        component={EditUserLogin}
        options={{headerShown: false}}
      />
<<<<<<< HEAD
      <Stack.Screen
        name="ListMedicine2"
        component={ListMedicine2}
        options={{headerShown: false}}
      />
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 6880d4c (Edit)
=======
>>>>>>> parent of eb2be9e (edit chang button)
>>>>>>> f1b93e2 (Revert "edit chang button")
    </Stack.Navigator>
  );
};

export default ManagemMdicine;
