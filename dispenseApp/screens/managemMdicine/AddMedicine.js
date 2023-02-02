/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useContext} from 'react';
import {Button, CheckBox, Header, Icon, Image} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import {Input, ListItem} from '@rneui/themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Shadow} from 'react-native-shadow-2';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import {createMedicine, createMedRecord} from '../../util/medicine';
import {AuthContext} from '../../store/auth-context';

// TODO:
// [] add forn etc..
// [] add image
// FIXME:

const AddMedicine = ({navigation}) => {
  const [isFetch, setIsFecth] = React.useState(false);
  const [selectedIndex, setIndex] = React.useState(0);
  const [checked, setChecked] = React.useState(true);
  const [date, setDate] = React.useState(new Date());
  const [medRecStartDate, setMedRecStartDate] = React.useState('-');
  const [medRecEndDate, setMedRecEndDate] = React.useState('-');
  const [showStart, setShowStart] = React.useState(false);
  const [showEnd, setShowEnd] = React.useState(false);
  const [medName, setMedName] = React.useState('');
  const [medType, setMedType] = React.useState('');
  const [image, setImage] = React.useState('');
  const [medRecDose, setMedRecDose] = React.useState('');
  const [medRecNotiTime, setMedRecNotiTime] = React.useState(0); // ช่วงเวลาที่ผู้ต้องรับยา
  const authCtx = useContext(AuthContext);

  const sumithander = async () => {
    let _medRec_BefAft = '';
    let _medRecNotiTime = '';
    switch (selectedIndex) {
      case 0:
        _medRec_BefAft = 'ก่อนอาหาร';
        break;
      case 1:
        _medRec_BefAft = 'หลังอาหาร';
        break;
    }
    switch (medRecNotiTime) {
      case 0:
        _medRecNotiTime = 'เช้า';
        break;
      case 1:
        _medRecNotiTime = 'เย็น';
        break;
      case 2:
        _medRecNotiTime = 'กลางวัน';
        break;
      case 3:
        _medRecNotiTime = 'ก่อนนอน';
        break;
    }
    setIsFecth(true);
    const meddicine = await createMedicine({
      Med_name: medName || 'ไม่มีข้อมูล',
      Med_type: medType || 'ไม่มีข้อมูล',
    });
    // console.log(meddicine.data);
    await createMedRecord({
      medRec_BefAft: _medRec_BefAft,
      medRecNotiTime: _medRecNotiTime,
      medRec_startDate: medRecStartDate,
      medRec_endDate: medRecEndDate,
      medRec_dose: medRecDose,
      user_id: authCtx.USERID,
      med_id: meddicine.data.name,
      image_url: image,
    });

    setIsFecth(false);
    Alert.alert('เพิ่มข้อมูลสำเสร็จ');
    navigation.navigate('MainScreen');
  };
  if (isFetch) {
    return <LoadingOverlay />;
  }
  // console.log(authCtx.USERID);
  return (
    <Shadow
      containerStyle={{backgroundColor: 'transparent'}}
      style={{borderRadius: 10, backgroundColor: 'transparent'}}>
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
            text: 'เพิ่มยา',
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
          {/* TODO: ระยะเวลา */}
          {/* ช่วงเวลา */}
          <View>
            <Input placeholder="ชื่อยา" onChangeText={setMedName} />
            <Input placeholder="ประเภทยา" onChangeText={setMedType} />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
              }}>
              <Text style={styles.textlable}>ช่วงเวลา</Text>
              <CheckBox
                containerStyle={{backgroundColor: 'rgba(52, 52, 52, 0.0)'}}
                checked={selectedIndex === 0}
                onPress={() => setIndex(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
              <Text style={styles.textlable}>ก่อนอาหาร</Text>
              <CheckBox
                containerStyle={{backgroundColor: 'rgba(52, 52, 52, 0.0)'}}
                // style={{backgroundColor:'rgba(52, 52, 52, 0.0)'}}
                checked={selectedIndex === 1}
                onPress={() => setIndex(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
              <Text style={styles.textlable}>หลังอาหาร</Text>
            </View>
          </View>
          {/*end ช่วงเวลา */}
          {/* TODO: ช่วงเวลา */}
          {/* ระยะเวลา */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.textlable}>ระยะเวลา</Text>
            <View style={{flexDirection: 'column'}}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    marginHorizontal: 5,
                  }}>
                  <CheckBox
                    checked={medRecNotiTime === 0}
                    onPress={() => setMedRecNotiTime(0)}
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checkedColor="blue"
                    containerStyle={styles.checkbox}
                    title={'เช้า'}
                    textStyle={styles.textlable}
                  />
                  <CheckBox
                    checked={medRecNotiTime === 1}
                    onPress={() => setMedRecNotiTime(1)}
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checkedColor="blue"
                    containerStyle={styles.checkbox}
                    title={'เย็น'}
                    textStyle={styles.textlable}
                  />
                </View>
                <View>
                  <CheckBox
                    checked={medRecNotiTime === 2}
                    onPress={() => setMedRecNotiTime(2)}
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checkedColor="blue"
                    containerStyle={styles.checkbox}
                    title={'กลางวัน'}
                    textStyle={styles.textlable}
                  />
                  <CheckBox
                    checked={medRecNotiTime === 3}
                    onPress={() => setMedRecNotiTime(3)}
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checkedColor="blue"
                    containerStyle={styles.checkbox}
                    title={'ก่อนนอน'}
                    textStyle={styles.textlable}
                  />
                </View>
              </View>
            </View>
          </View>
          {/* จบระยะเวลา */}
          {/* TODO: จำนวนเม็ด */}
          <View>
            <Input
              placeholder="จำนวนยาที่ได้รับต่อครั้ง"
              keyboardType="number-pad"
              onChangeText={setMedRecDose}
            />
          </View>
          {/* TODO: วันที่รับยา */}
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.textlable}>วันที่เริ่มต้นบริหารยา</Text>
              <Icon
                containerStyle={{marginHorizontal: 5}}
                name="calendar"
                size={35}
                color="#76DFDE"
                type="antdesign"
                onPress={() => {
                  setShowStart(state => !state);
                }}
              />
              <Text style={styles.textDate}>{medRecStartDate}</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.textlable}>วันที่สิ้นสุดบริหารยา</Text>
              <Icon
                containerStyle={{marginHorizontal: 5}}
                name="calendar"
                size={35}
                color="#76DFDE"
                type="antdesign"
                onPress={() => {
                  setShowEnd(state => !state);
                }}
              />
              <Text style={styles.textDate}>{medRecEndDate}</Text>
            </View>
          </View>
          {/* TODO: เพิ่มรูป */}
          <View
            style={{
              width: '80%',
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Input
              containerStyle={{width: '50%'}}
              placeholder="ลิงค์รูป"
              onChangeText={setImage}
            />
            <Image
              source={{uri: image ? image : null}}
              style={{width: 80, height: 80, marginLeft: 10}}
            />
          </View>
          {/* TODO: บันทึกยา */}
          <View>
            <Button
              title={'บันทึกข้อมูล'}
              ViewComponent={LinearGradient}
              containerStyle={{borderRadius: 20, marginVertical: 20}}
              linearGradientProps={{
                colors: ['#07B5FC', '#7DE2DC'],
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}
              onPress={sumithander}
            />
          </View>
        </View>
        {showStart && (
          <DateTimePicker
            testID="dateTimePicker"
            display="default"
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={_date => {
              // console.log(date);
              setShowStart(false);
              setMedRecStartDate(
                new Date(_date.nativeEvent.timestamp).toISOString(),
              );
            }}
          />
        )}
        {showEnd && (
          <DateTimePicker
            testID="dateTimePicker"
            display="default"
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={_date => {
              setShowEnd(false);
              setMedRecEndDate(
                new Date(_date.nativeEvent.timestamp).toISOString(),
              );
            }}
          />
        )}
      </View>
    </Shadow>
  );
};

export default AddMedicine;

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
});
