/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {Button, Header, Icon, Text, Image} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import {getMedRecord} from '../../util/medicine';
import {AuthContext} from '../../store/auth-context';
import {useLayoutEffect} from 'react';
// TODO: เลือกวัน
// [] เแสดงช่วงเวลา
const inserdata = ({
  meddicine,
  setNight,
  setMorning,
  setAfternoon,
  setEvening,
}) => {
  if (meddicine.medRecNotiTime === 'ก่อนนอน') {
    setNight(currdata => [meddicine, ...currdata]);
  } else if (meddicine.medRecNotiTime === 'เช้า') {
    setMorning(currdata => [meddicine, ...currdata]);
  } else if (meddicine.medRecNotiTime === 'กลางวัน') {
    setAfternoon(currdata => [meddicine, ...currdata]);
  } else if (meddicine.medRecNotiTime === 'เย็น') {
    setEvening(currdata => [meddicine, ...currdata]);
  }
};
const ListMedicine = ({navigation}) => {
  const [isFetch, setIsFecth] = React.useState(false);
  const [date, setDate] = React.useState('');
  const [show, setShow] = React.useState(false);
  const [medicines, setMedicines] = React.useState([]);
  const [morning, setMorning] = React.useState([]);
  const [afternoon, setAfternoon] = React.useState([]);
  const [evening, setEvening] = React.useState([]);
  const [night, setNight] = React.useState([]);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    var _date = moment().utcOffset('+07:00').format('DD-MM-YYYY');

    setDate(_date);
  }, []);
  useEffect(() => {
    async function getmed() {
      setIsFecth(true);
      const user_id = authCtx.USERID;
      const respone = await getMedRecord();
      // console.log('respone', respone.data);
      const medreds = respone.data;
      for (const key in medreds) {
        if (Object.hasOwnProperty.call(medreds, key)) {
          const element = medreds[key];
          if (element.user_id === user_id) {
            // element.medRec_id = key;
            Object.assign(element, {medRec_id: key});
            // console.log(element);
            setMedicines(currdata => [...currdata, element]);
          }
        }
      }
      setIsFecth(false);
    }
    getmed();
  }, [authCtx.USERID]);

  useLayoutEffect(() => {
    const dateCurrent = new Date(
      date !== '' ? moment(date, 'DD/MM/YYYY').format() : Date.now(),
    ).getTime();
    const meddicineCheckDate = medicines.filter(
      medicine =>
        new Date(
          moment(medicine.medRec_startDate, 'YYYY/MM/DD').format(),
        ).getTime() <= dateCurrent &&
        new Date(
          moment(medicine.medRec_endDate, 'YYYY/MM/DD').format(),
        ).getTime() >= dateCurrent,
    );
    // FIX: rednder
    const compreNotify = () => {
      // clear data in render
      setNight([]);
      setMorning([]);
      setAfternoon([]);
      setEvening([]);
      meddicineCheckDate.forEach(meddicine => {
        inserdata({meddicine, setNight, setMorning, setAfternoon, setEvening});
      });
    };
    compreNotify();
  }, [date, medicines]);

  const pressedhandler = n => {
    // console.log(n);
    if (n === 1) {
      navigation.navigate('ListMedicine2', {
        data: morning,
        currDate: date,
      });
    } else if (n === 2) {
      navigation.navigate('ListMedicine2', {
        data: afternoon,
        currDate: date,
      });
    } else if (n === 3) {
      navigation.navigate('ListMedicine2', {
        data: evening,
        currDate: date,
      });
    } else if (n === 4) {
      navigation.navigate('ListMedicine2', {
        data: night,
        currDate: date,
      });
    }
  };
  if (isFetch) {
    return <LoadingOverlay />;
  }

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
            <Text style={styles.textTitleForm}>{date}</Text>

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
      <View style={{marginTop: 20}}>
        <View style={styles.bodyFormBox}>
          <Button
            buttonStyle={styles.LinearGratitleFormBox}
            ViewComponent={LinearGradient}
            containerStyle={{marginVertical: 20}}
            linearGradientProps={{
              colors: ['#07B5FC', '#7DE2DC'],
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}
            onPress={pressedhandler.bind(this, 1)}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/cloudy.png')}
                style={{width: 36, height: 36}}
              />
              <Text style={styles.textFormBox}>เช้า</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="pills" type="fontisto" color="#fff" size={20} />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  {'  '}
                  {morning.length} ตัวยา
                </Text>
              </View>
            </View>
          </Button>
          <Button
            buttonStyle={styles.LinearGratitleFormBox}
            ViewComponent={LinearGradient}
            containerStyle={{marginVertical: 20}}
            linearGradientProps={{
              colors: ['#07B5FC', '#7DE2DC'],
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}
            onPress={pressedhandler.bind(this, 2)}>
            <View style={{alignItems: 'center'}}>
              <Icon name="sun" type="feather" color="#fff" size={40} />
              <Text style={styles.textFormBox}>กลางวัน</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="pills" type="fontisto" color="#fff" size={20} />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  {'  '}
                  {afternoon.length} ตัวยา
                </Text>
              </View>
            </View>
          </Button>
        </View>
        <View style={styles.bodyFormBox}>
          <Button
            buttonStyle={styles.LinearGratitleFormBox}
            ViewComponent={LinearGradient}
            containerStyle={{marginVertical: 20}}
            linearGradientProps={{
              colors: ['#07B5FC', '#7DE2DC'],
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}
            onPress={pressedhandler.bind(this, 3)}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/sunrise.png')}
                style={{width: 36, height: 36}}
              />
              <Text style={styles.textFormBox}>เย็น</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="pills" type="fontisto" color="#fff" size={20} />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  {'  '}
                  {evening.length} ตัวยา
                </Text>
              </View>
            </View>
          </Button>
          <Button
            buttonStyle={styles.LinearGratitleFormBox}
            ViewComponent={LinearGradient}
            containerStyle={{marginVertical: 20}}
            linearGradientProps={{
              colors: ['#07B5FC', '#7DE2DC'],
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}
            onPress={pressedhandler.bind(this, 4)}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/moon.png')}
                style={{width: 36, height: 36}}
              />
              <Text style={styles.textFormBox}>ก่อนนอน</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="pills" type="fontisto" color="#fff" size={20} />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  {'  '}
                  {night.length} ตัวยา
                </Text>
              </View>
            </View>
          </Button>
        </View>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          display="default"
          value={new Date(moment(date, 'DD/MM/YYYY').format())}
          mode={'date'}
          is24Hour={true}
          onChange={_date => {
            setShow(false);
            setDate(moment(_date.nativeEvent.timestamp).format('DD-MM-YYYY'));
          }}
        />
      )}
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
