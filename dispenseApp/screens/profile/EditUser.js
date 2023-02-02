/* eslint-disable react-native/no-inline-styles */
import {Alert, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Header, Icon, Text} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '@rneui/themed';

// TODO:
// [] add forn etc..
// [] add image
// FIXME:

const EditUser = ({navigation}) => {
  return (
    <View>
      <Header
        containerStyle={{
          height: 120,
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
        centerComponent={{
          text: 'แก้ไขข้อมูลส่วนตัว',
          style: styles.heading,
        }}
        leftComponent={
          <Button
            onPress={() => {
              // console.log('HelLo Leave');
              navigation.goBack();
            }}
            buttonStyle={{
              backgroundColor: 'rgba(52, 52, 52, 0.0)',
            }}>
            <Icon name="arrowleft" type="antdesign" color="white" size={32} />
          </Button>
        }
      />
      <View style={styles.container}>
        <View style={styles.bodyForm}>
          <LinearGradient
            style={styles.LinearGratitleForm}
            colors={['#06A8ED', '#09E9F8']}>
            <Text style={styles.textTitleForm}>ข้อมูลส่วนตัว</Text>
          </LinearGradient>
        </View>
        {/* TODO: ระยะเวลา */}
        {/* ช่วงเวลา */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Icon
            name="person-outline"
            type="Ionicons"
            color="#35C5F5"
            size={32}
          />
          <Input placeholder="ชื่อ - นามสกุล" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingRight: 10,
          }}>
          <Icon
            name="show-chart"
            type="MaterialIcons"
            color="#35C5F5"
            size={32}
          />
          <Input placeholder="อายุ" />
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Icon
            name="line-weight"
            type="MaterialIcons"
            color="#35C5F5"
            size={32}
          />
          <Input placeholder="น้ำหนัก" />
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Icon
            name="heartbeat-alt"
            type="fontisto"
            color="#35C5F5"
            size={32}
          />
          <Input placeholder="โรคประจำตัว" />
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Icon name="pills" type="fontisto" color="#35C5F5" size={32} />
          <Input placeholder="ประวัติแพ้ยา" />
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
            }}
          />
        </View>
        {/* TODO: บันทึกยา */}
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Button
              buttonStyle={{
                borderRadius: 20,
                marginVertical: 20,
                width: 120,
                height: 50,
              }}
              title={'ยกเลิก'}
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ['#07B5FC', '#7DE2DC'],
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <Button
              title={'บันทึก'}
              ViewComponent={LinearGradient}
              buttonStyle={{
                borderRadius: 20,
                marginVertical: 20,
                width: 120,
                height: 50,
              }}
              linearGradientProps={{
                colors: ['#07B5FC', '#7DE2DC'],
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}
              onPress={() => {
                Alert.alert('อัพเดทข้อมูลสำเร็จ');
                navigation.goBack();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditUser;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#00B2FF',
    borderRadius: 10,
    marginVertical: 10,
    // flex: 1
  },
  textlable: {
    fontSize: 16,
    color: '#00B2FF',
    fontWeight: 'bold',
  },
  checkbox: {
    backgroundColor: 'transparent',
  },
  textDate: {
    opacity: 0.5,
  },
  heading: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 14,
  },
  textTitleForm: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  LinearGratitleForm: {
    padding: 10,
    width: '70%',
    marginTop: 20,
  },
  bodyForm: {
    marginTop: 0,
    marginLeft: -10,
  },
});
