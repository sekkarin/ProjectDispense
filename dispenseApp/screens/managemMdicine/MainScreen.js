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
  return (
    <View>
      {/* Header Bar  */}
      <Header
        containerStyle={{
          height: 90,
          borderRadius: 18,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#00B2FF', '#26CFC5'],
          start: { x: 0, y: 2 },
          end: { x: 2, y: 0 },
        }}
        centerComponent={{ text: 'แจ้งเตือนการบริโภคยา', style: styles.heading }}
        rightComponent={
          <Button
            onPress={() => {
              console.log('HelLo Leave');
            }}
            buttonStyle={{
              backgroundColor: 'rgba(52, 52, 52, 0.0)',
            }}>
            <Icon name="logout" type="materialIcons" color="white" size={32} />
          </Button>
        }
      />
      {/* Content */}
      <View style={styles.container}>
        <Button
          title={'เพิ่มยา'}
          size="lg"
          titleStyle={{
            color: '#76DFDE',
            fontSize: 36,
            fontWeight: 'bold'
          }}
          containerStyle={{
            borderColor: '#76DFDE',
            borderWidth: 1,
            width: '60%',
            borderRadius: 10,
          }}
          buttonStyle={{ backgroundColor: 'white' }}
        />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 14,
  },
  container: {
    // height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
