<<<<<<< HEAD
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Header, Icon, Text} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
=======
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, Icon} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
>>>>>>> parent of 6880d4c (Edit)
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
          text: 'รายการยา',
          style: styles.heading,
        }}
=======
        centerComponent={{text: 'แจ้งเตือนการบริโภคยา', style: styles.heading}}
>>>>>>> parent of 6880d4c (Edit)
      />
      {/* TODO: เลือกวัน */}
      <Text>ListMedicine</Text>
      {/* TODO: แสดงช่วงเวลา */}
      <View />
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
    padding: 10,
    width: 150,
    height: 200,
    justifyContent: 'center',
  },
  bodyFormBox: {
    marginStart: 30,
    marginEnd: 30,
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
