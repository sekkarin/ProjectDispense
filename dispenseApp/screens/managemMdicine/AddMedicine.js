/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, CheckBox, Header, Icon} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import {Input, ListItem} from '@rneui/themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Shadow} from 'react-native-shadow-2';

// TODO:
// [x] add forn etc..
// [x] add image
// FIXME:

const AddMedicine = ({navigation}) => {
  const [selectedIndex, setIndex] = React.useState(0);
  const [checked, setChecked] = React.useState(true);
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);

  const toggleCheckbox = () => setChecked(!checked);
  return (
    <Shadow
      containerStyle={{backgroundColor: 'transparent'}}
      style={{borderRadius: 10, backgroundColor: 'transparent'}}>
      <View>
        <Header
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
            <Input placeholder="ชื่อยา" />
            <Input placeholder="ประเภทยา" />
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
                    checked={checked}
                    onPress={toggleCheckbox}
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checkedColor="blue"
                    containerStyle={styles.checkbox}
                    title={'เช้า'}
                    textStyle={styles.textlable}
                  />
                  <CheckBox
                    checked={checked}
                    onPress={toggleCheckbox}
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
                    checked={checked}
                    onPress={toggleCheckbox}
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checkedColor="blue"
                    containerStyle={styles.checkbox}
                    title={'กลางวัน'}
                    textStyle={styles.textlable}
                  />
                  <CheckBox
                    checked={checked}
                    onPress={toggleCheckbox}
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
                  setShow(state => !state);
                }}
              />
              <Text style={styles.textDate}>{date.toISOString()}</Text>
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
                  setShow(state => !state);
                }}
              />
              <Text style={styles.textDate}>{date.toISOString()}</Text>
            </View>
          </View>
          {/* TODO: เพิ่มรูป */}
          <View style={{width: '20%'}}>
            <Button
              title={'เพิ่มรูป'}
              ViewComponent={LinearGradient}
              containerStyle={{borderRadius: 20, marginVertical: 10}}
              linearGradientProps={{
                colors: ['#07B5FC', '#7DE2DC'],
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}
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
              onPress={() => {
                navigation.navigate('MainScreen');
              }}
            />
          </View>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            display="default"
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={date => {
              console.log(date);
              setShow(false);
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
