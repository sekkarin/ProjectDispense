<<<<<<< HEAD
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, CheckBox, Header, Icon} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import {Input, ListItem} from '@rneui/themed';
import DateTimePicker from '@react-native-community/datetimepicker';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, Icon} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
>>>>>>> parent of 6880d4c (Edit)
=======
import {Shadow} from 'react-native-shadow-2';
>>>>>>> f1b93e2 (Revert "edit chang button")
=======
import {Shadow} from 'react-native-shadow-2';
>>>>>>> 246cc6749ac1b6f6e5b7d1303efea0a5e3ebece6
// TODO: เลือกวัน
// [] เแสดงช่วงเวลา
const ListMedicine = ({navigation}) => {
  return (
    <View>
      <Header
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
        containerStyle={{
          height: 90,
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
<<<<<<< HEAD
        centerComponent={{
          text: 'แจ้งเตือนการบริโภคยา',
          style: styles.heading,
        }}
=======
        centerComponent={{text: 'แจ้งเตือนการบริโภคยา', style: styles.heading}}
>>>>>>> parent of 6880d4c (Edit)
      />
      {/* TODO: เลือกวัน */}
      <Text>ListMedicine</Text>
      {/* TODO: แสดงช่วงเวลา */}
      <View style={styles.bodyFormBox}>
        <LinearGradient
          style={styles.LinearGratitleFormBox}
          colors={['#06A8ED', '#09E9F8']}>
          <View style={{alignItems: 'center'}}>
            <Icon name="partly-sunny" type="Ionicons" color="#fff" size={32} />
            <Text style={styles.textFormBox}>เช้า</Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Icon name="pills" type="fontisto" color="#fff" size={20} />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                {'  '}1 ตัวยา
              </Text>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          style={styles.LinearGratitleFormBox}
          colors={['#06A8ED', '#09E9F8']}>
          <View style={{alignItems: 'center'}}>
            <Icon name="sun" type="feather" color="#fff" size={32} />
            <Text style={styles.textFormBox}>เช้า</Text>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.bodyFormBox}>
        <LinearGradient
          style={styles.LinearGratitleFormBox}
          colors={['#06A8ED', '#09E9F8']}>
          <View style={{alignItems: 'center'}}>
            <Icon name="partly-sunny" type="Ionicons" color="#fff" size={32} />
            <Text style={styles.textFormBox}>เช้า</Text>
          </View>
        </LinearGradient>
        <LinearGradient
          style={styles.LinearGratitleFormBox}
          colors={['#06A8ED', '#09E9F8']}>
          <View style={{alignItems: 'center'}}>
            <Icon name="sun" type="feather" color="#fff" size={32} />
            <Text style={styles.textFormBox}>เช้า</Text>
          </View>
        </LinearGradient>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          display="default"
          value={date}
          mode={'date'}
          is24Hour={true}
          onChange={date => {
            setShow(false);
          }}
        />
      )}
    </View>
  );
};

export default ListMedicine;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 14,
  },
<<<<<<< HEAD
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
    marginTop: 10,
    padding: 10,
    width: '95%',
    borderRadius: 10,
  },
  textDate: {
    opacity: 0.5,
  },
  LinearGratitleFormBox: {
    marginStart: 20,
    marginEnd: 20,
    marginVertical: 20,
    padding: 10,
    width: '40%',
    height: 200,
  },
  bodyFormBox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textFormBox: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
=======
>>>>>>> parent of 6880d4c (Edit)
});
