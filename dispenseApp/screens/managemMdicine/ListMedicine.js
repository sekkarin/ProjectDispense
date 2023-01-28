/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Header, Icon, Text} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
// TODO: เลือกวัน
// [] เแสดงช่วงเวลา
const ListMedicine = ({navigation}) => {
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);

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
        centerComponent={{
          text: 'รายการยา',
          style: styles.heading,
        }}
      />
      {/* TODO: เลือกวัน */}
      <View style={styles.bodyForm}>
        <LinearGradient
          style={styles.LinearGratitleForm}
          colors={['#06A8ED', '#09E9F8']}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.textTitleForm}>24/01/2023</Text>
            <Icon
              name="calendar"
              size={35}
              color="#fff"
              type="antdesign"
              onPress={() => {
                setShow(state => !state);
              }}
            />
          </View>
        </LinearGradient>
      </View>

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
});
