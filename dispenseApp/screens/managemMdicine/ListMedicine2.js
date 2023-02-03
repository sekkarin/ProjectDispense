/* eslint-disable react-native/no-inline-styles */
import {Alert, FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Header, Icon, Image} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import EmptyData from '../../components/UI/EmptyData';
import {getMedicineById, getTimeMedicine} from '../../util/medicine';
import moment from 'moment';
import PushNotification from 'react-native-push-notification';
// TODO: แจ้งเตือน ตามระยะเวลา

const ListMedicine2 = ({navigation, route}) => {
  const data = route.params.data;
  const currDate = route.params.currDate;
  console.log('currDate', currDate);
  const [medicines, setMedicines] = useState([]);
  const [showTime, setShowTime] = useState(false);
  const [date, setDate] = useState(
    new Date(moment(currDate, 'DD/MM/YYYY').format()),
  );
  useEffect(() => {
    async function getMed() {
      data.forEach(async element => {
        const res = await getMedicineById(element.med_id);
        setMedicines(currdate => [
          ...currdate,
          {med: res.data, medRec: element},
        ]);
      });
    }
    getMed();
  }, [data]);
  return (
    <View>
      <Header
        leftComponent={
          <Button
            onPress={() => {
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
          text: 'รายการยา',
          style: styles.heading,
        }}
      />

      {/* TODO: เวลา */}
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
            <Text style={styles.textTitleForm}>ตั้งเวลาแจ้งเตือน</Text>
            <Icon
              name="timer"
              size={35}
              color="#fff"
              type="MaterialCommunityIcons"
              onPress={() => {
                // <DateTimePicker display="default" />;
                setShowTime(state => !state);
              }}
            />
          </View>
        </LinearGradient>
      </View>

      {data.length !== 0 ? (
        <FlatList
          data={medicines}
          style={{
            height: '80%',
            marginTop: 10,
            borderRadius: 5,
            marginBottom: 10,
          }}
          renderItem={({item}) => {
            console.log(item);
            return (
              <Pressable
                style={{alignItems: 'center', marginVertical: 10}}
                onPress={() => {
                  navigation.navigate('DataMedicine', {
                    med_id: item.medRec.med_id,
                    medRec_getTime: item.medRec.medRec_getTime,
                    medRec_id: item.medRec.medRec_id,
                  });
                }}>
                <View
                  style={[
                    styles.gardContainer,
                    {
                      backgroundColor:
                        item.medRec.medRec_getTime !== ''
                          ? '#CBFFD0'
                          : '#F9B9B9',
                    },
                  ]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 20,
                      marginLeft: 15,
                    }}>
                    <Image
                      source={{
                        uri:
                          item.medRec.image_url === ''
                            ? 'https://img.freepik.com/free-vector/isometric-gastroenterology-composition-with-view-medication-with-tubes-pills-illustration_1284-63536.jpg?w=2000'
                            : item.medRec.image_url,
                      }}
                      style={{width: 80, height: 80, borderRadius: 180}}
                    />
                    {/* test dict */}
                    <View
                      style={{
                        flexDirection: 'column',
                        marginHorizontal: 50,
                      }}>
                      <Text style={styles.title}>{item.med.Med_name}</Text>
                      <Text style={{overflow: 'hidden'}}>
                        จำนวนที่ต้องรับ : {item.medRec.medRec_dose} เม็ด
                      </Text>
                    </View>
                  </View>
                  {/* Button */}
                  <View
                    style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Button
                      title={'รับยา'}
                      disabled={
                        item.medRec.medRec_getTime !== '' ? true : false
                      }
                      color="success"
                      containerStyle={{width: 80}}
                      buttonStyle={{height: 40, borderRadius: 5, marginTop: 10}}
                      onPress={async () => {
                        await getTimeMedicine(item.medRec.medRec_id, {
                          medRec_getTime: new Date(Date.now()),
                        });
                        Alert.alert('รับยาเรียบร้อยแล้ว');
                        navigation.goBack();
                      }}
                    />
                    <Button
                      title={'ลบ'}
                      color="error"
                      containerStyle={{width: 80}}
                      buttonStyle={{
                        height: 40,
                        borderRadius: 5,
                        marginHorizontal: 10,
                        marginTop: 10,
                      }}
                    />
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
      ) : (
        // <Text>Not list</Text>
        <EmptyData message={'ไม่มีรายการ'} />
      )}
      {showTime && (
        <DateTimePicker
          value={date}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={_date => {
            setShowTime(false);
            PushNotification.localNotificationSchedule({
              channelId: 'idtest',
              message: 'My Notification Message', // (required)
              date: new Date(_date.nativeEvent.timestamp), // in 60 secs
              actions: ['ReplyInput'],
              reply_placeholder_text: 'Write your response...', // (required)
              reply_button_text: 'Reply',
              playSound: true, // (optional) default: true
              soundName: 'default',
              color: 'red', // (optional) default: system default
              vibrate: true, // (optional) default: true
              vibration: 1000, // vibration length in milliseconds, ignored if vibrate=false, default: 1000// (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
              // ignoreInForeground: true,
            });
            Alert.alert('ตั้งเวลาเรียบร้อย');
          }}
        />
      )}
    </View>
  );
};

export default ListMedicine2;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: '#00B2FF',
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  gardContainer: {
    width: '85%',
    height: 160,

    borderRadius: 5,
  },
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
    flex: 1,
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
