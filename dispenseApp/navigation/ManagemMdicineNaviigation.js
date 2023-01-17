import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/managemMdicine/MainScreen';
import AddMedicine from '../screens/managemMdicine/AddMedicine';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Qrcode from '../screens/QrCodeScreens/Qrcode';
import ProfileScreen from '../screens/profile/ProfileScreen';

import { Header } from '@rneui/themed';
const TapNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackground: () => {
          return (
            <LinearGradient
              style={{height: '100%', width: '100%'}}
              colors={['#00B2FF', '#26CFC5']}></LinearGradient>
          );
        },
        headerTitleStyle:{color:'white',fontSize:16,fontWeight:'bold'},
        headerShown:false,
        // headerStyle:{borderRadius:5}
      }}>
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Qrcode" component={Qrcode} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
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
