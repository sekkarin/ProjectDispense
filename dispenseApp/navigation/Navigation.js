import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ManagemMdicine from './ManagemMdicineNaviigation';
const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const [isLogin, setIslogin] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLogin ? (
          <Stack.Screen
            name="AuthNavigation"
            component={AuthNavigation}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="ManagemMdicine"
            component={ManagemMdicine}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
