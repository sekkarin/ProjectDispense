/* eslint-disable react-native/no-inline-styles */
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Header, Icon, Image} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import EmptyData from '../../components/UI/EmptyData';
import {getMedicineById, getTimeMedicine} from '../../util/medicine';
import moment from 'moment';
// TODO: เลือกวัน
// [] เแสดงช่วงเวลา
const ListMedicine2 = ({navigation, route}) => {
  const data = route.params.data;
  const currDate = route.params.currDate;
  console.log('currDate', currDate);
  const [medicines, setMedicines] = useState([]);
  const [showTime, setShowTime] = useState(false);
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
            <Text style={styles.textTitleForm}>เช้า</Text>
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
                  navigation.navigate('DataMedicine');
                }}>
                <View style={styles.gardContainer}>
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
                      style={{flexDirection: 'column', marginHorizontal: 50}}>
                      <Text style={styles.title}>{item.med.Med_name}</Text>
                      <Text>
                        จำนวนที่ต้องรับ : {item.medRec.medRec_dose} เม็ด
                      </Text>
                    </View>
                  </View>
                  {/* Button */}
                  <View
                    style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Button
                      title={'รับยา'}
                      color="success"
                      containerStyle={{width: 80}}
                      buttonStyle={{height: 40, borderRadius: 5, marginTop: 10}}
                      onPress={() => {
                        getTimeMedicine(item.medRec_id, {
                          medRec_getTime: moment(Date, 'YYYY/MM/DD').format(),
                        });
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
          value={new Date(Date.now())}
          mode="time"
          display="clock"
          onChange={() => {
            setShowTime(false);
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
  },
  gardContainer: {
    width: '85%',
    height: 160,
    backgroundColor: '#F9B9B9',
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
