/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, Icon, Image} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
// TODO: เลือกวัน
// [] เแสดงช่วงเวลา
const ListMedicine2 = ({navigation}) => {
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
            <Text style={styles.textTitleForm}>เช้า</Text>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.bodyForm}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
              marginVertical: 10,
            }}>
            เช้า เวลาที่ต้องรับยา :{' '}
          </Text>
          <LinearGradient
            style={{marginTop: 10, padding: 10, width: '20%', borderRadius: 10}}
            colors={['#06A8ED', '#09E9F8']}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.textTitleForm}>08.00</Text>
            </View>
          </LinearGradient>
        </View>
      </View>
      <View style={{justifyContent: 'flex-end', alignItems: 'flex-start'}}>
        <Button
          buttonStyle={styles.ButtonFormBox}
          onPress={() => {
            navigation.navigate('DataMedicine');
          }}>
          <View>
            <View Style={{paddingEnd: 90}}>
              <Image
                source={{
                  uri: 'https://medthai.com/wp-content/uploads/2016/11/%E0%B8%8B%E0%B8%B5%E0%B8%A1%E0%B8%AD%E0%B8%A5.jpg',
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}
              />
            </View>
            <View Style={styles.Position}>
              <Icon
                name="squared-cross"
                type="entypo"
                color="#FF6633"
                size={40}
              />
            </View>
          </View>
        </Button>
      </View>
      <Pressable
        onPress={() => {
          console.log('pressed');
        }}>
        <Text>Hello</Text>
      </Pressable>
    </View>
  );
};

export default ListMedicine2;

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
  Position: {},
});
