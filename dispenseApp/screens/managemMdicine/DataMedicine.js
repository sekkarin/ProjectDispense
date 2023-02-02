/* eslint-disable react-native/no-inline-styles */
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
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
        leftComponent={
          <Button
            onPress={() => {
              // console.log('HelLo Leave');
              navigation.goBack();
            }}
            // eslint-disable-next-line react-native/no-inline-styles
            buttonStyle={{
              backgroundColor: 'rgba(52, 52, 52, 0.0)',
            }}>
            <Icon name="arrowleft" type="antdesign" color="white" size={32} />
          </Button>
        }
        // eslint-disable-next-line react-native/no-inline-styles
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
          text: 'ข้อมูลยา',
          style: styles.heading,
        }}
      />
      <ScrollView style={{height: '100%', marginTop: 10}}>
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
                navigation.goBack();
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
                Alert.alert('บันทึกข้อมูลสำเร็จ');
                navigation.goBack();
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DataMedicine;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    color: 'white',
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
