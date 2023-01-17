/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, ImageBackground, View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
const WellcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.image}
      source={require('../../assets/images/GetStarted.png')}>
      <View style={styles.container}>
        <Button
          style={styles.button}
          title={'Start'}
          containerStyle={{
            width: 200,
            height: 60,
            marginTop: '90%',
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
            navigation.navigate('StartAppScreen');
          }}
        />
      </View>
    </ImageBackground>
    // <Text>Hello</Text>
  );
};

export default WellcomeScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  container: {
    // flex: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    // width:'80%'
  },
});
