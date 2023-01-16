import { StyleSheet, ImageBackground, View } from 'react-native';
import React from 'react';
import { Button } from '@rneui/themed';
const WellcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.image}
      source={require('../../assets/images/GetStarted.png')}>
      <View style={styles.container}>
        <Button
          title={'React Native Elements'}
          containerStyle={{
            width: 200,
            height: 60,
            borderBottomEndRadius:10,
            margin:10
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
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  container: {
    // flex: 1,
    
  },
});
