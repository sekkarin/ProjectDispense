/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Divider} from '@rneui/base';

const StartAppScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#00B2FF', '#26CFC5']}
      style={styles.linearGradient}>
      <Text style={styles.title}>ยินดีต้อนรับ{'\n'}แจ้งเตือนการบริโภคยา</Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/medicine.png')}
      />
      <Button
        title={'Login'}
        containerStyle={{
          width: 200,
          height: 60,
          // marginTop: '90%',
        }}
        buttonStyle={{
          backgroundColor: 'white',
          borderColor: '#35C5F5',
          borderWidth: 1,
          borderRadius: 25,
          paddingVertical: 10,
        }}
        titleStyle={{
          color: '#35C5F5',
        }}
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}
      />
      <Divider
        style={{
          backgroundColor: 'white',
          width: '50%',
          height: 1,
          marginBottom: 10,
        }}
      />
      <Button
        title={'Register'}
        containerStyle={{
          width: 200,
          height: 60,
          // marginTop: '90%',
        }}
        buttonStyle={{
          backgroundColor: 'white',
          borderColor: '#35C5F5',
          borderWidth: 1,
          borderRadius: 25,
          paddingVertical: 10,
        }}
        titleStyle={{
          color: '#35C5F5',
        }}
        onPress={() => {
          // navigation.navigate('StartAppScreen');
        }}
      />
    </LinearGradient>
  );
};

export default StartAppScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    
  },
  image: {
    width: 192,
    height: 192,
    marginVertical:50
  },
  divider: {
    height: 2,
    backgroundColor: 'black',
  },
});
