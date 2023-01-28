/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, Icon, Image} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Input} from '@rneui/themed';
// TODO: เลือกวัน
// [] เแสดงช่วงเวลา
const DataMedicine = ({navigation}) => {
  return (
    <View>
      <Header
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{
          height: 130,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#fff', '#fff'],
          start: {x: 0, y: 2},
          end: {x: 2, y: 0},
        }}
        centerComponent={{
          text: 'พาราเซตามอล {\n} ( Parasetamal )',
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
            <Icon name="arrowleft" type="antdesign" color="#000" size={32} />
          </Button>
        }
      />
      <View style={styles.bodyForm}>
        <LinearGradient
          style={styles.LinearGratitleForm}
          colors={['#06A8ED', '#09E9F8']}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text style={styles.textTitleForm}>ข้อมูลยา</Text>
          </View>
        </LinearGradient>
      </View>
      <View>
        <Input placeholder="ชื่อยา" />
        <Input placeholder="ประเภทยา" />
        <Input placeholder="ช่วงเวลา" />
        <Input placeholder="ระยะเวลา" />
        <Input placeholder="จำนวนที่ได้รับ" />
        <Input placeholder="วันเริ่มต้น" />
        <Input placeholder="วันสิ้นสุด" />
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
              navigation.navigate('');
            }}
          />
          <Button
            title={'แก้ไข'}
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
              navigation.navigate('');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DataMedicine;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    color: '#00B2FF',
    fontWeight: 'bold',
    marginTop: 14,
  },
  container: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#00B2FF',
    borderRadius: 10,
    marginVertical: 10,
    // flex: 1
  },
  bodyForm: {
    alignItems: 'center',
  },
  textTitleForm: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  LinearGratitleForm: {
    padding: 10,
    width: '100%',
  },
  ButtonFormBox: {
    width: '90%',
    height: 200,
    marginTop: 20,
    marginStart: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  textFormBox: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
});
