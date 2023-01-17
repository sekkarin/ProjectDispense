/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from '@rneui/themed';
import { Button, Header } from '@rneui/base';

const MainScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    title: 'แจ้งเตือนการบริโภคยา',
    headerRight: () => {
      return (
        <Button
          onPress={() => {
            console.log('HelLo Leave');
          }}
          buttonStyle={{
            backgroundColor: 'rgba(52, 52, 52, 0.0)',
          }}>
          <Icon name="logout" type="materialIcons" color="white" size={32} />
        </Button>
      );
    },
  });
  return (
    <>
      <Header
      containerStyle={{height:100}}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#00B2FF', '#26CFC5'],
          start: { x: 1, y: 0 },
          end: { x: 1, y: 0.5 },
        }}
      />
    </>

  );
};

export default MainScreen;

const styles = StyleSheet.create({});
