/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, Text} from 'react-native';
import React, {useContext, useState} from 'react';
// import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from '@rneui/themed';
import {Button, Header} from '@rneui/base';
import {AuthContext} from '../../store/auth-context';
import PushNotification from 'react-native-push-notification';
const MainScreen = () => {
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);
  return (
    <View>
      {/* Header Bar  */}
      <Header
        containerStyle={{
          height: 110,
          borderRadius: 18,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#00B2FF', '#26CFC5'],
          start: {x: 0, y: 2},
          end: {x: 2, y: 0},
        }}
        centerComponent={{text: 'แจ้งเตือนการบริโภคยา', style: styles.heading}}
        rightComponent={
          <Button
            onPress={() => {
              authCtx.logout();
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
            fontWeight: 'bold',
          }}
          containerStyle={{
            borderColor: '#76DFDE',
            borderWidth: 1,
            width: '90%',
            borderRadius: 10,
            marginTop: 30,
          }}
          buttonStyle={{backgroundColor: 'white'}}
          // iconRight={true}
          icon={() => {
            return (
              <Icon
                name="plus-circle"
                type="feather"
                color="#76DFDE"
                size={56}
                style={{marginHorizontal: 10}}
              />
            );
          }}
          onPress={() => {
            navigation.navigate('AddMedicine');
          }}
        />
        <Button
          title={'รายการยา'}
          size="lg"
          titleStyle={{
            color: '#76DFDE',
            fontSize: 36,
            fontWeight: 'bold',
          }}
          containerStyle={{
            borderColor: '#76DFDE',

            borderWidth: 1,
            width: '90%',
            borderRadius: 10,
            marginTop: 10,
          }}
          buttonStyle={{
            backgroundColor: 'white',
            borderLeftWidth: 5,
          }}
          iconRight={true}
          icon={() => {
            return (
              <Icon
                name="test-bottle"
                type="fontisto"
                color="#76DFDE"
                size={56}
                style={{marginHorizontal: 10}}
                // containerStyle={{borderLeftWidth:}}
              />
            );
          }}
          onPress={() => {
            navigation.navigate('ListMedicine');
          }}
        />
        {/* <Button
          title={'ทดสอบการแจ้งตอน'}
          size="lg"
          titleStyle={{
            color: '#76DFDE',
            fontSize: 24,
            fontWeight: 'bold',
          }}
          containerStyle={{
            borderColor: '#76DFDE',

            borderWidth: 1,
            width: '90%',
            borderRadius: 10,
            marginTop: 10,
          }}
          buttonStyle={{
            backgroundColor: 'white',
            borderLeftWidth: 5,
          }}
          iconRight={true}
          icon={() => {
            return (
              <Icon
                name="test-bottle"
                type="fontisto"
                color="#76DFDE"
                size={56}
                style={{marginHorizontal: 10}}
                // containerStyle={{borderLeftWidth:}}
              />
            );
          }}
          onPress={() => {
            console.log('pressed', new Date(Date.now() + 60 * 1000)), // in 60 secs);
              PushNotification.localNotificationSchedule({
                channelId: 'idtest',
                message: 'My Notification Message', // (required)
                date: new Date(Date.now() + 10 * 1000), // in 60 secs
                actions: ['ReplyInput'],
                reply_placeholder_text: 'Write your response...', // (required)
                reply_button_text: 'Reply',
                playSound: true, // (optional) default: true
                soundName: 'default',
                color: 'red', // (optional) default: system default
                vibrate: true, // (optional) default: true
                vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000// (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                ignoreInForeground: true,
              });
          }}
        /> */}
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
